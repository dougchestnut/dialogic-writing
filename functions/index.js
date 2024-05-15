const functions = require('firebase-functions');
const admin = require('firebase-admin');
const OpenAI = require('openai');

admin.initializeApp();
const db = admin.database();

const openai = new OpenAI({
  apiKey: functions.config().openai.key, // Ensure the functions config is set
});

exports.generateResponse = functions.database
  .ref('/chats/{userId}/{messageId}')
  .onCreate(async (snapshot, context) => {
    const message = snapshot.val();
    const userId = context.params.userId;

    if (message.sender === 'user') {
      // Fetch conversation history
      const messagesRef = db.ref(`/chats/${userId}`);
      const snapshot = await messagesRef.once('value');
      const messagesData = snapshot.val();

      // Prepare conversation history
      const messages = [];
      if (messagesData) {
        Object.values(messagesData).forEach((msg) => {
          messages.push({
            role: msg.sender === 'user' ? 'user' : 'assistant',
            content: msg.text,
          });
        });
      }

      // Add the new message to the history
      messages.push({
        role: 'user',
        content: message.text,
      });

      // Generate AI response with conversation history
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo', // Make sure you are using the correct model
        messages: messages,
      });

      const botMessage = {
        sender: 'bot',
        text: response.choices[0].message.content,
        timestamp: new Date().toISOString(),
      };

      await messagesRef.push(botMessage);
    }
  });
