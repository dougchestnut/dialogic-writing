// web-src/js/chat-box.js
import { LitElement, html, css } from 'lit';
import './chat-message.js';
import './chat-input.js';

class ChatBox extends LitElement {
  static properties = {
    messages: { type: Array },
  };

  constructor() {
    super();
    this.messages = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.listenForMessages();
  }

  listenForMessages() {
    // Setup Firebase listener here
    // Example: firebase.database().ref('chats/{user-id}').on('value', (snapshot) => {
    //   this.messages = snapshot.val() || [];
    // });
  }

  handleSendMessage(event) {
    const newMessage = {
      sender: 'user',
      text: event.detail.text,
      timestamp: new Date().toISOString(),
    };
    this.messages = [...this.messages, newMessage];
    this.saveMessage(newMessage);
  }

  saveMessage(message) {
    // Save the message to Firebase
    // Example: firebase.database().ref('chats/{user-id}').push(message);
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
  `;
}

customElements.define('chat-box', ChatBox);
