// web-src/js/chat-input.js
import { LitElement, html, css } from 'lit';
import '@material/web/button/filled-button.js';
import '@material/web/textfield/filled-text-field.js';

class ChatInput extends LitElement {
  static styles = css`
    :host {
      display: flex;
      align-items: center;
      padding: 8px;
      border-top: 1px solid var(--md-sys-color-outline);
    }
    md-filled-text-field {
      flex-grow: 1;
      margin-right: 8px;
    }
  `;

  render() {
    return html`
      <md-filled-text-field id="message-input" label="Type your message" @keydown="${this.handleKeyDown}"></md-filled-text-field>
      <md-filled-button @click="${this.sendMessage}">Send</md-filled-button>
    `;
  }

  handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.sendMessage();
    }
  }

  sendMessage() {
    const input = this.shadowRoot.getElementById('message-input');
    const event = new CustomEvent('send-message', {
      detail: { text: input.value },
    });
    this.dispatchEvent(event);
    input.value = '';
  }
}

customElements.define('chat-input', ChatInput);
