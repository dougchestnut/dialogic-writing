// web-src/js/site-bookshelf.js
import { LitElement, html, css } from 'lit';

// Replace with your Firebase function URL
const FETCH_ZOTERO_REFERENCES_URL = 'https://us-central1-dialogic-writing.cloudfunctions.net/fetchZoteroReferences';

class SiteBookshelf extends LitElement {
  static properties = {
    references: { type: Array },
  };

  constructor() {
    super();
    this.references = [];
    this.fetchReferences();
  }

  async fetchReferences() {
    try {
      const response = await fetch(FETCH_ZOTERO_REFERENCES_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch Zotero references');
      }
      const data = await response.json();
      this.references = data;
    } catch (error) {
      console.error('Error fetching Zotero references:', error);
    }
  }

  render() {
    return html`
      <div class="bookshelf">
        <h1>Bookshelf</h1>
        ${this.references.length > 0
          ? html`
              <ul>
                ${this.references.map(
                  (reference) => html`
                    <li>
                      <strong>${reference.data.title}</strong>
                      <p>${reference.data.creatorSummary}</p>
                      <p>${reference.data.date}</p>
                      <a href="${reference.links.alternate.href}" target="_blank">View in Zotero</a>
                    </li>
                  `
                )}
              </ul>
            `
          : html`<p>Loading references...</p>`}
      </div>
    `;
  }

  static styles = css`
    .bookshelf {
      padding: 16px;
    }
    h1 {
      font-size: 24px;
      margin-bottom: 16px;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      margin-bottom: 16px;
      padding: 16px;
      border: 1px solid var(--md-sys-color-outline);
      border-radius: 8px;
      background-color: var(--md-sys-color-surface);
    }
    a {
      color: var(--md-sys-color-primary);
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  `;
}

customElements.define('site-bookshelf', SiteBookshelf);
