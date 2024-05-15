// web-src/js/modal-auth-login.js
import { LitElement, html, css } from 'lit';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import '@material/web/button/filled-button.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/icon/icon.js';
import './auth-ui-login.js';

import { firebaseConfig } from './firebase-config.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

class ModalAuthLogin extends LitElement {
  static properties = {
    user: { type: Object },
  };

  constructor() {
    super();
    this.user = null;
  }

  connectedCallback() {
    super.connectedCallback();
    onAuthStateChanged(auth, (user) => {
      this.user = user;
      this.requestUpdate();
    });
  }

  openDialog() {
    this.shadowRoot.querySelector('#auth-dialog').showModal();
  }

  closeDialog() {
    this.shadowRoot.querySelector('#auth-dialog').close();
  }

  async logout() {
    try {
      await signOut(auth);
      console.log('User signed out successfully');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }

  render() {
    return html`
      ${this.user
        ? html`
        <md-icon-button aria-label="User" @click="${this.logout}">
            <md-icon>account_circle</md-icon>
        </md-icon-button>`
        : html`<md-filled-button @click="${this.openDialog}">Sign In</md-filled-button>`}
      <dialog id="auth-dialog">
        <auth-ui-login @auth-success="${this.closeDialog}"></auth-ui-login>
        <md-filled-button @click="${this.closeDialog}">Close</md-filled-button>
      </dialog>
    `;
  }
}

customElements.define('modal-auth-login', ModalAuthLogin);
