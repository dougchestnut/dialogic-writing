// web-src/js/home-page.js
import { LitElement, html, css } from 'lit';

class HomePage extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }
  `;

  render() {
    return html`
      <h1>Home Page</h1>
      <p>Welcome to the Writing Assistant application.</p>
      <div><a href="/intro">Intro Convo</a></md-filled-button></div>
    `;
  }
}

customElements.define('home-page', HomePage);
