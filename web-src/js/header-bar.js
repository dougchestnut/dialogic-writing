// web-src/js/header-bar.js
import { LitElement, html, css } from 'lit';
import '@material/web/button/filled-button.js';
import '@material/web/iconbutton/icon-button.js';
import './modal-auth-login.js';

class HeaderBar extends LitElement {
  static properties = {
    user: { type: Object },
  };

  constructor() {
    super();
    this.user = null;
  }

  connectedCallback() {
    super.connectedCallback();
    // Fetch user state if needed and set this.user
  }

  render() {
    return html`
      <header>
        <div class="title">
          <slot name="title">My Website</slot>
        </div>
        <div class="auth">
          <modal-auth-login @auth-success="${this.handleAuthSuccess}"></modal-auth-login>
        </div>
      </header>
    `;
  }

  handleAuthSuccess(event) {
    this.user = event.detail.user;
    this.requestUpdate();
  }

  static styles = css`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      background-color: var(--md-sys-color-primary);
      color: var(--md-sys-color-on-primary);
    }
    .title {
      font-family: var(--title-font);
      font-size: 28px;
      font-weight: 700;
    }
    .auth {
      display: flex;
      align-items: center;
    }
  `;
}

customElements.define('header-bar', HeaderBar);
