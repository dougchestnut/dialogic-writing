// web-src/js/chat-message.js
import { LitElement, html, css } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { marked } from 'marked';

class ChatMessage extends LitElement {
  static properties = {
    message: { type: Object },
  };

  static styles = css`
    :host {
      display: block;
      margin-bottom: 8px;
    }
    .message {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 8px;
      border-radius: 8px;
      max-width: 75%;
    }
    .user {
      background-color: var(--md-sys-color-primary-container);
      color: var(--md-sys-color-on-primary-container);
      align-self: flex-end;
      margin-left: auto;
    }
    .bot {
      background-color: var(--md-sys-color-surface-variant);
      color: var(--md-sys-color-on-surface-variant);
      align-self: flex-start;
      margin-right: auto;
    }
    .sender {
      font-weight: bold;
      margin-bottom: 4px;
    }
  `;

  render() {
    return html`
      <div class="message ${this.message.sender}">
        <div class="sender">${this.message.senderName}</div>
        <span>${unsafeHTML(marked(this.message.text))}</span>
      </div>
    `;
  }
}

customElements.define('chat-message', ChatMessage);
