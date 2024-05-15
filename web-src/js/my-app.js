// web-src/js/my-app.js
import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';
import './header-bar.js';
import './home-page.js';
import './intro-page.js';
import './site-bookshelf.js';

class MyApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
      color: var(--my-app-text-color, black);
    }

    main {
      padding: 16px;
    }
  `;

  firstUpdated() {
    const router = new Router(this.shadowRoot.querySelector('main'));
    router.setRoutes([
      { path: '/', component: 'home-page' },
      { path: '/intro', component: 'intro-page' },
      { path: '/bookshelf', component: 'site-bookshelf' },
    ]);
  }

  render() {
    return html`
      <header-bar><span slot="title">Writing Assist</span></header-bar>
      <main></main>
    `;
  }
}

customElements.define('my-app', MyApp);
