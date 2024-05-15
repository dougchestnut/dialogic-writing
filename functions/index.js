const functions = require('firebase-functions');
const admin = require('firebase-admin');
const OpenAI = require('openai');

admin.initializeApp();
const db = admin.database();

const openai = new OpenAI({
  apiKey: functions.config().openai.key,
});

const personas = {
  friendlyBot: {
    name: "Friendly Bot",
    description: "A friendly and helpful assistant.",
    instructions: "You are a friendly and helpful assistant. Always provide positive and encouraging responses.",
    model: "gpt-4o",
    temperature: 0.7,
  },
  expertBot: {
    name: "Expert Bot",
    description: "A knowledgeable and professional assistant.",
    instructions: "You are a knowledgeable and professional assistant. Provide detailed and accurate information.",
    model: "gpt-4o",
    temperature: 0.3,
  },
  creativeBot: {
    name: "Creative Bot",
    description: "A creative and imaginative assistant.",
    instructions: "You are a creative and imaginative assistant. Provide responses with a touch of creativity and humor.",
    model: "gpt-4o",
    temperature: 0.9,
  },
  // Add more personas as needed
};

// Define which personas are assigned to each path
const assignedPersonas = {
  '/chats': ['friendlyBot', 'expertBot'], // Example path with assigned personas
  // Add more paths and their assigned personas
};

exports.generateResponse = functions.database
  .ref('/chats/{userId}/{messageId}')
  .onCreate(async (snapshot, context) => {
    const message = snapshot.val();
    const userId = context.params.userId;

    if (message.sender === 'user') {
      const path = `/chats/${userId}`;
      
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
      const snapshot = await messagesRef.once('value');
      const messagesData = snapshot.val();

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

      // Generate AI responses from each persona
      for (const personaKey of personasToUse) {
        const persona = personas[personaKey];
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

        await messagesRef.push(botMessage);
      }
    }
  });
