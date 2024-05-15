// web-src/js/auth-ui-login.js
import { LitElement, html, css } from 'lit';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { firebaseConfig } from './firebase-config.js';
import '@material/web/button/filled-button.js';
import '@material/web/textfield/filled-text-field.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

class AuthUILogin extends LitElement {
  static properties = {
    user: { type: Object },
    errorMessage: { type: String },
    isSignUp: { type: Boolean }
  };

  constructor() {
    super();
    this.user = null;
    this.errorMessage = '';
    this.isSignUp = false;
  }

  firstUpdated() {
    onAuthStateChanged(auth, (user) => {
      this.user = user;
      this.requestUpdate();
    });
  }

  async handleSignUp(event) {
    event.preventDefault();
    const email = this.shadowRoot.querySelector('#sign-up-email').value;
    const password = this.shadowRoot.querySelector('#sign-up-password').value;
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      this.user = userCredential.user;
      this.dispatchEvent(new CustomEvent('auth-success', { detail: userCredential }));
    } catch (error) {
      this.errorMessage = error.message;
    }
  }

  async handleSignIn(event) {
    event.preventDefault();
    const email = this.shadowRoot.querySelector('#sign-in-email').value;
    const password = this.shadowRoot.querySelector('#sign-in-password').value;
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      this.user = userCredential.user;
      this.dispatchEvent(new CustomEvent('auth-success', { detail: userCredential }));
    } catch (error) {
      this.errorMessage = error.message;
    }
  }

  toggleForm() {
    this.isSignUp = !this.isSignUp;
    this.errorMessage = '';
  }

  render() {
    return html`
      ${this.user
        ? html`<p>Welcome, ${this.user.email}</p>`
        : html`
          <div>
            ${this.isSignUp
              ? html`
                <h2>Create Account</h2>
                <form @submit="${this.handleSignUp}">
                  <md-filled-text-field id="sign-up-email" label="Email" type="email" required></md-filled-text-field>
                  <md-filled-text-field id="sign-up-password" label="Password" type="password" required></md-filled-text-field>
                  <md-filled-button type="submit">Sign Up</md-filled-button>
                  <p>Already have an account? <a href="#" @click="${this.toggleForm}">Sign In</a></p>
                </form>
              `
              : html`
                <h2>Sign In</h2>
                <form @submit="${this.handleSignIn}">
                  <md-filled-text-field id="sign-in-email" label="Email" type="email" required></md-filled-text-field>
                  <md-filled-text-field id="sign-in-password" label="Password" type="password" required></md-filled-text-field>
                  <md-filled-button type="submit">Sign In</md-filled-button>
                  <p>Don't have an account? <a href="#" @click="${this.toggleForm}">Create Account</a></p>
                </form>
              `}
            <p>${this.errorMessage}</p>
          </div>
        `}
    `;
  }

  static styles = css`
    .auth-container {
      font-family: var(--md-ref-typeface-plain);
    }
    h2 {
      font-family: var(--title-font);
    }
    p {
      font-family: var(--md-ref-typeface-plain);
    }
  `;
}

customElements.define('auth-ui-login', AuthUILogin);
