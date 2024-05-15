// web-src/js/intro-page.js
import { LitElement, html, css } from 'lit';

class IntroPage extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }
  `;

  render() {
    return html`
      <h1>Intro</h1>
      <p>This is the introduction page for the Writing Assistant application. We will have our initial convo here and then move onto our static content page and our multi-hatted discussion page.</p>
    `;
  }
}

customElements.define('intro-page', IntroPage);
