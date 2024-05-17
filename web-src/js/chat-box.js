// web-src/js/chat-box.js
import { LitElement, html, css } from 'lit';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, onValue, remove } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import '@material/web/button/filled-button.js';
import './chat-message.js';
import './chat-input.js';

// Firebase configuration
import { firebaseConfig } from './firebase-config.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

class ChatBox extends LitElement {
  static properties = {
    messages: { type: Array },
    userId: { type: String },
    path: { type: String },
  };

  constructor() {
    super();
    this.messages = [];
    this.userId = null;
    this.path = 'chats'; // Default path if not provided
  }

  connectedCallback() {
    super.connectedCallback();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.userId = user.uid;
        this.listenForMessages();
      } else {
        this.userId = null;
      }
    });
  }

  listenForMessages() {
    if (this.userId) {
      const messagesRef = ref(database, `${this.path}/${this.userId}`);
      onValue(messagesRef, (snapshot) => {
        const data = snapshot.val();
        this.messages = data ? Object.values(data) : [];
        this.scrollToBottom();
      });
    }
  }

  handleSendMessage(event) {
    const newMessage = {
      sender: 'user',
      senderName: 'You', // Adjust as needed to reflect the user's actual name
      text: event.detail.text,
      timestamp: new Date().toISOString(),
    };
    this.saveMessage(newMessage);
  }

  saveMessage(message) {
    if (this.userId) {
      const messagesRef = ref(database, `${this.path}/${this.userId}`);
      push(messagesRef, message);
    }
  }

  resetConversation() {
    if (this.userId) {
      const messagesRef = ref(database, `${this.path}/${this.userId}`);
      remove(messagesRef).then(() => {
        this.messages = [];
      });
    }
  }

  scrollToBottom() {
    const messagesContainer = this.shadowRoot.querySelector('.messages');
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }

  render() {
    return html`
      <div class="chat-box">
        <div class="messages">
          ${this.messages.map(
            (message) => html`<chat-message .message="${message}"></chat-message>`
          )}
        </div>
        <chat-input @send-message="${this.handleSendMessage}"></chat-input>
        <md-filled-button @click="${this.resetConversation}">Reset</md-filled-button>
      </div>
    `;
  }

  static styles = css`
    .chat-box {
      display: flex;
      flex-direction: column;
      height: 100%;
      max-height: 500px;
      padding: 16px;
      border: 1px solid var(--md-sys-color-outline);
      border-radius: 8px;
      background-color: var(--md-sys-color-surface);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .messages {
      flex-grow: 1;
      overflow-y: auto;
      padding-bottom: 8px;
      display: flex;
      flex-direction: column;
    }
    md-filled-button {
      margin-top: 8px;
    }
  `;
}

customElements.define('chat-box', ChatBox);
