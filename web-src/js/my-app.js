// web-src/js/my-app.js
import { LitElement, html, css } from 'lit-element';
import './header-bar.js';

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
      <header-bar><span slot="title">Writing Assist</span></header-bar>
    `;
  }
}

customElements.define('my-app', MyApp);