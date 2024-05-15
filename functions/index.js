const functions = require('firebase-functions');
const admin = require('firebase-admin');
const { Configuration, OpenAIApi } = require('openai');

admin.initializeApp();
const db = admin.database();

const configuration = new Configuration({
  apiKey: functions.config().openai.key,
});
const openai = new OpenAIApi(configuration);

exports.generateResponse = functions.database
  .ref('/chats/{userId}/{messageId}')
  .onCreate(async (snapshot, context) => {
    const message = snapshot.val();
    if (message.sender === 'user') {
      const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message.text }],
      });

      const botMessage = {
        sender: 'bot',
        text: response.data.choices[0].message.content,
        timestamp: new Date().toISOString(),
      };

      await db.ref(`/chats/${context.params.userId}`).push(botMessage);
    }
  });
