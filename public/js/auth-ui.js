/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;class r{constructor(e,t,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const i=this.t;if(t&&void 0===e){const t=void 0!==i&&1===i.length;t&&(e=n.get(i)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&n.set(i,e))}return e}toString(){return this.cssText}}const s=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new r("string"==typeof e?e:e+"",void 0,i))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:a,defineProperty:o,getOwnPropertyDescriptor:c,getOwnPropertyNames:u,getOwnPropertySymbols:l,getPrototypeOf:d}=Object,h=globalThis,f=h.trustedTypes,p=f?f.emptyScript:"",m=h.reactiveElementPolyfillSupport,g=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?p:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},b=(e,t)=>!a(e,t),y={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:b};Symbol.metadata??=Symbol("metadata"),h.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=y){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,t);void 0!==n&&o(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){const{get:n,set:r}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){const s=n?.call(this);r.call(this,t),this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??y}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const e=d(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const e=this.properties,t=[...u(e),...l(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,n)=>{if(t)i.adoptedStyleSheets=n.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const t of n){const n=document.createElement("style"),r=e.litNonce;void 0!==r&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(void 0!==n&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(t,i.type);this._$Em=e,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Em=null}}_$AK(e,t){const i=this.constructor,n=i._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=i.getPropertyOptions(n),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this._$Em=n,this[n]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??b)(this[e],t))return;this.P(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[g("elementProperties")]=new Map,w[g("finalized")]=new Map,m?.({ReactiveElement:w}),(h.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _=globalThis,I=_.trustedTypes,E=I?I.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+k,A=`<${C}>`,T=document,P=()=>T.createComment(""),R=e=>null===e||"object"!=typeof e&&"function"!=typeof e,O=Array.isArray,N="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,M=/>/g,x=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),U=/'/g,F=/"/g,j=/^(?:script|style|textarea|title)$/i,B=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),H=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),$=new WeakMap,W=T.createTreeWalker(T,129);function z(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}const G=(e,t)=>{const i=e.length-1,n=[];let r,s=2===t?"<svg>":"",a=L;for(let t=0;t<i;t++){const i=e[t];let o,c,u=-1,l=0;for(;l<i.length&&(a.lastIndex=l,c=a.exec(i),null!==c);)l=a.lastIndex,a===L?"!--"===c[1]?a=D:void 0!==c[1]?a=M:void 0!==c[2]?(j.test(c[2])&&(r=RegExp("</"+c[2],"g")),a=x):void 0!==c[3]&&(a=x):a===x?">"===c[0]?(a=r??L,u=-1):void 0===c[1]?u=-2:(u=a.lastIndex-c[2].length,o=c[1],a=void 0===c[3]?x:'"'===c[3]?F:U):a===F||a===U?a=x:a===D||a===M?a=L:(a=x,r=void 0);const d=a===x&&e[t+1].startsWith("/>")?" ":"";s+=a===L?i+A:u>=0?(n.push(o),i.slice(0,u)+S+i.slice(u)+k+d):i+k+(-2===u?t:d)}return[z(e,s+(e[i]||"<?>")+(2===t?"</svg>":"")),n]};class K{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let r=0,s=0;const a=e.length-1,o=this.parts,[c,u]=G(e,t);if(this.el=K.createElement(c,i),W.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=W.nextNode())&&o.length<a;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(S)){const t=u[s++],i=n.getAttribute(e).split(k),a=/([.?@])?(.*)/.exec(t);o.push({type:1,index:r,name:a[2],strings:i,ctor:"."===a[1]?Z:"?"===a[1]?Q:"@"===a[1]?ee:X}),n.removeAttribute(e)}else e.startsWith(k)&&(o.push({type:6,index:r}),n.removeAttribute(e));if(j.test(n.tagName)){const e=n.textContent.split(k),t=e.length-1;if(t>0){n.textContent=I?I.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],P()),W.nextNode(),o.push({type:2,index:++r});n.append(e[t],P())}}}else if(8===n.nodeType)if(n.data===C)o.push({type:2,index:r});else{let e=-1;for(;-1!==(e=n.data.indexOf(k,e+1));)o.push({type:7,index:r}),e+=k.length-1}r++}}static createElement(e,t){const i=T.createElement("template");return i.innerHTML=e,i}}function q(e,t,i=e,n){if(t===H)return t;let r=void 0!==n?i._$Co?.[n]:i._$Cl;const s=R(t)?void 0:t._$litDirective$;return r?.constructor!==s&&(r?._$AO?.(!1),void 0===s?r=void 0:(r=new s(e),r._$AT(e,i,n)),void 0!==n?(i._$Co??=[])[n]=r:i._$Cl=r),void 0!==r&&(t=q(e,r._$AS(e,t.values),r,n)),t}class Y{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,n=(e?.creationScope??T).importNode(t,!0);W.currentNode=n;let r=W.nextNode(),s=0,a=0,o=i[0];for(;void 0!==o;){if(s===o.index){let t;2===o.type?t=new J(r,r.nextSibling,this,e):1===o.type?t=new o.ctor(r,o.name,o.strings,this,e):6===o.type&&(t=new te(r,this,e)),this._$AV.push(t),o=i[++a]}s!==o?.index&&(r=W.nextNode(),s++)}return W.currentNode=T,n}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class J{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=q(this,e,t),R(e)?e===V||null==e||""===e?(this._$AH!==V&&this._$AR(),this._$AH=V):e!==this._$AH&&e!==H&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>O(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==V&&R(this._$AH)?this._$AA.nextSibling.data=e:this.T(T.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,n="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=K.createElement(z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new Y(n,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=$.get(e.strings);return void 0===t&&$.set(e.strings,t=new K(e)),t}k(e){O(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const r of e)n===t.length?t.push(i=new J(this.S(P()),this.S(P()),this,this.options)):i=t[n],i._$AI(r),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,r){this.type=1,this._$AH=V,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}_$AI(e,t=this,i,n){const r=this.strings;let s=!1;if(void 0===r)e=q(this,e,t,0),s=!R(e)||e!==this._$AH&&e!==H,s&&(this._$AH=e);else{const n=e;let a,o;for(e=r[0],a=0;a<r.length-1;a++)o=q(this,n[i+a],t,a),o===H&&(o=this._$AH[a]),s||=!R(o)||o!==this._$AH[a],o===V?e=V:e!==V&&(e+=(o??"")+r[a+1]),this._$AH[a]=o}s&&!n&&this.j(e)}j(e){e===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Z extends X{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===V?void 0:e}}class Q extends X{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==V)}}class ee extends X{constructor(e,t,i,n,r){super(e,t,i,n,r),this.type=5}_$AI(e,t=this){if((e=q(this,e,t,0)??V)===H)return;const i=this._$AH,n=e===V&&i!==V||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==V&&(i===V||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class te{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){q(this,e)}}const ie=_.litHtmlPolyfillSupport;ie?.(K,J),(_.litHtmlVersions??=[]).push("3.1.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class ne extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const n=i?.renderBefore??t;let r=n._$litPart$;if(void 0===r){const e=i?.renderBefore??null;n._$litPart$=r=new J(t.insertBefore(P(),e),e,void 0,i??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return H}}ne._$litElement$=!0,ne.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ne});const re=globalThis.litElementPolyfillSupport;re?.({LitElement:ne}),(globalThis.litElementVersions??=[]).push("4.0.5");
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
const se=function(e){const t=[];let i=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<128?t[i++]=r:r<2048?(t[i++]=r>>6|192,t[i++]=63&r|128):55296==(64512&r)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++n)),t[i++]=r>>18|240,t[i++]=r>>12&63|128,t[i++]=r>>6&63|128,t[i++]=63&r|128):(t[i++]=r>>12|224,t[i++]=r>>6&63|128,t[i++]=63&r|128)}return t},ae={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,a=s?e[t+1]:0,o=t+2<e.length,c=o?e[t+2]:0,u=r>>2,l=(3&r)<<4|a>>4;let d=(15&a)<<2|c>>6,h=63&c;o||(h=64,s||(d=64)),n.push(i[u],i[l],i[d],i[h])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(se(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let i=0,n=0;for(;i<e.length;){const r=e[i++];if(r<128)t[n++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[i++];t[n++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[i++])<<12|(63&e[i++])<<6|63&e[i++])-65536;t[n++]=String.fromCharCode(55296+(s>>10)),t[n++]=String.fromCharCode(56320+(1023&s))}else{const s=e[i++],a=e[i++];t[n++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){const r=i[e.charAt(t++)],s=t<e.length?i[e.charAt(t)]:0;++t;const a=t<e.length?i[e.charAt(t)]:64;++t;const o=t<e.length?i[e.charAt(t)]:64;if(++t,null==r||null==s||null==a||null==o)throw new oe;const c=r<<2|s>>4;if(n.push(c),64!==a){const e=s<<4&240|a>>2;if(n.push(e),64!==o){const e=a<<6&192|o;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class oe extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ce=function(e){return function(e){const t=se(e);return ae.encodeByteArray(t,!0)}(e).replace(/\./g,"")},ue=function(e){try{return ae.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function le(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const i in t)t.hasOwnProperty(i)&&"__proto__"!==i&&(e[i]=le(e[i],t[i]));return e}
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
const de=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,he=()=>{try{return de()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&ue(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},fe=()=>{var e;return null===(e=he())||void 0===e?void 0:e.config},pe=e=>{var t;return null===(t=he())||void 0===t?void 0:t[`_${e}`]};
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
class me{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,i))}}}
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
 */function ge(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function ve(){var e;const t=null===(e=he())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return!1}}function be(){return"object"==typeof self&&self.self===self}function ye(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function we(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function _e(){const e=ge();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Ie(){try{return"object"==typeof indexedDB}catch(e){return!1}}class Ee extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name="FirebaseError",Object.setPrototypeOf(this,Ee.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Se.prototype.create)}}class Se{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},n=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(ke,((e,i)=>{const n=t[i];return null!=n?String(n):`<${i}?>`}))}(r,i):"Error",a=`${this.serviceName}: ${s} (${n}).`;return new Ee(n,a,i)}}const ke=/\{\$([^}]+)}/g;
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
 */function Ce(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Ae(e,t){if(e===t)return!0;const i=Object.keys(e),n=Object.keys(t);for(const r of i){if(!n.includes(r))return!1;const i=e[r],s=t[r];if(Te(i)&&Te(s)){if(!Ae(i,s))return!1}else if(i!==s)return!1}for(const e of n)if(!i.includes(e))return!1;return!0}function Te(e){return null!==e&&"object"==typeof e}
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
 */function Pe(e){const t=[];for(const[i,n]of Object.entries(e))Array.isArray(n)?n.forEach((e=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(i)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function Re(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[i,n]=e.split("=");t[decodeURIComponent(i)]=decodeURIComponent(n)}})),t}function Oe(e){const t=e.indexOf("?");if(!t)return"";const i=e.indexOf("#",t);return e.substring(t,i>0?i:void 0)}function Ne(e,t){const i=new Le(e,t);return i.subscribe.bind(i)}class Le{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,i){let n;if(void 0===e&&void 0===t&&void 0===i)throw new Error("Missing Observer.");n=function(e,t){if("object"!=typeof e||null===e)return!1;for(const i of t)if(i in e&&"function"==typeof e[i])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:i},void 0===n.next&&(n.next=De),void 0===n.error&&(n.error=De),void 0===n.complete&&(n.complete=De);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}})),this.observers.push(n),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function De(){}
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
 */function Me(e){return e&&e._delegate?e._delegate:e}class xe{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const Ue="[DEFAULT]";
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
 */class Fe{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new me;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&e.resolve(i)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(i)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:i})}catch(e){if(n)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:Ue})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});t.resolve(e)}catch(e){}}}}clearInstance(e=Ue){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=Ue){return this.instances.has(e)}getOptions(e=Ue){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[e,t]of this.instancesDeferred.entries()){i===this.normalizeInstanceIdentifier(e)&&t.resolve(n)}return n}onInit(e,t){var i;const n=this.normalizeInstanceIdentifier(t),r=null!==(i=this.onInitCallbacks.get(n))&&void 0!==i?i:new Set;r.add(e),this.onInitCallbacks.set(n,r);const s=this.instances.get(n);return s&&e(s,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const n of i)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e,n===Ue?void 0:n),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(e){}var n;return i||null}normalizeInstanceIdentifier(e=Ue){return this.component?this.component.multipleInstances?e:Ue:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class je{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Fe(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */const Be=[];var He;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(He||(He={}));const Ve={debug:He.DEBUG,verbose:He.VERBOSE,info:He.INFO,warn:He.WARN,error:He.ERROR,silent:He.SILENT},$e=He.INFO,We={[He.DEBUG]:"log",[He.VERBOSE]:"log",[He.INFO]:"info",[He.WARN]:"warn",[He.ERROR]:"error"},ze=(e,t,...i)=>{if(t<e.logLevel)return;const n=(new Date).toISOString(),r=We[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${n}]  ${e.name}:`,...i)};class Ge{constructor(e){this.name=e,this._logLevel=$e,this._logHandler=ze,this._userLogHandler=null,Be.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in He))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Ve[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,He.DEBUG,...e),this._logHandler(this,He.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,He.VERBOSE,...e),this._logHandler(this,He.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,He.INFO,...e),this._logHandler(this,He.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,He.WARN,...e),this._logHandler(this,He.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,He.ERROR,...e),this._logHandler(this,He.ERROR,...e)}}const Ke=(e,t)=>t.some((t=>e instanceof t));let qe,Ye;const Je=new WeakMap,Xe=new WeakMap,Ze=new WeakMap,Qe=new WeakMap,et=new WeakMap;let tt={get(e,t,i){if(e instanceof IDBTransaction){if("done"===t)return Xe.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Ze.get(e);if("store"===t)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return rt(e[t])},set:(e,t,i)=>(e[t]=i,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function it(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ye||(Ye=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(st(this),t),rt(Je.get(this))}:function(...t){return rt(e.apply(st(this),t))}:function(t,...i){const n=e.call(st(this),t,...i);return Ze.set(n,t.sort?t.sort():[t]),rt(n)}}function nt(e){return"function"==typeof e?it(e):(e instanceof IDBTransaction&&function(e){if(Xe.has(e))return;const t=new Promise(((t,i)=>{const n=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),n()},s=()=>{i(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));Xe.set(e,t)}(e),Ke(e,qe||(qe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,tt):e)}function rt(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,i)=>{const n=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(rt(e.result)),n()},s=()=>{i(e.error),n()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Je.set(t,e)})).catch((()=>{})),et.set(t,e),t}(e);if(Qe.has(e))return Qe.get(e);const t=nt(e);return t!==e&&(Qe.set(e,t),et.set(t,e)),t}const st=e=>et.get(e);const at=["get","getKey","getAll","getAllKeys","count"],ot=["put","add","delete","clear"],ct=new Map;function ut(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(ct.get(t))return ct.get(t);const i=t.replace(/FromIndex$/,""),n=t!==i,r=ot.includes(i);if(!(i in(n?IDBIndex:IDBObjectStore).prototype)||!r&&!at.includes(i))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let a=s.store;return n&&(a=a.index(t.shift())),(await Promise.all([a[i](...t),r&&s.done]))[0]};return ct.set(t,s),s}tt=(e=>({...e,get:(t,i,n)=>ut(t,i)||e.get(t,i,n),has:(t,i)=>!!ut(t,i)||e.has(t,i)}))(tt);
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
class lt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const dt="@firebase/app",ht="0.10.3",ft=new Ge("@firebase/app"),pt="@firebase/app-compat",mt="@firebase/analytics-compat",gt="@firebase/analytics",vt="@firebase/app-check-compat",bt="@firebase/app-check",yt="@firebase/auth",wt="@firebase/auth-compat",_t="@firebase/database",It="@firebase/database-compat",Et="@firebase/functions",St="@firebase/functions-compat",kt="@firebase/installations",Ct="@firebase/installations-compat",At="@firebase/messaging",Tt="@firebase/messaging-compat",Pt="@firebase/performance",Rt="@firebase/performance-compat",Ot="@firebase/remote-config",Nt="@firebase/remote-config-compat",Lt="@firebase/storage",Dt="@firebase/storage-compat",Mt="@firebase/firestore",xt="@firebase/vertexai-preview",Ut="@firebase/firestore-compat",Ft="firebase",jt="[DEFAULT]",Bt={[dt]:"fire-core",[pt]:"fire-core-compat",[gt]:"fire-analytics",[mt]:"fire-analytics-compat",[bt]:"fire-app-check",[vt]:"fire-app-check-compat",[yt]:"fire-auth",[wt]:"fire-auth-compat",[_t]:"fire-rtdb",[It]:"fire-rtdb-compat",[Et]:"fire-fn",[St]:"fire-fn-compat",[kt]:"fire-iid",[Ct]:"fire-iid-compat",[At]:"fire-fcm",[Tt]:"fire-fcm-compat",[Pt]:"fire-perf",[Rt]:"fire-perf-compat",[Ot]:"fire-rc",[Nt]:"fire-rc-compat",[Lt]:"fire-gcs",[Dt]:"fire-gcs-compat",[Mt]:"fire-fst",[Ut]:"fire-fst-compat",[xt]:"fire-vertex","fire-js":"fire-js",[Ft]:"fire-js-all"},Ht=new Map,Vt=new Map,$t=new Map;function Wt(e,t){try{e.container.addComponent(t)}catch(i){ft.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,i)}}function zt(e,t){e.container.addOrOverwriteComponent(t)}function Gt(e){const t=e.name;if($t.has(t))return ft.debug(`There were multiple attempts to register component ${t}.`),!1;$t.set(t,e);for(const t of Ht.values())Wt(t,e);for(const t of Vt.values())Wt(t,e);return!0}function Kt(e,t){const i=e.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),e.container.getProvider(t)}function qt(e){return void 0!==e.options}function Yt(e){return void 0!==e.settings}
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
const Jt=new Se("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
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
class Xt{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new xe("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jt.create("app-deleted",{appName:this._name})}}
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
 */class Zt extends Xt{constructor(e,t,i,n){const r=void 0!==t.automaticDataCollectionEnabled&&t.automaticDataCollectionEnabled,s={name:i,automaticDataCollectionEnabled:r};if(void 0!==e.apiKey)super(e,s,n);else{super(e.options,s,n)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:r},t),this._finalizationRegistry=new FinalizationRegistry((()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,ni(dt,ht,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,void 0!==e&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){ii(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Jt.create("server-app-deleted")}}
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
 */const Qt="10.12.0";function ei(e,t={}){let i=e;if("object"!=typeof t){t={name:t}}const n=Object.assign({name:jt,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw Jt.create("bad-app-name",{appName:String(r)});if(i||(i=fe()),!i)throw Jt.create("no-options");const s=Ht.get(r);if(s){if(Ae(i,s.options)&&Ae(n,s.config))return s;throw Jt.create("duplicate-app",{appName:r})}const a=new je(r);for(const e of $t.values())a.addComponent(e);const o=new Xt(i,n,a);return Ht.set(r,o),o}function ti(e=jt){const t=Ht.get(e);if(!t&&e===jt&&fe())return ei();if(!t)throw Jt.create("no-app",{appName:e});return t}async function ii(e){let t=!1;const i=e.name;if(Ht.has(i))t=!0,Ht.delete(i);else if(Vt.has(i)){e.decRefCount()<=0&&(Vt.delete(i),t=!0)}t&&(await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function ni(e,t,i){var n;let r=null!==(n=Bt[e])&&void 0!==n?n:e;i&&(r+=`-${i}`);const s=r.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void ft.warn(e.join(" "))}Gt(new xe(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}function ri(e,t){if(null!==e&&"function"!=typeof e)throw Jt.create("invalid-log-argument");!function(e,t){for(const i of Be){let n=null;t&&t.level&&(n=Ve[t.level]),i.userLogHandler=null===e?null:(t,i,...r)=>{const s=r.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");i>=(null!=n?n:t.logLevel)&&e({level:He[i].toLowerCase(),message:s,args:r,type:t.name})}}}(e,t)}function si(e){var t;t=e,Be.forEach((e=>{e.setLogLevel(t)}))}
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
 */const ai="firebase-heartbeat-database",oi=1,ci="firebase-heartbeat-store";let ui=null;function li(){return ui||(ui=function(e,t,{blocked:i,upgrade:n,blocking:r,terminated:s}={}){const a=indexedDB.open(e,t),o=rt(a);return n&&a.addEventListener("upgradeneeded",(e=>{n(rt(a.result),e.oldVersion,e.newVersion,rt(a.transaction),e)})),i&&a.addEventListener("blocked",(e=>i(e.oldVersion,e.newVersion,e))),o.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(e=>r(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),o}(ai,oi,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(ci)}catch(e){console.warn(e)}}}).catch((e=>{throw Jt.create("idb-open",{originalErrorMessage:e.message})}))),ui}async function di(e,t){try{const i=(await li()).transaction(ci,"readwrite"),n=i.objectStore(ci);await n.put(t,hi(e)),await i.done}catch(e){if(e instanceof Ee)ft.warn(e.message);else{const t=Jt.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});ft.warn(t.message)}}}function hi(e){return`${e.name}!${e.options.appId}`}
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
 */class fi{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new mi(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=pi();if((null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=pi(),{heartbeatsToSend:i,unsentEntries:n}=function(e,t=1024){const i=[];let n=e.slice();for(const r of e){const e=i.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),gi(i)>t){e.dates.pop();break}}else if(i.push({agent:r.agent,dates:[r.date]}),gi(i)>t){i.pop();break}n=n.slice(1)}return{heartbeatsToSend:i,unsentEntries:n}}(this._heartbeatsCache.heartbeats),r=ce(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function pi(){return(new Date).toISOString().substring(0,10)}class mi{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Ie()&&new Promise(((e,t)=>{try{let i=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),i||self.indexedDB.deleteDatabase(n),e(!0)},r.onupgradeneeded=()=>{i=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await li()).transaction(ci),i=await t.objectStore(ci).get(hi(e));return await t.done,i}catch(e){if(e instanceof Ee)ft.warn(e.message);else{const t=Jt.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});ft.warn(t.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return di(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return di(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}}}function gi(e){return ce(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var vi;vi="",Gt(new xe("platform-logger",(e=>new lt(e)),"PRIVATE")),Gt(new xe("heartbeat",(e=>new fi(e)),"PRIVATE")),ni(dt,ht,vi),ni(dt,ht,"esm2017"),ni("fire-js","");var bi=Object.freeze({__proto__:null,SDK_VERSION:Qt,_DEFAULT_ENTRY_NAME:jt,_addComponent:Wt,_addOrOverwriteComponent:zt,_apps:Ht,_clearComponents:function(){$t.clear()},_components:$t,_getProvider:Kt,_isFirebaseApp:qt,_isFirebaseServerApp:Yt,_registerComponent:Gt,_removeServiceInstance:function(e,t,i=jt){Kt(e,t).clearInstance(i)},_serverApps:Vt,deleteApp:ii,getApp:ti,getApps:function(){return Array.from(Ht.values())},initializeApp:ei,initializeServerApp:function(e,t){if(be())throw Jt.create("invalid-server-app-environment");let i;void 0===t.automaticDataCollectionEnabled&&(t.automaticDataCollectionEnabled=!1),i=qt(e)?e.options:e;const n=Object.assign(Object.assign({},t),i);if(void 0!==n.releaseOnDeref&&delete n.releaseOnDeref,void 0!==t.releaseOnDeref&&"undefined"==typeof FinalizationRegistry)throw Jt.create("finalization-registry-not-supported",{});const r=""+(e=>[...e].reduce(((e,t)=>Math.imul(31,e)+t.charCodeAt(0)|0),0))(JSON.stringify(n)),s=Vt.get(r);if(s)return s.incRefCount(t.releaseOnDeref),s;const a=new je(r);for(const e of $t.values())a.addComponent(e);const o=new Zt(i,t,r,a);return Vt.set(r,o),o},onLog:ri,registerVersion:ni,setLogLevel:si,FirebaseError:Ee});function yi(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]])}return i}
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
ni("firebase","10.12.0","app"),"function"==typeof SuppressedError&&SuppressedError;const wi={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},_i="EMAIL_SIGNIN",Ii="PASSWORD_RESET",Ei="RECOVER_EMAIL",Si="REVERT_SECOND_FACTOR_ADDITION",ki="VERIFY_AND_CHANGE_EMAIL",Ci="VERIFY_EMAIL";function Ai(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ti=
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
function(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}},Pi=Ai,Ri=new Se("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Oi=new Ge("@firebase/auth");function Ni(e,...t){Oi.logLevel<=He.ERROR&&Oi.error(`Auth (${Qt}): ${e}`,...t)}
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
 */function Li(e,...t){throw Fi(e,...t)}function Di(e,...t){return Fi(e,...t)}function Mi(e,t,i){const n=Object.assign(Object.assign({},Pi()),{[t]:i});return new Se("auth","Firebase",n).create(t,{appName:e.name})}function xi(e){return Mi(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ui(e,t,i){if(!(t instanceof i))throw i.name!==t.constructor.name&&Li(e,"argument-error"),Mi(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Fi(e,...t){if("string"!=typeof e){const i=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(i,...n)}return Ri.create(e,...t)}function ji(e,t,...i){if(!e)throw Fi(t,...i)}function Bi(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ni(t),new Error(t)}function Hi(e,t){e||Bi(t)}
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
 */function Vi(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function $i(){return"http:"===Wi()||"https:"===Wi()}function Wi(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
class zi{constructor(e,t){this.shortDelay=e,this.longDelay=t,Hi(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())||we()}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&($i()||ye()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
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
 */function Gi(e,t){Hi(e.emulator,"Emulator should always be set here");const{url:i}=e.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}
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
 */class Ki{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void Bi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void Bi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void Bi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const qi={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Yi=new zi(3e4,6e4);
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
 */function Ji(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Xi(e,t,i,n,r={}){return Zi(e,r,(async()=>{let r={},s={};n&&("GET"===t?s=n:r={body:JSON.stringify(n)});const a=Pe(Object.assign({key:e.config.apiKey},s)).slice(1),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/json",e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode),Ki.fetch()(en(e,e.config.apiHost,i,a),Object.assign({method:t,headers:o,referrerPolicy:"no-referrer"},r))}))}async function Zi(e,t,i){e._canInitEmulator=!1;const n=Object.assign(Object.assign({},qi),t);try{const t=new nn(e),r=await Promise.race([i(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw rn(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[i,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===i)throw rn(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===i)throw rn(e,"email-already-in-use",s);if("USER_DISABLED"===i)throw rn(e,"user-disabled",s);const o=n[i]||i.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw Mi(e,o,a);Li(e,o)}}catch(t){if(t instanceof Ee)throw t;Li(e,"network-request-failed",{message:String(t)})}}async function Qi(e,t,i,n,r={}){const s=await Xi(e,t,i,n,r);return"mfaPendingCredential"in s&&Li(e,"multi-factor-auth-required",{_serverResponse:s}),s}function en(e,t,i,n){const r=`${t}${i}?${n}`;return e.config.emulator?Gi(e.config,r):`${e.config.apiScheme}://${r}`}function tn(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class nn{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Di(this.auth,"network-request-failed"))),Yi.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function rn(e,t,i){const n={appName:e.name};i.email&&(n.email=i.email),i.phoneNumber&&(n.phoneNumber=i.phoneNumber);const r=Di(e,t,n);return r.customData._tokenResponse=i,r}
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
 */function sn(e){return void 0!==e&&void 0!==e.getResponse}function an(e){return void 0!==e&&void 0!==e.enterprise}class on{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return tn(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}
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
 */async function cn(e,t){return Xi(e,"POST","/v1/accounts:lookup",t)}
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
 */function un(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function ln(e){return 1e3*Number(e)}function dn(e){const[t,i,n]=e.split(".");if(void 0===t||void 0===i||void 0===n)return Ni("JWT malformed, contained fewer than 3 sections"),null;try{const e=ue(i);return e?JSON.parse(e):(Ni("Failed to decode base64 JWT payload"),null)}catch(e){return Ni("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function hn(e){const t=dn(e);return ji(t,"internal-error"),ji(void 0!==t.exp,"internal-error"),ji(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
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
 */async function fn(e,t,i=!1){if(i)return t;try{return await t}catch(t){throw t instanceof Ee&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class pn{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
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
 */class mn{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=un(this.lastLoginAt),this.creationTime=un(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function gn(e){var t;const i=e.auth,n=await e.getIdToken(),r=await fn(e,cn(i,{idToken:n}));ji(null==r?void 0:r.users.length,i,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?vn(s.providerUserInfo):[],o=function(e,t){const i=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...i,...t]}(e.providerData,a),c=e.isAnonymous,u=!(e.email&&s.passwordHash||(null==o?void 0:o.length)),l=!!c&&u,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new mn(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,d)}function vn(e){return e.map((e=>{var{providerId:t}=e,i=yi(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}}))}
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
class bn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ji(e.idToken,"internal-error"),ji(void 0!==e.idToken,"internal-error"),ji(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):hn(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ji(0!==e.length,"internal-error");const t=hn(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(ji(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:n,expiresIn:r}=await async function(e,t){const i=await Zi(e,{},(async()=>{const i=Pe({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:r}=e.config,s=en(e,n,"/v1/token",`key=${r}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ki.fetch()(s,{method:"POST",headers:a,body:i})}));return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}(e,t);this.updateTokensAndExpiration(i,n,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*i}static fromJSON(e,t){const{refreshToken:i,accessToken:n,expirationTime:r}=t,s=new bn;return i&&(ji("string"==typeof i,"internal-error",{appName:e}),s.refreshToken=i),n&&(ji("string"==typeof n,"internal-error",{appName:e}),s.accessToken=n),r&&(ji("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bn,this.toJSON())}_performRefresh(){return Bi("not implemented")}}
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
 */function yn(e,t){ji("string"==typeof e||void 0===e,"internal-error",{appName:t})}class wn{constructor(e){var{uid:t,auth:i,stsTokenManager:n}=e,r=yi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pn(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new mn(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await fn(this,this.stsTokenManager.getToken(this.auth,e));return ji(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const i=Me(e),n=await i.getIdToken(t),r=dn(n);ji(r&&r.exp&&r.auth_time&&r.iat,i.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,a=null==s?void 0:s.sign_in_provider;return{claims:r,token:n,authTime:un(ln(r.auth_time)),issuedAtTime:un(ln(r.iat)),expirationTime:un(ln(r.exp)),signInProvider:a||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Me(e);await gn(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(ji(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new wn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ji(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await gn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Yt(this.auth.app))return Promise.reject(xi(this.auth));const e=await this.getIdToken();return await fn(this,
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
async function(e,t){return Xi(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,n,r,s,a,o,c,u;const l=null!==(i=t.displayName)&&void 0!==i?i:void 0,d=null!==(n=t.email)&&void 0!==n?n:void 0,h=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:y,isAnonymous:w,providerData:_,stsTokenManager:I}=t;ji(b&&I,e,"internal-error");const E=bn.fromJSON(this.name,I);ji("string"==typeof b,e,"internal-error"),yn(l,e.name),yn(d,e.name),ji("boolean"==typeof y,e,"internal-error"),ji("boolean"==typeof w,e,"internal-error"),yn(h,e.name),yn(f,e.name),yn(p,e.name),yn(m,e.name),yn(g,e.name),yn(v,e.name);const S=new wn({uid:b,auth:e,email:d,emailVerified:y,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:v});return _&&Array.isArray(_)&&(S.providerData=_.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,i=!1){const n=new bn;n.updateFromServerResponse(t);const r=new wn({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:i});return await gn(r),r}static async _fromGetAccountInfoResponse(e,t,i){const n=t.users[0];ji(void 0!==n.localId,"internal-error");const r=void 0!==n.providerUserInfo?vn(n.providerUserInfo):[],s=!(n.email&&n.passwordHash||(null==r?void 0:r.length)),a=new bn;a.updateFromIdToken(i);const o=new wn({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:s}),c={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:r,metadata:new mn(n.createdAt,n.lastLoginAt),isAnonymous:!(n.email&&n.passwordHash||(null==r?void 0:r.length))};return Object.assign(o,c),o}}
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
 */const _n=new Map;function In(e){Hi(e instanceof Function,"Expected a class definition");let t=_n.get(e);return t?(Hi(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,_n.set(e,t),t)}
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
 */class En{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}En.type="NONE";const Sn=En;
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
 */function kn(e,t,i){return`firebase:${e}:${t}:${i}`}class Cn{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:n,name:r}=this.auth;this.fullUserKey=kn(this.userKey,n.apiKey,r),this.fullPersistenceKey=kn("persistence",n.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Cn(In(Sn),e,i);const n=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=n[0]||In(Sn);const s=kn(i,e.config.apiKey,e.name);let a=null;for(const i of t)try{const t=await i._get(s);if(t){const n=wn._fromJSON(e,t);i!==r&&(a=n),r=i;break}}catch(e){}const o=n.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&o.length?(r=o[0],a&&await r._set(s,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new Cn(r,e,i)):new Cn(r,e,i)}}
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
 */function An(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(On(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Tn(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ln(t))return"Blackberry";if(Dn(t))return"Webos";if(Pn(t))return"Safari";if((t.includes("chrome/")||Rn(t))&&!t.includes("edge/"))return"Chrome";if(Nn(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(t);if(2===(null==i?void 0:i.length))return i[1]}return"Other"}function Tn(e=ge()){return/firefox\//i.test(e)}function Pn(e=ge()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Rn(e=ge()){return/crios\//i.test(e)}function On(e=ge()){return/iemobile/i.test(e)}function Nn(e=ge()){return/android/i.test(e)}function Ln(e=ge()){return/blackberry/i.test(e)}function Dn(e=ge()){return/webos/i.test(e)}function Mn(e=ge()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function xn(e=ge()){return Mn(e)||Nn(e)||Dn(e)||Ln(e)||/windows phone/i.test(e)||On(e)}
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
function Un(e,t=[]){let i;switch(e){case"Browser":i=An(ge());break;case"Worker":i=`${An(ge())}-${e}`;break;default:i=e}const n=t.length?t.join(","):"FirebaseCore-web";return`${i}/JsCore/${Qt}/${n}`}
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
 */class Fn{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=t=>new Promise(((i,n)=>{try{i(e(t))}catch(e){n(e)}}));i.onAbort=t,this.queue.push(i);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
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
 */class jn{constructor(e){var t,i,n,r;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(n=null===(i=e.allowedNonAlphanumericCharacters)||void 0===i?void 0:i.join(""))&&void 0!==n?n:"",this.forceUpgradeOnSignin=null!==(r=e.forceUpgradeOnSignin)&&void 0!==r&&r,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,n,r,s,a;const o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=null===(t=o.meetsMinPasswordLength)||void 0===t||t),o.isValid&&(o.isValid=null===(i=o.meetsMaxPasswordLength)||void 0===i||i),o.isValid&&(o.isValid=null===(n=o.containsLowercaseLetter)||void 0===n||n),o.isValid&&(o.isValid=null===(r=o.containsUppercaseLetter)||void 0===r||r),o.isValid&&(o.isValid=null===(s=o.containsNumericCharacter)||void 0===s||s),o.isValid&&(o.isValid=null===(a=o.containsNonAlphanumericCharacter)||void 0===a||a),o}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),n&&(t.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,t){let i;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let n=0;n<e.length;n++)i=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,n,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}
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
 */class Bn{constructor(e,t,i,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vn(this),this.idTokenSubscription=new Vn(this),this.beforeStateQueue=new Fn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ri,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=In(t)),this._initializationPromise=this.queue((async()=>{var i,n;if(!this._deleted&&(this.persistenceManager=await Cn.create(this,e),!this._deleted)){if(null===(i=this._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await cn(this,{idToken:e}),i=await wn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Yt(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let n=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==n?void 0:n._redirectEventId,a=await this.tryRedirectSignIn(e);i&&i!==s||!(null==a?void 0:a.user)||(n=a.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=i,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return ji(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await gn(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Yt(this.app))return Promise.reject(xi(this));const t=e?Me(e):null;return t&&ji(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ji(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return Yt(this.app)?Promise.reject(xi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Yt(this.app)?Promise.reject(xi(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(In(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return Xi(e,"GET","/v2/passwordPolicy",Ji(e,t))}
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
 */(this),t=new jn(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Se("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged((()=>{i(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return Xi(e,"POST","/v2/accounts:revokeToken",Ji(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return null===e?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&In(e)||this._popupRedirectResolver;ji(t,this,"argument-error"),this.redirectPersistenceManager=await Cn.create(this,[In(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(i=this.redirectUser)||void 0===i?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,n){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ji(a,this,"internal-error"),a.then((()=>{s||r(this.currentUser)})),"function"==typeof t){const r=e.addObserver(t,i,n);return()=>{s=!0,r()}}{const i=e.addObserver(t);return()=>{s=!0,i()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ji(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Un(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const n=await this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Oi.logLevel<=He.WARN&&Oi.warn(`Auth (${Qt}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function Hn(e){return Me(e)}class Vn{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ne((e=>this.observer=e))}get next(){return ji(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */let $n={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Wn(e){return $n.loadJS(e)}function zn(e){return`__${e}${Math.floor(1e6*Math.random())}`}class Gn{constructor(e){this.type="recaptcha-enterprise",this.auth=Hn(e)}async verify(e="verify",t=!1){async function i(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,i)=>{(async function(e,t){return Xi(e,"GET","/v2/recaptchaConfig",Ji(e,t))})(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((n=>{if(void 0!==n.recaptchaKey){const i=new on(n);return null==e.tenantId?e._agentRecaptchaConfig=i:e._tenantRecaptchaConfigs[e.tenantId]=i,t(i.siteKey)}i(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{i(e)}))}))}function n(t,i,n){const r=window.grecaptcha;an(r)?r.enterprise.ready((()=>{r.enterprise.execute(t,{action:e}).then((e=>{i(e)})).catch((()=>{i("NO_RECAPTCHA")}))})):n(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,r)=>{i(this.auth).then((i=>{if(!t&&an(window.grecaptcha))n(i,e,r);else{if("undefined"==typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));let t=$n.recaptchaEnterpriseScript;0!==t.length&&(t+=i),Wn(t).then((()=>{n(i,e,r)})).catch((e=>{r(e)}))}})).catch((e=>{r(e)}))}))}}async function Kn(e,t,i,n=!1){const r=new Gn(e);let s;try{s=await r.verify(i)}catch(e){s=await r.verify(i,!0)}const a=Object.assign({},t);return n?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function qn(e,t,i,n){var r;if(null===(r=e._getRecaptchaConfig())||void 0===r?void 0:r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Kn(e,t,i,"getOobCode"===i);return n(e,r)}return n(e,t).catch((async r=>{if("auth/missing-recaptcha-token"===r.code){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const r=await Kn(e,t,i,"getOobCode"===i);return n(e,r)}return Promise.reject(r)}))}
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
 */function Yn(e,t,i){const n=Hn(e);ji(n._canInitEmulator,n,"emulator-config-failed"),ji(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");const r=!!(null==i?void 0:i.disableWarnings),s=Jn(t),{host:a,port:o}=function(e){const t=Jn(e),i=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!i)return{host:"",port:null};const n=i[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);if(r){const e=r[1];return{host:e,port:Xn(n.substr(e.length+1))}}{const[e,t]=n.split(":");return{host:e,port:Xn(t)}}}(t),c=null===o?"":`:${o}`;n.config.emulator={url:`${s}//${a}${c}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function Jn(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Xn(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Zn{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Bi("not implemented")}_getIdTokenResponse(e){return Bi("not implemented")}_linkToIdToken(e,t){return Bi("not implemented")}_getReauthenticationResolver(e){return Bi("not implemented")}}
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
 */async function Qn(e,t){return Xi(e,"POST","/v1/accounts:resetPassword",Ji(e,t))}async function er(e,t){return Xi(e,"POST","/v1/accounts:signUp",t)}
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
async function tr(e,t){return Qi(e,"POST","/v1/accounts:signInWithPassword",Ji(e,t))}async function ir(e,t){return Xi(e,"POST","/v1/accounts:sendOobCode",Ji(e,t))}async function nr(e,t){return ir(e,t)}async function rr(e,t){return ir(e,t)}
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
class sr extends Zn{constructor(e,t,i,n=null){super("password",i),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new sr(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new sr(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return qn(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",tr);case"emailLink":
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
return async function(e,t){return Qi(e,"POST","/v1/accounts:signInWithEmailLink",Ji(e,t))}(e,{email:this._email,oobCode:this._password});default:Li(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return qn(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",er);case"emailLink":return async function(e,t){return Qi(e,"POST","/v1/accounts:signInWithEmailLink",Ji(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Li(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function ar(e,t){return Qi(e,"POST","/v1/accounts:signInWithIdp",Ji(e,t))}
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
 */class or extends Zn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Li("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:i,signInMethod:n}=t,r=yi(t,["providerId","signInMethod"]);if(!i||!n)return null;const s=new or(i,n);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return ar(e,this.buildRequest())}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,ar(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ar(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Pe(t)}return e}}
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
 */const cr={USER_NOT_FOUND:"user-not-found"};
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
class ur extends Zn{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ur({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ur({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Qi(e,"POST","/v1/accounts:signInWithPhoneNumber",Ji(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const i=await Qi(e,"POST","/v1/accounts:signInWithPhoneNumber",Ji(e,t));if(i.temporaryProof)throw rn(e,"account-exists-with-different-credential",i);return i}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Qi(e,"POST","/v1/accounts:signInWithPhoneNumber",Ji(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),cr)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:n}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:i,phoneNumber:n,temporaryProof:r}=e;return i||t||n||r?new ur({verificationId:t,verificationCode:i,phoneNumber:n,temporaryProof:r}):null}}
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
 */class lr{constructor(e){var t,i,n,r,s,a;const o=Re(Oe(e)),c=null!==(t=o.apiKey)&&void 0!==t?t:null,u=null!==(i=o.oobCode)&&void 0!==i?i:null,l=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=o.mode)&&void 0!==n?n:null);ji(c&&u&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=u,this.continueUrl=null!==(r=o.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=o.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(a=o.tenantId)&&void 0!==a?a:null}static parseLink(e){const t=function(e){const t=Re(Oe(e)).link,i=t?Re(Oe(t)).deep_link_id:null,n=Re(Oe(e)).deep_link_id;return(n?Re(Oe(n)).link:null)||n||i||t||e}(e);try{return new lr(t)}catch(e){return null}}}
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
 */class dr{constructor(){this.providerId=dr.PROVIDER_ID}static credential(e,t){return sr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=lr.parseLink(t);return ji(i,"argument-error"),sr._fromEmailAndCode(e,i.code,i.tenantId)}}dr.PROVIDER_ID="password",dr.EMAIL_PASSWORD_SIGN_IN_METHOD="password",dr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class hr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class fr extends hr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class pr extends fr{static credentialFromJSON(e){const t="string"==typeof e?JSON.parse(e):e;return ji("providerId"in t&&"signInMethod"in t,"argument-error"),or._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return ji(e.idToken||e.accessToken,"argument-error"),or._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return pr.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return pr.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:n,pendingToken:r,nonce:s,providerId:a}=e;if(!(i||n||t||r))return null;if(!a)return null;try{return new pr(a)._credential({idToken:t,accessToken:i,nonce:s,pendingToken:r})}catch(e){return null}}}
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
 */class mr extends fr{constructor(){super("facebook.com")}static credential(e){return or._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return mr.credential(e.oauthAccessToken)}catch(e){return null}}}mr.FACEBOOK_SIGN_IN_METHOD="facebook.com",mr.PROVIDER_ID="facebook.com";
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
class gr extends fr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return or._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return gr.credential(t,i)}catch(e){return null}}}gr.GOOGLE_SIGN_IN_METHOD="google.com",gr.PROVIDER_ID="google.com";
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
class vr extends fr{constructor(){super("github.com")}static credential(e){return or._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch(e){return null}}}vr.GITHUB_SIGN_IN_METHOD="github.com",vr.PROVIDER_ID="github.com";class br extends Zn{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){return ar(e,this.buildRequest())}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,ar(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ar(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:i,signInMethod:n,pendingToken:r}=t;return i&&n&&r&&i===n?new br(i,r):null}static _create(e,t){return new br(e,t)}buildRequest(){return{requestUri:"http://localhost",returnSecureToken:!0,pendingToken:this.pendingToken}}}
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
 */class yr extends hr{constructor(e){ji(e.startsWith("saml."),"argument-error"),super(e)}static credentialFromResult(e){return yr.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return yr.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=br.fromJSON(e);return ji(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:i}=e;if(!t||!i)return null;try{return br._create(i,t)}catch(e){return null}}}
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
 */class wr extends fr{constructor(){super("twitter.com")}static credential(e,t){return or._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return wr.credential(t,i)}catch(e){return null}}}
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
async function _r(e,t){return Qi(e,"POST","/v1/accounts:signUp",Ji(e,t))}
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
 */wr.TWITTER_SIGN_IN_METHOD="twitter.com",wr.PROVIDER_ID="twitter.com";class Ir{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,n=!1){const r=await wn._fromIdTokenResponse(e,i,n),s=Er(i);return new Ir({user:r,providerId:s,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const n=Er(i);return new Ir({user:e,providerId:n,_tokenResponse:i,operationType:t})}}function Er(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class Sr extends Ee{constructor(e,t,i,n){var r;super(t.code,t.message),this.operationType=i,this.user=n,Object.setPrototypeOf(this,Sr.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,n){return new Sr(e,t,i,n)}}function kr(e,t,i,n){return("reauthenticate"===t?i._getReauthenticationResolver(e):i._getIdTokenResponse(e)).catch((i=>{if("auth/multi-factor-auth-required"===i.code)throw Sr._fromErrorAndOperation(e,i,t,n);throw i}))}
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
 */function Cr(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
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
 */async function Ar(e,t){const i=Me(e);await Pr(!0,i,t);const{providerUserInfo:n}=await async function(e,t){return Xi(e,"POST","/v1/accounts:update",t)}(i.auth,{idToken:await i.getIdToken(),deleteProvider:[t]}),r=Cr(n||[]);return i.providerData=i.providerData.filter((e=>r.has(e.providerId))),r.has("phone")||(i.phoneNumber=null),await i.auth._persistUserIfCurrent(i),i}async function Tr(e,t,i=!1){const n=await fn(e,t._linkToIdToken(e.auth,await e.getIdToken()),i);return Ir._forOperation(e,"link",n)}async function Pr(e,t,i){await gn(t);const n=!1===e?"provider-already-linked":"no-such-provider";ji(Cr(t.providerData).has(i)===e,t.auth,n)}
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
 */async function Rr(e,t,i=!1){const{auth:n}=e;if(Yt(n.app))return Promise.reject(xi(n));const r="reauthenticate";try{const s=await fn(e,kr(n,r,t,e),i);ji(s.idToken,n,"internal-error");const a=dn(s.idToken);ji(a,n,"internal-error");const{sub:o}=a;return ji(e.uid===o,n,"user-mismatch"),Ir._forOperation(e,r,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Li(n,"user-mismatch"),e}}
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
 */async function Or(e,t,i=!1){if(Yt(e.app))return Promise.reject(xi(e));const n="signIn",r=await kr(e,n,t),s=await Ir._fromIdTokenResponse(e,n,r);return i||await e._updateCurrentUser(s.user),s}async function Nr(e,t){return Or(Hn(e),t)}async function Lr(e,t){const i=Me(e);return await Pr(!1,i,t.providerId),Tr(i,t)}async function Dr(e,t){return Rr(Me(e),t)}
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
async function Mr(e,t){if(Yt(e.app))return Promise.reject(xi(e));const i=Hn(e),n=await async function(e,t){return Qi(e,"POST","/v1/accounts:signInWithCustomToken",Ji(e,t))}(i,{token:t,returnSecureToken:!0}),r=await Ir._fromIdTokenResponse(i,"signIn",n);return await i._updateCurrentUser(r.user),r}
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
 */class xr{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Ur._fromServerResponse(e,t):"totpInfo"in t?Fr._fromServerResponse(e,t):Li(e,"internal-error")}}class Ur extends xr{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Ur(t)}}class Fr extends xr{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Fr(t)}}
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
 */function jr(e,t,i){var n;ji((null===(n=i.url)||void 0===n?void 0:n.length)>0,e,"invalid-continue-uri"),ji(void 0===i.dynamicLinkDomain||i.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=i.url,t.dynamicLinkDomain=i.dynamicLinkDomain,t.canHandleCodeInApp=i.handleCodeInApp,i.iOS&&(ji(i.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=i.iOS.bundleId),i.android&&(ji(i.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=i.android.installApp,t.androidMinimumVersionCode=i.android.minimumVersion,t.androidPackageName=i.android.packageName)}
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
 */async function Br(e){const t=Hn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function Hr(e,t){await async function(e,t){return Xi(e,"POST","/v1/accounts:update",Ji(e,t))}(Me(e),{oobCode:t})}async function Vr(e,t){const i=Me(e),n=await Qn(i,{oobCode:t}),r=n.requestType;switch(ji(r,i,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":ji(n.newEmail,i,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":ji(n.mfaInfo,i,"internal-error");default:ji(n.email,i,"internal-error")}let s=null;return n.mfaInfo&&(s=xr._fromServerResponse(Hn(i),n.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===n.requestType?n.newEmail:n.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===n.requestType?n.email:n.newEmail)||null,multiFactorInfo:s},operation:r}}
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
async function $r(e,t){const i={identifier:t,continueUri:$i()?Vi():"http://localhost"},{signinMethods:n}=
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
 */await async function(e,t){return Xi(e,"POST","/v1/accounts:createAuthUri",Ji(e,t))}(Me(e),i);return n||[]}async function Wr(e,t){const i=Me(e),n={requestType:"VERIFY_EMAIL",idToken:await e.getIdToken()};t&&jr(i.auth,n,t);const{email:r}=await async function(e,t){return ir(e,t)}(i.auth,n);r!==e.email&&await e.reload()}async function zr(e,t,i){const n=Me(e),r={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await e.getIdToken(),newEmail:t};i&&jr(n.auth,r,i);const{email:s}=await async function(e,t){return ir(e,t)}(n.auth,r);s!==e.email&&await e.reload()}
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
async function Gr(e,{displayName:t,photoURL:i}){if(void 0===t&&void 0===i)return;const n=Me(e),r={idToken:await n.getIdToken(),displayName:t,photoUrl:i,returnSecureToken:!0},s=await fn(n,async function(e,t){return Xi(e,"POST","/v1/accounts:update",t)}(n.auth,r));n.displayName=s.displayName||null,n.photoURL=s.photoUrl||null;const a=n.providerData.find((({providerId:e})=>"password"===e));a&&(a.displayName=n.displayName,a.photoURL=n.photoURL),await n._updateTokensIfNecessary(s)}async function Kr(e,t,i){const{auth:n}=e,r={idToken:await e.getIdToken(),returnSecureToken:!0};t&&(r.email=t),i&&(r.password=i);const s=await fn(e,async function(e,t){return Xi(e,"POST","/v1/accounts:update",t)}(n,r));await e._updateTokensIfNecessary(s,!0)}
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
 */class qr{constructor(e,t,i={}){this.isNewUser=e,this.providerId=t,this.profile=i}}class Yr extends qr{constructor(e,t,i,n){super(e,t,i),this.username=n}}class Jr extends qr{constructor(e,t){super(e,"facebook.com",t)}}class Xr extends Yr{constructor(e,t){super(e,"github.com",t,"string"==typeof(null==t?void 0:t.login)?null==t?void 0:t.login:null)}}class Zr extends qr{constructor(e,t){super(e,"google.com",t)}}class Qr extends Yr{constructor(e,t,i){super(e,"twitter.com",t,i)}}function es(e){const{user:t,_tokenResponse:i}=e;return t.isAnonymous&&!i?{providerId:null,isNewUser:!1,profile:null}:function(e){var t,i;if(!e)return null;const{providerId:n}=e,r=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!n&&(null==e?void 0:e.idToken)){const n=null===(i=null===(t=dn(e.idToken))||void 0===t?void 0:t.firebase)||void 0===i?void 0:i.sign_in_provider;if(n)return new qr(s,"anonymous"!==n&&"custom"!==n?n:null)}if(!n)return null;switch(n){case"facebook.com":return new Jr(s,r);case"github.com":return new Xr(s,r);case"google.com":return new Zr(s,r);case"twitter.com":return new Qr(s,r,e.screenName||null);case"custom":case"anonymous":return new qr(s,null);default:return new qr(s,n,r)}}(i)}
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
class ts{constructor(e,t,i){this.type=e,this.credential=t,this.user=i}static _fromIdtoken(e,t){return new ts("enroll",e,t)}static _fromMfaPendingCredential(e){return new ts("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,i;if(null==e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return ts._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(i=e.multiFactorSession)||void 0===i?void 0:i.idToken)return ts._fromIdtoken(e.multiFactorSession.idToken)}return null}}
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
 */class is{constructor(e,t,i){this.session=e,this.hints=t,this.signInResolver=i}static _fromError(e,t){const i=Hn(e),n=t.customData._serverResponse,r=(n.mfaInfo||[]).map((e=>xr._fromServerResponse(i,e)));ji(n.mfaPendingCredential,i,"internal-error");const s=ts._fromMfaPendingCredential(n.mfaPendingCredential);return new is(s,r,(async e=>{const r=await e._process(i,s);delete n.mfaInfo,delete n.mfaPendingCredential;const a=Object.assign(Object.assign({},n),{idToken:r.idToken,refreshToken:r.refreshToken});switch(t.operationType){case"signIn":const e=await Ir._fromIdTokenResponse(i,t.operationType,a);return await i._updateCurrentUser(e.user),e;case"reauthenticate":return ji(t.user,i,"internal-error"),Ir._forOperation(t.user,t.operationType,a);default:Li(i,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}class ns{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>xr._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new ns(e)}async getSession(){return ts._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const i=e,n=await this.getSession(),r=await fn(this.user,i._process(this.user.auth,n,t));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(e){const t="string"==typeof e?e:e.uid,i=await this.user.getIdToken();try{const e=await fn(this.user,function(e,t){return Xi(e,"POST","/v2/accounts/mfaEnrollment:withdraw",Ji(e,t))}(this.user.auth,{idToken:i,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(e),await this.user.reload()}catch(e){throw e}}}const rs=new WeakMap;const ss="__sak";
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
 */class as{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ss,"1"),this.storage.removeItem(ss),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */class os extends as{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=ge();return Pn(e)||Mn(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=xn(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),n=this.localCache[t];i!==n&&e(t,n,i)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,i)=>{this.notifyListeners(e,i)}));const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const n=this.storage.getItem(i);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const n=()=>{const e=this.storage.getItem(i);(t||this.localCache[i]!==e)&&this.notifyListeners(i,e)},r=this.storage.getItem(i);_e()&&10===document.documentMode&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const e of Array.from(i))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}os.type="LOCAL";const cs=os;
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
 */class us extends as{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}us.type="SESSION";const ls=us;
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
class ds{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const i=new ds(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:n,data:r}=t.data,s=this.handlersMap[n];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:n});const a=Array.from(s).map((async e=>e(t.origin,r))),o=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:n,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function hs(e="",t=10){let i="";for(let e=0;e<t;e++)i+=Math.floor(10*Math.random());return e+i}
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
 */ds.receivers=[];class fs{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const n="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let r,s;return new Promise(((a,o)=>{const c=hs("",20);n.port1.start();const u=setTimeout((()=>{o(new Error("unsupported_event"))}),i);s={messageChannel:n,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),r=setTimeout((()=>{o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),a(t.data.response);break;default:clearTimeout(u),clearTimeout(r),o(new Error("invalid_response"))}}},this.handlers.add(s),n.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[n.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
 */function ps(){return window}
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
function ms(){return void 0!==ps().WorkerGlobalScope&&"function"==typeof ps().importScripts}
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
const gs="firebaseLocalStorageDb",vs="firebaseLocalStorage",bs="fbase_key";class ys{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function ws(e,t){return e.transaction([vs],t?"readwrite":"readonly").objectStore(vs)}function _s(){const e=indexedDB.open(gs,1);return new Promise(((t,i)=>{e.addEventListener("error",(()=>{i(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(vs,{keyPath:bs})}catch(e){i(e)}})),e.addEventListener("success",(async()=>{const i=e.result;i.objectStoreNames.contains(vs)?t(i):(i.close(),await function(){const e=indexedDB.deleteDatabase(gs);return new ys(e).toPromise()}(),t(await _s()))}))}))}async function Is(e,t,i){const n=ws(e,!0).put({[bs]:t,value:i});return new ys(n).toPromise()}function Es(e,t){const i=ws(e,!0).delete(t);return new ys(i).toPromise()}class Ss{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await _s()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ms()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ds._getInstance(ms()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new fs(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&(null===(e=i[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=i[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _s();return await Is(e,ss,"1"),await Es(e,ss),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((i=>Is(i,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const i=ws(e,!1).get(t),n=await new ys(i).toPromise();return void 0===n?null:n.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Es(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=ws(e,!1).getAll();return new ys(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],i=new Set;if(0!==e.length)for(const{fbase_key:n,value:r}of e)i.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(r)&&(this.notifyListeners(n,r),t.push(n));for(const e of Object.keys(this.localCache))this.localCache[e]&&!i.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const e of Array.from(i))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ss.type="LOCAL";const ks=Ss;
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
const Cs=1e12;class As{constructor(e){this.auth=e,this.counter=Cs,this._widgets=new Map}render(e,t){const i=this.counter;return this._widgets.set(i,new Ts(e,this.auth.name,t||{})),this.counter++,i}reset(e){var t;const i=e||Cs;null===(t=this._widgets.get(i))||void 0===t||t.delete(),this._widgets.delete(i)}getResponse(e){var t;const i=e||Cs;return(null===(t=this._widgets.get(i))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const i=e||Cs;return null===(t=this._widgets.get(i))||void 0===t||t.execute(),""}}class Ts{constructor(e,t,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const n="string"==typeof e?document.getElementById(e):e;ji(n,"argument-error",{appName:t}),this.container=n,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=function(e){const t=[],i="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<e;n++)t.push(i.charAt(Math.floor(Math.random()*i.length)));return t.join("")}
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
 */(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(e){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(e){}this.isVisible&&this.execute()}),6e4)}),500))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}const Ps=zn("rcb"),Rs=new zi(3e4,6e4);class Os{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=ps().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return ji(function(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}(t),e,"argument-error"),this.shouldResolveImmediately(t)&&sn(ps().grecaptcha)?Promise.resolve(ps().grecaptcha):new Promise(((i,n)=>{const r=ps().setTimeout((()=>{n(Di(e,"network-request-failed"))}),Rs.get());ps()[Ps]=()=>{ps().clearTimeout(r),delete ps()[Ps];const s=ps().grecaptcha;if(!s||!sn(s))return void n(Di(e,"internal-error"));const a=s.render;s.render=(e,t)=>{const i=a(e,t);return this.counter++,i},this.hostLanguage=t,i(s)};Wn(`${$n.recaptchaV2Script}?${Pe({onload:Ps,render:"explicit",hl:t})}`).catch((()=>{clearTimeout(r),n(Di(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=ps().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}class Ns{async load(e){return new As(e)}clearedOneInstance(){}}
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
 */const Ls="recaptcha",Ds={theme:"light",type:"image"};class Ms{constructor(e,t,i=Object.assign({},Ds)){this.parameters=i,this.type=Ls,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Hn(e),this.isInvisible="invisible"===this.parameters.size,ji("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment");const n="string"==typeof t?document.getElementById(t):t;ji(n,this.auth,"argument-error"),this.container=n,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Ns:new Os,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),i=t.getResponse(e);return i||new Promise((i=>{const n=e=>{e&&(this.tokenChangeListeners.delete(n),i(e))};this.tokenChangeListeners.add(n),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){ji(!this.parameters.sitekey,this.auth,"argument-error"),ji(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),ji("undefined"!=typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"==typeof e)e(t);else if("string"==typeof e){const i=ps()[e];"function"==typeof i&&i(t)}}}assertNotDestroyed(){ji(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){ji($i()&&!ms(),this.auth,"internal-error"),await function(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
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
 */(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await async function(e){return(await Xi(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}(this.auth);ji(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return ji(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}class xs{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=ur._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Us(e,t,i){var n;const r=await i.verify();try{let s;if(ji("string"==typeof r,e,"argument-error"),ji(i.type===Ls,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){ji("enroll"===t.type,e,"internal-error");const i=
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
 */await function(e,t){return Xi(e,"POST","/v2/accounts/mfaEnrollment:start",Ji(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return i.phoneSessionInfo.sessionInfo}{ji("signin"===t.type,e,"internal-error");const i=(null===(n=s.multiFactorHint)||void 0===n?void 0:n.uid)||s.multiFactorUid;ji(i,e,"missing-multi-factor-info");const a=await function(e,t){return Xi(e,"POST","/v2/accounts/mfaSignIn:start",Ji(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{recaptchaToken:r}});return a.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Xi(e,"POST","/v1/accounts:sendVerificationCode",Ji(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{i._reset()}}
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
class Fs{constructor(e){this.providerId=Fs.PROVIDER_ID,this.auth=Hn(e)}verifyPhoneNumber(e,t){return Us(this.auth,e,Me(t))}static credential(e,t){return ur._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Fs.credentialFromTaggedObject(t)}static credentialFromError(e){return Fs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:i}=e;return t&&i?ur._fromTokenResponse(t,i):null}}
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
function js(e,t){return t?In(t):(ji(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Fs.PROVIDER_ID="phone",Fs.PHONE_SIGN_IN_METHOD="phone";class Bs extends Zn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ar(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ar(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ar(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Hs(e){return Or(e.auth,new Bs(e),e.bypassAuthState)}function Vs(e){const{auth:t,user:i}=e;return ji(i,t,"internal-error"),Rr(i,new Bs(e),e.bypassAuthState)}async function $s(e){const{auth:t,user:i}=e;return ji(i,t,"internal-error"),Tr(i,new Bs(e),e.bypassAuthState)}
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
 */class Ws{constructor(e,t,i,n,r=!1){this.auth=e,this.resolver=i,this.user=n,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:n,tenantId:r,error:s,type:a}=e;if(s)return void this.reject(s);const o={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hs;case"linkViaPopup":case"linkViaRedirect":return $s;case"reauthViaPopup":case"reauthViaRedirect":return Vs;default:Li(this.auth,"internal-error")}}resolve(e){Hi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Hi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const zs=new zi(2e3,1e4);class Gs extends Ws{constructor(e,t,i,n,r){super(e,t,n,r),this.provider=i,this.authWindow=null,this.pollId=null,Gs.currentPopupAction&&Gs.currentPopupAction.cancel(),Gs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ji(e,this.auth,"internal-error"),e}async onExecution(){Hi(1===this.filter.length,"Popup operations only handle one event");const e=hs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Di(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Di(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;(null===(i=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===i?void 0:i.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Di(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,zs.get())};e()}}Gs.currentPopupAction=null;
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
const Ks="pendingRedirect",qs=new Map;class Ys extends Ws{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=qs.get(this.auth._key());if(!e){try{const t=await async function(e,t){const i=Qs(t),n=Zs(e);if(!await n._isAvailable())return!1;const r="true"===await n._get(i);return await n._remove(i),r}(this.resolver,this.auth),i=t?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}qs.set(this.auth._key(),e)}return this.bypassAuthState||qs.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Js(e,t){return Zs(e)._set(Qs(t),"true")}function Xs(e,t){qs.set(e._key(),t)}function Zs(e){return In(e._redirectPersistence)}function Qs(e){return kn(Ks,e.config.apiKey,e.name)}
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
 */function ea(e,t,i){return async function(e,t,i){if(Yt(e.app))return Promise.reject(xi(e));const n=Hn(e);Ui(e,t,hr),await n._initializationPromise;const r=js(n,i);return await Js(r,n),r._openRedirect(n,t,"signInViaRedirect")}(e,t,i)}function ta(e,t,i){return async function(e,t,i){const n=Me(e);if(Ui(n.auth,t,hr),Yt(n.auth.app))return Promise.reject(xi(n.auth));await n.auth._initializationPromise;const r=js(n.auth,i);await Js(r,n.auth);const s=await ra(n);return r._openRedirect(n.auth,t,"reauthViaRedirect",s)}(e,t,i)}function ia(e,t,i){return async function(e,t,i){const n=Me(e);Ui(n.auth,t,hr),await n.auth._initializationPromise;const r=js(n.auth,i);await Pr(!1,n,t.providerId),await Js(r,n.auth);const s=await ra(n);return r._openRedirect(n.auth,t,"linkViaRedirect",s)}(e,t,i)}async function na(e,t,i=!1){if(Yt(e.app))return Promise.reject(xi(e));const n=Hn(e),r=js(n,t),s=new Ys(n,r,i),a=await s.execute();return a&&!i&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,t)),a}async function ra(e){const t=hs(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
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
 */class sa{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oa(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!oa(e)){const n=(null===(i=e.error.code)||void 0===i?void 0:i.split("auth/")[1])||"internal-error";t.onError(Di(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(aa(e))}saveEventToCache(e){this.cachedEventUids.add(aa(e)),this.lastProcessedEventTime=Date.now()}}function aa(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function oa({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}async function ca(e,t={}){return Xi(e,"GET","/v1/projects",t)}
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
 */const ua=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,la=/^https?/;function da(e){const t=Vi(),{protocol:i,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===n?"chrome-extension:"===i&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===i&&r.hostname===n}if(!la.test(i))return!1;if(ua.test(e))return n===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}
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
 */const ha=new zi(3e4,6e4);function fa(){const e=ps().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function pa(e){return new Promise(((t,i)=>{var n,r,s;function a(){fa(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{fa(),i(Di(e,"network-request-failed"))},timeout:ha.get()})}if(null===(r=null===(n=ps().gapi)||void 0===n?void 0:n.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=ps().gapi)||void 0===s?void 0:s.load)){const t=zn("iframefcb");return ps()[t]=()=>{gapi.load?a():i(Di(e,"network-request-failed"))},Wn(`${$n.gapiScript}?onload=${t}`).catch((e=>i(e)))}a()}})).catch((e=>{throw ma=null,e}))}let ma=null;
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
const ga=new zi(5e3,15e3),va="__/auth/iframe",ba="emulator/auth/iframe",ya={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wa=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _a(e){const t=e.config;ji(t.authDomain,e,"auth-domain-config-required");const i=t.emulator?Gi(t,ba):`https://${e.config.authDomain}/${va}`,n={apiKey:t.apiKey,appName:e.name,v:Qt},r=wa.get(e.config.apiHost);r&&(n.eid=r);const s=e._getFrameworks();return s.length&&(n.fw=s.join(",")),`${i}?${Pe(n).slice(1)}`}async function Ia(e){const t=await function(e){return ma=ma||pa(e),ma}(e),i=ps().gapi;return ji(i,e,"internal-error"),t.open({where:document.body,url:_a(e),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ya,dontclear:!0},(t=>new Promise((async(i,n)=>{await t.restyle({setHideOnLeave:!1});const r=Di(e,"network-request-failed"),s=ps().setTimeout((()=>{n(r)}),ga.get());function a(){ps().clearTimeout(s),i(t)}t.ping(a).then(a,(()=>{n(r)}))}))))}
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
 */const Ea={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Sa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function ka(e,t,i,n=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let o="";const c=Object.assign(Object.assign({},Ea),{width:n.toString(),height:r.toString(),top:s,left:a}),u=ge().toLowerCase();i&&(o=Rn(u)?"_blank":i),Tn(u)&&(t=t||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((e,[t,i])=>`${e}${t}=${i},`),"");if(function(e=ge()){var t;return Mn(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==o)return function(e,t){const i=document.createElement("a");i.href=e,i.target=t;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(n)}
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
 */(t||"",o),new Sa(null);const d=window.open(t||"",o,l);ji(d,e,"popup-blocked");try{d.focus()}catch(e){}return new Sa(d)}const Ca="__/auth/handler",Aa="emulator/auth/handler",Ta=encodeURIComponent("fac");async function Pa(e,t,i,n,r,s){ji(e.config.authDomain,e,"auth-domain-config-required"),ji(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:i,redirectUrl:n,v:Qt,eventId:r};if(t instanceof hr){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))a[e]=t}if(t instanceof fr){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const e of Object.keys(o))void 0===o[e]&&delete o[e];const c=await e._getAppCheckToken(),u=c?`#${Ta}=${encodeURIComponent(c)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${Ca}`;return Gi(e,Aa)}
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
 */(e)}?${Pe(o).slice(1)}${u}`}const Ra="webStorageSupport";const Oa=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ls,this._completeRedirectFn=na,this._overrideRedirectResult=Xs}async _openPopup(e,t,i,n){var r;Hi(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return ka(e,await Pa(e,t,i,Vi(),n),hs())}async _openRedirect(e,t,i,n){await this._originValidation(e);return function(e){ps().location.href=e}(await Pa(e,t,i,Vi(),n)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:i}=this.eventManagers[t];return e?Promise.resolve(e):(Hi(i,"If manager is not set, promise should be"),i)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch((()=>{delete this.eventManagers[t]})),i}async initAndGetManager(e){const t=await Ia(e),i=new sa(e);return t.register("authEvent",(t=>{ji(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:i.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ra,{type:Ra},(i=>{var n;const r=null===(n=null==i?void 0:i[0])||void 0===n?void 0:n[Ra];void 0!==r&&t(!!r),Li(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){if(e.config.emulator)return;const{authorizedDomains:t}=await ca(e);for(const e of t)try{if(da(e))return}catch(e){}Li(e,"unauthorized-domain")}(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xn()||Pn()||Mn()}};class Na{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,i);case"signin":return this._finalizeSignIn(e,t.credential);default:return Bi("unexpected MultiFactorSessionType")}}}class La extends Na{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new La(e)}_finalizeEnroll(e,t,i){return function(e,t){return Xi(e,"POST","/v2/accounts/mfaEnrollment:finalize",Ji(e,t))}(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return function(e,t){return Xi(e,"POST","/v2/accounts/mfaSignIn:finalize",Ji(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Da{constructor(){}static assertion(e){return La._fromCredential(e)}}Da.FACTOR_ID="phone";var Ma="@firebase/auth",xa="1.7.3";
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
class Ua{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ji(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
const Fa=pe("authIdTokenMaxAge")||300;let ja=null;var Ba;!function(e){$n=e}({loadJS:e=>new Promise(((t,i)=>{const n=document.createElement("script");var r,s;n.setAttribute("src",e),n.onload=t,n.onerror=e=>{const t=Di("internal-error");t.customData=e,i(t)},n.type="text/javascript",n.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(n)})),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Ba="Browser",Gt(new xe("auth",((e,{options:t})=>{const i=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=i.options;ji(s&&!s.includes(":"),"invalid-api-key",{appName:i.name});const o={apiKey:s,authDomain:a,clientPlatform:Ba,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Un(Ba)},c=new Bn(i,n,r,o);return function(e,t){const i=(null==t?void 0:t.persistence)||[],n=(Array.isArray(i)?i:[i]).map(In);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(c,t),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,i)=>{e.getProvider("auth-internal").initialize()}))),Gt(new xe("auth-internal",(e=>(e=>new Ua(e))(Hn(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),ni(Ma,xa,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(Ba)),ni(Ma,xa,"esm2017");
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
class Ha{constructor(e,t){this._delegate=e,this.firebase=t,Wt(e,new xe("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),ii(this._delegate))))}_getService(e,t=jt){var i;this._delegate.checkDestroyed();const n=this._delegate.container.getProvider(e);return n.isInitialized()||"EXPLICIT"!==(null===(i=n.getComponent())||void 0===i?void 0:i.instantiationMode)||n.initialize(),n.getImmediate({identifier:t})}_removeServiceInstance(e,t=jt){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Wt(this._delegate,e)}_addOrOverwriteComponent(e){zt(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
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
 */const Va=new Se("app-compat","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."});const $a=
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
function e(){const t=
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
function(e){const t={},i={__esModule:!0,initializeApp:function(n,r={}){const s=ei(n,r);if(Ce(t,s.name))return t[s.name];const a=new e(s,i);return t[s.name]=a,a},app:n,registerVersion:ni,setLogLevel:si,onLog:ri,apps:null,SDK_VERSION:Qt,INTERNAL:{registerComponent:function(t){const r=t.name,s=r.replace("-compat","");if(Gt(t)&&"PUBLIC"===t.type){const a=(e=n())=>{if("function"!=typeof e[s])throw Va.create("invalid-app-argument",{appName:r});return e[s]()};void 0!==t.serviceProps&&le(a,t.serviceProps),i[s]=a,e.prototype[s]=function(...e){return this._getService.bind(this,r).apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?i[s]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){if("serverAuth"===t)return null;return t},modularAPIs:bi}};function n(e){if(!Ce(t,e=e||jt))throw Va.create("no-app",{appName:e});return t[e]}return i.default=i,Object.defineProperty(i,"apps",{get:function(){return Object.keys(t).map((e=>t[e]))}}),n.App=e,i}(Ha);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){le(t,e)},createSubscribe:Ne,ErrorFactory:Se,deepExtend:le}),t}(),Wa=new Ge("@firebase/app-compat");
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
if(be()&&void 0!==self.firebase){Wa.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&Wa.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const za=$a;!
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
function(e){ni("@firebase/app-compat","0.2.33",e)}();
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
function Ga(){return window}
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
za.registerVersion("firebase","10.12.0","app-compat");async function Ka(e,t,i){var n;const{BuildInfo:r}=Ga();Hi(t.sessionId,"AuthEvent did not contain a session ID");const s=await async function(e){const t=function(e){if(Hi(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),i=new Uint8Array(t);for(let t=0;t<e.length;t++)i[t]=e.charCodeAt(t);return i}
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
 */(e),i=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(i)).map((e=>e.toString(16).padStart(2,"0"))).join("")}(t.sessionId),a={};return Mn()?a.ibi=r.packageName:Nn()?a.apn=r.packageName:Li(e,"operation-not-supported-in-this-environment"),r.displayName&&(a.appDisplayName=r.displayName),a.sessionId=s,Pa(e,i,t.type,void 0,null!==(n=t.eventId)&&void 0!==n?n:void 0,a)}function qa(e){const{cordova:t}=Ga();return new Promise((i=>{t.plugins.browsertab.isAvailable((n=>{let r=null;n?t.plugins.browsertab.openUrl(e):r=t.InAppBrowser.open(e,function(e=ge()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}()?"_blank":"_system","location=yes"),i(r)}))}))}const Ya=20;class Ja extends sa{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}async function Xa(e){const t=await eo()._get(to(e));return t&&await eo()._remove(to(e)),t}function Za(e,t){var i,n;const r=function(e){const t=io(e),i=t.link?decodeURIComponent(t.link):void 0,n=io(i).link,r=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0;return io(r).link||r||n||i||e}(t);if(r.includes("/__/auth/callback")){const t=io(r),s=t.firebaseError?function(e){try{return JSON.parse(e)}catch(e){return null}}(decodeURIComponent(t.firebaseError)):null,a=null===(n=null===(i=null==s?void 0:s.code)||void 0===i?void 0:i.split("auth/"))||void 0===n?void 0:n[1],o=a?Di(a):null;return o?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:o,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:r,postBody:null}}return null}function Qa(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<Ya;i++){const i=Math.floor(62*Math.random());e.push(t.charAt(i))}return e.join("")}function eo(){return In(cs)}function to(e){return kn("authEvent",e.config.apiKey,e.name)}function io(e){if(!(null==e?void 0:e.includes("?")))return{};const[t,...i]=e.split("?");return Re(i.join("?"))}
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
 */const no=class{constructor(){this._redirectPersistence=ls,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=na,this._overrideRedirectResult=Xs}async _initialize(e){const t=e._key();let i=this.eventManagers.get(t);return i||(i=new Ja(e),this.eventManagers.set(t,i),this.attachCallbackListeners(e,i)),i}_openPopup(e){Li(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,i,n){!function(e){var t,i,n,r,s,a,o,c,u,l;const d=Ga();ji("function"==typeof(null===(t=null==d?void 0:d.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),ji(void 0!==(null===(i=null==d?void 0:d.BuildInfo)||void 0===i?void 0:i.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),ji("function"==typeof(null===(s=null===(r=null===(n=null==d?void 0:d.cordova)||void 0===n?void 0:n.plugins)||void 0===r?void 0:r.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),ji("function"==typeof(null===(c=null===(o=null===(a=null==d?void 0:d.cordova)||void 0===a?void 0:a.plugins)||void 0===o?void 0:o.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),ji("function"==typeof(null===(l=null===(u=null==d?void 0:d.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}(e);const r=await this._initialize(e);await r.initialized(),r.resetRedirect(),qs.clear(),await this._originValidation(e);const s=function(e,t,i=null){return{type:t,eventId:i,urlResponse:null,sessionId:Qa(),postBody:null,tenantId:e.tenantId,error:Di(e,"no-auth-event")}}(e,i,n);await function(e,t){return eo()._set(to(e),t)}(e,s);const a=await Ka(e,s,t);return async function(e,t,i){const{cordova:n}=Ga();let r=()=>{};try{await new Promise(((s,a)=>{let o=null;function c(){var e;s();const t=null===(e=n.plugins.browsertab)||void 0===e?void 0:e.close;"function"==typeof t&&t(),"function"==typeof(null==i?void 0:i.close)&&i.close()}function u(){o||(o=window.setTimeout((()=>{a(Di(e,"redirect-cancelled-by-user"))}),2e3))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),Nn()&&document.addEventListener("visibilitychange",l,!1),r=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),o&&window.clearTimeout(o)}}))}finally{r()}}(e,r,await qa(a))}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){const{BuildInfo:t}=Ga(),i={};Mn()?i.iosBundleId=t.packageName:Nn()?i.androidPackageName=t.packageName:Li(e,"operation-not-supported-in-this-environment"),await ca(e,i)}(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:i,handleOpenURL:n,BuildInfo:r}=Ga(),s=setTimeout((async()=>{await Xa(e),t.onEvent(ro())}),500),a=async i=>{clearTimeout(s);const n=await Xa(e);let r=null;n&&(null==i?void 0:i.url)&&(r=Za(n,i.url)),t.onEvent(r||ro())};void 0!==i&&"function"==typeof i.subscribe&&i.subscribe(null,a);const o=n,c=`${r.packageName.toLowerCase()}://`;Ga().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&a({url:e}),"function"==typeof o)try{o(e)}catch(e){console.error(e)}}}};function ro(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Di("no-auth-event")}}
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
 */function so(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function ao(e=ge()){return!("file:"!==so()&&"ionic:"!==so()&&"capacitor:"!==so()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function oo(e=ge()){return _e()&&11===(null===document||void 0===document?void 0:document.documentMode)||function(e=ge()){return/Edge\/\d+/.test(e)}(e)}function co(){try{const e=self.localStorage,t=hs();if(e)return e.setItem(t,"1"),e.removeItem(t),!oo()||Ie()}catch(e){return uo()&&Ie()}return!1}function uo(){return"undefined"!=typeof global&&"WorkerGlobalScope"in global&&"importScripts"in global}function lo(){return("http:"===so()||"https:"===so()||ye()||ao())&&!(we()||ve())&&co()&&!uo()}function ho(){return ao()&&"undefined"!=typeof document}
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
const fo={LOCAL:"local",NONE:"none",SESSION:"session"},po=ji,mo="persistence";async function go(e){await e._initializationPromise;const t=vo(),i=kn(mo,e.config.apiKey,e.name);t&&t.setItem(i,e._getPersistence())}function vo(){var e;try{return(null===(e="undefined"!=typeof window?window:null)||void 0===e?void 0:e.sessionStorage)||null}catch(e){return null}}
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
 */const bo=ji;class yo{constructor(){this.browserResolver=In(Oa),this.cordovaResolver=In(no),this.underlyingResolver=null,this._redirectPersistence=ls,this._completeRedirectFn=na,this._overrideRedirectResult=Xs}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,i,n){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,i,n)}async _openRedirect(e,t,i,n){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,i,n)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return ho()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return bo(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await async function(){return!!ho()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),1e3);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
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
 */function wo(e){return e.unwrap()}function _o(e,t){var i;const n=null===(i=t.customData)||void 0===i?void 0:i._tokenResponse;if("auth/multi-factor-auth-required"===(null==t?void 0:t.code)){t.resolver=new ko(e,function(e,t){var i;const n=Me(e),r=t;return ji(t.customData.operationType,n,"argument-error"),ji(null===(i=r.customData._serverResponse)||void 0===i?void 0:i.mfaPendingCredential,n,"argument-error"),is._fromError(n,r)}(e,t))}else if(n){const e=Io(t),i=t;e&&(i.credential=e,i.tenantId=n.tenantId||void 0,i.email=n.email||void 0,i.phoneNumber=n.phoneNumber||void 0)}}function Io(e){const{_tokenResponse:t}=e instanceof Ee?e.customData:e;if(!t)return null;if(!(e instanceof Ee)&&"temporaryProof"in t&&"phoneNumber"in t)return Fs.credentialFromResult(e);const i=t.providerId;if(!i||i===wi.PASSWORD)return null;let n;switch(i){case wi.GOOGLE:n=gr;break;case wi.FACEBOOK:n=mr;break;case wi.GITHUB:n=vr;break;case wi.TWITTER:n=wr;break;default:const{oauthIdToken:e,oauthAccessToken:r,oauthTokenSecret:s,pendingToken:a,nonce:o}=t;return r||s||e||a?a?i.startsWith("saml.")?br._create(i,a):or._fromParams({providerId:i,signInMethod:i,pendingToken:a,idToken:e,accessToken:r}):new pr(i).credential({idToken:e,accessToken:r,rawNonce:o}):null}return e instanceof Ee?n.credentialFromError(e):n.credentialFromResult(e)}function Eo(e,t){return t.catch((t=>{throw t instanceof Ee&&_o(e,t),t})).then((e=>{const t=e.operationType,i=e.user;return{operationType:t,credential:(n=e,Io(n)),additionalUserInfo:es(e),user:Co.getOrCreate(i)};
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
var n}))}async function So(e,t){const i=await t;return{verificationId:i.verificationId,confirm:t=>Eo(e,i.confirm(t))}}class ko{constructor(e,t){this.resolver=t,this.auth=e.wrapped()}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Eo(wo(this.auth),this.resolver.resolveSignIn(e))}}
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
 */class Co{constructor(e){this._delegate=e,this.multiFactor=function(e){const t=Me(e);return rs.has(t)||rs.set(t,ns._fromUser(t)),rs.get(t)}(e)}static getOrCreate(e){return Co.USER_MAP.has(e)||Co.USER_MAP.set(e,new Co(e)),Co.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Eo(this.auth,Lr(this._delegate,e))}async linkWithPhoneNumber(e,t){return So(this.auth,async function(e,t,i){const n=Me(e);await Pr(!1,n,"phone");const r=await Us(n.auth,t,Me(i));return new xs(r,(e=>Lr(n,e)))}(this._delegate,e,t))}async linkWithPopup(e){return Eo(this.auth,async function(e,t,i){const n=Me(e);Ui(n.auth,t,hr);const r=js(n.auth,i);return new Gs(n.auth,"linkViaPopup",t,r,n).executeNotNull()}(this._delegate,e,yo))}async linkWithRedirect(e){return await go(Hn(this.auth)),ia(this._delegate,e,yo)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Eo(this.auth,Dr(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return So(this.auth,async function(e,t,i){const n=Me(e);if(Yt(n.auth.app))return Promise.reject(xi(n.auth));const r=await Us(n.auth,t,Me(i));return new xs(r,(e=>Dr(n,e)))}(this._delegate,e,t))}reauthenticateWithPopup(e){return Eo(this.auth,async function(e,t,i){const n=Me(e);if(Yt(n.auth.app))return Promise.reject(Di(n.auth,"operation-not-supported-in-this-environment"));Ui(n.auth,t,hr);const r=js(n.auth,i);return new Gs(n.auth,"reauthViaPopup",t,r,n).executeNotNull()}(this._delegate,e,yo))}async reauthenticateWithRedirect(e){return await go(Hn(this.auth)),ta(this._delegate,e,yo)}sendEmailVerification(e){return Wr(this._delegate,e)}async unlink(e){return await Ar(this._delegate,e),this}updateEmail(e){return function(e,t){const i=Me(e);return Yt(i.auth.app)?Promise.reject(xi(i.auth)):Kr(i,t,null)}(this._delegate,e)}updatePassword(e){return function(e,t){return Kr(Me(e),null,t)}(this._delegate,e)}updatePhoneNumber(e){return async function(e,t){const i=Me(e);if(Yt(i.auth.app))return Promise.reject(xi(i.auth));await Tr(i,t)}(this._delegate,e)}updateProfile(e){return Gr(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return zr(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Co.USER_MAP=new WeakMap;
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
const Ao=ji;class To{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:i}=e.options;Ao(i,"invalid-api-key",{appName:e.name}),Ao(i,"invalid-api-key",{appName:e.name});const n="undefined"!=typeof window?yo:void 0;this._delegate=t.initialize({options:{persistence:Ro(i,e.name),popupRedirectResolver:n}}),this._delegate._updateErrorMap(Ti),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Co.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){Yn(this._delegate,e,t)}applyActionCode(e){return Hr(this._delegate,e)}checkActionCode(e){return Vr(this._delegate,e)}confirmPasswordReset(e,t){return async function(e,t,i){await Qn(Me(e),{oobCode:t,newPassword:i}).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Br(e),t}))}(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Eo(this._delegate,async function(e,t,i){if(Yt(e.app))return Promise.reject(xi(e));const n=Hn(e),r=qn(n,{returnSecureToken:!0,email:t,password:i,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_r),s=await r.catch((t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Br(e),t})),a=await Ir._fromIdTokenResponse(n,"signIn",s);return await n._updateCurrentUser(a.user),a}(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return $r(this._delegate,e)}isSignInWithEmailLink(e){return function(e,t){const i=lr.parseLink(t);return"EMAIL_SIGNIN"===(null==i?void 0:i.operation)}(this._delegate,e)}async getRedirectResult(){Ao(lo(),this._delegate,"operation-not-supported-in-this-environment");const e=await async function(e,t){return await Hn(e)._initializationPromise,na(e,t,!1)}(this._delegate,yo);return e?Eo(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){!function(e,t){Hn(e)._logFramework(t)}(this._delegate,e)}onAuthStateChanged(e,t,i){const{next:n,error:r,complete:s}=Po(e,t,i);return this._delegate.onAuthStateChanged(n,r,s)}onIdTokenChanged(e,t,i){const{next:n,error:r,complete:s}=Po(e,t,i);return this._delegate.onIdTokenChanged(n,r,s)}sendSignInLinkToEmail(e,t){
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
return async function(e,t,i){const n=Hn(e),r={requestType:"EMAIL_SIGNIN",email:t,clientType:"CLIENT_TYPE_WEB"};!function(e,t){ji(t.handleCodeInApp,n,"argument-error"),t&&jr(n,e,t)}(r,i),await qn(n,r,"getOobCode",rr)}(this._delegate,e,t)}sendPasswordResetEmail(e,t){return async function(e,t,i){const n=Hn(e),r={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};i&&jr(n,r,i),await qn(n,r,"getOobCode",nr)}(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(function(e,t){po(Object.values(fo).includes(t),e,"invalid-persistence-type"),we()?po(t!==fo.SESSION,e,"unsupported-persistence-type"):ve()?po(t===fo.NONE,e,"unsupported-persistence-type"):uo()?po(t===fo.NONE||t===fo.LOCAL&&Ie(),e,"unsupported-persistence-type"):po(t===fo.NONE||co(),e,"unsupported-persistence-type")}(this._delegate,e),e){case fo.SESSION:t=ls;break;case fo.LOCAL:t=await In(ks)._isAvailable()?ks:cs;break;case fo.NONE:t=Sn;break;default:return Li("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Eo(this._delegate,async function(e){var t;if(Yt(e.app))return Promise.reject(xi(e));const i=Hn(e);if(await i._initializationPromise,null===(t=i.currentUser)||void 0===t?void 0:t.isAnonymous)return new Ir({user:i.currentUser,providerId:null,operationType:"signIn"});const n=await _r(i,{returnSecureToken:!0}),r=await Ir._fromIdTokenResponse(i,"signIn",n,!0);return await i._updateCurrentUser(r.user),r}(this._delegate))}signInWithCredential(e){return Eo(this._delegate,Nr(this._delegate,e))}signInWithCustomToken(e){return Eo(this._delegate,Mr(this._delegate,e))}signInWithEmailAndPassword(e,t){return Eo(this._delegate,function(e,t,i){return Yt(e.app)?Promise.reject(xi(e)):Nr(Me(e),dr.credential(t,i)).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&Br(e),t}))}(this._delegate,e,t))}signInWithEmailLink(e,t){return Eo(this._delegate,async function(e,t,i){if(Yt(e.app))return Promise.reject(xi(e));const n=Me(e),r=dr.credentialWithLink(t,i||Vi());return ji(r._tenantId===(n.tenantId||null),n,"tenant-id-mismatch"),Nr(n,r)}(this._delegate,e,t))}signInWithPhoneNumber(e,t){return So(this._delegate,async function(e,t,i){if(Yt(e.app))return Promise.reject(xi(e));const n=Hn(e),r=await Us(n,t,Me(i));return new xs(r,(e=>Nr(n,e)))}(this._delegate,e,t))}async signInWithPopup(e){return Ao(lo(),this._delegate,"operation-not-supported-in-this-environment"),Eo(this._delegate,async function(e,t,i){if(Yt(e.app))return Promise.reject(Di(e,"operation-not-supported-in-this-environment"));const n=Hn(e);Ui(e,t,hr);const r=js(n,i);return new Gs(n,"signInViaPopup",t,r).executeNotNull()}(this._delegate,e,yo))}async signInWithRedirect(e){return Ao(lo(),this._delegate,"operation-not-supported-in-this-environment"),await go(this._delegate),ea(this._delegate,e,yo)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return async function(e,t){const{data:i}=await Vr(Me(e),t);return i.email}(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function Po(e,t,i){let n=e;"function"!=typeof e&&({next:n,error:t,complete:i}=e);const r=n;return{next:e=>r(e&&Co.getOrCreate(e)),error:t,complete:i}}function Ro(e,t){const i=function(e,t){const i=vo();if(!i)return[];const n=kn(mo,e,t);switch(i.getItem(n)){case fo.NONE:return[Sn];case fo.LOCAL:return[ks,ls];case fo.SESSION:return[ls];default:return[]}}(e,t);if("undefined"==typeof self||i.includes(ks)||i.push(ks),"undefined"!=typeof window)for(const e of[cs,ls])i.includes(e)||i.push(e);return i.includes(Sn)||i.push(Sn),i}
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
 */To.Persistence=fo;class Oo{constructor(){this.providerId="phone",this._delegate=new Fs(wo(za.auth()))}static credential(e,t){return Fs.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Oo.PHONE_SIGN_IN_METHOD=Fs.PHONE_SIGN_IN_METHOD,Oo.PROVIDER_ID=Fs.PROVIDER_ID;
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
const No=ji;class Lo{constructor(e,t,i=za.app()){var n;No(null===(n=i.options)||void 0===n?void 0:n.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new Ms(i.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
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
 */var Do;function Mo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}(Do=za).INTERNAL.registerComponent(new xe("auth-compat",(e=>{const t=e.getProvider("app-compat").getImmediate(),i=e.getProvider("auth");return new To(t,i)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:_i,PASSWORD_RESET:Ii,RECOVER_EMAIL:Ei,REVERT_SECOND_FACTOR_ADDITION:Si,VERIFY_AND_CHANGE_EMAIL:ki,VERIFY_EMAIL:Ci}},EmailAuthProvider:dr,FacebookAuthProvider:mr,GithubAuthProvider:vr,GoogleAuthProvider:gr,OAuthProvider:pr,SAMLAuthProvider:yr,PhoneAuthProvider:Oo,PhoneMultiFactorGenerator:Da,RecaptchaVerifier:Lo,TwitterAuthProvider:wr,Auth:To,AuthCredential:Zn,Error:Ee}).setInstantiationMode("LAZY").setMultipleInstances(!1)),Do.registerVersion("@firebase/auth-compat","0.5.8");var xo,Uo={exports:{}};xo=Uo,function(){var e=window.CustomEvent;function t(e){for(;e;){if("dialog"===e.localName)return e;e=e.parentElement}return null}function i(e){e&&e.blur&&e!==document.body&&e.blur()}function n(e,t){for(var i=0;i<e.length;++i)if(e[i]===t)return!0;return!1}function r(e){return!(!e||!e.hasAttribute("method"))&&"dialog"===e.getAttribute("method").toLowerCase()}function s(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window)new MutationObserver(this.maybeHideModal.bind(this)).observe(e,{attributes:!0,attributeFilter:["open"]});else{var t,i=!1,n=function(){i?this.downgradeModal():this.maybeHideModal(),i=!1}.bind(this),r=function(r){if(r.target===e){var s="DOMNodeRemoved";i|=r.type.substr(0,14)===s,window.clearTimeout(t),t=window.setTimeout(n,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach((function(t){e.addEventListener(t,r)}))}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("click",this.backdropClick_.bind(this))}e&&"object"!=typeof e||(e=function(e,t){t=t||{};var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail||null),i},e.prototype=window.Event.prototype),s.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&document.body.contains(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),a.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropClick_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var i=document.createEvent("MouseEvents");i.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(i),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");if(!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),!e){var t=["button","input","keygen","select","textarea"].map((function(e){return e+":not([disabled])"}));t.push('[tabindex]:not([disabled]):not([tabindex=""])'),e=this.dialog_.querySelector(t.join(", "))}i(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!document.body.contains(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!a.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");(function(e){for(;e&&e!==document.body;){var t=window.getComputedStyle(e),i=function(e,i){return!(void 0===t[e]||t[e]===i)};if(t.opacity<1||i("zIndex","auto")||i("transform","none")||i("mixBlendMode","normal")||i("filter","none")||i("perspective","none")||"isolate"===t.isolation||"fixed"===t.position||"touch"===t.webkitOverflowScrolling)return!0;e=e.parentElement}return!1})(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,a.needsCentering(this.dialog_)?(a.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(t){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),void 0!==t&&(this.dialog_.returnValue=t);var i=new e("close",{bubbles:!1,cancelable:!1});this.dialog_.dispatchEvent(i)}};var a={reposition:function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,i=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,i)+"px"},isInlinePositionSetByStylesheet:function(e){for(var t=0;t<document.styleSheets.length;++t){var i=document.styleSheets[t],r=null;try{r=i.cssRules}catch(e){}if(r)for(var s=0;s<r.length;++s){var a=r[s],o=null;try{o=document.querySelectorAll(a.selectorText)}catch(e){}if(o&&n(o,e)){var c=a.style.getPropertyValue("top"),u=a.style.getPropertyValue("bottom");if(c&&"auto"!==c||u&&"auto"!==u)return!0}}}return!1},needsCentering:function(e){return!("absolute"!==window.getComputedStyle(e).position||"auto"!==e.style.top&&""!==e.style.top||"auto"!==e.style.bottom&&""!==e.style.bottom||a.isInlinePositionSetByStylesheet(e))},forceRegisterDialog:function(e){if((window.HTMLDialogElement||e.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),"dialog"!==e.localName)throw new Error("Failed to register dialog: The element is not a dialog.");new s(e)},registerDialog:function(e){e.showModal||a.forceRegisterDialog(e)},DialogManager:function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver((function(t){var i=[];t.forEach((function(e){for(var t,n=0;t=e.removedNodes[n];++n)t instanceof Element&&("dialog"===t.localName&&i.push(t),i=i.concat(t.querySelectorAll("dialog")))})),i.length&&e(i)})))}};if(a.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},a.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},a.DialogManager.prototype.updateStacking=function(){for(var e,t=this.zIndexHigh_,i=0;e=this.pendingDialogStack[i];++i)e.updateZIndex(--t,--t),0===i&&(this.overlay.style.zIndex=--t);var n=this.pendingDialogStack[0];n?(n.dialog.parentNode||document.body).appendChild(this.overlay):this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},a.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=t(e);){for(var i,n=0;i=this.pendingDialogStack[n];++n)if(i.dialog===e)return 0===n;e=e.parentElement}return!1},a.DialogManager.prototype.handleFocus_=function(e){if(!this.containedByTopDialog_(e.target)&&(e.preventDefault(),e.stopPropagation(),i(e.target),void 0!==this.forwardTab_)){var t=this.pendingDialogStack[0];return t.dialog.compareDocumentPosition(e.target)&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?t.focus_():document.documentElement.focus()),!1}},a.DialogManager.prototype.handleKey_=function(t){if(this.forwardTab_=void 0,27===t.keyCode){t.preventDefault(),t.stopPropagation();var i=new e("cancel",{bubbles:!1,cancelable:!0}),n=this.pendingDialogStack[0];n&&n.dialog.dispatchEvent(i)&&n.dialog.close()}else 9===t.keyCode&&(this.forwardTab_=!t.shiftKey)},a.DialogManager.prototype.checkDOM_=function(e){this.pendingDialogStack.slice().forEach((function(t){-1!==e.indexOf(t.dialog)?t.downgradeModal():t.maybeHideModal()}))},a.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return!(this.pendingDialogStack.length>=t||(1===this.pendingDialogStack.unshift(e)&&this.blockDocument(),this.updateStacking(),0))},a.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);-1!==t&&(this.pendingDialogStack.splice(t,1),0===this.pendingDialogStack.length&&this.unblockDocument(),this.updateStacking())},a.dm=new a.DialogManager,a.formSubmitter=null,a.useValue=null,void 0===window.HTMLDialogElement){var o=document.createElement("form");if(o.setAttribute("method","dialog"),"dialog"!==o.method){var c=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(c){var u=c.get;c.get=function(){return r(this)?"dialog":u.call(this)};var l=c.set;c.set=function(e){return"string"==typeof e&&"dialog"===e.toLowerCase()?this.setAttribute("method",e):l.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",c)}}document.addEventListener("click",(function(e){if(a.formSubmitter=null,a.useValue=null,!e.defaultPrevented){var i=e.target;if(i&&r(i.form)){if(!("submit"===i.type&&["button","input"].indexOf(i.localName)>-1)){if("input"!==i.localName||"image"!==i.type)return;a.useValue=e.offsetX+","+e.offsetY}t(i)&&(a.formSubmitter=i)}}}),!1);var d=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){if(!r(this))return d.call(this);var e=t(this);e&&e.close()},document.addEventListener("submit",(function(e){var i=e.target;if(r(i)){e.preventDefault();var n=t(i);if(n){var s=a.formSubmitter;s&&s.form===i?n.close(a.useValue||s.value):n.close(),a.formSubmitter=null}}}),!0)}a.forceRegisterDialog=a.forceRegisterDialog,a.registerDialog=a.registerDialog,"object"==typeof xo.exports?xo.exports=a:window.dialogPolyfill=a}();var Fo,jo,Bo,Ho,Vo=Mo(Uo.exports),$o={upgradeDom:function(e,t){},upgradeElement:function(e,t){},upgradeElements:function(e){},upgradeAllRegistered:function(){},registerUpgradedCallback:function(e,t){},register:function(e){},downgradeElements:function(e){}};$o=function(){var e=[],t=[],i="mdlComponentConfigInternal_";function n(t,i){for(var n=0;n<e.length;n++)if(e[n].className===t)return void 0!==i&&(e[n]=i),e[n];return!1}function r(e){var t=e.getAttribute("data-upgraded");return null===t?[""]:t.split(",")}function s(e,t){return-1!==r(e).indexOf(t)}function a(e,t,i){if("CustomEvent"in window&&"function"==typeof window.CustomEvent)return new CustomEvent(e,{bubbles:t,cancelable:i});var n=document.createEvent("Events");return n.initEvent(e,t,i),n}function o(t,i){if(void 0===t&&void 0===i)for(var r=0;r<e.length;r++)o(e[r].className,e[r].cssClass);else{var s=t;if(void 0===i){var a=n(s);a&&(i=a.cssClass)}for(var u=document.querySelectorAll("."+i),l=0;l<u.length;l++)c(u[l],s)}}function c(o,c){if(!("object"==typeof o&&o instanceof Element))throw new Error("Invalid argument provided to upgrade MDL element.");var u=a("mdl-componentupgrading",!0,!0);if(o.dispatchEvent(u),!u.defaultPrevented){var l=r(o),d=[];if(c)s(o,c)||d.push(n(c));else{var h=o.classList;e.forEach((function(e){h.contains(e.cssClass)&&-1===d.indexOf(e)&&!s(o,e.className)&&d.push(e)}))}for(var f,p=0,m=d.length;p<m;p++){if(!(f=d[p]))throw new Error("Unable to find a registered component for the given class.");l.push(f.className),o.setAttribute("data-upgraded",l.join(","));var g=new f.classConstructor(o);g[i]=f,t.push(g);for(var v=0,b=f.callbacks.length;v<b;v++)f.callbacks[v](o);f.widget&&(o[f.className]=g);var y=a("mdl-componentupgraded",!0,!1);o.dispatchEvent(y)}}}function u(e){if(e){var n=t.indexOf(e);t.splice(n,1);var r=e.element_.getAttribute("data-upgraded").split(","),s=r.indexOf(e[i].classAsString);r.splice(s,1),e.element_.setAttribute("data-upgraded",r.join(","));var o=a("mdl-componentdowngraded",!0,!1);e.element_.dispatchEvent(o)}}return{upgradeDom:o,upgradeElement:c,upgradeElements:function e(t){Array.isArray(t)||(t=t instanceof Element?[t]:Array.prototype.slice.call(t));for(var i,n=0,r=t.length;n<r;n++)(i=t[n])instanceof HTMLElement&&(c(i),i.children.length>0&&e(i.children))},upgradeAllRegistered:function(){for(var t=0;t<e.length;t++)o(e[t].className)},registerUpgradedCallback:function(e,t){var i=n(e);i&&i.callbacks.push(t)},register:function(t){var r=!0;void 0===t.widget&&void 0===t.widget||(r=t.widget||t.widget);var s={classConstructor:t.constructor||t.constructor,className:t.classAsString||t.classAsString,cssClass:t.cssClass||t.cssClass,widget:r,callbacks:[]};if(e.forEach((function(e){if(e.cssClass===s.cssClass)throw new Error("The provided cssClass has already been registered: "+e.cssClass);if(e.className===s.className)throw new Error("The provided className has already been registered")})),t.constructor.prototype.hasOwnProperty(i))throw new Error("MDL component classes must not have "+i+" defined as a property.");n(t.classAsString,s)||e.push(s)},downgradeElements:function(e){var i=function(e){t.filter((function(t){return t.element_===e})).forEach(u)};if(e instanceof Array||e instanceof NodeList)for(var n=0;n<e.length;n++)i(e[n]);else{if(!(e instanceof Node))throw new Error("Invalid argument provided to downgrade MDL nodes.");i(e)}}}}(),$o.ComponentConfigPublic,$o.ComponentConfig,$o.Component,$o.upgradeDom=$o.upgradeDom,$o.upgradeElement=$o.upgradeElement,$o.upgradeElements=$o.upgradeElements,$o.upgradeAllRegistered=$o.upgradeAllRegistered,$o.registerUpgradedCallback=$o.registerUpgradedCallback,$o.register=$o.register,$o.downgradeElements=$o.downgradeElements,window.componentHandler=$o,window.componentHandler=$o,window.addEventListener("load",(function(){"classList"in document.createElement("div")&&"querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach?(document.documentElement.classList.add("mdl-js"),$o.upgradeAllRegistered()):($o.upgradeElement=function(){},$o.register=function(){})})),
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Fo=function(e){this.element_=e,this.init()},window.MaterialButton=Fo,Fo.prototype.Constant_={},Fo.prototype.CssClasses_={RIPPLE_EFFECT:"mdl-js-ripple-effect",RIPPLE_CONTAINER:"mdl-button__ripple-container",RIPPLE:"mdl-ripple"},Fo.prototype.blurHandler_=function(e){e&&this.element_.blur()},Fo.prototype.disable=function(){this.element_.disabled=!0},Fo.prototype.disable=Fo.prototype.disable,Fo.prototype.enable=function(){this.element_.disabled=!1},Fo.prototype.enable=Fo.prototype.enable,Fo.prototype.init=function(){if(this.element_){if(this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)){var e=document.createElement("span");e.classList.add(this.CssClasses_.RIPPLE_CONTAINER),this.rippleElement_=document.createElement("span"),this.rippleElement_.classList.add(this.CssClasses_.RIPPLE),e.appendChild(this.rippleElement_),this.boundRippleBlurHandler=this.blurHandler_.bind(this),this.rippleElement_.addEventListener("mouseup",this.boundRippleBlurHandler),this.element_.appendChild(e)}this.boundButtonBlurHandler=this.blurHandler_.bind(this),this.element_.addEventListener("mouseup",this.boundButtonBlurHandler),this.element_.addEventListener("mouseleave",this.boundButtonBlurHandler)}},componentHandler.register({constructor:Fo,classAsString:"MaterialButton",cssClass:"mdl-js-button",widget:!0}),
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
jo=function(e){this.element_=e,this.init()},window.MaterialProgress=jo,jo.prototype.Constant_={},jo.prototype.CssClasses_={INDETERMINATE_CLASS:"mdl-progress__indeterminate"},jo.prototype.setProgress=function(e){this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)||(this.progressbar_.style.width=e+"%")},jo.prototype.setProgress=jo.prototype.setProgress,jo.prototype.setBuffer=function(e){this.bufferbar_.style.width=e+"%",this.auxbar_.style.width=100-e+"%"},jo.prototype.setBuffer=jo.prototype.setBuffer,jo.prototype.init=function(){if(this.element_){var e=document.createElement("div");e.className="progressbar bar bar1",this.element_.appendChild(e),this.progressbar_=e,(e=document.createElement("div")).className="bufferbar bar bar2",this.element_.appendChild(e),this.bufferbar_=e,(e=document.createElement("div")).className="auxbar bar bar3",this.element_.appendChild(e),this.auxbar_=e,this.progressbar_.style.width="0%",this.bufferbar_.style.width="100%",this.auxbar_.style.width="0%",this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:jo,classAsString:"MaterialProgress",cssClass:"mdl-js-progress",widget:!0}),
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Bo=function(e){this.element_=e,this.init()},window.MaterialSpinner=Bo,Bo.prototype.Constant_={MDL_SPINNER_LAYER_COUNT:4},Bo.prototype.CssClasses_={MDL_SPINNER_LAYER:"mdl-spinner__layer",MDL_SPINNER_CIRCLE_CLIPPER:"mdl-spinner__circle-clipper",MDL_SPINNER_CIRCLE:"mdl-spinner__circle",MDL_SPINNER_GAP_PATCH:"mdl-spinner__gap-patch",MDL_SPINNER_LEFT:"mdl-spinner__left",MDL_SPINNER_RIGHT:"mdl-spinner__right"},Bo.prototype.createLayer=function(e){var t=document.createElement("div");t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER),t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER+"-"+e);var i=document.createElement("div");i.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),i.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);var n=document.createElement("div");n.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);var r=document.createElement("div");r.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER),r.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);for(var s=[i,n,r],a=0;a<s.length;a++){var o=document.createElement("div");o.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE),s[a].appendChild(o)}t.appendChild(i),t.appendChild(n),t.appendChild(r),this.element_.appendChild(t)},Bo.prototype.createLayer=Bo.prototype.createLayer,Bo.prototype.stop=function(){this.element_.classList.remove("is-active")},Bo.prototype.stop=Bo.prototype.stop,Bo.prototype.start=function(){this.element_.classList.add("is-active")},Bo.prototype.start=Bo.prototype.start,Bo.prototype.init=function(){if(this.element_){for(var e=1;e<=this.Constant_.MDL_SPINNER_LAYER_COUNT;e++)this.createLayer(e);this.element_.classList.add("is-upgraded")}},componentHandler.register({constructor:Bo,classAsString:"MaterialSpinner",cssClass:"mdl-js-spinner",widget:!0}),
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ho=function(e){this.element_=e,this.maxRows=this.Constant_.NO_MAX_ROWS,this.init()},window.MaterialTextfield=Ho,Ho.prototype.Constant_={NO_MAX_ROWS:-1,MAX_ROWS_ATTRIBUTE:"maxrows"},Ho.prototype.CssClasses_={LABEL:"mdl-textfield__label",INPUT:"mdl-textfield__input",IS_DIRTY:"is-dirty",IS_FOCUSED:"is-focused",IS_DISABLED:"is-disabled",IS_INVALID:"is-invalid",IS_UPGRADED:"is-upgraded",HAS_PLACEHOLDER:"has-placeholder"},Ho.prototype.onKeyDown_=function(e){var t=e.target.value.split("\n").length;13===e.keyCode&&t>=this.maxRows&&e.preventDefault()},Ho.prototype.onFocus_=function(e){this.element_.classList.add(this.CssClasses_.IS_FOCUSED)},Ho.prototype.onBlur_=function(e){this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},Ho.prototype.onReset_=function(e){this.updateClasses_()},Ho.prototype.updateClasses_=function(){this.checkDisabled(),this.checkValidity(),this.checkDirty(),this.checkFocus()},Ho.prototype.checkDisabled=function(){this.input_.disabled?this.element_.classList.add(this.CssClasses_.IS_DISABLED):this.element_.classList.remove(this.CssClasses_.IS_DISABLED)},Ho.prototype.checkDisabled=Ho.prototype.checkDisabled,Ho.prototype.checkFocus=function(){Boolean(this.element_.querySelector(":focus"))?this.element_.classList.add(this.CssClasses_.IS_FOCUSED):this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)},Ho.prototype.checkFocus=Ho.prototype.checkFocus,Ho.prototype.checkValidity=function(){this.input_.validity&&(this.input_.validity.valid?this.element_.classList.remove(this.CssClasses_.IS_INVALID):this.element_.classList.add(this.CssClasses_.IS_INVALID))},Ho.prototype.checkValidity=Ho.prototype.checkValidity,Ho.prototype.checkDirty=function(){this.input_.value&&this.input_.value.length>0?this.element_.classList.add(this.CssClasses_.IS_DIRTY):this.element_.classList.remove(this.CssClasses_.IS_DIRTY)},Ho.prototype.checkDirty=Ho.prototype.checkDirty,Ho.prototype.disable=function(){this.input_.disabled=!0,this.updateClasses_()},Ho.prototype.disable=Ho.prototype.disable,Ho.prototype.enable=function(){this.input_.disabled=!1,this.updateClasses_()},Ho.prototype.enable=Ho.prototype.enable,Ho.prototype.change=function(e){this.input_.value=e||"",this.updateClasses_()},Ho.prototype.change=Ho.prototype.change,Ho.prototype.init=function(){if(this.element_&&(this.label_=this.element_.querySelector("."+this.CssClasses_.LABEL),this.input_=this.element_.querySelector("."+this.CssClasses_.INPUT),this.input_)){this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)&&(this.maxRows=parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE),10),isNaN(this.maxRows)&&(this.maxRows=this.Constant_.NO_MAX_ROWS)),this.input_.hasAttribute("placeholder")&&this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER),this.boundUpdateClassesHandler=this.updateClasses_.bind(this),this.boundFocusHandler=this.onFocus_.bind(this),this.boundBlurHandler=this.onBlur_.bind(this),this.boundResetHandler=this.onReset_.bind(this),this.input_.addEventListener("input",this.boundUpdateClassesHandler),this.input_.addEventListener("focus",this.boundFocusHandler),this.input_.addEventListener("blur",this.boundBlurHandler),this.input_.addEventListener("reset",this.boundResetHandler),this.maxRows!==this.Constant_.NO_MAX_ROWS&&(this.boundKeyDownHandler=this.onKeyDown_.bind(this),this.input_.addEventListener("keydown",this.boundKeyDownHandler));var e=this.element_.classList.contains(this.CssClasses_.IS_INVALID);this.updateClasses_(),this.element_.classList.add(this.CssClasses_.IS_UPGRADED),e&&this.element_.classList.add(this.CssClasses_.IS_INVALID),this.input_.hasAttribute("autofocus")&&(this.element_.focus(),this.checkFocus())}},componentHandler.register({constructor:Ho,classAsString:"MaterialTextfield",cssClass:"mdl-js-textfield",widget:!0}),function(){(function(){var e,t,i="function"==typeof Object.create?Object.create:function(e){function t(){}return t.prototype=e,new t};if("function"==typeof Object.setPrototypeOf)t=Object.setPrototypeOf;else{var n;e:{var r={};try{r.__proto__={xb:!0},n=r.xb;break e}catch(e){}n=!1}t=n?function(e,t){if(e.__proto__=t,e.__proto__!==t)throw new TypeError(e+" is not extensible");return e}:null}var s=t;function a(e,t){if(e.prototype=i(t.prototype),e.prototype.constructor=e,s)s(e,t);else for(var n in t)if("prototype"!=n)if(Object.defineProperties){var r=Object.getOwnPropertyDescriptor(t,n);r&&Object.defineProperty(e,n,r)}else e[n]=t[n];e.K=t.prototype}var o="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,i){e!=Array.prototype&&e!=Object.prototype&&(e[t]=i.value)},c="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function u(e,t){if(t){var i=c;e=e.split(".");for(var n=0;n<e.length-1;n++){var r=e[n];r in i||(i[r]={}),i=i[r]}(t=t(n=i[e=e[e.length-1]]))!=n&&null!=t&&o(i,e,{configurable:!0,writable:!0,value:t})}}u("Object.is",(function(e){return e||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}})),u("Array.prototype.includes",(function(e){return e||function(e,t){var i=this;i instanceof String&&(i=String(i));var n=i.length;for(0>(t=t||0)&&(t=Math.max(t+n,0));t<n;t++){var r=i[t];if(r===e||Object.is(r,e))return!0}return!1}}));var l=this;function d(e){return void 0!==e}function h(e){return"string"==typeof e}var f=/^[\w+/_-]+[=]{0,2}$/,p=null;function m(){}function g(e){e.W=void 0,e.Xa=function(){return e.W?e.W:e.W=new e}}function v(e){var t=typeof e;if("object"==t){if(!e)return"null";if(e instanceof Array)return"array";if(e instanceof Object)return t;var i=Object.prototype.toString.call(e);if("[object Window]"==i)return"object";if("[object Array]"==i||"number"==typeof e.length&&void 0!==e.splice&&void 0!==e.propertyIsEnumerable&&!e.propertyIsEnumerable("splice"))return"array";if("[object Function]"==i||void 0!==e.call&&void 0!==e.propertyIsEnumerable&&!e.propertyIsEnumerable("call"))return"function"}else if("function"==t&&void 0===e.call)return"object";return t}function b(e){return"array"==v(e)}function y(e){var t=v(e);return"array"==t||"object"==t&&"number"==typeof e.length}function w(e){return"function"==v(e)}function _(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var I="closure_uid_"+(1e9*Math.random()>>>0),E=0;function S(e,t,i){return e.call.apply(e.bind,arguments)}function k(e,t,i){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,n),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function C(e,t,i){return(C=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?S:k).apply(null,arguments)}function A(e,t){var i=Array.prototype.slice.call(arguments,1);return function(){var t=i.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function T(e,t){for(var i in t)e[i]=t[i]}var P,R=Date.now||function(){return+new Date};function O(e,t){e=e.split(".");var i,n=l;e[0]in n||void 0===n.execScript||n.execScript("var "+e[0]);for(;e.length&&(i=e.shift());)!e.length&&d(t)?n[i]=t:n=n[i]&&n[i]!==Object.prototype[i]?n[i]:n[i]={}}function N(e,t){function i(){}i.prototype=t.prototype,e.K=t.prototype,e.prototype=new i,e.prototype.constructor=e,e.vc=function(e,i,n){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[i].apply(e,r)}}function L(e){if(Error.captureStackTrace)Error.captureStackTrace(this,L);else{var t=Error().stack;t&&(this.stack=t)}e&&(this.message=String(e))}function D(e,t){for(var i="",n=(e=e.split("%s")).length-1,r=0;r<n;r++)i+=e[r]+(r<t.length?t[r]:"%s");L.call(this,i+e[n])}function M(e,t){throw new D("Failure"+(e?": "+e:""),Array.prototype.slice.call(arguments,1))}N(L,Error),L.prototype.name="CustomError",N(D,L),D.prototype.name="AssertionError";var x=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(h(e))return h(t)&&1==t.length?e.indexOf(t,0):-1;for(var i=0;i<e.length;i++)if(i in e&&e[i]===t)return i;return-1},U=Array.prototype.forEach?function(e,t,i){Array.prototype.forEach.call(e,t,i)}:function(e,t,i){for(var n=e.length,r=h(e)?e.split(""):e,s=0;s<n;s++)s in r&&t.call(i,r[s],s,e)};var F=Array.prototype.filter?function(e,t){return Array.prototype.filter.call(e,t,void 0)}:function(e,t){for(var i=e.length,n=[],r=0,s=h(e)?e.split(""):e,a=0;a<i;a++)if(a in s){var o=s[a];t.call(void 0,o,a,e)&&(n[r++]=o)}return n},j=Array.prototype.map?function(e,t){return Array.prototype.map.call(e,t,void 0)}:function(e,t){for(var i=e.length,n=Array(i),r=h(e)?e.split(""):e,s=0;s<i;s++)s in r&&(n[s]=t.call(void 0,r[s],s,e));return n},B=Array.prototype.some?function(e,t){return Array.prototype.some.call(e,t,void 0)}:function(e,t){for(var i=e.length,n=h(e)?e.split(""):e,r=0;r<i;r++)if(r in n&&t.call(void 0,n[r],r,e))return!0;return!1};function H(e,t){return 0<=x(e,t)}function V(e,t){var i;return(i=0<=(t=x(e,t)))&&$(e,t),i}function $(e,t){return 1==Array.prototype.splice.call(e,t,1).length}function W(e,t){!function(e,t){for(var i=h(e)?e.split(""):e,n=e.length-1;0<=n;--n)n in i&&t.call(void 0,i[n],n,e)}(e,(function(i,n){t.call(void 0,i,n,e)&&$(e,n)&&0}))}function z(e){return Array.prototype.concat.apply([],arguments)}function G(e){var t=e.length;if(0<t){for(var i=Array(t),n=0;n<t;n++)i[n]=e[n];return i}return[]}function K(e,t,i){return 2>=arguments.length?Array.prototype.slice.call(e,t):Array.prototype.slice.call(e,t,i)}var q=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]},Y=/&/g,J=/</g,X=/>/g,Z=/"/g,Q=/'/g,ee=/\x00/g,te=/[\x00&<>"']/;function ie(e,t){return e<t?-1:e>t?1:0}function ne(e){return te.test(e)&&(-1!=e.indexOf("&")&&(e=e.replace(Y,"&amp;")),-1!=e.indexOf("<")&&(e=e.replace(J,"&lt;")),-1!=e.indexOf(">")&&(e=e.replace(X,"&gt;")),-1!=e.indexOf('"')&&(e=e.replace(Z,"&quot;")),-1!=e.indexOf("'")&&(e=e.replace(Q,"&#39;")),-1!=e.indexOf("\0")&&(e=e.replace(ee,"&#0;"))),e}function re(e,t,i){for(var n in e)t.call(i,e[n],n,e)}function se(e){var t,i={};for(t in e)i[t]=e[t];return i}var ae="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function oe(e,t){for(var i,n,r=1;r<arguments.length;r++){for(i in n=arguments[r])e[i]=n[i];for(var s=0;s<ae.length;s++)i=ae[s],Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}}var ce="StopIteration"in l?l.StopIteration:{message:"StopIteration",stack:""};function ue(){}function le(e){if(e instanceof ue)return e;if("function"==typeof e.ha)return e.ha(!1);if(y(e)){var t=0,i=new ue;return i.next=function(){for(;;){if(t>=e.length)throw ce;if(t in e)return e[t++];t++}},i}throw Error("Not implemented")}function de(e){if(y(e))return G(e);e=le(e);var t=[];return function(e,t){if(y(e))try{U(e,t,void 0)}catch(e){if(e!==ce)throw e}else{e=le(e);try{for(;;)t.call(void 0,e.next(),void 0,e)}catch(e){if(e!==ce)throw e}}}(e,(function(e){t.push(e)})),t}function he(e,t){this.g={},this.a=[],this.j=this.h=0;var i=arguments.length;if(1<i){if(i%2)throw Error("Uneven number of arguments");for(var n=0;n<i;n+=2)this.set(arguments[n],arguments[n+1])}else if(e)if(e instanceof he)for(i=e.ja(),n=0;n<i.length;n++)this.set(i[n],e.get(i[n]));else for(n in e)this.set(n,e[n])}function fe(e){if(e.h!=e.a.length){for(var t=0,i=0;t<e.a.length;){var n=e.a[t];pe(e.g,n)&&(e.a[i++]=n),t++}e.a.length=i}if(e.h!=e.a.length){var r={};for(i=t=0;t<e.a.length;)pe(r,n=e.a[t])||(e.a[i++]=n,r[n]=1),t++;e.a.length=i}}function pe(e,t){return Object.prototype.hasOwnProperty.call(e,t)}ue.prototype.next=function(){throw ce},ue.prototype.ha=function(){return this},(e=he.prototype).la=function(){fe(this);for(var e=[],t=0;t<this.a.length;t++)e.push(this.g[this.a[t]]);return e},e.ja=function(){return fe(this),this.a.concat()},e.clear=function(){this.g={},this.j=this.h=this.a.length=0},e.get=function(e,t){return pe(this.g,e)?this.g[e]:t},e.set=function(e,t){pe(this.g,e)||(this.h++,this.a.push(e),this.j++),this.g[e]=t},e.forEach=function(e,t){for(var i=this.ja(),n=0;n<i.length;n++){var r=i[n],s=this.get(r);e.call(t,s,r,this)}},e.ha=function(e){fe(this);var t=0,i=this.j,n=this,r=new ue;return r.next=function(){if(i!=n.j)throw Error("The map has changed since the iterator was created");if(t>=n.a.length)throw ce;var r=n.a[t++];return e?r:n.g[r]},r};var me=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ge(e,t,i,n){for(var r=i.length;0<=(t=e.indexOf(i,t))&&t<n;){var s=e.charCodeAt(t-1);if((38==s||63==s)&&(!(s=e.charCodeAt(t+r))||61==s||38==s||35==s))return t;t+=r+1}return-1}var ve=/#|$/;function be(e,t){var i=e.search(ve),n=ge(e,0,t,i);if(0>n)return null;var r=e.indexOf("&",n);return(0>r||r>i)&&(r=i),n+=t.length+1,decodeURIComponent(e.substr(n,r-n).replace(/\+/g," "))}var ye=/[?&]($|#)/;function we(e,t){var i;this.h=this.A=this.j="",this.C=null,this.s=this.g="",this.i=!1,e instanceof we?(this.i=d(t)?t:e.i,_e(this,e.j),this.A=e.A,this.h=e.h,Ie(this,e.C),this.g=e.g,Ee(this,Ue(e.a)),this.s=e.s):e&&(i=String(e).match(me))?(this.i=!!t,_e(this,i[1]||"",!0),this.A=ke(i[2]||""),this.h=ke(i[3]||"",!0),Ie(this,i[4]),this.g=ke(i[5]||"",!0),Ee(this,i[6]||"",!0),this.s=ke(i[7]||"")):(this.i=!!t,this.a=new Le(null,this.i))}function _e(e,t,i){e.j=i?ke(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ie(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.C=t}else e.C=null}function Ee(e,t,i){t instanceof Le?(e.a=t,function(e,t){t&&!e.j&&(De(e),e.h=null,e.a.forEach((function(e,t){var i=t.toLowerCase();t!=i&&(Me(this,t),Me(this,i),0<e.length&&(this.h=null,this.a.set(Fe(this,i),G(e)),this.g+=e.length))}),e)),e.j=t}(e.a,e.i)):(i||(t=Ce(t,Oe)),e.a=new Le(t,e.i))}function Se(e){return e instanceof we?new we(e):new we(e,void 0)}function ke(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Ce(e,t,i){return h(e)?(e=encodeURI(e).replace(t,Ae),i&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Ae(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}we.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Ce(t,Te,!0),":");var i=this.h;return(i||"file"==t)&&(e.push("//"),(t=this.A)&&e.push(Ce(t,Te,!0),"@"),e.push(encodeURIComponent(String(i)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(i=this.C)&&e.push(":",String(i))),(i=this.g)&&(this.h&&"/"!=i.charAt(0)&&e.push("/"),e.push(Ce(i,"/"==i.charAt(0)?Re:Pe,!0))),(i=this.a.toString())&&e.push("?",i),(i=this.s)&&e.push("#",Ce(i,Ne)),e.join("")};var Te=/[#\/\?@]/g,Pe=/[#\?:]/g,Re=/[#\?]/g,Oe=/[#\?@]/g,Ne=/#/g;function Le(e,t){this.g=this.a=null,this.h=e||null,this.j=!!t}function De(e){e.a||(e.a=new he,e.g=0,e.h&&function(e,t){if(e){e=e.split("&");for(var i=0;i<e.length;i++){var n=e[i].indexOf("="),r=null;if(0<=n){var s=e[i].substring(0,n);r=e[i].substring(n+1)}else s=e[i];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.h,(function(t,i){e.add(decodeURIComponent(t.replace(/\+/g," ")),i)})))}function Me(e,t){De(e),t=Fe(e,t),pe(e.a.g,t)&&(e.h=null,e.g-=e.a.get(t).length,pe((e=e.a).g,t)&&(delete e.g[t],e.h--,e.j++,e.a.length>2*e.h&&fe(e)))}function xe(e,t){return De(e),t=Fe(e,t),pe(e.a.g,t)}function Ue(e){var t=new Le;return t.h=e.h,e.a&&(t.a=new he(e.a),t.g=e.g),t}function Fe(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function je(e){this.a=Se(e)}function Be(e){return e.a.a.get($e.Pa)||null}function He(e,t){t?e.a.a.set($e.PROVIDER_ID,t):Me(e.a.a,$e.PROVIDER_ID)}(e=Le.prototype).add=function(e,t){De(this),this.h=null,e=Fe(this,e);var i=this.a.get(e);return i||this.a.set(e,i=[]),i.push(t),this.g+=1,this},e.clear=function(){this.a=this.h=null,this.g=0},e.forEach=function(e,t){De(this),this.a.forEach((function(i,n){U(i,(function(i){e.call(t,i,n,this)}),this)}),this)},e.ja=function(){De(this);for(var e=this.a.la(),t=this.a.ja(),i=[],n=0;n<t.length;n++)for(var r=e[n],s=0;s<r.length;s++)i.push(t[n]);return i},e.la=function(e){De(this);var t=[];if(h(e))xe(this,e)&&(t=z(t,this.a.get(Fe(this,e))));else{e=this.a.la();for(var i=0;i<e.length;i++)t=z(t,e[i])}return t},e.set=function(e,t){return De(this),this.h=null,xe(this,e=Fe(this,e))&&(this.g-=this.a.get(e).length),this.a.set(e,[t]),this.g+=1,this},e.get=function(e,t){return e&&0<(e=this.la(e)).length?String(e[0]):t},e.toString=function(){if(this.h)return this.h;if(!this.a)return"";for(var e=[],t=this.a.ja(),i=0;i<t.length;i++){var n=t[i],r=encodeURIComponent(String(n));n=this.la(n);for(var s=0;s<n.length;s++){var a=r;""!==n[s]&&(a+="="+encodeURIComponent(String(n[s]))),e.push(a)}}return this.h=e.join("&")},je.prototype.toString=function(){return this.a.toString()};var Ve,$e={Pa:"ui_auid",lc:"apiKey",Qa:"ui_sd",ub:"mode",$a:"oobCode",PROVIDER_ID:"ui_pid",Sa:"ui_sid",vb:"tenantId"};e:{var We=l.navigator;if(We){var ze=We.userAgent;if(ze){Ve=ze;break e}}Ve=""}function Ge(e){return-1!=Ve.indexOf(e)}function Ke(){return(Ge("Chrome")||Ge("CriOS"))&&!Ge("Edge")}function qe(e){return qe[" "](e),e}qe[" "]=m;var Ye,Je=Ge("Opera"),Xe=Ge("Trident")||Ge("MSIE"),Ze=Ge("Edge"),Qe=Ze||Xe,et=Ge("Gecko")&&!(-1!=Ve.toLowerCase().indexOf("webkit")&&!Ge("Edge"))&&!(Ge("Trident")||Ge("MSIE"))&&!Ge("Edge"),tt=-1!=Ve.toLowerCase().indexOf("webkit")&&!Ge("Edge"),it=tt&&Ge("Mobile"),nt=Ge("Macintosh");function rt(){var e=l.document;return e?e.documentMode:void 0}e:{var st="",at=function(){var e=Ve;return et?/rv:([^\);]+)(\)|;)/.exec(e):Ze?/Edge\/([\d\.]+)/.exec(e):Xe?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):tt?/WebKit\/(\S+)/.exec(e):Je?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(at&&(st=at?at[1]:""),Xe){var ot=rt();if(null!=ot&&ot>parseFloat(st)){Ye=String(ot);break e}}Ye=st}var ct,ut={};function lt(e){return function(e,t){var i=ut;return Object.prototype.hasOwnProperty.call(i,e)?i[e]:i[e]=t(e)}(e,(function(){for(var t=0,i=q(String(Ye)).split("."),n=q(String(e)).split("."),r=Math.max(i.length,n.length),s=0;0==t&&s<r;s++){var a=i[s]||"",o=n[s]||"";do{if(a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==a[0].length&&0==o[0].length)break;t=ie(0==a[1].length?0:parseInt(a[1],10),0==o[1].length?0:parseInt(o[1],10))||ie(0==a[2].length,0==o[2].length)||ie(a[2],o[2]),a=a[3],o=o[3]}while(0==t)}return 0<=t}))}var dt=l.document;function ht(e,t){this.a=e===pt&&t||"",this.g=ft}ct=dt&&Xe?rt()||("CSS1Compat"==dt.compatMode?parseInt(Ye,10):5):void 0,ht.prototype.ma=!0,ht.prototype.ka=function(){return this.a},ht.prototype.toString=function(){return"Const{"+this.a+"}"};var ft={},pt={};function mt(){this.a="",this.h=vt}function gt(e){return e instanceof mt&&e.constructor===mt&&e.h===vt?e.a:(M("expected object of type TrustedResourceUrl, got '"+e+"' of type "+v(e)),"type_error:TrustedResourceUrl")}mt.prototype.ma=!0,mt.prototype.ka=function(){return this.a.toString()},mt.prototype.g=function(){return 1},mt.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};var vt={};function bt(){this.a="",this.h=Et}function yt(e){return e instanceof bt&&e.constructor===bt&&e.h===Et?e.a:(M("expected object of type SafeUrl, got '"+e+"' of type "+v(e)),"type_error:SafeUrl")}bt.prototype.ma=!0,bt.prototype.ka=function(){return this.a.toString()},bt.prototype.g=function(){return 1},bt.prototype.toString=function(){return"SafeUrl{"+this.a+"}"};var wt=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function _t(e){return e instanceof bt?e:(e="object"==typeof e&&e.ma?e.ka():String(e),wt.test(e)||(e="about:invalid#zClosurez"),St(e))}function It(e){return e instanceof bt?e:(e="object"==typeof e&&e.ma?e.ka():String(e),wt.test(e)||(e="about:invalid#zClosurez"),St(e))}var Et={};function St(e){var t=new bt;return t.a=e,t}function kt(){this.a="",this.g=Ct}St("about:blank"),kt.prototype.ma=!0;var Ct={};function At(){this.a="",this.j=Pt,this.h=null}function Tt(e){return e instanceof At&&e.constructor===At&&e.j===Pt?e.a:(M("expected object of type SafeHtml, got '"+e+"' of type "+v(e)),"type_error:SafeHtml")}kt.prototype.ka=function(){return this.a},kt.prototype.toString=function(){return"SafeStyle{"+this.a+"}"},At.prototype.g=function(){return this.h},At.prototype.ma=!0,At.prototype.ka=function(){return this.a.toString()},At.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};var Pt={};function Rt(e,t){var i=new At;return i.a=e,i.h=t,i}Rt("<!DOCTYPE html>",0);var Ot=Rt("",0);Rt("<br>",0);var Nt=function(e){var t,i=!1;return function(){return i||(t=function(){if("undefined"==typeof document)return!1;var e=document.createElement("div"),t=document.createElement("div");return t.appendChild(document.createElement("div")),e.appendChild(t),!!e.firstChild&&(t=e.firstChild.firstChild,e.innerHTML=Tt(Ot),!t.parentElement)}(),i=!0),t}}();function Lt(e,t){t=t instanceof bt?t:It(t),e.assign(yt(t))}function Dt(e,t){this.a=d(e)?e:0,this.g=d(t)?t:0}function Mt(e,t){this.width=e,this.height=t}function xt(e){return e?new Gt($t(e)):P||(P=new Gt)}function Ut(e,t){var i=t||document;return i.querySelectorAll&&i.querySelector?i.querySelectorAll("."+e):jt(document,e,t)}function Ft(e,t){var i=t||document;if(i.getElementsByClassName)e=i.getElementsByClassName(e)[0];else{i=document;var n=t||i;e=n.querySelectorAll&&n.querySelector&&e?n.querySelector(e?"."+e:""):jt(i,e,t)[0]||null}return e||null}function jt(e,t,i){var n;if((e=i||e).querySelectorAll&&e.querySelector&&t)return e.querySelectorAll(t?"."+t:"");if(t&&e.getElementsByClassName){var r=e.getElementsByClassName(t);return r}if(r=e.getElementsByTagName("*"),t){var s={};for(i=n=0;e=r[i];i++){var a=e.className;"function"==typeof a.split&&H(a.split(/\s+/),t)&&(s[n++]=e)}return s.length=n,s}return r}Dt.prototype.toString=function(){return"("+this.a+", "+this.g+")"},Dt.prototype.ceil=function(){return this.a=Math.ceil(this.a),this.g=Math.ceil(this.g),this},Dt.prototype.floor=function(){return this.a=Math.floor(this.a),this.g=Math.floor(this.g),this},Dt.prototype.round=function(){return this.a=Math.round(this.a),this.g=Math.round(this.g),this},(e=Mt.prototype).toString=function(){return"("+this.width+" x "+this.height+")"},e.aspectRatio=function(){return this.width/this.height},e.ceil=function(){return this.width=Math.ceil(this.width),this.height=Math.ceil(this.height),this},e.floor=function(){return this.width=Math.floor(this.width),this.height=Math.floor(this.height),this},e.round=function(){return this.width=Math.round(this.width),this.height=Math.round(this.height),this};var Bt={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Ht(e){return e.scrollingElement?e.scrollingElement:(tt||"CSS1Compat"!=e.compatMode)&&e.body||e.documentElement}function Vt(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function $t(e){return 9==e.nodeType?e:e.ownerDocument||e.document}function Wt(e,t){if("textContent"in e)e.textContent=t;else if(3==e.nodeType)e.data=String(t);else if(e.firstChild&&3==e.firstChild.nodeType){for(;e.lastChild!=e.firstChild;)e.removeChild(e.lastChild);e.firstChild.data=String(t)}else{for(var i;i=e.firstChild;)e.removeChild(i);e.appendChild($t(e).createTextNode(String(t)))}}function zt(e,t){return t?function(e,t){for(;e;){if(t(e))return e;e=e.parentNode}return null}(e,(function(e){return!t||h(e.className)&&H(e.className.split(/\s+/),t)})):null}function Gt(e){this.a=e||l.document||document}Gt.prototype.N=function(){return h(void 0)?this.a.getElementById(void 0):void 0};var Kt={Fc:!0},qt={Hc:!0},Yt={Ec:!0},Jt={Gc:!0};function Xt(){throw Error("Do not instantiate directly")}function Zt(e,t,i,n){if(e=e(t||ei,void 0,i),n=(n||xt()).a.createElement("DIV"),(e=function(e){if(!_(e))return ne(String(e));if(e instanceof Xt){if(e.fa===Kt)return e.content;if(e.fa===Jt)return ne(e.content)}return M("Soy template output is unsafe for use as HTML: "+e),"zSoyz"}(e)).match(Qt),e=Rt(e,null),Nt())for(;n.lastChild;)n.removeChild(n.lastChild);return n.innerHTML=Tt(e),1==n.childNodes.length&&(1==(e=n.firstChild).nodeType&&(n=e)),n}Xt.prototype.va=null,Xt.prototype.toString=function(){return this.content};var Qt=/^<(body|caption|col|colgroup|head|html|tr|td|th|tbody|thead|tfoot)>/i,ei={};function ti(){Xt.call(this)}function ii(e){return null!=e&&e.fa===Kt?e:e instanceof At?ai(Tt(e).toString(),e.g()):ai(ne(String(String(e))),function(e){if(null!=e)switch(e.va){case 1:return 1;case-1:return-1;case 0:return 0}return null}(e))}function ni(){Xt.call(this)}function ri(e,t){this.content=String(e),this.va=null!=t?t:null}function si(e){return new ri(e,void 0)}N(ti,Xt),ti.prototype.fa=Kt,N(ni,Xt),ni.prototype.fa=qt,ni.prototype.va=1,N(ri,Xt),ri.prototype.fa=Jt;var ai=function(e){function t(e){this.content=e}return t.prototype=e.prototype,function(e,i){return e=new t(String(e)),void 0!==i&&(e.va=i),e}}(ti),oi=function(e){function t(e){this.content=e}return t.prototype=e.prototype,function(e){return new t(String(e))}}(ni);function ci(e){return(e=String(e))?new ri(e,void 0):""}var ui=function(e){function t(e){this.content=e}return t.prototype=e.prototype,function(e,i){return(e=String(e))?(e=new t(e),void 0!==i&&(e.va=i),e):""}}(ti);function li(e){return null!=e&&e.fa===Kt?String(String(e.content).replace(_i,"").replace(Ii,"&lt;")).replace(vi,pi):ne(String(e))}function di(e){return null!=e&&e.fa===qt?e=String(e).replace(bi,gi):e instanceof bt?e=String(yt(e).toString()).replace(bi,gi):(e=String(e),wi.test(e)?e=e.replace(bi,gi):(M("Bad value `%s` for |filterNormalizeUri",[e]),e="#zSoyz")),e}function hi(e){return null!=e&&e.fa===Yt?e=e.content:null==e?e="":e instanceof kt?e instanceof kt&&e.constructor===kt&&e.g===Ct?e=e.a:(M("expected object of type SafeStyle, got '"+e+"' of type "+v(e)),e="type_error:SafeStyle"):(e=String(e),yi.test(e)||(M("Bad value `%s` for |filterCssValue",[e]),e="zSoyz")),e}var fi={"\0":"&#0;","\t":"&#9;","\n":"&#10;","\v":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;",'"':"&quot;","&":"&amp;","'":"&#39;","-":"&#45;","/":"&#47;","<":"&lt;","=":"&#61;",">":"&gt;","`":"&#96;","":"&#133;"," ":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"};function pi(e){return fi[e]}var mi={"\0":"%00","":"%01","":"%02","":"%03","":"%04","":"%05","":"%06","":"%07","\b":"%08","\t":"%09","\n":"%0A","\v":"%0B","\f":"%0C","\r":"%0D","":"%0E","":"%0F","":"%10","":"%11","":"%12","":"%13","":"%14","":"%15","":"%16","":"%17","":"%18","":"%19","":"%1A","":"%1B","":"%1C","":"%1D","":"%1E","":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","":"%7F","":"%C2%85"," ":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","！":"%EF%BC%81","＃":"%EF%BC%83","＄":"%EF%BC%84","＆":"%EF%BC%86","＇":"%EF%BC%87","（":"%EF%BC%88","）":"%EF%BC%89","＊":"%EF%BC%8A","＋":"%EF%BC%8B","，":"%EF%BC%8C","／":"%EF%BC%8F","：":"%EF%BC%9A","；":"%EF%BC%9B","＝":"%EF%BC%9D","？":"%EF%BC%9F","＠":"%EF%BC%A0","［":"%EF%BC%BB","］":"%EF%BC%BD"};function gi(e){return mi[e]}var vi=/[\x00\x22\x27\x3c\x3e]/g,bi=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,yi=/^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i,wi=/^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i,_i=/<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,Ii=/</g;function Ei(){return si("Enter a valid phone number")}function Si(){return si("Unable to send password reset code to specified email")}function ki(){return si("Something went wrong. Please try again.")}function Ci(){return si("This email already exists without any means of sign-in. Please reset the password to recover.")}function Ai(e){var t="";switch((e=e||{}).code){case"invalid-argument":t+="Client specified an invalid argument.";break;case"invalid-configuration":t+="Client specified an invalid project configuration.";break;case"failed-precondition":t+="Request can not be executed in the current system state.";break;case"out-of-range":t+="Client specified an invalid range.";break;case"unauthenticated":t+="Request not authenticated due to missing, invalid, or expired OAuth token.";break;case"permission-denied":t+="Client does not have sufficient permission.";break;case"not-found":t+="Specified resource is not found.";break;case"aborted":t+="Concurrency conflict, such as read-modify-write conflict.";break;case"already-exists":t+="The resource that a client tried to create already exists.";break;case"resource-exhausted":t+="Either out of resource quota or reaching rate limiting.";break;case"cancelled":t+="Request cancelled by the client.";break;case"data-loss":t+="Unrecoverable data loss or data corruption.";break;case"unknown":t+="Unknown server error.";break;case"internal":t+="Internal server error.";break;case"not-implemented":t+="API method not implemented by the server.";break;case"unavailable":t+="Service unavailable.";break;case"deadline-exceeded":t+="Request deadline exceeded.";break;case"auth/user-disabled":t+="The user account has been disabled by an administrator.";break;case"auth/timeout":t+="The operation has timed out.";break;case"auth/too-many-requests":t+="We have blocked all requests from this device due to unusual activity. Try again later.";break;case"auth/quota-exceeded":t+="The quota for this operation has been exceeded. Try again later.";break;case"auth/network-request-failed":t+="A network error has occurred. Try again later.";break;case"restart-process":t+="An issue was encountered when authenticating your request. Please visit the URL that redirected you to this page again to restart the authentication process.";break;case"no-matching-tenant-for-email":t+="No sign-in provider is available for the given email, please try with a different email."}return si(t)}function Ti(){return si("Please login again to perform this operation")}function Pi(e,t,i){var n=Error.call(this);if(this.message=n.message,"stack"in n&&(this.stack=n.stack),this.code=Ri+e,!(e=t)){if(e="","firebaseui/merge-conflict"===this.code)e+="The current anonymous user failed to upgrade. The non-anonymous credential is already associated with a different user account.";else e+=ki();e=si(e).toString()}this.message=e||"",this.credential=i||null}a(Pi,Error),Pi.prototype.toJSON=function(){return{code:this.code,message:this.message}};var Ri="firebaseui/";function Oi(){this.T=this.T,this.C=this.C}function Ni(e,t){e.T?d(void 0)?t.call(void 0):t():(e.C||(e.C=[]),e.C.push(d(void 0)?C(t,void 0):t))}function Li(e){e&&"function"==typeof e.m&&e.m()}Oi.prototype.T=!1,Oi.prototype.m=function(){!this.T&&(this.T=!0,this.o(),0)&&(this[I]||(this[I]=++E))},Oi.prototype.o=function(){if(this.C)for(;this.C.length;)this.C.shift()()};var Di=Object.freeze||function(e){return e},Mi=!Xe||9<=Number(ct),xi=Xe&&!lt("9"),Ui=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{l.addEventListener("test",m,t),l.removeEventListener("test",m,t)}catch(e){}return e}();function Fi(e,t){this.type=e,this.g=this.target=t,this.h=!1,this.qb=!0}function ji(e,t){if(Fi.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.j=this.keyCode=0,this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.a=null,e){var i=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(et){e:{try{qe(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==i?t=e.fromElement:"mouseout"==i&&(t=e.toElement);this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.keyCode=e.keyCode||0,this.key=e.key||"",this.j=e.charCode||("keypress"==i?e.keyCode:0),this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=h(e.pointerType)?e.pointerType:Bi[e.pointerType]||"",this.a=e,e.defaultPrevented&&this.preventDefault()}}Fi.prototype.stopPropagation=function(){this.h=!0},Fi.prototype.preventDefault=function(){this.qb=!1},N(ji,Fi);var Bi=Di({2:"touch",3:"pen",4:"mouse"});ji.prototype.stopPropagation=function(){ji.K.stopPropagation.call(this),this.a.stopPropagation?this.a.stopPropagation():this.a.cancelBubble=!0},ji.prototype.preventDefault=function(){ji.K.preventDefault.call(this);var e=this.a;if(e.preventDefault)e.preventDefault();else if(e.returnValue=!1,xi)try{(e.ctrlKey||112<=e.keyCode&&123>=e.keyCode)&&(e.keyCode=-1)}catch(e){}};var Hi="closure_listenable_"+(1e6*Math.random()|0),Vi=0;function $i(e,t,i,n,r){this.listener=e,this.proxy=null,this.src=t,this.type=i,this.capture=!!n,this.La=r,this.key=++Vi,this.sa=this.Ia=!1}function Wi(e){e.sa=!0,e.listener=null,e.proxy=null,e.src=null,e.La=null}function zi(e){this.src=e,this.a={},this.g=0}function Gi(e,t){var i=t.type;i in e.a&&V(e.a[i],t)&&(Wi(t),0==e.a[i].length&&(delete e.a[i],e.g--))}function Ki(e,t,i,n){for(var r=0;r<e.length;++r){var s=e[r];if(!s.sa&&s.listener==t&&s.capture==!!i&&s.La==n)return r}return-1}zi.prototype.add=function(e,t,i,n,r){var s=e.toString();(e=this.a[s])||(e=this.a[s]=[],this.g++);var a=Ki(e,t,n,r);return-1<a?(t=e[a],i||(t.Ia=!1)):((t=new $i(t,this.src,s,!!n,r)).Ia=i,e.push(t)),t};var qi="closure_lm_"+(1e6*Math.random()|0),Yi={};function Ji(e,t,i,n,r){if(n&&n.once)return Zi(e,t,i,n,r);if(b(t)){for(var s=0;s<t.length;s++)Ji(e,t[s],i,n,r);return null}return i=cn(i),e&&e[Hi]?e.J.add(String(t),i,!1,_(n)?!!n.capture:!!n,r):Xi(e,t,i,!1,n,r)}function Xi(e,t,i,n,r,s){if(!t)throw Error("Invalid event type");var a=_(r)?!!r.capture:!!r,o=an(e);if(o||(e[qi]=o=new zi(e)),(i=o.add(t,i,n,a,s)).proxy)return i;if(n=function(){var e=sn,t=Mi?function(i){return e.call(t.src,t.listener,i)}:function(i){if(!(i=e.call(t.src,t.listener,i)))return i};return t}(),i.proxy=n,n.src=e,n.listener=i,e.addEventListener)Ui||(r=a),void 0===r&&(r=!1),e.addEventListener(t.toString(),n,r);else if(e.attachEvent)e.attachEvent(tn(t.toString()),n);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(n)}return i}function Zi(e,t,i,n,r){if(b(t)){for(var s=0;s<t.length;s++)Zi(e,t[s],i,n,r);return null}return i=cn(i),e&&e[Hi]?e.J.add(String(t),i,!0,_(n)?!!n.capture:!!n,r):Xi(e,t,i,!0,n,r)}function Qi(e,t,i,n,r){if(b(t))for(var s=0;s<t.length;s++)Qi(e,t[s],i,n,r);else n=_(n)?!!n.capture:!!n,i=cn(i),e&&e[Hi]?(e=e.J,(t=String(t).toString())in e.a&&(-1<(i=Ki(s=e.a[t],i,n,r))&&(Wi(s[i]),$(s,i),0==s.length&&(delete e.a[t],e.g--)))):e&&(e=an(e))&&(t=e.a[t.toString()],e=-1,t&&(e=Ki(t,i,n,r)),(i=-1<e?t[e]:null)&&en(i))}function en(e){if("number"!=typeof e&&e&&!e.sa){var t=e.src;if(t&&t[Hi])Gi(t.J,e);else{var i=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(i,n,e.capture):t.detachEvent?t.detachEvent(tn(i),n):t.addListener&&t.removeListener&&t.removeListener(n),(i=an(t))?(Gi(i,e),0==i.g&&(i.src=null,t[qi]=null)):Wi(e)}}}function tn(e){return e in Yi?Yi[e]:Yi[e]="on"+e}function nn(e,t,i,n){var r=!0;if((e=an(e))&&(t=e.a[t.toString()]))for(t=t.concat(),e=0;e<t.length;e++){var s=t[e];s&&s.capture==i&&!s.sa&&(s=rn(s,n),r=r&&!1!==s)}return r}function rn(e,t){var i=e.listener,n=e.La||e.src;return e.Ia&&en(e),i.call(n,t)}function sn(e,t){if(e.sa)return!0;if(!Mi){if(!t)e:{t=["window","event"];for(var i=l,n=0;n<t.length;n++)if(null==(i=i[t[n]])){t=null;break e}t=i}if(t=new ji(n=t,this),i=!0,!(0>n.keyCode||null!=n.returnValue)){e:{var r=!1;if(0==n.keyCode)try{n.keyCode=-1;break e}catch(e){r=!0}(r||null==n.returnValue)&&(n.returnValue=!0)}for(n=[],r=t.g;r;r=r.parentNode)n.push(r);for(e=e.type,r=n.length-1;!t.h&&0<=r;r--){t.g=n[r];var s=nn(n[r],e,!0,t);i=i&&s}for(r=0;!t.h&&r<n.length;r++)t.g=n[r],s=nn(n[r],e,!1,t),i=i&&s}return i}return rn(e,new ji(t,this))}function an(e){return(e=e[qi])instanceof zi?e:null}var on="__closure_events_fn_"+(1e9*Math.random()>>>0);function cn(e){return w(e)?e:(e[on]||(e[on]=function(t){return e.handleEvent(t)}),e[on])}function un(){Oi.call(this),this.J=new zi(this),this.wb=this,this.Ha=null}function ln(e,t){var i,n=e.Ha;if(n)for(i=[];n;n=n.Ha)i.push(n);if(e=e.wb,n=t.type||t,h(t))t=new Fi(t,e);else if(t instanceof Fi)t.target=t.target||e;else{var r=t;oe(t=new Fi(n,e),r)}if(r=!0,i)for(var s=i.length-1;!t.h&&0<=s;s--){var a=t.g=i[s];r=dn(a,n,!0,t)&&r}if(t.h||(r=dn(a=t.g=e,n,!0,t)&&r,t.h||(r=dn(a,n,!1,t)&&r)),i)for(s=0;!t.h&&s<i.length;s++)r=dn(a=t.g=i[s],n,!1,t)&&r;return r}function dn(e,t,i,n){if(!(t=e.J.a[String(t)]))return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.sa&&a.capture==i){var o=a.listener,c=a.La||a.src;a.Ia&&Gi(e.J,a),r=!1!==o.call(c,n)&&r}}return r&&0!=n.qb}N(un,Oi),un.prototype[Hi]=!0,un.prototype.Za=function(e){this.Ha=e},un.prototype.removeEventListener=function(e,t,i,n){Qi(this,e,t,i,n)},un.prototype.o=function(){if(un.K.o.call(this),this.J){var e,t=this.J;for(e in t.a){for(var i=t.a[e],n=0;n<i.length;n++)Wi(i[n]);delete t.a[e],t.g--}}this.Ha=null};var hn={},fn=0;function pn(e,t){if(!e)throw Error("Event target element must be provided!");if(e=gn(e),hn[e]&&hn[e].length)for(var i=0;i<hn[e].length;i++)ln(hn[e][i],t)}function mn(e){var t=gn(e.N());hn[t]&&hn[t].length&&(function(e,t){e:{for(var i=e.length,n=h(e)?e.split(""):e,r=0;r<i;r++)if(r in n&&t.call(void 0,n[r],r,e)){t=r;break e}t=-1}0<=t&&$(e,t)}(hn[t],(function(t){return t==e})),hn[t].length||delete hn[t])}function gn(e){return void 0===e.a&&(e.a=fn,fn++),e.a}function vn(e){if(!e)throw Error("Event target element must be provided!");un.call(this),this.a=e}function bn(e){if(!e)return!1;try{return!!e.$goog_Thenable}catch(e){return!1}}function yn(e,t){this.h=e,this.j=t,this.g=0,this.a=null}function wn(e,t){e.j(t),100>e.g&&(e.g++,t.next=e.a,e.a=t)}function _n(){this.g=this.a=null}a(vn,un),vn.prototype.N=function(){return this.a},vn.prototype.register=function(){var e=gn(this.N());hn[e]?H(hn[e],this)||hn[e].push(this):hn[e]=[this]},yn.prototype.get=function(){if(0<this.g){this.g--;var e=this.a;this.a=e.next,e.next=null}else e=this.h();return e};var In,En,Sn=new yn((function(){return new Cn}),(function(e){e.reset()}));function kn(){var e=Rn,t=null;return e.a&&(t=e.a,e.a=e.a.next,e.a||(e.g=null),t.next=null),t}function Cn(){this.next=this.g=this.a=null}function An(e){l.setTimeout((function(){throw e}),0)}function Tn(e,t){En||function(){if(l.Promise&&l.Promise.resolve){var e=l.Promise.resolve(void 0);En=function(){e.then(On)}}else En=function(){var e=On;!w(l.setImmediate)||l.Window&&l.Window.prototype&&!Ge("Edge")&&l.Window.prototype.setImmediate==l.setImmediate?(In||(In=function(){var e=l.MessageChannel;if(void 0===e&&"undefined"!=typeof window&&window.postMessage&&window.addEventListener&&!Ge("Presto")&&(e=function(){var e=document.createElement("IFRAME");e.style.display="none",e.src="",document.documentElement.appendChild(e);var t=e.contentWindow;(e=t.document).open(),e.write(""),e.close();var i="callImmediate"+Math.random(),n="file:"==t.location.protocol?"*":t.location.protocol+"//"+t.location.host;e=C((function(e){"*"!=n&&e.origin!=n||e.data!=i||this.port1.onmessage()}),this),t.addEventListener("message",e,!1),this.port1={},this.port2={postMessage:function(){t.postMessage(i,n)}}}),void 0!==e&&!Ge("Trident")&&!Ge("MSIE")){var t=new e,i={},n=i;return t.port1.onmessage=function(){if(d(i.next)){var e=(i=i.next).gb;i.gb=null,e()}},function(e){n.next={gb:e},n=n.next,t.port2.postMessage(0)}}return"undefined"!=typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(e){var t=document.createElement("SCRIPT");t.onreadystatechange=function(){t.onreadystatechange=null,t.parentNode.removeChild(t),t=null,e(),e=null},document.documentElement.appendChild(t)}:function(e){l.setTimeout(e,0)}}()),In(e)):l.setImmediate(e)}}(),Pn||(En(),Pn=!0),Rn.add(e,t)}_n.prototype.add=function(e,t){var i=Sn.get();i.set(e,t),this.g?this.g.next=i:this.a=i,this.g=i},Cn.prototype.set=function(e,t){this.a=e,this.g=t,this.next=null},Cn.prototype.reset=function(){this.next=this.g=this.a=null};var Pn=!1,Rn=new _n;function On(){for(var e;e=kn();){try{e.a.call(e.g)}catch(e){An(e)}wn(Sn,e)}Pn=!1}function Nn(e){if(this.a=Ln,this.A=void 0,this.j=this.g=this.h=null,this.s=this.i=!1,e!=m)try{var t=this;e.call(void 0,(function(e){Wn(t,Dn,e)}),(function(e){if(!(e instanceof Jn))try{if(e instanceof Error)throw e;throw Error("Promise rejected.")}catch(e){}Wn(t,Mn,e)}))}catch(e){Wn(this,Mn,e)}}var Ln=0,Dn=2,Mn=3;function xn(){this.next=this.j=this.g=this.s=this.a=null,this.h=!1}xn.prototype.reset=function(){this.j=this.g=this.s=this.a=null,this.h=!1};var Un=new yn((function(){return new xn}),(function(e){e.reset()}));function Fn(e,t,i){var n=Un.get();return n.s=e,n.g=t,n.j=i,n}function jn(e){if(e instanceof Nn)return e;var t=new Nn(m);return Wn(t,Dn,e),t}function Bn(e){return new Nn((function(t,i){i(e)}))}function Hn(e,t){if(e.a==Ln)if(e.h){var i=e.h;if(i.g){for(var n=0,r=null,s=null,a=i.g;a&&(a.h||(n++,a.a==e&&(r=a),!(r&&1<n)));a=a.next)r||(s=a);r&&(i.a==Ln&&1==n?Hn(i,t):(s?((n=s).next==i.j&&(i.j=n),n.next=n.next.next):Gn(i),Kn(i,r,Mn,t)))}e.h=null}else Wn(e,Mn,t)}function Vn(e,t){e.g||e.a!=Dn&&e.a!=Mn||zn(e),e.j?e.j.next=t:e.g=t,e.j=t}function $n(e,t,i,n){var r=Fn(null,null,null);return r.a=new Nn((function(e,s){r.s=t?function(i){try{var r=t.call(n,i);e(r)}catch(e){s(e)}}:e,r.g=i?function(t){try{var r=i.call(n,t);!d(r)&&t instanceof Jn?s(t):e(r)}catch(e){s(e)}}:s})),r.a.h=e,Vn(e,r),r.a}function Wn(e,t,i){if(e.a==Ln){e===i&&(t=Mn,i=new TypeError("Promise cannot resolve to itself")),e.a=1;e:{var n=i,r=e.hc,s=e.ic;if(n instanceof Nn){Vn(n,Fn(r||m,s||null,e));var a=!0}else if(bn(n))n.then(r,s,e),a=!0;else{if(_(n))try{var o=n.then;if(w(o)){!function(e,t,i,n,r){function s(e){o||(o=!0,n.call(r,e))}function a(e){o||(o=!0,i.call(r,e))}var o=!1;try{t.call(e,a,s)}catch(e){s(e)}}(n,o,r,s,e),a=!0;break e}}catch(t){s.call(e,t),a=!0;break e}a=!1}}a||(e.A=i,e.a=t,e.h=null,zn(e),t!=Mn||i instanceof Jn||function(e,t){e.s=!0,Tn((function(){e.s&&Yn.call(null,t)}))}(e,i))}}function zn(e){e.i||(e.i=!0,Tn(e.Hb,e))}function Gn(e){var t=null;return e.g&&(t=e.g,e.g=t.next,t.next=null),e.g||(e.j=null),t}function Kn(e,t,i,n){if(i==Mn&&t.g&&!t.h)for(;e&&e.s;e=e.h)e.s=!1;if(t.a)t.a.h=null,qn(t,i,n);else try{t.h?t.s.call(t.j):qn(t,i,n)}catch(e){Yn.call(null,e)}wn(Un,t)}function qn(e,t,i){t==Dn?e.s.call(e.j,i):e.g&&e.g.call(e.j,i)}Nn.prototype.then=function(e,t,i){return $n(this,w(e)?e:null,w(t)?t:null,i)},Nn.prototype.$goog_Thenable=!0,(e=Nn.prototype).fc=function(e,t){return(e=Fn(e,e,t)).h=!0,Vn(this,e),this},e.Ca=function(e,t){return $n(this,null,e,t)},e.cancel=function(e){this.a==Ln&&Tn((function(){Hn(this,new Jn(e))}),this)},e.hc=function(e){this.a=Ln,Wn(this,Dn,e)},e.ic=function(e){this.a=Ln,Wn(this,Mn,e)},e.Hb=function(){for(var e;e=Gn(this);)Kn(this,e,this.a,this.A);this.i=!1};var Yn=An;function Jn(e){L.call(this,e)}function Xn(e,t,i){t||(t={}),i=i||window;var n=e instanceof bt?e:_t(void 0!==e.href?e.href:String(e));e=t.target||e.target;var r=[];for(s in t)switch(s){case"width":case"height":case"top":case"left":r.push(s+"="+t[s]);break;case"target":case"noopener":case"noreferrer":break;default:r.push(s+"="+(t[s]?1:0))}var s=r.join(",");return(Ge("iPhone")&&!Ge("iPod")&&!Ge("iPad")||Ge("iPad")||Ge("iPod"))&&i.navigator&&i.navigator.standalone&&e&&"_self"!=e?(s=i.document.createElement("A"),n=n instanceof bt?n:It(n),s.href=yt(n),s.setAttribute("target",e),t.noreferrer&&s.setAttribute("rel","noreferrer"),(t=document.createEvent("MouseEvent")).initMouseEvent("click",!0,!0,i,1),s.dispatchEvent(t),i={}):t.noreferrer?(i=i.open("",e,s),t=yt(n).toString(),i&&(Qe&&-1!=t.indexOf(";")&&(t="'"+t.replace(/'/g,"%27")+"'"),i.opener=null,t=Rt('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+ne(t)+'">',null),i.document.write(Tt(t)),i.document.close())):(i=i.open(yt(n).toString(),e,s))&&t.noopener&&(i.opener=null),i}function Zn(){try{return!(!window.opener||!window.opener.location||window.opener.location.hostname!==window.location.hostname||window.opener.location.protocol!==window.location.protocol)}catch(e){}return!1}function Qn(e){Xn(e,{target:window.cordova&&window.cordova.InAppBrowser?"_system":"_blank"},void 0)}function er(e,t){if(null==(e=_(e)&&1==e.nodeType?e:document.querySelector(String(e))))throw Error(t||"Cannot find element.");return e}function tr(){return window.location.href}function ir(e){var t=fr;this.s=[],this.T=t,this.O=e||null,this.j=this.a=!1,this.h=void 0,this.J=this.l=this.A=!1,this.i=0,this.g=null,this.C=0}function nr(e,t,i){e.a=!0,e.h=i,e.j=!t,or(e)}function rr(e){if(e.a){if(!e.J)throw new cr;e.J=!1}}function sr(e,t,i){e.s.push([t,i,void 0]),e.a&&or(e)}function ar(e){return B(e.s,(function(e){return w(e[1])}))}function or(e){if(e.i&&e.a&&ar(e)){var t=e.i,i=dr[t];i&&(l.clearTimeout(i.a),delete dr[t]),e.i=0}e.g&&(e.g.C--,delete e.g),t=e.h;for(var n=i=!1;e.s.length&&!e.A;){var r=e.s.shift(),s=r[0],a=r[1];if(r=r[2],s=e.j?a:s)try{var o=s.call(r||e.O,t);d(o)&&(e.j=e.j&&(o==t||o instanceof Error),e.h=t=o),(bn(t)||"function"==typeof l.Promise&&t instanceof l.Promise)&&(n=!0,e.A=!0)}catch(n){t=n,e.j=!0,ar(e)||(i=!0)}}e.h=t,n&&(o=C(e.L,e,!0),n=C(e.L,e,!1),t instanceof ir?(sr(t,o,n),t.l=!0):t.then(o,n)),i&&(t=new lr(t),dr[t.a]=t,e.i=t.a)}function cr(){L.call(this)}function ur(){L.call(this)}function lr(e){this.a=l.setTimeout(C(this.h,this),0),this.g=e}N(Jn,L),Jn.prototype.name="cancel",ir.prototype.cancel=function(e){if(this.a)this.h instanceof ir&&this.h.cancel();else{if(this.g){var t=this.g;delete this.g,e?t.cancel(e):(t.C--,0>=t.C&&t.cancel())}this.T?this.T.call(this.O,this):this.J=!0,this.a||(e=new ur,rr(this),nr(this,!1,e))}},ir.prototype.L=function(e,t){this.A=!1,nr(this,e,t)},ir.prototype.callback=function(e){rr(this),nr(this,!0,e)},ir.prototype.then=function(e,t,i){var n,r,s=new Nn((function(e,t){n=e,r=t}));return sr(this,n,(function(e){e instanceof ur?s.cancel():r(e)})),s.then(e,t,i)},ir.prototype.$goog_Thenable=!0,N(cr,L),cr.prototype.message="Deferred has already fired",cr.prototype.name="AlreadyCalledError",N(ur,L),ur.prototype.message="Deferred was canceled",ur.prototype.name="CanceledError",lr.prototype.h=function(){throw delete dr[this.a],this.g};var dr={};function hr(e){var t={},i=t.document||document,n=gt(e).toString(),r=document.createElement("SCRIPT"),s={rb:r,sb:void 0},a=new ir(s),o=null,c=null!=t.timeout?t.timeout:5e3;return 0<c&&(o=window.setTimeout((function(){pr(r,!0);var e=new vr(gr,"Timeout reached for loading script "+n);rr(a),nr(a,!1,e)}),c),s.sb=o),r.onload=r.onreadystatechange=function(){r.readyState&&"loaded"!=r.readyState&&"complete"!=r.readyState||(pr(r,t.xc||!1,o),a.callback(null))},r.onerror=function(){pr(r,!0,o);var e=new vr(mr,"Error while loading script "+n);rr(a),nr(a,!1,e)},oe(s=t.attributes||{},{type:"text/javascript",charset:"UTF-8"}),function(e,t){re(t,(function(t,i){t&&"object"==typeof t&&t.ma&&(t=t.ka()),"style"==i?e.style.cssText=t:"class"==i?e.className=t:"for"==i?e.htmlFor=t:Bt.hasOwnProperty(i)?e.setAttribute(Bt[i],t):0==i.lastIndexOf("aria-",0)||0==i.lastIndexOf("data-",0)?e.setAttribute(i,t):e[i]=t}))}(r,s),function(e,t){e.src=gt(t),null===p&&(p=(t=(t=l.document).querySelector&&t.querySelector("script[nonce]"))&&(t=t.nonce||t.getAttribute("nonce"))&&f.test(t)?t:""),(t=p)&&e.setAttribute("nonce",t)}(r,e),function(e){var t=(e||document).getElementsByTagName("HEAD");return t&&0!=t.length?t[0]:e.documentElement}(i).appendChild(r),a}function fr(){if(this&&this.rb){var e=this.rb;e&&"SCRIPT"==e.tagName&&pr(e,!0,this.sb)}}function pr(e,t,i){null!=i&&l.clearTimeout(i),e.onload=m,e.onerror=m,e.onreadystatechange=m,t&&window.setTimeout((function(){Vt(e)}),0)}var mr=0,gr=1;function vr(e,t){var i="Jsloader error (code #"+e+")";t&&(i+=": "+t),L.call(this,i),this.code=e}function br(){return l.google&&l.google.accounts&&l.google.accounts.id||null}function yr(e){this.a=e||br(),this.h=!1,this.g=null}function wr(e,t,i){return e.a&&t?(e.h=!0,new Nn((function(n){e.g=n,e.a.initialize({client_id:t,callback:n,auto_select:!i}),e.a.prompt()}))):jn(t?Ir.Xa().load().then((function(){return e.a=br(),wr(e,t,i)})).Ca((function(){return null})):null)}N(vr,L),yr.prototype.cancel=function(){this.a&&this.h&&(this.g&&this.g(null),this.a.cancel())},g(yr);var _r=new ht(pt,"https://accounts.google.com/gsi/client");function Ir(){this.a=null}function Er(e,t){this.a=e,this.g=t||function(e){throw e}}function Sr(e,t,i){this.reset(e,t,i,void 0,void 0)}function kr(e){this.s=e,this.a=this.h=this.j=this.g=null}function Cr(e,t){this.name=e,this.value=t}Ir.prototype.load=function(){var e=this;if(this.a)return this.a;var t=function(){var e=_r;e instanceof ht&&e.constructor===ht&&e.g===ft?e=e.a:(M("expected object of type Const, got '"+e+"'"),e="type_error:Const");var t=new mt;return t.a=e,t}();return br()?jn():this.a=function(){var e=null;return new Nn((function(t){"complete"==l.document.readyState?t():(e=function(){t()},Zi(window,"load",e))})).Ca((function(t){throw Qi(window,"load",e),t}))}().then((function(){if(!br())return new Nn((function(i,n){var r=setTimeout((function(){e.a=null,n(Error("Network error!"))}),1e4);l.onGoogleLibraryLoad=function(){clearTimeout(r),i()},jn(hr(t)).then((function(){br()&&i()})).Ca((function(t){clearTimeout(r),e.a=null,n(t)}))}))}))},g(Ir),Er.prototype.confirm=function(e){return jn(this.a.confirm(e)).Ca(this.g)},Sr.prototype.a=null,Sr.prototype.reset=function(e,t,i,n,r){this.h=n||R(),this.j=e,this.s=t,this.g=i,delete this.a},Cr.prototype.toString=function(){return this.name};var Ar=new Cr("SEVERE",1e3),Tr=new Cr("WARNING",900),Pr=new Cr("CONFIG",700);function Rr(e){return e.j?e.j:e.g?Rr(e.g):(M("Root logger has no level set."),null)}kr.prototype.log=function(e,t,i){if(e.value>=Rr(this).value)for(w(t)&&(t=t()),e=new Sr(e,String(t),this.s),i&&(e.a=i),i=this;i;){var n=i,r=e;if(n.a)for(var s=0;t=n.a[s];s++)t(r);i=i.g}};var Or={},Nr=null;function Lr(){Nr||(Nr=new kr(""),Or[""]=Nr,Nr.j=Pr)}function Dr(){this.a=R()}var Mr=null;function xr(e){this.j=e||"",Mr||(Mr=new Dr),this.s=Mr}function Ur(e){return 10>e?"0"+e:String(e)}function Fr(e){xr.call(this,e)}function jr(){this.s=C(this.h,this),this.a=new Fr,this.a.g=!1,this.a.h=!1,this.g=this.a.a=!1,this.j={}}Dr.prototype.set=function(e){this.a=e},Dr.prototype.reset=function(){this.set(R())},Dr.prototype.get=function(){return this.a},xr.prototype.a=!0,xr.prototype.g=!0,xr.prototype.h=!1,N(Fr,xr),jr.prototype.h=function(e){if(!this.j[e.g]){var t=function(e,t){var i=[];if(i.push(e.j," "),e.g){var n=new Date(t.h);i.push("[",Ur(n.getFullYear()-2e3)+Ur(n.getMonth()+1)+Ur(n.getDate())+" "+Ur(n.getHours())+":"+Ur(n.getMinutes())+":"+Ur(n.getSeconds())+"."+Ur(Math.floor(n.getMilliseconds()/10)),"] ")}return i.push("[",function(e,t){t=(e=(e.h-t)/1e3).toFixed(3);var i=0;if(1>e)i=2;else for(;100>e;)i++,e*=10;for(;0<i--;)t=" "+t;return t}(t,e.s.get()),"s] "),i.push("[",t.g,"] "),i.push(t.s),e.h&&(t=t.a)&&i.push("\n",t instanceof Error?t.message:t.toString()),e.a&&i.push("\n"),i.join("")}(this.a,e),i=Hr;if(i){var n=function(e){if(e){if(e.value>=Ar.value)return"error";if(e.value>=Tr.value)return"warn";if(e.value>=Pr.value)return"log"}return"debug"}(e.j);!function(e,t,i,n){e[t]?e[t](i,n||""):e.log(i,n||"")}(i,n,t,e.a)}}};var Br,Hr=l.console;function Vr(e,t){Br&&Br.log(Ar,e,t)}Br=function e(t){var i;if(Lr(),!(i=Or[t])){i=new kr(t);var n=t.lastIndexOf("."),r=t.substr(n+1);(n=e(t.substr(0,n))).h||(n.h={}),n.h[r]=i,i.g=n,Or[t]=i}return i}("firebaseui");var $r=new jr;if(1!=$r.g){var Wr;Lr(),Wr=Nr;var zr=$r.s;Wr.a||(Wr.a=[]),Wr.a.push(zr),$r.g=!0}function Gr(e){Br&&Br.log(Tr,e,void 0)}function Kr(){this.a=("undefined"==typeof document?null:document)||{cookie:""}}function qr(e){e=(e.a.cookie||"").split(";");for(var t,i,n=[],r=[],s=0;s<e.length;s++)-1==(t=(i=q(e[s])).indexOf("="))?(n.push(""),r.push(i)):(n.push(i.substring(0,t)),r.push(i.substring(t+1)));return{keys:n,values:r}}(e=Kr.prototype).set=function(e,t,i,n,r,s){if(/[;=\s]/.test(e))throw Error('Invalid cookie name "'+e+'"');if(/[;\r\n]/.test(t))throw Error('Invalid cookie value "'+t+'"');d(i)||(i=-1),r=r?";domain="+r:"",n=n?";path="+n:"",s=s?";secure":"",i=0>i?"":0==i?";expires="+new Date(1970,1,1).toUTCString():";expires="+new Date(R()+1e3*i).toUTCString(),this.a.cookie=e+"="+t+r+n+i+s},e.get=function(e,t){for(var i,n=e+"=",r=(this.a.cookie||"").split(";"),s=0;s<r.length;s++){if(0==(i=q(r[s])).lastIndexOf(n,0))return i.substr(n.length);if(i==e)return""}return t},e.ja=function(){return qr(this).keys},e.la=function(){return qr(this).values},e.clear=function(){for(var e=qr(this).keys,t=e.length-1;0<=t;t--){var i=e[t];this.get(i),this.set(i,"",0,void 0,void 0)}};var Yr=new Kr;function Jr(){}function Xr(e,t,i,n){this.h=null!=e?e:-1,this.g=t||null,this.a=i||null,this.j=!!n}function Zr(e,t){this.g=e,this.a=t||null}function Qr(e){return{email:e.g,credential:e.a&&e.a.toJSON()}}function es(e){if(e&&e.email){var t=e.credential&&za.auth.AuthCredential.fromJSON(e.credential);return new Zr(e.email,t)}return null}function ts(e){this.a=e||null}function is(e){for(var t=[],i=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);255<r&&(t[i++]=255&r,r>>=8),t[i++]=r}return t}function ns(e){return j(e,(function(e){return 1<(e=e.toString(16)).length?e:"0"+e})).join("")}function rs(e){for(this.i=e,this.g=this.i.length/4,this.j=this.g+6,this.h=[[],[],[],[]],this.s=[[],[],[],[]],this.a=Array(ss*(this.j+1)),e=0;e<this.g;e++)this.a[e]=[this.i[4*e],this.i[4*e+1],this.i[4*e+2],this.i[4*e+3]];var t=Array(4);for(e=this.g;e<ss*(this.j+1);e++){if(t[0]=this.a[e-1][0],t[1]=this.a[e-1][1],t[2]=this.a[e-1][2],t[3]=this.a[e-1][3],0==e%this.g){var i=t,n=i[0];i[0]=i[1],i[1]=i[2],i[2]=i[3],i[3]=n,hs(t),t[0]^=ms[e/this.g][0],t[1]^=ms[e/this.g][1],t[2]^=ms[e/this.g][2],t[3]^=ms[e/this.g][3]}else 6<this.g&&4==e%this.g&&hs(t);this.a[e]=Array(4),this.a[e][0]=this.a[e-this.g][0]^t[0],this.a[e][1]=this.a[e-this.g][1]^t[1],this.a[e][2]=this.a[e-this.g][2]^t[2],this.a[e][3]=this.a[e-this.g][3]^t[3]}}a(Xr,Jr),Xr.prototype.set=function(e,t){Yr.set(e,t,this.h,this.g,this.a,this.j)},Xr.prototype.get=function(e){return Yr.get(e)||null},Xr.prototype.ra=function(e){var t=this.g,i=this.a;Yr.get(e),Yr.set(e,"",0,t,i)},rs.prototype.A=16;var ss=rs.prototype.A/4;function as(e,t){for(var i,n=0;n<ss;n++)for(var r=0;4>r;r++)i=t[i=4*r+n],e.h[n][r]=i}function os(e){for(var t=[],i=0;i<ss;i++)for(var n=0;4>n;n++)t[4*n+i]=e.h[i][n];return t}function cs(e,t){for(var i=0;4>i;i++)for(var n=0;4>n;n++)e.h[i][n]^=e.a[4*t+n][i]}function us(e,t){for(var i=0;4>i;i++)for(var n=0;4>n;n++)e.h[i][n]=t[e.h[i][n]]}function ls(e){for(var t=1;4>t;t++)for(var i=0;4>i;i++)e.s[t][i]=e.h[t][i];for(t=1;4>t;t++)for(i=0;4>i;i++)e.h[t][i]=e.s[t][(i+t)%ss]}function ds(e){for(var t=1;4>t;t++)for(var i=0;4>i;i++)e.s[t][(i+t)%ss]=e.h[t][i];for(t=1;4>t;t++)for(i=0;4>i;i++)e.h[t][i]=e.s[t][i]}function hs(e){e[0]=fs[e[0]],e[1]=fs[e[1]],e[2]=fs[e[2]],e[3]=fs[e[3]]}var fs=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],ps=[82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],ms=[[0,0,0,0],[1,0,0,0],[2,0,0,0],[4,0,0,0],[8,0,0,0],[16,0,0,0],[32,0,0,0],[64,0,0,0],[128,0,0,0],[27,0,0,0],[54,0,0,0]],gs=[0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,178,180,182,184,186,188,190,192,194,196,198,200,202,204,206,208,210,212,214,216,218,220,222,224,226,228,230,232,234,236,238,240,242,244,246,248,250,252,254,27,25,31,29,19,17,23,21,11,9,15,13,3,1,7,5,59,57,63,61,51,49,55,53,43,41,47,45,35,33,39,37,91,89,95,93,83,81,87,85,75,73,79,77,67,65,71,69,123,121,127,125,115,113,119,117,107,105,111,109,99,97,103,101,155,153,159,157,147,145,151,149,139,137,143,141,131,129,135,133,187,185,191,189,179,177,183,181,171,169,175,173,163,161,167,165,219,217,223,221,211,209,215,213,203,201,207,205,195,193,199,197,251,249,255,253,243,241,247,245,235,233,239,237,227,225,231,229],vs=[0,3,6,5,12,15,10,9,24,27,30,29,20,23,18,17,48,51,54,53,60,63,58,57,40,43,46,45,36,39,34,33,96,99,102,101,108,111,106,105,120,123,126,125,116,119,114,113,80,83,86,85,92,95,90,89,72,75,78,77,68,71,66,65,192,195,198,197,204,207,202,201,216,219,222,221,212,215,210,209,240,243,246,245,252,255,250,249,232,235,238,237,228,231,226,225,160,163,166,165,172,175,170,169,184,187,190,189,180,183,178,177,144,147,150,149,156,159,154,153,136,139,142,141,132,135,130,129,155,152,157,158,151,148,145,146,131,128,133,134,143,140,137,138,171,168,173,174,167,164,161,162,179,176,181,182,191,188,185,186,251,248,253,254,247,244,241,242,227,224,229,230,239,236,233,234,203,200,205,206,199,196,193,194,211,208,213,214,223,220,217,218,91,88,93,94,87,84,81,82,67,64,69,70,79,76,73,74,107,104,109,110,103,100,97,98,115,112,117,118,127,124,121,122,59,56,61,62,55,52,49,50,35,32,37,38,47,44,41,42,11,8,13,14,7,4,1,2,19,16,21,22,31,28,25,26],bs=[0,9,18,27,36,45,54,63,72,65,90,83,108,101,126,119,144,153,130,139,180,189,166,175,216,209,202,195,252,245,238,231,59,50,41,32,31,22,13,4,115,122,97,104,87,94,69,76,171,162,185,176,143,134,157,148,227,234,241,248,199,206,213,220,118,127,100,109,82,91,64,73,62,55,44,37,26,19,8,1,230,239,244,253,194,203,208,217,174,167,188,181,138,131,152,145,77,68,95,86,105,96,123,114,5,12,23,30,33,40,51,58,221,212,207,198,249,240,235,226,149,156,135,142,177,184,163,170,236,229,254,247,200,193,218,211,164,173,182,191,128,137,146,155,124,117,110,103,88,81,74,67,52,61,38,47,16,25,2,11,215,222,197,204,243,250,225,232,159,150,141,132,187,178,169,160,71,78,85,92,99,106,113,120,15,6,29,20,43,34,57,48,154,147,136,129,190,183,172,165,210,219,192,201,246,255,228,237,10,3,24,17,46,39,60,53,66,75,80,89,102,111,116,125,161,168,179,186,133,140,151,158,233,224,251,242,205,196,223,214,49,56,35,42,21,28,7,14,121,112,107,98,93,84,79,70],ys=[0,11,22,29,44,39,58,49,88,83,78,69,116,127,98,105,176,187,166,173,156,151,138,129,232,227,254,245,196,207,210,217,123,112,109,102,87,92,65,74,35,40,53,62,15,4,25,18,203,192,221,214,231,236,241,250,147,152,133,142,191,180,169,162,246,253,224,235,218,209,204,199,174,165,184,179,130,137,148,159,70,77,80,91,106,97,124,119,30,21,8,3,50,57,36,47,141,134,155,144,161,170,183,188,213,222,195,200,249,242,239,228,61,54,43,32,17,26,7,12,101,110,115,120,73,66,95,84,247,252,225,234,219,208,205,198,175,164,185,178,131,136,149,158,71,76,81,90,107,96,125,118,31,20,9,2,51,56,37,46,140,135,154,145,160,171,182,189,212,223,194,201,248,243,238,229,60,55,42,33,16,27,6,13,100,111,114,121,72,67,94,85,1,10,23,28,45,38,59,48,89,82,79,68,117,126,99,104,177,186,167,172,157,150,139,128,233,226,255,244,197,206,211,216,122,113,108,103,86,93,64,75,34,41,52,63,14,5,24,19,202,193,220,215,230,237,240,251,146,153,132,143,190,181,168,163],ws=[0,13,26,23,52,57,46,35,104,101,114,127,92,81,70,75,208,221,202,199,228,233,254,243,184,181,162,175,140,129,150,155,187,182,161,172,143,130,149,152,211,222,201,196,231,234,253,240,107,102,113,124,95,82,69,72,3,14,25,20,55,58,45,32,109,96,119,122,89,84,67,78,5,8,31,18,49,60,43,38,189,176,167,170,137,132,147,158,213,216,207,194,225,236,251,246,214,219,204,193,226,239,248,245,190,179,164,169,138,135,144,157,6,11,28,17,50,63,40,37,110,99,116,121,90,87,64,77,218,215,192,205,238,227,244,249,178,191,168,165,134,139,156,145,10,7,16,29,62,51,36,41,98,111,120,117,86,91,76,65,97,108,123,118,85,88,79,66,9,4,19,30,61,48,39,42,177,188,171,166,133,136,159,146,217,212,195,206,237,224,247,250,183,186,173,160,131,142,153,148,223,210,197,200,235,230,241,252,103,106,125,112,83,94,73,68,15,2,21,24,59,54,33,44,12,1,22,27,56,53,34,47,100,105,126,115,80,93,74,71,220,209,198,203,232,229,242,255,180,185,174,163,128,141,154,151],_s=[0,14,28,18,56,54,36,42,112,126,108,98,72,70,84,90,224,238,252,242,216,214,196,202,144,158,140,130,168,166,180,186,219,213,199,201,227,237,255,241,171,165,183,185,147,157,143,129,59,53,39,41,3,13,31,17,75,69,87,89,115,125,111,97,173,163,177,191,149,155,137,135,221,211,193,207,229,235,249,247,77,67,81,95,117,123,105,103,61,51,33,47,5,11,25,23,118,120,106,100,78,64,82,92,6,8,26,20,62,48,34,44,150,152,138,132,174,160,178,188,230,232,250,244,222,208,194,204,65,79,93,83,121,119,101,107,49,63,45,35,9,7,21,27,161,175,189,179,153,151,133,139,209,223,205,195,233,231,245,251,154,148,134,136,162,172,190,176,234,228,246,248,210,220,206,192,122,116,102,104,66,76,94,80,10,4,22,24,50,60,46,32,236,226,240,254,212,218,200,198,156,146,128,142,164,170,184,182,12,2,16,30,52,58,40,38,124,114,96,110,68,74,88,86,55,57,43,37,15,1,19,29,71,73,91,85,127,113,99,109,215,217,203,197,239,225,243,253,167,169,187,181,159,145,131,141];function Is(e,t){e=new rs(Ss(e));for(var i,n=(t=is(t)).splice(0,16),r="";n.length;){i=16-n.length;for(var s=0;s<i;s++)n.push(0);for(as(i=e,n),cs(i,0),n=1;n<i.j;++n){us(i,fs),ls(i),s=i.h;for(var a=i.s[0],o=0;4>o;o++)a[0]=s[0][o],a[1]=s[1][o],a[2]=s[2][o],a[3]=s[3][o],s[0][o]=gs[a[0]]^vs[a[1]]^a[2]^a[3],s[1][o]=a[0]^gs[a[1]]^vs[a[2]]^a[3],s[2][o]=a[0]^a[1]^gs[a[2]]^vs[a[3]],s[3][o]=vs[a[0]]^a[1]^a[2]^gs[a[3]];cs(i,n)}us(i,fs),ls(i),cs(i,i.j),r+=ns(os(i)),n=t.splice(0,16)}return r}function Es(e,t){e=new rs(Ss(e));for(var i=[],n=0;n<t.length;n+=2)i.push(parseInt(t.substring(n,n+2),16));var r=i.splice(0,16);for(t="";r.length;){for(as(n=e,r),cs(n,n.j),r=1;r<n.j;++r){ds(n),us(n,ps),cs(n,n.j-r);for(var s=n.h,a=n.s[0],o=0;4>o;o++)a[0]=s[0][o],a[1]=s[1][o],a[2]=s[2][o],a[3]=s[3][o],s[0][o]=_s[a[0]]^ys[a[1]]^ws[a[2]]^bs[a[3]],s[1][o]=bs[a[0]]^_s[a[1]]^ys[a[2]]^ws[a[3]],s[2][o]=ws[a[0]]^bs[a[1]]^_s[a[2]]^ys[a[3]],s[3][o]=ys[a[0]]^ws[a[1]]^bs[a[2]]^_s[a[3]]}if(ds(n),us(n,ps),cs(n,0),8192>=(n=os(n)).length)n=String.fromCharCode.apply(null,n);else{for(r="",s=0;s<n.length;s+=8192)r+=String.fromCharCode.apply(null,K(n,s,s+8192));n=r}t+=n,r=i.splice(0,16)}return t.replace(/(\x00)+$/,"")}function Ss(e){for(var t=32-(e=is(e.substring(0,32))).length,i=0;i<t;i++)e.push(0);return e}function ks(e){var t=[];return As(new Cs,e,t),t.join("")}function Cs(){}function As(e,t,i){if(null==t)i.push("null");else{if("object"==typeof t){if(b(t)){var n=t;t=n.length,i.push("[");for(var r="",s=0;s<t;s++)i.push(r),As(e,n[s],i),r=",";return void i.push("]")}if(!(t instanceof String||t instanceof Number||t instanceof Boolean)){for(n in i.push("{"),r="",t)Object.prototype.hasOwnProperty.call(t,n)&&("function"!=typeof(s=t[n])&&(i.push(r),Rs(n,i),i.push(":"),As(e,s,i),r=","));return void i.push("}")}t=t.valueOf()}switch(typeof t){case"string":Rs(t,i);break;case"number":i.push(isFinite(t)&&!isNaN(t)?String(t):"null");break;case"boolean":i.push(String(t));break;case"function":i.push("null");break;default:throw Error("Unknown type: "+typeof t)}}}var Ts={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Ps=/\uffff/.test("￿")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Rs(e,t){t.push('"',e.replace(Ps,(function(e){var t=Ts[e];return t||(t="\\u"+(65536|e.charCodeAt(0)).toString(16).substr(1),Ts[e]=t),t})),'"')}function Os(e){this.a=e}function Ns(){}function Ls(e){this.a=e}function Ds(e){if(!e.a)return!1;try{return e.a.setItem("__sak","1"),e.a.removeItem("__sak"),!0}catch(e){return!1}}function Ms(){var e=null;try{e=window.localStorage||null}catch(e){}this.a=e}function xs(){var e=null;try{e=window.sessionStorage||null}catch(e){}this.a=e}function Us(e,t){this.g=e,this.a=t+"::"}Os.prototype.set=function(e,t){d(t)?this.a.set(e,ks(t)):this.a.ra(e)},Os.prototype.get=function(e){try{var t=this.a.get(e)}catch(e){return}if(null!==t)try{return JSON.parse(t)}catch(e){throw"Storage: Invalid value was encountered"}},N(Ns,Jr),Ns.prototype.clear=function(){var e=de(this.ha(!0)),t=this;U(e,(function(e){t.ra(e)}))},N(Ls,Ns),(e=Ls.prototype).set=function(e,t){try{this.a.setItem(e,t)}catch(e){if(0==this.a.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded"}},e.get=function(e){if(!h(e=this.a.getItem(e))&&null!==e)throw"Storage mechanism: Invalid value was encountered";return e},e.ra=function(e){this.a.removeItem(e)},e.ha=function(e){var t=0,i=this.a,n=new ue;return n.next=function(){if(t>=i.length)throw ce;var n=i.key(t++);if(e)return n;if(!h(n=i.getItem(n)))throw"Storage mechanism: Invalid value was encountered";return n},n},e.clear=function(){this.a.clear()},e.key=function(e){return this.a.key(e)},N(Ms,Ls),N(xs,Ls),N(Us,Ns),Us.prototype.set=function(e,t){this.g.set(this.a+e,t)},Us.prototype.get=function(e){return this.g.get(this.a+e)},Us.prototype.ra=function(e){this.g.ra(this.a+e)},Us.prototype.ha=function(e){var t=this.g.ha(!0),i=this,n=new ue;return n.next=function(){for(var n=t.next();n.substr(0,i.a.length)!=i.a;)n=t.next();return e?n.substr(i.a.length):i.g.get(n)},n},Ds(new Ms);var Fs=new xs,js=new Os(Ds(Fs)?new Us(Fs,"firebaseui"):null),Bs={name:"pendingEmailCredential",storage:js},Hs={name:"redirectStatus",storage:js},Vs={name:"redirectUrl",storage:js},$s={name:"emailForSignIn",storage:new Os(new Xr(3600,"/"))},Ws={name:"pendingEncryptedCredential",storage:new Os(new Xr(3600,"/"))};function zs(e,t){return e.storage.get(t?e.name+":"+t:e.name)}function Gs(e,t){e.storage.a.ra(t?e.name+":"+t:e.name)}function Ks(e,t,i){e.storage.set(i?e.name+":"+i:e.name,t)}function qs(e){return zs(Vs,e)||null}function Ys(e){return es(e=zs(Bs,e)||null)}function Js(e){Gs(Bs,e)}function Xs(e,t){Ks(Bs,Qr(e),t)}function Zs(e){return(e=zs(Hs,e)||null)&&void 0!==e.tenantId?new ts(e.tenantId):null}function Qs(){this.W={}}function ea(e,t,i){if(t.toLowerCase()in e.W)throw Error("Configuration "+t+" has already been defined.");e.W[t.toLowerCase()]=i}function ta(e,t,i){if(!(t.toLowerCase()in e.W))throw Error("Configuration "+t+" is not defined.");e.W[t.toLowerCase()]=i}function ia(e,t){if(!(e=e.get(t)))throw Error("Configuration "+t+" is required.");return e}function na(){this.g=void 0,this.a={}}function ra(e,t,i,n){for(var r=0;r<t.length;r++){var s=t.charAt(r);e.a[s]||(e.a[s]=new na),e=e.a[s]}if(n&&void 0!==e.g)throw Error('The collection already contains the key "'+t+'"');e.g=i}function sa(e,t){for(var i in void 0!==e.g&&t.push(e.g),e.a)sa(e.a[i],t)}function aa(e,t,i){for(var n in void 0!==e.g&&i.push(t),e.a)aa(e.a[n],t+n,i)}function oa(e){for(this.a=e,this.g=new na,e=0;e<this.a.length;e++){var t=this.g.get("+"+this.a[e].b);t?t.push(this.a[e]):this.g.add("+"+this.a[e].b,[this.a[e]])}}function ca(e,t){var i={},n=0;for(void 0!==(e=e.g).g&&(i[n]=e.g);n<t.length;n++){var r=t.charAt(n);if(!(r in e.a))break;void 0!==(e=e.a[r]).g&&(i[n]=e.g)}for(var s in i)if(i.hasOwnProperty(s))return i[s];return[]}function ua(e){for(var t=0;t<fa.length;t++)if(fa[t].c===e)return fa[t];return null}function la(e){e=e.toUpperCase();for(var t=[],i=0;i<fa.length;i++)fa[i].f===e&&t.push(fa[i]);return t}function da(e){if(0<e.length&&"+"==e.charAt(0)){e=e.substring(1);for(var t=[],i=0;i<fa.length;i++)fa[i].b==e&&t.push(fa[i]);e=t}else e=la(e);return e}function ha(e){e.sort((function(e,t){return e.name.localeCompare(t.name,"en")}))}Qs.prototype.get=function(e){if(!(e.toLowerCase()in this.W))throw Error("Configuration "+e+" is not defined.");return this.W[e.toLowerCase()]},(e=na.prototype).set=function(e,t){ra(this,e,t,!1)},e.add=function(e,t){ra(this,e,t,!0)},e.get=function(e){e:{for(var t=this,i=0;i<e.length;i++)if(!(t=t.a[e.charAt(i)])){e=void 0;break e}e=t}return e?e.g:void 0},e.la=function(){var e=[];return sa(this,e),e},e.ja=function(){var e=[];return aa(this,"",e),e},e.clear=function(){this.a={},this.g=void 0};var fa=[{name:"Afghanistan",c:"93-AF-0",b:"93",f:"AF"},{name:"Åland Islands",c:"358-AX-0",b:"358",f:"AX"},{name:"Albania",c:"355-AL-0",b:"355",f:"AL"},{name:"Algeria",c:"213-DZ-0",b:"213",f:"DZ"},{name:"American Samoa",c:"1-AS-0",b:"1",f:"AS"},{name:"Andorra",c:"376-AD-0",b:"376",f:"AD"},{name:"Angola",c:"244-AO-0",b:"244",f:"AO"},{name:"Anguilla",c:"1-AI-0",b:"1",f:"AI"},{name:"Antigua and Barbuda",c:"1-AG-0",b:"1",f:"AG"},{name:"Argentina",c:"54-AR-0",b:"54",f:"AR"},{name:"Armenia",c:"374-AM-0",b:"374",f:"AM"},{name:"Aruba",c:"297-AW-0",b:"297",f:"AW"},{name:"Ascension Island",c:"247-AC-0",b:"247",f:"AC"},{name:"Australia",c:"61-AU-0",b:"61",f:"AU"},{name:"Austria",c:"43-AT-0",b:"43",f:"AT"},{name:"Azerbaijan",c:"994-AZ-0",b:"994",f:"AZ"},{name:"Bahamas",c:"1-BS-0",b:"1",f:"BS"},{name:"Bahrain",c:"973-BH-0",b:"973",f:"BH"},{name:"Bangladesh",c:"880-BD-0",b:"880",f:"BD"},{name:"Barbados",c:"1-BB-0",b:"1",f:"BB"},{name:"Belarus",c:"375-BY-0",b:"375",f:"BY"},{name:"Belgium",c:"32-BE-0",b:"32",f:"BE"},{name:"Belize",c:"501-BZ-0",b:"501",f:"BZ"},{name:"Benin",c:"229-BJ-0",b:"229",f:"BJ"},{name:"Bermuda",c:"1-BM-0",b:"1",f:"BM"},{name:"Bhutan",c:"975-BT-0",b:"975",f:"BT"},{name:"Bolivia",c:"591-BO-0",b:"591",f:"BO"},{name:"Bosnia and Herzegovina",c:"387-BA-0",b:"387",f:"BA"},{name:"Botswana",c:"267-BW-0",b:"267",f:"BW"},{name:"Brazil",c:"55-BR-0",b:"55",f:"BR"},{name:"British Indian Ocean Territory",c:"246-IO-0",b:"246",f:"IO"},{name:"British Virgin Islands",c:"1-VG-0",b:"1",f:"VG"},{name:"Brunei",c:"673-BN-0",b:"673",f:"BN"},{name:"Bulgaria",c:"359-BG-0",b:"359",f:"BG"},{name:"Burkina Faso",c:"226-BF-0",b:"226",f:"BF"},{name:"Burundi",c:"257-BI-0",b:"257",f:"BI"},{name:"Cambodia",c:"855-KH-0",b:"855",f:"KH"},{name:"Cameroon",c:"237-CM-0",b:"237",f:"CM"},{name:"Canada",c:"1-CA-0",b:"1",f:"CA"},{name:"Cape Verde",c:"238-CV-0",b:"238",f:"CV"},{name:"Caribbean Netherlands",c:"599-BQ-0",b:"599",f:"BQ"},{name:"Cayman Islands",c:"1-KY-0",b:"1",f:"KY"},{name:"Central African Republic",c:"236-CF-0",b:"236",f:"CF"},{name:"Chad",c:"235-TD-0",b:"235",f:"TD"},{name:"Chile",c:"56-CL-0",b:"56",f:"CL"},{name:"China",c:"86-CN-0",b:"86",f:"CN"},{name:"Christmas Island",c:"61-CX-0",b:"61",f:"CX"},{name:"Cocos [Keeling] Islands",c:"61-CC-0",b:"61",f:"CC"},{name:"Colombia",c:"57-CO-0",b:"57",f:"CO"},{name:"Comoros",c:"269-KM-0",b:"269",f:"KM"},{name:"Democratic Republic Congo",c:"243-CD-0",b:"243",f:"CD"},{name:"Republic of Congo",c:"242-CG-0",b:"242",f:"CG"},{name:"Cook Islands",c:"682-CK-0",b:"682",f:"CK"},{name:"Costa Rica",c:"506-CR-0",b:"506",f:"CR"},{name:"Côte d'Ivoire",c:"225-CI-0",b:"225",f:"CI"},{name:"Croatia",c:"385-HR-0",b:"385",f:"HR"},{name:"Cuba",c:"53-CU-0",b:"53",f:"CU"},{name:"Curaçao",c:"599-CW-0",b:"599",f:"CW"},{name:"Cyprus",c:"357-CY-0",b:"357",f:"CY"},{name:"Czech Republic",c:"420-CZ-0",b:"420",f:"CZ"},{name:"Denmark",c:"45-DK-0",b:"45",f:"DK"},{name:"Djibouti",c:"253-DJ-0",b:"253",f:"DJ"},{name:"Dominica",c:"1-DM-0",b:"1",f:"DM"},{name:"Dominican Republic",c:"1-DO-0",b:"1",f:"DO"},{name:"East Timor",c:"670-TL-0",b:"670",f:"TL"},{name:"Ecuador",c:"593-EC-0",b:"593",f:"EC"},{name:"Egypt",c:"20-EG-0",b:"20",f:"EG"},{name:"El Salvador",c:"503-SV-0",b:"503",f:"SV"},{name:"Equatorial Guinea",c:"240-GQ-0",b:"240",f:"GQ"},{name:"Eritrea",c:"291-ER-0",b:"291",f:"ER"},{name:"Estonia",c:"372-EE-0",b:"372",f:"EE"},{name:"Ethiopia",c:"251-ET-0",b:"251",f:"ET"},{name:"Falkland Islands [Islas Malvinas]",c:"500-FK-0",b:"500",f:"FK"},{name:"Faroe Islands",c:"298-FO-0",b:"298",f:"FO"},{name:"Fiji",c:"679-FJ-0",b:"679",f:"FJ"},{name:"Finland",c:"358-FI-0",b:"358",f:"FI"},{name:"France",c:"33-FR-0",b:"33",f:"FR"},{name:"French Guiana",c:"594-GF-0",b:"594",f:"GF"},{name:"French Polynesia",c:"689-PF-0",b:"689",f:"PF"},{name:"Gabon",c:"241-GA-0",b:"241",f:"GA"},{name:"Gambia",c:"220-GM-0",b:"220",f:"GM"},{name:"Georgia",c:"995-GE-0",b:"995",f:"GE"},{name:"Germany",c:"49-DE-0",b:"49",f:"DE"},{name:"Ghana",c:"233-GH-0",b:"233",f:"GH"},{name:"Gibraltar",c:"350-GI-0",b:"350",f:"GI"},{name:"Greece",c:"30-GR-0",b:"30",f:"GR"},{name:"Greenland",c:"299-GL-0",b:"299",f:"GL"},{name:"Grenada",c:"1-GD-0",b:"1",f:"GD"},{name:"Guadeloupe",c:"590-GP-0",b:"590",f:"GP"},{name:"Guam",c:"1-GU-0",b:"1",f:"GU"},{name:"Guatemala",c:"502-GT-0",b:"502",f:"GT"},{name:"Guernsey",c:"44-GG-0",b:"44",f:"GG"},{name:"Guinea Conakry",c:"224-GN-0",b:"224",f:"GN"},{name:"Guinea-Bissau",c:"245-GW-0",b:"245",f:"GW"},{name:"Guyana",c:"592-GY-0",b:"592",f:"GY"},{name:"Haiti",c:"509-HT-0",b:"509",f:"HT"},{name:"Heard Island and McDonald Islands",c:"672-HM-0",b:"672",f:"HM"},{name:"Honduras",c:"504-HN-0",b:"504",f:"HN"},{name:"Hong Kong",c:"852-HK-0",b:"852",f:"HK"},{name:"Hungary",c:"36-HU-0",b:"36",f:"HU"},{name:"Iceland",c:"354-IS-0",b:"354",f:"IS"},{name:"India",c:"91-IN-0",b:"91",f:"IN"},{name:"Indonesia",c:"62-ID-0",b:"62",f:"ID"},{name:"Iran",c:"98-IR-0",b:"98",f:"IR"},{name:"Iraq",c:"964-IQ-0",b:"964",f:"IQ"},{name:"Ireland",c:"353-IE-0",b:"353",f:"IE"},{name:"Isle of Man",c:"44-IM-0",b:"44",f:"IM"},{name:"Israel",c:"972-IL-0",b:"972",f:"IL"},{name:"Italy",c:"39-IT-0",b:"39",f:"IT"},{name:"Jamaica",c:"1-JM-0",b:"1",f:"JM"},{name:"Japan",c:"81-JP-0",b:"81",f:"JP"},{name:"Jersey",c:"44-JE-0",b:"44",f:"JE"},{name:"Jordan",c:"962-JO-0",b:"962",f:"JO"},{name:"Kazakhstan",c:"7-KZ-0",b:"7",f:"KZ"},{name:"Kenya",c:"254-KE-0",b:"254",f:"KE"},{name:"Kiribati",c:"686-KI-0",b:"686",f:"KI"},{name:"Kosovo",c:"377-XK-0",b:"377",f:"XK"},{name:"Kosovo",c:"381-XK-0",b:"381",f:"XK"},{name:"Kosovo",c:"386-XK-0",b:"386",f:"XK"},{name:"Kuwait",c:"965-KW-0",b:"965",f:"KW"},{name:"Kyrgyzstan",c:"996-KG-0",b:"996",f:"KG"},{name:"Laos",c:"856-LA-0",b:"856",f:"LA"},{name:"Latvia",c:"371-LV-0",b:"371",f:"LV"},{name:"Lebanon",c:"961-LB-0",b:"961",f:"LB"},{name:"Lesotho",c:"266-LS-0",b:"266",f:"LS"},{name:"Liberia",c:"231-LR-0",b:"231",f:"LR"},{name:"Libya",c:"218-LY-0",b:"218",f:"LY"},{name:"Liechtenstein",c:"423-LI-0",b:"423",f:"LI"},{name:"Lithuania",c:"370-LT-0",b:"370",f:"LT"},{name:"Luxembourg",c:"352-LU-0",b:"352",f:"LU"},{name:"Macau",c:"853-MO-0",b:"853",f:"MO"},{name:"Macedonia",c:"389-MK-0",b:"389",f:"MK"},{name:"Madagascar",c:"261-MG-0",b:"261",f:"MG"},{name:"Malawi",c:"265-MW-0",b:"265",f:"MW"},{name:"Malaysia",c:"60-MY-0",b:"60",f:"MY"},{name:"Maldives",c:"960-MV-0",b:"960",f:"MV"},{name:"Mali",c:"223-ML-0",b:"223",f:"ML"},{name:"Malta",c:"356-MT-0",b:"356",f:"MT"},{name:"Marshall Islands",c:"692-MH-0",b:"692",f:"MH"},{name:"Martinique",c:"596-MQ-0",b:"596",f:"MQ"},{name:"Mauritania",c:"222-MR-0",b:"222",f:"MR"},{name:"Mauritius",c:"230-MU-0",b:"230",f:"MU"},{name:"Mayotte",c:"262-YT-0",b:"262",f:"YT"},{name:"Mexico",c:"52-MX-0",b:"52",f:"MX"},{name:"Micronesia",c:"691-FM-0",b:"691",f:"FM"},{name:"Moldova",c:"373-MD-0",b:"373",f:"MD"},{name:"Monaco",c:"377-MC-0",b:"377",f:"MC"},{name:"Mongolia",c:"976-MN-0",b:"976",f:"MN"},{name:"Montenegro",c:"382-ME-0",b:"382",f:"ME"},{name:"Montserrat",c:"1-MS-0",b:"1",f:"MS"},{name:"Morocco",c:"212-MA-0",b:"212",f:"MA"},{name:"Mozambique",c:"258-MZ-0",b:"258",f:"MZ"},{name:"Myanmar [Burma]",c:"95-MM-0",b:"95",f:"MM"},{name:"Namibia",c:"264-NA-0",b:"264",f:"NA"},{name:"Nauru",c:"674-NR-0",b:"674",f:"NR"},{name:"Nepal",c:"977-NP-0",b:"977",f:"NP"},{name:"Netherlands",c:"31-NL-0",b:"31",f:"NL"},{name:"New Caledonia",c:"687-NC-0",b:"687",f:"NC"},{name:"New Zealand",c:"64-NZ-0",b:"64",f:"NZ"},{name:"Nicaragua",c:"505-NI-0",b:"505",f:"NI"},{name:"Niger",c:"227-NE-0",b:"227",f:"NE"},{name:"Nigeria",c:"234-NG-0",b:"234",f:"NG"},{name:"Niue",c:"683-NU-0",b:"683",f:"NU"},{name:"Norfolk Island",c:"672-NF-0",b:"672",f:"NF"},{name:"North Korea",c:"850-KP-0",b:"850",f:"KP"},{name:"Northern Mariana Islands",c:"1-MP-0",b:"1",f:"MP"},{name:"Norway",c:"47-NO-0",b:"47",f:"NO"},{name:"Oman",c:"968-OM-0",b:"968",f:"OM"},{name:"Pakistan",c:"92-PK-0",b:"92",f:"PK"},{name:"Palau",c:"680-PW-0",b:"680",f:"PW"},{name:"Palestinian Territories",c:"970-PS-0",b:"970",f:"PS"},{name:"Panama",c:"507-PA-0",b:"507",f:"PA"},{name:"Papua New Guinea",c:"675-PG-0",b:"675",f:"PG"},{name:"Paraguay",c:"595-PY-0",b:"595",f:"PY"},{name:"Peru",c:"51-PE-0",b:"51",f:"PE"},{name:"Philippines",c:"63-PH-0",b:"63",f:"PH"},{name:"Poland",c:"48-PL-0",b:"48",f:"PL"},{name:"Portugal",c:"351-PT-0",b:"351",f:"PT"},{name:"Puerto Rico",c:"1-PR-0",b:"1",f:"PR"},{name:"Qatar",c:"974-QA-0",b:"974",f:"QA"},{name:"Réunion",c:"262-RE-0",b:"262",f:"RE"},{name:"Romania",c:"40-RO-0",b:"40",f:"RO"},{name:"Russia",c:"7-RU-0",b:"7",f:"RU"},{name:"Rwanda",c:"250-RW-0",b:"250",f:"RW"},{name:"Saint Barthélemy",c:"590-BL-0",b:"590",f:"BL"},{name:"Saint Helena",c:"290-SH-0",b:"290",f:"SH"},{name:"St. Kitts",c:"1-KN-0",b:"1",f:"KN"},{name:"St. Lucia",c:"1-LC-0",b:"1",f:"LC"},{name:"Saint Martin",c:"590-MF-0",b:"590",f:"MF"},{name:"Saint Pierre and Miquelon",c:"508-PM-0",b:"508",f:"PM"},{name:"St. Vincent",c:"1-VC-0",b:"1",f:"VC"},{name:"Samoa",c:"685-WS-0",b:"685",f:"WS"},{name:"San Marino",c:"378-SM-0",b:"378",f:"SM"},{name:"São Tomé and Príncipe",c:"239-ST-0",b:"239",f:"ST"},{name:"Saudi Arabia",c:"966-SA-0",b:"966",f:"SA"},{name:"Senegal",c:"221-SN-0",b:"221",f:"SN"},{name:"Serbia",c:"381-RS-0",b:"381",f:"RS"},{name:"Seychelles",c:"248-SC-0",b:"248",f:"SC"},{name:"Sierra Leone",c:"232-SL-0",b:"232",f:"SL"},{name:"Singapore",c:"65-SG-0",b:"65",f:"SG"},{name:"Sint Maarten",c:"1-SX-0",b:"1",f:"SX"},{name:"Slovakia",c:"421-SK-0",b:"421",f:"SK"},{name:"Slovenia",c:"386-SI-0",b:"386",f:"SI"},{name:"Solomon Islands",c:"677-SB-0",b:"677",f:"SB"},{name:"Somalia",c:"252-SO-0",b:"252",f:"SO"},{name:"South Africa",c:"27-ZA-0",b:"27",f:"ZA"},{name:"South Georgia and the South Sandwich Islands",c:"500-GS-0",b:"500",f:"GS"},{name:"South Korea",c:"82-KR-0",b:"82",f:"KR"},{name:"South Sudan",c:"211-SS-0",b:"211",f:"SS"},{name:"Spain",c:"34-ES-0",b:"34",f:"ES"},{name:"Sri Lanka",c:"94-LK-0",b:"94",f:"LK"},{name:"Sudan",c:"249-SD-0",b:"249",f:"SD"},{name:"Suriname",c:"597-SR-0",b:"597",f:"SR"},{name:"Svalbard and Jan Mayen",c:"47-SJ-0",b:"47",f:"SJ"},{name:"Swaziland",c:"268-SZ-0",b:"268",f:"SZ"},{name:"Sweden",c:"46-SE-0",b:"46",f:"SE"},{name:"Switzerland",c:"41-CH-0",b:"41",f:"CH"},{name:"Syria",c:"963-SY-0",b:"963",f:"SY"},{name:"Taiwan",c:"886-TW-0",b:"886",f:"TW"},{name:"Tajikistan",c:"992-TJ-0",b:"992",f:"TJ"},{name:"Tanzania",c:"255-TZ-0",b:"255",f:"TZ"},{name:"Thailand",c:"66-TH-0",b:"66",f:"TH"},{name:"Togo",c:"228-TG-0",b:"228",f:"TG"},{name:"Tokelau",c:"690-TK-0",b:"690",f:"TK"},{name:"Tonga",c:"676-TO-0",b:"676",f:"TO"},{name:"Trinidad/Tobago",c:"1-TT-0",b:"1",f:"TT"},{name:"Tunisia",c:"216-TN-0",b:"216",f:"TN"},{name:"Turkey",c:"90-TR-0",b:"90",f:"TR"},{name:"Turkmenistan",c:"993-TM-0",b:"993",f:"TM"},{name:"Turks and Caicos Islands",c:"1-TC-0",b:"1",f:"TC"},{name:"Tuvalu",c:"688-TV-0",b:"688",f:"TV"},{name:"U.S. Virgin Islands",c:"1-VI-0",b:"1",f:"VI"},{name:"Uganda",c:"256-UG-0",b:"256",f:"UG"},{name:"Ukraine",c:"380-UA-0",b:"380",f:"UA"},{name:"United Arab Emirates",c:"971-AE-0",b:"971",f:"AE"},{name:"United Kingdom",c:"44-GB-0",b:"44",f:"GB"},{name:"United States",c:"1-US-0",b:"1",f:"US"},{name:"Uruguay",c:"598-UY-0",b:"598",f:"UY"},{name:"Uzbekistan",c:"998-UZ-0",b:"998",f:"UZ"},{name:"Vanuatu",c:"678-VU-0",b:"678",f:"VU"},{name:"Vatican City",c:"379-VA-0",b:"379",f:"VA"},{name:"Venezuela",c:"58-VE-0",b:"58",f:"VE"},{name:"Vietnam",c:"84-VN-0",b:"84",f:"VN"},{name:"Wallis and Futuna",c:"681-WF-0",b:"681",f:"WF"},{name:"Western Sahara",c:"212-EH-0",b:"212",f:"EH"},{name:"Yemen",c:"967-YE-0",b:"967",f:"YE"},{name:"Zambia",c:"260-ZM-0",b:"260",f:"ZM"},{name:"Zimbabwe",c:"263-ZW-0",b:"263",f:"ZW"}];ha(fa);var pa=new oa(fa);function ma(e,t){this.a=e,this.Aa=t}function ga(e){e=q(e);var t=ca(pa,e);return 0<t.length?new ma("1"==t[0].b?"1-US-0":t[0].c,q(e.substr(t[0].b.length+1))):null}function va(e){var t=ua(e.a);if(!t)throw Error("Country ID "+e.a+" not found.");return"+"+t.b+e.Aa}function ba(e,t){for(var i=0;i<e.length;i++)if(!H(ya,e[i])&&(null!==wa&&e[i]in wa||H(t,e[i])))return e[i];return null}var ya=["emailLink","password","phone"],wa={"facebook.com":"FacebookAuthProvider","github.com":"GithubAuthProvider","google.com":"GoogleAuthProvider",password:"EmailAuthProvider","twitter.com":"TwitterAuthProvider",phone:"PhoneAuthProvider"};function _a(){this.a=new Qs,ea(this.a,"autoUpgradeAnonymousUsers"),ea(this.a,"callbacks"),ea(this.a,"credentialHelper",Xa),ea(this.a,"immediateFederatedRedirect",!1),ea(this.a,"popupMode",!1),ea(this.a,"privacyPolicyUrl"),ea(this.a,"queryParameterForSignInSuccessUrl","signInSuccessUrl"),ea(this.a,"queryParameterForWidgetMode","mode"),ea(this.a,"signInFlow"),ea(this.a,"signInOptions"),ea(this.a,"signInSuccessUrl"),ea(this.a,"siteName"),ea(this.a,"tosUrl"),ea(this.a,"widgetUrl"),ea(this.a,"adminRestrictedOperation")}function Ia(e){var t=!!e.a.get("autoUpgradeAnonymousUsers");return t&&!$a(e)&&Vr('Missing "signInFailure" callback: "signInFailure" callback needs to be provided when "autoUpgradeAnonymousUsers" is set to true.',void 0),t}function Ea(e){e=e.a.get("signInOptions")||[];for(var t=[],i=0;i<e.length;i++){var n=e[i];(n=_(n)?n:{provider:n}).provider&&t.push(n)}return t}function Sa(e,t){e=Ea(e);for(var i=0;i<e.length;i++)if(e[i].provider===t)return e[i];return null}function ka(e){return Ea(e).map((function(e){return e.provider}))}function Ca(e,t){e=Aa(e);for(var i=0;i<e.length;i++)if(e[i].providerId===t)return e[i];return null}function Aa(e){return Ea(e).map((function(e){if(wa[e.provider]||H(io,e.provider)){for(var t in e={providerId:e.provider,S:e.providerName||null,V:e.fullLabel||null,ta:e.buttonColor||null,za:e.iconUrl?yt(_t(e.iconUrl)).toString():null})null===e[t]&&delete e[t];return e}return{providerId:e.provider,S:e.providerName||null,V:e.fullLabel||null,ta:e.buttonColor||null,za:e.iconUrl?yt(_t(e.iconUrl)).toString():null,Ob:e.loginHintKey||null}}))}function Ta(e){var t,i=Sa(e,za.auth.GoogleAuthProvider.PROVIDER_ID);if(t=i&&i.clientId){e:{if("http:"===(window.location&&window.location.protocol)||"https:"===(window.location&&window.location.protocol))for(n in e=e.a.get("credentialHelper"),Za)if(Za[n]===e){var n=Za[n];break e}n=Xa}t=n===Ja}return t&&i.clientId||null}function Pa(e){return!!((e=Sa(e,za.auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp&&e.disableSignUp.status)}function Ra(e){return!(!(e=e.a.get("adminRestrictedOperation")||null)||!e.status)}function Oa(e,t){return e=(e=Sa(e,t))&&e.scopes,Array.isArray(e)?e:[]}function Na(e,t){return _(e=(e=Sa(e,t))&&e.customParameters)?(e=se(e),t===za.auth.GoogleAuthProvider.PROVIDER_ID&&delete e.login_hint,t===za.auth.GithubAuthProvider.PROVIDER_ID&&delete e.login,e):null}function La(e){if(!(e=Sa(e,za.auth.PhoneAuthProvider.PROVIDER_ID)))return null;var t=e.whitelistedCountries,i=e.blacklistedCountries;if(void 0!==t&&(!Array.isArray(t)||0==t.length))throw Error("WhitelistedCountries must be a non-empty array.");if(void 0!==i&&!Array.isArray(i))throw Error("BlacklistedCountries must be an array.");if(t&&i)throw Error("Both whitelistedCountries and blacklistedCountries are provided.");if(!t&&!i)return fa;if(e=[],t){i={};for(var n=0;n<t.length;n++)for(var r=da(t[n]),s=0;s<r.length;s++)i[r[s].c]=r[s];for(var a in i)i.hasOwnProperty(a)&&e.push(i[a])}else{for(a={},t=0;t<i.length;t++)for(r=da(i[t]),n=0;n<r.length;n++)a[r[n].c]=r[n];for(r=0;r<fa.length;r++)null!==a&&fa[r].c in a||e.push(fa[r])}return e}function Da(e){return ia(e.a,"queryParameterForWidgetMode")}function Ma(e){var t=e.a.get("tosUrl")||null;if(e=e.a.get("privacyPolicyUrl")||null,t&&!e&&Gr("Privacy Policy URL is missing, the link will not be displayed."),t&&e){if("function"==typeof t)return t;if("string"==typeof t)return function(){Qn(t)}}return null}function xa(e){var t=e.a.get("tosUrl")||null,i=e.a.get("privacyPolicyUrl")||null;if(i&&!t&&Gr("Term of Service URL is missing, the link will not be displayed."),t&&i){if("function"==typeof i)return i;if("string"==typeof i)return function(){Qn(i)}}return null}function Ua(e){return!(e=Sa(e,za.auth.EmailAuthProvider.PROVIDER_ID))||void 0===e.requireDisplayName||!!e.requireDisplayName}function Fa(e){return!(!(e=Sa(e,za.auth.EmailAuthProvider.PROVIDER_ID))||e.signInMethod!==za.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD)}function ja(e){var t=!!e.a.get("immediateFederatedRedirect"),i=ka(e);return e=Ba(e),t&&1==i.length&&!H(ya,i[0])&&e==Qa}function Ba(e){for(var t in e=e.a.get("signInFlow"),eo)if(eo[t]==e)return eo[t];return Qa}function Ha(e){return Wa(e).signInSuccess||null}function Va(e){return Wa(e).signInSuccessWithAuthResult||null}function $a(e){return Wa(e).signInFailure||null}function Wa(e){return e.a.get("callbacks")||{}}var Ga,Ka,qa,Ya,Ja="googleyolo",Xa="none",Za={nc:Ja,NONE:Xa},Qa="redirect",eo={qc:"popup",rc:Qa},to={mc:"callback",RECOVER_EMAIL:"recoverEmail",sc:"resetPassword",REVERT_SECOND_FACTOR_ADDITION:"revertSecondFactorAddition",tc:"select",uc:"signIn",VERIFY_AND_CHANGE_EMAIL:"verifyAndChangeEmail",VERIFY_EMAIL:"verifyEmail"},io=["anonymous"],no=["sitekey","tabindex","callback","expired-callback"],ro={};function so(e,t,i,n){ro[e].apply(null,Array.prototype.slice.call(arguments,1))}function ao(e){return e.classList?e.classList:h(e=e.className)&&e.match(/\S+/g)||[]}function oo(e,t){return e.classList?e.classList.contains(t):H(ao(e),t)}function co(e,t){e.classList?e.classList.add(t):oo(e,t)||(e.className+=0<e.className.length?" "+t:t)}function uo(e,t){e.classList?e.classList.remove(t):oo(e,t)&&(e.className=F(ao(e),(function(e){return e!=t})).join(" "))}function lo(e){var t=e.type;switch(h(t)&&t.toLowerCase()){case"checkbox":case"radio":return e.checked?e.value:null;case"select-one":return 0<=(t=e.selectedIndex)?e.options[t].value:null;case"select-multiple":t=[];for(var i,n=0;i=e.options[n];n++)i.selected&&t.push(i.value);return t.length?t:null;default:return null!=e.value?e.value:null}}function ho(e,t){var i=e.type;switch(h(i)&&i.toLowerCase()){case"checkbox":case"radio":e.checked=t;break;case"select-one":if(e.selectedIndex=-1,h(t))for(var n=0;i=e.options[n];n++)if(i.value==t){i.selected=!0;break}break;case"select-multiple":for(h(t)&&(t=[t]),n=0;i=e.options[n];n++)if(i.selected=!1,t)for(var r,s=0;r=t[s];s++)i.value==r&&(i.selected=!0);break;default:e.value=null!=t?t:""}}function fo(e,t,i,n,r,s){if(tt&&!lt("525"))return!0;if(nt&&r)return po(e);if(r&&!n)return!1;if(!et&&("number"==typeof t&&(t=mo(t)),(!i||nt)&&(17==t||18==t||nt&&91==t)||nt&&16==t&&(n||s)))return!1;if((tt||Ze)&&n&&i)switch(e){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(Xe&&n&&t==e)return!1;switch(e){case 13:return!et||!s&&!r&&!(i&&n);case 27:return!(tt||Ze||et)}return(!et||!(n||r||s))&&po(e)}function po(e){if(48<=e&&57>=e||96<=e&&106>=e||65<=e&&90>=e||(tt||Ze)&&0==e)return!0;switch(e){case 32:case 43:case 63:case 64:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:case 163:return!0;case 173:return et;default:return!1}}function mo(e){if(et)e=function(e){switch(e){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return e}}(e);else if(nt&&tt&&93===e)e=91;return e}function go(e){un.call(this),this.a=e,Ji(e,"keydown",this.g,!1,this),Ji(e,"click",this.h,!1,this)}function vo(e,t){var i=new yo(t);if(ln(e,i)){i=new bo(t);try{ln(e,i)}finally{t.stopPropagation()}}}function bo(e){ji.call(this,e.a),this.type="action"}function yo(e){ji.call(this,e.a),this.type="beforeaction"}function wo(e){un.call(this),this.a=e,e=Xe?"focusout":"blur",this.g=Ji(this.a,Xe?"focusin":"focus",this,!Xe),this.h=Ji(this.a,e,this,!Xe)}function _o(e,t){un.call(this),this.g=e||1,this.a=t||l,this.h=C(this.gc,this),this.j=R()}function Io(e){e.Ka=!1,e.aa&&(e.a.clearTimeout(e.aa),e.aa=null)}function Eo(e){Oi.call(this),this.g=e,this.a={}}N(go,un),go.prototype.g=function(e){(13==e.keyCode||tt&&3==e.keyCode)&&vo(this,e)},go.prototype.h=function(e){vo(this,e)},go.prototype.o=function(){go.K.o.call(this),Qi(this.a,"keydown",this.g,!1,this),Qi(this.a,"click",this.h,!1,this),delete this.a},N(bo,ji),N(yo,ji),N(wo,un),wo.prototype.handleEvent=function(e){var t=new ji(e.a);t.type="focusin"==e.type||"focus"==e.type?"focusin":"focusout",ln(this,t)},wo.prototype.o=function(){wo.K.o.call(this),en(this.g),en(this.h),delete this.a},N(_o,un),(e=_o.prototype).Ka=!1,e.aa=null,e.gc=function(){if(this.Ka){var e=R()-this.j;0<e&&e<.8*this.g?this.aa=this.a.setTimeout(this.h,this.g-e):(this.aa&&(this.a.clearTimeout(this.aa),this.aa=null),ln(this,"tick"),this.Ka&&(Io(this),this.start()))}},e.start=function(){this.Ka=!0,this.aa||(this.aa=this.a.setTimeout(this.h,this.g),this.j=R())},e.o=function(){_o.K.o.call(this),Io(this),delete this.a},N(Eo,Oi);var So=[];function ko(e,t,i,n){b(i)||(i&&(So[0]=i.toString()),i=So);for(var r=0;r<i.length;r++){var s=Ji(t,i[r],n||e.handleEvent,!1,e.g||e);if(!s)break;e.a[s.key]=s}}function Co(e){re(e.a,(function(e,t){this.a.hasOwnProperty(t)&&en(e)}),e),e.a={}}function Ao(e){un.call(this),this.a=null,this.g=e,e=Xe||Ze||tt&&!lt("531")&&"TEXTAREA"==e.tagName,this.h=new Eo(this),ko(this.h,this.g,e?["keydown","paste","cut","drop","input"]:"input",this)}function To(e){null!=e.a&&(l.clearTimeout(e.a),e.a=null)}function Po(e){return(e=new ji(e.a)).type="input",e}function Ro(e,t){un.call(this),e&&(this.Oa&&Mo(this),this.qa=e,this.Na=Ji(this.qa,"keypress",this,t),this.Ya=Ji(this.qa,"keydown",this.Jb,t,this),this.Oa=Ji(this.qa,"keyup",this.Kb,t,this))}Eo.prototype.o=function(){Eo.K.o.call(this),Co(this)},Eo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},N(Ao,un),Ao.prototype.handleEvent=function(e){if("input"==e.type)Xe&&lt(10)&&0==e.keyCode&&0==e.j||(To(this),ln(this,Po(e)));else if("keydown"!=e.type||function(e){if(e.altKey&&!e.ctrlKey||e.metaKey||112<=e.keyCode&&123>=e.keyCode)return!1;if(po(e.keyCode))return!0;switch(e.keyCode){case 18:case 20:case 93:case 17:case 40:case 35:case 27:case 36:case 45:case 37:case 224:case 91:case 144:case 12:case 34:case 33:case 19:case 255:case 44:case 39:case 145:case 16:case 38:case 252:case 224:case 92:return!1;case 0:return!et;default:return 166>e.keyCode||183<e.keyCode}}(e)){var t="keydown"==e.type?this.g.value:null;Xe&&229==e.keyCode&&(t=null);var i=Po(e);To(this),this.a=function(e,t){if(w(e))t&&(e=C(e,t));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=C(e.handleEvent,e)}return 2147483647<Number(0)?-1:l.setTimeout(e,0)}((function(){this.a=null,this.g.value!=t&&ln(this,i)}),this)}},Ao.prototype.o=function(){Ao.K.o.call(this),this.h.m(),To(this),delete this.g},N(Ro,un),(e=Ro.prototype).qa=null,e.Na=null,e.Ya=null,e.Oa=null,e.R=-1,e.X=-1,e.Ua=!1;var Oo={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},No={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},Lo=!tt||lt("525"),Do=nt&&et;function Mo(e){e.Na&&(en(e.Na),en(e.Ya),en(e.Oa),e.Na=null,e.Ya=null,e.Oa=null),e.qa=null,e.R=-1,e.X=-1}function xo(e,t,i,n){ji.call(this,n),this.type="key",this.keyCode=e,this.j=t,this.repeat=i}function Uo(e,t,i,n){this.top=e,this.right=t,this.bottom=i,this.left=n}function Fo(e,t){var i=$t(e);return i.defaultView&&i.defaultView.getComputedStyle&&(e=i.defaultView.getComputedStyle(e,null))&&(e[t]||e.getPropertyValue(t))||""}function jo(e){try{var t=e.getBoundingClientRect()}catch(e){return{left:0,top:0,right:0,bottom:0}}return Xe&&e.ownerDocument.body&&(e=e.ownerDocument,t.left-=e.documentElement.clientLeft+e.body.clientLeft,t.top-=e.documentElement.clientTop+e.body.clientTop),t}function Bo(e){var t=$t(e),i=new Dt(0,0),n=t?$t(t):document;return e==(n=!Xe||9<=Number(ct)||"CSS1Compat"==xt(n).a.compatMode?n.documentElement:n.body)||(e=jo(e),t=Ht(n=xt(t).a),n=n.parentWindow||n.defaultView,t=Xe&&lt("10")&&n.pageYOffset!=t.scrollTop?new Dt(t.scrollLeft,t.scrollTop):new Dt(n.pageXOffset||t.scrollLeft,n.pageYOffset||t.scrollTop),i.a=e.left+t.a,i.g=e.top+t.g),i}(e=Ro.prototype).Jb=function(e){(tt||Ze)&&(17==this.R&&!e.ctrlKey||18==this.R&&!e.altKey||nt&&91==this.R&&!e.metaKey)&&(this.X=this.R=-1),-1==this.R&&(e.ctrlKey&&17!=e.keyCode?this.R=17:e.altKey&&18!=e.keyCode?this.R=18:e.metaKey&&91!=e.keyCode&&(this.R=91)),Lo&&!fo(e.keyCode,this.R,e.shiftKey,e.ctrlKey,e.altKey,e.metaKey)?this.handleEvent(e):(this.X=mo(e.keyCode),Do&&(this.Ua=e.altKey))},e.Kb=function(e){this.X=this.R=-1,this.Ua=e.altKey},e.handleEvent=function(e){var t=e.a,i=t.altKey;if(Xe&&"keypress"==e.type)var n=this.X,r=13!=n&&27!=n?t.keyCode:0;else(tt||Ze)&&"keypress"==e.type?(n=this.X,r=0<=t.charCode&&63232>t.charCode&&po(n)?t.charCode:0):Je&&!tt?r=po(n=this.X)?t.keyCode:0:("keypress"==e.type?(Do&&(i=this.Ua),t.keyCode==t.charCode?32>t.keyCode?(n=t.keyCode,r=0):(n=this.X,r=t.charCode):(n=t.keyCode||this.X,r=t.charCode||0)):(n=t.keyCode||this.X,r=t.charCode||0),nt&&63==r&&224==n&&(n=191));var s=n=mo(n);n?63232<=n&&n in Oo?s=Oo[n]:25==n&&e.shiftKey&&(s=9):t.keyIdentifier&&t.keyIdentifier in No&&(s=No[t.keyIdentifier]),et&&Lo&&"keypress"==e.type&&!fo(s,this.R,e.shiftKey,e.ctrlKey,i,e.metaKey)||(e=s==this.R,this.R=s,(t=new xo(s,r,e,t)).altKey=i,ln(this,t))},e.N=function(){return this.qa},e.o=function(){Ro.K.o.call(this),Mo(this)},N(xo,ji),Uo.prototype.toString=function(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"},Uo.prototype.ceil=function(){return this.top=Math.ceil(this.top),this.right=Math.ceil(this.right),this.bottom=Math.ceil(this.bottom),this.left=Math.ceil(this.left),this},Uo.prototype.floor=function(){return this.top=Math.floor(this.top),this.right=Math.floor(this.right),this.bottom=Math.floor(this.bottom),this.left=Math.floor(this.left),this},Uo.prototype.round=function(){return this.top=Math.round(this.top),this.right=Math.round(this.right),this.bottom=Math.round(this.bottom),this.left=Math.round(this.left),this};var Ho={thin:2,medium:4,thick:6};function Vo(e,t){if("none"==(e.currentStyle?e.currentStyle[t+"Style"]:null))return 0;var i=e.currentStyle?e.currentStyle[t+"Width"]:null;if(i in Ho)e=Ho[i];else if(/^\d+px?$/.test(i))e=parseInt(i,10);else{t=e.style.left;var n=e.runtimeStyle.left;e.runtimeStyle.left=e.currentStyle.left,e.style.left=i,i=e.style.pixelLeft,e.style.left=t,e.runtimeStyle.left=n,e=+i}return e}function $o(){}function Wo(e){un.call(this),this.s=e||xt(),this.cb=null,this.na=!1,this.g=null,this.L=void 0,this.oa=this.Ea=this.Y=null}function zo(e,t){return e.g?Ft(t,e.g||e.s.a):null}function Go(e){return e.L||(e.L=new Eo(e)),e.L}function Ko(e,t){e.Ea&&U(e.Ea,t,void 0)}function qo(e,t){var i=zt(e,"firebaseui-textfield");t?(uo(e,"firebaseui-input-invalid"),co(e,"firebaseui-input"),i&&uo(i,"firebaseui-textfield-invalid")):(uo(e,"firebaseui-input"),co(e,"firebaseui-input-invalid"),i&&co(i,"firebaseui-textfield-invalid"))}function Yo(e,t,i){Ni(e,A(Li,t=new Ao(t))),ko(Go(e),t,"input",i)}function Jo(e,t,i){Ni(e,A(Li,t=new Ro(t))),ko(Go(e),t,"key",(function(e){13==e.keyCode&&(e.stopPropagation(),e.preventDefault(),i(e))}))}function Xo(e,t,i){Ni(e,A(Li,t=new go(t))),ko(Go(e),t,"action",(function(e){e.stopPropagation(),e.preventDefault(),i(e)}))}function Zo(e){co(e,"firebaseui-hidden")}function Qo(e,t){t&&Wt(e,t),uo(e,"firebaseui-hidden")}function ec(e){return!oo(e,"firebaseui-hidden")&&"none"!=e.style.display}function tc(e){var t=(e=e||{}).email,i=e.disabled,n='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-email-input">';return n=e.wc?n+"Enter new email address":n+"Email",n+='</label><input type="email" name="email" id="ui-sign-in-email-input" autocomplete="username" class="mdl-textfield__input firebaseui-input firebaseui-id-email" value="'+li(null!=t?t:"")+'"'+(i?"disabled":"")+'></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-email-error"></p></div>',ai(n)}function ic(e){var t='<button type="submit" class="firebaseui-id-submit firebaseui-button mdl-button mdl-js-button mdl-button--raised mdl-button--colored">';return t=(e=(e=e||{}).label)?t+ii(e):t+"Next",ai(t+"</button>")}function nc(){var e=""+ic({label:ci("Sign In")});return ai(e)}function rc(){var e=""+ic({label:ci("Save")});return ai(e)}function sc(){var e=""+ic({label:ci("Continue")});return ai(e)}function ac(e){var t='<div class="firebaseui-new-password-component"><div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-new-password-input">';return t=(e=(e=e||{}).label)?t+ii(e):t+"Choose password",ai(t+'</label><input type="password" name="newPassword" id="ui-sign-in-new-password-input" autocomplete="new-password" class="mdl-textfield__input firebaseui-input firebaseui-id-new-password"></div><a href="javascript:void(0)" class="firebaseui-input-floating-button firebaseui-id-password-toggle firebaseui-input-toggle-on firebaseui-input-toggle-blur"></a><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-new-password-error"></p></div></div>')}function oc(){var e='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-password-input">';return ai((e={}.current?e+"Current password":e+"Password")+'</label><input type="password" name="password" id="ui-sign-in-password-input" autocomplete="current-password" class="mdl-textfield__input firebaseui-input firebaseui-id-password"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-password-error"></p></div>')}function cc(){return ai('<a class="firebaseui-link firebaseui-id-secondary-link" href="javascript:void(0)">Trouble signing in?</a>')}function uc(e){var t='<button class="firebaseui-id-secondary-link firebaseui-button mdl-button mdl-js-button mdl-button--primary">';return t=(e=(e=e||{}).label)?t+ii(e):t+"Cancel",ai(t+"</button>")}function lc(e){var t="";return e.F&&e.D&&(t+='<ul class="firebaseui-tos-list firebaseui-tos"><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a></li><li class="firebaseui-inline-list-item"><a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a></li></ul>'),ai(t)}function dc(e){var t="";return e.F&&e.D&&(t+='<p class="firebaseui-tos firebaseui-tospp-full-message">By continuing, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>.</p>'),ai(t)}function hc(e){return e='<div class="firebaseui-info-bar firebaseui-id-info-bar"><p class="firebaseui-info-bar-message">'+ii(e.message)+'&nbsp;&nbsp;<a href="javascript:void(0)" class="firebaseui-link firebaseui-id-dismiss-info-bar">Dismiss</a></p></div>',ai(e)}function fc(e){var t=e.content;return e=e.Ab,ai('<dialog class="mdl-dialog firebaseui-dialog firebaseui-id-dialog'+(e?" "+li(e):"")+'">'+ii(t)+"</dialog>")}function pc(e){var t=e.message;return ai(fc({content:ui('<div class="firebaseui-dialog-icon-wrapper"><div class="'+li(e.Ma)+' firebaseui-dialog-icon"></div></div><div class="firebaseui-progress-dialog-message">'+ii(t)+"</div>")}))}function mc(e){for(var t='<div class="firebaseui-list-box-actions">',i=(e=e.items).length,n=0;n<i;n++){var r=e[n];t+='<button type="button" data-listboxid="'+li(r.id)+'" class="mdl-button firebaseui-id-list-box-dialog-button firebaseui-list-box-dialog-button">'+(r.Ma?'<div class="firebaseui-list-box-icon-wrapper"><div class="firebaseui-list-box-icon '+li(r.Ma)+'"></div></div>':"")+'<div class="firebaseui-list-box-label-wrapper">'+ii(r.label)+"</div></button>"}return t=""+fc({Ab:ci("firebaseui-list-box-dialog"),content:ui(t+"</div>")}),ai(t)}function gc(e){return ai((e=e||{}).tb?'<div class="mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>':'<div class="mdl-progress mdl-js-progress mdl-progress__indeterminate firebaseui-busy-indicator firebaseui-id-busy-indicator"></div>')}function vc(e,t){return si((e=(e=e||{}).ga).S?e.S:t.hb[e.providerId]?""+t.hb[e.providerId]:e.providerId&&0==e.providerId.indexOf("saml.")||e.providerId&&0==e.providerId.indexOf("oidc.")?e.providerId.substring(5):""+e.providerId)}function bc(e){_c(e,"upgradeElement")}function yc(e){_c(e,"downgradeElements")}g($o),$o.prototype.a=0,N(Wo,un),(e=Wo.prototype).Lb=$o.Xa(),e.N=function(){return this.g},e.Za=function(e){if(this.Y&&this.Y!=e)throw Error("Method not supported");Wo.K.Za.call(this,e)},e.kb=function(){this.g=this.s.a.createElement("DIV")},e.render=function(e){if(this.na)throw Error("Component already rendered");this.g||this.kb(),e?e.insertBefore(this.g,null):this.s.a.body.appendChild(this.g),this.Y&&!this.Y.na||this.v()},e.v=function(){this.na=!0,Ko(this,(function(e){!e.na&&e.N()&&e.v()}))},e.ya=function(){Ko(this,(function(e){e.na&&e.ya()})),this.L&&Co(this.L),this.na=!1},e.o=function(){this.na&&this.ya(),this.L&&(this.L.m(),delete this.L),Ko(this,(function(e){e.m()})),this.g&&Vt(this.g),this.Y=this.g=this.oa=this.Ea=null,Wo.K.o.call(this)},e.removeChild=function(e,t){if(e){var i=h(e)?e:e.cb||(e.cb=":"+(e.Lb.a++).toString(36));if(this.oa&&i?e=(null!==(e=this.oa)&&i in e?e[i]:void 0)||null:e=null,i&&e){var n=this.oa;if(i in n&&delete n[i],V(this.Ea,e),t&&(e.ya(),e.g&&Vt(e.g)),null==(t=e))throw Error("Unable to set parent component");t.Y=null,Wo.K.Za.call(t,null)}}if(!e)throw Error("Child is not in parent component");return e},hc.a="firebaseui.auth.soy2.element.infoBar",pc.a="firebaseui.auth.soy2.element.progressDialog",mc.a="firebaseui.auth.soy2.element.listBoxDialog",gc.a="firebaseui.auth.soy2.element.busyIndicator";var wc=["mdl-js-textfield","mdl-js-progress","mdl-js-spinner","mdl-js-button"];function _c(e,t){e&&window.componentHandler&&window.componentHandler[t]&&wc.forEach((function(i){oo(e,i)&&window.componentHandler[t](e),U(Ut(i,e),(function(e){window.componentHandler[t](e)}))}))}function Ic(e,t,i){if(Ec.call(this),document.body.appendChild(e),e.showModal||window.dialogPolyfill.registerDialog(e),e.showModal(),bc(e),t&&Xo(this,e,(function(t){var i=e.getBoundingClientRect();(t.clientX<i.left||i.left+i.width<t.clientX||t.clientY<i.top||i.top+i.height<t.clientY)&&Ec.call(this)})),!i){var n=this.N().parentElement||this.N().parentNode;if(n){var r=this;this.da=function(){if(e.open){var t=e.getBoundingClientRect().height,i=n.getBoundingClientRect().height,s=n.getBoundingClientRect().top-document.body.getBoundingClientRect().top,a=n.getBoundingClientRect().left-document.body.getBoundingClientRect().left,o=e.getBoundingClientRect().width,c=n.getBoundingClientRect().width;e.style.top=(s+(i-t)/2).toString()+"px",t=a+(c-o)/2,e.style.left=t.toString()+"px",e.style.right=(document.body.getBoundingClientRect().width-t-o).toString()+"px"}else window.removeEventListener("resize",r.da)},this.da(),window.addEventListener("resize",this.da,!1)}}}function Ec(){var e=Sc.call(this);e&&(yc(e),e.open&&e.close(),Vt(e),this.da&&window.removeEventListener("resize",this.da))}function Sc(){return Ft("firebaseui-id-dialog")}function kc(){Vt(Cc.call(this))}function Cc(){return zo(this,"firebaseui-id-info-bar")}function Ac(){return zo(this,"firebaseui-id-dismiss-info-bar")}var Tc={xa:{"google.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg","github.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg","facebook.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg","twitter.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg",password:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg",phone:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/phone.svg",anonymous:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/anonymous.png","microsoft.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/microsoft.svg","yahoo.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/yahoo.svg","apple.com":"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/apple.png",saml:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/saml.svg",oidc:"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/oidc.svg"},wa:{"google.com":"#ffffff","github.com":"#333333","facebook.com":"#3b5998","twitter.com":"#55acee",password:"#db4437",phone:"#02bd7e",anonymous:"#f4b400","microsoft.com":"#2F2F2F","yahoo.com":"#720E9E","apple.com":"#000000",saml:"#007bff",oidc:"#007bff"},hb:{"google.com":"Google","github.com":"GitHub","facebook.com":"Facebook","twitter.com":"Twitter",password:"Password",phone:"Phone",anonymous:"Guest","microsoft.com":"Microsoft","yahoo.com":"Yahoo","apple.com":"Apple"}};function Pc(e,t,i){for(var n in Fi.call(this,e,t),i)this[n]=i[n]}function Rc(e,t,i,n,r){Wo.call(this,i),this.fb=e,this.eb=t,this.Fa=!1,this.Ga=n||null,this.A=this.ca=null,this.Z=se(Tc),oe(this.Z,r||{})}function Oc(e){return e.N().parentElement||e.N().parentNode}function Nc(e,t,i){Jo(e,t,(function(){i.focus()}))}function Lc(e,t,i){Jo(e,t,(function(){i()}))}function Dc(e,t,i){t=(e=e||{}).Va;var n=e.ia;return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in with email</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+tc(e)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(t?uc(null):"")+ic(null)+'</div></div><div class="firebaseui-card-footer">'+(n?dc(i):lc(i))+"</div></form></div>",ai(e)}function Mc(e,t,i){return t=(e=e||{}).ia,e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-in"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content">'+tc(e)+oc()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+cc()+'</div><div class="firebaseui-form-actions">'+nc()+'</div></div><div class="firebaseui-card-footer">'+(t?dc(i):lc(i))+"</div></form></div>",ai(e)}function xc(e,t,i){var n=(e=e||{}).Tb;t=e.Ta;var r=e.ia,s='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-sign-up"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Create account</h1></div><div class="firebaseui-card-content">'+tc(e);return n?(e='<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-name-input">First &amp; last name</label><input type="text" name="name" id="ui-sign-in-name-input" autocomplete="name" class="mdl-textfield__input firebaseui-input firebaseui-id-name" value="'+li(null!=(e=(e=e||{}).name)?e:"")+'"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-name-error"></p></div>',e=ai(e)):e="",i=s+e+ac(null)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(t?uc(null):"")+rc()+'</div></div><div class="firebaseui-card-footer">'+(r?dc(i):lc(i))+"</div></form></div>",ai(i)}function Uc(e,t,i){return t=(e=e||{}).Ta,e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Recover password</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Get instructions sent to this email that explain how to reset your password</p>'+tc(e)+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(t?uc(null):"")+ic({label:ci("Send")})+'</div></div><div class="firebaseui-card-footer">'+lc(i)+"</div></form></div>",ai(e)}function Fc(e,t,i){t=e.G;var n="";return n+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-recovery-email-sent"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Check your email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="Follow the instructions sent to <strong>"+ii(e.email)+"</strong> to recover your password")+'</p></div><div class="firebaseui-card-actions">',t&&(n+='<div class="firebaseui-form-actions">'+ic({label:ci("Done")})+"</div>"),n+='</div><div class="firebaseui-card-footer">'+lc(i)+"</div></div>",ai(n)}function jc(e,t,i){return ai('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-callback"><div class="firebaseui-callback-indicator-container">'+gc(null)+"</div></div>")}function Bc(e,t,i){return ai('<div class="firebaseui-container firebaseui-id-page-spinner">'+gc({tb:!0})+"</div>")}function Hc(){return ai('<div class="firebaseui-container firebaseui-id-page-blank firebaseui-use-spinner"></div>')}function Vc(e,t,i){return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-sent"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign-in email sent</h1></div><div class="firebaseui-card-content"><div class="firebaseui-email-sent"></div><p class="firebaseui-text">'+(e="A sign-in email with additional instructions was sent to <strong>"+ii(e.email)+"</strong>. Check your email to complete sign-in.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+ai('<a class="firebaseui-link firebaseui-id-trouble-getting-email-link" href="javascript:void(0)">Trouble getting email?</a>')+'</div><div class="firebaseui-form-actions">'+uc({label:ci("Back")})+'</div></div><div class="firebaseui-card-footer">'+lc(i)+"</div></form></div>",ai(t)}function $c(e,t,i){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-not-received"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Trouble getting email?</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try these common fixes:<ul><li>Check if the email was marked as spam or filtered.</li><li>Check your internet connection.</li><li>Check that you did not misspell your email.</li><li>Check that your inbox space is not running out or other inbox settings related issues.</li></ul></p><p class="firebaseui-text">If the steps above didn\'t work, you can resend the email. Note that this will deactivate the link in the older email.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+ai('<a class="firebaseui-link firebaseui-id-resend-email-link" href="javascript:void(0)">Resend</a>')+'</div><div class="firebaseui-form-actions">'+uc({label:ci("Back")})+'</div></div><div class="firebaseui-card-footer">'+lc(i)+"</div></form></div>",ai(e)}function Wc(e,t,i){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-confirmation"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Confirm email</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Confirm your email to complete sign in</p><div class="firebaseui-relative-wrapper">'+tc(e)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+uc(null)+ic(null)+'</div></div><div class="firebaseui-card-footer">'+lc(i)+"</div></form></div>",ai(e)}function zc(){var e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-different-device-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">New device or browser detected</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Try opening the link using the same device or browser where you started the sign-in process.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+uc({label:ci("Dismiss")})+"</div></div></div>";return ai(e)}function Gc(){var e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-anonymous-user-mismatch"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Session ended</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">The session associated with this sign-in request has either expired or was cleared.</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+uc({label:ci("Dismiss")})+"</div></div></div>";return ai(e)}function Kc(e,t,i){return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+(e="You’ve already used <strong>"+ii(e.email)+"</strong> to sign in. Enter your password for that account.")+"</p>"+oc()+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">'+cc()+'</div><div class="firebaseui-form-actions">'+nc()+'</div></div><div class="firebaseui-card-footer">'+lc(i)+"</div></form></div>",ai(t)}function qc(e,t,i){var n=e.email;return t="",e=ci(e=""+vc(e,i)),t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text firebaseui-text-justify">'+(n="You’ve already used <strong>"+ii(n)+"</strong>. You can connect your <strong>"+ii(e)+"</strong> account with <strong>"+ii(n)+"</strong> by signing in with email link below.")+'<p class="firebaseui-text firebaseui-text-justify">'+(e="For this flow to successfully connect your "+ii(e)+" account with this email, you have to open the link on the same device or browser.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+nc()+'</div></div><div class="firebaseui-card-footer">'+lc(i)+"</div></form></div>",ai(t)}function Yc(e,t,i){t="";var n=""+vc(e,i);return t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-link-sign-in-linking-different-device"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text firebaseui-text-justify">'+(e="You originally intended to connect <strong>"+ii(n=ci(n))+"</strong> to your email account but have opened the link on a different device where you are not signed in.")+'</p><p class="firebaseui-text firebaseui-text-justify">'+(n="If you still want to connect your <strong>"+ii(n)+"</strong> account, open the link on the same device where you started sign-in. Otherwise, tap Continue to sign-in on this device.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+sc()+'</div></div><div class="firebaseui-card-footer">'+lc(i)+"</div></form></div>",ai(t)}function Jc(e,t,i){var n=e.email;return t="",e=ci(e=""+vc(e,i)),t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-federated-linking"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">You already have an account</h2><p class="firebaseui-text">'+(n="You’ve already used <strong>"+ii(n)+"</strong>. Sign in with "+ii(e)+" to continue.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+ic({label:ci("Sign in with "+e)})+'</div></div><div class="firebaseui-card-footer">'+lc(i)+"</div></form></div>",ai(t)}function Xc(e,t,i){var n=(e=e||{}).kc;t=e.yb,e=e.Eb;var r='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unauthorized-user"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Not Authorized</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';return n?r+=n="<strong>"+ii(n)+"</strong> is not authorized to view the requested page.":r+="User is not authorized to view the requested page.",r+="</p>",t&&(r+='<p class="firebaseui-text firebaseui-id-unauthorized-user-admin-email">'+(t="Please contact <strong>"+ii(t)+"</strong> for authorization.")+"</p>"),r+='</div><div class="firebaseui-card-actions"><div class="firebaseui-form-links">',e&&(r+='<a class="firebaseui-link firebaseui-id-unauthorized-user-help-link" href="javascript:void(0)" target="_blank">Learn More</a>'),r+='</div><div class="firebaseui-form-actions">'+uc({label:ci("Back")})+'</div></div><div class="firebaseui-card-footer">'+lc(i)+"</div></form></div>",ai(r)}function Zc(e,t,i){return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unsupported-provider"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="To continue sign in with <strong>"+ii(e.email)+"</strong> on this device, you have to recover the password.")+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+uc(null)+ic({label:ci("Recover password")})+'</div></div><div class="firebaseui-card-footer">'+lc(i)+"</div></form></div>",ai(t)}function Qc(e){var t="";return t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Reset your password</h1></div><div class="firebaseui-card-content">'+('<p class="firebaseui-text">for <strong>'+ii(e.email)+"</strong></p>")+ac(function(e){function t(){}var i={label:ci("New password")};for(var n in t.prototype=e,e=new t,i)e[n]=i[n];return e}(e))+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+rc()+"</div></div></form></div>",ai(t)}function eu(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Password changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new password</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+sc()+"</div>":"")+"</div></div>",ai(e)}function tu(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-password-reset-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try resetting your password again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to reset your password has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+sc()+"</div>":"")+"</div></div>",ai(e)}function iu(e){var t=e.G,i="";return i+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Updated email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="Your sign-in email address has been changed back to <strong>"+ii(e.email)+"</strong>.")+'</p><p class="firebaseui-text">If you didn’t ask to change your sign-in email, it’s possible someone is trying to access your account and you should <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">change your password right away</a>.</p></div><div class="firebaseui-card-actions">'+(t?'<div class="firebaseui-form-actions">'+sc()+"</div>":"")+"</div></form></div>",ai(i)}function nu(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-change-revoke-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Unable to update your email address</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">There was a problem changing your sign-in email back.</p><p class="firebaseui-text">If you try again and still can’t reset your email, try asking your administrator for help.</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+sc()+"</div>":"")+"</div></div>",ai(e)}function ru(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You can now sign in with your new account</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+sc()+"</div>":"")+"</div></div>",ai(e)}function su(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-verification-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try verifying your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify your email has expired or the link has already been used</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+sc()+"</div>":"")+"</div></div>",ai(e)}function au(e){var t=e.G,i="";return i+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-success"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Your email has been verified and changed</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+(e="You can now sign in with your new email <strong>"+ii(e.email)+"</strong>.")+'</p></div><div class="firebaseui-card-actions">'+(t?'<div class="firebaseui-form-actions">'+sc()+"</div>":"")+"</div></div>",ai(i)}function ou(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-verify-and-change-email-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Try updating your email again</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Your request to verify and update your email has expired or the link has already been used.</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+sc()+"</div>":"")+"</div></div>",ai(e)}function cu(e){var t=e.factorId,i=e.phoneNumber;e=e.G;var n='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-success"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Removed second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">';if("phone"===t)n+=t="The <strong>"+ii(t)+" "+ii(i)+"</strong> was removed as a second authentication step.";else n+="The device or app was removed as a second authentication step.";return n+='</p><p class="firebaseui-text">If you don\'t recognize this device, someone might be trying to access your account. Consider <a class="firebaseui-link firebaseui-id-reset-password-link" href="javascript:void(0)">changing your password right away</a>.</p></div><div class="firebaseui-card-actions">'+(e?'<div class="firebaseui-form-actions">'+sc()+"</div>":"")+"</div></form></div>",ai(n)}function uu(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-revert-second-factor-addition-failure"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Couldn\'t remove your second factor</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">Something went wrong removing your second factor.</p><p class="firebaseui-text">Try removing it again. If that doesn\'t work, contact support for assistance.</p></div><div class="firebaseui-card-actions">'+((e=e||{}).G?'<div class="firebaseui-form-actions">'+sc()+"</div>":"")+"</div></div>",ai(e)}function lu(e){var t=e.zb;return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-recoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+ii(e.errorMessage)+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">',t&&(e+=ic({label:ci("Retry")})),ai(e+"</div></div></div>")}function du(e){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-unrecoverable-error"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Error encountered</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+ii(e.errorMessage)+"</p></div></div>",ai(e)}function hu(e,t,i){var n=e.Qb;return t="",t+='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-email-mismatch"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><h2 class="firebaseui-subtitle">'+(e="Continue with "+ii(e.jc)+"?")+'</h2><p class="firebaseui-text">'+(n="You originally wanted to sign in with "+ii(n))+'</p></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+uc(null)+ic({label:ci("Continue")})+'</div></div><div class="firebaseui-card-footer">'+lc(i)+"</div></form></div>",ai(t)}function fu(e,t,i){var n='<div class="firebaseui-container firebaseui-page-provider-sign-in firebaseui-id-page-provider-sign-in firebaseui-use-spinner"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-idp-list">';t=(e=e.Sb).length;for(var r=0;r<t;r++){var s={ga:e[r]},a=i,o=(s=s||{}).ga,c=s,u="";switch((c=c||{}).ga.providerId){case"google.com":u+="firebaseui-idp-google";break;case"github.com":u+="firebaseui-idp-github";break;case"facebook.com":u+="firebaseui-idp-facebook";break;case"twitter.com":u+="firebaseui-idp-twitter";break;case"phone":u+="firebaseui-idp-phone";break;case"anonymous":u+="firebaseui-idp-anonymous";break;case"password":u+="firebaseui-idp-password";break;default:u+="firebaseui-idp-generic"}c=(c='<button class="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised '+li(si(u))+' firebaseui-id-idp-button" data-provider-id="'+li(o.providerId)+'" style="background-color:')+li(hi(si((u=(u=(u=s)||{}).ga).ta?u.ta:a.wa[u.providerId]?""+a.wa[u.providerId]:0==u.providerId.indexOf("saml.")?""+a.wa.saml:0==u.providerId.indexOf("oidc.")?""+a.wa.oidc:""+a.wa.password)))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="';var l=s;u=a,l=(l=l||{}).ga,u=oi(l.za?di(l.za):u.xa[l.providerId]?di(u.xa[l.providerId]):0==l.providerId.indexOf("saml.")?di(u.xa.saml):0==l.providerId.indexOf("oidc.")?di(u.xa.oidc):di(u.xa.password)),c=c+li(di(u))+'"></span>',"password"==o.providerId?(c+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',o.V?c+=ii(o.V):o.S?c+=s="Sign in with "+ii(vc(s,a)):c+="Sign in with email",c+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',c=o.S?c+ii(o.S):c+"Email",c+="</span>"):"phone"==o.providerId?(c+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',o.V?c+=ii(o.V):o.S?c+=s="Sign in with "+ii(vc(s,a)):c+="Sign in with phone",c+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',c=o.S?c+ii(o.S):c+"Phone",c+="</span>"):"anonymous"==o.providerId?(c+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',o.V?c+=ii(o.V):o.S?c+=s="Sign in with "+ii(vc(s,a)):c+="Continue as guest",c+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">',c=o.S?c+ii(o.S):c+"Guest",c+="</span>"):(c+='<span class="firebaseui-idp-text firebaseui-idp-text-long">',o.V?c+=ii(o.V):c+=u="Sign in with "+ii(vc(s,a)),c+='</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+(o.S?ii(o.S):ii(vc(s,a)))+"</span>"),n+='<li class="firebaseui-list-item">'+(o=ai(c+"</button>"))+"</li>"}return n+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+dc(i)+"</div></div>",ai(n)}function pu(e,t,i){var n,r=(e=e||{}).Gb,s=e.Va;return t=e.ia,e='<div class="firebaseui-phone-number"><button class="firebaseui-id-country-selector firebaseui-country-selector mdl-button mdl-js-button"><span class="firebaseui-flag firebaseui-country-selector-flag firebaseui-id-country-selector-flag"></span><span class="firebaseui-id-country-selector-code"></span></button><div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label firebaseui-textfield firebaseui-phone-input-wrapper"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-number-input">Phone number</label><input type="tel" name="phoneNumber" id="ui-sign-in-phone-number-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-number" value="'+li(null!=(e=(e=e||{}).Aa)?e:"")+'"></div></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-phone-number-error firebaseui-id-phone-number-error"></p></div>',n=(e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-start"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Enter your phone number</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+ai(e))+(n=r?ai('<div class="firebaseui-recaptcha-wrapper"><div class="firebaseui-recaptcha-container"></div><div class="firebaseui-error-wrapper firebaseui-recaptcha-error-wrapper"><p class="firebaseui-error firebaseui-hidden firebaseui-id-recaptcha-error"></p></div></div>'):"")+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+(s?uc(null):"")+ic({label:ci("Verify")})+'</div></div><div class="firebaseui-card-footer">',t?(t='<p class="firebaseui-tos firebaseui-phone-tos">',t=i.F&&i.D?t+'By tapping Verify, you are indicating that you accept our <a href="javascript:void(0)" class="firebaseui-link firebaseui-tos-link" target="_blank">Terms of Service</a> and <a href="javascript:void(0)" class="firebaseui-link firebaseui-pp-link" target="_blank">Privacy Policy</a>. An SMS may be sent. Message &amp; data rates may apply.':t+"By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.",i=ai(t+"</p>")):i=ai('<p class="firebaseui-tos firebaseui-phone-sms-notice">By tapping Verify, an SMS may be sent. Message &amp; data rates may apply.</p>')+lc(i),ai(n+i+"</div></form></div>")}function mu(e,t,i){var n="";return e='Enter the 6-digit code we sent to <a class="firebaseui-link firebaseui-change-phone-number-link firebaseui-id-change-phone-number-link" href="javascript:void(0)">&lrm;'+ii(t=(e=e||{}).phoneNumber)+"</a>",ii(t),t=n,i='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-phone-sign-in-finish"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Verify your phone number</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">'+e+"</p>"+(n=ai('<div class="firebaseui-textfield mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><label class="mdl-textfield__label firebaseui-label" for="ui-sign-in-phone-confirmation-code-input">6-digit code</label><input type="number" name="phoneConfirmationCode" id="ui-sign-in-phone-confirmation-code-input" class="mdl-textfield__input firebaseui-input firebaseui-id-phone-confirmation-code"></div><div class="firebaseui-error-wrapper"><p class="firebaseui-error firebaseui-text-input-error firebaseui-hidden firebaseui-id-phone-confirmation-code-error"></p></div>'))+'</div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+uc(null)+ic({label:ci("Continue")})+'</div></div><div class="firebaseui-card-footer">'+lc(i)+"</div></form>",e=ai('<div class="firebaseui-resend-container"><span class="firebaseui-id-resend-countdown"></span><a href="javascript:void(0)" class="firebaseui-id-resend-link firebaseui-hidden firebaseui-link">Resend</a></div>'),ai(t+(i+e+"</div>"))}function gu(){return ai('<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-sign-out"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign Out</h1></div><div class="firebaseui-card-content"><p class="firebaseui-text">You are now successfully signed out.</p></div></div>')}function vu(e,t,i){var n='<div class="firebaseui-container firebaseui-page-select-tenant firebaseui-id-page-select-tenant"><div class="firebaseui-card-content"><form onsubmit="return false;"><ul class="firebaseui-tenant-list">';t=(e=e.ec).length;for(var r=0;r<t;r++){var s=e[r],a="",o=ii(s.displayName),c=s.tenantId?s.tenantId:"top-level-project";a+='<button class="firebaseui-tenant-button mdl-button mdl-js-button mdl-button--raised firebaseui-tenant-selection-'+li(c=ci(c))+' firebaseui-id-tenant-selection-button"'+(s.tenantId?'data-tenant-id="'+li(s.tenantId)+'"':"")+'style="background-color:'+li(hi(s.ta))+'"><span class="firebaseui-idp-icon-wrapper"><img class="firebaseui-idp-icon" alt="" src="'+li(di(s.za))+'"></span><span class="firebaseui-idp-text firebaseui-idp-text-long">',s.V?a+=ii(s.V):a+=s="Sign in to "+ii(s.displayName),n+='<li class="firebaseui-list-item">'+(a=ai(a+'</span><span class="firebaseui-idp-text firebaseui-idp-text-short">'+o+"</span></button>"))+"</li>"}return n+='</ul></form></div><div class="firebaseui-card-footer firebaseui-provider-sign-in-footer">'+dc(i)+"</div></div>",ai(n)}function bu(e,t,i){return e='<div class="mdl-card mdl-shadow--2dp firebaseui-container firebaseui-id-page-provider-match-by-email"><form onsubmit="return false;"><div class="firebaseui-card-header"><h1 class="firebaseui-title">Sign in</h1></div><div class="firebaseui-card-content"><div class="firebaseui-relative-wrapper">'+tc(null)+'</div></div><div class="firebaseui-card-actions"><div class="firebaseui-form-actions">'+ic(null)+'</div></div><div class="firebaseui-card-footer">'+dc(i)+"</div></form></div>",ai(e)}function yu(){return zo(this,"firebaseui-id-submit")}function wu(){return zo(this,"firebaseui-id-secondary-link")}function _u(e,t){Xo(this,yu.call(this),(function(t){e(t)}));var i=wu.call(this);i&&t&&Xo(this,i,(function(e){t(e)}))}function Iu(){return zo(this,"firebaseui-id-password")}function Eu(){return zo(this,"firebaseui-id-password-error")}function Su(){var e=Iu.call(this),t=Eu.call(this);Yo(this,e,(function(){ec(t)&&(qo(e,!0),Zo(t))}))}function ku(){var e=Iu.call(this),t=Eu.call(this);return lo(e)?(qo(e,!0),Zo(t),t=!0):(qo(e,!1),Qo(t,si("Enter your password").toString()),t=!1),t?lo(e):null}function Cu(e,t,i,n,r,s){Rc.call(this,Kc,{email:e},s,"passwordLinking",{F:n,D:r}),this.w=t,this.H=i}N(Pc,Fi),N(Rc,Wo),(e=Rc.prototype).kb=function(){var e=Zt(this.fb,this.eb,this.Z,this.s);bc(e),this.g=e},e.v=function(){if(Rc.K.v.call(this),pn(Oc(this),new Pc("pageEnter",Oc(this),{pageId:this.Ga})),this.bb()&&this.Z.F){var e=this.Z.F;Xo(this,this.bb(),(function(){e()}))}if(this.ab()&&this.Z.D){var t=this.Z.D;Xo(this,this.ab(),(function(){t()}))}},e.ya=function(){pn(Oc(this),new Pc("pageExit",Oc(this),{pageId:this.Ga})),Rc.K.ya.call(this)},e.o=function(){window.clearTimeout(this.ca),this.eb=this.fb=this.ca=null,this.Fa=!1,this.A=null,yc(this.N()),Rc.K.o.call(this)},e.I=function(e,t,i,n){function r(){if(s.T)return null;s.Fa=!1,window.clearTimeout(s.ca),s.ca=null,s.A&&(yc(s.A),Vt(s.A),s.A=null)}var s=this;return s.Fa?null:(function(e){e.Fa=!0;var t=oo(e.N(),"firebaseui-use-spinner");e.ca=window.setTimeout((function(){e.N()&&null===e.A&&(e.A=Zt(gc,{tb:t},null,e.s),e.N().appendChild(e.A),bc(e.A))}),500)}(s),e.apply(null,t).then(i,n).then(r,r))},T(Rc.prototype,{a:function(e){kc.call(this);var t=Zt(hc,{message:e},null,this.s);this.N().appendChild(t),Xo(this,Ac.call(this),(function(){Vt(t)}))},yc:kc,Ac:Cc,zc:Ac,$:function(e,t){e=Zt(pc,{Ma:e,message:t},null,this.s),Ic.call(this,e)},h:Ec,Cb:Sc,Cc:function(){return zo(this,"firebaseui-tos")},bb:function(){return zo(this,"firebaseui-tos-link")},ab:function(){return zo(this,"firebaseui-pp-link")},Dc:function(){return zo(this,"firebaseui-tos-list")}}),Dc.a="firebaseui.auth.soy2.page.signIn",Mc.a="firebaseui.auth.soy2.page.passwordSignIn",xc.a="firebaseui.auth.soy2.page.passwordSignUp",Uc.a="firebaseui.auth.soy2.page.passwordRecovery",Fc.a="firebaseui.auth.soy2.page.passwordRecoveryEmailSent",jc.a="firebaseui.auth.soy2.page.callback",Bc.a="firebaseui.auth.soy2.page.spinner",Hc.a="firebaseui.auth.soy2.page.blank",Vc.a="firebaseui.auth.soy2.page.emailLinkSignInSent",$c.a="firebaseui.auth.soy2.page.emailNotReceived",Wc.a="firebaseui.auth.soy2.page.emailLinkSignInConfirmation",zc.a="firebaseui.auth.soy2.page.differentDeviceError",Gc.a="firebaseui.auth.soy2.page.anonymousUserMismatch",Kc.a="firebaseui.auth.soy2.page.passwordLinking",qc.a="firebaseui.auth.soy2.page.emailLinkSignInLinking",Yc.a="firebaseui.auth.soy2.page.emailLinkSignInLinkingDifferentDevice",Jc.a="firebaseui.auth.soy2.page.federatedLinking",Xc.a="firebaseui.auth.soy2.page.unauthorizedUser",Zc.a="firebaseui.auth.soy2.page.unsupportedProvider",Qc.a="firebaseui.auth.soy2.page.passwordReset",eu.a="firebaseui.auth.soy2.page.passwordResetSuccess",tu.a="firebaseui.auth.soy2.page.passwordResetFailure",iu.a="firebaseui.auth.soy2.page.emailChangeRevokeSuccess",nu.a="firebaseui.auth.soy2.page.emailChangeRevokeFailure",ru.a="firebaseui.auth.soy2.page.emailVerificationSuccess",su.a="firebaseui.auth.soy2.page.emailVerificationFailure",au.a="firebaseui.auth.soy2.page.verifyAndChangeEmailSuccess",ou.a="firebaseui.auth.soy2.page.verifyAndChangeEmailFailure",cu.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionSuccess",uu.a="firebaseui.auth.soy2.page.revertSecondFactorAdditionFailure",lu.a="firebaseui.auth.soy2.page.recoverableError",du.a="firebaseui.auth.soy2.page.unrecoverableError",hu.a="firebaseui.auth.soy2.page.emailMismatch",fu.a="firebaseui.auth.soy2.page.providerSignIn",pu.a="firebaseui.auth.soy2.page.phoneSignInStart",mu.a="firebaseui.auth.soy2.page.phoneSignInFinish",gu.a="firebaseui.auth.soy2.page.signOut",vu.a="firebaseui.auth.soy2.page.selectTenant",bu.a="firebaseui.auth.soy2.page.providerMatchByEmail",a(Cu,Rc),Cu.prototype.v=function(){this.P(),this.M(this.w,this.H),Lc(this,this.i(),this.w),this.i().focus(),Rc.prototype.v.call(this)},Cu.prototype.o=function(){this.w=null,Rc.prototype.o.call(this)},Cu.prototype.j=function(){return lo(zo(this,"firebaseui-id-email"))},T(Cu.prototype,{i:Iu,B:Eu,P:Su,u:ku,ea:yu,ba:wu,M:_u});var Au=/^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;function Tu(){return zo(this,"firebaseui-id-email")}function Pu(){return zo(this,"firebaseui-id-email-error")}function Ru(e){var t=Tu.call(this),i=Pu.call(this);Yo(this,t,(function(){ec(i)&&(qo(t,!0),Zo(i))})),e&&Jo(this,t,(function(){e()}))}function Ou(){return q(lo(Tu.call(this))||"")}function Nu(){var e=Tu.call(this),t=Pu.call(this),i=lo(e)||"";return i?Au.test(i)?(qo(e,!0),Zo(t),t=!0):(qo(e,!1),Qo(t,si("That email address isn't correct").toString()),t=!1):(qo(e,!1),Qo(t,si("Enter your email address to continue").toString()),t=!1),t?q(lo(e)):null}function Lu(e,t,i,n,r,s,a){Rc.call(this,Mc,{email:i,ia:!!s},a,"passwordSignIn",{F:n,D:r}),this.w=e,this.H=t}function Du(e,t,i,n,r,s){Rc.call(this,e,t,n,r||"notice",s),this.i=i||null}function Mu(e,t,i,n,r){Du.call(this,Fc,{email:e,G:!!t},t,r,"passwordRecoveryEmailSent",{F:i,D:n})}function xu(e,t){Du.call(this,ru,{G:!!e},e,t,"emailVerificationSuccess")}function Uu(e,t){Du.call(this,su,{G:!!e},e,t,"emailVerificationFailure")}function Fu(e,t,i){Du.call(this,au,{email:e,G:!!t},t,i,"verifyAndChangeEmailSuccess")}function ju(e,t){Du.call(this,ou,{G:!!e},e,t,"verifyAndChangeEmailFailure")}function Bu(e,t){Du.call(this,uu,{G:!!e},e,t,"revertSecondFactorAdditionFailure")}function Hu(e){Du.call(this,gu,void 0,void 0,e,"signOut")}function Vu(e,t){Du.call(this,eu,{G:!!e},e,t,"passwordResetSuccess")}function $u(e,t){Du.call(this,tu,{G:!!e},e,t,"passwordResetFailure")}function Wu(e,t){Du.call(this,nu,{G:!!e},e,t,"emailChangeRevokeFailure")}function zu(e,t,i){Du.call(this,lu,{errorMessage:e,zb:!!t},t,i,"recoverableError")}function Gu(e,t){Du.call(this,du,{errorMessage:e},void 0,t,"unrecoverableError")}function Ku(e){if("auth/invalid-credential"===e.code&&e.message&&-1!==e.message.indexOf("error=consent_required"))return{code:"auth/user-cancelled"};if(e.message&&-1!==e.message.indexOf("HTTP Cloud Function returned an error:")){var t=JSON.parse(e.message.substring(e.message.indexOf("{"),e.message.lastIndexOf("}")+1));return{code:e.code,message:t&&t.error&&t.error.message||e.message}}return e}function qu(e,t,i,n){function r(i){if(!i.name||"cancel"!=i.name){e:{var n=i.message;try{var r=((JSON.parse(n).error||{}).message||"").toLowerCase().match(/invalid.+(access|id)_token/);if(r&&r.length){var s=!0;break e}}catch(e){}s=!1}if(s)i=Oc(t),t.m(),tl(e,i,void 0,si("Your sign-in session has expired. Please try again.").toString());else{if(s=i&&i.message||"",i.code){if("auth/email-already-in-use"==i.code||"auth/credential-already-in-use"==i.code)return;s=Xu(i)}t.a(s)}}}if(Cd(e),n)return Yu(e,i),jn();if(!i.credential)throw Error("No credential found!");if(!gd(e).currentUser&&!i.user)throw Error("User not logged in.");try{var s=function(e,t){return Pd(e),Ed(e,(function(i){if(e.j&&!e.j.isAnonymous&&Ia(Td(e))&&!gd(e).currentUser)return Od(e).then((function(){return"password"==t.credential.providerId&&(t.credential=null),t}));if(i)return Od(e).then((function(){return i.linkWithCredential(t.credential)})).then((function(e){return t.user=e.user,t.credential=e.credential,t.operationType=e.operationType,t.additionalUserInfo=e.additionalUserInfo,t}),(function(i){if(i&&"auth/email-already-in-use"==i.code&&i.email&&i.credential)throw i;return Nd(e,i,t.credential)}));if(!t.user)throw Error('Internal error: An incompatible or outdated version of "firebase.js" may be used.');return Od(e).then((function(){return vd(e).updateCurrentUser(t.user)})).then((function(){return t.user=vd(e).currentUser,t.operationType="signIn",t.credential&&t.credential.providerId&&"password"==t.credential.providerId&&(t.credential=null),t}))}))}(e,i)}catch(e){return Vr(e.code||e.message,e),t.a(e.code||e.message),jn()}return i=s.then((function(t){Yu(e,t)}),r).then(void 0,r),kd(e,s),jn(i)}function Yu(e,t){if(!t.user)throw Error("No user found");var i=Va(Td(e));if(Ha(Td(e))&&i&&Gr("Both signInSuccess and signInSuccessWithAuthResult callbacks are provided. Only signInSuccessWithAuthResult callback will be invoked."),i){i=Va(Td(e));var n=qs(bd(e))||void 0;Gs(Vs,bd(e));var r=!1;Zn()?(i&&!i(t,n)||(r=!0,Lt(window.opener.location,Ju(e,n))),i||window.close()):i&&!i(t,n)||(r=!0,Lt(window.location,Ju(e,n))),r||e.reset()}else{i=t.user,t=t.credential,n=Ha(Td(e)),r=qs(bd(e))||void 0,Gs(Vs,bd(e));var s=!1;Zn()?(n&&!n(i,t,r)||(s=!0,Lt(window.opener.location,Ju(e,r))),n||window.close()):n&&!n(i,t,r)||(s=!0,Lt(window.location,Ju(e,r))),s||e.reset()}}function Ju(e,t){if(!(e=t||Td(e).a.get("signInSuccessUrl")))throw Error("No redirect URL has been found. You must either specify a signInSuccessUrl in the configuration, pass in a redirect URL to the widget URL, or return false from the callback.");return e}function Xu(e){var t={code:e.code},i="";switch((t=t||{}).code){case"auth/email-already-in-use":i+="The email address is already used by another account";break;case"auth/requires-recent-login":case"auth/user-token-expired":i+=Ti();break;case"auth/too-many-requests":i+="You have entered an incorrect password too many times. Please try again in a few minutes.";break;case"auth/user-cancelled":i+="Please authorize the required permissions to sign in to the application";break;case"auth/user-not-found":i+="That email address doesn't match an existing account";break;case"auth/weak-password":i+="Strong passwords have at least 6 characters and a mix of letters and numbers";break;case"auth/wrong-password":i+="The email and password you entered don't match";break;case"auth/network-request-failed":i+="A network error has occurred";break;case"auth/invalid-phone-number":i+=Ei();break;case"auth/invalid-verification-code":i+=si("Wrong code. Try again.");break;case"auth/code-expired":i+="This code is no longer valid";break;case"auth/expired-action-code":i+="This code has expired.";break;case"auth/invalid-action-code":i+="The action code is invalid. This can happen if the code is malformed, expired, or has already been used."}if(t=si(i).toString())return t;try{return JSON.parse(e.message),Vr("Internal error: "+e.message,void 0),ki().toString()}catch(t){return e.message}}function Zu(e,t,i,n){function r(){!function(e,t){Ks(Hs,{tenantId:e.a},t)}(new ts(e.h.tenantId||null),bd(e)),kd(e,t.I(C(e.dc,e),[c],(function(){if("file:"===(window.location&&window.location.protocol))return kd(e,fd(e).then((function(i){t.m(),Gs(Hs,bd(e)),so("callback",e,o,jn(i))}),s))}),a))}function s(n){if(Gs(Hs,bd(e)),!n.name||"cancel"!=n.name)switch(n=Ku(n),n.code){case"auth/popup-blocked":r();break;case"auth/popup-closed-by-user":case"auth/cancelled-popup-request":case"auth/credential-already-in-use":break;case"auth/network-request-failed":case"auth/too-many-requests":case"auth/user-cancelled":t.a(Xu(n));break;case"auth/admin-restricted-operation":t.m(),Ra(Td(e))?so("handleUnauthorizedUser",e,o,null,i):so("callback",e,o,Bn(n));break;default:t.m(),so("callback",e,o,Bn(n))}}function a(i){Gs(Hs,bd(e)),i.name&&"cancel"==i.name||(Vr("signInWithRedirect: "+i.code,void 0),i=Xu(i),"blank"==t.Ga&&ja(Td(e))?(t.m(),so("providerSignIn",e,o,i)):t.a(i))}var o=Oc(t),c=function(e,t,i){var n=wa[t]&&za.auth[wa[t]]?new za.auth[wa[t]]:0==t.indexOf("saml.")?new za.auth.SAMLAuthProvider(t):new za.auth.OAuthProvider(t);if(!n)throw Error("Invalid Firebase Auth provider!");var r=Oa(Td(e),t);if(n.addScope)for(var s=0;s<r.length;s++)n.addScope(r[s]);return r=Na(Td(e),t)||{},i&&(e=t==za.auth.GoogleAuthProvider.PROVIDER_ID?"login_hint":t==za.auth.GithubAuthProvider.PROVIDER_ID?"login":(e=Ca(Td(e),t))&&e.Ob)&&(r[e]=i),n.setCustomParameters&&n.setCustomParameters(r),n}(e,i,n);Ba(Td(e))==Qa?r():kd(e,function(e,t){return Pd(e),Ed(e,(function(i){return i&&!Ys(bd(e))?i.linkWithPopup(t).then((function(e){return e}),(function(t){if(t&&"auth/email-already-in-use"==t.code&&t.email&&t.credential)throw t;return Nd(e,t)})):gd(e).signInWithPopup(t)}))}(e,c).then((function(i){t.m(),so("callback",e,o,jn(i))}),s))}function Qu(e){return 1==(e=ka(Td(e))).length&&e[0]==za.auth.EmailAuthProvider.PROVIDER_ID}function el(e){return 1==(e=ka(Td(e))).length&&e[0]==za.auth.PhoneAuthProvider.PROVIDER_ID}function tl(e,t,i,n){Qu(e)?n?so("signIn",e,t,i,n):sl(e,t,i):e&&el(e)&&!n?so("phoneSignInStart",e,t):e&&ja(Td(e))&&!n?so("federatedRedirect",e,t,i):so("providerSignIn",e,t,n,i)}function il(e,t,i,n){var r=Oc(t);kd(e,t.I(C(gd(e).fetchSignInMethodsForEmail,gd(e)),[i],(function(s){t.m(),nl(e,r,s,i,n)}),(function(e){e=Xu(e),t.a(e)})))}function nl(e,t,i,n,r,s){i.length||Fa(Td(e))&&!Fa(Td(e))?H(i,za.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?so("passwordSignIn",e,t,n,s):1==i.length&&i[0]===za.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?Fa(Td(e))?so("sendEmailLinkForSignIn",e,t,n,(function(){so("signIn",e,t)})):so("unsupportedProvider",e,t,n):(i=ba(i,ka(Td(e))))?(Xs(new Zr(n),bd(e)),so("federatedSignIn",e,t,n,i,r)):so("unsupportedProvider",e,t,n):Pa(Td(e))?so("handleUnauthorizedUser",e,t,n,za.auth.EmailAuthProvider.PROVIDER_ID):Fa(Td(e))?so("sendEmailLinkForSignIn",e,t,n,(function(){so("signIn",e,t)})):so("passwordSignUp",e,t,n,void 0,void 0,s)}function rl(e,t,i,n,r,s){var a=Oc(t);kd(e,t.I(C(e.Ib,e),[i,s],(function(){t.m(),so("emailLinkSignInSent",e,a,i,n,s)}),r))}function sl(e,t,i){i?so("prefilledEmailSignIn",e,t,i):so("signIn",e,t)}function al(){return be(tr(),"oobCode")}function ol(){var e=be(tr(),"continueUrl");return e?function(){Lt(window.location,e)}:null}function cl(e,t){Rc.call(this,Gc,void 0,t,"anonymousUserMismatch"),this.i=e}function ul(e){Rc.call(this,jc,void 0,e,"callback")}function ll(e,t,i){if(i.user){var n={user:i.user,credential:i.credential,operationType:i.operationType,additionalUserInfo:i.additionalUserInfo},r=Ys(bd(e)),s=r&&r.g;if(s&&!function(e,t){if(t==e.email)return!0;if(e.providerData)for(var i=0;i<e.providerData.length;i++)if(t==e.providerData[i].email)return!0;return!1}(i.user,s))!function(e,t,i){var n=Oc(t);kd(e,Od(e).then((function(){t.m(),so("emailMismatch",e,n,i)}),(function(e){e.name&&"cancel"==e.name||(e=Xu(e.code),t.a(e))})))}(e,t,n);else{var a=r&&r.a;a?kd(e,i.user.linkWithCredential(a).then((function(i){n={user:i.user,credential:a,operationType:i.operationType,additionalUserInfo:i.additionalUserInfo},dl(e,t,n)}),(function(i){hl(e,t,i)}))):dl(e,t,n)}}else i=Oc(t),t.m(),Js(bd(e)),tl(e,i)}function dl(e,t,i){Js(bd(e)),qu(e,t,i)}function hl(e,t,i){var n=Oc(t);Js(bd(e)),i=Xu(i),t.m(),tl(e,n,void 0,i)}function fl(e,t,i,n){var r=Oc(t);kd(e,gd(e).fetchSignInMethodsForEmail(i).then((function(s){t.m(),s.length?H(s,za.auth.EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD)?so("passwordLinking",e,r,i):1==s.length&&s[0]===za.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD?so("emailLinkSignInLinking",e,r,i):(s=ba(s,ka(Td(e))))?so("federatedLinking",e,r,i,s,n):(Js(bd(e)),so("unsupportedProvider",e,r,i)):(Js(bd(e)),so("passwordRecovery",e,r,i,!1,Ci().toString()))}),(function(i){hl(e,t,i)})))}function pl(e,t){Rc.call(this,zc,void 0,t,"differentDeviceError"),this.i=e}function ml(e,t,i,n){Rc.call(this,iu,{email:e,G:!!i},n,"emailChangeRevoke"),this.l=t,this.i=i||null}function gl(){return zo(this,"firebaseui-id-new-password")}function vl(){return zo(this,"firebaseui-id-password-toggle")}function bl(){this.Ra=!this.Ra;var e=vl.call(this),t=gl.call(this);this.Ra?(t.type="text",co(e,"firebaseui-input-toggle-off"),uo(e,"firebaseui-input-toggle-on")):(t.type="password",co(e,"firebaseui-input-toggle-on"),uo(e,"firebaseui-input-toggle-off")),t.focus()}function yl(){return zo(this,"firebaseui-id-new-password-error")}function wl(){this.Ra=!1;var e=gl.call(this);e.type="password";var t=yl.call(this);Yo(this,e,(function(){ec(t)&&(qo(e,!0),Zo(t))}));var i=vl.call(this);co(i,"firebaseui-input-toggle-on"),uo(i,"firebaseui-input-toggle-off"),function(e,t,i){Ni(e,A(Li,t=new wo(t))),ko(Go(e),t,"focusin",i)}(this,e,(function(){co(i,"firebaseui-input-toggle-focus"),uo(i,"firebaseui-input-toggle-blur")})),function(e,t,i){Ni(e,A(Li,t=new wo(t))),ko(Go(e),t,"focusout",i)}(this,e,(function(){co(i,"firebaseui-input-toggle-blur"),uo(i,"firebaseui-input-toggle-focus")})),Xo(this,i,C(bl,this))}function _l(){var e=gl.call(this),t=yl.call(this);return lo(e)?(qo(e,!0),Zo(t),t=!0):(qo(e,!1),Qo(t,si("Enter your password").toString()),t=!1),t?lo(e):null}function Il(e,t,i){Rc.call(this,Qc,{email:e},i,"passwordReset"),this.l=t}function El(e,t,i,n,r){Rc.call(this,cu,{factorId:e,phoneNumber:i||null,G:!!n},r,"revertSecondFactorAdditionSuccess"),this.l=t,this.i=n||null}function Sl(e,t,i,n){"auth/weak-password"==(n&&n.code)?(e=Xu(n),qo(i.i(),!1),Qo(i.w(),e),i.i().focus()):(i&&i.m(),(i=new $u).render(t),pd(e,i))}function kl(e,t){try{var i="number"==typeof e.selectionStart}catch(e){i=!1}i?(e.selectionStart=t,e.selectionEnd=t):Xe&&!lt("9")&&("textarea"==e.type&&(t=e.value.substring(0,t).replace(/(\r\n|\r|\n)/g,"\n").length),(e=e.createTextRange()).collapse(!0),e.move("character",t),e.select())}function Cl(e,t,i,n,r,s){Rc.call(this,Wc,{email:i},s,"emailLinkSignInConfirmation",{F:n,D:r}),this.l=e,this.u=t}function Al(e,t,i,n,r){Rc.call(this,Yc,{ga:e},r,"emailLinkSignInLinkingDifferentDevice",{F:i,D:n}),this.i=t}function Tl(e){Rc.call(this,Hc,void 0,e,"blank")}function Pl(e,t,i,n,r){var s=new Tl,a=new je(i),o=a.a.a.get($e.$a)||"",c=a.a.a.get($e.Sa)||"",u="1"===a.a.a.get($e.Qa),l=Be(a),d=a.a.a.get($e.PROVIDER_ID)||null;a=a.a.a.get($e.vb)||null,Ad(e,a);var h=!zs($s,bd(e)),f=n||function(e,t){var i=null;if(t=zs($s,t))try{var n=Es(e,t),r=JSON.parse(n);i=r&&r.email||null}catch(e){}return i}(c,bd(e)),p=(n=function(e,t){var i=null;if(t=zs(Ws,t))try{var n=Es(e,t);i=JSON.parse(n)}catch(e){}return es(i||null)}(c,bd(e)))&&n.a;d&&p&&p.providerId!==d&&(p=null),s.render(t),pd(e,s),kd(e,s.I((function(){var t=jn(null);t=l&&h||h&&u?Bn(Error("anonymous-user-not-found")):function(e,t){var i=Be(new je(t));return i?(t=new Nn((function(t,n){var r=vd(e).onAuthStateChanged((function(e){r(),e&&e.isAnonymous&&e.uid===i?t(e):e&&e.isAnonymous&&e.uid!==i?n(Error("anonymous-user-mismatch")):n(Error("anonymous-user-not-found"))}));kd(e,r)})),kd(e,t),t):jn(null)}(e,i).then((function(e){if(d&&!p)throw Error("pending-credential-not-found");return e}));var n=null;return t.then((function(t){return n=t,r?null:gd(e).checkActionCode(o)})).then((function(){return n}))}),[],(function(n){f?function(e,t,i,n,r,s){var a=Oc(t);t.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",si("Signing in...").toString());var o=null;r=(s?function(e,t,i,n,r){Pd(e);var s=r||null,a=za.auth.EmailAuthProvider.credentialWithLink(i,n);return i=s?gd(e).signInWithEmailLink(i,n).then((function(e){return e.user.linkWithCredential(s)})).then((function(){return Od(e)})).then((function(){return Nd(e,{code:"auth/email-already-in-use"},s)})):gd(e).fetchSignInMethodsForEmail(i).then((function(i){return i.length?Nd(e,{code:"auth/email-already-in-use"},a):t.linkWithCredential(a)})),kd(e,i),i}(e,s,i,n,r):function(e,t,i,n){Pd(e);var r,s=n||null;return t=gd(e).signInWithEmailLink(t,i).then((function(e){if(r={user:e.user,credential:null,operationType:e.operationType,additionalUserInfo:e.additionalUserInfo},s)return e.user.linkWithCredential(s).then((function(e){r={user:e.user,credential:s,operationType:r.operationType,additionalUserInfo:e.additionalUserInfo}}))})).then((function(){Od(e)})).then((function(){return vd(e).updateCurrentUser(r.user)})).then((function(){return r.user=vd(e).currentUser,r})),kd(e,t),t}(e,i,n,r)).then((function(i){Gs(Ws,bd(e)),Gs($s,bd(e)),t.h(),t.$("firebaseui-icon-done",si("Signed in!").toString()),o=setTimeout((function(){t.h(),qu(e,t,i,!0)}),1e3),kd(e,(function(){t&&(t.h(),t.m()),clearTimeout(o)}))}),(function(r){if(t.h(),t.m(),!r.name||"cancel"!=r.name){var s=Xu(r=Ku(r));"auth/email-already-in-use"==r.code||"auth/credential-already-in-use"==r.code?(Gs(Ws,bd(e)),Gs($s,bd(e))):"auth/invalid-email"==r.code?(s=si("The email provided does not match the current sign-in session.").toString(),so("emailLinkConfirmation",e,a,n,Rl,null,s)):tl(e,a,i,s)}})),kd(e,r)}(e,s,f,i,p,n):u?(s.m(),so("differentDeviceError",e,t)):(s.m(),so("emailLinkConfirmation",e,t,i,Rl))}),(function(n){var r=void 0;if(!n||!n.name||"cancel"!=n.name)switch(s.m(),n&&n.message){case"anonymous-user-not-found":so("differentDeviceError",e,t);break;case"anonymous-user-mismatch":so("anonymousUserMismatch",e,t);break;case"pending-credential-not-found":so("emailLinkNewDeviceLinking",e,t,i,Ol);break;default:n&&(r=Xu(n)),tl(e,t,void 0,r)}})))}function Rl(e,t,i,n){Pl(e,t,n,i,!0)}function Ol(e,t,i){Pl(e,t,i)}function Nl(e,t,i,n,r,s){Rc.call(this,qc,{email:e,ga:t},s,"emailLinkSignInLinking",{F:n,D:r}),this.i=i}function Ll(e,t,i,n,r,s){Rc.call(this,Vc,{email:e},s,"emailLinkSignInSent",{F:n,D:r}),this.u=t,this.i=i}function Dl(e,t,i,n,r,s,a){Rc.call(this,hu,{jc:e,Qb:t},a,"emailMismatch",{F:r,D:s}),this.l=i,this.i=n}function Ml(e,t,i,n,r){Rc.call(this,$c,void 0,r,"emailNotReceived",{F:i,D:n}),this.l=e,this.i=t}function xl(e,t,i,n,r,s){Rc.call(this,Jc,{email:e,ga:t},s,"federatedLinking",{F:n,D:r}),this.i=i}function Ul(e,t,i,n,r,s){Rc.call(this,Uc,{email:i,Ta:!!t},s,"passwordRecovery",{F:n,D:r}),this.l=e,this.u=t}function Fl(){return zo(this,"firebaseui-id-name")}function jl(){return zo(this,"firebaseui-id-name-error")}function Bl(e,t,i,n,r,s,a,o,c){Rc.call(this,xc,{email:n,Tb:e,name:r,Ta:!!i,ia:!!o},c,"passwordSignUp",{F:s,D:a}),this.w=t,this.H=i,this.B=e}function Hl(e,t){var i=Ua(Td(e)),n=t.j(),r=null;i&&(r=t.M());var s=t.P();if(n){if(i){if(!r)return void t.u().focus();r=ne(r)}if(s){var a=za.auth.EmailAuthProvider.credential(n,s);kd(e,t.I(C(e.Yb,e),[n,s],(function(n){var s={user:n.user,credential:a,operationType:n.operationType,additionalUserInfo:n.additionalUserInfo};return i?(n=n.user.updateProfile({displayName:r}).then((function(){return qu(e,t,s)})),kd(e,n),n):qu(e,t,s)}),(function(i){if(!i.name||"cancel"!=i.name){var r=Ku(i);switch(i=Xu(r),r.code){case"auth/email-already-in-use":return function(e,t,i,n){function r(){var e=Xu(n);qo(t.i(),!1),Qo(t.U(),e),t.i().focus()}var s=gd(e).fetchSignInMethodsForEmail(i).then((function(n){n.length?r():(n=Oc(t),t.m(),so("passwordRecovery",e,n,i,!1,Ci().toString()))}),(function(){r()}));return kd(e,s),s}(e,t,n,r);case"auth/too-many-requests":i=si("Too many account requests are coming from your IP address. Try again in a few minutes.").toString();case"auth/operation-not-allowed":case"auth/weak-password":qo(t.l(),!1),Qo(t.ba(),i);break;case"auth/admin-restricted-operation":Ra(Td(e))?(i=Oc(t),t.m(),so("handleUnauthorizedUser",e,i,n,za.auth.EmailAuthProvider.PROVIDER_ID)):t.a(i);break;default:Vr(r="setAccountInfo: "+ks(r),void 0),t.a(i)}}})))}else t.l().focus()}else t.i().focus()}function Vl(){return zo(this,"firebaseui-id-phone-confirmation-code")}function $l(){return zo(this,"firebaseui-id-phone-confirmation-code-error")}function Wl(){return zo(this,"firebaseui-id-resend-countdown")}function zl(e,t,i,n,r,s,a,o,c){Rc.call(this,mu,{phoneNumber:r},c,"phoneSignInFinish",{F:a,D:o}),this.jb=s,this.i=new _o(1e3),this.B=s,this.P=e,this.l=t,this.H=i,this.M=n}a(Lu,Rc),Lu.prototype.v=function(){this.P(),this.ea(),this.ba(this.w,this.H),Nc(this,this.l(),this.i()),Lc(this,this.i(),this.w),lo(this.l())?this.i().focus():this.l().focus(),Rc.prototype.v.call(this)},Lu.prototype.o=function(){this.H=this.w=null,Rc.prototype.o.call(this)},T(Lu.prototype,{l:Tu,U:Pu,P:Ru,M:Ou,j:Nu,i:Iu,B:Eu,ea:Su,u:ku,ua:yu,pa:wu,ba:_u}),N(Du,Rc),Du.prototype.v=function(){this.i&&(this.u(this.i),this.l().focus()),Du.K.v.call(this)},Du.prototype.o=function(){this.i=null,Du.K.o.call(this)},T(Du.prototype,{l:yu,w:wu,u:_u}),N(Mu,Du),N(xu,Du),N(Uu,Du),N(Fu,Du),N(ju,Du),N(Bu,Du),N(Hu,Du),N(Vu,Du),N($u,Du),N(Wu,Du),N(zu,Du),N(Gu,Du),a(cl,Rc),cl.prototype.v=function(){var e=this;Xo(this,this.l(),(function(){e.i()})),this.l().focus(),Rc.prototype.v.call(this)},cl.prototype.o=function(){this.i=null,Rc.prototype.o.call(this)},T(cl.prototype,{l:wu}),ro.anonymousUserMismatch=function(e,t){var i=new cl((function(){i.m(),tl(e,t)}));i.render(t),pd(e,i)},a(ul,Rc),ul.prototype.I=function(e,t,i,n){return e.apply(null,t).then(i,n)},ro.callback=function(e,t,i){var n=new ul;n.render(t),pd(e,n),i=i||fd(e),kd(e,i.then((function(t){ll(e,n,t)}),(function(i){if((i=Ku(i))&&("auth/account-exists-with-different-credential"==i.code||"auth/email-already-in-use"==i.code)&&i.email&&i.credential)Xs(new Zr(i.email,i.credential),bd(e)),fl(e,n,i.email);else if(i&&"auth/user-cancelled"==i.code){var r=Ys(bd(e)),s=Xu(i);r&&r.a?fl(e,n,r.g,s):r?il(e,n,r.g,s):hl(e,n,i)}else i&&"auth/credential-already-in-use"==i.code||(i&&"auth/operation-not-supported-in-this-environment"==i.code&&Qu(e)?ll(e,n,{user:null,credential:null}):i&&"auth/admin-restricted-operation"==i.code&&Ra(Td(e))?(n.m(),Js(bd(e)),so("handleUnauthorizedUser",e,t,null,null)):hl(e,n,i))})))},a(pl,Rc),pl.prototype.v=function(){var e=this;Xo(this,this.l(),(function(){e.i()})),this.l().focus(),Rc.prototype.v.call(this)},pl.prototype.o=function(){this.i=null,Rc.prototype.o.call(this)},T(pl.prototype,{l:wu}),ro.differentDeviceError=function(e,t){var i=new pl((function(){i.m(),tl(e,t)}));i.render(t),pd(e,i)},a(ml,Rc),ml.prototype.v=function(){var e=this;Xo(this,zo(this,"firebaseui-id-reset-password-link"),(function(){e.l()})),this.i&&(this.w(this.i),this.u().focus()),Rc.prototype.v.call(this)},ml.prototype.o=function(){this.l=this.i=null,Rc.prototype.o.call(this)},T(ml.prototype,{u:yu,B:wu,w:_u}),a(Il,Rc),Il.prototype.v=function(){this.H(),this.B(this.l),Lc(this,this.i(),this.l),this.i().focus(),Rc.prototype.v.call(this)},Il.prototype.o=function(){this.l=null,Rc.prototype.o.call(this)},T(Il.prototype,{i:gl,w:yl,M:vl,H:wl,u:_l,U:yu,P:wu,B:_u}),a(El,Rc),El.prototype.v=function(){var e=this;Xo(this,zo(this,"firebaseui-id-reset-password-link"),(function(){e.l()})),this.i&&(this.w(this.i),this.u().focus()),Rc.prototype.v.call(this)},El.prototype.o=function(){this.l=this.i=null,Rc.prototype.o.call(this)},T(El.prototype,{u:yu,B:wu,w:_u}),ro.passwordReset=function(e,t,i,n){kd(e,gd(e).verifyPasswordResetCode(i).then((function(r){var s=new Il(r,(function(){!function(e,t,i,n,r){var s=i.u();s&&kd(e,i.I(C(gd(e).confirmPasswordReset,gd(e)),[n,s],(function(){i.m();var n=new Vu(r);n.render(t),pd(e,n)}),(function(n){Sl(e,t,i,n)})))}(e,t,s,i,n)}));s.render(t),pd(e,s)}),(function(){Sl(e,t)})))},ro.emailChangeRevocation=function(e,t,i){var n=null;kd(e,gd(e).checkActionCode(i).then((function(t){return n=t.data.email,gd(e).applyActionCode(i)})).then((function(){!function(e,t,i){var n=new ml(i,(function(){kd(e,n.I(C(gd(e).sendPasswordResetEmail,gd(e)),[i],(function(){n.m(),(n=new Mu(i,void 0,Ma(Td(e)),xa(Td(e)))).render(t),pd(e,n)}),(function(){n.a(Si().toString())})))}));n.render(t),pd(e,n)}(e,t,n)}),(function(){var i=new Wu;i.render(t),pd(e,i)})))},ro.emailVerification=function(e,t,i,n){kd(e,gd(e).applyActionCode(i).then((function(){var i=new xu(n);i.render(t),pd(e,i)}),(function(){var i=new Uu;i.render(t),pd(e,i)})))},ro.revertSecondFactorAddition=function(e,t,i){var n=null,r=null;kd(e,gd(e).checkActionCode(i).then((function(t){return n=t.data.email,r=t.data.multiFactorInfo,gd(e).applyActionCode(i)})).then((function(){!function(e,t,i,n){var r=new El(n.factorId,(function(){r.I(C(gd(e).sendPasswordResetEmail,gd(e)),[i],(function(){r.m(),(r=new Mu(i,void 0,Ma(Td(e)),xa(Td(e)))).render(t),pd(e,r)}),(function(){r.a(Si().toString())}))}),n.phoneNumber);r.render(t),pd(e,r)}(e,t,n,r)}),(function(){var i=new Bu;i.render(t),pd(e,i)})))},ro.verifyAndChangeEmail=function(e,t,i,n){var r=null;kd(e,gd(e).checkActionCode(i).then((function(t){return r=t.data.email,gd(e).applyActionCode(i)})).then((function(){var i=new Fu(r,n);i.render(t),pd(e,i)}),(function(){var i=new ju;i.render(t),pd(e,i)})))},a(Cl,Rc),Cl.prototype.v=function(){this.w(this.l),this.B(this.l,this.u),this.i().focus(),kl(this.i(),(this.i().value||"").length),Rc.prototype.v.call(this)},Cl.prototype.o=function(){this.u=this.l=null,Rc.prototype.o.call(this)},T(Cl.prototype,{i:Tu,M:Pu,w:Ru,H:Ou,j:Nu,U:yu,P:wu,B:_u}),ro.emailLinkConfirmation=function(e,t,i,n,r,s){var a=new Cl((function(){var r=a.j();r?(a.m(),n(e,t,r,i)):a.i().focus()}),(function(){a.m(),tl(e,t,r||void 0)}),r||void 0,Ma(Td(e)),xa(Td(e)));a.render(t),pd(e,a),s&&a.a(s)},a(Al,Rc),Al.prototype.v=function(){this.u(this.i),this.l().focus(),Rc.prototype.v.call(this)},Al.prototype.o=function(){this.i=null,Rc.prototype.o.call(this)},T(Al.prototype,{l:yu,u:_u}),ro.emailLinkNewDeviceLinking=function(e,t,i,n){var r=new je(i);if(i=r.a.a.get($e.PROVIDER_ID)||null,He(r,null),i){var s=new Al(Ca(Td(e),i),(function(){s.m(),n(e,t,r.toString())}),Ma(Td(e)),xa(Td(e)));s.render(t),pd(e,s)}else tl(e,t)},a(Tl,Rc),ro.emailLinkSignInCallback=Pl,a(Nl,Rc),Nl.prototype.v=function(){this.u(this.i),this.l().focus(),Rc.prototype.v.call(this)},Nl.prototype.o=function(){this.i=null,Rc.prototype.o.call(this)},T(Nl.prototype,{l:yu,u:_u}),ro.emailLinkSignInLinking=function(e,t,i){var n=Ys(bd(e));if(Js(bd(e)),n){var r=n.a.providerId,s=new Nl(i,Ca(Td(e),r),(function(){!function(e,t,i,n){var r=Oc(t);rl(e,t,i,(function(){tl(e,r,i)}),(function(n){if(!n.name||"cancel"!=n.name){var s=Xu(n);n&&"auth/network-request-failed"==n.code?t.a(s):(t.m(),tl(e,r,i,s))}}),n)}(e,s,i,n)}),Ma(Td(e)),xa(Td(e)));s.render(t),pd(e,s)}else tl(e,t)},a(Ll,Rc),Ll.prototype.v=function(){var e=this;Xo(this,this.l(),(function(){e.i()})),Xo(this,zo(this,"firebaseui-id-trouble-getting-email-link"),(function(){e.u()})),this.l().focus(),Rc.prototype.v.call(this)},Ll.prototype.o=function(){this.i=this.u=null,Rc.prototype.o.call(this)},T(Ll.prototype,{l:wu}),ro.emailLinkSignInSent=function(e,t,i,n,r){var s=new Ll(i,(function(){s.m(),so("emailNotReceived",e,t,i,n,r)}),(function(){s.m(),n()}),Ma(Td(e)),xa(Td(e)));s.render(t),pd(e,s)},a(Dl,Rc),Dl.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),Rc.prototype.v.call(this)},Dl.prototype.o=function(){this.i=null,Rc.prototype.o.call(this)},T(Dl.prototype,{u:yu,B:wu,w:_u}),ro.emailMismatch=function(e,t,i){var n=Ys(bd(e));if(n){var r=new Dl(i.user.email,n.g,(function(){var t=r;Js(bd(e)),qu(e,t,i)}),(function(){var t=i.credential.providerId,s=Oc(r);r.m(),n.a?so("federatedLinking",e,s,n.g,t):so("federatedSignIn",e,s,n.g,t)}),Ma(Td(e)),xa(Td(e)));r.render(t),pd(e,r)}else tl(e,t)},a(Ml,Rc),Ml.prototype.v=function(){var e=this;Xo(this,this.u(),(function(){e.i()})),Xo(this,this.Da(),(function(){e.l()})),this.u().focus(),Rc.prototype.v.call(this)},Ml.prototype.Da=function(){return zo(this,"firebaseui-id-resend-email-link")},Ml.prototype.o=function(){this.i=this.l=null,Rc.prototype.o.call(this)},T(Ml.prototype,{u:wu}),ro.emailNotReceived=function(e,t,i,n,r){var s=new Ml((function(){rl(e,s,i,n,(function(e){e=Xu(e),s.a(e)}),r)}),(function(){s.m(),tl(e,t,i)}),Ma(Td(e)),xa(Td(e)));s.render(t),pd(e,s)},a(xl,Rc),xl.prototype.v=function(){this.u(this.i),this.l().focus(),Rc.prototype.v.call(this)},xl.prototype.o=function(){this.i=null,Rc.prototype.o.call(this)},T(xl.prototype,{l:yu,u:_u}),ro.federatedLinking=function(e,t,i,n,r){var s=Ys(bd(e));if(s&&s.a){var a=new xl(i,Ca(Td(e),n),(function(){Zu(e,a,n,i)}),Ma(Td(e)),xa(Td(e)));a.render(t),pd(e,a),r&&a.a(r)}else tl(e,t)},ro.federatedRedirect=function(e,t,i){var n=new Tl;n.render(t),pd(e,n),Zu(e,n,t=ka(Td(e))[0],i)},ro.federatedSignIn=function(e,t,i,n,r){var s=new xl(i,Ca(Td(e),n),(function(){Zu(e,s,n,i)}),Ma(Td(e)),xa(Td(e)));s.render(t),pd(e,s),r&&s.a(r)},ro.passwordLinking=function(e,t,i){var n=Ys(bd(e));Js(bd(e));var r=n&&n.a;if(r){var s=new Cu(i,(function(){!function(e,t,i,n){var r=t.u();r?kd(e,t.I(C(e.Xb,e),[i,r],(function(i){return i=i.user.linkWithCredential(n).then((function(i){return qu(e,t,{user:i.user,credential:n,operationType:i.operationType,additionalUserInfo:i.additionalUserInfo})})),kd(e,i),i}),(function(e){if(!e.name||"cancel"!=e.name)switch(e.code){case"auth/wrong-password":qo(t.i(),!1),Qo(t.B(),Xu(e));break;case"auth/too-many-requests":t.a(Xu(e));break;default:Vr("signInWithEmailAndPassword: "+e.message,void 0),t.a(Xu(e))}}))):t.i().focus()}(e,s,i,r)}),(function(){s.m(),so("passwordRecovery",e,t,i)}),Ma(Td(e)),xa(Td(e)));s.render(t),pd(e,s)}else tl(e,t)},a(Ul,Rc),Ul.prototype.v=function(){this.B(),this.H(this.l,this.u),lo(this.i())||this.i().focus(),Lc(this,this.i(),this.l),Rc.prototype.v.call(this)},Ul.prototype.o=function(){this.u=this.l=null,Rc.prototype.o.call(this)},T(Ul.prototype,{i:Tu,w:Pu,B:Ru,M:Ou,j:Nu,U:yu,P:wu,H:_u}),ro.passwordRecovery=function(e,t,i,n,r){var s=new Ul((function(){!function(e,t){var i=t.j();if(i){var n=Oc(t);kd(e,t.I(C(gd(e).sendPasswordResetEmail,gd(e)),[i],(function(){t.m();var r=new Mu(i,(function(){r.m(),tl(e,n)}),Ma(Td(e)),xa(Td(e)));r.render(n),pd(e,r)}),(function(e){qo(t.i(),!1),Qo(t.w(),Xu(e))})))}else t.i().focus()}(e,s)}),n?void 0:function(){s.m(),tl(e,t)},i,Ma(Td(e)),xa(Td(e)));s.render(t),pd(e,s),r&&s.a(r)},ro.passwordSignIn=function(e,t,i,n){var r=new Lu((function(){!function(e,t){var i=t.j(),n=t.u();if(i)if(n){var r=za.auth.EmailAuthProvider.credential(i,n);kd(e,t.I(C(e.bc,e),[i,n],(function(i){return qu(e,t,{user:i.user,credential:r,operationType:i.operationType,additionalUserInfo:i.additionalUserInfo})}),(function(e){if(!e.name||"cancel"!=e.name)switch(e.code){case"auth/email-already-in-use":break;case"auth/email-exists":qo(t.l(),!1),Qo(t.U(),Xu(e));break;case"auth/too-many-requests":case"auth/wrong-password":qo(t.i(),!1),Qo(t.B(),Xu(e));break;default:Vr("verifyPassword: "+e.message,void 0),t.a(Xu(e))}})))}else t.i().focus();else t.l().focus()}(e,r)}),(function(){var i=r.M();r.m(),so("passwordRecovery",e,t,i)}),i,Ma(Td(e)),xa(Td(e)),n);r.render(t),pd(e,r)},a(Bl,Rc),Bl.prototype.v=function(){this.ea(),this.B&&this.Ja(),this.ua(),this.pa(this.w,this.H),this.B?(Nc(this,this.i(),this.u()),Nc(this,this.u(),this.l())):Nc(this,this.i(),this.l()),this.w&&Lc(this,this.l(),this.w),lo(this.i())?this.B&&!lo(this.u())?this.u().focus():this.l().focus():this.i().focus(),Rc.prototype.v.call(this)},Bl.prototype.o=function(){this.H=this.w=null,Rc.prototype.o.call(this)},T(Bl.prototype,{i:Tu,U:Pu,ea:Ru,jb:Ou,j:Nu,u:Fl,Bc:jl,Ja:function(){var e=Fl.call(this),t=jl.call(this);Yo(this,e,(function(){ec(t)&&(qo(e,!0),Zo(t))}))},M:function(){var e=Fl.call(this),t=jl.call(this),i=lo(e);return qo(e,i=!/^[\s\xa0]*$/.test(null==i?"":String(i))),i?(Zo(t),t=!0):(Qo(t,si("Enter your account name").toString()),t=!1),t?q(lo(e)):null},l:gl,ba:yl,lb:vl,ua:wl,P:_l,Nb:yu,Mb:wu,pa:_u}),ro.passwordSignUp=function(e,t,i,n,r,s){var a=new Bl(Ua(Td(e)),(function(){Hl(e,a)}),r?void 0:function(){a.m(),tl(e,t)},i,n,Ma(Td(e)),xa(Td(e)),s);a.render(t),pd(e,a)},a(zl,Rc),zl.prototype.v=function(){var e=this;this.U(this.jb),Ji(this.i,"tick",this.w,!1,this),this.i.start(),Xo(this,zo(this,"firebaseui-id-change-phone-number-link"),(function(){e.P()})),Xo(this,this.Da(),(function(){e.M()})),this.Ja(this.l),this.ea(this.l,this.H),this.u().focus(),Rc.prototype.v.call(this)},zl.prototype.o=function(){this.M=this.H=this.l=this.P=null,Io(this.i),Qi(this.i,"tick",this.w),this.i=null,Rc.prototype.o.call(this)},zl.prototype.w=function(){--this.B,0<this.B?this.U(this.B):(Io(this.i),Qi(this.i,"tick",this.w),this.ua(),this.lb())},T(zl.prototype,{u:Vl,pa:$l,Ja:function(e){var t=Vl.call(this),i=$l.call(this);Yo(this,t,(function(){ec(i)&&(qo(t,!0),Zo(i))})),e&&Jo(this,t,(function(){e()}))},ba:function(){var e=q(lo(Vl.call(this))||"");return/^\d{6}$/.test(e)?e:null},Fb:Wl,U:function(e){Wt(Wl.call(this),si("Resend code in "+(9<e?"0:":"0:0")+e).toString())},ua:function(){Zo(this.Fb())},Da:function(){return zo(this,"firebaseui-id-resend-link")},lb:function(){Qo(this.Da())},Nb:yu,Mb:wu,ea:_u}),ro.phoneSignInFinish=function(e,t,i,n,r,s){var a=new zl((function(){a.m(),so("phoneSignInStart",e,t,i)}),(function(){!function(e,t,i,n){function r(e){t.u().focus(),qo(t.u(),!1),Qo(t.pa(),e)}var s=t.ba();s?(t.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",si("Verifying...").toString()),kd(e,t.I(C(n.confirm,n),[s],(function(i){t.h(),t.$("firebaseui-icon-done",si("Verified!").toString());var n=setTimeout((function(){t.h(),t.m();var n={user:vd(e).currentUser,credential:null,operationType:i.operationType,additionalUserInfo:i.additionalUserInfo};qu(e,t,n,!0)}),1e3);kd(e,(function(){t&&t.h(),clearTimeout(n)}))}),(function(n){if(n.name&&"cancel"==n.name)t.h();else{var s=Ku(n);switch(n=Xu(s),s.code){case"auth/credential-already-in-use":t.h();break;case"auth/code-expired":s=Oc(t),t.h(),t.m(),so("phoneSignInStart",e,s,i,n);break;case"auth/missing-verification-code":case"auth/invalid-verification-code":t.h(),r(n);break;default:t.h(),t.a(n)}}})))):r(si("Wrong code. Try again.").toString())}(e,a,i,r)}),(function(){a.m(),tl(e,t)}),(function(){a.m(),so("phoneSignInStart",e,t,i)}),va(i),n,Ma(Td(e)),xa(Td(e)));a.render(t),pd(e,a),s&&a.a(s)};var Gl=!(Xe||Ge("Safari")&&!(Ke()||Ge("Coast")||Ge("Opera")||Ge("Edge")||Ge("Firefox")||Ge("FxiOS")||Ge("Silk")||Ge("Android")));function Kl(e,t){return/-[a-z]/.test(t)?null:Gl&&e.dataset?!Ge("Android")||Ke()||Ge("Firefox")||Ge("FxiOS")||Ge("Opera")||Ge("Silk")||t in e.dataset?void 0===(e=e.dataset[t])?null:e:null:e.getAttribute("data-"+String(t).replace(/([A-Z])/g,"-$1").toLowerCase())}function ql(e,t,i){var n=this;e=Zt(mc,{items:e},null,this.s),Ic.call(this,e,!0,!0),i&&(i=function(e,t){e=(e||document).getElementsByTagName("BUTTON");for(var i=0;i<e.length;i++)if(Kl(e[i],"listboxid")===t)return e[i];return null}(e,i))&&(i.focus(),function(e,t){var i=(t=t||Ht(document))||Ht(document),n=Bo(e),r=Bo(i);if(!Xe||9<=Number(ct)){a=Fo(i,"borderLeftWidth");var s=Fo(i,"borderRightWidth");o=Fo(i,"borderTopWidth"),c=Fo(i,"borderBottomWidth"),s=new Uo(parseFloat(o),parseFloat(s),parseFloat(c),parseFloat(a))}else{var a=Vo(i,"borderLeft");s=Vo(i,"borderRight");var o=Vo(i,"borderTop"),c=Vo(i,"borderBottom");s=new Uo(o,s,c,a)}i==Ht(document)?(a=n.a-i.scrollLeft,n=n.g-i.scrollTop,!Xe||10<=Number(ct)||(a+=s.left,n+=s.top)):(a=n.a-r.a-s.left,n=n.g-r.g-s.top),r=e.offsetWidth,s=e.offsetHeight,o=tt&&!r&&!s,e=d(r)&&!o||!e.getBoundingClientRect?new Mt(r,s):new Mt((e=jo(e)).right-e.left,e.bottom-e.top),r=i.clientHeight-e.height,s=i.scrollLeft,o=i.scrollTop,i=new Dt(s+=Math.min(a,Math.max(a-(i.clientWidth-e.width),0)),o+=Math.min(n,Math.max(n-r,0))),t.scrollLeft=i.a,t.scrollTop=i.g}(i,e)),Xo(this,e,(function(e){(e=(e=zt(e.target,"firebaseui-id-list-box-dialog-button"))&&Kl(e,"listboxid"))&&(Ec.call(n),t(e))}))}function Yl(){return zo(this,"firebaseui-id-phone-number")}function Jl(){return zo(this,"firebaseui-id-country-selector")}function Xl(){return zo(this,"firebaseui-id-phone-number-error")}function Zl(e,t){var i=e.a,n=Ql("1-US-0",i),r=null;if(!(r=t&&Ql(t,i)?t:n?"1-US-0":0<i.length?i[0].c:null))throw Error("No available default country");id.call(this,r,e)}function Ql(e,t){return!(!(e=ua(e))||!H(t,e))}function ed(e){return"firebaseui-flag-"+e.f}function td(e){var t=this;ql.call(this,function(e){return e.map((function(e){return{id:e.c,Ma:"firebaseui-flag "+ed(e),label:e.name+" ‎+"+e.b}}))}(e.a),(function(i){id.call(t,i,e,!0),t.O().focus()}),this.Ba)}function id(e,t,i){var n=ua(e);n&&(i&&((t=ca(t,i=q(lo(Yl.call(this))||""))).length&&t[0].b!=n.b&&(i="+"+n.b+i.substr(t[0].b.length+1),ho(Yl.call(this),i))),t=ua(this.Ba),this.Ba=e,e=zo(this,"firebaseui-id-country-selector-flag"),t&&uo(e,ed(t)),co(e,ed(n)),Wt(zo(this,"firebaseui-id-country-selector-code"),"‎+"+n.b))}function nd(e,t,i,n,r,s,a,o,c,u){Rc.call(this,pu,{Gb:t,Aa:c||null,Va:!!i,ia:!!s},u,"phoneSignInStart",{F:n,D:r}),this.H=o||null,this.M=t,this.l=e,this.w=i||null,this.pa=a||null}function rd(e,t,i,n){try{var r=t.U(qa)}catch(e){return}r?Ga?(t.$("mdl-spinner mdl-spinner--single-color mdl-js-spinner is-active firebaseui-progress-dialog-loading-icon",si("Verifying...").toString()),kd(e,t.I(C(e.cc,e),[va(r),i],(function(i){var n=Oc(t);t.$("firebaseui-icon-done",si("Code sent!").toString());var s=setTimeout((function(){t.h(),t.m(),so("phoneSignInFinish",e,n,r,15,i)}),1e3);kd(e,(function(){t&&t.h(),clearTimeout(s)}))}),(function(i){if(t.h(),!i.name||"cancel"!=i.name){grecaptcha.reset(Ya),Ga=null;var n=i&&i.message||"";if(i.code)switch(i.code){case"auth/too-many-requests":n=si("This phone number has been used too many times").toString();break;case"auth/invalid-phone-number":case"auth/missing-phone-number":return t.O().focus(),void Qo(t.B(),Ei().toString());case"auth/admin-restricted-operation":if(Ra(Td(e)))return i=Oc(t),t.m(),void so("handleUnauthorizedUser",e,i,va(r),za.auth.PhoneAuthProvider.PROVIDER_ID);n=Xu(i);break;default:n=Xu(i)}t.a(n)}})))):Ka?Qo(t.u(),si("Solve the reCAPTCHA").toString()):!Ka&&n&&t.i().click():(t.O().focus(),Qo(t.B(),Ei().toString()))}function sd(e,t,i,n,r){Rc.call(this,fu,{Sb:t},r,"providerSignIn",{F:i,D:n}),this.i=e}function ad(e,t,i,n,r,s,a){Rc.call(this,Dc,{email:i,Va:!!t,ia:!!s},a,"signIn",{F:n,D:r}),this.i=e,this.u=t}function od(e,t,i,n,r,s,a){Rc.call(this,Xc,{kc:e,yb:i,Eb:!!n},a,"unauthorizedUser",{F:r,D:s}),this.l=t,this.i=n}function cd(e,t,i,n,r,s){Rc.call(this,Zc,{email:e},s,"unsupportedProvider",{F:n,D:r}),this.l=t,this.i=i}function ud(e,t){this.$=!1;var i=hd(t);if(dd[i])throw Error('An AuthUI instance already exists for the key "'+i+'"');dd[i]=this,this.a=e,this.u=null,this.Y=!1,ld(this.a),this.h=za.initializeApp({apiKey:e.app.options.apiKey,authDomain:e.app.options.authDomain},e.app.name+"-firebaseui-temp").auth(),(e=e.emulatorConfig)&&(i=e.port,this.h.useEmulator(e.protocol+"://"+e.host+(null===i?"":":"+i),e.options)),ld(this.h),this.h.setPersistence&&this.h.setPersistence(za.auth.Auth.Persistence.SESSION),this.oa=t,this.ca=new _a,this.g=this.T=this.i=this.J=this.O=null,this.s=[],this.Z=!1,this.l=yr.Xa(),this.j=this.C=null,this.da=this.A=!1}function ld(e){e&&e.INTERNAL&&e.INTERNAL.logFramework&&e.INTERNAL.logFramework("FirebaseUI-web")}a(nd,Rc),nd.prototype.v=function(){this.ea(this.pa,this.H),this.P(this.l,this.w||void 0),this.M||Nc(this,this.O(),this.i()),Lc(this,this.i(),this.l),this.O().focus(),kl(this.O(),(this.O().value||"").length),Rc.prototype.v.call(this)},nd.prototype.o=function(){this.w=this.l=null,Rc.prototype.o.call(this)},T(nd.prototype,{Cb:Sc,O:Yl,B:Xl,ea:function(e,t,i){var n=this,r=Yl.call(this),s=Jl.call(this),a=Xl.call(this),o=e||pa,c=o.a;if(0==c.length)throw Error("No available countries provided.");Zl.call(n,o,t),Xo(this,s,(function(){td.call(n,o)})),Yo(this,r,(function(){ec(a)&&(qo(r,!0),Zo(a));var e=q(lo(r)||""),t=ua(this.Ba),i=ca(o,e);e=Ql("1-US-0",c),i.length&&i[0].b!=t.b&&(t=i[0],id.call(n,"1"==t.b&&e?"1-US-0":t.c,o))})),i&&Jo(this,r,(function(){i()}))},U:function(e){var t=q(lo(Yl.call(this))||""),i=(e=e||pa).a,n=ca(pa,t);if(n.length&&!H(i,n[0]))throw ho(Yl.call(this)),Yl.call(this).focus(),Qo(Xl.call(this),si("The country code provided is not supported.").toString()),Error("The country code provided is not supported.");return i=ua(this.Ba),n.length&&n[0].b!=i.b&&id.call(this,n[0].c,e),n.length&&(t=t.substr(n[0].b.length+1)),t?new ma(this.Ba,t):null},Ja:Jl,ba:function(){return zo(this,"firebaseui-recaptcha-container")},u:function(){return zo(this,"firebaseui-id-recaptcha-error")},i:yu,ua:wu,P:_u}),ro.phoneSignInStart=function(e,t,i,n){var r=function(e){var t=null;if(Ea(e).forEach((function(e){e.provider==za.auth.PhoneAuthProvider.PROVIDER_ID&&_(e.recaptchaParameters)&&!Array.isArray(e.recaptchaParameters)&&(t=se(e.recaptchaParameters))})),t){var i=[];no.forEach((function(e){void 0!==t[e]&&(i.push(e),delete t[e])})),i.length&&Gr('The following provided "recaptchaParameters" keys are not allowed: '+i.join(", "))}return t}(Td(e))||{};Ga=null,Ka=!(r&&"invisible"===r.size);var s=el(e),a=function(e){var t=(e=Sa(e,za.auth.PhoneAuthProvider.PROVIDER_ID))&&e.defaultCountry||null;t=t&&la(t);var i=null;return e&&"string"==typeof e.loginHint&&(i=ga(e.loginHint)),t&&t[0]||i&&ua(i.a)||null}(Td(e)),o=s?function(e){var t=null;return(e=Sa(e,za.auth.PhoneAuthProvider.PROVIDER_ID))&&"string"==typeof e.loginHint&&(t=ga(e.loginHint)),e&&e.defaultNationalNumber||t&&t.Aa||null}(Td(e)):null;a=i&&i.a||a&&a.c||null,i=i&&i.Aa||o,(o=La(Td(e)))&&ha(o),qa=o?new oa(La(Td(e))):pa;var c=new nd((function(t){rd(e,c,u,!(!t||!t.keyCode))}),Ka,s?null:function(){u.clear(),c.m(),tl(e,t)},Ma(Td(e)),xa(Td(e)),s,qa,a,i);c.render(t),pd(e,c),n&&c.a(n),r.callback=function(t){c.u()&&Zo(c.u()),Ga=t,Ka||rd(e,c,u)},r["expired-callback"]=function(){Ga=null};var u=new za.auth.RecaptchaVerifier(Ka?c.ba():c.i(),r,vd(e).app);kd(e,c.I(C(u.render,u),[],(function(e){Ya=e}),(function(i){i.name&&"cancel"==i.name||(i=Xu(i),c.m(),tl(e,t,void 0,i))})))},ro.prefilledEmailSignIn=function(e,t,i){var n=new Tl;n.render(t),pd(e,n),kd(e,n.I(C(gd(e).fetchSignInMethodsForEmail,gd(e)),[i],(function(r){n.m();var s=!(!Qu(e)||!yd(e));nl(e,t,r,i,void 0,s)}),(function(r){r=Xu(r),n.m(),so("signIn",e,t,i,r)})))},a(sd,Rc),sd.prototype.v=function(){this.l(this.i),Rc.prototype.v.call(this)},sd.prototype.o=function(){this.i=null,Rc.prototype.o.call(this)},T(sd.prototype,{l:function(e){function t(t){e(t)}for(var i=this.g?Ut("firebaseui-id-idp-button",this.g||this.s.a):[],n=0;n<i.length;n++){var r=i[n];Xo(this,r,A(t,Kl(r,"providerId")))}}}),ro.providerSignIn=function(e,t,i,n){var r=new sd((function(i){i==za.auth.EmailAuthProvider.PROVIDER_ID?(r.m(),sl(e,t,n)):i==za.auth.PhoneAuthProvider.PROVIDER_ID?(r.m(),so("phoneSignInStart",e,t)):"anonymous"==i?function(e,t){kd(e,t.I(C(e.$b,e),[],(function(i){return t.m(),qu(e,t,i,!0)}),(function(e){e.name&&"cancel"==e.name||(Vr("ContinueAsGuest: "+e.code,void 0),e=Xu(e),t.a(e))})))}(e,r):Zu(e,r,i,n),Pd(e),e.l.cancel()}),Aa(Td(e)),Ma(Td(e)),xa(Td(e)));r.render(t),pd(e,r),i&&r.a(i),function(e){Pd(e);try{wr(e.l,Ta(Td(e)),function(e){var t;return Pd(e),(t=e.Z)||(e=Td(e),e=Na(e,za.auth.GoogleAuthProvider.PROVIDER_ID),t=!(!e||"select_account"!==e.prompt)),t}(e)).then((function(t){return!!e.g&&function(e,t,i){if(i&&i.credential&&i.clientId===Ta(Td(e))){if(Oa(Td(e),za.auth.GoogleAuthProvider.PROVIDER_ID).length){try{var n=JSON.parse(atob(i.credential.split(".")[1])).email}catch(e){}return Zu(e,t,za.auth.GoogleAuthProvider.PROVIDER_ID,n),jn(!0)}return function(i){var n=!1;return i=t.I(C(e.ac,e),[i],(function(i){var r=Oc(t);t.m(),so("callback",e,r,jn(i)),n=!0}),(function(i){if(!(i.name&&"cancel"==i.name||i&&"auth/credential-already-in-use"==i.code))if(i&&"auth/email-already-in-use"==i.code&&i.email&&i.credential){var n=Oc(t);t.m(),so("callback",e,n,Bn(i))}else i&&"auth/admin-restricted-operation"==i.code&&Ra(Td(e))?(i=Oc(t),t.m(),so("handleUnauthorizedUser",e,i,null,za.auth.GoogleAuthProvider.PROVIDER_ID)):(i=Xu(i),t.a(i))})),kd(e,i),i.then((function(){return n}),(function(){return!1}))}(za.auth.GoogleAuthProvider.credential(i.credential))}return i&&t.a(si("The selected credential for the authentication provider is not supported!").toString()),jn(!1)}(e,e.g,t)}))}catch(e){}}(e)},ro.sendEmailLinkForSignIn=function(e,t,i,n){var r=new ul;r.render(t),pd(e,r),rl(e,r,i,n,(function(n){r.m(),n&&"auth/admin-restricted-operation"==n.code&&Ra(Td(e))?so("handleUnauthorizedUser",e,t,i,za.auth.EmailAuthProvider.PROVIDER_ID):(n=Xu(n),so("signIn",e,t,i,n))}))},a(ad,Rc),ad.prototype.v=function(){this.w(this.i),this.B(this.i,this.u||void 0),this.l().focus(),kl(this.l(),(this.l().value||"").length),Rc.prototype.v.call(this)},ad.prototype.o=function(){this.u=this.i=null,Rc.prototype.o.call(this)},T(ad.prototype,{l:Tu,M:Pu,w:Ru,H:Ou,j:Nu,U:yu,P:wu,B:_u}),ro.signIn=function(e,t,i,n){var r=Qu(e),s=new ad((function(){var t=s,i=t.j()||"";i&&il(e,t,i)}),r?null:function(){s.m(),tl(e,t,i)},i,Ma(Td(e)),xa(Td(e)),r);s.render(t),pd(e,s),n&&s.a(n)},a(od,Rc),od.prototype.v=function(){var e=this,t=zo(this,"firebaseui-id-unauthorized-user-help-link");this.i&&t&&Xo(this,t,(function(){e.i()})),Xo(this,this.u(),(function(){e.l()})),this.u().focus(),Rc.prototype.v.call(this)},od.prototype.o=function(){this.i=this.l=null,Rc.prototype.o.call(this)},T(od.prototype,{u:wu}),ro.handleUnauthorizedUser=function(e,t,i,n){function r(){tl(e,t)}n===za.auth.EmailAuthProvider.PROVIDER_ID?r=function(){sl(e,t)}:n===za.auth.PhoneAuthProvider.PROVIDER_ID&&(r=function(){so("phoneSignInStart",e,t)});var s=null,a=null;n===za.auth.EmailAuthProvider.PROVIDER_ID&&Pa(Td(e))?(s=function(e){return(e=Sa(e,za.auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp&&e.disableSignUp.adminEmail||null}(Td(e)),a=function(e){if((e=Sa(e,za.auth.EmailAuthProvider.PROVIDER_ID))&&e.disableSignUp){var t=e.disableSignUp.helpLink||null;if(t&&"string"==typeof t)return function(){Qn(t)}}return null}(Td(e))):Ra(Td(e))&&(s=function(e){return(e=e.a.get("adminRestrictedOperation"))&&e.adminEmail?e.adminEmail:null}(Td(e)),a=function(e){if(e=e.a.get("adminRestrictedOperation")||null){var t=e.helpLink||null;if(t&&"string"==typeof t)return function(){Qn(t)}}return null}(Td(e)));var o=new od(i,(function(){o.m(),r()}),s,a,Ma(Td(e)),xa(Td(e)));o.render(t),pd(e,o)},a(cd,Rc),cd.prototype.v=function(){this.w(this.l,this.i),this.u().focus(),Rc.prototype.v.call(this)},cd.prototype.o=function(){this.i=this.l=null,Rc.prototype.o.call(this)},T(cd.prototype,{u:yu,B:wu,w:_u}),ro.unsupportedProvider=function(e,t,i){var n=new cd(i,(function(){n.m(),so("passwordRecovery",e,t,i)}),(function(){n.m(),tl(e,t,i)}),Ma(Td(e)),xa(Td(e)));n.render(t),pd(e,n)};var dd={};function hd(e){return e||"[DEFAULT]"}function fd(e){return Pd(e),e.i||(e.i=Ed(e,(function(t){return t&&!Ys(bd(e))?jn(vd(e).getRedirectResult().then((function(e){return e}),(function(t){if(t&&"auth/email-already-in-use"==t.code&&t.email&&t.credential)throw t;return Nd(e,t)}))):jn(gd(e).getRedirectResult().then((function(t){return Ia(Td(e))&&!t.user&&e.j&&!e.j.isAnonymous?vd(e).getRedirectResult():t})))}))),e.i}function pd(e,t){Pd(e),e.g=t}var md=null;function gd(e){return Pd(e),e.h}function vd(e){return Pd(e),e.a}function bd(e){return Pd(e),e.oa}function yd(e){return Pd(e),e.O?e.O.emailHint:void 0}function wd(e){return"signIn"===((e=new je(e)).a.a.get($e.ub)||null)&&!!e.a.a.get($e.$a)}function _d(e,t,i,n){Pd(e),void 0!==e.a.languageCode&&(e.u=e.a.languageCode);var r="en".replace(/_/g,"-");e.a.languageCode=r,e.h.languageCode=r,e.Y=!0,void 0!==e.a.tenantId&&(e.h.tenantId=e.a.tenantId),e.ib(i),e.O=n||null;var s=l.document;e.C?e.C.then((function(){"complete"==s.readyState?Id(e,t):Zi(window,"load",(function(){Id(e,t)}))})):"complete"==s.readyState?Id(e,t):Zi(window,"load",(function(){Id(e,t)}))}function Id(e,t){var i=er(t,"Could not find the FirebaseUI widget element on the page.");if(i.setAttribute("lang","en".replace(/_/g,"-")),md){var n=md;Pd(n),Ys(bd(n))&&Gr("UI Widget is already rendered on the page and is pending some user interaction. Only one widget instance can be rendered per page. The previous instance has been automatically reset."),md.reset()}if(md=e,e.T=i,function(e,t){e.L=null,e.J=new vn(t),e.J.register(),Ji(e.J,"pageEnter",(function(t){if(t=t&&t.pageId,e.L!=t){var i=Td(e);(i=Wa(i).uiChanged||null)&&i(e.L,t),e.L=t}}))}(e,i),Ds(new Ms)&&Ds(new xs)){t=er(t,"Could not find the FirebaseUI widget element on the page."),i=(i=be(i=tr(),n=ia(Td(e).a,"queryParameterForSignInSuccessUrl")))?yt(_t(i)).toString():null;e:{n=tr();var r=Da(Td(e));for(s in n=be(n,r)||"",to)if(to[s].toLowerCase()==n.toLowerCase()){var s=to[s];break e}s="callback"}switch(s){case"callback":i&&(s=bd(e),Ks(Vs,i,s)),e.nb()?so("callback",e,t):tl(e,t,yd(e));break;case"resetPassword":so("passwordReset",e,t,al(),ol());break;case"recoverEmail":so("emailChangeRevocation",e,t,al());break;case"revertSecondFactorAddition":so("revertSecondFactorAddition",e,t,al());break;case"verifyEmail":so("emailVerification",e,t,al(),ol());break;case"verifyAndChangeEmail":so("verifyAndChangeEmail",e,t,al(),ol());break;case"signIn":so("emailLinkSignInCallback",e,t,tr()),Rd();break;case"select":i&&(s=bd(e),Ks(Vs,i,s)),tl(e,t);break;default:throw Error("Unhandled widget operation.")}(t=Wa(t=Td(e)).uiShown||null)&&t()}else t=er(t,"Could not find the FirebaseUI widget element on the page."),(s=new Gu(si("The browser you are using does not support Web Storage. Please try again in a different browser.").toString())).render(t),pd(e,s);t=e.g&&"blank"==e.g.Ga&&ja(Td(e)),Zs(bd(e))&&!t&&(Ad(e,(t=Zs(bd(e))).a),Gs(Hs,bd(e)))}function Ed(e,t){if(e.A)return t(Sd(e));if(kd(e,(function(){e.A=!1})),Ia(Td(e))){var i=new Nn((function(i){kd(e,e.a.onAuthStateChanged((function(n){e.j=n,e.A||(e.A=!0,i(t(Sd(e))))})))}));return kd(e,i),i}return e.A=!0,t(null)}function Sd(e){return Pd(e),Ia(Td(e))&&e.j&&e.j.isAnonymous?e.j:null}function kd(e,t){if(Pd(e),t){e.s.push(t);var i=function(){W(e.s,(function(e){return e==t}))};"function"!=typeof t&&t.then(i,i)}}function Cd(e){void 0!==e.a.languageCode&&e.Y&&(e.Y=!1,e.a.languageCode=e.u)}function Ad(e,t){e.a.tenantId=t,e.h.tenantId=t}function Td(e){return Pd(e),e.ca}function Pd(e){if(e.$)throw Error("AuthUI instance is deleted!")}function Rd(){var e=tr();if(wd(e)){for(var t in e=new je(e),$e)$e.hasOwnProperty(t)&&Me(e.a.a,$e[t]);t={state:"signIn",mode:"emailLink",operation:"clear"};var i=l.document.title;l.history&&l.history.replaceState&&l.history.replaceState(t,i,e.toString())}}function Od(e){return Pd(e),gd(e).signOut()}function Nd(e,t,i){if(Pd(e),t&&t.code&&("auth/email-already-in-use"==t.code||"auth/credential-already-in-use"==t.code)){var n=$a(Td(e));return jn().then((function(){return n(new Pi("anonymous-upgrade-merge-conflict",null,i||t.credential))})).then((function(){throw e.g&&(e.g.m(),e.g=null),t}))}return Bn(t)}function Ld(e,t,i,n){Rc.call(this,bu,void 0,n,"providerMatchByEmail",{F:t,D:i}),this.i=e}function Dd(e,t,i,n,r){Rc.call(this,vu,{ec:t},r,"selectTenant",{F:i,D:n}),this.i=e}function Md(e){Rc.call(this,Bc,void 0,e,"spinner")}function xd(e){for(var t in this.a=new Qs,ea(this.a,"authDomain"),ea(this.a,"displayMode",Wd),ea(this.a,"tenants"),ea(this.a,"callbacks"),ea(this.a,"tosUrl"),ea(this.a,"privacyPolicyUrl"),e)if(e.hasOwnProperty(t))try{ta(this.a,t,e[t])}catch(e){Vr('Invalid config: "'+t+'"',void 0)}}function Ud(e){return e.a.get("callbacks")||{}}function Fd(e){var t=e.a.get("tosUrl")||null;if(e=e.a.get("privacyPolicyUrl")||null,t&&!e&&Gr("Privacy Policy URL is missing, the link will not be displayed."),t&&e){if("function"==typeof t)return t;if("string"==typeof t)return function(){Qn(t)}}return null}function jd(e){var t=e.a.get("tosUrl")||null,i=e.a.get("privacyPolicyUrl")||null;if(i&&!t&&Gr("Terms of Service URL is missing, the link will not be displayed."),t&&i){if("function"==typeof i)return i;if("string"==typeof i)return function(){Qn(i)}}return null}function Bd(e,t){if(!(e=e.a.get("tenants"))||!e.hasOwnProperty(t)&&!e.hasOwnProperty(Gd))throw Error("Invalid tenant configuration!")}function Hd(e,t,i){if(!(e=e.a.get("tenants")))throw Error("Invalid tenant configuration!");var n=[];if(!(e=e[t]||e[Gd]))return Vr("Invalid tenant configuration: "+t+" is not configured!",void 0),n;if(!(t=e.signInOptions))throw Error("Invalid tenant configuration: signInOptions are invalid!");return t.forEach((function(e){if("string"==typeof e)n.push(e);else if("string"==typeof e.provider){var t=e.hd;t&&i?(t instanceof RegExp?t:new RegExp("@"+t.replace(".","\\.")+"$")).test(i)&&n.push(e.provider):n.push(e.provider)}else Vr(e="Invalid tenant configuration: signInOption "+JSON.stringify(e)+" is invalid!",void 0)})),n}function Vd(e,t,i){return e=function(e,t){var i=$d,n=void 0===n?{}:n;return Bd(e,t),e=e.a.get("tenants"),function(e,t,i){return i=void 0===i?{}:i,Object.keys(e).filter((function(e){return t.includes(e)})).reduce((function(t,i){return t[i]=e[i],t}),i)}(e[t]||e[Gd],i,n)}(e,t),(t=e.signInOptions)&&i&&(t=t.filter((function(e){return"string"==typeof e?i.includes(e):i.includes(e.provider)})),e.signInOptions=t),e}(e=ud.prototype).nb=function(){return Pd(this),!!Zs(bd(this))||wd(tr())},e.start=function(e,t){_d(this,e,t)},e.Db=function(){Pd(this),this.Z=!0},e.reset=function(){Pd(this);var e=this;this.T&&this.T.removeAttribute("lang"),this.J&&mn(this.J),Cd(this),this.O=null,Rd(),Gs(Hs,bd(this)),Pd(this),this.l.cancel(),this.i=jn({user:null,credential:null}),md==this&&(md=null),this.T=null;for(var t=0;t<this.s.length;t++)"function"==typeof this.s[t]?this.s[t]():this.s[t].cancel&&this.s[t].cancel();this.s=[],Js(bd(this)),this.g&&(this.g.m(),this.g=null),this.L=null,this.h&&(this.C=Od(this).then((function(){e.C=null}),(function(){e.C=null})))},e.ib=function(e){Pd(this);var t,i=this.ca;for(t in e)try{ta(i.a,t,e[t])}catch(e){Vr('Invalid config: "'+t+'"',void 0)}it&&ta(i.a,"popupMode",!1),La(i),!this.da&&Ha(Td(this))&&(Gr("signInSuccess callback is deprecated. Please use signInSuccessWithAuthResult callback instead."),this.da=!0)},e.Wb=function(){Pd(this);var e=Td(this),t=ia(e.a,"widgetUrl");e=Da(e);for(var i,n=t.search(ve),r=0,s=[];0<=(i=ge(t,r,e,n));)s.push(t.substring(r,i)),r=Math.min(t.indexOf("&",i)+1||n,n);s.push(t.substr(r)),t=s.join("").replace(ye,"$1"),(e+=n="="+encodeURIComponent("select"))?(0>(n=t.indexOf("#"))&&(n=t.length),0>(r=t.indexOf("?"))||r>n?(r=n,i=""):i=t.substring(r+1,n),n=(t=[t.substr(0,r),i,t.substr(n)])[1],t[1]=e?n?n+"&"+e:e:n,n=t[0]+(t[1]?"?"+t[1]:"")+t[2]):n=t,Td(this).a.get("popupMode")?(n=n||"about:blank",(e={width:500,height:600,top:0<(e=(window.screen.availHeight-600)/2)?e:0,left:0<(t=(window.screen.availWidth-500)/2)?t:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1}).target=e.target||n.target||"google_popup",e.width=e.width||690,e.height=e.height||500,(e=Xn(n,e))&&e.focus()):Lt(window.location,n)},e.Wa=function(){var e=this;return Pd(this),this.h.app.delete().then((function(){var t=hd(bd(e));delete dd[t],e.reset(),e.$=!0}))},e.Ib=function(e,t){Pd(this);var i=this,n=function(){for(var e=32,t=[];0<e;)t.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),e--;return t.join("")}();if(!Fa(Td(this)))return Bn(Error("Email link sign-in should be enabled to trigger email sending."));var r=function(e){if(Fa(e)){var t={url:tr(),handleCodeInApp:!0};(e=Sa(e,za.auth.EmailAuthProvider.PROVIDER_ID))&&"function"==typeof e.emailLinkSignIn&&oe(t,e.emailLinkSignIn()),e=t.url;var i=tr();i instanceof we||(i=Se(i)),e instanceof we||(e=Se(e));var n=i;i=new we(n);var r=!!e.j;r?_e(i,e.j):r=!!e.A,r?i.A=e.A:r=!!e.h,r?i.h=e.h:r=null!=e.C;var s=e.g;if(r)Ie(i,e.C);else if(r=!!e.g)if("/"!=s.charAt(0)&&(n.h&&!n.g?s="/"+s:-1!=(n=i.g.lastIndexOf("/"))&&(s=i.g.substr(0,n+1)+s)),".."==s||"."==s)s="";else if(-1!=s.indexOf("./")||-1!=s.indexOf("/.")){n=0==s.lastIndexOf("/",0),s=s.split("/");for(var a=[],o=0;o<s.length;){var c=s[o++];"."==c?n&&o==s.length&&a.push(""):".."==c?((1<a.length||1==a.length&&""!=a[0])&&a.pop(),n&&o==s.length&&a.push("")):(a.push(c),n=!0)}s=a.join("/")}return r?i.g=s:r=""!==e.a.toString(),r?Ee(i,Ue(e.a)):r=!!e.s,r&&(i.s=e.s),t.url=i.toString(),t}return null}(Td(this)),s=new je(r.url);return function(e,t){t?e.a.a.set($e.Sa,t):Me(e.a.a,$e.Sa)}(s,n),t&&t.a&&(function(e,t,i){Ks(Ws,Is(e,JSON.stringify(Qr(t))),i)}(n,t,bd(this)),He(s,t.a.providerId)),function(e,t){null!==t?e.a.a.set($e.Qa,t?"1":"0"):Me(e.a.a,$e.Qa)}(s,function(e){return!(!(e=Sa(e,za.auth.EmailAuthProvider.PROVIDER_ID))||!e.forceSameDevice)}(Td(this))),Ed(this,(function(t){return t&&((t=t.uid)?s.a.a.set($e.Pa,t):Me(s.a.a,$e.Pa)),r.url=s.toString(),gd(i).sendSignInLinkToEmail(e,r)})).then((function(){var t=bd(i),r={};r.email=e,Ks($s,Is(n,JSON.stringify(r)),t)}),(function(e){throw Gs(Ws,bd(i)),Gs($s,bd(i)),e}))},e.bc=function(e,t){Pd(this);var i=this;return gd(this).signInWithEmailAndPassword(e,t).then((function(n){return Ed(i,(function(r){return r?Od(i).then((function(){return Nd(i,{code:"auth/email-already-in-use"},za.auth.EmailAuthProvider.credential(e,t))})):n}))}))},e.Yb=function(e,t){Pd(this);var i=this;return Ed(this,(function(n){if(n){var r=za.auth.EmailAuthProvider.credential(e,t);return n.linkWithCredential(r)}return gd(i).createUserWithEmailAndPassword(e,t)}))},e.ac=function(e){Pd(this);var t=this;return Ed(this,(function(i){return i?i.linkWithCredential(e).then((function(e){return e}),(function(i){if(i&&"auth/email-already-in-use"==i.code&&i.email&&i.credential)throw i;return Nd(t,i,e)})):gd(t).signInWithCredential(e)}))},e.dc=function(e){Pd(this);var t=this,i=this.i;return this.i=null,Ed(this,(function(i){return i&&!Ys(bd(t))?i.linkWithRedirect(e):gd(t).signInWithRedirect(e)})).then((function(){}),(function(e){throw t.i=i,e}))},e.cc=function(e,t){Pd(this);var i=this;return Ed(this,(function(n){return n?n.linkWithPhoneNumber(e,t).then((function(e){return new Er(e,(function(e){if("auth/credential-already-in-use"==e.code)return Nd(i,e);throw e}))})):vd(i).signInWithPhoneNumber(e,t).then((function(e){return new Er(e)}))}))},e.$b=function(){return Pd(this),vd(this).signInAnonymously()},e.Xb=function(e,t){return Pd(this),gd(this).signInWithEmailAndPassword(e,t)},a(Ld,Rc),Ld.prototype.v=function(){this.u(this.i),this.w(this.i),this.l().focus(),kl(this.l(),(this.l().value||"").length),Rc.prototype.v.call(this)},Ld.prototype.o=function(){this.i=null,Rc.prototype.o.call(this)},T(Ld.prototype,{l:Tu,H:Pu,u:Ru,B:Ou,j:Nu,M:yu,w:_u}),a(Dd,Rc),Dd.prototype.v=function(){!function(e,t){function i(e){t(e)}for(var n=e.g?Ut("firebaseui-id-tenant-selection-button",e.g||e.s.a):[],r=0;r<n.length;r++){var s=n[r];Xo(e,s,A(i,Kl(s,"tenantId")))}}(this,this.i),Rc.prototype.v.call(this)},Dd.prototype.o=function(){this.i=null,Rc.prototype.o.call(this)},a(Md,Rc);var $d=["immediateFederatedRedirect","privacyPolicyUrl","signInFlow","signInOptions","tosUrl"],Wd="optionFirst",zd={pc:Wd,oc:"identifierFirst"},Gd="*";function Kd(e,t){var i=this;this.s=er(e),this.a={},Object.keys(t).forEach((function(e){i.a[e]=new xd(t[e])})),this.ob=this.g=this.A=this.h=this.i=this.j=null,Object.defineProperty(this,"languageCode",{get:function(){return this.ob},set:function(e){this.ob=e||null},enumerable:!1})}function qd(e){e.j&&e.j.reset(),e.mb(),e.g&&e.g.m()}(e=Kd.prototype).Ub=function(e,t){var i=this;qd(this);var n=e.apiKey;return new Nn((function(e,r){if(i.a.hasOwnProperty(n)){var s=Ud(i.a[n]).selectTenantUiHidden||null;if(function(e){for(var t in e=e.a.get("displayMode"),zd)if(zd[t]===e)return zd[t];return Wd}(i.a[n])===Wd){var a=[];t.forEach((function(e){e=e||"_";var t=i.a[n].a.get("tenants");if(!t)throw Error("Invalid tenant configuration!");(t=t[e]||t[Gd])?e={tenantId:"_"!==e?e:null,V:t.fullLabel||null,displayName:t.displayName,za:t.iconUrl,ta:t.buttonColor}:(Vr("Invalid tenant configuration: "+e+" is not configured!",void 0),e=null),e&&a.push(e)}));var o=function(t){t={tenantId:t,providerIds:Hd(i.a[n],t||"_")},e(t)};if(1===a.length)return void o(a[0].tenantId);i.g=new Dd((function(e){qd(i),s&&s(),o(e)}),a,Fd(i.a[n]),jd(i.a[n]))}else i.g=new Ld((function(){var r=i.g.j();if(r){for(var a=0;a<t.length;a++){var o=Hd(i.a[n],t[a]||"_",r);if(0!==o.length)return r={tenantId:t[a],providerIds:o,email:r},qd(i),s&&s(),void e(r)}i.g.a(Ai({code:"no-matching-tenant-for-email"}).toString())}}),Fd(i.a[n]),jd(i.a[n]));i.g.render(i.s),(r=Ud(i.a[n]).selectTenantUiShown||null)&&r()}else{var c=Error("Invalid project configuration: API key is invalid!");c.code="invalid-configuration",i.pb(c),r(c)}}))},e.Pb=function(e,t){if(!this.a.hasOwnProperty(e))throw Error("Invalid project configuration: API key is invalid!");var i=t||void 0;Bd(this.a[e],t||"_");try{this.i=za.app(i).auth()}catch(r){var n=this.a[e].a.get("authDomain");if(!n)throw Error("Invalid project configuration: authDomain is required!");(e=za.initializeApp({apiKey:e,authDomain:n},i)).auth().tenantId=t,this.i=e.auth()}return this.i},e.Zb=function(e,t){var i=this;return new Nn((function(n,r){function s(t,n){i.j=new ud(e),_d(i.j,i.s,t,n)}var a=e.app.options.apiKey;i.a.hasOwnProperty(a)||r(Error("Invalid project configuration: API key is invalid!"));var o=Vd(i.a[a],e.tenantId||"_",t&&t.providerIds);qd(i),r={signInSuccessWithAuthResult:function(e){return n(e),!1}};var c,u=Ud(i.a[a]).signInUiShown||null,l=!1;r.uiChanged=function(t,n){null===t&&"callback"===n?((t=Ft("firebaseui-id-page-callback",i.s))&&Zo(t),i.h=new Md,i.h.render(i.s)):l||null===t&&"spinner"===n||"blank"===n||(i.h&&(i.h.m(),i.h=null),l=!0,u&&u(e.tenantId))},o.callbacks=r,o.credentialHelper="none",t&&t.email&&(c={emailHint:t.email}),i.j?i.j.Wa().then((function(){s(o,c)})):s(o,c)}))},e.reset=function(){var e=this;return jn().then((function(){e.j&&e.j.Wa()})).then((function(){e.j=null,qd(e)}))},e.Vb=function(){var e=this;this.h||this.A||(this.A=window.setTimeout((function(){qd(e),e.h=new Md,e.g=e.h,e.h.render(e.s),e.A=null}),500))},e.mb=function(){window.clearTimeout(this.A),this.A=null,this.h&&(this.h.m(),this.h=null)},e.Bb=function(){return qd(this),this.g=new Hu,this.g.render(this.s),jn()},e.pb=function(e){var t,i=this,n=Ai({code:e.code}).toString()||e.message;qd(this),e.retry&&"function"==typeof e.retry&&(t=function(){i.reset(),e.retry()}),this.g=new zu(n,t),this.g.render(this.s)},e.Rb=function(e){var t=this;return jn().then((function(){var i=t.i&&t.i.app.options.apiKey;if(!t.a.hasOwnProperty(i))throw Error("Invalid project configuration: API key is invalid!");if(Bd(t.a[i],e.tenantId||"_"),!t.i.currentUser||t.i.currentUser.uid!==e.uid)throw Error("The user being processed does not match the signed in user!");return(i=Ud(t.a[i]).beforeSignInSuccess||null)?i(e):e})).then((function(t){if(t.uid!==e.uid)throw Error("User with mismatching UID returned.");return t}))},O("firebaseui.auth.FirebaseUiHandler",Kd),O("firebaseui.auth.FirebaseUiHandler.prototype.selectTenant",Kd.prototype.Ub),O("firebaseui.auth.FirebaseUiHandler.prototype.getAuth",Kd.prototype.Pb),O("firebaseui.auth.FirebaseUiHandler.prototype.startSignIn",Kd.prototype.Zb),O("firebaseui.auth.FirebaseUiHandler.prototype.reset",Kd.prototype.reset),O("firebaseui.auth.FirebaseUiHandler.prototype.showProgressBar",Kd.prototype.Vb),O("firebaseui.auth.FirebaseUiHandler.prototype.hideProgressBar",Kd.prototype.mb),O("firebaseui.auth.FirebaseUiHandler.prototype.completeSignOut",Kd.prototype.Bb),O("firebaseui.auth.FirebaseUiHandler.prototype.handleError",Kd.prototype.pb),O("firebaseui.auth.FirebaseUiHandler.prototype.processUser",Kd.prototype.Rb),O("firebaseui.auth.AuthUI",ud),O("firebaseui.auth.AuthUI.getInstance",(function(e){return e=hd(e),dd[e]?dd[e]:null})),O("firebaseui.auth.AuthUI.prototype.disableAutoSignIn",ud.prototype.Db),O("firebaseui.auth.AuthUI.prototype.start",ud.prototype.start),O("firebaseui.auth.AuthUI.prototype.setConfig",ud.prototype.ib),O("firebaseui.auth.AuthUI.prototype.signIn",ud.prototype.Wb),O("firebaseui.auth.AuthUI.prototype.reset",ud.prototype.reset),O("firebaseui.auth.AuthUI.prototype.delete",ud.prototype.Wa),O("firebaseui.auth.AuthUI.prototype.isPendingRedirect",ud.prototype.nb),O("firebaseui.auth.AuthUIError",Pi),O("firebaseui.auth.AuthUIError.prototype.toJSON",Pi.prototype.toJSON),O("firebaseui.auth.CredentialHelper.GOOGLE_YOLO",Ja),O("firebaseui.auth.CredentialHelper.NONE",Xa),O("firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID","anonymous"),Nn.prototype.catch=Nn.prototype.Ca,Nn.prototype.finally=Nn.prototype.fc}).apply("undefined"!=typeof global?global:"undefined"!=typeof self?self:window)}.apply("undefined"!=typeof global?global:"undefined"!=typeof self?self:window),"undefined"!=typeof window&&(window.dialogPolyfill=Vo);var Wo=firebaseui.auth;const zo=function(e=ti()){const t=Kt(e,"auth");if(t.isInitialized())return t.getImmediate();const i=function(e,t){const i=Kt(e,"auth");if(i.isInitialized()){const e=i.getImmediate();if(Ae(i.getOptions(),null!=t?t:{}))return e;Li(e,"already-initialized")}return i.initialize({options:t})}(e,{popupRedirectResolver:Oa,persistence:[ks,cs,ls]}),n=pe("authTokenSyncURL");if(n&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(n,location.origin);if(location.origin===e.origin){const t=(r=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),i=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Fa)return;const n=null==t?void 0:t.token;ja!==n&&(ja=n,await fetch(r,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))});!function(e,t,i){Me(e).beforeAuthStateChanged(t,i)}(i,t,(()=>t(i.currentUser))),function(e,t,i,n){Me(e).onIdTokenChanged(t,i,n)}(i,(e=>t(e)))}}var r;const s=(a="auth",null===(c=null===(o=he())||void 0===o?void 0:o.emulatorHosts)||void 0===c?void 0:c[a]);var a,o,c;return s&&Yn(i,`http://${s}`),i}(ei({apiKey:"AIzaSyAnbEWhDNFgo896bU3t-O20KuHr8jhHCxY",authDomain:"writing-assist.firebaseapp.com",databaseURL:"https://writing-assist-default-rtdb.firebaseio.com",projectId:"writing-assist",storageBucket:"writing-assist.appspot.com",messagingSenderId:"668975628741",appId:"1:668975628741:web:214e555ea5a1e4ae110bac",measurementId:"G-F6FS0Z1T0H"}));customElements.define("auth-ui",class extends ne{firstUpdated(){const e={callbacks:{signInSuccessWithAuthResult:(e,t)=>(console.log("User signed in successfully:",e),!1),signInFailure:e=>{console.error("Sign-in failure:",e)},uiShown:()=>{console.log("FirebaseUI widget shown")}},signInFlow:"popup",signInOptions:[dr.PROVIDER_ID],tosUrl:"<your-terms-of-service-url>",privacyPolicyUrl:"<your-privacy-policy-url>"},t=new Wo.AuthUI(zo);t.start(this.shadowRoot.querySelector("#firebaseui-auth-container"),e),zo.onAuthStateChanged((e=>{e&&(console.log("User already signed in:",e),t.reset())}))}render(){return B`
      <div id="firebaseui-auth-container"></div>
    `}});
