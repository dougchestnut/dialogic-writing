// web-src/js/auth-ui-login.js
import { LitElement, html, css } from 'lit-element';
import { initializeApp } from 'firebase/app';
import { getAuth, EmailAuthProvider } from 'firebase/auth';
import * as firebaseui from 'firebaseui';

import { firebaseConfig } from './firebase-config.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

class AuthUILogin extends LitElement {
  firstUpdated() {
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: (authResult, redirectUrl) => {
          console.log('User signed in successfully:', authResult);
          this.dispatchEvent(new CustomEvent('auth-success', { detail: authResult }));
          return false; // Prevent automatic redirect
        },
        signInFailure: (error) => {
          console.error('Sign-in failure:', error);
        },
        uiShown: () => {
          console.log('FirebaseUI widget shown');
        },
      },
      signInFlow: 'popup', // Use popup for sign-in flow
      signInOptions: [
        EmailAuthProvider.PROVIDER_ID,
        // Add more sign in options as needed
      ],
      tosUrl: '<your-terms-of-service-url>',
      privacyPolicyUrl: '<your-privacy-policy-url>',
    };

    const ui = new firebaseui.auth.AuthUI(auth);
    ui.start(this.shadowRoot.querySelector('#firebaseui-auth-container'), uiConfig);

    // Check if user is already signed in
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('User already signed in:', user);
        this.dispatchEvent(new CustomEvent('auth-success', { detail: user }));
        // Additional logic for signed-in user, e.g., redirect or update UI
      }
    });
  }

  render() {
    return html`
      <div id="firebaseui-auth-container"></div>
    `;
  }
}

customElements.define('auth-ui-login', AuthUILogin);
