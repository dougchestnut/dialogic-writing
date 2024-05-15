// web-src/js/my-app.js
import { LitElement, html, css } from 'lit-element';
import './auth-ui-login.js';
import { firebaseConfig } from './firebase-config.js';

class MyApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
      color: var(--my-app-text-color, black);
    }
  `;

  render() {
    return html`
      <h1>Welcome to My App!</h1>
      <auth-ui-login></auth-ui-login>
    `;
  }
}

customElements.define('my-app', MyApp);