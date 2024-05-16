// web-src/js/site-conversation.js
import { LitElement, html, css } from 'lit';
import './chat-box.js';

class SiteConversation extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }
    h1 {
      font-family: var(--title-font);
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 16px;
    }
  `;

  render() {
    return html`
      <h1>Conversation</h1>
      <chat-box path="convos"></chat-box>
    `;
  }
}

customElements.define('site-conversation', SiteConversation);
