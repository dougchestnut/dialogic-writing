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
    if (message.sender === 'user') {
      const response = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [{ role: 'user', content: message.text }],
      });

      const botMessage = {
        sender: 'bot',
        text: response.choices[0].message.content,
        timestamp: new Date().toISOString(),
      };

      await db.ref(`/chats/${context.params.userId}`).push(botMessage);
    }
  });
