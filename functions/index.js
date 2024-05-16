const functions = require('firebase-functions');
const admin = require('firebase-admin');
const OpenAI = require('openai');
const fetch = require('node-fetch');
const cors = require('cors')({ origin: true });
const { personas, assignedPersonas } = require('./personas');

const ZOTERO_API_KEY = functions.config().zotero.api_key;
const ZOTERO_GROUP_ID = functions.config().zotero.group_id;

exports.fetchZoteroReferences = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    const url = `https://api.zotero.org/groups/${ZOTERO_GROUP_ID}/items?format=json&v=3`;
    try {
      const response = await fetch(url, {
        headers: {
          'Zotero-API-Key': ZOTERO_API_KEY,
        },
      });

      if (!response.ok) {
        throw new Error(`Error fetching Zotero references: ${response.statusText}`);
      }

      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
});

admin.initializeApp();
const db = admin.database();

const openai = new OpenAI({
  apiKey: functions.config().openai.key,
});

// Helper function to handle message responses
const handleResponse = async (snapshot, context, pathPrefix) => {
  const message = snapshot.val();
  const userId = context.params.userId;

  if (message.sender === 'user') {
    const path = `${pathPrefix}/${userId}`;

    // Determine personas to use by matching the start of the path
    let personasToUse = [];
    for (const key in assignedPersonas) {
      if (path.startsWith(key)) {
        personasToUse = assignedPersonas[key];
        break;
      }
    }

    // Fetch conversation history
    const messagesRef = db.ref(path);
    const messagesSnapshot = await messagesRef.once('value');
    const messagesData = messagesSnapshot.val();

    // Prepare conversation history
    const messages = [];
    if (messagesData) {
      Object.values(messagesData).forEach((msg) => {
        messages.push({
          role: msg.sender === 'user' ? 'user' : 'assistant',
          content: msg.text,
          senderName: msg.senderName || msg.sender, // Ensure senderName is carried over
        });
      });
    }

    // Add the new message to the history
    messages.push({
      role: 'user',
      content: message.text,
      senderName: 'You', // Add senderName for the user message
    });

    // Generate AI responses from each persona concurrently
    await Promise.all(personasToUse.map(async (personaKey) => {
      const persona = personas[personaKey];

      // Add placeholder bot message
      const placeholderRef = await messagesRef.push({
        sender: persona.name,
        senderName: persona.name, // Include the persona's name
        text: '[writing response]',
        timestamp: new Date().toISOString(),
      });

      const response = await openai.chat.completions.create({
        model: persona.model,
        messages: [
          { role: 'system', content: persona.instructions },
          ...messages,
        ],
        temperature: persona.temperature,
      });

      const botMessage = {
        sender: persona.name,
        senderName: persona.name, // Include the persona's name
        text: response.choices[0].message.content,
        timestamp: new Date().toISOString(),
      };

      // Update placeholder with actual bot message
      await placeholderRef.set(botMessage);
    }));
  }
};

exports.generateChatResponse = functions.database
  .ref('/chats/{userId}/{messageId}')
  .onCreate(async (snapshot, context) => {
    await handleResponse(snapshot, context, '/chats');
  });

exports.generateConvoResponse = functions.database
  .ref('/convos/{userId}/{messageId}')
  .onCreate(async (snapshot, context) => {
    await handleResponse(snapshot, context, '/convos');
  });
