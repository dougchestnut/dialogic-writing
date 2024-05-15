/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=window,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;class r{constructor(e,t,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const i=this.t;if(t&&void 0===e){const t=void 0!==i&&1===i.length;t&&(e=n.get(i)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&n.set(i,e))}return e}toString(){return this.cssText}}const s=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,i,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1]),e[0]);return new r(n,e,i)},o=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new r("string"==typeof e?e:e+"",void 0,i))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a;const l=window,c=l.trustedTypes,d=c?c.emptyScript:"",h=l.reactiveElementPolyfillSupport,u={toAttribute(e,t){switch(t){case Boolean:e=e?d:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},p=(e,t)=>t!==e&&(t==t||e==e),f={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:p},m="finalized";class v extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const n=this._$Ep(i,t);void 0!==n&&(this._$Ev.set(n,i),e.push(n))})),e}static createProperty(e,t=f){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){const r=this[e];this[t]=n,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||f}static finalize(){if(this.hasOwnProperty(m))return!1;this[m]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(o(e))}else void 0!==e&&t.push(o(e));return t}static _$Ep(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var i;const n=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,n)=>{t?i.adoptedStyleSheets=n.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),r=e.litNonce;void 0!==r&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)}))})(n,this.constructor.elementStyles),n}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=f){var n;const r=this.constructor._$Ep(e,i);if(void 0!==r&&!0===i.reflect){const s=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:u).toAttribute(t,i.type);this._$El=e,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$El=null}}_$AK(e,t){var i;const n=this.constructor,r=n._$Ev.get(e);if(void 0!==r&&this._$El!==r){const e=n.getPropertyOptions(r),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(i=e.converter)||void 0===i?void 0:i.fromAttribute)?e.converter:u;this._$El=r,this[r]=s.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,i){let n=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||p)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var g;v[m]=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:v}),(null!==(a=l.reactiveElementVersions)&&void 0!==a?a:l.reactiveElementVersions=[]).push("1.6.3");const _=window,y=_.trustedTypes,b=y?y.createPolicy("lit-html",{createHTML:e=>e}):void 0,w="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,C="?"+x,I=`<${C}>`,T=document,E=()=>T.createComment(""),S=e=>null===e||"object"!=typeof e&&"function"!=typeof e,k=Array.isArray,A="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,R=/>/g,O=RegExp(`>|${A}(?:([^\\s"'>=/]+)(${A}*=${A}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),D=/'/g,L=/"/g,M=/^(?:script|style|textarea|title)$/i,$=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),F=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),z=new WeakMap,q=T.createTreeWalker(T,129,null,!1);function V(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==b?b.createHTML(t):t}const j=(e,t)=>{const i=e.length-1,n=[];let r,s=2===t?"<svg>":"",o=P;for(let t=0;t<i;t++){const i=e[t];let a,l,c=-1,d=0;for(;d<i.length&&(o.lastIndex=d,l=o.exec(i),null!==l);)d=o.lastIndex,o===P?"!--"===l[1]?o=N:void 0!==l[1]?o=R:void 0!==l[2]?(M.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=O):void 0!==l[3]&&(o=O):o===O?">"===l[0]?(o=null!=r?r:P,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?O:'"'===l[3]?L:D):o===L||o===D?o=O:o===N||o===R?o=P:(o=O,r=void 0);const h=o===O&&e[t+1].startsWith("/>")?" ":"";s+=o===P?i+I:c>=0?(n.push(a),i.slice(0,c)+w+i.slice(c)+x+h):i+x+(-2===c?(n.push(void 0),t):h)}return[V(e,s+(e[i]||"<?>")+(2===t?"</svg>":"")),n]};class H{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let r=0,s=0;const o=e.length-1,a=this.parts,[l,c]=j(e,t);if(this.el=H.createElement(l,i),q.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=q.nextNode())&&a.length<o;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith(w)||t.startsWith(x)){const i=c[s++];if(e.push(t),void 0!==i){const e=n.getAttribute(i.toLowerCase()+w).split(x),t=/([.?@])?(.*)/.exec(i);a.push({type:1,index:r,name:t[2],strings:e,ctor:"."===t[1]?Y:"?"===t[1]?Q:"@"===t[1]?X:G})}else a.push({type:6,index:r})}for(const t of e)n.removeAttribute(t)}if(M.test(n.tagName)){const e=n.textContent.split(x),t=e.length-1;if(t>0){n.textContent=y?y.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],E()),q.nextNode(),a.push({type:2,index:++r});n.append(e[t],E())}}}else if(8===n.nodeType)if(n.data===C)a.push({type:2,index:r});else{let e=-1;for(;-1!==(e=n.data.indexOf(x,e+1));)a.push({type:7,index:r}),e+=x.length-1}r++}}static createElement(e,t){const i=T.createElement("template");return i.innerHTML=e,i}}function B(e,t,i=e,n){var r,s,o,a;if(t===F)return t;let l=void 0!==n?null===(r=i._$Co)||void 0===r?void 0:r[n]:i._$Cl;const c=S(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,i,n)),void 0!==n?(null!==(o=(a=i)._$Co)&&void 0!==o?o:a._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(t=B(e,l._$AS(e,t.values),l,n)),t}class W{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:n}=this._$AD,r=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:T).importNode(i,!0);q.currentNode=r;let s=q.nextNode(),o=0,a=0,l=n[0];for(;void 0!==l;){if(o===l.index){let t;2===l.type?t=new K(s,s.nextSibling,this,e):1===l.type?t=new l.ctor(s,l.name,l.strings,this,e):6===l.type&&(t=new Z(s,this,e)),this._$AV.push(t),l=n[++a]}o!==(null==l?void 0:l.index)&&(s=q.nextNode(),o++)}return q.currentNode=T,r}v(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class K{constructor(e,t,i,n){var r;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cp=null===(r=null==n?void 0:n.isConnected)||void 0===r||r}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=B(this,e,t),S(e)?e===U||null==e||""===e?(this._$AH!==U&&this._$AR(),this._$AH=U):e!==this._$AH&&e!==F&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>k(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==U&&S(this._$AH)?this._$AA.nextSibling.data=e:this.$(T.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:n}=e,r="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=H.createElement(V(n.h,n.h[0]),this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===r)this._$AH.v(i);else{const e=new W(r,this),t=e.u(this.options);e.v(i),this.$(t),this._$AH=e}}_$AC(e){let t=z.get(e.strings);return void 0===t&&z.set(e.strings,t=new H(e)),t}T(e){k(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const r of e)n===t.length?t.push(i=new K(this.k(E()),this.k(E()),this,this.options)):i=t[n],i._$AI(r),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class G{constructor(e,t,i,n,r){this.type=1,this._$AH=U,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,n){const r=this.strings;let s=!1;if(void 0===r)e=B(this,e,t,0),s=!S(e)||e!==this._$AH&&e!==F,s&&(this._$AH=e);else{const n=e;let o,a;for(e=r[0],o=0;o<r.length-1;o++)a=B(this,n[i+o],t,o),a===F&&(a=this._$AH[o]),s||(s=!S(a)||a!==this._$AH[o]),a===U?e=U:e!==U&&(e+=(null!=a?a:"")+r[o+1]),this._$AH[o]=a}s&&!n&&this.j(e)}j(e){e===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class Y extends G{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===U?void 0:e}}const J=y?y.emptyScript:"";class Q extends G{constructor(){super(...arguments),this.type=4}j(e){e&&e!==U?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class X extends G{constructor(e,t,i,n,r){super(e,t,i,n,r),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=B(this,e,t,0))&&void 0!==i?i:U)===F)return;const n=this._$AH,r=e===U&&n!==U||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==U&&(n===U||r);r&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class Z{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){B(this,e)}}const ee=_.litHtmlPolyfillSupport;null==ee||ee(H,K),(null!==(g=_.litHtmlVersions)&&void 0!==g?g:_.litHtmlVersions=[]).push("2.8.0");const te=(e,t,i)=>{var n,r;const s=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:t;let o=s._$litPart$;if(void 0===o){const e=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;s._$litPart$=o=new K(t.insertBefore(E(),e),e,void 0,null!=i?i:{})}return o._$AI(e),o
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */};var ie,ne;class re extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=te(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return F}}re.finalized=!0,re._$litElement$=!0,null===(ie=globalThis.litElementHydrateSupport)||void 0===ie||ie.call(globalThis,{LitElement:re});const se=globalThis.litElementPolyfillSupport;null==se||se({LitElement:re}),(null!==(ne=globalThis.litElementVersions)&&void 0!==ne?ne:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const oe=!1,ae="${JSCORE_VERSION}",le=function(e,t){if(!e)throw ce(t)},ce=function(e){return new Error("Firebase Database ("+ae+") INTERNAL ASSERT FAILED: "+e)},de=function(e){const t=[];let i=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<128?t[i++]=r:r<2048?(t[i++]=r>>6|192,t[i++]=63&r|128):55296==(64512&r)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++n)),t[i++]=r>>18|240,t[i++]=r>>12&63|128,t[i++]=r>>6&63|128,t[i++]=63&r|128):(t[i++]=r>>12|224,t[i++]=r>>6&63|128,t[i++]=63&r|128)}return t},he={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=r>>2,d=(3&r)<<4|o>>4;let h=(15&o)<<2|l>>6,u=63&l;a||(u=64,s||(h=64)),n.push(i[c],i[d],i[h],i[u])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(de(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let i=0,n=0;for(;i<e.length;){const r=e[i++];if(r<128)t[n++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[i++];t[n++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[i++])<<12|(63&e[i++])<<6|63&e[i++])-65536;t[n++]=String.fromCharCode(55296+(s>>10)),t[n++]=String.fromCharCode(56320+(1023&s))}else{const s=e[i++],o=e[i++];t[n++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){const r=i[e.charAt(t++)],s=t<e.length?i[e.charAt(t)]:0;++t;const o=t<e.length?i[e.charAt(t)]:64;++t;const a=t<e.length?i[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw new ue;const l=r<<2|s>>4;if(n.push(l),64!==o){const e=s<<4&240|o>>2;if(n.push(e),64!==a){const e=o<<6&192|a;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pe=function(e){const t=de(e);return he.encodeByteArray(t,!0)},fe=function(e){return pe(e).replace(/\./g,"")},me=function(e){try{return he.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ve(e){return ge(void 0,e)}function ge(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const i in t)t.hasOwnProperty(i)&&"__proto__"!==i&&(e[i]=ge(e[i],t[i]));return e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _e=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,ye=()=>{try{return _e()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&me(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},be=e=>{var t,i;return null===(i=null===(t=ye())||void 0===t?void 0:t.emulatorHosts)||void 0===i?void 0:i[e]},we=()=>{var e;return null===(e=ye())||void 0===e?void 0:e.config},xe=e=>{var t;return null===(t=ye())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ce{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,i))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ie(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Te(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function Ee(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Se(){return!0===oe}class ke extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name="FirebaseError",Object.setPrototypeOf(this,ke.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ae.prototype.create)}}class Ae{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},n=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(Pe,((e,i)=>{const n=t[i];return null!=n?String(n):`<${i}?>`}))}(r,i):"Error",o=`${this.serviceName}: ${s} (${n}).`;return new ke(n,o,i)}}const Pe=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(e){return JSON.parse(e)}function Re(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe=function(e){let t={},i={},n={},r="";try{const s=e.split(".");t=Ne(me(s[0])||""),i=Ne(me(s[1])||""),r=s[2],n=i.d||{},delete i.d}catch(e){}return{header:t,claims:i,data:n,signature:r}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function De(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Le(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Me(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function $e(e,t,i){const n={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=t.call(i,e[r],r,e));return n}function Fe(e,t){if(e===t)return!0;const i=Object.keys(e),n=Object.keys(t);for(const r of i){if(!n.includes(r))return!1;const i=e[r],s=t[r];if(Ue(i)&&Ue(s)){if(!Fe(i,s))return!1}else if(i!==s)return!1}for(const e of n)if(!i.includes(e))return!1;return!0}function Ue(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(e){const t=[];for(const[i,n]of Object.entries(e))Array.isArray(n)?n.forEach((e=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(i)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if("string"==typeof e)for(let n=0;n<16;n++)i[n]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let n=0;n<16;n++)i[n]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=i[e-3]^i[e-8]^i[e-14]^i[e-16];i[e]=4294967295&(t<<1|t>>>31)}let n,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],c=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(n=l^o&(a^l),r=1518500249):(n=o^a^l,r=1859775393):e<60?(n=o&a|l&(o|a),r=2400959708):(n=o^a^l,r=3395469782);const t=(s<<5|s>>>27)+n+c+r+i[e]&4294967295;c=l,l=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const i=t-this.blockSize;let n=0;const r=this.buf_;let s=this.inbuf_;for(;n<t;){if(0===s)for(;n<=i;)this.compress_(e,n),n+=this.blockSize;if("string"==typeof e){for(;n<t;)if(r[s]=e.charCodeAt(n),++s,++n,s===this.blockSize){this.compress_(r),s=0;break}}else for(;n<t;)if(r[s]=e[n],++s,++n,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let i=0;for(let t=0;t<5;t++)for(let n=24;n>=0;n-=8)e[i]=this.chain_[t]>>n&255,++i;return e}}class Ve{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,i){let n;if(void 0===e&&void 0===t&&void 0===i)throw new Error("Missing Observer.");n=function(e,t){if("object"!=typeof e||null===e)return!1;for(const i of t)if(i in e&&"function"==typeof e[i])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:i},void 0===n.next&&(n.next=je),void 0===n.error&&(n.error=je),void 0===n.complete&&(n.complete=je);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}})),this.observers.push(n),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function je(){}function He(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be=function(e){let t=0;for(let i=0;i<e.length;i++){const n=e.charCodeAt(i);n<128?t++:n<2048?t+=2:n>=55296&&n<=56319?(t+=4,i++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function We(e){return e&&e._delegate?e._delegate:e}class Ke{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Ce;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&e.resolve(i)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(i)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:i})}catch(e){if(n)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:Ge})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});t.resolve(e)}catch(e){}}}}clearInstance(e=Ge){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=Ge){return this.instances.has(e)}getOptions(e=Ge){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[e,t]of this.instancesDeferred.entries()){i===this.normalizeInstanceIdentifier(e)&&t.resolve(n)}return n}onInit(e,t){var i;const n=this.normalizeInstanceIdentifier(t),r=null!==(i=this.onInitCallbacks.get(n))&&void 0!==i?i:new Set;r.add(e),this.onInitCallbacks.set(n,r);const s=this.instances.get(n);return s&&e(s,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const n of i)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e,n===Ge?void 0:n),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(e){}var n;return i||null}normalizeInstanceIdentifier(e=Ge){return this.component?this.component.multipleInstances?e:Ge:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Je{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ye(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qe;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Qe||(Qe={}));const Xe={debug:Qe.DEBUG,verbose:Qe.VERBOSE,info:Qe.INFO,warn:Qe.WARN,error:Qe.ERROR,silent:Qe.SILENT},Ze=Qe.INFO,et={[Qe.DEBUG]:"log",[Qe.VERBOSE]:"log",[Qe.INFO]:"info",[Qe.WARN]:"warn",[Qe.ERROR]:"error"},tt=(e,t,...i)=>{if(t<e.logLevel)return;const n=(new Date).toISOString(),r=et[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${n}]  ${e.name}:`,...i)};class it{constructor(e){this.name=e,this._logLevel=Ze,this._logHandler=tt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Qe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Xe[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Qe.DEBUG,...e),this._logHandler(this,Qe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Qe.VERBOSE,...e),this._logHandler(this,Qe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Qe.INFO,...e),this._logHandler(this,Qe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Qe.WARN,...e),this._logHandler(this,Qe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Qe.ERROR,...e),this._logHandler(this,Qe.ERROR,...e)}}const nt=(e,t)=>t.some((t=>e instanceof t));let rt,st;const ot=new WeakMap,at=new WeakMap,lt=new WeakMap,ct=new WeakMap,dt=new WeakMap;let ht={get(e,t,i){if(e instanceof IDBTransaction){if("done"===t)return at.get(e);if("objectStoreNames"===t)return e.objectStoreNames||lt.get(e);if("store"===t)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return ft(e[t])},set:(e,t,i)=>(e[t]=i,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ut(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(st||(st=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(mt(this),t),ft(ot.get(this))}:function(...t){return ft(e.apply(mt(this),t))}:function(t,...i){const n=e.call(mt(this),t,...i);return lt.set(n,t.sort?t.sort():[t]),ft(n)}}function pt(e){return"function"==typeof e?ut(e):(e instanceof IDBTransaction&&function(e){if(at.has(e))return;const t=new Promise(((t,i)=>{const n=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),n()},s=()=>{i(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));at.set(e,t)}(e),nt(e,rt||(rt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,ht):e)}function ft(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,i)=>{const n=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(ft(e.result)),n()},s=()=>{i(e.error),n()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&ot.set(t,e)})).catch((()=>{})),dt.set(t,e),t}(e);if(ct.has(e))return ct.get(e);const t=pt(e);return t!==e&&(ct.set(e,t),dt.set(t,e)),t}const mt=e=>dt.get(e);const vt=["get","getKey","getAll","getAllKeys","count"],gt=["put","add","delete","clear"],_t=new Map;function yt(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(_t.get(t))return _t.get(t);const i=t.replace(/FromIndex$/,""),n=t!==i,r=gt.includes(i);if(!(i in(n?IDBIndex:IDBObjectStore).prototype)||!r&&!vt.includes(i))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return n&&(o=o.index(t.shift())),(await Promise.all([o[i](...t),r&&s.done]))[0]};return _t.set(t,s),s}ht=(e=>({...e,get:(t,i,n)=>yt(t,i)||e.get(t,i,n),has:(t,i)=>!!yt(t,i)||e.has(t,i)}))(ht);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const wt="@firebase/app",xt="0.10.3",Ct=new it("@firebase/app"),It="@firebase/app-compat",Tt="@firebase/analytics-compat",Et="@firebase/analytics",St="@firebase/app-check-compat",kt="@firebase/app-check",At="@firebase/auth",Pt="@firebase/auth-compat",Nt="@firebase/database",Rt="@firebase/database-compat",Ot="@firebase/functions",Dt="@firebase/functions-compat",Lt="@firebase/installations",Mt="@firebase/installations-compat",$t="@firebase/messaging",Ft="@firebase/messaging-compat",Ut="@firebase/performance",zt="@firebase/performance-compat",qt="@firebase/remote-config",Vt="@firebase/remote-config-compat",jt="@firebase/storage",Ht="@firebase/storage-compat",Bt="@firebase/firestore",Wt="@firebase/vertexai-preview",Kt="@firebase/firestore-compat",Gt="firebase",Yt="[DEFAULT]",Jt={[wt]:"fire-core",[It]:"fire-core-compat",[Et]:"fire-analytics",[Tt]:"fire-analytics-compat",[kt]:"fire-app-check",[St]:"fire-app-check-compat",[At]:"fire-auth",[Pt]:"fire-auth-compat",[Nt]:"fire-rtdb",[Rt]:"fire-rtdb-compat",[Ot]:"fire-fn",[Dt]:"fire-fn-compat",[Lt]:"fire-iid",[Mt]:"fire-iid-compat",[$t]:"fire-fcm",[Ft]:"fire-fcm-compat",[Ut]:"fire-perf",[zt]:"fire-perf-compat",[qt]:"fire-rc",[Vt]:"fire-rc-compat",[jt]:"fire-gcs",[Ht]:"fire-gcs-compat",[Bt]:"fire-fst",[Kt]:"fire-fst-compat",[Wt]:"fire-vertex","fire-js":"fire-js",[Gt]:"fire-js-all"},Qt=new Map,Xt=new Map,Zt=new Map;function ei(e,t){try{e.container.addComponent(t)}catch(i){Ct.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,i)}}function ti(e){const t=e.name;if(Zt.has(t))return Ct.debug(`There were multiple attempts to register component ${t}.`),!1;Zt.set(t,e);for(const t of Qt.values())ei(t,e);for(const t of Xt.values())ei(t,e);return!0}function ii(e,t){const i=e.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),e.container.getProvider(t)}function ni(e){return void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=new Ae("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class si{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ke("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ri.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi="10.12.0";function ai(e,t={}){let i=e;if("object"!=typeof t){t={name:t}}const n=Object.assign({name:Yt,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw ri.create("bad-app-name",{appName:String(r)});if(i||(i=we()),!i)throw ri.create("no-options");const s=Qt.get(r);if(s){if(Fe(i,s.options)&&Fe(n,s.config))return s;throw ri.create("duplicate-app",{appName:r})}const o=new Je(r);for(const e of Zt.values())o.addComponent(e);const a=new si(i,n,o);return Qt.set(r,a),a}function li(e=Yt){const t=Qt.get(e);if(!t&&e===Yt&&we())return ai();if(!t)throw ri.create("no-app",{appName:e});return t}function ci(e,t,i){var n;let r=null!==(n=Jt[e])&&void 0!==n?n:e;i&&(r+=`-${i}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ct.warn(e.join(" "))}ti(new Ke(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di="firebase-heartbeat-database",hi=1,ui="firebase-heartbeat-store";let pi=null;function fi(){return pi||(pi=function(e,t,{blocked:i,upgrade:n,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=ft(o);return n&&o.addEventListener("upgradeneeded",(e=>{n(ft(o.result),e.oldVersion,e.newVersion,ft(o.transaction),e)})),i&&o.addEventListener("blocked",(e=>i(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(e=>r(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}(di,hi,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(ui)}catch(e){console.warn(e)}}}).catch((e=>{throw ri.create("idb-open",{originalErrorMessage:e.message})}))),pi}async function mi(e,t){try{const i=(await fi()).transaction(ui,"readwrite"),n=i.objectStore(ui);await n.put(t,vi(e)),await i.done}catch(e){if(e instanceof ke)Ct.warn(e.message);else{const t=ri.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Ct.warn(t.message)}}}function vi(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new yi(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=_i();if((null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=_i(),{heartbeatsToSend:i,unsentEntries:n}=function(e,t=1024){const i=[];let n=e.slice();for(const r of e){const e=i.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),bi(i)>t){e.dates.pop();break}}else if(i.push({agent:r.agent,dates:[r.date]}),bi(i)>t){i.pop();break}n=n.slice(1)}return{heartbeatsToSend:i,unsentEntries:n}}(this._heartbeatsCache.heartbeats),r=fe(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function _i(){return(new Date).toISOString().substring(0,10)}class yi{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise(((e,t)=>{try{let i=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),i||self.indexedDB.deleteDatabase(n),e(!0)},r.onupgradeneeded=()=>{i=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await fi()).transaction(ui),i=await t.objectStore(ui).get(vi(e));return await t.done,i}catch(e){if(e instanceof ke)Ct.warn(e.message);else{const t=ri.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Ct.warn(t.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return mi(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return mi(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}}}function bi(e){return fe(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wi;wi="",ti(new Ke("platform-logger",(e=>new bt(e)),"PRIVATE")),ti(new Ke("heartbeat",(e=>new gi(e)),"PRIVATE")),ci(wt,xt,wi),ci(wt,xt,"esm2017"),ci("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ci("firebase","10.12.0","app");const xi="@firebase/database",Ci="1.0.5";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ii="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ti{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Re(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Ne(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return De(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Ti(t)}}catch(e){}return new Ei},ki=Si("localStorage"),Ai=Si("sessionStorage"),Pi=new it("@firebase/database"),Ni=function(){let e=1;return function(){return e++}}(),Ri=function(e){const t=function(e){const t=[];let i=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r>=55296&&r<=56319){const t=r-55296;n++,le(n<e.length,"Surrogate pair missing trail surrogate."),r=65536+(t<<10)+(e.charCodeAt(n)-56320)}r<128?t[i++]=r:r<2048?(t[i++]=r>>6|192,t[i++]=63&r|128):r<65536?(t[i++]=r>>12|224,t[i++]=r>>6&63|128,t[i++]=63&r|128):(t[i++]=r>>18|240,t[i++]=r>>12&63|128,t[i++]=r>>6&63|128,t[i++]=63&r|128)}return t}(e),i=new qe;i.update(t);const n=i.digest();return he.encodeByteArray(n)},Oi=function(...e){let t="";for(let i=0;i<e.length;i++){const n=e[i];Array.isArray(n)||n&&"object"==typeof n&&"number"==typeof n.length?t+=Oi.apply(null,n):t+="object"==typeof n?Re(n):n,t+=" "}return t};let Di=null,Li=!0;const Mi=function(...e){var t,i;if(!0===Li&&(Li=!1,null===Di&&!0===Ai.get("logging_enabled")&&(t=!0,le(!i||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(Pi.logLevel=Qe.VERBOSE,Di=Pi.log.bind(Pi),i&&Ai.set("logging_enabled",!0)):"function"==typeof t?Di=t:(Di=null,Ai.remove("logging_enabled")))),Di){const t=Oi.apply(null,e);Di(t)}},$i=function(e){return function(...t){Mi(e,...t)}},Fi=function(...e){const t="FIREBASE INTERNAL ERROR: "+Oi(...e);Pi.error(t)},Ui=function(...e){const t=`FIREBASE FATAL ERROR: ${Oi(...e)}`;throw Pi.error(t),new Error(t)},zi=function(...e){const t="FIREBASE WARNING: "+Oi(...e);Pi.warn(t)},qi=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Vi="[MIN_NAME]",ji="[MAX_NAME]",Hi=function(e,t){if(e===t)return 0;if(e===Vi||t===ji)return-1;if(t===Vi||e===ji)return 1;{const i=Xi(e),n=Xi(t);return null!==i?null!==n?i-n==0?e.length-t.length:i-n:-1:null!==n?1:e<t?-1:1}},Bi=function(e,t){return e===t?0:e<t?-1:1},Wi=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Re(t))},Ki=function(e){if("object"!=typeof e||null===e)return Re(e);const t=[];for(const i in e)t.push(i);t.sort();let i="{";for(let n=0;n<t.length;n++)0!==n&&(i+=","),i+=Re(t[n]),i+=":",i+=Ki(e[t[n]]);return i+="}",i},Gi=function(e,t){const i=e.length;if(i<=t)return[e];const n=[];for(let r=0;r<i;r+=t)r+t>i?n.push(e.substring(r,i)):n.push(e.substring(r,r+t));return n};function Yi(e,t){for(const i in e)e.hasOwnProperty(i)&&t(i,e[i])}const Ji=function(e){le(!qi(e),"Invalid JSON number");const t=1023;let i,n,r,s,o;0===e?(n=0,r=0,i=1/e==-1/0?1:0):(i=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),n=s+t,r=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(n=0,r=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;o-=1)a.push(n%2?1:0),n=Math.floor(n/2);a.push(i?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const Qi=new RegExp("^-?(0*)\\d{1,10}$"),Xi=function(e){if(Qi.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Zi=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw zi("Exception was thrown by user callback.",t),e}),Math.floor(0))}},en=function(e,t){const i=setTimeout(e,t);return"number"==typeof i&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(i):"object"==typeof i&&i.unref&&i.unref(),i};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tn{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,i)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,i):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){zi(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(Mi("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,i)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,i):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',zi(e)}}class rn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}rn.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const sn=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,on="ac",an="websocket",ln="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cn{constructor(e,t,i,n,r=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=i,this.webSocketOnly=n,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ki.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ki.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function dn(e,t,i){let n;if(le("string"==typeof t,"typeof type must == string"),le("object"==typeof i,"typeof params must == object"),t===an)n=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==ln)throw new Error("Unknown connection type: "+t);n=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(i.ns=e.namespace);const r=[];return Yi(i,((e,t)=>{r.push(e+"="+t)})),n+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(){this.counters_={}}incrementCounter(e,t=1){De(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return ve(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un={},pn={};function fn(e){const t=e.toString();return un[t]||(un[t]=new hn),un[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mn{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Zi((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn="start";class gn{constructor(e,t,i,n,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=n,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=$i(e),this.stats_=fn(t),this.urlFn=e=>(this.appCheckToken&&(e[on]=this.appCheckToken),dn(t,ln,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new mn(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if("complete"===document.readyState)e();else{let t=!1;const i=function(){document.body?t||(t=!0,e()):setTimeout(i,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",i,!1),window.addEventListener("load",i,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&i()})),window.attachEvent("onload",i))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new _n(((...e)=>{const[t,i,n,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===vn)this.id=i,this.password=n;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);i?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(i,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,i]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,i)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[vn]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e[on]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&sn.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){gn.forceAllow_=!0}static forceDisallow(){gn.forceDisallow_=!0}static isAvailable(){return!!gn.forceAllow_||!(gn.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI)}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Re(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=pe(t),n=Gi(i,1840);for(let e=0;e<n.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,n.length,n[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={dframe:"t"};i.id=e,i.pw=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Re(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class _n{constructor(e,t,i,n){this.onDisconnect=i,this.urlFn=n,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ni(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=_n.createIFrame_();let i="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){i='<script>document.domain="'+document.domain+'";<\/script>'}const n="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(n),this.myIFrame.doc.close()}catch(e){Mi("frame writing exception"),e.stack&&Mi(e.stack),Mi(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Mi("No IE domain setting required")}catch(t){const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),i="",n=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+i.length<=1870))break;{const e=this.pendingSegs.shift();i=i+"&seg"+n+"="+e.seg+"&ts"+n+"="+e.ts+"&d"+n+"="+e.d,n++}}return t+=i,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},n=setTimeout(i,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(n),i()}))}addTag(e,t){setTimeout((()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const e=i.readyState;e&&"loaded"!==e&&"complete"!==e||(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{Mi("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch(e){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yn=null;"undefined"!=typeof MozWebSocket?yn=MozWebSocket:"undefined"!=typeof WebSocket&&(yn=WebSocket);class bn{constructor(e,t,i,n,r,s,o){this.connId=e,this.applicationId=i,this.appCheckToken=n,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=$i(this.connId),this.stats_=fn(t),this.connURL=bn.connectionURL_(t,s,o,n,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,n,r){const s={v:"5"};return"undefined"!=typeof location&&location.hostname&&sn.test(location.hostname)&&(s.r="f"),t&&(s.s=t),i&&(s.ls=i),n&&(s[on]=n),r&&(s.p=r),dn(e,an,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ki.set("previous_websocket_failure",!0);try{let e;Se(),this.mySock=new yn(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){bn.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&null!==yn&&!bn.forceDisallow_}static previouslyFailed(){return ki.isInMemoryStorage||!0===ki.get("previous_websocket_failure")}markConnectionHealthy(){ki.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Ne(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(le(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Re(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Gi(t,16384);i.length>1&&this.sendString_(String(i.length));for(let e=0;e<i.length;e++)this.sendString_(i[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}bn.responsesRequiredToBeHealthy=2,bn.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[gn,bn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=bn&&bn.isAvailable();let i=t&&!bn.previouslyFailed();if(e.webSocketOnly&&(t||zi("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[bn];else{const e=this.transports_=[];for(const t of wn.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);wn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}wn.globalTransportInitialized_=!1;class xn{constructor(e,t,i,n,r,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=n,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=$i("c:"+this.id+":"),this.transportManager_=new wn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,i)}),Math.floor(0));const n=e.healthyTimeout||0;n>0&&(this.healthyTimeout_=en((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(n)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Wi("t",e),i=Wi("d",e);if("c"===t)this.onSecondaryControl_(i);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(i)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Wi("t",e),i=Wi("d",e);"c"===t?this.onControl_(i):"d"===t&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Wi("t",e);if("d"in e){const i=e.d;if("h"===t){const e=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(i):"r"===t?this.onReset_(i):"e"===t?Fi("Server Error: "+i):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Fi("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,n=e.h;this.sessionId=e.s,this.repoInfo_.host=n,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==i&&zi("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),en((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):en((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ki.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{put(e,t,i,n){}merge(e,t,i,n){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e){this.allowedEvents_=e,this.listeners_={},le(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let e=0;e<i.length;e++)i[e].callback.apply(i[e].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const n=this.getInitialEvent(e);n&&t.apply(i,n)}off(e,t,i){this.validateEventType_(e);const n=this.listeners_[e]||[];for(let e=0;e<n.length;e++)if(n[e].callback===t&&(!i||i===n[e].context))return void n.splice(e,1)}validateEventType_(e){le(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends In{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Te()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new Tn}getInitialEvent(e){return le("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=32,Sn=768;class kn{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function An(){return new kn("")}function Pn(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Nn(e){return e.pieces_.length-e.pieceNum_}function Rn(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new kn(e.pieces_,t)}function On(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Dn(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Ln(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let i=e.pieceNum_;i<e.pieces_.length-1;i++)t.push(e.pieces_[i]);return new kn(t,0)}function Mn(e,t){const i=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)i.push(e.pieces_[t]);if(t instanceof kn)for(let e=t.pieceNum_;e<t.pieces_.length;e++)i.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&i.push(e[t])}return new kn(i,0)}function $n(e){return e.pieceNum_>=e.pieces_.length}function Fn(e,t){const i=Pn(e),n=Pn(t);if(null===i)return t;if(i===n)return Fn(Rn(e),Rn(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Un(e,t){if(Nn(e)!==Nn(t))return!1;for(let i=e.pieceNum_,n=t.pieceNum_;i<=e.pieces_.length;i++,n++)if(e.pieces_[i]!==t.pieces_[n])return!1;return!0}function zn(e,t){let i=e.pieceNum_,n=t.pieceNum_;if(Nn(e)>Nn(t))return!1;for(;i<e.pieces_.length;){if(e.pieces_[i]!==t.pieces_[n])return!1;++i,++n}return!0}class qn{constructor(e,t){this.errorPrefix_=t,this.parts_=Dn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=Be(this.parts_[e]);Vn(this)}}function Vn(e){if(e.byteLength_>Sn)throw new Error(e.errorPrefix_+"has a key path longer than "+Sn+" bytes ("+e.byteLength_+").");if(e.parts_.length>En)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+En+") or object contains a cycle "+jn(e))}function jn(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends In{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Hn}getInitialEvent(e){return le("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=1e3;class Wn extends Cn{constructor(e,t,i,n,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=n,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=Wn.nextPersistentConnectionId_++,this.log_=$i("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Bn,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Se())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Hn.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Tn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const n=++this.requestNumber_,r={r:n,a:e,b:t};this.log_(Re(r)),le(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[n]=i)}get(e){this.initConnection_();const t=new Ce,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const i=e.d;"ok"===e.s?t.resolve(i):t.reject(i)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const n=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(n),t.promise}listen(e,t,i,n){this.initConnection_();const r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),le(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),le(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");const o={onComplete:n,hashFn:t,query:e,tag:i};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)}))}sendListen_(e){const t=e.query,i=t._path.toString(),n=t._queryIdentifier;this.log_("Listen on "+i+" for "+n);const r={p:i};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,(r=>{const s=r.d,o=r.s;Wn.warnOnListenWarnings_(s,t);(this.listens.get(i)&&this.listens.get(i).get(n))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(i,n),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&De(e,"w")){const i=Le(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();zi(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||function(e){const t=Oe(e).claims;return"object"==typeof t&&!0===t.admin}(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=function(e){const t=Oe(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")}(e)?"auth":"gauth",i={cred:e};null===this.authOverride_?i.noauth=!0:"object"==typeof this.authOverride_&&(i.authvar=this.authOverride_),this.sendRequest(t,i,(t=>{const i=t.s,n=t.d||"error";this.authToken_===e&&("ok"===i?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,n))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,i=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)}))}unlisten(e,t){const i=e._path.toString(),n=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+n),le(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(i,n)&&this.connected_&&this.sendUnlisten_(i,n,e._queryObject,t)}sendUnlisten_(e,t,i,n){this.log_("Unlisten on "+e+" for "+t);const r={p:e};n&&(r.q=i,r.t=n),this.sendRequest("n",r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,n){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{n&&setTimeout((()=>{n(e.s,e.d)}),Math.floor(0))}))}put(e,t,i,n){this.putInternal("p",e,t,i,n)}merge(e,t,i,n){this.putInternal("m",e,t,i,n)}putInternal(e,t,i,n,r){this.initConnection_();const s={p:t,d:i};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:n}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,n=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,(i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),n&&n(i.s,i.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Re(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Fi("Unrecognized action received from server: "+Re(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){le(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Bn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Bn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Bn),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),n=this.id+":"+Wn.nextConnectionId_++,r=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,i())},l=function(e){le(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);s?Mi("getToken() completed but was canceled"):(Mi("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new xn(n,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,(e=>{zi(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),r))}catch(e){this.log_("Failed to get token: "+e),s||(this.repoInfo_.nodeAdmin&&zi(e),a())}}}interrupt(e){Mi("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Mi("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Me(this.interruptReasons_)&&(this.reconnectDelay_=Bn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;i=t?t.map((e=>Ki(e))).join("$"):"default";const n=this.removeListen_(e,i);n&&n.onComplete&&n.onComplete("permission_denied")}removeListen_(e,t){const i=new kn(e).toString();let n;if(this.listens.has(i)){const e=this.listens.get(i);n=e.get(t),e.delete(t),0===e.size&&this.listens.delete(i)}else n=void 0;return n}onAuthRevoked_(e,t){Mi("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Mi("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};e["sdk.js."+Ii.replace(/\./g,"-")]=1,Te()?e["framework.cordova"]=1:Ee()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Tn.getInstance().currentlyOnline();return Me(this.interruptReasons_)&&e}}Wn.nextPersistentConnectionId_=0,Wn.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kn{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Kn(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new Kn(Vi,e),n=new Kn(Vi,t);return 0!==this.compare(i,n)}minPost(){return Kn.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yn;class Jn extends Gn{static get __EMPTY_NODE(){return Yn}static set __EMPTY_NODE(e){Yn=e}compare(e,t){return Hi(e.name,t.name)}isDefinedOn(e){throw ce("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Kn.MIN}maxPost(){return new Kn(ji,Yn)}makePost(e,t){return le("string"==typeof e,"KeyIndex indexValue must always be a string."),new Kn(e,Yn)}toString(){return".key"}}const Qn=new Jn;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,t,i,n,r=null){this.isReverse_=n,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?i(e.key,t):1,n&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Zn{constructor(e,t,i,n,r){this.key=e,this.value=t,this.color=null!=i?i:Zn.RED,this.left=null!=n?n:er.EMPTY_NODE,this.right=null!=r?r:er.EMPTY_NODE}copy(e,t,i,n,r){return new Zn(null!=e?e:this.key,null!=t?t:this.value,null!=i?i:this.color,null!=n?n:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let n=this;const r=i(e,n.key);return n=r<0?n.copy(null,null,null,n.left.insert(e,t,i),null):0===r?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,i)),n.fixUp_()}removeMin_(){if(this.left.isEmpty())return er.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,n;if(i=this,t(e,i.key)<0)i.left.isEmpty()||i.left.isRed_()||i.left.left.isRed_()||(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),i.right.isEmpty()||i.right.isRed_()||i.right.left.isRed_()||(i=i.moveRedRight_()),0===t(e,i.key)){if(i.right.isEmpty())return er.EMPTY_NODE;n=i.right.min_(),i=i.copy(n.key,n.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Zn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Zn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Zn.RED=!0,Zn.BLACK=!1;class er{constructor(e,t=er.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new er(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Zn.BLACK,null,null))}remove(e){return new er(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Zn.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),0===t)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,n=null;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),0===t){if(i.left.isEmpty())return n?n.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}t<0?i=i.left:t>0&&(n=i,i=i.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Xn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Xn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Xn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Xn(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tr(e,t){return Hi(e.name,t.name)}function ir(e,t){return Hi(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nr;er.EMPTY_NODE=new class{copy(e,t,i,n,r){return this}insert(e,t,i){return new Zn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const rr=function(e){return"number"==typeof e?"number:"+Ji(e):"string:"+e},sr=function(e){if(e.isLeafNode()){const t=e.val();le("string"==typeof t||"number"==typeof t||"object"==typeof t&&De(t,".sv"),"Priority must be a string or number.")}else le(e===nr||e.isEmpty(),"priority of unexpected type.");le(e===nr||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let or,ar,lr;class cr{constructor(e,t=cr.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,le(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),sr(this.priorityNode_)}static set __childrenNodeConstructor(e){or=e}static get __childrenNodeConstructor(){return or}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new cr(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:cr.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return $n(e)?this:".priority"===Pn(e)?this.priorityNode_:cr.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:cr.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=Pn(e);return null===i?t:t.isEmpty()&&".priority"!==i?this:(le(".priority"!==i||1===Nn(e),".priority must be the last token in a path"),this.updateImmediateChild(i,cr.__childrenNodeConstructor.EMPTY_NODE.updateChild(Rn(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+rr(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Ji(this.value_):this.value_,this.lazyHash_=Ri(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===cr.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof cr.__childrenNodeConstructor?-1:(le(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,n=cr.VALUE_TYPE_ORDER.indexOf(t),r=cr.VALUE_TYPE_ORDER.indexOf(i);return le(n>=0,"Unknown leaf type: "+t),le(r>=0,"Unknown leaf type: "+i),n===r?"object"===i?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-n}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}cr.VALUE_TYPE_ORDER=["object","boolean","number","string"];const dr=new class extends Gn{compare(e,t){const i=e.node.getPriority(),n=t.node.getPriority(),r=i.compareTo(n);return 0===r?Hi(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Kn.MIN}maxPost(){return new Kn(ji,new cr("[PRIORITY-POST]",lr))}makePost(e,t){const i=ar(e);return new Kn(t,new cr("[PRIORITY-POST]",i))}toString(){return".priority"}},hr=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/hr,10)),this.current_=this.count-1;const i=(n=this.count,parseInt(Array(n+1).join("1"),2));var n;this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pr=function(e,t,i,n){e.sort(t);const r=function(t,n){const s=n-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=i?i(o):o,new Zn(a,o.node,Zn.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=r(t,l),d=r(l+1,n);return o=e[l],a=i?i(o):o,new Zn(a,o.node,Zn.BLACK,c,d)}},s=function(t){let n=null,s=null,o=e.length;const a=function(t,n){const s=o-t,a=o;o-=t;const c=r(s+1,a),d=e[s],h=i?i(d):d;l(new Zn(h,d.node,n,null,c))},l=function(e){n?(n.left=e,n=e):(s=e,n=e)};for(let e=0;e<t.count;++e){const i=t.nextBitIsOne(),n=Math.pow(2,t.count-(e+1));i?a(n,Zn.BLACK):(a(n,Zn.BLACK),a(n,Zn.RED))}return s}(new ur(e.length));return new er(n||t,s)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fr;const mr={};class vr{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return le(mr&&dr,"ChildrenNode.ts has not been loaded"),fr=fr||new vr({".priority":mr},{".priority":dr}),fr}get(e){const t=Le(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof er?t:null}hasIndex(e){return De(this.indexSet_,e.toString())}addIndex(e,t){le(e!==Qn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let n=!1;const r=t.getIterator(Kn.Wrap);let s,o=r.getNext();for(;o;)n=n||e.isDefinedOn(o.node),i.push(o),o=r.getNext();s=n?pr(i,e.getCompare()):mr;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=s,new vr(c,l)}addToIndexes(e,t){const i=$e(this.indexes_,((i,n)=>{const r=Le(this.indexSet_,n);if(le(r,"Missing index implementation for "+n),i===mr){if(r.isDefinedOn(e.node)){const i=[],n=t.getIterator(Kn.Wrap);let s=n.getNext();for(;s;)s.name!==e.name&&i.push(s),s=n.getNext();return i.push(e),pr(i,r.getCompare())}return mr}{const n=t.get(e.name);let r=i;return n&&(r=r.remove(new Kn(e.name,n))),r.insert(e,e.node)}}));return new vr(i,this.indexSet_)}removeFromIndexes(e,t){const i=$e(this.indexes_,(i=>{if(i===mr)return i;{const n=t.get(e.name);return n?i.remove(new Kn(e.name,n)):i}}));return new vr(i,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gr;class _r{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&sr(this.priorityNode_),this.children_.isEmpty()&&le(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return gr||(gr=new _r(new er(ir),null,vr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||gr}updatePriority(e){return this.children_.isEmpty()?this:new _r(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?gr:t}}getChild(e){const t=Pn(e);return null===t?this:this.getImmediateChild(t).getChild(Rn(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(le(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const i=new Kn(e,t);let n,r;t.isEmpty()?(n=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(n=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const s=n.isEmpty()?gr:this.priorityNode_;return new _r(n,s,r)}}updateChild(e,t){const i=Pn(e);if(null===i)return t;{le(".priority"!==Pn(e)||1===Nn(e),".priority must be the last token in a path");const n=this.getImmediateChild(i).updateChild(Rn(e),t);return this.updateImmediateChild(i,n)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,n=0,r=!0;if(this.forEachChild(dr,((s,o)=>{t[s]=o.val(e),i++,r&&_r.INTEGER_REGEXP_.test(s)?n=Math.max(n,Number(s)):r=!1})),!e&&r&&n<2*i){const e=[];for(const i in t)e[i]=t[i];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+rr(this.getPriority().val())+":"),this.forEachChild(dr,((t,i)=>{const n=i.hash();""!==n&&(e+=":"+t+":"+n)})),this.lazyHash_=""===e?"":Ri(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const n=this.resolveIndex_(i);if(n){const i=n.getPredecessorKey(new Kn(e,t));return i?i.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Kn(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Kn(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,(e=>e));{const i=this.children_.getIteratorFrom(e.name,Kn.Wrap);let n=i.peek();for(;null!=n&&t.compare(n,e)<0;)i.getNext(),n=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,(e=>e));{const i=this.children_.getReverseIteratorFrom(e.name,Kn.Wrap);let n=i.peek();for(;null!=n&&t.compare(n,e)>0;)i.getNext(),n=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===yr?-1:0}withIndex(e){if(e===Qn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new _r(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Qn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(dr),i=t.getIterator(dr);let n=e.getNext(),r=i.getNext();for(;n&&r;){if(n.name!==r.name||!n.node.equals(r.node))return!1;n=e.getNext(),r=i.getNext()}return null===n&&null===r}return!1}return!1}}resolveIndex_(e){return e===Qn?null:this.indexMap_.get(e.toString())}}_r.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const yr=new class extends _r{constructor(){super(new er(ir),_r.EMPTY_NODE,vr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return _r.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(Kn,{MIN:{value:new Kn(Vi,_r.EMPTY_NODE)},MAX:{value:new Kn(ji,yr)}}),Jn.__EMPTY_NODE=_r.EMPTY_NODE,cr.__childrenNodeConstructor=_r,nr=yr,function(e){lr=e}(yr);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const br=!0;function wr(e,t=null){if(null===e)return _r.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),le(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new cr(e,wr(t))}if(e instanceof Array||!br){let i=_r.EMPTY_NODE;return Yi(e,((t,n)=>{if(De(e,t)&&"."!==t.substring(0,1)){const e=wr(n);!e.isLeafNode()&&e.isEmpty()||(i=i.updateImmediateChild(t,e))}})),i.updatePriority(wr(t))}{const i=[];let n=!1;if(Yi(e,((e,t)=>{if("."!==e.substring(0,1)){const r=wr(t);r.isEmpty()||(n=n||!r.getPriority().isEmpty(),i.push(new Kn(e,r)))}})),0===i.length)return _r.EMPTY_NODE;const r=pr(i,tr,(e=>e.name),ir);if(n){const e=pr(i,dr.getCompare());return new _r(r,wr(t),new vr({".priority":e},{".priority":dr}))}return new _r(r,wr(t),vr.Default)}}!function(e){ar=e}(wr);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xr extends Gn{constructor(e){super(),this.indexPath_=e,le(!$n(e)&&".priority"!==Pn(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),n=this.extractChild(t.node),r=i.compareTo(n);return 0===r?Hi(e.name,t.name):r}makePost(e,t){const i=wr(e),n=_r.EMPTY_NODE.updateChild(this.indexPath_,i);return new Kn(t,n)}maxPost(){const e=_r.EMPTY_NODE.updateChild(this.indexPath_,yr);return new Kn(ji,e)}toString(){return Dn(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new class extends Gn{compare(e,t){const i=e.node.compareTo(t.node);return 0===i?Hi(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Kn.MIN}maxPost(){return Kn.MAX}makePost(e,t){const i=wr(e);return new Kn(t,i)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(e){return{type:"value",snapshotNode:e}}function Tr(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Er(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Sr(e,t,i){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kr{constructor(e){this.index_=e}updateChild(e,t,i,n,r,s){le(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(n).equals(i.getChild(n))&&o.isEmpty()===i.isEmpty()?e:(null!=s&&(i.isEmpty()?e.hasChild(t)?s.trackChildChange(Er(t,o)):le(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(Tr(t,i)):s.trackChildChange(Sr(t,i,o))),e.isLeafNode()&&i.isEmpty()?e:e.updateImmediateChild(t,i).withIndex(this.index_))}updateFullNode(e,t,i){return null!=i&&(e.isLeafNode()||e.forEachChild(dr,((e,n)=>{t.hasChild(e)||i.trackChildChange(Er(e,n))})),t.isLeafNode()||t.forEachChild(dr,((t,n)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(n)||i.trackChildChange(Sr(t,n,r))}else i.trackChildChange(Tr(t,n))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?_r.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e){this.indexedFilter_=new kr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ar.getStartPost_(e),this.endPost_=Ar.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,n,r,s){return this.matches(new Kn(t,i))||(i=_r.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,n,r,s)}updateFullNode(e,t,i){t.isLeafNode()&&(t=_r.EMPTY_NODE);let n=t.withIndex(this.index_);n=n.updatePriority(_r.EMPTY_NODE);const r=this;return t.forEachChild(dr,((e,t)=>{r.matches(new Kn(e,t))||(n=n.updateImmediateChild(e,_r.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,n,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new Ar(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,n,r,s){return this.rangedFilter_.matches(new Kn(t,i))||(i=_r.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,n,r,s):this.fullLimitUpdateChild_(e,t,i,r,s)}updateFullNode(e,t,i){let n;if(t.isLeafNode()||t.isEmpty())n=_r.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;n=_r.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let i=0;for(;e.hasNext()&&i<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;n=n.updateImmediateChild(t.name,t.node),i++}}}else{let e;n=t.withIndex(this.index_),n=n.updatePriority(_r.EMPTY_NODE),e=this.reverse_?n.getReverseIterator(this.index_):n.getIterator(this.index_);let i=0;for(;e.hasNext();){const t=e.getNext();i<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?i++:n=n.updateImmediateChild(t.name,_r.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,n,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,n,r){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,i)=>e(i,t)}else s=this.index_.getCompare();const o=e;le(o.numChildren()===this.limit_,"");const a=new Kn(t,i),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let d=n.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=d&&(d.name===t||o.hasChild(d.name));)d=n.getChildAfterChild(this.index_,d,this.reverse_);const h=null==d?1:s(d,a);if(c&&!i.isEmpty()&&h>=0)return null!=r&&r.trackChildChange(Sr(t,i,e)),o.updateImmediateChild(t,i);{null!=r&&r.trackChildChange(Er(t,e));const i=o.updateImmediateChild(t,_r.EMPTY_NODE);return null!=d&&this.rangedFilter_.matches(d)?(null!=r&&r.trackChildChange(Tr(d.name,d.node)),i.updateImmediateChild(d.name,d.node)):i}}return i.isEmpty()?e:c&&s(l,a)>=0?(null!=r&&(r.trackChildChange(Er(l.name,l.node)),r.trackChildChange(Tr(t,i))),o.updateImmediateChild(t,i).updateImmediateChild(l.name,_r.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=dr}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return le(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return le(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Vi}hasEnd(){return this.endSet_}getIndexEndValue(){return le(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return le(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ji}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return le(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===dr}copy(){const e=new Nr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Rr(e){const t={};if(e.isDefault())return t;let i;if(e.index_===dr?i="$priority":e.index_===Cr?i="$value":e.index_===Qn?i="$key":(le(e.index_ instanceof xr,"Unrecognized index type!"),i=e.index_.toString()),t.orderBy=Re(i),e.startSet_){const i=e.startAfterSet_?"startAfter":"startAt";t[i]=Re(e.indexStartValue_),e.startNameSet_&&(t[i]+=","+Re(e.indexStartName_))}if(e.endSet_){const i=e.endBeforeSet_?"endBefore":"endAt";t[i]=Re(e.indexEndValue_),e.endNameSet_&&(t[i]+=","+Re(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Or(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let i=e.viewFrom_;""===i&&(i=e.isViewFromLeft()?"l":"r"),t.vf=i}return e.index_!==dr&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends Cn{constructor(e,t,i,n){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=n,this.log_=$i("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(le(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,n){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const s=Dr.getListenId_(e,i),o={};this.listens_[s]=o;const a=Rr(e._queryParams);this.restRequest_(r+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,i),Le(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",n(t,null)}}))}unlisten(e,t){const i=Dr.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Rr(e._queryParams),i=e._path.toString(),n=new Ce;return this.restRequest_(i+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(i,r,!1,null),n.resolve(r)):n.reject(new Error(r))})),n.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([n,r])=>{n&&n.accessToken&&(t.auth=n.accessToken),r&&r.token&&(t.ac=r.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ze(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(i&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=Ne(o.responseText)}catch(e){zi("Failed to parse JSON response for "+s+": "+o.responseText)}i(null,e)}else 401!==o.status&&404!==o.status&&zi("Got unsuccessful REST response for "+s+" Status: "+o.status),i(o.status);i=null}},o.open("GET",s,!0),o.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.rootNode_=_r.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(){return{value:null,children:new Map}}function $r(e,t,i){if($n(t))e.value=i,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,i);else{const n=Pn(t);e.children.has(n)||e.children.set(n,Mr());$r(e.children.get(n),t=Rn(t),i)}}function Fr(e,t,i){null!==e.value?i(t,e.value):function(e,t){e.children.forEach(((e,i)=>{t(i,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,n)=>{Fr(n,new kn(t.toString()+"/"+e),i)}))}class Ur{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Yi(this.last_,((e,i)=>{t[e]=t[e]-i})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Ur(e);const i=1e4+2e4*Math.random();en(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Yi(e,((e,n)=>{n>0&&De(this.statsToReport_,e)&&(t[e]=n,i=!0)})),i&&this.server_.reportStats(t),en(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qr;function Vr(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"}(qr||(qr={}));class jr{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=qr.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if($n(this.path)){if(null!=this.affectedTree.value)return le(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new kn(e));return new jr(An(),t,this.revert)}}return le(Pn(this.path)===e,"operationForChild called for unrelated child."),new jr(Rn(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,t){this.source=e,this.path=t,this.type=qr.LISTEN_COMPLETE}operationForChild(e){return $n(this.path)?new Hr(this.source,An()):new Hr(this.source,Rn(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=qr.OVERWRITE}operationForChild(e){return $n(this.path)?new Br(this.source,An(),this.snap.getImmediateChild(e)):new Br(this.source,Rn(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=qr.MERGE}operationForChild(e){if($n(this.path)){const t=this.children.subtree(new kn(e));return t.isEmpty()?null:t.value?new Br(this.source,An(),t.value):new Wr(this.source,An(),t)}return le(Pn(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Wr(this.source,Rn(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if($n(e))return this.isFullyInitialized()&&!this.filtered_;const t=Pn(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Yr(e,t,i,n,r,s){const o=n.filter((e=>e.type===i));o.sort(((t,i)=>function(e,t,i){if(null==t.childName||null==i.childName)throw ce("Should only compare child_ events.");const n=new Kn(t.childName,t.snapshotNode),r=new Kn(i.childName,i.snapshotNode);return e.index_.compare(n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,i))),o.forEach((i=>{const n=function(e,t,i){return"value"===t.type||"child_removed"===t.type||(t.prevName=i.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,i,s);r.forEach((r=>{r.respondsTo(i.type)&&t.push(r.createEvent(n,e.query_))}))}))}function Jr(e,t){return{eventCache:e,serverCache:t}}function Qr(e,t,i,n){return Jr(new Kr(t,i,n),e.serverCache)}function Xr(e,t,i,n){return Jr(e.eventCache,new Kr(t,i,n))}function Zr(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function es(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ts;class is{constructor(e,t=(()=>(ts||(ts=new er(Bi)),ts))()){this.value=e,this.children=t}static fromObject(e){let t=new is(null);return Yi(e,((e,i)=>{t=t.set(new kn(e),i)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:An(),value:this.value};if($n(e))return null;{const i=Pn(e),n=this.children.get(i);if(null!==n){const r=n.findRootMostMatchingPathAndValue(Rn(e),t);if(null!=r){return{path:Mn(new kn(i),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if($n(e))return this;{const t=Pn(e),i=this.children.get(t);return null!==i?i.subtree(Rn(e)):new is(null)}}set(e,t){if($n(e))return new is(t,this.children);{const i=Pn(e),n=(this.children.get(i)||new is(null)).set(Rn(e),t),r=this.children.insert(i,n);return new is(this.value,r)}}remove(e){if($n(e))return this.children.isEmpty()?new is(null):new is(null,this.children);{const t=Pn(e),i=this.children.get(t);if(i){const n=i.remove(Rn(e));let r;return r=n.isEmpty()?this.children.remove(t):this.children.insert(t,n),null===this.value&&r.isEmpty()?new is(null):new is(this.value,r)}return this}}get(e){if($n(e))return this.value;{const t=Pn(e),i=this.children.get(t);return i?i.get(Rn(e)):null}}setTree(e,t){if($n(e))return t;{const i=Pn(e),n=(this.children.get(i)||new is(null)).setTree(Rn(e),t);let r;return r=n.isEmpty()?this.children.remove(i):this.children.insert(i,n),new is(this.value,r)}}fold(e){return this.fold_(An(),e)}fold_(e,t){const i={};return this.children.inorderTraversal(((n,r)=>{i[n]=r.fold_(Mn(e,n),t)})),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,An(),t)}findOnPath_(e,t,i){const n=!!this.value&&i(t,this.value);if(n)return n;if($n(e))return null;{const n=Pn(e),r=this.children.get(n);return r?r.findOnPath_(Rn(e),Mn(t,n),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,An(),t)}foreachOnPath_(e,t,i){if($n(e))return this;{this.value&&i(t,this.value);const n=Pn(e),r=this.children.get(n);return r?r.foreachOnPath_(Rn(e),Mn(t,n),i):new is(null)}}foreach(e){this.foreach_(An(),e)}foreach_(e,t){this.children.inorderTraversal(((i,n)=>{n.foreach_(Mn(e,i),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,i)=>{i.value&&e(t,i.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.writeTree_=e}static empty(){return new ns(new is(null))}}function rs(e,t,i){if($n(t))return new ns(new is(i));{const n=e.writeTree_.findRootMostValueAndPath(t);if(null!=n){const r=n.path;let s=n.value;const o=Fn(r,t);return s=s.updateChild(o,i),new ns(e.writeTree_.set(r,s))}{const n=new is(i),r=e.writeTree_.setTree(t,n);return new ns(r)}}}function ss(e,t,i){let n=e;return Yi(i,((e,i)=>{n=rs(n,Mn(t,e),i)})),n}function os(e,t){if($n(t))return ns.empty();{const i=e.writeTree_.setTree(t,new is(null));return new ns(i)}}function as(e,t){return null!=ls(e,t)}function ls(e,t){const i=e.writeTree_.findRootMostValueAndPath(t);return null!=i?e.writeTree_.get(i.path).getChild(Fn(i.path,t)):null}function cs(e){const t=[],i=e.writeTree_.value;return null!=i?i.isLeafNode()||i.forEachChild(dr,((e,i)=>{t.push(new Kn(e,i))})):e.writeTree_.children.inorderTraversal(((e,i)=>{null!=i.value&&t.push(new Kn(e,i.value))})),t}function ds(e,t){if($n(t))return e;{const i=ls(e,t);return new ns(null!=i?new is(i):e.writeTree_.subtree(t))}}function hs(e){return e.writeTree_.isEmpty()}function us(e,t){return ps(An(),e.writeTree_,t)}function ps(e,t,i){if(null!=t.value)return i.updateChild(e,t.value);{let n=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?(le(null!==r.value,"Priority writes must always be leaf nodes"),n=r.value):i=ps(Mn(e,t),r,i)})),i.getChild(e).isEmpty()||null===n||(i=i.updateChild(Mn(e,".priority"),n)),i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(e,t){return Ss(t,e)}function ms(e,t){const i=e.allWrites.findIndex((e=>e.writeId===t));le(i>=0,"removeWrite called with nonexistent writeId.");const n=e.allWrites[i];e.allWrites.splice(i,1);let r=n.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=i&&vs(t,n.path)?r=!1:zn(n.path,t.path)&&(s=!0)),o--}if(r){if(s)return function(e){e.visibleWrites=_s(e.allWrites,gs,An()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(n.snap)e.visibleWrites=os(e.visibleWrites,n.path);else{Yi(n.children,(t=>{e.visibleWrites=os(e.visibleWrites,Mn(n.path,t))}))}return!0}return!1}function vs(e,t){if(e.snap)return zn(e.path,t);for(const i in e.children)if(e.children.hasOwnProperty(i)&&zn(Mn(e.path,i),t))return!0;return!1}function gs(e){return e.visible}function _s(e,t,i){let n=ns.empty();for(let r=0;r<e.length;++r){const s=e[r];if(t(s)){const e=s.path;let t;if(s.snap)zn(i,e)?(t=Fn(i,e),n=rs(n,t,s.snap)):zn(e,i)&&(t=Fn(e,i),n=rs(n,An(),s.snap.getChild(t)));else{if(!s.children)throw ce("WriteRecord should have .snap or .children");if(zn(i,e))t=Fn(i,e),n=ss(n,t,s.children);else if(zn(e,i))if(t=Fn(e,i),$n(t))n=ss(n,An(),s.children);else{const e=Le(s.children,Pn(t));if(e){const i=e.getChild(Rn(t));n=rs(n,An(),i)}}}}}return n}function ys(e,t,i,n,r){if(n||r){const s=ds(e.visibleWrites,t);if(!r&&hs(s))return i;if(r||null!=i||as(s,An())){const s=function(e){return(e.visible||r)&&(!n||!~n.indexOf(e.writeId))&&(zn(e.path,t)||zn(t,e.path))};return us(_s(e.allWrites,s,t),i||_r.EMPTY_NODE)}return null}{const n=ls(e.visibleWrites,t);if(null!=n)return n;{const n=ds(e.visibleWrites,t);if(hs(n))return i;if(null!=i||as(n,An())){return us(n,i||_r.EMPTY_NODE)}return null}}}function bs(e,t,i,n){return ys(e.writeTree,e.treePath,t,i,n)}function ws(e,t){return function(e,t,i){let n=_r.EMPTY_NODE;const r=ls(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(dr,((e,t)=>{n=n.updateImmediateChild(e,t)})),n;if(i){const r=ds(e.visibleWrites,t);return i.forEachChild(dr,((e,t)=>{const i=us(ds(r,new kn(e)),t);n=n.updateImmediateChild(e,i)})),cs(r).forEach((e=>{n=n.updateImmediateChild(e.name,e.node)})),n}return cs(ds(e.visibleWrites,t)).forEach((e=>{n=n.updateImmediateChild(e.name,e.node)})),n}(e.writeTree,e.treePath,t)}function xs(e,t,i,n){return function(e,t,i,n,r){le(n||r,"Either existingEventSnap or existingServerSnap must exist");const s=Mn(t,i);if(as(e.visibleWrites,s))return null;{const t=ds(e.visibleWrites,s);return hs(t)?r.getChild(i):us(t,r.getChild(i))}}(e.writeTree,e.treePath,t,i,n)}function Cs(e,t){return function(e,t){return ls(e.visibleWrites,t)}(e.writeTree,Mn(e.treePath,t))}function Is(e,t,i,n,r,s){return function(e,t,i,n,r,s,o){let a;const l=ds(e.visibleWrites,t),c=ls(l,An());if(null!=c)a=c;else{if(null==i)return[];a=us(l,i)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),i=s?a.getReverseIteratorFrom(n,o):a.getIteratorFrom(n,o);let l=i.getNext();for(;l&&e.length<r;)0!==t(l,n)&&e.push(l),l=i.getNext();return e}}(e.writeTree,e.treePath,t,i,n,r,s)}function Ts(e,t,i){return function(e,t,i,n){const r=Mn(t,i),s=ls(e.visibleWrites,r);if(null!=s)return s;if(n.isCompleteForChild(i))return us(ds(e.visibleWrites,r),n.getNode().getImmediateChild(i));return null}(e.writeTree,e.treePath,t,i)}function Es(e,t){return Ss(Mn(e.treePath,t),e.writeTree)}function Ss(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;le("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),le(".priority"!==i,"Only non-priority child changes can be tracked.");const n=this.changeMap.get(i);if(n){const r=n.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(i,Sr(i,e.snapshotNode,n.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(i);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(i,Er(i,n.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(i,Tr(i,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw ce("Illegal combination of changes: "+e+" occurred after "+n);this.changeMap.set(i,Sr(i,e.snapshotNode,n.oldSnap))}}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}};class Ps{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Kr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ts(this.writes_,e,t)}}getChildAfterChild(e,t,i){const n=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:es(this.viewCache_),r=Is(this.writes_,n,t,1,i,e);return 0===r.length?null:r[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(e,t,i,n,r){const s=new ks;let o,a;if(i.type===qr.OVERWRITE){const l=i;l.source.fromUser?o=Ds(e,t,l.path,l.snap,n,r,s):(le(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!$n(l.path),o=Os(e,t,l.path,l.snap,n,r,a,s))}else if(i.type===qr.MERGE){const l=i;l.source.fromUser?o=function(e,t,i,n,r,s,o){let a=t;return n.foreach(((n,l)=>{const c=Mn(i,n);Ls(t,Pn(c))&&(a=Ds(e,a,c,l,r,s,o))})),n.foreach(((n,l)=>{const c=Mn(i,n);Ls(t,Pn(c))||(a=Ds(e,a,c,l,r,s,o))})),a}(e,t,l.path,l.children,n,r,s):(le(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=$s(e,t,l.path,l.children,n,r,a,s))}else if(i.type===qr.ACK_USER_WRITE){const a=i;o=a.revert?function(e,t,i,n,r,s){let o;if(null!=Cs(n,i))return t;{const a=new Ps(n,t,r),l=t.eventCache.getNode();let c;if($n(i)||".priority"===Pn(i)){let i;if(t.serverCache.isFullyInitialized())i=bs(n,es(t));else{const e=t.serverCache.getNode();le(e instanceof _r,"serverChildren would be complete if leaf node"),i=ws(n,e)}c=e.filter.updateFullNode(l,i,s)}else{const r=Pn(i);let d=Ts(n,r,t.serverCache);null==d&&t.serverCache.isCompleteForChild(r)&&(d=l.getImmediateChild(r)),c=null!=d?e.filter.updateChild(l,r,d,Rn(i),a,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(l,r,_r.EMPTY_NODE,Rn(i),a,s):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=bs(n,es(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=Cs(n,An()),Qr(t,c,o,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,a.path,n,r,s):function(e,t,i,n,r,s,o){if(null!=Cs(r,i))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=n.value){if($n(i)&&l.isFullyInitialized()||l.isCompleteForPath(i))return Os(e,t,i,l.getNode().getChild(i),r,s,a,o);if($n(i)){let n=new is(null);return l.getNode().forEachChild(Qn,((e,t)=>{n=n.set(new kn(e),t)})),$s(e,t,i,n,r,s,a,o)}return t}{let c=new is(null);return n.foreach(((e,t)=>{const n=Mn(i,e);l.isCompleteForPath(n)&&(c=c.set(e,l.getNode().getChild(n)))})),$s(e,t,i,c,r,s,a,o)}}(e,t,a.path,a.affectedTree,n,r,s)}else{if(i.type!==qr.LISTEN_COMPLETE)throw ce("Unknown operation type: "+i.type);o=function(e,t,i,n,r){const s=t.serverCache,o=Xr(t,s.getNode(),s.isFullyInitialized()||$n(i),s.isFiltered());return Rs(e,o,i,n,As,r)}(e,t,i.path,n,s)}const l=s.getChanges();return function(e,t,i){const n=t.eventCache;if(n.isFullyInitialized()){const r=n.getNode().isLeafNode()||n.getNode().isEmpty(),s=Zr(e);(i.length>0||!e.eventCache.isFullyInitialized()||r&&!n.getNode().equals(s)||!n.getNode().getPriority().equals(s.getPriority()))&&i.push(Ir(Zr(t)))}}(t,o,l),{viewCache:o,changes:l}}function Rs(e,t,i,n,r,s){const o=t.eventCache;if(null!=Cs(n,i))return t;{let a,l;if($n(i))if(le(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const i=es(t),r=ws(n,i instanceof _r?i:_r.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,s)}else{const i=bs(n,es(t));a=e.filter.updateFullNode(t.eventCache.getNode(),i,s)}else{const c=Pn(i);if(".priority"===c){le(1===Nn(i),"Can't have a priority with additional path components");const r=o.getNode();l=t.serverCache.getNode();const s=xs(n,i,r,l);a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{const d=Rn(i);let h;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=xs(n,i,o.getNode(),l);h=null!=e?o.getNode().getImmediateChild(c).updateChild(d,e):o.getNode().getImmediateChild(c)}else h=Ts(n,c,t.serverCache);a=null!=h?e.filter.updateChild(o.getNode(),c,h,d,r,s):o.getNode()}}return Qr(t,a,o.isFullyInitialized()||$n(i),e.filter.filtersNodes())}}function Os(e,t,i,n,r,s,o,a){const l=t.serverCache;let c;const d=o?e.filter:e.filter.getIndexedFilter();if($n(i))c=d.updateFullNode(l.getNode(),n,null);else if(d.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(i,n);c=d.updateFullNode(l.getNode(),e,null)}else{const e=Pn(i);if(!l.isCompleteForPath(i)&&Nn(i)>1)return t;const r=Rn(i),s=l.getNode().getImmediateChild(e).updateChild(r,n);c=".priority"===e?d.updatePriority(l.getNode(),s):d.updateChild(l.getNode(),e,s,r,As,null)}const h=Xr(t,c,l.isFullyInitialized()||$n(i),d.filtersNodes());return Rs(e,h,i,r,new Ps(r,h,s),a)}function Ds(e,t,i,n,r,s,o){const a=t.eventCache;let l,c;const d=new Ps(r,t,s);if($n(i))c=e.filter.updateFullNode(t.eventCache.getNode(),n,o),l=Qr(t,c,!0,e.filter.filtersNodes());else{const r=Pn(i);if(".priority"===r)c=e.filter.updatePriority(t.eventCache.getNode(),n),l=Qr(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=Rn(i),c=a.getNode().getImmediateChild(r);let h;if($n(s))h=n;else{const e=d.getCompleteChild(r);h=null!=e?".priority"===On(s)&&e.getChild(Ln(s)).isEmpty()?e:e.updateChild(s,n):_r.EMPTY_NODE}if(c.equals(h))l=t;else{l=Qr(t,e.filter.updateChild(a.getNode(),r,h,s,d,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Ls(e,t){return e.eventCache.isCompleteForChild(t)}function Ms(e,t,i){return i.foreach(((e,i)=>{t=t.updateChild(e,i)})),t}function $s(e,t,i,n,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=$n(i)?n:new is(null).setTree(i,n);const d=t.serverCache.getNode();return l.children.inorderTraversal(((i,n)=>{if(d.hasChild(i)){const l=Ms(0,t.serverCache.getNode().getImmediateChild(i),n);c=Os(e,c,new kn(i),l,r,s,o,a)}})),l.children.inorderTraversal(((i,n)=>{const l=!t.serverCache.isCompleteForChild(i)&&null===n.value;if(!d.hasChild(i)&&!l){const l=Ms(0,t.serverCache.getNode().getImmediateChild(i),n);c=Os(e,c,new kn(i),l,r,s,o,a)}})),c}class Fs{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,n=new kr(i.getIndex()),r=(s=i).loadsAllData()?new kr(s.getIndex()):s.hasLimit()?new Pr(s):new Ar(s);var s;this.processor_=function(e){return{filter:e}}(r);const o=t.serverCache,a=t.eventCache,l=n.updateFullNode(_r.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(_r.EMPTY_NODE,a.getNode(),null),d=new Kr(l,o.isFullyInitialized(),n.filtersNodes()),h=new Kr(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Jr(h,d),this.eventGenerator_=new Gr(this.query_)}get query(){return this.query_}}function Us(e,t){const i=es(e.viewCache_);return i&&(e.query._queryParams.loadsAllData()||!$n(t)&&!i.getImmediateChild(Pn(t)).isEmpty())?i.getChild(t):null}function zs(e){return 0===e.eventRegistrations_.length}function qs(e,t,i){const n=[];if(i){le(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(i,r);t&&n.push(t)}))}if(t){let i=[];for(let n=0;n<e.eventRegistrations_.length;++n){const r=e.eventRegistrations_[n];if(r.matches(t)){if(t.hasAnyCallback()){i=i.concat(e.eventRegistrations_.slice(n+1));break}}else i.push(r)}e.eventRegistrations_=i}else e.eventRegistrations_=[];return n}function Vs(e,t,i,n){t.type===qr.MERGE&&null!==t.source.queryId&&(le(es(e.viewCache_),"We should always have a full cache before handling merges"),le(Zr(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,s=Ns(e.processor_,r,t,i,n);var o,a;return o=e.processor_,a=s.viewCache,le(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),le(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),le(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,js(e,s.changes,s.viewCache.eventCache.getNode(),null)}function js(e,t,i,n){const r=n?[n]:e.eventRegistrations_;return function(e,t,i,n){const r=[],s=[];return t.forEach((t=>{var i;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((i=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:i}))})),Yr(e,r,"child_removed",t,n,i),Yr(e,r,"child_added",t,n,i),Yr(e,r,"child_moved",s,n,i),Yr(e,r,"child_changed",t,n,i),Yr(e,r,"value",t,n,i),r}(e.eventGenerator_,t,i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hs,Bs;class Ws{constructor(){this.views=new Map}}function Ks(e,t,i,n){const r=t.source.queryId;if(null!==r){const s=e.views.get(r);return le(null!=s,"SyncTree gave us an op for an invalid query."),Vs(s,t,i,n)}{let r=[];for(const s of e.views.values())r=r.concat(Vs(s,t,i,n));return r}}function Gs(e,t,i,n,r,s){const o=function(e,t,i,n,r){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=bs(i,r?n:null),s=!1;e?s=!0:n instanceof _r?(e=ws(i,n),s=!1):(e=_r.EMPTY_NODE,s=!1);const o=Jr(new Kr(e,s,!1),new Kr(n,r,!1));return new Fs(t,o)}return o}(e,t,n,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,i),function(e,t){const i=e.viewCache_.eventCache,n=[];i.getNode().isLeafNode()||i.getNode().forEachChild(dr,((e,t)=>{n.push(Tr(e,t))}));return i.isFullyInitialized()&&n.push(Ir(i.getNode())),js(e,n,i.getNode(),t)}(o,i)}function Ys(e,t,i,n){const r=t._queryIdentifier,s=[];let o=[];const a=eo(e);if("default"===r)for(const[t,r]of e.views.entries())o=o.concat(qs(r,i,n)),zs(r)&&(e.views.delete(t),r.query._queryParams.loadsAllData()||s.push(r.query));else{const t=e.views.get(r);t&&(o=o.concat(qs(t,i,n)),zs(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!eo(e)&&s.push(new(le(Hs,"Reference.ts has not been loaded"),Hs)(t._repo,t._path)),{removed:s,events:o}}function Js(e){const t=[];for(const i of e.views.values())i.query._queryParams.loadsAllData()||t.push(i);return t}function Qs(e,t){let i=null;for(const n of e.views.values())i=i||Us(n,t);return i}function Xs(e,t){if(t._queryParams.loadsAllData())return to(e);{const i=t._queryIdentifier;return e.views.get(i)}}function Zs(e,t){return null!=Xs(e,t)}function eo(e){return null!=to(e)}function to(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let io=1;class no{constructor(e){this.listenProvider_=e,this.syncPointTree_=new is(null),this.pendingWriteTree_={visibleWrites:ns.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ro(e,t,i,n,r){return function(e,t,i,n,r){le(n>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:i,writeId:n,visible:r}),r&&(e.visibleWrites=rs(e.visibleWrites,t,i)),e.lastWriteId=n}(e.pendingWriteTree_,t,i,n,r),r?ho(e,new Br({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,i)):[]}function so(e,t,i=!1){const n=function(e,t){for(let i=0;i<e.allWrites.length;i++){const n=e.allWrites[i];if(n.writeId===t)return n}return null}(e.pendingWriteTree_,t);if(ms(e.pendingWriteTree_,t)){let t=new is(null);return null!=n.snap?t=t.set(An(),!0):Yi(n.children,(e=>{t=t.set(new kn(e),!0)})),ho(e,new jr(n.path,t,i))}return[]}function oo(e,t,i){return ho(e,new Br({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}function ao(e,t,i,n,r=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&("default"===t._queryIdentifier||Zs(o,t))){const l=Ys(o,t,i,n);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!r){const i=-1!==c.findIndex((e=>e._queryParams.loadsAllData())),r=e.syncPointTree_.findOnPath(s,((e,t)=>eo(t)));if(i&&!r){const t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){const i=function(e){return e.fold(((e,t,i)=>{if(t&&eo(t)){return[to(t)]}{let e=[];return t&&(e=Js(t)),Yi(i,((t,i)=>{e=e.concat(i)})),e}}))}(t);for(let t=0;t<i.length;++t){const n=i[t],r=n.query,s=fo(e,n);e.listenProvider_.startListening(bo(r),mo(e,r),s.hashFn,s.onComplete)}}}if(!r&&c.length>0&&!n)if(i){const i=null;e.listenProvider_.stopListening(bo(t),i)}else c.forEach((t=>{const i=e.queryToTagMap.get(vo(t));e.listenProvider_.stopListening(bo(t),i)}))}!function(e,t){for(let i=0;i<t.length;++i){const n=t[i];if(!n._queryParams.loadsAllData()){const t=vo(n),i=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(i)}}}(e,c)}return a}function lo(e,t,i,n=!1){const r=t._path;let s=null,o=!1;e.syncPointTree_.foreachOnPath(r,((e,t)=>{const i=Fn(e,r);s=s||Qs(t,i),o=o||eo(t)}));let a,l=e.syncPointTree_.get(r);if(l?(o=o||eo(l),s=s||Qs(l,An())):(l=new Ws,e.syncPointTree_=e.syncPointTree_.set(r,l)),null!=s)a=!0;else{a=!1,s=_r.EMPTY_NODE;e.syncPointTree_.subtree(r).foreachChild(((e,t)=>{const i=Qs(t,An());i&&(s=s.updateImmediateChild(e,i))}))}const c=Zs(l,t);if(!c&&!t._queryParams.loadsAllData()){const i=vo(t);le(!e.queryToTagMap.has(i),"View does not exist, but we have a tag");const n=io++;e.queryToTagMap.set(i,n),e.tagToQueryMap.set(n,i)}let d=Gs(l,t,i,fs(e.pendingWriteTree_,r),s,a);if(!c&&!o&&!n){const i=Xs(l,t);d=d.concat(function(e,t,i){const n=t._path,r=mo(e,t),s=fo(e,i),o=e.listenProvider_.startListening(bo(t),r,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(n);if(r)le(!eo(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,i)=>{if(!$n(e)&&t&&eo(t))return[to(t).query];{let e=[];return t&&(e=e.concat(Js(t).map((e=>e.query)))),Yi(i,((t,i)=>{e=e.concat(i)})),e}}));for(let i=0;i<t.length;++i){const n=t[i];e.listenProvider_.stopListening(bo(n),mo(e,n))}}return o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,i))}return d}function co(e,t,i){const n=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,i)=>{const n=Qs(i,Fn(e,t));if(n)return n}));return ys(n,t,r,i,!0)}function ho(e,t){return uo(t,e.syncPointTree_,null,fs(e.pendingWriteTree_,An()))}function uo(e,t,i,n){if($n(e.path))return po(e,t,i,n);{const r=t.get(An());null==i&&null!=r&&(i=Qs(r,An()));let s=[];const o=Pn(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=i?i.getImmediateChild(o):null,t=Es(n,o);s=s.concat(uo(a,l,e,t))}return r&&(s=s.concat(Ks(r,e,n,i))),s}}function po(e,t,i,n){const r=t.get(An());null==i&&null!=r&&(i=Qs(r,An()));let s=[];return t.children.inorderTraversal(((t,r)=>{const o=i?i.getImmediateChild(t):null,a=Es(n,t),l=e.operationForChild(t);l&&(s=s.concat(po(l,r,o,a)))})),r&&(s=s.concat(Ks(r,e,n,i))),s}function fo(e,t){const i=t.query,n=mo(e,i);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||_r.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return n?function(e,t,i){const n=go(e,i);if(n){const i=_o(n),r=i.path,s=i.queryId,o=Fn(r,t);return yo(e,r,new Hr(Vr(s),o))}return[]}(e,i._path,n):function(e,t){return ho(e,new Hr({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,i._path);{const n=function(e,t){let i="Unknown Error";"too_big"===e?i="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?i="Client doesn't have permission to access the desired data.":"unavailable"===e&&(i="The service is unavailable");const n=new Error(e+" at "+t._path.toString()+": "+i);return n.code=e.toUpperCase(),n}(t,i);return ao(e,i,null,n)}}}}function mo(e,t){const i=vo(t);return e.queryToTagMap.get(i)}function vo(e){return e._path.toString()+"$"+e._queryIdentifier}function go(e,t){return e.tagToQueryMap.get(t)}function _o(e){const t=e.indexOf("$");return le(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new kn(e.substr(0,t))}}function yo(e,t,i){const n=e.syncPointTree_.get(t);le(n,"Missing sync point for query tag that we're tracking");return Ks(n,i,fs(e.pendingWriteTree_,t),null)}function bo(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(le(Bs,"Reference.ts has not been loaded"),Bs)(e._repo,e._path):e}class wo{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new wo(t)}node(){return this.node_}}class xo{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Mn(this.path_,e);return new xo(this.syncTree_,t)}node(){return co(this.syncTree_,this.path_)}}const Co=function(e){return(e=e||{}).timestamp=e.timestamp||(new Date).getTime(),e},Io=function(e,t,i){return e&&"object"==typeof e?(le(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?To(e[".sv"],t,i):"object"==typeof e[".sv"]?Eo(e[".sv"],t):void le(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},To=function(e,t,i){if("timestamp"===e)return i.timestamp;le(!1,"Unexpected server value: "+e)},Eo=function(e,t,i){e.hasOwnProperty("increment")||le(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const n=e.increment;"number"!=typeof n&&le(!1,"Unexpected increment value: "+n);const r=t.node();if(le(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return n;const s=r.getValue();return"number"!=typeof s?n:s+n},So=function(e,t,i,n){return Ao(t,new xo(i,e),n)},ko=function(e,t,i){return Ao(e,new wo(t),i)};function Ao(e,t,i){const n=e.getPriority().val(),r=Io(n,t.getImmediateChild(".priority"),i);let s;if(e.isLeafNode()){const n=e,s=Io(n.getValue(),t,i);return s!==n.getValue()||r!==n.getPriority().val()?new cr(s,wr(r)):e}{const n=e;return s=n,r!==n.getPriority().val()&&(s=s.updatePriority(new cr(r))),n.forEachChild(dr,((e,n)=>{const r=Ao(n,t.getImmediateChild(e),i);r!==n&&(s=s.updateImmediateChild(e,r))})),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function No(e,t){let i=t instanceof kn?t:new kn(t),n=e,r=Pn(i);for(;null!==r;){const e=Le(n.node.children,r)||{children:{},childCount:0};n=new Po(r,n,e),i=Rn(i),r=Pn(i)}return n}function Ro(e){return e.node.value}function Oo(e,t){e.node.value=t,Fo(e)}function Do(e){return e.node.childCount>0}function Lo(e,t){Yi(e.node.children,((i,n)=>{t(new Po(i,e,n))}))}function Mo(e,t,i,n){i&&!n&&t(e),Lo(e,(e=>{Mo(e,t,!0,n)})),i&&n&&t(e)}function $o(e){return new kn(null===e.parent?e.name:$o(e.parent)+"/"+e.name)}function Fo(e){null!==e.parent&&function(e,t,i){const n=function(e){return void 0===Ro(e)&&!Do(e)}(i),r=De(e.node.children,t);n&&r?(delete e.node.children[t],e.node.childCount--,Fo(e)):n||r||(e.node.children[t]=i.node,e.node.childCount++,Fo(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const Uo=/[\[\].#$\/\u0000-\u001F\u007F]/,zo=/[\[\].#$\u0000-\u001F\u007F]/,qo=10485760,Vo=function(e){return"string"==typeof e&&0!==e.length&&!Uo.test(e)},jo=function(e){return"string"==typeof e&&0!==e.length&&!zo.test(e)},Ho=function(e,t,i,n){n&&void 0===t||Bo(He(e,"value"),t,i)},Bo=function(e,t,i){const n=i instanceof kn?new qn(i,e):i;if(void 0===t)throw new Error(e+"contains undefined "+jn(n));if("function"==typeof t)throw new Error(e+"contains a function "+jn(n)+" with contents = "+t.toString());if(qi(t))throw new Error(e+"contains "+t.toString()+" "+jn(n));if("string"==typeof t&&t.length>qo/3&&Be(t)>qo)throw new Error(e+"contains a string greater than "+qo+" utf8 bytes "+jn(n)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let i=!1,r=!1;if(Yi(t,((t,s)=>{if(".value"===t)i=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!Vo(t)))throw new Error(e+" contains an invalid key ("+t+") "+jn(n)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');!function(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Be(t),Vn(e)}(n,t),Bo(e,s,n),function(e){const t=e.parts_.pop();e.byteLength_-=Be(t),e.parts_.length>0&&(e.byteLength_-=1)}(n)})),i&&r)throw new Error(e+' contains ".value" child '+jn(n)+" in addition to actual children.")}},Wo=function(e,t,i,n){if(!(n&&void 0===i||jo(i)))throw new Error(He(e,t)+'was an invalid path = "'+i+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Ko=function(e,t,i,n){i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),Wo(e,t,i,n)},Go=function(e,t){if(".info"===Pn(t))throw new Error(e+" failed = Can't modify data under /.info/")},Yo=function(e,t){const i=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Vo(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==i.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),jo(e)}(i))throw new Error(He(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jo{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Qo(e,t){let i=null;for(let n=0;n<t.length;n++){const r=t[n],s=r.getPath();null===i||Un(s,i.path)||(e.eventLists_.push(i),i=null),null===i&&(i={events:[],path:s}),i.events.push(r)}i&&e.eventLists_.push(i)}function Xo(e,t,i){Qo(e,i),ea(e,(e=>Un(e,t)))}function Zo(e,t,i){Qo(e,i),ea(e,(e=>zn(e,t)||zn(t,e)))}function ea(e,t){e.recursionDepth_++;let i=!0;for(let n=0;n<e.eventLists_.length;n++){const r=e.eventLists_[n];if(r){t(r.path)?(ta(e.eventLists_[n]),e.eventLists_[n]=null):i=!1}}i&&(e.eventLists_=[]),e.recursionDepth_--}function ta(e){for(let t=0;t<e.events.length;t++){const i=e.events[t];if(null!==i){e.events[t]=null;const n=i.getEventRunner();Di&&Mi("event: "+i.toString()),Zi(n)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia="repo_interrupt",na=25;class ra{constructor(e,t,i,n){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=n,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Jo,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Mr(),this.transactionQueueTree_=new Po,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function sa(e,t,i){if(e.stats_=fn(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Dr(e.repoInfo_,((t,i,n,r)=>{la(e,t,i,n,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>ca(e,!0)),0);else{if(null!=i){if("object"!=typeof i)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Re(i)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Wn(e.repoInfo_,t,((t,i,n,r)=>{la(e,t,i,n,r)}),(t=>{ca(e,t)}),(t=>{!function(e,t){Yi(t,((t,i)=>{da(e,t,i)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,i),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const i=e.toString();return pn[i]||(pn[i]=t()),pn[i]}(e.repoInfo_,(()=>new zr(e.stats_,e.server_))),e.infoData_=new Lr,e.infoSyncTree_=new no({startListening:(t,i,n,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=oo(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),da(e,"connected",!1),e.serverSyncTree_=new no({startListening:(t,i,n,r)=>(e.server_.listen(t,n,i,((i,n)=>{const s=r(i,n);Zo(e.eventQueue_,t._path,s)})),[]),stopListening:(t,i)=>{e.server_.unlisten(t,i)}})}function oa(e){const t=e.infoData_.getNode(new kn(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function aa(e){return Co({timestamp:oa(e)})}function la(e,t,i,n,r){e.dataUpdateCount++;const s=new kn(t);i=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,i):i;let o=[];if(r)if(n){const t=$e(i,(e=>wr(e)));o=function(e,t,i,n){const r=go(e,n);if(r){const n=_o(r),s=n.path,o=n.queryId,a=Fn(s,t),l=is.fromObject(i);return yo(e,s,new Wr(Vr(o),a,l))}return[]}(e.serverSyncTree_,s,t,r)}else{const t=wr(i);o=function(e,t,i,n){const r=go(e,n);if(null!=r){const n=_o(r),s=n.path,o=n.queryId,a=Fn(s,t);return yo(e,s,new Br(Vr(o),a,i))}return[]}(e.serverSyncTree_,s,t,r)}else if(n){const t=$e(i,(e=>wr(e)));o=function(e,t,i){const n=is.fromObject(i);return ho(e,new Wr({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}(e.serverSyncTree_,s,t)}else{const t=wr(i);o=oo(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=ga(e,s)),Zo(e.eventQueue_,a,o)}function ca(e,t){da(e,"connected",t),!1===t&&function(e){fa(e,"onDisconnectEvents");const t=aa(e),i=Mr();Fr(e.onDisconnect_,An(),((n,r)=>{const s=So(n,r,e.serverSyncTree_,t);$r(i,n,s)}));let n=[];Fr(i,An(),((t,i)=>{n=n.concat(oo(e.serverSyncTree_,t,i));const r=xa(e,t);ga(e,r)})),e.onDisconnect_=Mr(),Zo(e.eventQueue_,An(),n)}(e)}function da(e,t,i){const n=new kn("/.info/"+t),r=wr(i);e.infoData_.updateSnapshot(n,r);const s=oo(e.infoSyncTree_,n,r);Zo(e.eventQueue_,n,s)}function ha(e){return e.nextWriteId_++}function ua(e,t,i,n,r){fa(e,"set",{path:t.toString(),value:i,priority:n});const s=aa(e),o=wr(i,n),a=co(e.serverSyncTree_,t),l=ko(o,a,s),c=ha(e),d=ro(e.serverSyncTree_,t,l,c,!0);Qo(e.eventQueue_,d),e.server_.put(t.toString(),o.val(!0),((i,n)=>{const s="ok"===i;s||zi("set at "+t+" failed: "+i);const o=so(e.serverSyncTree_,c,!s);Zo(e.eventQueue_,t,o),function(e,t,i,n){t&&Zi((()=>{if("ok"===i)t(null);else{const e=(i||"error").toUpperCase();let r=e;n&&(r+=": "+n);const s=new Error(r);s.code=e,t(s)}}))}(0,r,i,n)}));const h=xa(e,t);ga(e,h),Zo(e.eventQueue_,h,[])}function pa(e,t,i){let n;n=".info"===Pn(t._path)?ao(e.infoSyncTree_,t,i):ao(e.serverSyncTree_,t,i),Xo(e.eventQueue_,t._path,n)}function fa(e,...t){let i="";e.persistentConnection_&&(i=e.persistentConnection_.id+":"),Mi(i,...t)}function ma(e,t,i){return co(e.serverSyncTree_,t,i)||_r.EMPTY_NODE}function va(e,t=e.transactionQueueTree_){if(t||wa(e,t),Ro(t)){const i=ya(e,t);le(i.length>0,"Sending zero length transaction queue");i.every((e=>0===e.status))&&function(e,t,i){const n=i.map((e=>e.currentWriteId)),r=ma(e,t,n);let s=r;const o=r.hash();for(let e=0;e<i.length;e++){const n=i[e];le(0===n.status,"tryToSendTransactionQueue_: items in queue should all be run."),n.status=1,n.retryCount++;const r=Fn(t,n.path);s=s.updateChild(r,n.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,(n=>{fa(e,"transaction put response",{path:l.toString(),status:n});let r=[];if("ok"===n){const n=[];for(let t=0;t<i.length;t++)i[t].status=2,r=r.concat(so(e.serverSyncTree_,i[t].currentWriteId)),i[t].onComplete&&n.push((()=>i[t].onComplete(null,!0,i[t].currentOutputSnapshotResolved))),i[t].unwatcher();wa(e,No(e.transactionQueueTree_,t)),va(e,e.transactionQueueTree_),Zo(e.eventQueue_,t,r);for(let e=0;e<n.length;e++)Zi(n[e])}else{if("datastale"===n)for(let e=0;e<i.length;e++)3===i[e].status?i[e].status=4:i[e].status=0;else{zi("transaction at "+l.toString()+" failed: "+n);for(let e=0;e<i.length;e++)i[e].status=4,i[e].abortReason=n}ga(e,t)}}),o)}(e,$o(t),i)}else Do(t)&&Lo(t,(t=>{va(e,t)}))}function ga(e,t){const i=_a(e,t),n=$o(i);return function(e,t,i){if(0===t.length)return;const n=[];let r=[];const s=t.filter((e=>0===e.status)),o=s.map((e=>e.currentWriteId));for(let s=0;s<t.length;s++){const l=t[s],c=Fn(i,l.path);let d,h=!1;if(le(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)h=!0,d=l.abortReason,r=r.concat(so(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=na)h=!0,d="maxretry",r=r.concat(so(e.serverSyncTree_,l.currentWriteId,!0));else{const i=ma(e,l.path,o);l.currentInputSnapshot=i;const n=t[s].update(i.val());if(void 0!==n){Bo("transaction failed: Data returned ",n,l.path);let t=wr(n);"object"==typeof n&&null!=n&&De(n,".priority")||(t=t.updatePriority(i.getPriority()));const s=l.currentWriteId,a=aa(e),c=ko(t,i,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=ha(e),o.splice(o.indexOf(s),1),r=r.concat(ro(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),r=r.concat(so(e.serverSyncTree_,s,!0))}else h=!0,d="nodata",r=r.concat(so(e.serverSyncTree_,l.currentWriteId,!0))}Zo(e.eventQueue_,i,r),r=[],h&&(t[s].status=2,a=t[s].unwatcher,setTimeout(a,Math.floor(0)),t[s].onComplete&&("nodata"===d?n.push((()=>t[s].onComplete(null,!1,t[s].currentInputSnapshot))):n.push((()=>t[s].onComplete(new Error(d),!1,null)))))}var a;wa(e,e.transactionQueueTree_);for(let e=0;e<n.length;e++)Zi(n[e]);va(e,e.transactionQueueTree_)}(e,ya(e,i),n),n}function _a(e,t){let i,n=e.transactionQueueTree_;for(i=Pn(t);null!==i&&void 0===Ro(n);)n=No(n,i),i=Pn(t=Rn(t));return n}function ya(e,t){const i=[];return ba(e,t,i),i.sort(((e,t)=>e.order-t.order)),i}function ba(e,t,i){const n=Ro(t);if(n)for(let e=0;e<n.length;e++)i.push(n[e]);Lo(t,(t=>{ba(e,t,i)}))}function wa(e,t){const i=Ro(t);if(i){let e=0;for(let t=0;t<i.length;t++)2!==i[t].status&&(i[e]=i[t],e++);i.length=e,Oo(t,i.length>0?i:void 0)}Lo(t,(t=>{wa(e,t)}))}function xa(e,t){const i=$o(_a(e,t)),n=No(e.transactionQueueTree_,t);return function(e,t,i){let n=i?e:e.parent;for(;null!==n;){if(t(n))return!0;n=n.parent}}(n,(t=>{Ca(e,t)})),Ca(e,n),Mo(n,(t=>{Ca(e,t)})),i}function Ca(e,t){const i=Ro(t);if(i){const n=[];let r=[],s=-1;for(let t=0;t<i.length;t++)3===i[t].status||(1===i[t].status?(le(s===t-1,"All SENT items should be at beginning of queue."),s=t,i[t].status=3,i[t].abortReason="set"):(le(0===i[t].status,"Unexpected transaction status in abort"),i[t].unwatcher(),r=r.concat(so(e.serverSyncTree_,i[t].currentWriteId,!0)),i[t].onComplete&&n.push(i[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Oo(t,void 0):i.length=s+1,Zo(e.eventQueue_,$o(t),r);for(let e=0;e<n.length;e++)Zi(n[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia=function(e,t){const i=Ta(e),n=i.namespace;"firebase.com"===i.domain&&Ui(i.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),n&&"undefined"!==n||"localhost"===i.domain||Ui("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),i.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&zi("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===i.scheme||"wss"===i.scheme;return{repoInfo:new cn(i.host,i.secure,n,r,t,"",n!==i.subdomain),path:new kn(i.pathString)}},Ta=function(e){let t="",i="",n="",r="",s="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let d=e.indexOf("/");-1===d&&(d=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(d,h)),d<h&&(r=function(e){let t="";const i=e.split("/");for(let e=0;e<i.length;e++)if(i[e].length>0){let n=i[e];try{n=decodeURIComponent(n.replace(/\+/g," "))}catch(e){}t+="/"+n}return t}(e.substring(d,h)));const u=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const i of e.split("&")){if(0===i.length)continue;const n=i.split("=");2===n.length?t[decodeURIComponent(n[0])]=decodeURIComponent(n[1]):zi(`Invalid query segment '${i}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())i="localhost";else if(p.split(".").length<=2)i=p;else{const e=t.indexOf(".");n=t.substring(0,e).toLowerCase(),i=t.substring(e+1),s=n}"ns"in u&&(s=u.ns)}return{host:t,port:l,domain:i,subdomain:n,secure:o,scheme:a,pathString:r,namespace:s}},Ea="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Sa=function(){let e=0;const t=[];return function(i){const n=i===e;let r;e=i;const s=new Array(8);for(r=7;r>=0;r--)s[r]=Ea.charAt(i%64),i=Math.floor(i/64);le(0===i,"Cannot push at time == 0");let o=s.join("");if(n){for(r=11;r>=0&&63===t[r];r--)t[r]=0;t[r]++}else for(r=0;r<12;r++)t[r]=Math.floor(64*Math.random());for(r=0;r<12;r++)o+=Ea.charAt(t[r]);return le(20===o.length,"nextPushId: Length should be 20."),o}}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ka{constructor(e,t,i,n){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=n}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Re(this.snapshot.exportVal())}}class Aa{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return le(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,t,i,n){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=n}get key(){return $n(this._path)?null:On(this._path)}get ref(){return new Ra(this._repo,this._path)}get _queryIdentifier(){const e=Or(this._queryParams),t=Ki(e);return"{}"===t?"default":t}get _queryObject(){return Or(this._queryParams)}isEqual(e){if(!((e=We(e))instanceof Na))return!1;const t=this._repo===e._repo,i=Un(this._path,e._path),n=this._queryIdentifier===e._queryIdentifier;return t&&i&&n}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let i=e.pieceNum_;i<e.pieces_.length;i++)""!==e.pieces_[i]&&(t+="/"+encodeURIComponent(String(e.pieces_[i])));return t||"/"}(this._path)}}class Ra extends Na{constructor(e,t){super(e,t,new Nr,!1)}get parent(){const e=Ln(this._path);return null===e?null:new Ra(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class Oa{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new kn(e),i=La(this.ref,e);return new Oa(this._node.getChild(t),i,dr)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,i)=>e(new Oa(i,La(this.ref,t),dr))))}hasChild(e){const t=new kn(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Da(e,t){return(e=We(e))._checkNotDeleted("ref"),void 0!==t?La(e._root,t):e._root}function La(e,t){return null===Pn((e=We(e))._path)?Ko("child","path",t,!1):Wo("child","path",t,!1),new Ra(e._repo,Mn(e._path,t))}function Ma(e,t){e=We(e),Go("push",e._path),Ho("push",t,e._path,!0);const i=oa(e._repo),n=Sa(i),r=La(e,n),s=La(e,n);let o;return o=null!=t?function(e,t){e=We(e),Go("set",e._path),Ho("set",t,e._path,!1);const i=new Ce;return ua(e._repo,e._path,t,null,i.wrapCallback((()=>{}))),i.promise}(s,t).then((()=>s)):Promise.resolve(s),r.then=o.then.bind(o),r.catch=o.then.bind(o,void 0),r}class $a{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const i=t._queryParams.getIndex();return new ka("value",this,new Oa(e.snapshotNode,new Ra(t._repo,t._path),i))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Aa(this,e,t):null}matches(e){return e instanceof $a&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Fa{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Aa(this,e,t):null}createEvent(e,t){le(null!=e.childName,"Child events should have a childName.");const i=La(new Ra(t._repo,t._path),e.childName),n=t._queryParams.getIndex();return new ka(e.type,this,new Oa(e.snapshotNode,i,n),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Fa&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Ua(e,t,i,n,r){let s;if("object"==typeof n&&(s=void 0,r=n),"function"==typeof n&&(s=n),r&&r.onlyOnce){const t=i,n=(i,n)=>{pa(e._repo,e,a),t(i,n)};n.userCallback=i.userCallback,n.context=i.context,i=n}const o=new Pa(i,s||void 0),a="value"===t?new $a(o):new Fa(t,o);return function(e,t,i){let n;n=".info"===Pn(t._path)?lo(e.infoSyncTree_,t,i):lo(e.serverSyncTree_,t,i),Xo(e.eventQueue_,t._path,n)}(e._repo,e,a),()=>pa(e._repo,e,a)}!function(e){le(!Hs,"__referenceConstructor has already been defined"),Hs=e}(Ra),function(e){le(!Bs,"__referenceConstructor has already been defined"),Bs=e}(Ra);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const za="FIREBASE_DATABASE_EMULATOR_HOST",qa={};let Va=!1;function ja(e,t,i,n,r){let s=n||e.options.databaseURL;void 0===s&&(e.options.projectId||Ui("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Mi("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=Ia(s,r),c=l.repoInfo;"undefined"!=typeof process&&process.env&&(a=process.env[za]),a?(o=!0,s=`http://${a}?ns=${c.namespace}`,l=Ia(s,r),c=l.repoInfo):o=!l.repoInfo.secure;const d=r&&o?new rn(rn.OWNER):new nn(e.name,e.options,t);Yo("Invalid Firebase Database URL",l),$n(l.path)||Ui("Database URL must point to the root of a Firebase Database (not including a child path).");const h=function(e,t,i,n){let r=qa[t.name];r||(r={},qa[t.name]=r);let s=r[e.toURLString()];s&&Ui("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new ra(e,Va,i,n),r[e.toURLString()]=s,s}(c,e,d,new tn(e.name,i));return new Ba(h,e)}function Ha(e,t){const i=qa[t];i&&i[e.key]===e||Ui(`Database ${t}(${e.repoInfo_}) has already been deleted.`),function(e){e.persistentConnection_&&e.persistentConnection_.interrupt(ia)}(e),delete i[e.key]}class Ba{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(sa(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ra(this._repo,An())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Ha(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Ui("Cannot call "+e+" on a deleted database.")}}function Wa(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]])}return i}function Ka(e,t,i,n){var r,s=arguments.length,o=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(o=(s<3?r(o):s>3?r(t,i,o):r(t,i))||o);return s>3&&o&&Object.defineProperty(t,i,o),o}function Ga(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}Wn.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Wn.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){!function(e){Ii=e}(oi),ti(new Ke("database",((e,{instanceIdentifier:t})=>ja(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),ci(xi,Ci,e),ci(xi,Ci,"esm2017")}(),"function"==typeof SuppressedError&&SuppressedError;const Ya=Ga,Ja=new Ae("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Qa=new it("@firebase/auth");function Xa(e,...t){Qa.logLevel<=Qe.ERROR&&Qa.error(`Auth (${oi}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(e,...t){throw nl(e,...t)}function el(e,...t){return nl(e,...t)}function tl(e,t,i){const n=Object.assign(Object.assign({},Ya()),{[t]:i});return new Ae("auth","Firebase",n).create(t,{appName:e.name})}function il(e){return tl(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function nl(e,...t){if("string"!=typeof e){const i=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(i,...n)}return Ja.create(e,...t)}function rl(e,t,...i){if(!e)throw nl(t,...i)}function sl(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Xa(t),new Error(t)}function ol(e,t){e||sl(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function ll(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==ll()&&"https:"!==ll()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dl{constructor(e,t){this.shortDelay=e,this.longDelay=t,ol(t>e,"Short delay should be less than long delay!"),this.isMobile=Te()||Ee()}get(){return cl()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(e,t){ol(e.emulator,"Emulator should always be set here");const{url:i}=e.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void sl("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void sl("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void sl("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},fl=new dl(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function vl(e,t,i,n,r={}){return gl(e,r,(async()=>{let r={},s={};n&&("GET"===t?s=n:r={body:JSON.stringify(n)});const o=ze(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),ul.fetch()(_l(e,e.config.apiHost,i,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function gl(e,t,i){e._canInitEmulator=!1;const n=Object.assign(Object.assign({},pl),t);try{const t=new yl(e),r=await Promise.race([i(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw bl(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[i,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===i)throw bl(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===i)throw bl(e,"email-already-in-use",s);if("USER_DISABLED"===i)throw bl(e,"user-disabled",s);const a=n[i]||i.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw tl(e,a,o);Za(e,a)}}catch(t){if(t instanceof ke)throw t;Za(e,"network-request-failed",{message:String(t)})}}function _l(e,t,i,n){const r=`${t}${i}?${n}`;return e.config.emulator?hl(e.config,r):`${e.config.apiScheme}://${r}`}class yl{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(el(this.auth,"network-request-failed"))),fl.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function bl(e,t,i){const n={appName:e.name};i.email&&(n.email=i.email),i.phoneNumber&&(n.phoneNumber=i.phoneNumber);const r=el(e,t,n);return r.customData._tokenResponse=i,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wl(e,t){return vl(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function Cl(e){return 1e3*Number(e)}function Il(e){const[t,i,n]=e.split(".");if(void 0===t||void 0===i||void 0===n)return Xa("JWT malformed, contained fewer than 3 sections"),null;try{const e=me(i);return e?JSON.parse(e):(Xa("Failed to decode base64 JWT payload"),null)}catch(e){return Xa("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function Tl(e){const t=Il(e);return rl(t,"internal-error"),rl(void 0!==t.exp,"internal-error"),rl(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function El(e,t,i=!1){if(i)return t;try{return await t}catch(t){throw t instanceof ke&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Sl{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=xl(this.lastLoginAt),this.creationTime=xl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Al(e){var t;const i=e.auth,n=await e.getIdToken(),r=await El(e,wl(i,{idToken:n}));rl(null==r?void 0:r.users.length,i,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?Pl(s.providerUserInfo):[],a=function(e,t){const i=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...i,...t]}(e.providerData,o),l=e.isAnonymous,c=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!l&&c,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new kl(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,h)}function Pl(e){return e.map((e=>{var{providerId:t}=e,i=Wa(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){rl(e.idToken,"internal-error"),rl(void 0!==e.idToken,"internal-error"),rl(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):Tl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){rl(0!==e.length,"internal-error");const t=Tl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(rl(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:n,expiresIn:r}=await async function(e,t){const i=await gl(e,{},(async()=>{const i=ze({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:r}=e.config,s=_l(e,n,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",ul.fetch()(s,{method:"POST",headers:o,body:i})}));return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}(e,t);this.updateTokensAndExpiration(i,n,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*i}static fromJSON(e,t){const{refreshToken:i,accessToken:n,expirationTime:r}=t,s=new Nl;return i&&(rl("string"==typeof i,"internal-error",{appName:e}),s.refreshToken=i),n&&(rl("string"==typeof n,"internal-error",{appName:e}),s.accessToken=n),r&&(rl("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Nl,this.toJSON())}_performRefresh(){return sl("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(e,t){rl("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Ol{constructor(e){var{uid:t,auth:i,stsTokenManager:n}=e,r=Wa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Sl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new kl(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await El(this,this.stsTokenManager.getToken(this.auth,e));return rl(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const i=We(e),n=await i.getIdToken(t),r=Il(n);rl(r&&r.exp&&r.auth_time&&r.iat,i.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:n,authTime:xl(Cl(r.auth_time)),issuedAtTime:xl(Cl(r.iat)),expirationTime:xl(Cl(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=We(e);await Al(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(rl(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ol(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){rl(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Al(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ni(this.auth.app))return Promise.reject(il(this.auth));const e=await this.getIdToken();return await El(this,async function(e,t){return vl(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,n,r,s,o,a,l,c;const d=null!==(i=t.displayName)&&void 0!==i?i:void 0,h=null!==(n=t.email)&&void 0!==n?n:void 0,u=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,v=null!==(l=t.createdAt)&&void 0!==l?l:void 0,g=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:_,emailVerified:y,isAnonymous:b,providerData:w,stsTokenManager:x}=t;rl(_&&x,e,"internal-error");const C=Nl.fromJSON(this.name,x);rl("string"==typeof _,e,"internal-error"),Rl(d,e.name),Rl(h,e.name),rl("boolean"==typeof y,e,"internal-error"),rl("boolean"==typeof b,e,"internal-error"),Rl(u,e.name),Rl(p,e.name),Rl(f,e.name),Rl(m,e.name),Rl(v,e.name),Rl(g,e.name);const I=new Ol({uid:_,auth:e,email:h,emailVerified:y,displayName:d,isAnonymous:b,photoURL:p,phoneNumber:u,tenantId:f,stsTokenManager:C,createdAt:v,lastLoginAt:g});return w&&Array.isArray(w)&&(I.providerData=w.map((e=>Object.assign({},e)))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(e,t,i=!1){const n=new Nl;n.updateFromServerResponse(t);const r=new Ol({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:i});return await Al(r),r}static async _fromGetAccountInfoResponse(e,t,i){const n=t.users[0];rl(void 0!==n.localId,"internal-error");const r=void 0!==n.providerUserInfo?Pl(n.providerUserInfo):[],s=!(n.email&&n.passwordHash||(null==r?void 0:r.length)),o=new Nl;o.updateFromIdToken(i);const a=new Ol({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:s}),l={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:r,metadata:new kl(n.createdAt,n.lastLoginAt),isAnonymous:!(n.email&&n.passwordHash||(null==r?void 0:r.length))};return Object.assign(a,l),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=new Map;function Ll(e){ol(e instanceof Function,"Expected a class definition");let t=Dl.get(e);return t?(ol(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Dl.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ml.type="NONE";const $l=Ml;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(e,t,i){return`firebase:${e}:${t}:${i}`}class Ul{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:n,name:r}=this.auth;this.fullUserKey=Fl(this.userKey,n.apiKey,r),this.fullPersistenceKey=Fl("persistence",n.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ol._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Ul(Ll($l),e,i);const n=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=n[0]||Ll($l);const s=Fl(i,e.config.apiKey,e.name);let o=null;for(const i of t)try{const t=await i._get(s);if(t){const n=Ol._fromJSON(e,t);i!==r&&(o=n),r=i;break}}catch(e){}const a=n.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new Ul(r,e,i)):new Ul(r,e,i)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Hl(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ql(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Wl(t))return"Blackberry";if(Kl(t))return"Webos";if(Vl(t))return"Safari";if((t.includes("chrome/")||jl(t))&&!t.includes("edge/"))return"Chrome";if(Bl(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(t);if(2===(null==i?void 0:i.length))return i[1]}return"Other"}function ql(e=Ie()){return/firefox\//i.test(e)}function Vl(e=Ie()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function jl(e=Ie()){return/crios\//i.test(e)}function Hl(e=Ie()){return/iemobile/i.test(e)}function Bl(e=Ie()){return/android/i.test(e)}function Wl(e=Ie()){return/blackberry/i.test(e)}function Kl(e=Ie()){return/webos/i.test(e)}function Gl(e=Ie()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Yl(){return function(){const e=Ie();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function Jl(e=Ie()){return Gl(e)||Bl(e)||Kl(e)||Wl(e)||/windows phone/i.test(e)||Hl(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ql(e,t=[]){let i;switch(e){case"Browser":i=zl(Ie());break;case"Worker":i=`${zl(Ie())}-${e}`;break;default:i=e}const n=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${oi}/${n}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=t=>new Promise(((i,n)=>{try{i(e(t))}catch(e){n(e)}}));i.onAbort=t,this.queue.push(i);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e){var t,i,n,r;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(n=null===(i=e.allowedNonAlphanumericCharacters)||void 0===i?void 0:i.join(""))&&void 0!==n?n:"",this.forceUpgradeOnSignin=null!==(r=e.forceUpgradeOnSignin)&&void 0!==r&&r,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,n,r,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(i=a.meetsMaxPasswordLength)||void 0===i||i),a.isValid&&(a.isValid=null===(n=a.containsLowercaseLetter)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsUppercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),n&&(t.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,t){let i;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let n=0;n<e.length;n++)i=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,n,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t,i,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ic(this),this.idTokenSubscription=new ic(this),this.beforeStateQueue=new Xl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ja,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ll(t)),this._initializationPromise=this.queue((async()=>{var i,n;if(!this._deleted&&(this.persistenceManager=await Ul.create(this,e),!this._deleted)){if(null===(i=this._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await wl(this,{idToken:e}),i=await Ol._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ni(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let n=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);i&&i!==s||!(null==o?void 0:o.user)||(n=o.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=i,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return rl(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Al(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ni(this.app))return Promise.reject(il(this));const t=e?We(e):null;return t&&rl(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&rl(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return ni(this.app)?Promise.reject(il(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ni(this.app)?Promise.reject(il(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(Ll(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return vl(e,"GET","/v2/passwordPolicy",ml(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this),t=new Zl(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ae("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged((()=>{i(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return vl(e,"POST","/v2/accounts:revokeToken",ml(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return null===e?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ll(e)||this._popupRedirectResolver;rl(t,this,"argument-error"),this.redirectPersistenceManager=await Ul.create(this,[Ll(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(i=this.redirectUser)||void 0===i?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,n){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(rl(o,this,"internal-error"),o.then((()=>{s||r(this.currentUser)})),"function"==typeof t){const r=e.addObserver(t,i,n);return()=>{s=!0,r()}}{const i=e.addObserver(t);return()=>{s=!0,i()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return rl(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ql(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Qa.logLevel<=Qe.WARN&&Qa.warn(`Auth (${oi}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function tc(e){return We(e)}class ic{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const i=new Ve(e,t);return i.subscribe.bind(i)}((e=>this.observer=e))}get next(){return rl(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rc(e,t,i){const n=tc(e);rl(n._canInitEmulator,n,"emulator-config-failed"),rl(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");const r=!!(null==i?void 0:i.disableWarnings),s=sc(t),{host:o,port:a}=function(e){const t=sc(e),i=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!i)return{host:"",port:null};const n=i[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);if(r){const e=r[1];return{host:e,port:oc(n.substr(e.length+1))}}{const[e,t]=n.split(":");return{host:e,port:oc(t)}}}(t),l=null===a?"":`:${a}`;n.config.emulator={url:`${s}//${o}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function sc(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function oc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class ac{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return sl("not implemented")}_getIdTokenResponse(e){return sl("not implemented")}_linkToIdToken(e,t){return sl("not implemented")}_getReauthenticationResolver(e){return sl("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lc(e,t){return async function(e,t,i,n,r={}){const s=await vl(e,t,i,n,r);return"mfaPendingCredential"in s&&Za(e,"multi-factor-auth-required",{_serverResponse:s}),s}(e,"POST","/v1/accounts:signInWithIdp",ml(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc extends ac{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new cc(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Za("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:i,signInMethod:n}=t,r=Wa(t,["providerId","signInMethod"]);if(!i||!n)return null;const s=new cc(i,n);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return lc(e,this.buildRequest())}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,lc(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,lc(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ze(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc extends dc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc extends hc{constructor(){super("facebook.com")}static credential(e){return cc._fromParams({providerId:uc.PROVIDER_ID,signInMethod:uc.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return uc.credentialFromTaggedObject(e)}static credentialFromError(e){return uc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return uc.credential(e.oauthAccessToken)}catch(e){return null}}}uc.FACEBOOK_SIGN_IN_METHOD="facebook.com",uc.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pc extends hc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return cc._fromParams({providerId:pc.PROVIDER_ID,signInMethod:pc.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pc.credentialFromTaggedObject(e)}static credentialFromError(e){return pc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return pc.credential(t,i)}catch(e){return null}}}pc.GOOGLE_SIGN_IN_METHOD="google.com",pc.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fc extends hc{constructor(){super("github.com")}static credential(e){return cc._fromParams({providerId:fc.PROVIDER_ID,signInMethod:fc.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fc.credentialFromTaggedObject(e)}static credentialFromError(e){return fc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return fc.credential(e.oauthAccessToken)}catch(e){return null}}}fc.GITHUB_SIGN_IN_METHOD="github.com",fc.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mc extends hc{constructor(){super("twitter.com")}static credential(e,t){return cc._fromParams({providerId:mc.PROVIDER_ID,signInMethod:mc.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return mc.credentialFromTaggedObject(e)}static credentialFromError(e){return mc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return mc.credential(t,i)}catch(e){return null}}}mc.TWITTER_SIGN_IN_METHOD="twitter.com",mc.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vc{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,n=!1){const r=await Ol._fromIdTokenResponse(e,i,n),s=gc(i);return new vc({user:r,providerId:s,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const n=gc(i);return new vc({user:e,providerId:n,_tokenResponse:i,operationType:t})}}function gc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c extends ke{constructor(e,t,i,n){var r;super(t.code,t.message),this.operationType=i,this.user=n,Object.setPrototypeOf(this,_c.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,n){return new _c(e,t,i,n)}}function yc(e,t,i,n){return("reauthenticate"===t?i._getReauthenticationResolver(e):i._getIdTokenResponse(e)).catch((i=>{if("auth/multi-factor-auth-required"===i.code)throw _c._fromErrorAndOperation(e,i,t,n);throw i}))}const bc="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(bc,"1"),this.storage.removeItem(bc),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc extends wc{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Ie();return Vl(e)||Gl(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Jl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),n=this.localCache[t];i!==n&&e(t,n,i)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,i)=>{this.notifyListeners(e,i)}));const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const n=this.storage.getItem(i);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const n=()=>{const e=this.storage.getItem(i);(t||this.localCache[i]!==e)&&this.notifyListeners(i,e)},r=this.storage.getItem(i);Yl()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const e of Array.from(i))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}xc.type="LOCAL";const Cc=xc;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic extends wc{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ic.type="SESSION";const Tc=Ic;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ec{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const i=new Ec(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:n,data:r}=t.data,s=this.handlersMap[n];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:n});const o=Array.from(s).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:i,eventType:n,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Sc(e="",t=10){let i="";for(let e=0;e<t;e++)i+=Math.floor(10*Math.random());return e+i}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ec.receivers=[];class kc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const n="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const l=Sc("",20);n.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),i);s={messageChannel:n,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(c),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),n.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[n.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pc(){return void 0!==Ac().WorkerGlobalScope&&"function"==typeof Ac().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Nc="firebaseLocalStorageDb",Rc="firebaseLocalStorage",Oc="fbase_key";class Dc{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Lc(e,t){return e.transaction([Rc],t?"readwrite":"readonly").objectStore(Rc)}function Mc(){const e=indexedDB.open(Nc,1);return new Promise(((t,i)=>{e.addEventListener("error",(()=>{i(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Rc,{keyPath:Oc})}catch(e){i(e)}})),e.addEventListener("success",(async()=>{const i=e.result;i.objectStoreNames.contains(Rc)?t(i):(i.close(),await function(){const e=indexedDB.deleteDatabase(Nc);return new Dc(e).toPromise()}(),t(await Mc()))}))}))}async function $c(e,t,i){const n=Lc(e,!0).put({[Oc]:t,value:i});return new Dc(n).toPromise()}function Fc(e,t){const i=Lc(e,!0).delete(t);return new Dc(i).toPromise()}class Uc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Mc()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ec._getInstance(Pc()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new kc(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&(null===(e=i[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=i[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mc();return await $c(e,bc,"1"),await Fc(e,bc),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((i=>$c(i,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const i=Lc(e,!1).get(t),n=await new Dc(i).toPromise();return void 0===n?null:n.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Fc(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Lc(e,!1).getAll();return new Dc(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],i=new Set;if(0!==e.length)for(const{fbase_key:n,value:r}of e)i.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(r)&&(this.notifyListeners(n,r),t.push(n));for(const e of Object.keys(this.localCache))this.localCache[e]&&!i.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const e of Array.from(i))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Uc.type="LOCAL";const zc=Uc;new dl(3e4,6e4);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qc extends ac{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return lc(e,this._buildIdpRequest())}_linkToIdToken(e,t){return lc(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return lc(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Vc(e){
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t,i=!1){if(ni(e.app))return Promise.reject(il(e));const n="signIn",r=await yc(e,n,t),s=await vc._fromIdTokenResponse(e,n,r);return i||await e._updateCurrentUser(s.user),s}(e.auth,new qc(e),e.bypassAuthState)}function jc(e){const{auth:t,user:i}=e;return rl(i,t,"internal-error"),
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t,i=!1){const{auth:n}=e;if(ni(n.app))return Promise.reject(il(n));const r="reauthenticate";try{const s=await El(e,yc(n,r,t,e),i);rl(s.idToken,n,"internal-error");const o=Il(s.idToken);rl(o,n,"internal-error");const{sub:a}=o;return rl(e.uid===a,n,"user-mismatch"),vc._forOperation(e,r,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Za(n,"user-mismatch"),e}}(i,new qc(e),e.bypassAuthState)}async function Hc(e){const{auth:t,user:i}=e;return rl(i,t,"internal-error"),async function(e,t,i=!1){const n=await El(e,t._linkToIdToken(e.auth,await e.getIdToken()),i);return vc._forOperation(e,"link",n)}(i,new qc(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,t,i,n,r=!1){this.auth=e,this.resolver=i,this.user=n,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:n,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Vc;case"linkViaPopup":case"linkViaRedirect":return Hc;case"reauthViaPopup":case"reauthViaRedirect":return jc;default:Za(this.auth,"internal-error")}}resolve(e){ol(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ol(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc=new dl(2e3,1e4);class Kc extends Bc{constructor(e,t,i,n,r){super(e,t,n,r),this.provider=i,this.authWindow=null,this.pollId=null,Kc.currentPopupAction&&Kc.currentPopupAction.cancel(),Kc.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return rl(e,this.auth,"internal-error"),e}async onExecution(){ol(1===this.filter.length,"Popup operations only handle one event");const e=Sc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(el(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(el(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kc.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;(null===(i=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===i?void 0:i.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(el(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Wc.get())};e()}}Kc.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gc="pendingRedirect",Yc=new Map;class Jc extends Bc{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Yc.get(this.auth._key());if(!e){try{const t=await async function(e,t){const i=function(e){return Fl(Gc,e.config.apiKey,e.name)}(t),n=function(e){return Ll(e._redirectPersistence)}(e);if(!await n._isAvailable())return!1;const r="true"===await n._get(i);return await n._remove(i),r}(this.resolver,this.auth),i=t?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Yc.set(this.auth._key(),e)}return this.bypassAuthState||Yc.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Qc(e,t){Yc.set(e._key(),t)}async function Xc(e,t,i=!1){if(ni(e.app))return Promise.reject(il(e));const n=tc(e),r=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return t?Ll(t):(rl(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(n,t),s=new Jc(n,r,i),o=await s.execute();return o&&!i&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return td(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!td(e)){const n=(null===(i=e.error.code)||void 0===i?void 0:i.split("auth/")[1])||"internal-error";t.onError(el(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ed(e))}saveEventToCache(e){this.cachedEventUids.add(ed(e)),this.lastProcessedEventTime=Date.now()}}function ed(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function td({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const id=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nd=/^https?/;async function rd(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return vl(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(sd(e))return}catch(e){}Za(e,"unauthorized-domain")}function sd(e){const t=al(),{protocol:i,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===n?"chrome-extension:"===i&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===i&&r.hostname===n}if(!nd.test(i))return!1;if(id.test(e))return n===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od=new dl(3e4,6e4);function ad(){const e=Ac().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function ld(e){return new Promise(((t,i)=>{var n,r,s,o;function a(){ad(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ad(),i(el(e,"network-request-failed"))},timeout:od.get()})}if(null===(r=null===(n=Ac().gapi)||void 0===n?void 0:n.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Ac().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Ac()[t]=()=>{gapi.load?a():i(el(e,"network-request-failed"))},(o=`${nc.gapiScript}?onload=${t}`,nc.loadJS(o)).catch((e=>i(e)))}a()}})).catch((e=>{throw cd=null,e}))}let cd=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dd=new dl(5e3,15e3),hd="__/auth/iframe",ud="emulator/auth/iframe",pd={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fd=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function md(e){const t=e.config;rl(t.authDomain,e,"auth-domain-config-required");const i=t.emulator?hl(t,ud):`https://${e.config.authDomain}/${hd}`,n={apiKey:t.apiKey,appName:e.name,v:oi},r=fd.get(e.config.apiHost);r&&(n.eid=r);const s=e._getFrameworks();return s.length&&(n.fw=s.join(",")),`${i}?${ze(n).slice(1)}`}async function vd(e){const t=await function(e){return cd=cd||ld(e),cd}(e),i=Ac().gapi;return rl(i,e,"internal-error"),t.open({where:document.body,url:md(e),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pd,dontclear:!0},(t=>new Promise((async(i,n)=>{await t.restyle({setHideOnLeave:!1});const r=el(e,"network-request-failed"),s=Ac().setTimeout((()=>{n(r)}),dd.get());function o(){Ac().clearTimeout(s),i(t)}t.ping(o).then(o,(()=>{n(r)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class _d{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function yd(e,t,i,n=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let a="";const l=Object.assign(Object.assign({},gd),{width:n.toString(),height:r.toString(),top:s,left:o}),c=Ie().toLowerCase();i&&(a=jl(c)?"_blank":i),ql(c)&&(t=t||"http://localhost",l.scrollbars="yes");const d=Object.entries(l).reduce(((e,[t,i])=>`${e}${t}=${i},`),"");if(function(e=Ie()){var t;return Gl(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const i=document.createElement("a");i.href=e,i.target=t;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new _d(null);const h=window.open(t||"",a,d);rl(h,e,"popup-blocked");try{h.focus()}catch(e){}return new _d(h)}const bd="__/auth/handler",wd="emulator/auth/handler",xd=encodeURIComponent("fac");async function Cd(e,t,i,n,r,s){rl(e.config.authDomain,e,"auth-domain-config-required"),rl(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:i,redirectUrl:n,v:oi,eventId:r};if(t instanceof dc){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Me(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof hc){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const l=await e._getAppCheckToken(),c=l?`#${xd}=${encodeURIComponent(l)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${bd}`;return hl(e,wd)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${ze(a).slice(1)}${c}`}const Id="webStorageSupport";const Td=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tc,this._completeRedirectFn=Xc,this._overrideRedirectResult=Qc}async _openPopup(e,t,i,n){var r;ol(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return yd(e,await Cd(e,t,i,al(),n),Sc())}async _openRedirect(e,t,i,n){await this._originValidation(e);return function(e){Ac().location.href=e}(await Cd(e,t,i,al(),n)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:i}=this.eventManagers[t];return e?Promise.resolve(e):(ol(i,"If manager is not set, promise should be"),i)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch((()=>{delete this.eventManagers[t]})),i}async initAndGetManager(e){const t=await vd(e),i=new Zc(e);return t.register("authEvent",(t=>{rl(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:i.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Id,{type:Id},(i=>{var n;const r=null===(n=null==i?void 0:i[0])||void 0===n?void 0:n[Id];void 0!==r&&t(!!r),Za(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=rd(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Jl()||Vl()||Gl()}};var Ed="@firebase/auth",Sd="1.7.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kd{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){rl(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ad=xe("authIdTokenMaxAge")||300;let Pd=null;var Nd;!function(e){nc=e}({loadJS:e=>new Promise(((t,i)=>{const n=document.createElement("script");var r,s;n.setAttribute("src",e),n.onload=t,n.onerror=e=>{const t=el("internal-error");t.customData=e,i(t)},n.type="text/javascript",n.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(n)})),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Nd="Browser",ti(new Ke("auth",((e,{options:t})=>{const i=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=i.options;rl(s&&!s.includes(":"),"invalid-api-key",{appName:i.name});const a={apiKey:s,authDomain:o,clientPlatform:Nd,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ql(Nd)},l=new ec(i,n,r,a);return function(e,t){const i=(null==t?void 0:t.persistence)||[],n=(Array.isArray(i)?i:[i]).map(Ll);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,i)=>{e.getProvider("auth-internal").initialize()}))),ti(new Ke("auth-internal",(e=>(e=>new kd(e))(tc(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),ci(Ed,Sd,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(Nd)),ci(Ed,Sd,"esm2017");class Rd extends re{static properties={message:{type:Object}};static styles=s`
    :host {
      display: block;
      margin-bottom: 8px;
    }
    .message {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 8px;
      border-radius: 8px;
      max-width: 75%;
    }
    .user {
      background-color: var(--md-sys-color-primary-container);
      color: var(--md-sys-color-on-primary-container);
      align-self: flex-end;
      margin-left: auto;
    }
    .bot {
      background-color: var(--md-sys-color-surface-variant);
      color: var(--md-sys-color-on-surface-variant);
      align-self: flex-start;
      margin-right: auto;
    }
    .sender {
      font-weight: bold;
      margin-bottom: 4px;
    }
  `;render(){return $`
      <div class="message ${this.message.sender}">
        <div class="sender">${this.message.senderName}</div>
        <span>${this.message.text}</span>
      </div>
    `}}customElements.define("chat-message",Rd);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Od=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:n}=t;return{kind:i,elements:n,finisher(t){customElements.define(e,t)}}})(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,Dd=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}},Ld=(e,t,i)=>{t.constructor.createProperty(i,e)};function Md(e){return(t,i)=>void 0!==i?Ld(e,t,i):Dd(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function $d(e){return Md({...e,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fd=({finisher:e,descriptor:t})=>(i,n)=>{var r;if(void 0===n){const n=null!==(r=i.originalKey)&&void 0!==r?r:i.key,s=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(i.key)}:{...i,key:n};return null!=e&&(s.finisher=function(t){e(t,n)}),s}{const r=i.constructor;void 0!==t&&Object.defineProperty(i,n,t(n)),null==e||e(r,n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function Ud(e,t){return Fd({descriptor:i=>{const n={get(){var t,i;return null!==(i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof i?Symbol():"__"+i;n.get=function(){var i,n;return void 0===this[t]&&(this[t]=null!==(n=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(e))&&void 0!==n?n:null),this[t]}}return n}})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var zd;const qd=null!=(null===(zd=window.HTMLSlotElement)||void 0===zd?void 0:zd.prototype.assignedElements)?(e,t)=>e.assignedElements(t):(e,t)=>e.assignedNodes(t).filter((e=>e.nodeType===Node.ELEMENT_NODE));function Vd(e){const{slot:t,selector:i}=null!=e?e:{};return Fd({descriptor:n=>({get(){var n;const r="slot"+(t?`[name=${t}]`:":not([name])"),s=null===(n=this.renderRoot)||void 0===n?void 0:n.querySelector(r),o=null!=s?qd(s,e):[];return i?o.filter((e=>e.matches(i))):o},enumerable:!0,configurable:!0})})}
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class jd extends re{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return $`<span class="shadow"></span>`}}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Hd=s`:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Bd=class extends jd{};Bd.styles=[Hd],Bd=Ka([Od("md-elevation")],Bd);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Wd=Symbol("attachableController");let Kd;Kd=new MutationObserver((e=>{for(const t of e)t.target[Wd]?.hostConnected()}));class Gd{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){null===e?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?this.htmlFor&&this.host.isConnected?this.host.getRootNode().querySelector(`#${this.htmlFor}`):null:this.currentControl||this.host.parentElement}set control(e){e?this.attach(e):this.detach()}constructor(e,t){this.host=e,this.onControlChange=t,this.currentControl=null,e.addController(this),e[Wd]=this,Kd?.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Yd=["focusin","focusout","pointerdown"];class Jd extends re{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new Gd(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(e){if(!e[Qd]){switch(e.type){default:return;case"focusin":this.visible=this.control?.matches(":focus-visible")??!1;break;case"focusout":case"pointerdown":this.visible=!1}e[Qd]=!0}}onControlChange(e,t){for(const i of Yd)e?.removeEventListener(i,this),t?.addEventListener(i,this)}update(e){e.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(e)}}Ka([Md({type:Boolean,reflect:!0})],Jd.prototype,"visible",void 0),Ka([Md({type:Boolean,reflect:!0})],Jd.prototype,"inward",void 0);const Qd=Symbol("handledByFocusRing"),Xd=s`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let Zd=class extends Jd{};Zd.styles=[Xd],Zd=Ka([Od("md-focus-ring")],Zd);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const eh=1,th=3,ih=4,nh=e=>(...t)=>({_$litDirective$:e,values:t});class rh{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sh=nh(class extends rh{constructor(e){var t;if(super(e),e.type!==eh||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var i,n;if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(i=this.nt)||void 0===i?void 0:i.has(e))&&this.it.add(e);return this.render(t)}const r=e.element.classList;this.it.forEach((e=>{e in t||(r.remove(e),this.it.delete(e))}));for(const e in t){const i=!!t[e];i===this.it.has(e)||(null===(n=this.nt)||void 0===n?void 0:n.has(e))||(i?(r.add(e),this.it.add(e)):(r.remove(e),this.it.delete(e)))}return F}}),oh="cubic-bezier(0.2, 0, 0, 1)";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var ah;!function(e){e[e.INACTIVE=0]="INACTIVE",e[e.TOUCH_DELAY=1]="TOUCH_DELAY",e[e.HOLDING=2]="HOLDING",e[e.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"}(ah||(ah={}));const lh=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],ch=window.matchMedia("(forced-colors: active)");class dh extends re{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=ah.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new Gd(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){const e={hovered:this.hovered,pressed:this.pressed};return $`<div class="surface ${sh(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==ah.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state!==ah.HOLDING)return this.state===ah.TOUCH_DELAY?(this.state=ah.WAITING_FOR_CLICK,void this.startPressAnimation(this.rippleStartEvent)):void 0;this.state=ah.WAITING_FOR_CLICK}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e))return this.state=ah.WAITING_FOR_CLICK,void this.startPressAnimation(e);this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=ah.TOUCH_DELAY,await new Promise((e=>{setTimeout(e,150)})),this.state===ah.TOUCH_DELAY&&(this.state=ah.HOLDING,this.startPressAnimation(e)))}}handleClick(){this.disabled||(this.state!==ah.WAITING_FOR_CLICK?this.state===ah.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation()):this.endPressAnimation())}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){const{height:e,width:t}=this.getBoundingClientRect(),i=Math.max(e,t),n=Math.max(.35*i,75),r=Math.floor(.2*i),s=Math.sqrt(t**2+e**2)+10;this.initialSize=r,this.rippleScale=""+(s+n)/r,this.rippleSize=`${r}px`}getNormalizedPointerEventCoords(e){const{scrollX:t,scrollY:i}=window,{left:n,top:r}=this.getBoundingClientRect(),s=t+n,o=i+r,{pageX:a,pageY:l}=e;return{x:a-s,y:l-o}}getTranslationCoordinates(e){const{height:t,width:i}=this.getBoundingClientRect(),n={x:(i-this.initialSize)/2,y:(t-this.initialSize)/2};let r;return r=e instanceof PointerEvent?this.getNormalizedPointerEventCoords(e):{x:i/2,y:t/2},r={x:r.x-this.initialSize/2,y:r.y-this.initialSize/2},{startPoint:r,endPoint:n}}startPressAnimation(e){if(!this.mdRoot)return;this.pressed=!0,this.growAnimation?.cancel(),this.determineRippleSize();const{startPoint:t,endPoint:i}=this.getTranslationCoordinates(e),n=`${t.x}px, ${t.y}px`,r=`${i.x}px, ${i.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${n}) scale(1)`,`translate(${r}) scale(${this.rippleScale})`]},{pseudoElement:"::after",duration:450,easing:oh,fill:"forwards"})}async endPressAnimation(){this.rippleStartEvent=void 0,this.state=ah.INACTIVE;const e=this.growAnimation;let t=1/0;"number"==typeof e?.currentTime?t=e.currentTime:e?.currentTime&&(t=e.currentTime.to("ms").value),t>=225?this.pressed=!1:(await new Promise((e=>{setTimeout(e,225-t)})),this.growAnimation===e&&(this.pressed=!1))}shouldReactToEvent(e){if(this.disabled||!e.isPrimary)return!1;if(this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if("pointerenter"===e.type||"pointerleave"===e.type)return!this.isTouch(e);const t=1===e.buttons;return this.isTouch(e)||t}inBounds({x:e,y:t}){const{top:i,left:n,bottom:r,right:s}=this.getBoundingClientRect();return e>=n&&e<=s&&t>=i&&t<=r}isTouch({pointerType:e}){return"touch"===e}async handleEvent(e){if(!ch?.matches)switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e)}}onControlChange(e,t){for(const i of lh)e?.removeEventListener(i,this),t?.addEventListener(i,this)}}Ka([Md({type:Boolean,reflect:!0})],dh.prototype,"disabled",void 0),Ka([$d()],dh.prototype,"hovered",void 0),Ka([$d()],dh.prototype,"pressed",void 0),Ka([Ud(".surface")],dh.prototype,"mdRoot",void 0);
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const hh=s`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let uh=class extends dh{};uh.styles=[hh],uh=Ka([Od("md-ripple")],uh);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ph=["ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"];function fh(e){return e.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function mh(e){for(const t of ph)e.createProperty(t,{attribute:fh(t),reflect:!0});e.addInitializer((e=>{const t={hostConnected(){e.setAttribute("role","presentation")}};e.addController(t)}))}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ph.map(fh);const vh=Symbol("internals"),gh=Symbol("privateInternals");function _h(e){return class extends e{get[vh](){return this[gh]||(this[gh]=this.attachInternals()),this[gh]}}}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function yh(e){return e.currentTarget===e.target&&(e.composedPath()[0]===e.target&&(!e.target.disabled&&!function(e){const t=bh;t&&(e.preventDefault(),e.stopImmediatePropagation());return async function(){bh=!0,await null,bh=!1}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */(),t}(e)))}let bh=!1;const wh=_h(re);class xh extends wh{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[vh].form}constructor(){super(),this.disabled=!1,this.href="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this.handleActivationClick=e=>{yh(e)&&this.buttonElement&&(this.focus(),
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function(e){const t=new MouseEvent("click",{bubbles:!0});e.dispatchEvent(t)}(this.buttonElement))},this.addEventListener("click",this.handleActivationClick)}focus(){this.buttonElement?.focus()}blur(){this.buttonElement?.blur()}render(){const e=this.disabled&&!this.href,t=this.href?this.renderLink():this.renderButton(),i=this.href?"link":"button";return $`
      ${this.renderElevationOrOutline?.()}
      <div class="background"></div>
      <md-focus-ring part="focus-ring" for=${i}></md-focus-ring>
      <md-ripple for=${i} ?disabled="${e}"></md-ripple>
      ${t}
    `}renderButton(){const{ariaLabel:e,ariaHasPopup:t,ariaExpanded:i}=this;return $`<button
      id="button"
      class="button"
      ?disabled=${this.disabled}
      aria-label="${e||U}"
      aria-haspopup="${t||U}"
      aria-expanded="${i||U}">
      ${this.renderContent()}
    </button>`}renderLink(){const{ariaLabel:e,ariaHasPopup:t,ariaExpanded:i}=this;return $`<a
      id="link"
      class="button"
      aria-label="${e||U}"
      aria-haspopup="${t||U}"
      aria-expanded="${i||U}"
      href=${this.href}
      target=${this.target||U}
      >${this.renderContent()}
    </a>`}renderContent(){const e=$`<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`;return $`
      <span class="touch"></span>
      ${this.trailingIcon?U:e}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon?e:U}
    `}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}mh(xh),xh.addInitializer((e=>{const t=e;t.addEventListener("click",(async e=>{const{type:i,[vh]:n}=t,{form:r}=n;r&&"button"!==i&&(await new Promise((e=>{setTimeout(e)})),e.defaultPrevented||("reset"!==i?(r.addEventListener("submit",(e=>{Object.defineProperty(e,"submitter",{configurable:!0,enumerable:!0,get:()=>t})}),{capture:!0,once:!0}),n.setFormValue(t.value),r.requestSubmit()):r.reset()))}))})),xh.formAssociated=!0,xh.shadowRootOptions={mode:"open",delegatesFocus:!0},Ka([Md({type:Boolean,reflect:!0})],xh.prototype,"disabled",void 0),Ka([Md()],xh.prototype,"href",void 0),Ka([Md()],xh.prototype,"target",void 0),Ka([Md({type:Boolean,attribute:"trailing-icon",reflect:!0})],xh.prototype,"trailingIcon",void 0),Ka([Md({type:Boolean,attribute:"has-icon",reflect:!0})],xh.prototype,"hasIcon",void 0),Ka([Md()],xh.prototype,"type",void 0),Ka([Md({reflect:!0})],xh.prototype,"value",void 0),Ka([Ud(".button")],xh.prototype,"buttonElement",void 0),Ka([Vd({slot:"icon",flatten:!0})],xh.prototype,"assignedIcons",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ch extends xh{renderElevationOrOutline(){return $`<md-elevation part="elevation"></md-elevation>`}}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ih=s`:host{--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-filled-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-color: var(--md-filled-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_container-shape-start-start: var(--md-filled-button-container-shape-start-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-button-container-shape-start-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-button-container-shape-end-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-button-container-shape-end-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-button-leading-space, 24px);--_trailing-space: var(--md-filled-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-button-with-trailing-icon-trailing-space, 16px)}
`
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */,Th=s`md-elevation{transition-duration:280ms}:host([disabled]) md-elevation{transition:none}md-elevation{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}:host(:focus-within) md-elevation{--md-elevation-level: var(--_focus-container-elevation)}:host(:hover) md-elevation{--md-elevation-level: var(--_hover-container-elevation)}:host(:active) md-elevation{--md-elevation-level: var(--_pressed-container-elevation)}:host([disabled]) md-elevation{--md-elevation-level: var(--_disabled-container-elevation)}
`
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */,Eh=s`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit;text-transform:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background-color:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host([disabled]) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host([disabled]) .background{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host([disabled]){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host([disabled]) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Sh=class extends Ch{};Sh.styles=[Eh,Th,Ih],Sh=Ka([Od("md-filled-button")],Sh);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class kh extends re{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.focused=!1,this.label="",this.populated=!1,this.required=!1,this.resizable=!1,this.supportingText="",this.errorText="",this.count=-1,this.max=-1,this.hasStart=!1,this.hasEnd=!1,this.isAnimating=!1,this.refreshErrorAlert=!1,this.disableTransitions=!1}get counterText(){const e=this.count??-1,t=this.max??-1;return e<0||t<=0?"":`${e} / ${t}`}get supportingOrErrorText(){return this.error&&this.errorText?this.errorText:this.supportingText}reannounceError(){this.refreshErrorAlert=!0}update(e){e.has("disabled")&&void 0!==e.get("disabled")&&(this.disableTransitions=!0),this.disabled&&this.focused&&(e.set("focused",!0),this.focused=!1),this.animateLabelIfNeeded({wasFocused:e.get("focused"),wasPopulated:e.get("populated")}),super.update(e)}render(){const e=this.renderLabel(!0),t=this.renderLabel(!1),i=this.renderOutline?.(e),n={disabled:this.disabled,"disable-transitions":this.disableTransitions,error:this.error&&!this.disabled,focused:this.focused,"with-start":this.hasStart,"with-end":this.hasEnd,populated:this.populated,resizable:this.resizable,required:this.required,"no-label":!this.label};return $`
      <div class="field ${sh(n)}">
        <div class="container-overflow">
          ${this.renderBackground?.()} ${this.renderIndicator?.()} ${i}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              <div class="label-wrapper">
                ${t} ${i?U:e}
              </div>
              <div class="content">
                <slot></slot>
              </div>
            </div>
            <div class="end">
              <slot name="end"></slot>
            </div>
          </div>
        </div>
        ${this.renderSupportingText()}
      </div>
    `}updated(e){(e.has("supportingText")||e.has("errorText")||e.has("count")||e.has("max"))&&this.updateSlottedAriaDescribedBy(),this.refreshErrorAlert&&requestAnimationFrame((()=>{this.refreshErrorAlert=!1})),this.disableTransitions&&requestAnimationFrame((()=>{this.disableTransitions=!1}))}renderSupportingText(){const{supportingOrErrorText:e,counterText:t}=this;if(!e&&!t)return U;const i=$`<span>${e}</span>`,n=t?$`<span class="counter">${t}</span>`:U,r=this.error&&this.errorText&&!this.refreshErrorAlert;return $`
      <div class="supporting-text" role=${r?"alert":U}>${i}${n}</div>
      <slot
        name="aria-describedby"
        @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `}updateSlottedAriaDescribedBy(){for(const e of this.slottedAriaDescribedBy)te($`${this.supportingOrErrorText} ${this.counterText}`,e),e.setAttribute("hidden","")}renderLabel(e){if(!this.label)return U;let t;t=e?this.focused||this.populated||this.isAnimating:!this.focused&&!this.populated&&!this.isAnimating;const i={hidden:!t,floating:e,resting:!e},n=`${this.label}${this.required?"*":""}`;return $`
      <span class="label ${sh(i)}" aria-hidden=${!t}
        >${n}</span
      >
    `}animateLabelIfNeeded({wasFocused:e,wasPopulated:t}){if(!this.label)return;e??(e=this.focused),t??(t=this.populated);(e||t)!==(this.focused||this.populated)&&(this.isAnimating=!0,this.labelAnimation?.cancel(),this.labelAnimation=this.floatingLabelEl?.animate(this.getLabelKeyframes(),{duration:150,easing:oh}),this.labelAnimation?.addEventListener("finish",(()=>{this.isAnimating=!1})))}getLabelKeyframes(){const{floatingLabelEl:e,restingLabelEl:t}=this;if(!e||!t)return[];const{x:i,y:n,height:r}=e.getBoundingClientRect(),{x:s,y:o,height:a}=t.getBoundingClientRect(),l=e.scrollWidth,c=t.scrollWidth,d=c/l,h=`translateX(${s-i}px) translateY(${o-n+Math.round((a-r*d)/2)}px) scale(${d})`,u="translateX(0) translateY(0) scale(1)",p=t.clientWidth,f=c>p?p/d+"px":"";return this.focused||this.populated?[{transform:h,width:f},{transform:u,width:f}]:[{transform:u,width:f},{transform:h,width:f}]}getSurfacePositionClientRect(){return this.containerEl.getBoundingClientRect()}}Ka([Md({type:Boolean})],kh.prototype,"disabled",void 0),Ka([Md({type:Boolean})],kh.prototype,"error",void 0),Ka([Md({type:Boolean})],kh.prototype,"focused",void 0),Ka([Md()],kh.prototype,"label",void 0),Ka([Md({type:Boolean})],kh.prototype,"populated",void 0),Ka([Md({type:Boolean})],kh.prototype,"required",void 0),Ka([Md({type:Boolean})],kh.prototype,"resizable",void 0),Ka([Md({attribute:"supporting-text"})],kh.prototype,"supportingText",void 0),Ka([Md({attribute:"error-text"})],kh.prototype,"errorText",void 0),Ka([Md({type:Number})],kh.prototype,"count",void 0),Ka([Md({type:Number})],kh.prototype,"max",void 0),Ka([Md({type:Boolean,attribute:"has-start"})],kh.prototype,"hasStart",void 0),Ka([Md({type:Boolean,attribute:"has-end"})],kh.prototype,"hasEnd",void 0),Ka([Vd({slot:"aria-describedby"})],kh.prototype,"slottedAriaDescribedBy",void 0),Ka([$d()],kh.prototype,"isAnimating",void 0),Ka([$d()],kh.prototype,"refreshErrorAlert",void 0),Ka([$d()],kh.prototype,"disableTransitions",void 0),Ka([Ud(".label.floating")],kh.prototype,"floatingLabelEl",void 0),Ka([Ud(".label.resting")],kh.prototype,"restingLabelEl",void 0),Ka([Ud(".container")],kh.prototype,"containerEl",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ah extends kh{renderBackground(){return $`
      <div class="background"></div>
      <div class="state-layer"></div>
    `}renderIndicator(){return $`<div class="active-indicator"></div>`}}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ph=s`@layer styles{:host{--_active-indicator-color: var(--md-filled-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-field-active-indicator-height, 1px);--_bottom-space: var(--md-filled-field-bottom-space, 16px);--_container-color: var(--md-filled-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_content-color: var(--md-filled-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-filled-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-filled-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-filled-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-weight: var(--md-filled-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-active-indicator-color: var(--md-filled-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-field-disabled-container-opacity, 0.04);--_disabled-content-color: var(--md-filled-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-filled-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-filled-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-filled-field-disabled-leading-content-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-filled-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-filled-field-disabled-trailing-content-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-content-color: var(--md-filled-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-active-indicator-color: var(--md-filled-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-content-color: var(--md-filled-field-error-focus-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-label-text-color: var(--md-filled-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-filled-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-filled-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-content-color: var(--md-filled-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-filled-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-filled-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-filled-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-filled-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-filled-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-field-focus-active-indicator-height, 3px);--_focus-content-color: var(--md-filled-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-filled-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-filled-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-field-hover-active-indicator-height, 1px);--_hover-content-color: var(--md-filled-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-content-color: var(--md-filled-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-filled-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-filled-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-filled-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-filled-field-leading-space, 16px);--_supporting-text-color: var(--md-filled-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-filled-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-filled-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-filled-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-filled-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-filled-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-filled-field-top-space, 16px);--_trailing-content-color: var(--md-filled-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-filled-field-trailing-space, 16px);--_with-label-bottom-space: var(--md-filled-field-with-label-bottom-space, 8px);--_with-label-top-space: var(--md-filled-field-with-label-top-space, 8px);--_container-shape-start-start: var(--md-filled-field-container-shape-start-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-filled-field-container-shape-start-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-filled-field-container-shape-end-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-filled-field-container-shape-end-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)))}.background,.state-layer{border-radius:inherit;inset:0;pointer-events:none;position:absolute}.background{background:var(--_container-color)}.state-layer{visibility:hidden}.field:not(.disabled):hover .state-layer{visibility:visible}.label.floating{position:absolute;top:var(--_with-label-top-space)}.field:not(.with-start) .label-wrapper{margin-inline-start:var(--_leading-space)}.field:not(.with-end) .label-wrapper{margin-inline-end:var(--_trailing-space)}.active-indicator{inset:auto 0 0 0;pointer-events:none;position:absolute;width:100%;z-index:1}.active-indicator::before,.active-indicator::after{border-bottom:var(--_active-indicator-height) solid var(--_active-indicator-color);inset:auto 0 0 0;content:"";position:absolute;width:100%}.active-indicator::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .active-indicator::after{opacity:1}.field:not(.with-start) .content ::slotted(*){padding-inline-start:var(--_leading-space)}.field:not(.with-end) .content ::slotted(*){padding-inline-end:var(--_trailing-space)}.field:not(.no-label) .content ::slotted(:not(textarea)){padding-bottom:var(--_with-label-bottom-space);padding-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}.field:not(.no-label) .content ::slotted(textarea){margin-bottom:var(--_with-label-bottom-space);margin-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}:hover .active-indicator::before{border-bottom-color:var(--_hover-active-indicator-color);border-bottom-width:var(--_hover-active-indicator-height)}.active-indicator::after{border-bottom-color:var(--_focus-active-indicator-color);border-bottom-width:var(--_focus-active-indicator-height)}:hover .state-layer{background:var(--_hover-state-layer-color);opacity:var(--_hover-state-layer-opacity)}.disabled .active-indicator::before{border-bottom-color:var(--_disabled-active-indicator-color);border-bottom-width:var(--_disabled-active-indicator-height);opacity:var(--_disabled-active-indicator-opacity)}.disabled .background{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.error .active-indicator::before{border-bottom-color:var(--_error-active-indicator-color)}.error:hover .active-indicator::before{border-bottom-color:var(--_error-hover-active-indicator-color)}.error:hover .state-layer{background:var(--_error-hover-state-layer-color);opacity:var(--_error-hover-state-layer-opacity)}.error .active-indicator::after{border-bottom-color:var(--_error-focus-active-indicator-color)}.resizable .container{bottom:var(--_focus-active-indicator-height);clip-path:inset(var(--_focus-active-indicator-height) 0 0 0)}.resizable .container>*{top:var(--_focus-active-indicator-height)}}@layer hcm{@media(forced-colors: active){.disabled .active-indicator::before{border-color:GrayText;opacity:1}}}
`
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */,Nh=s`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}@layer styles{.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start,.with-end .end{min-width:48px}.with-start .start{margin-inline-end:4px}.with-end .end{margin-inline-start:4px}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;overflow-wrap:revert;white-space:revert}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}}@layer hcm{@media(forced-colors: active){.disabled :is(.start,.content,.end){color:GrayText;opacity:1}}}@layer styles{.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .label:not(.hidden){color:GrayText;opacity:1}}}@layer styles{.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .supporting-text{color:GrayText;opacity:1}}}
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Rh=class extends Ah{};Rh.styles=[Nh,Ph],Rh=Ka([Od("md-filled-field")],Rh);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Oh=Symbol.for(""),Dh=e=>{if((null==e?void 0:e.r)===Oh)return null==e?void 0:e._$litStatic$},Lh=(e,...t)=>({_$litStatic$:t.reduce(((t,i,n)=>t+(e=>{if(void 0!==e._$litStatic$)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[n+1]),e[0]),r:Oh}),Mh=new Map,$h=(e=>(t,...i)=>{const n=i.length;let r,s;const o=[],a=[];let l,c=0,d=!1;for(;c<n;){for(l=t[c];c<n&&void 0!==(s=i[c],r=Dh(s));)l+=r+t[++c],d=!0;c!==n&&a.push(s),o.push(l),c++}if(c===n&&o.push(t[n]),d){const e=o.join("$$lit$$");void 0===(t=Mh.get(e))&&(o.raw=o,Mh.set(e,t=o)),i=a}return e(t,...i)})($),Fh=s`:host{--_active-indicator-color: var(--md-filled-text-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-text-field-active-indicator-height, 1px);--_caret-color: var(--md-filled-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_container-color: var(--md-filled-text-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-active-indicator-color: var(--md-filled-text-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-text-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-text-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-text-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-text-field-disabled-container-opacity, 0.04);--_disabled-input-text-color: var(--md-filled-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-filled-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-filled-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-filled-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-filled-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-filled-text-field-disabled-trailing-icon-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-text-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-active-indicator-color: var(--md-filled-text-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-caret-color: var(--md-filled-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-filled-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-filled-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-filled-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-filled-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-text-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-input-text-color: var(--md-filled-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-filled-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-text-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-text-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-filled-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-filled-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-filled-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-filled-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-filled-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-text-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-text-field-focus-active-indicator-height, 3px);--_focus-input-text-color: var(--md-filled-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-filled-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-filled-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-text-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-text-field-hover-active-indicator-height, 1px);--_hover-input-text-color: var(--md-filled-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-text-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-icon-color: var(--md-filled-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-text-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-text-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filled-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-filled-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-filled-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-filled-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-filled-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-filled-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-filled-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-filled-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-filled-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-filled-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-filled-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-filled-text-field-leading-icon-size, 24px);--_supporting-text-color: var(--md-filled-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-filled-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-filled-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-filled-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-filled-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var(--md-filled-text-field-container-shape-start-start, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-filled-text-field-container-shape-start-end, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-filled-text-field-container-shape-end-end, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-filled-text-field-container-shape-end-start, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_leading-space: var(--md-filled-text-field-leading-space, 16px);--_trailing-space: var(--md-filled-text-field-trailing-space, 16px);--_top-space: var(--md-filled-text-field-top-space, 16px);--_bottom-space: var(--md-filled-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-filled-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-filled-text-field-input-text-suffix-leading-space, 2px);--_with-label-top-space: var(--md-filled-text-field-with-label-top-space, 8px);--_with-label-bottom-space: var(--md-filled-text-field-with-label-bottom-space, 8px);--_focus-caret-color: var(--md-filled-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--md-filled-field-active-indicator-color: var(--_active-indicator-color);--md-filled-field-active-indicator-height: var(--_active-indicator-height);--md-filled-field-bottom-space: var(--_bottom-space);--md-filled-field-container-color: var(--_container-color);--md-filled-field-container-shape-end-end: var(--_container-shape-end-end);--md-filled-field-container-shape-end-start: var(--_container-shape-end-start);--md-filled-field-container-shape-start-end: var(--_container-shape-start-end);--md-filled-field-container-shape-start-start: var(--_container-shape-start-start);--md-filled-field-content-color: var(--_input-text-color);--md-filled-field-content-font: var(--_input-text-font);--md-filled-field-content-line-height: var(--_input-text-line-height);--md-filled-field-content-size: var(--_input-text-size);--md-filled-field-content-weight: var(--_input-text-weight);--md-filled-field-disabled-active-indicator-color: var(--_disabled-active-indicator-color);--md-filled-field-disabled-active-indicator-height: var(--_disabled-active-indicator-height);--md-filled-field-disabled-active-indicator-opacity: var(--_disabled-active-indicator-opacity);--md-filled-field-disabled-container-color: var(--_disabled-container-color);--md-filled-field-disabled-container-opacity: var(--_disabled-container-opacity);--md-filled-field-disabled-content-color: var(--_disabled-input-text-color);--md-filled-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-filled-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-filled-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-filled-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-filled-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-filled-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-filled-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-filled-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-filled-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-filled-field-error-active-indicator-color: var(--_error-active-indicator-color);--md-filled-field-error-content-color: var(--_error-input-text-color);--md-filled-field-error-focus-active-indicator-color: var(--_error-focus-active-indicator-color);--md-filled-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-filled-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-filled-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-filled-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-filled-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-filled-field-error-hover-active-indicator-color: var(--_error-hover-active-indicator-color);--md-filled-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-filled-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-filled-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-filled-field-error-hover-state-layer-color: var(--_error-hover-state-layer-color);--md-filled-field-error-hover-state-layer-opacity: var(--_error-hover-state-layer-opacity);--md-filled-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-filled-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-filled-field-error-label-text-color: var(--_error-label-text-color);--md-filled-field-error-leading-content-color: var(--_error-leading-icon-color);--md-filled-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-filled-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-filled-field-focus-active-indicator-color: var(--_focus-active-indicator-color);--md-filled-field-focus-active-indicator-height: var(--_focus-active-indicator-height);--md-filled-field-focus-content-color: var(--_focus-input-text-color);--md-filled-field-focus-label-text-color: var(--_focus-label-text-color);--md-filled-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-filled-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-filled-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-filled-field-hover-active-indicator-color: var(--_hover-active-indicator-color);--md-filled-field-hover-active-indicator-height: var(--_hover-active-indicator-height);--md-filled-field-hover-content-color: var(--_hover-input-text-color);--md-filled-field-hover-label-text-color: var(--_hover-label-text-color);--md-filled-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-filled-field-hover-state-layer-color: var(--_hover-state-layer-color);--md-filled-field-hover-state-layer-opacity: var(--_hover-state-layer-opacity);--md-filled-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-filled-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-filled-field-label-text-color: var(--_label-text-color);--md-filled-field-label-text-font: var(--_label-text-font);--md-filled-field-label-text-line-height: var(--_label-text-line-height);--md-filled-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-filled-field-label-text-populated-size: var(--_label-text-populated-size);--md-filled-field-label-text-size: var(--_label-text-size);--md-filled-field-label-text-weight: var(--_label-text-weight);--md-filled-field-leading-content-color: var(--_leading-icon-color);--md-filled-field-leading-space: var(--_leading-space);--md-filled-field-supporting-text-color: var(--_supporting-text-color);--md-filled-field-supporting-text-font: var(--_supporting-text-font);--md-filled-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-filled-field-supporting-text-size: var(--_supporting-text-size);--md-filled-field-supporting-text-weight: var(--_supporting-text-weight);--md-filled-field-top-space: var(--_top-space);--md-filled-field-trailing-content-color: var(--_trailing-icon-color);--md-filled-field-trailing-space: var(--_trailing-space);--md-filled-field-with-label-bottom-space: var(--_with-label-bottom-space);--md-filled-field-with-label-top-space: var(--_with-label-top-space)}
`
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,Uh={},zh=nh(class extends rh{constructor(e){if(super(e),e.type!==th&&e.type!==eh&&e.type!==ih)throw Error("The `live` directive is not allowed on child or event bindings");if(!(e=>void 0===e.strings)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===F||t===U)return t;const i=e.element,n=e.name;if(e.type===th){if(t===i[n])return F}else if(e.type===ih){if(!!t===i.hasAttribute(n))return F}else if(e.type===eh&&i.getAttribute(n)===t+"")return F;return((e,t=Uh)=>{e._$AH=t;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */})(e),t}}),qh="important",Vh=" !"+qh,jh=nh(class extends rh{constructor(e){var t;if(super(e),e.type!==eh||"style"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,i)=>{const n=e[i];return null==n?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`}),"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ht){this.ht=new Set;for(const e in t)this.ht.add(e);return this.render(t)}this.ht.forEach((e=>{null==t[e]&&(this.ht.delete(e),e.includes("-")?i.removeProperty(e):i[e]="")}));for(const e in t){const n=t[e];if(null!=n){this.ht.add(e);const t="string"==typeof n&&n.endsWith(Vh);e.includes("-")||t?i.setProperty(e,t?n.slice(0,-11):n,t?qh:""):i[e]=n}}return F}}),Hh={fromAttribute:e=>e??"",toAttribute:e=>e||null};
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Bh=Symbol("createValidator"),Wh=Symbol("getValidityAnchor"),Kh=Symbol("privateValidator"),Gh=Symbol("privateSyncValidity"),Yh=Symbol("privateCustomValidationMessage");
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Jh=Symbol("getFormValue"),Qh=Symbol("getFormState");
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Xh=Symbol("onReportValidity"),Zh=Symbol("privateCleanupFormListeners"),eu=Symbol("privateDoNotReportInvalid"),tu=Symbol("privateIsSelfReportingValidity"),iu=Symbol("privateCallOnReportValidity");const nu=new WeakMap;
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class ru{constructor(e){this.getCurrentState=e,this.currentValidity={validity:{},validationMessage:""}}getValidity(){const e=this.getCurrentState();if(!(!this.prevState||!this.equals(this.prevState,e)))return this.currentValidity;const{validity:t,validationMessage:i}=this.computeValidity(e);return this.prevState=this.copy(e),this.currentValidity={validationMessage:i,validity:{badInput:t.badInput,customError:t.customError,patternMismatch:t.patternMismatch,rangeOverflow:t.rangeOverflow,rangeUnderflow:t.rangeUnderflow,stepMismatch:t.stepMismatch,tooLong:t.tooLong,tooShort:t.tooShort,typeMismatch:t.typeMismatch,valueMissing:t.valueMissing}},this.currentValidity}}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class su extends ru{computeValidity({state:e,renderedControl:t}){let i=t;ou(e)&&!i?(i=this.inputControl||document.createElement("input"),this.inputControl=i):i||(i=this.textAreaControl||document.createElement("textarea"),this.textAreaControl=i);const n=ou(e)?i:null;if(n&&(n.type=e.type),i.value!==e.value&&(i.value=e.value),i.required=e.required,n){const t=e;t.pattern?n.pattern=t.pattern:n.removeAttribute("pattern"),t.min?n.min=t.min:n.removeAttribute("min"),t.max?n.max=t.max:n.removeAttribute("max"),t.step?n.step=t.step:n.removeAttribute("step")}return(e.minLength??-1)>-1?i.setAttribute("minlength",String(e.minLength)):i.removeAttribute("minlength"),(e.maxLength??-1)>-1?i.setAttribute("maxlength",String(e.maxLength)):i.removeAttribute("maxlength"),{validity:i.validity,validationMessage:i.validationMessage}}equals({state:e},{state:t}){const i=e.type===t.type&&e.value===t.value&&e.required===t.required&&e.minLength===t.minLength&&e.maxLength===t.maxLength;return ou(e)&&ou(t)?i&&e.pattern===t.pattern&&e.min===t.min&&e.max===t.max&&e.step===t.step:i}copy({state:e}){return{state:ou(e)?this.copyInput(e):this.copyTextArea(e),renderedControl:null}}copyInput(e){const{type:t,pattern:i,min:n,max:r,step:s}=e;return{...this.copySharedState(e),type:t,pattern:i,min:n,max:r,step:s}}copyTextArea(e){return{...this.copySharedState(e),type:e.type}}copySharedState({value:e,required:t,minLength:i,maxLength:n}){return{value:e,required:t,minLength:i,maxLength:n}}}function ou(e){return"textarea"!==e.type}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const au=function(e){var t,i,n;class r extends e{constructor(...e){super(...e),this[t]=new AbortController,this[i]=!1,this[n]=!1,this.addEventListener("invalid",(e=>{!this[eu]&&e.isTrusted&&this.addEventListener("invalid",(()=>{this[iu](e)}),{once:!0})}),{capture:!0})}checkValidity(){this[eu]=!0;const e=super.checkValidity();return this[eu]=!1,e}reportValidity(){this[tu]=!0;const e=super.reportValidity();return e&&this[iu](null),this[tu]=!1,e}[(t=Zh,i=eu,n=tu,iu)](e){const t=e?.defaultPrevented;if(t)return;this[Xh](e);!t&&e?.defaultPrevented&&(this[tu]||function(e,t){if(!e)return!0;let i;for(const t of e.elements)if(t.matches(":invalid")){i=t;break}return i===t}(this[vh].form,this))&&this.focus()}[Xh](e){throw new Error("Implement [onReportValidity]")}formAssociatedCallback(e){super.formAssociatedCallback&&super.formAssociatedCallback(e),this[Zh].abort(),e&&(this[Zh]=new AbortController,function(e,t,i,n){const r=function(e){if(!nu.has(e)){const t=new EventTarget;nu.set(e,t);for(const i of["reportValidity","requestSubmit"]){const n=e[i];e[i]=function(){t.dispatchEvent(new Event("before"));const e=Reflect.apply(n,this,arguments);return t.dispatchEvent(new Event("after")),e}}}return nu.get(e)}(t);let s,o=!1,a=!1;r.addEventListener("before",(()=>{a=!0,s=new AbortController,o=!1,e.addEventListener("invalid",(()=>{o=!0}),{signal:s.signal})}),{signal:n}),r.addEventListener("after",(()=>{a=!1,s?.abort(),o||i()}),{signal:n}),t.addEventListener("submit",(()=>{a||i()}),{signal:n})}(this,e,(()=>{this[iu](null)}),this[Zh].signal))}}return r}(function(e){var t;class i extends e{constructor(){super(...arguments),this[t]=""}get validity(){return this[Gh](),this[vh].validity}get validationMessage(){return this[Gh](),this[vh].validationMessage}get willValidate(){return this[Gh](),this[vh].willValidate}checkValidity(){return this[Gh](),this[vh].checkValidity()}reportValidity(){return this[Gh](),this[vh].reportValidity()}setCustomValidity(e){this[Yh]=e,this[Gh]()}requestUpdate(e,t,i){super.requestUpdate(e,t,i),this[Gh]()}firstUpdated(e){super.firstUpdated(e),this[Gh]()}[(t=Yh,Gh)](){this[Kh]||(this[Kh]=this[Bh]());const{validity:e,validationMessage:t}=this[Kh].getValidity(),i=!!this[Yh],n=this[Yh]||t;this[vh].setValidity({...e,customError:i},n,this[Wh]()??void 0)}[Bh](){throw new Error("Implement [createValidator]")}[Wh](){throw new Error("Implement [getValidityAnchor]")}}return i}(function(e){class t extends e{get form(){return this[vh].form}get labels(){return this[vh].labels}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){this.toggleAttribute("disabled",e)}attributeChangedCallback(e,t,i){if("name"!==e&&"disabled"!==e)super.attributeChangedCallback(e,t,i);else{const i="disabled"===e?null!==t:t;this.requestUpdate(e,i)}}requestUpdate(e,t,i){super.requestUpdate(e,t,i),this[vh].setFormValue(this[Jh](),this[Qh]())}[Jh](){throw new Error("Implement [getFormValue]")}[Qh](){return this[Jh]()}formDisabledCallback(e){this.disabled=e}}return t.formAssociated=!0,Ka([Md({noAccessor:!0})],t.prototype,"name",null),Ka([Md({type:Boolean,noAccessor:!0})],t.prototype,"disabled",null),t}(_h(re))));class lu extends au{constructor(){super(...arguments),this.error=!1,this.errorText="",this.label="",this.required=!1,this.value="",this.prefixText="",this.suffixText="",this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText="",this.textDirection="",this.rows=2,this.cols=20,this.inputMode="",this.max="",this.maxLength=-1,this.min="",this.minLength=-1,this.noSpinner=!1,this.pattern="",this.placeholder="",this.readOnly=!1,this.multiple=!1,this.step="",this.type="text",this.autocomplete="",this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText=""}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(e){this.getInputOrTextarea().selectionDirection=e}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(e){this.getInputOrTextarea().selectionEnd=e}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(e){this.getInputOrTextarea().selectionStart=e}get valueAsNumber(){const e=this.getInput();return e?e.valueAsNumber:NaN}set valueAsNumber(e){const t=this.getInput();t&&(t.valueAsNumber=e,this.value=t.value)}get valueAsDate(){const e=this.getInput();return e?e.valueAsDate:null}set valueAsDate(e){const t=this.getInput();t&&(t.valueAsDate=e,this.value=t.value)}get hasError(){return this.error||this.nativeError}select(){this.getInputOrTextarea().select()}setRangeText(...e){this.getInputOrTextarea().setRangeText(...e),this.value=this.getInputOrTextarea().value}setSelectionRange(e,t,i){this.getInputOrTextarea().setSelectionRange(e,t,i)}stepDown(e){const t=this.getInput();t&&(t.stepDown(e),this.value=t.value)}stepUp(e){const t=this.getInput();t&&(t.stepUp(e),this.value=t.value)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText=""}attributeChangedCallback(e,t,i){"value"===e&&this.dirty||super.attributeChangedCallback(e,t,i)}render(){const e={disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:"textarea"===this.type,"no-spinner":this.noSpinner};return $`
      <span class="text-field ${sh(e)}">
        ${this.renderField()}
      </span>
    `}updated(e){const t=this.getInputOrTextarea().value;this.value!==t&&(this.value=t)}renderField(){return $h`<${this.fieldTag}
      class="field"
      count=${this.value.length}
      ?disabled=${this.disabled}
      ?error=${this.hasError}
      error-text=${this.getErrorText()}
      ?focused=${this.focused}
      ?has-end=${this.hasTrailingIcon}
      ?has-start=${this.hasLeadingIcon}
      label=${this.label}
      max=${this.maxLength}
      ?populated=${!!this.value}
      ?required=${this.required}
      ?resizable=${"textarea"===this.type}
      supporting-text=${this.supportingText}
    >
      ${this.renderLeadingIcon()}
      ${this.renderInputOrTextarea()}
      ${this.renderTrailingIcon()}
      <div id="description" slot="aria-describedby"></div>
    </${this.fieldTag}>`}renderLeadingIcon(){return $`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderTrailingIcon(){return $`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderInputOrTextarea(){const e={direction:this.textDirection},t=this.ariaLabel||this.label||U,i=this.autocomplete,n=(this.maxLength??-1)>-1,r=(this.minLength??-1)>-1;if("textarea"===this.type)return $`
        <textarea
          class="input"
          style=${jh(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${t}
          autocomplete=${i||U}
          ?disabled=${this.disabled}
          maxlength=${n?this.maxLength:U}
          minlength=${r?this.minLength:U}
          placeholder=${this.placeholder||U}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols}
          .value=${zh(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}></textarea>
      `;const s=this.renderPrefix(),o=this.renderSuffix(),a=this.inputMode;return $`
      <div class="input-wrapper">
        ${s}
        <input
          class="input"
          style=${jh(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${t}
          autocomplete=${i||U}
          ?disabled=${this.disabled}
          inputmode=${a||U}
          max=${this.max||U}
          maxlength=${n?this.maxLength:U}
          min=${this.min||U}
          minlength=${r?this.minLength:U}
          pattern=${this.pattern||U}
          placeholder=${this.placeholder||U}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${this.step||U}
          type=${this.type}
          .value=${zh(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${o}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(e,t){if(!e)return U;return $`<span class="${sh({suffix:t,prefix:!t})}">${e}</span>`}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusChange(){this.focused=this.inputOrTextarea?.matches(":focus")??!1}handleInput(e){this.dirty=!0,this.value=e.target.value}redispatchEvent(e){!
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function(e,t){!t.bubbles||e.shadowRoot&&!t.composed||t.stopPropagation();const i=Reflect.construct(t.constructor,[t.type,t]),n=e.dispatchEvent(i);n||t.preventDefault()}(this,e)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return"textarea"===this.type?null:this.getInputOrTextarea()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}[Jh](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(e){this.value=e}focus(){this.getInputOrTextarea().focus()}[Bh](){return new su((()=>({state:this,renderedControl:this.inputOrTextarea})))}[Wh](){return this.inputOrTextarea}[Xh](e){e?.preventDefault();const t=this.getErrorText();this.nativeError=!!e,this.nativeErrorText=this.validationMessage,t===this.getErrorText()&&this.field?.reannounceError()}}mh(lu),lu.shadowRootOptions={...re.shadowRootOptions,delegatesFocus:!0},Ka([Md({type:Boolean,reflect:!0})],lu.prototype,"error",void 0),Ka([Md({attribute:"error-text"})],lu.prototype,"errorText",void 0),Ka([Md()],lu.prototype,"label",void 0),Ka([Md({type:Boolean,reflect:!0})],lu.prototype,"required",void 0),Ka([Md()],lu.prototype,"value",void 0),Ka([Md({attribute:"prefix-text"})],lu.prototype,"prefixText",void 0),Ka([Md({attribute:"suffix-text"})],lu.prototype,"suffixText",void 0),Ka([Md({type:Boolean,attribute:"has-leading-icon"})],lu.prototype,"hasLeadingIcon",void 0),Ka([Md({type:Boolean,attribute:"has-trailing-icon"})],lu.prototype,"hasTrailingIcon",void 0),Ka([Md({attribute:"supporting-text"})],lu.prototype,"supportingText",void 0),Ka([Md({attribute:"text-direction"})],lu.prototype,"textDirection",void 0),Ka([Md({type:Number})],lu.prototype,"rows",void 0),Ka([Md({type:Number})],lu.prototype,"cols",void 0),Ka([Md({reflect:!0})],lu.prototype,"inputMode",void 0),Ka([Md()],lu.prototype,"max",void 0),Ka([Md({type:Number})],lu.prototype,"maxLength",void 0),Ka([Md()],lu.prototype,"min",void 0),Ka([Md({type:Number})],lu.prototype,"minLength",void 0),Ka([Md({type:Boolean,attribute:"no-spinner"})],lu.prototype,"noSpinner",void 0),Ka([Md()],lu.prototype,"pattern",void 0),Ka([Md({reflect:!0,converter:Hh})],lu.prototype,"placeholder",void 0),Ka([Md({type:Boolean,reflect:!0})],lu.prototype,"readOnly",void 0),Ka([Md({type:Boolean,reflect:!0})],lu.prototype,"multiple",void 0),Ka([Md()],lu.prototype,"step",void 0),Ka([Md({reflect:!0})],lu.prototype,"type",void 0),Ka([Md({reflect:!0})],lu.prototype,"autocomplete",void 0),Ka([$d()],lu.prototype,"dirty",void 0),Ka([$d()],lu.prototype,"focused",void 0),Ka([$d()],lu.prototype,"nativeError",void 0),Ka([$d()],lu.prototype,"nativeErrorText",void 0),Ka([Ud(".input")],lu.prototype,"inputOrTextarea",void 0),Ka([Ud(".field")],lu.prototype,"field",void 0),Ka([Vd({slot:"leading-icon"})],lu.prototype,"leadingIcons",void 0),Ka([Vd({slot:"trailing-icon"})],lu.prototype,"trailingIcons",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class cu extends lu{constructor(){super(...arguments),this.fieldTag=Lh`md-filled-field`}}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const du=s`:host{display:inline-flex;outline:none;resize:both;text-align:start;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}.icon{color:currentColor;display:flex;fill:currentColor}.icon ::slotted(*){display:flex}[hasstart] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[hasend] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let hu=class extends cu{constructor(){super(...arguments),this.fieldTag=Lh`md-filled-field`}};hu.styles=[du,Fh],hu=Ka([Od("md-filled-text-field")],hu);class uu extends re{static styles=s`
    :host {
      display: flex;
      align-items: center;
      padding: 8px;
      border-top: 1px solid var(--md-sys-color-outline);
    }
    md-filled-text-field {
      flex-grow: 1;
      margin-right: 8px;
    }
  `;render(){return $`
      <md-filled-text-field id="message-input" label="Type your message" @keydown="${this.handleKeyDown}"></md-filled-text-field>
      <md-filled-button @click="${this.sendMessage}">Send</md-filled-button>
    `}handleKeyDown(e){"Enter"===e.key&&(e.preventDefault(),this.sendMessage())}sendMessage(){const e=this.shadowRoot.getElementById("message-input"),t=new CustomEvent("send-message",{detail:{text:e.value}});this.dispatchEvent(t),e.value=""}}customElements.define("chat-input",uu);const pu=ai({apiKey:"AIzaSyAnbEWhDNFgo896bU3t-O20KuHr8jhHCxY",authDomain:"writing-assist.firebaseapp.com",databaseURL:"https://writing-assist-default-rtdb.firebaseio.com",projectId:"writing-assist",storageBucket:"writing-assist.appspot.com",messagingSenderId:"668975628741",appId:"1:668975628741:web:214e555ea5a1e4ae110bac",measurementId:"G-F6FS0Z1T0H"}),fu=function(e=li(),t){const i=ii(e,"database").getImmediate({identifier:t});if(!i._instanceStarted){const e=(e=>{const t=be(e);if(!t)return;const i=t.lastIndexOf(":");if(i<=0||i+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(i+1),10);return"["===t[0]?[t.substring(1,i-1),n]:[t.substring(0,i),n]})("database");e&&function(e,t,i,n={}){e=We(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&Ui("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let s;if(r.repoInfo_.nodeAdmin)n.mockUserToken&&Ui('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new rn(rn.OWNER);else if(n.mockUserToken){const t="string"==typeof n.mockUserToken?n.mockUserToken:function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const i=t||"demo-project",n=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:n,exp:n+3600,auth_time:n,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[fe(JSON.stringify({alg:"none",type:"JWT"})),fe(JSON.stringify(s)),""].join(".")}(n.mockUserToken,e.app.options.projectId);s=new rn(t)}!function(e,t,i,n){e.repoInfo_=new cn(`${t}:${i}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),n&&(e.authTokenProvider_=n)}(r,t,i,s)}(i,...e)}return i}(pu),mu=function(e=li()){const t=ii(e,"auth");if(t.isInitialized())return t.getImmediate();const i=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){const i=ii(e,"auth");if(i.isInitialized()){const e=i.getImmediate();if(Fe(i.getOptions(),null!=t?t:{}))return e;Za(e,"already-initialized")}return i.initialize({options:t})}(e,{popupRedirectResolver:Td,persistence:[zc,Cc,Tc]}),n=xe("authTokenSyncURL");if(n&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(n,location.origin);if(location.origin===e.origin){const t=(r=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),i=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Ad)return;const n=null==t?void 0:t.token;Pd!==n&&(Pd=n,await fetch(r,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))});!function(e,t,i){We(e).beforeAuthStateChanged(t,i)}(i,t,(()=>t(i.currentUser))),function(e,t,i,n){We(e).onIdTokenChanged(t,i,n)}(i,(e=>t(e)))}}var r;const s=be("auth");return s&&rc(i,`http://${s}`),i}(pu);class vu extends re{static properties={messages:{type:Array},userId:{type:String}};constructor(){super(),this.messages=[],this.userId=null}connectedCallback(){super.connectedCallback(),function(e,t,i,n){We(e).onAuthStateChanged(t,i,n)}(mu,(e=>{e?(this.userId=e.uid,this.listenForMessages()):this.userId=null}))}listenForMessages(){if(this.userId){!function(e,t,i,n){Ua(e,"value",t,i,n)}(Da(fu,`chats/${this.userId}`),(e=>{const t=e.val();this.messages=t?Object.values(t):[]}))}}handleSendMessage(e){const t={sender:"user",senderName:"You",text:e.detail.text,timestamp:(new Date).toISOString()};this.saveMessage(t)}saveMessage(e){if(this.userId){Ma(Da(fu,`chats/${this.userId}`),e)}}render(){return $`
      <div class="chat-box">
        <div class="messages">
          ${this.messages.map((e=>$`<chat-message .message="${e}"></chat-message>`))}
        </div>
        <chat-input @send-message="${this.handleSendMessage}"></chat-input>
      </div>
    `}static styles=s`
    .chat-box {
      display: flex;
      flex-direction: column;
      height: 100%;
      max-height: 500px;
      padding: 16px;
      border: 1px solid var(--md-sys-color-outline);
      border-radius: 8px;
      background-color: var(--md-sys-color-surface);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .messages {
      flex-grow: 1;
      overflow-y: auto;
      padding-bottom: 8px;
      display: flex;
      flex-direction: column;
    }
  `}customElements.define("chat-box",vu);
