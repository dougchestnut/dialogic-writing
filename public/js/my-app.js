/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),i=new WeakMap;class o{constructor(e,t,i){if(this._$cssResult$=!0,i!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const r=this.t;if(t&&void 0===e){const t=void 0!==r&&1===r.length;t&&(e=i.get(r)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&i.set(r,e))}return e}toString(){return this.cssText}}const n=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,r,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1]),e[0]);return new o(i,e,r)},s=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return(e=>new o("string"==typeof e?e:e+"",void 0,r))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:a,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:d,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,p=globalThis,f=p.trustedTypes,v=f?f.emptyScript:"",m=p.reactiveElementPolyfillSupport,g=(e,t)=>e,b={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},y=(e,t)=>!a(e,t),_={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:y};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;class w extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(e,r,t);void 0!==i&&l(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){const{get:i,set:o}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return i?.call(this)},set(t){const n=i?.call(this);o.call(this,t),this.requestUpdate(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const e=this.properties,t=[...d(e),...h(e)];for(const r of t)this.createProperty(r,e[r])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,r]of t)this.elementProperties.set(e,r)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Eu(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((r,i)=>{if(t)r.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const t of i){const i=document.createElement("style"),o=e.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=t.cssText,r.appendChild(i)}})(r,this.constructor.elementStyles),r}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EC(e,t){const r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(void 0!==i&&!0===r.reflect){const o=(void 0!==r.converter?.toAttribute?r.converter:b).toAttribute(t,r.type);this._$Em=e,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(e,t){const r=this.constructor,i=r._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=r.getPropertyOptions(i),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:b;this._$Em=i,this[i]=o.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r){if(void 0!==e){if(r??=this.constructor.getPropertyOptions(e),!(r.hasChanged??y)(this[e],t))return;this.P(e,t,r)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],r)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[g("elementProperties")]=new Map,w[g("finalized")]=new Map,m?.({ReactiveElement:w}),(p.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,E=x.trustedTypes,I=E?E.createPolicy("lit-html",{createHTML:e=>e}):void 0,A="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,C="?"+S,T=`<${C}>`,$=document,k=()=>$.createComment(""),P=e=>null===e||"object"!=typeof e&&"function"!=typeof e,R=Array.isArray,O="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,D=/>/g,U=RegExp(`>|${O}(?:([^\\s"'>=/]+)(${O}*=${O}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),M=/'/g,z=/"/g,H=/^(?:script|style|textarea|title)$/i,V=(e=>(t,...r)=>({_$litType$:e,strings:t,values:r}))(1),F=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),B=new WeakMap,W=$.createTreeWalker($,129);function q(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==I?I.createHTML(t):t}class K{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let o=0,n=0;const s=e.length-1,a=this.parts,[l,c]=((e,t)=>{const r=e.length-1,i=[];let o,n=2===t?"<svg>":"",s=N;for(let t=0;t<r;t++){const r=e[t];let a,l,c=-1,d=0;for(;d<r.length&&(s.lastIndex=d,l=s.exec(r),null!==l);)d=s.lastIndex,s===N?"!--"===l[1]?s=L:void 0!==l[1]?s=D:void 0!==l[2]?(H.test(l[2])&&(o=RegExp("</"+l[2],"g")),s=U):void 0!==l[3]&&(s=U):s===U?">"===l[0]?(s=o??N,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?U:'"'===l[3]?z:M):s===z||s===M?s=U:s===L||s===D?s=N:(s=U,o=void 0);const h=s===U&&e[t+1].startsWith("/>")?" ":"";n+=s===N?r+T:c>=0?(i.push(a),r.slice(0,c)+A+r.slice(c)+S+h):r+S+(-2===c?t:h)}return[q(e,n+(e[r]||"<?>")+(2===t?"</svg>":"")),i]})(e,t);if(this.el=K.createElement(l,r),W.currentNode=this.el.content,2===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=W.nextNode())&&a.length<s;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(A)){const t=c[n++],r=i.getAttribute(e).split(S),s=/([.?@])?(.*)/.exec(t);a.push({type:1,index:o,name:s[2],strings:r,ctor:"."===s[1]?Z:"?"===s[1]?Q:"@"===s[1]?ee:X}),i.removeAttribute(e)}else e.startsWith(S)&&(a.push({type:6,index:o}),i.removeAttribute(e));if(H.test(i.tagName)){const e=i.textContent.split(S),t=e.length-1;if(t>0){i.textContent=E?E.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],k()),W.nextNode(),a.push({type:2,index:++o});i.append(e[t],k())}}}else if(8===i.nodeType)if(i.data===C)a.push({type:2,index:o});else{let e=-1;for(;-1!==(e=i.data.indexOf(S,e+1));)a.push({type:7,index:o}),e+=S.length-1}o++}}static createElement(e,t){const r=$.createElement("template");return r.innerHTML=e,r}}function G(e,t,r=e,i){if(t===F)return t;let o=void 0!==i?r._$Co?.[i]:r._$Cl;const n=P(t)?void 0:t._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(e),o._$AT(e,r,i)),void 0!==i?(r._$Co??=[])[i]=o:r._$Cl=o),void 0!==o&&(t=G(e,o._$AS(e,t.values),o,i)),t}class J{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,i=(e?.creationScope??$).importNode(t,!0);W.currentNode=i;let o=W.nextNode(),n=0,s=0,a=r[0];for(;void 0!==a;){if(n===a.index){let t;2===a.type?t=new Y(o,o.nextSibling,this,e):1===a.type?t=new a.ctor(o,a.name,a.strings,this,e):6===a.type&&(t=new te(o,this,e)),this._$AV.push(t),a=r[++s]}n!==a?.index&&(o=W.nextNode(),n++)}return W.currentNode=$,i}p(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,i){this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=G(this,e,t),P(e)?e===j||null==e||""===e?(this._$AH!==j&&this._$AR(),this._$AH=j):e!==this._$AH&&e!==F&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>R(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==j&&P(this._$AH)?this._$AA.nextSibling.data=e:this.T($.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,i="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=K.createElement(q(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new J(i,this),r=e.u(this.options);e.p(t),this.T(r),this._$AH=e}}_$AC(e){let t=B.get(e.strings);return void 0===t&&B.set(e.strings,t=new K(e)),t}k(e){R(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const o of e)i===t.length?t.push(r=new Y(this.S(k()),this.S(k()),this,this.options)):r=t[i],r._$AI(o),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,i,o){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=j}_$AI(e,t=this,r,i){const o=this.strings;let n=!1;if(void 0===o)e=G(this,e,t,0),n=!P(e)||e!==this._$AH&&e!==F,n&&(this._$AH=e);else{const i=e;let s,a;for(e=o[0],s=0;s<o.length-1;s++)a=G(this,i[r+s],t,s),a===F&&(a=this._$AH[s]),n||=!P(a)||a!==this._$AH[s],a===j?e=j:e!==j&&(e+=(a??"")+o[s+1]),this._$AH[s]=a}n&&!i&&this.j(e)}j(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Z extends X{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===j?void 0:e}}class Q extends X{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==j)}}class ee extends X{constructor(e,t,r,i,o){super(e,t,r,i,o),this.type=5}_$AI(e,t=this){if((e=G(this,e,t,0)??j)===F)return;const r=this._$AH,i=e===j&&r!==j||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==j&&(r===j||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class te{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}}const re=x.litHtmlPolyfillSupport;re?.(K,Y),(x.litHtmlVersions??=[]).push("3.1.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class ie extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,r)=>{const i=r?.renderBefore??t;let o=i._$litPart$;if(void 0===o){const e=r?.renderBefore??null;i._$litPart$=o=new Y(t.insertBefore(k(),e),e,void 0,r??{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}ie._$litElement$=!0,ie.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ie});const oe=globalThis.litElementPolyfillSupport;oe?.({LitElement:ie}),(globalThis.litElementVersions??=[]).push("4.0.5");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ne=window,se=ne.ShadowRoot&&(void 0===ne.ShadyCSS||ne.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ae=Symbol(),le=new WeakMap;class ce{constructor(e,t,r){if(this._$cssResult$=!0,r!==ae)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(se&&void 0===e){const r=void 0!==t&&1===t.length;r&&(e=le.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&le.set(t,e))}return e}toString(){return this.cssText}}const de=(e,...t)=>{const r=1===e.length?e[0]:t.reduce(((t,r,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1]),e[0]);return new ce(r,e,ae)},he=se?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return(e=>new ce("string"==typeof e?e:e+"",void 0,ae))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var ue;const pe=window,fe=pe.trustedTypes,ve=fe?fe.emptyScript:"",me=pe.reactiveElementPolyfillSupport,ge={toAttribute(e,t){switch(t){case Boolean:e=e?ve:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},be=(e,t)=>t!==e&&(t==t||e==e),ye={attribute:!0,type:String,converter:ge,reflect:!1,hasChanged:be},_e="finalized";class we extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,r)=>{const i=this._$Ep(r,t);void 0!==i&&(this._$Ev.set(i,r),e.push(i))})),e}static createProperty(e,t=ye){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const r="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,r,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,r){return{get(){return this[t]},set(i){const o=this[e];this[t]=i,this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ye}static finalize(){if(this.hasOwnProperty(_e))return!1;this[_e]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const r of t)this.createProperty(r,e[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const e of r)t.unshift(he(e))}else void 0!==e&&t.push(he(e));return t}static _$Ep(e,t){const r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,r;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(r=e.hostConnected)||void 0===r||r.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{se?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const r=document.createElement("style"),i=ne.litNonce;void 0!==i&&r.setAttribute("nonce",i),r.textContent=t.cssText,e.appendChild(r)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t,r=ye){var i;const o=this.constructor._$Ep(e,r);if(void 0!==o&&!0===r.reflect){const n=(void 0!==(null===(i=r.converter)||void 0===i?void 0:i.toAttribute)?r.converter:ge).toAttribute(t,r.type);this._$El=e,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(e,t){var r;const i=this.constructor,o=i._$Ev.get(e);if(void 0!==o&&this._$El!==o){const e=i.getPropertyOptions(o),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(r=e.converter)||void 0===r?void 0:r.fromAttribute)?e.converter:ge;this._$El=o,this[o]=n.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,r){let i=!0;void 0!==e&&(((r=r||this.constructor.getPropertyOptions(e)).hasChanged||be)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,r))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(r)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var xe;we[_e]=!0,we.elementProperties=new Map,we.elementStyles=[],we.shadowRootOptions={mode:"open"},null==me||me({ReactiveElement:we}),(null!==(ue=pe.reactiveElementVersions)&&void 0!==ue?ue:pe.reactiveElementVersions=[]).push("1.6.3");const Ee=window,Ie=Ee.trustedTypes,Ae=Ie?Ie.createPolicy("lit-html",{createHTML:e=>e}):void 0,Se="$lit$",Ce=`lit$${(Math.random()+"").slice(9)}$`,Te="?"+Ce,$e=`<${Te}>`,ke=document,Pe=()=>ke.createComment(""),Re=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Oe=Array.isArray,Ne="[ \t\n\f\r]",Le=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,De=/-->/g,Ue=/>/g,Me=RegExp(`>|${Ne}(?:([^\\s"'>=/]+)(${Ne}*=${Ne}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),ze=/'/g,He=/"/g,Ve=/^(?:script|style|textarea|title)$/i,Fe=(e=>(t,...r)=>({_$litType$:e,strings:t,values:r}))(1),je=Symbol.for("lit-noChange"),Be=Symbol.for("lit-nothing"),We=new WeakMap,qe=ke.createTreeWalker(ke,129,null,!1);function Ke(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Ae?Ae.createHTML(t):t}const Ge=(e,t)=>{const r=e.length-1,i=[];let o,n=2===t?"<svg>":"",s=Le;for(let t=0;t<r;t++){const r=e[t];let a,l,c=-1,d=0;for(;d<r.length&&(s.lastIndex=d,l=s.exec(r),null!==l);)d=s.lastIndex,s===Le?"!--"===l[1]?s=De:void 0!==l[1]?s=Ue:void 0!==l[2]?(Ve.test(l[2])&&(o=RegExp("</"+l[2],"g")),s=Me):void 0!==l[3]&&(s=Me):s===Me?">"===l[0]?(s=null!=o?o:Le,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?Me:'"'===l[3]?He:ze):s===He||s===ze?s=Me:s===De||s===Ue?s=Le:(s=Me,o=void 0);const h=s===Me&&e[t+1].startsWith("/>")?" ":"";n+=s===Le?r+$e:c>=0?(i.push(a),r.slice(0,c)+Se+r.slice(c)+Ce+h):r+Ce+(-2===c?(i.push(void 0),t):h)}return[Ke(e,n+(e[r]||"<?>")+(2===t?"</svg>":"")),i]};class Je{constructor({strings:e,_$litType$:t},r){let i;this.parts=[];let o=0,n=0;const s=e.length-1,a=this.parts,[l,c]=Ge(e,t);if(this.el=Je.createElement(l,r),qe.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(i=qe.nextNode())&&a.length<s;){if(1===i.nodeType){if(i.hasAttributes()){const e=[];for(const t of i.getAttributeNames())if(t.endsWith(Se)||t.startsWith(Ce)){const r=c[n++];if(e.push(t),void 0!==r){const e=i.getAttribute(r.toLowerCase()+Se).split(Ce),t=/([.?@])?(.*)/.exec(r);a.push({type:1,index:o,name:t[2],strings:e,ctor:"."===t[1]?et:"?"===t[1]?rt:"@"===t[1]?it:Qe})}else a.push({type:6,index:o})}for(const t of e)i.removeAttribute(t)}if(Ve.test(i.tagName)){const e=i.textContent.split(Ce),t=e.length-1;if(t>0){i.textContent=Ie?Ie.emptyScript:"";for(let r=0;r<t;r++)i.append(e[r],Pe()),qe.nextNode(),a.push({type:2,index:++o});i.append(e[t],Pe())}}}else if(8===i.nodeType)if(i.data===Te)a.push({type:2,index:o});else{let e=-1;for(;-1!==(e=i.data.indexOf(Ce,e+1));)a.push({type:7,index:o}),e+=Ce.length-1}o++}}static createElement(e,t){const r=ke.createElement("template");return r.innerHTML=e,r}}function Ye(e,t,r=e,i){var o,n,s,a;if(t===je)return t;let l=void 0!==i?null===(o=r._$Co)||void 0===o?void 0:o[i]:r._$Cl;const c=Re(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,r,i)),void 0!==i?(null!==(s=(a=r)._$Co)&&void 0!==s?s:a._$Co=[])[i]=l:r._$Cl=l),void 0!==l&&(t=Ye(e,l._$AS(e,t.values),l,i)),t}class Xe{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:r},parts:i}=this._$AD,o=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:ke).importNode(r,!0);qe.currentNode=o;let n=qe.nextNode(),s=0,a=0,l=i[0];for(;void 0!==l;){if(s===l.index){let t;2===l.type?t=new Ze(n,n.nextSibling,this,e):1===l.type?t=new l.ctor(n,l.name,l.strings,this,e):6===l.type&&(t=new ot(n,this,e)),this._$AV.push(t),l=i[++a]}s!==(null==l?void 0:l.index)&&(n=qe.nextNode(),s++)}return qe.currentNode=ke,o}v(e){let t=0;for(const r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class Ze{constructor(e,t,r,i){var o;this.type=2,this._$AH=Be,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=i,this._$Cp=null===(o=null==i?void 0:i.isConnected)||void 0===o||o}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ye(this,e,t),Re(e)?e===Be||null==e||""===e?(this._$AH!==Be&&this._$AR(),this._$AH=Be):e!==this._$AH&&e!==je&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>Oe(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Be&&Re(this._$AH)?this._$AA.nextSibling.data=e:this.$(ke.createTextNode(e)),this._$AH=e}g(e){var t;const{values:r,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Je.createElement(Ke(i.h,i.h[0]),this.options)),i);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===o)this._$AH.v(r);else{const e=new Xe(o,this),t=e.u(this.options);e.v(r),this.$(t),this._$AH=e}}_$AC(e){let t=We.get(e.strings);return void 0===t&&We.set(e.strings,t=new Je(e)),t}T(e){Oe(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,i=0;for(const o of e)i===t.length?t.push(r=new Ze(this.k(Pe()),this.k(Pe()),this,this.options)):r=t[i],r._$AI(o),i++;i<t.length&&(this._$AR(r&&r._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var r;for(null===(r=this._$AP)||void 0===r||r.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class Qe{constructor(e,t,r,i,o){this.type=1,this._$AH=Be,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Be}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,i){const o=this.strings;let n=!1;if(void 0===o)e=Ye(this,e,t,0),n=!Re(e)||e!==this._$AH&&e!==je,n&&(this._$AH=e);else{const i=e;let s,a;for(e=o[0],s=0;s<o.length-1;s++)a=Ye(this,i[r+s],t,s),a===je&&(a=this._$AH[s]),n||(n=!Re(a)||a!==this._$AH[s]),a===Be?e=Be:e!==Be&&(e+=(null!=a?a:"")+o[s+1]),this._$AH[s]=a}n&&!i&&this.j(e)}j(e){e===Be?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class et extends Qe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Be?void 0:e}}const tt=Ie?Ie.emptyScript:"";class rt extends Qe{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Be?this.element.setAttribute(this.name,tt):this.element.removeAttribute(this.name)}}class it extends Qe{constructor(e,t,r,i,o){super(e,t,r,i,o),this.type=5}_$AI(e,t=this){var r;if((e=null!==(r=Ye(this,e,t,0))&&void 0!==r?r:Be)===je)return;const i=this._$AH,o=e===Be&&i!==Be||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==Be&&(i===Be||o);o&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;"function"==typeof this._$AH?this._$AH.call(null!==(r=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==r?r:this.element,e):this._$AH.handleEvent(e)}}class ot{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Ye(this,e)}}const nt=Ee.litHtmlPolyfillSupport;null==nt||nt(Je,Ze),(null!==(xe=Ee.litHtmlVersions)&&void 0!==xe?xe:Ee.litHtmlVersions=[]).push("2.8.0");const st=(e,t,r)=>{var i,o;const n=null!==(i=null==r?void 0:r.renderBefore)&&void 0!==i?i:t;let s=n._$litPart$;if(void 0===s){const e=null!==(o=null==r?void 0:r.renderBefore)&&void 0!==o?o:null;n._$litPart$=s=new Ze(t.insertBefore(Pe(),e),e,void 0,null!=r?r:{})}return s._$AI(e),s
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */};var at,lt;class ct extends we{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const r=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=r.firstChild),r}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=st(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return je}}ct.finalized=!0,ct._$litElement$=!0,null===(at=globalThis.litElementHydrateSupport)||void 0===at||at.call(globalThis,{LitElement:ct});const dt=globalThis.litElementPolyfillSupport;function ht(e,t){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(r[i[o]]=e[i[o]])}return r}function ut(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s}null==dt||dt({LitElement:ct}),(null!==(lt=globalThis.litElementVersions)&&void 0!==lt?lt:globalThis.litElementVersions=[]).push("3.3.3"),"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pt=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:r,elements:i}=t;return{kind:r,elements:i,finisher(t){customElements.define(e,t)}}})(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ft=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(r){r.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(r){r.createProperty(t.key,e)}},vt=(e,t,r)=>{t.constructor.createProperty(r,e)};function mt(e){return(t,r)=>void 0!==r?vt(e,t,r):ft(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function gt(e){return mt({...e,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt=({finisher:e,descriptor:t})=>(r,i)=>{var o;if(void 0===i){const i=null!==(o=r.originalKey)&&void 0!==o?o:r.key,n=null!=t?{kind:"method",placement:"prototype",key:i,descriptor:t(r.key)}:{...r,key:i};return null!=e&&(n.finisher=function(t){e(t,i)}),n}{const o=r.constructor;void 0!==t&&Object.defineProperty(r,i,t(i)),null==e||e(o,i)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function yt(e,t){return bt({descriptor:r=>{const i={get(){var t,r;return null!==(r=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==r?r:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof r?Symbol():"__"+r;i.get=function(){var r,i;return void 0===this[t]&&(this[t]=null!==(i=null===(r=this.renderRoot)||void 0===r?void 0:r.querySelector(e))&&void 0!==i?i:null),this[t]}}return i}})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _t;const wt=null!=(null===(_t=window.HTMLSlotElement)||void 0===_t?void 0:_t.prototype.assignedElements)?(e,t)=>e.assignedElements(t):(e,t)=>e.assignedNodes(t).filter((e=>e.nodeType===Node.ELEMENT_NODE));function xt(e){const{slot:t,selector:r}=null!=e?e:{};return bt({descriptor:i=>({get(){var i;const o="slot"+(t?`[name=${t}]`:":not([name])"),n=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(o),s=null!=n?wt(n,e):[];return r?s.filter((e=>e.matches(r))):s},enumerable:!0,configurable:!0})})}
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Et extends ct{connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){return Fe`<span class="shadow"></span>`}}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const It=de`:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let At=class extends Et{};At.styles=[It],At=ut([pt("md-elevation")],At);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const St=Symbol("attachableController");let Ct;Ct=new MutationObserver((e=>{for(const t of e)t.target[St]?.hostConnected()}));class Tt{get htmlFor(){return this.host.getAttribute("for")}set htmlFor(e){null===e?this.host.removeAttribute("for"):this.host.setAttribute("for",e)}get control(){return this.host.hasAttribute("for")?this.htmlFor&&this.host.isConnected?this.host.getRootNode().querySelector(`#${this.htmlFor}`):null:this.currentControl||this.host.parentElement}set control(e){e?this.attach(e):this.detach()}constructor(e,t){this.host=e,this.onControlChange=t,this.currentControl=null,e.addController(this),e[St]=this,Ct?.observe(e,{attributeFilter:["for"]})}attach(e){e!==this.currentControl&&(this.setCurrentControl(e),this.host.removeAttribute("for"))}detach(){this.setCurrentControl(null),this.host.setAttribute("for","")}hostConnected(){this.setCurrentControl(this.control)}hostDisconnected(){this.setCurrentControl(null)}setCurrentControl(e){this.onControlChange(this.currentControl,e),this.currentControl=e}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const $t=["focusin","focusout","pointerdown"];class kt extends ct{constructor(){super(...arguments),this.visible=!1,this.inward=!1,this.attachableController=new Tt(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}handleEvent(e){if(!e[Pt]){switch(e.type){default:return;case"focusin":this.visible=this.control?.matches(":focus-visible")??!1;break;case"focusout":case"pointerdown":this.visible=!1}e[Pt]=!0}}onControlChange(e,t){for(const r of $t)e?.removeEventListener(r,this),t?.addEventListener(r,this)}update(e){e.has("visible")&&this.dispatchEvent(new Event("visibility-changed")),super.update(e)}}ut([mt({type:Boolean,reflect:!0})],kt.prototype,"visible",void 0),ut([mt({type:Boolean,reflect:!0})],kt.prototype,"inward",void 0);const Pt=Symbol("handledByFocusRing"),Rt=de`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}
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
 */let Ot=class extends kt{};Ot.styles=[Rt],Ot=ut([pt("md-focus-ring")],Ot);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Nt=1,Lt=3,Dt=4,Ut=e=>(...t)=>({_$litDirective$:e,values:t});class Mt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt=Ut(class extends Mt{constructor(e){var t;if(super(e),e.type!==Nt||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var r,i;if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(r=this.nt)||void 0===r?void 0:r.has(e))&&this.it.add(e);return this.render(t)}const o=e.element.classList;this.it.forEach((e=>{e in t||(o.remove(e),this.it.delete(e))}));for(const e in t){const r=!!t[e];r===this.it.has(e)||(null===(i=this.nt)||void 0===i?void 0:i.has(e))||(r?(o.add(e),this.it.add(e)):(o.remove(e),this.it.delete(e)))}return je}}),Ht="cubic-bezier(0.2, 0, 0, 1)";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Vt;!function(e){e[e.INACTIVE=0]="INACTIVE",e[e.TOUCH_DELAY=1]="TOUCH_DELAY",e[e.HOLDING=2]="HOLDING",e[e.WAITING_FOR_CLICK=3]="WAITING_FOR_CLICK"}(Vt||(Vt={}));const Ft=["click","contextmenu","pointercancel","pointerdown","pointerenter","pointerleave","pointerup"],jt=window.matchMedia("(forced-colors: active)");class Bt extends ct{constructor(){super(...arguments),this.disabled=!1,this.hovered=!1,this.pressed=!1,this.rippleSize="",this.rippleScale="",this.initialSize=0,this.state=Vt.INACTIVE,this.checkBoundsAfterContextMenu=!1,this.attachableController=new Tt(this,this.onControlChange.bind(this))}get htmlFor(){return this.attachableController.htmlFor}set htmlFor(e){this.attachableController.htmlFor=e}get control(){return this.attachableController.control}set control(e){this.attachableController.control=e}attach(e){this.attachableController.attach(e)}detach(){this.attachableController.detach()}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-hidden","true")}render(){const e={hovered:this.hovered,pressed:this.pressed};return Fe`<div class="surface ${zt(e)}"></div>`}update(e){e.has("disabled")&&this.disabled&&(this.hovered=!1,this.pressed=!1),super.update(e)}handlePointerenter(e){this.shouldReactToEvent(e)&&(this.hovered=!0)}handlePointerleave(e){this.shouldReactToEvent(e)&&(this.hovered=!1,this.state!==Vt.INACTIVE&&this.endPressAnimation())}handlePointerup(e){if(this.shouldReactToEvent(e)){if(this.state!==Vt.HOLDING)return this.state===Vt.TOUCH_DELAY?(this.state=Vt.WAITING_FOR_CLICK,void this.startPressAnimation(this.rippleStartEvent)):void 0;this.state=Vt.WAITING_FOR_CLICK}}async handlePointerdown(e){if(this.shouldReactToEvent(e)){if(this.rippleStartEvent=e,!this.isTouch(e))return this.state=Vt.WAITING_FOR_CLICK,void this.startPressAnimation(e);this.checkBoundsAfterContextMenu&&!this.inBounds(e)||(this.checkBoundsAfterContextMenu=!1,this.state=Vt.TOUCH_DELAY,await new Promise((e=>{setTimeout(e,150)})),this.state===Vt.TOUCH_DELAY&&(this.state=Vt.HOLDING,this.startPressAnimation(e)))}}handleClick(){this.disabled||(this.state!==Vt.WAITING_FOR_CLICK?this.state===Vt.INACTIVE&&(this.startPressAnimation(),this.endPressAnimation()):this.endPressAnimation())}handlePointercancel(e){this.shouldReactToEvent(e)&&this.endPressAnimation()}handleContextmenu(){this.disabled||(this.checkBoundsAfterContextMenu=!0,this.endPressAnimation())}determineRippleSize(){const{height:e,width:t}=this.getBoundingClientRect(),r=Math.max(e,t),i=Math.max(.35*r,75),o=Math.floor(.2*r),n=Math.sqrt(t**2+e**2)+10;this.initialSize=o,this.rippleScale=""+(n+i)/o,this.rippleSize=`${o}px`}getNormalizedPointerEventCoords(e){const{scrollX:t,scrollY:r}=window,{left:i,top:o}=this.getBoundingClientRect(),n=t+i,s=r+o,{pageX:a,pageY:l}=e;return{x:a-n,y:l-s}}getTranslationCoordinates(e){const{height:t,width:r}=this.getBoundingClientRect(),i={x:(r-this.initialSize)/2,y:(t-this.initialSize)/2};let o;return o=e instanceof PointerEvent?this.getNormalizedPointerEventCoords(e):{x:r/2,y:t/2},o={x:o.x-this.initialSize/2,y:o.y-this.initialSize/2},{startPoint:o,endPoint:i}}startPressAnimation(e){if(!this.mdRoot)return;this.pressed=!0,this.growAnimation?.cancel(),this.determineRippleSize();const{startPoint:t,endPoint:r}=this.getTranslationCoordinates(e),i=`${t.x}px, ${t.y}px`,o=`${r.x}px, ${r.y}px`;this.growAnimation=this.mdRoot.animate({top:[0,0],left:[0,0],height:[this.rippleSize,this.rippleSize],width:[this.rippleSize,this.rippleSize],transform:[`translate(${i}) scale(1)`,`translate(${o}) scale(${this.rippleScale})`]},{pseudoElement:"::after",duration:450,easing:Ht,fill:"forwards"})}async endPressAnimation(){this.rippleStartEvent=void 0,this.state=Vt.INACTIVE;const e=this.growAnimation;let t=1/0;"number"==typeof e?.currentTime?t=e.currentTime:e?.currentTime&&(t=e.currentTime.to("ms").value),t>=225?this.pressed=!1:(await new Promise((e=>{setTimeout(e,225-t)})),this.growAnimation===e&&(this.pressed=!1))}shouldReactToEvent(e){if(this.disabled||!e.isPrimary)return!1;if(this.rippleStartEvent&&this.rippleStartEvent.pointerId!==e.pointerId)return!1;if("pointerenter"===e.type||"pointerleave"===e.type)return!this.isTouch(e);const t=1===e.buttons;return this.isTouch(e)||t}inBounds({x:e,y:t}){const{top:r,left:i,bottom:o,right:n}=this.getBoundingClientRect();return e>=i&&e<=n&&t>=r&&t<=o}isTouch({pointerType:e}){return"touch"===e}async handleEvent(e){if(!jt?.matches)switch(e.type){case"click":this.handleClick();break;case"contextmenu":this.handleContextmenu();break;case"pointercancel":this.handlePointercancel(e);break;case"pointerdown":await this.handlePointerdown(e);break;case"pointerenter":this.handlePointerenter(e);break;case"pointerleave":this.handlePointerleave(e);break;case"pointerup":this.handlePointerup(e)}}onControlChange(e,t){for(const r of Ft)e?.removeEventListener(r,this),t?.addEventListener(r,this)}}ut([mt({type:Boolean,reflect:!0})],Bt.prototype,"disabled",void 0),ut([gt()],Bt.prototype,"hovered",void 0),ut([gt()],Bt.prototype,"pressed",void 0),ut([yt(".surface")],Bt.prototype,"mdRoot",void 0);
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Wt=de`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let qt=class extends Bt{};qt.styles=[Wt],qt=ut([pt("md-ripple")],qt);
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Kt=["ariaAtomic","ariaAutoComplete","ariaBusy","ariaChecked","ariaColCount","ariaColIndex","ariaColSpan","ariaCurrent","ariaDisabled","ariaExpanded","ariaHasPopup","ariaHidden","ariaInvalid","ariaKeyShortcuts","ariaLabel","ariaLevel","ariaLive","ariaModal","ariaMultiLine","ariaMultiSelectable","ariaOrientation","ariaPlaceholder","ariaPosInSet","ariaPressed","ariaReadOnly","ariaRequired","ariaRoleDescription","ariaRowCount","ariaRowIndex","ariaRowSpan","ariaSelected","ariaSetSize","ariaSort","ariaValueMax","ariaValueMin","ariaValueNow","ariaValueText"];function Gt(e){return e.replace("aria","aria-").replace(/Elements?/g,"").toLowerCase()}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Jt(e){for(const t of Kt)e.createProperty(t,{attribute:Gt(t),reflect:!0});e.addInitializer((e=>{const t={hostConnected(){e.setAttribute("role","presentation")}};e.addController(t)}))}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */Kt.map(Gt);const Yt=Symbol("internals"),Xt=Symbol("privateInternals");function Zt(e){return class extends e{get[Yt](){return this[Xt]||(this[Xt]=this.attachInternals()),this[Xt]}}}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Qt(e){e.addInitializer((e=>{const t=e;t.addEventListener("click",(async e=>{const{type:r,[Yt]:i}=t,{form:o}=i;o&&"button"!==r&&(await new Promise((e=>{setTimeout(e)})),e.defaultPrevented||("reset"!==r?(o.addEventListener("submit",(e=>{Object.defineProperty(e,"submitter",{configurable:!0,enumerable:!0,get:()=>t})}),{capture:!0,once:!0}),i.setFormValue(t.value),o.requestSubmit()):o.reset()))}))}))}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function er(e){return e.currentTarget===e.target&&(e.composedPath()[0]===e.target&&(!e.target.disabled&&!function(e){const t=tr;t&&(e.preventDefault(),e.stopImmediatePropagation());return async function(){tr=!0,await null,tr=!1}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */(),t}(e)))}let tr=!1;const rr=Zt(ct);class ir extends rr{get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[Yt].form}constructor(){super(),this.disabled=!1,this.href="",this.target="",this.trailingIcon=!1,this.hasIcon=!1,this.type="submit",this.value="",this.handleActivationClick=e=>{er(e)&&this.buttonElement&&(this.focus(),function(e){const t=new MouseEvent("click",{bubbles:!0});e.dispatchEvent(t)}(this.buttonElement))},this.addEventListener("click",this.handleActivationClick)}focus(){this.buttonElement?.focus()}blur(){this.buttonElement?.blur()}render(){const e=this.disabled&&!this.href,t=this.href?this.renderLink():this.renderButton(),r=this.href?"link":"button";return Fe`
      ${this.renderElevationOrOutline?.()}
      <div class="background"></div>
      <md-focus-ring part="focus-ring" for=${r}></md-focus-ring>
      <md-ripple for=${r} ?disabled="${e}"></md-ripple>
      ${t}
    `}renderButton(){const{ariaLabel:e,ariaHasPopup:t,ariaExpanded:r}=this;return Fe`<button
      id="button"
      class="button"
      ?disabled=${this.disabled}
      aria-label="${e||Be}"
      aria-haspopup="${t||Be}"
      aria-expanded="${r||Be}">
      ${this.renderContent()}
    </button>`}renderLink(){const{ariaLabel:e,ariaHasPopup:t,ariaExpanded:r}=this;return Fe`<a
      id="link"
      class="button"
      aria-label="${e||Be}"
      aria-haspopup="${t||Be}"
      aria-expanded="${r||Be}"
      href=${this.href}
      target=${this.target||Be}
      >${this.renderContent()}
    </a>`}renderContent(){const e=Fe`<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`;return Fe`
      <span class="touch"></span>
      ${this.trailingIcon?Be:e}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon?e:Be}
    `}handleSlotChange(){this.hasIcon=this.assignedIcons.length>0}}Jt(ir),Qt(ir),ir.formAssociated=!0,ir.shadowRootOptions={mode:"open",delegatesFocus:!0},ut([mt({type:Boolean,reflect:!0})],ir.prototype,"disabled",void 0),ut([mt()],ir.prototype,"href",void 0),ut([mt()],ir.prototype,"target",void 0),ut([mt({type:Boolean,attribute:"trailing-icon",reflect:!0})],ir.prototype,"trailingIcon",void 0),ut([mt({type:Boolean,attribute:"has-icon",reflect:!0})],ir.prototype,"hasIcon",void 0),ut([mt()],ir.prototype,"type",void 0),ut([mt({reflect:!0})],ir.prototype,"value",void 0),ut([yt(".button")],ir.prototype,"buttonElement",void 0),ut([xt({slot:"icon",flatten:!0})],ir.prototype,"assignedIcons",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class or extends ir{renderElevationOrOutline(){return Fe`<md-elevation part="elevation"></md-elevation>`}}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const nr=de`:host{--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-filled-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-color: var(--md-filled-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_container-shape-start-start: var(--md-filled-button-container-shape-start-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-button-container-shape-start-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-button-container-shape-end-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-button-container-shape-end-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-button-leading-space, 24px);--_trailing-space: var(--md-filled-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-button-with-trailing-icon-trailing-space, 16px)}
`
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */,sr=de`md-elevation{transition-duration:280ms}:host([disabled]) md-elevation{transition:none}md-elevation{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}:host(:focus-within) md-elevation{--md-elevation-level: var(--_focus-container-elevation)}:host(:hover) md-elevation{--md-elevation-level: var(--_hover-container-elevation)}:host(:active) md-elevation{--md-elevation-level: var(--_pressed-container-elevation)}:host([disabled]) md-elevation{--md-elevation-level: var(--_disabled-container-elevation)}
`
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */,ar=de`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit;text-transform:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background-color:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host([disabled]) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host([disabled]) .background{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host([disabled]){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host([disabled]) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let lr=class extends or{};lr.styles=[ar,sr,nr],lr=ut([pt("md-filled-button")],lr);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const cr=Symbol.for(""),dr=e=>{if((null==e?void 0:e.r)===cr)return null==e?void 0:e._$litStatic$},hr=(e,...t)=>({_$litStatic$:t.reduce(((t,r,i)=>t+(e=>{if(void 0!==e._$litStatic$)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(r)+e[i+1]),e[0]),r:cr}),ur=new Map,pr=(e=>(t,...r)=>{const i=r.length;let o,n;const s=[],a=[];let l,c=0,d=!1;for(;c<i;){for(l=t[c];c<i&&void 0!==(n=r[c],o=dr(n));)l+=o+t[++c],d=!0;c!==i&&a.push(n),s.push(l),c++}if(c===i&&s.push(t[i]),d){const e=s.join("$$lit$$");void 0===(t=ur.get(e))&&(s.raw=s,ur.set(e,t=s)),r=a}return e(t,...r)})(Fe);
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function fr(e,t=!0){return t&&"rtl"===getComputedStyle(e).getPropertyValue("direction").trim()}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const vr=Zt(ct);class mr extends vr{constructor(){super(...arguments),this.disabled=!1,this.flipIconInRtl=!1,this.href="",this.target="",this.ariaLabelSelected="",this.toggle=!1,this.selected=!1,this.type="submit",this.value="",this.flipIcon=fr(this,this.flipIconInRtl)}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get form(){return this[Yt].form}get labels(){return this[Yt].labels}willUpdate(){this.href&&(this.disabled=!1)}render(){const e=this.href?hr`div`:hr`button`,{ariaLabel:t,ariaHasPopup:r,ariaExpanded:i}=this,o=t&&this.ariaLabelSelected,n=this.toggle?this.selected:Be;let s=Be;return this.href||(s=o&&this.selected?this.ariaLabelSelected:t),pr`<${e}
        class="icon-button ${zt(this.getRenderClasses())}"
        id="button"
        aria-label="${s||Be}"
        aria-haspopup="${!this.href&&r||Be}"
        aria-expanded="${!this.href&&i||Be}"
        aria-pressed="${n}"
        ?disabled="${!this.href&&this.disabled}"
        @click="${this.handleClick}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${this.selected?Be:this.renderIcon()}
        ${this.selected?this.renderSelectedIcon():Be}
        ${this.renderTouchTarget()}
        ${this.href&&this.renderLink()}
  </${e}>`}renderLink(){const{ariaLabel:e}=this;return Fe`
      <a
        class="link"
        id="link"
        href="${this.href}"
        target="${this.target||Be}"
        aria-label="${e||Be}"></a>
    `}getRenderClasses(){return{"flip-icon":this.flipIcon,selected:this.toggle&&this.selected}}renderIcon(){return Fe`<span class="icon"><slot></slot></span>`}renderSelectedIcon(){return Fe`<span class="icon icon--selected"
      ><slot name="selected"><slot></slot></slot
    ></span>`}renderTouchTarget(){return Fe`<span class="touch"></span>`}renderFocusRing(){return Fe`<md-focus-ring
      part="focus-ring"
      for=${this.href?"link":"button"}></md-focus-ring>`}renderRipple(){return Fe`<md-ripple
      for=${this.href?"link":Be}
      ?disabled="${!this.href&&this.disabled}"></md-ripple>`}connectedCallback(){this.flipIcon=fr(this,this.flipIconInRtl),super.connectedCallback()}async handleClick(e){await 0,!this.toggle||this.disabled||e.defaultPrevented||(this.selected=!this.selected,this.dispatchEvent(new InputEvent("input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0})))}}Jt(mr),Qt(mr),mr.formAssociated=!0,mr.shadowRootOptions={mode:"open",delegatesFocus:!0},ut([mt({type:Boolean,reflect:!0})],mr.prototype,"disabled",void 0),ut([mt({type:Boolean,attribute:"flip-icon-in-rtl"})],mr.prototype,"flipIconInRtl",void 0),ut([mt()],mr.prototype,"href",void 0),ut([mt()],mr.prototype,"target",void 0),ut([mt({attribute:"aria-label-selected"})],mr.prototype,"ariaLabelSelected",void 0),ut([mt({type:Boolean})],mr.prototype,"toggle",void 0),ut([mt({type:Boolean,reflect:!0})],mr.prototype,"selected",void 0),ut([mt()],mr.prototype,"type",void 0),ut([mt({reflect:!0})],mr.prototype,"value",void 0),ut([gt()],mr.prototype,"flipIcon",void 0);
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const gr=de`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{height:100%;outline:none;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host([disabled]){--_disabled-icon-opacity: 1}}
`
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */,br=de`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-height: var(--md-icon-button-state-layer-height, 40px);--_state-layer-shape: var(--md-icon-button-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));--_state-layer-width: var(--md-icon-button-state-layer-width, 40px);--_focus-icon-color: var(--md-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-icon-button-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-icon-button-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: 0;--_container-shape-start-end: 0;--_container-shape-end-end: 0;--_container-shape-end-start: 0;--_container-height: 0;--_container-width: 0;height:var(--_state-layer-height);width:var(--_state-layer-width)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_state-layer-height))/2) max(0px,(48px - var(--_state-layer-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_state-layer-shape);--md-focus-ring-shape-start-end: var(--_state-layer-shape);--md-focus-ring-shape-end-end: var(--_state-layer-shape);--md-focus-ring-shape-end-start: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:disabled{color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:disabled .icon{opacity:var(--_disabled-icon-opacity)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}.selected:not(:disabled){color:var(--_selected-icon-color)}.selected:not(:disabled):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_selected-pressed-icon-color)}
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let yr=class extends mr{getRenderClasses(){return{...super.getRenderClasses(),standard:!0}}};yr.styles=[gr,br],yr=ut([pt("md-icon-button")],yr);
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
const _r=function(e){const t=[];let r=0;for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);o<128?t[r++]=o:o<2048?(t[r++]=o>>6|192,t[r++]=63&o|128):55296==(64512&o)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++i)),t[r++]=o>>18|240,t[r++]=o>>12&63|128,t[r++]=o>>6&63|128,t[r++]=63&o|128):(t[r++]=o>>12|224,t[r++]=o>>6&63|128,t[r++]=63&o|128)}return t},wr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const o=e[t],n=t+1<e.length,s=n?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,c=o>>2,d=(3&o)<<4|s>>4;let h=(15&s)<<2|l>>6,u=63&l;a||(u=64,n||(h=64)),i.push(r[c],r[d],r[h],r[u])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(_r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let r=0,i=0;for(;r<e.length;){const o=e[r++];if(o<128)t[i++]=String.fromCharCode(o);else if(o>191&&o<224){const n=e[r++];t[i++]=String.fromCharCode((31&o)<<6|63&n)}else if(o>239&&o<365){const n=((7&o)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[i++]=String.fromCharCode(55296+(n>>10)),t[i++]=String.fromCharCode(56320+(1023&n))}else{const n=e[r++],s=e[r++];t[i++]=String.fromCharCode((15&o)<<12|(63&n)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const o=r[e.charAt(t++)],n=t<e.length?r[e.charAt(t)]:0;++t;const s=t<e.length?r[e.charAt(t)]:64;++t;const a=t<e.length?r[e.charAt(t)]:64;if(++t,null==o||null==n||null==s||null==a)throw new xr;const l=o<<2|n>>4;if(i.push(l),64!==s){const e=n<<4&240|s>>2;if(i.push(e),64!==a){const e=s<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class xr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Er=function(e){return function(e){const t=_r(e);return wr.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Ir=function(e){try{return wr.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
const Ar=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,Sr=()=>{try{return Ar()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&Ir(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},Cr=()=>{var e;return null===(e=Sr())||void 0===e?void 0:e.config},Tr=e=>{var t;return null===(t=Sr())||void 0===t?void 0:t[`_${e}`]};
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
class $r{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,r))}}}
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
 */function kr(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class Pr extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,Pr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rr.prototype.create)}}class Rr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],n=o?function(e,t){return e.replace(Or,((e,r)=>{const i=t[r];return null!=i?String(i):`<${r}?>`}))}(o,r):"Error",s=`${this.serviceName}: ${n} (${i}).`;return new Pr(i,s,r)}}const Or=/\{\$([^}]+)}/g;function Nr(e,t){if(e===t)return!0;const r=Object.keys(e),i=Object.keys(t);for(const o of r){if(!i.includes(o))return!1;const r=e[o],n=t[o];if(Lr(r)&&Lr(n)){if(!Nr(r,n))return!1}else if(r!==n)return!1}for(const e of i)if(!r.includes(e))return!1;return!0}function Lr(e){return null!==e&&"object"==typeof e}
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
 */function Dr(e){const t=[];for(const[r,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(r)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function Ur(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[r,i]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(i)}})),t}function Mr(e){const t=e.indexOf("?");if(!t)return"";const r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}class zr{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,r){let i;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r},void 0===i.next&&(i.next=Hr),void 0===i.error&&(i.error=Hr),void 0===i.complete&&(i.complete=Hr);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),o}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Hr(){}
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
 */function Vr(e){return e&&e._delegate?e._delegate:e}class Fr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const jr="[DEFAULT]";
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
 */class Br{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new $r;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:jr})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=jr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=jr){return this.instances.has(e)}getOptions(e=jr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[e,t]of this.instancesDeferred.entries()){r===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),o=null!==(r=this.onInitCallbacks.get(i))&&void 0!==r?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const n=this.instances.get(i);return n&&e(n,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===jr?void 0:i),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}var i;return r||null}normalizeInstanceIdentifier(e=jr){return this.component?this.component.multipleInstances?e:jr:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Wr{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Br(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */var qr;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(qr||(qr={}));const Kr={debug:qr.DEBUG,verbose:qr.VERBOSE,info:qr.INFO,warn:qr.WARN,error:qr.ERROR,silent:qr.SILENT},Gr=qr.INFO,Jr={[qr.DEBUG]:"log",[qr.VERBOSE]:"log",[qr.INFO]:"info",[qr.WARN]:"warn",[qr.ERROR]:"error"},Yr=(e,t,...r)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),o=Jr[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${i}]  ${e.name}:`,...r)};class Xr{constructor(e){this.name=e,this._logLevel=Gr,this._logHandler=Yr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in qr))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Kr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,qr.DEBUG,...e),this._logHandler(this,qr.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,qr.VERBOSE,...e),this._logHandler(this,qr.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,qr.INFO,...e),this._logHandler(this,qr.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,qr.WARN,...e),this._logHandler(this,qr.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,qr.ERROR,...e),this._logHandler(this,qr.ERROR,...e)}}const Zr=(e,t)=>t.some((t=>e instanceof t));let Qr,ei;const ti=new WeakMap,ri=new WeakMap,ii=new WeakMap,oi=new WeakMap,ni=new WeakMap;let si={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return ri.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ii.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return ci(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function ai(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ei||(ei=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(di(this),t),ci(ti.get(this))}:function(...t){return ci(e.apply(di(this),t))}:function(t,...r){const i=e.call(di(this),t,...r);return ii.set(i,t.sort?t.sort():[t]),ci(i)}}function li(e){return"function"==typeof e?ai(e):(e instanceof IDBTransaction&&function(e){if(ri.has(e))return;const t=new Promise(((t,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",n),e.removeEventListener("abort",n)},o=()=>{t(),i()},n=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",n),e.addEventListener("abort",n)}));ri.set(e,t)}(e),Zr(e,Qr||(Qr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,si):e)}function ci(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",n)},o=()=>{t(ci(e.result)),i()},n=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",n)}));return t.then((t=>{t instanceof IDBCursor&&ti.set(t,e)})).catch((()=>{})),ni.set(t,e),t}(e);if(oi.has(e))return oi.get(e);const t=li(e);return t!==e&&(oi.set(e,t),ni.set(t,e)),t}const di=e=>ni.get(e);const hi=["get","getKey","getAll","getAllKeys","count"],ui=["put","add","delete","clear"],pi=new Map;function fi(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(pi.get(t))return pi.get(t);const r=t.replace(/FromIndex$/,""),i=t!==r,o=ui.includes(r);if(!(r in(i?IDBIndex:IDBObjectStore).prototype)||!o&&!hi.includes(r))return;const n=async function(e,...t){const n=this.transaction(e,o?"readwrite":"readonly");let s=n.store;return i&&(s=s.index(t.shift())),(await Promise.all([s[r](...t),o&&n.done]))[0]};return pi.set(t,n),n}si=(e=>({...e,get:(t,r,i)=>fi(t,r)||e.get(t,r,i),has:(t,r)=>!!fi(t,r)||e.has(t,r)}))(si);
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
class vi{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const mi="@firebase/app",gi="0.10.3",bi=new Xr("@firebase/app"),yi="@firebase/app-compat",_i="@firebase/analytics-compat",wi="@firebase/analytics",xi="@firebase/app-check-compat",Ei="@firebase/app-check",Ii="@firebase/auth",Ai="@firebase/auth-compat",Si="@firebase/database",Ci="@firebase/database-compat",Ti="@firebase/functions",$i="@firebase/functions-compat",ki="@firebase/installations",Pi="@firebase/installations-compat",Ri="@firebase/messaging",Oi="@firebase/messaging-compat",Ni="@firebase/performance",Li="@firebase/performance-compat",Di="@firebase/remote-config",Ui="@firebase/remote-config-compat",Mi="@firebase/storage",zi="@firebase/storage-compat",Hi="@firebase/firestore",Vi="@firebase/vertexai-preview",Fi="@firebase/firestore-compat",ji="firebase",Bi="[DEFAULT]",Wi={[mi]:"fire-core",[yi]:"fire-core-compat",[wi]:"fire-analytics",[_i]:"fire-analytics-compat",[Ei]:"fire-app-check",[xi]:"fire-app-check-compat",[Ii]:"fire-auth",[Ai]:"fire-auth-compat",[Si]:"fire-rtdb",[Ci]:"fire-rtdb-compat",[Ti]:"fire-fn",[$i]:"fire-fn-compat",[ki]:"fire-iid",[Pi]:"fire-iid-compat",[Ri]:"fire-fcm",[Oi]:"fire-fcm-compat",[Ni]:"fire-perf",[Li]:"fire-perf-compat",[Di]:"fire-rc",[Ui]:"fire-rc-compat",[Mi]:"fire-gcs",[zi]:"fire-gcs-compat",[Hi]:"fire-fst",[Fi]:"fire-fst-compat",[Vi]:"fire-vertex","fire-js":"fire-js",[ji]:"fire-js-all"},qi=new Map,Ki=new Map,Gi=new Map;function Ji(e,t){try{e.container.addComponent(t)}catch(r){bi.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function Yi(e){const t=e.name;if(Gi.has(t))return bi.debug(`There were multiple attempts to register component ${t}.`),!1;Gi.set(t,e);for(const t of qi.values())Ji(t,e);for(const t of Ki.values())Ji(t,e);return!0}function Xi(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function Zi(e){return void 0!==e.settings}
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
 */const Qi=new Rr("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
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
class eo{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fr("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qi.create("app-deleted",{appName:this._name})}}
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
 */const to="10.12.0";function ro(e,t={}){let r=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:Bi,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!=typeof o||!o)throw Qi.create("bad-app-name",{appName:String(o)});if(r||(r=Cr()),!r)throw Qi.create("no-options");const n=qi.get(o);if(n){if(Nr(r,n.options)&&Nr(i,n.config))return n;throw Qi.create("duplicate-app",{appName:o})}const s=new Wr(o);for(const e of Gi.values())s.addComponent(e);const a=new eo(r,i,s);return qi.set(o,a),a}function io(e,t,r){var i;let o=null!==(i=Wi[e])&&void 0!==i?i:e;r&&(o+=`-${r}`);const n=o.match(/\s|\//),s=t.match(/\s|\//);if(n||s){const e=[`Unable to register library "${o}" with version "${t}":`];return n&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),n&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void bi.warn(e.join(" "))}Yi(new Fr(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}
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
 */const oo="firebase-heartbeat-database",no=1,so="firebase-heartbeat-store";let ao=null;function lo(){return ao||(ao=function(e,t,{blocked:r,upgrade:i,blocking:o,terminated:n}={}){const s=indexedDB.open(e,t),a=ci(s);return i&&s.addEventListener("upgradeneeded",(e=>{i(ci(s.result),e.oldVersion,e.newVersion,ci(s.transaction),e)})),r&&s.addEventListener("blocked",(e=>r(e.oldVersion,e.newVersion,e))),a.then((e=>{n&&e.addEventListener("close",(()=>n())),o&&e.addEventListener("versionchange",(e=>o(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}(oo,no,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(so)}catch(e){console.warn(e)}}}).catch((e=>{throw Qi.create("idb-open",{originalErrorMessage:e.message})}))),ao}async function co(e,t){try{const r=(await lo()).transaction(so,"readwrite"),i=r.objectStore(so);await i.put(t,ho(e)),await r.done}catch(e){if(e instanceof Pr)bi.warn(e.message);else{const t=Qi.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});bi.warn(t.message)}}}function ho(e){return`${e.name}!${e.options.appId}`}
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
 */class uo{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new fo(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=po();if((null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==i&&!this._heartbeatsCache.heartbeats.some((e=>e.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=po(),{heartbeatsToSend:r,unsentEntries:i}=function(e,t=1024){const r=[];let i=e.slice();for(const o of e){const e=r.find((e=>e.agent===o.agent));if(e){if(e.dates.push(o.date),vo(r)>t){e.dates.pop();break}}else if(r.push({agent:o.agent,dates:[o.date]}),vo(r)>t){r.pop();break}i=i.slice(1)}return{heartbeatsToSend:r,unsentEntries:i}}(this._heartbeatsCache.heartbeats),o=Er(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function po(){return(new Date).toISOString().substring(0,10)}class fo{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise(((e,t)=>{try{let r=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),r||self.indexedDB.deleteDatabase(i),e(!0)},o.onupgradeneeded=()=>{r=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await lo()).transaction(so),r=await t.objectStore(so).get(ho(e));return await t.done,r}catch(e){if(e instanceof Pr)bi.warn(e.message);else{const t=Qi.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});bi.warn(t.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return co(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return co(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}}function vo(e){return Er(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var mo;mo="",Yi(new Fr("platform-logger",(e=>new vi(e)),"PRIVATE")),Yi(new Fr("heartbeat",(e=>new uo(e)),"PRIVATE")),io(mi,gi,mo),io(mi,gi,"esm2017"),io("fire-js","");function go(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}
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
io("firebase","10.12.0","app");const bo=go,yo=new Rr("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),_o=new Xr("@firebase/auth");function wo(e,...t){_o.logLevel<=qr.ERROR&&_o.error(`Auth (${to}): ${e}`,...t)}
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
 */function xo(e,...t){throw So(e,...t)}function Eo(e,...t){return So(e,...t)}function Io(e,t,r){const i=Object.assign(Object.assign({},bo()),{[t]:r});return new Rr("auth","Firebase",i).create(t,{appName:e.name})}function Ao(e){return Io(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function So(e,...t){if("string"!=typeof e){const r=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(r,...i)}return yo.create(e,...t)}function Co(e,t,...r){if(!e)throw So(t,...r)}function To(e){const t="INTERNAL ASSERTION FAILED: "+e;throw wo(t),new Error(t)}function $o(e,t){e||To(t)}
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
 */function ko(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Po(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function Ro(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Po()&&"https:"!==Po()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
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
class Oo{constructor(e,t){this.shortDelay=e,this.longDelay=t,$o(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kr())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return Ro()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function No(e,t){$o(e.emulator,"Emulator should always be set here");const{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}
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
 */class Lo{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void To("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void To("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void To("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const Do={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Uo=new Oo(3e4,6e4);
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
 */function Mo(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function zo(e,t,r,i,o={}){return Ho(e,o,(async()=>{let o={},n={};i&&("GET"===t?n=i:o={body:JSON.stringify(i)});const s=Dr(Object.assign({key:e.config.apiKey},n)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Lo.fetch()(Fo(e,e.config.apiHost,r,s),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},o))}))}async function Ho(e,t,r){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},Do),t);try{const t=new Bo(e),o=await Promise.race([r(),t.promise]);t.clearNetworkTimeout();const n=await o.json();if("needConfirmation"in n)throw Wo(e,"account-exists-with-different-credential",n);if(o.ok&&!("errorMessage"in n))return n;{const t=o.ok?n.errorMessage:n.error.message,[r,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===r)throw Wo(e,"credential-already-in-use",n);if("EMAIL_EXISTS"===r)throw Wo(e,"email-already-in-use",n);if("USER_DISABLED"===r)throw Wo(e,"user-disabled",n);const a=i[r]||r.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw Io(e,a,s);xo(e,a)}}catch(t){if(t instanceof Pr)throw t;xo(e,"network-request-failed",{message:String(t)})}}async function Vo(e,t,r,i,o={}){const n=await zo(e,t,r,i,o);return"mfaPendingCredential"in n&&xo(e,"multi-factor-auth-required",{_serverResponse:n}),n}function Fo(e,t,r,i){const o=`${t}${r}?${i}`;return e.config.emulator?No(e.config,o):`${e.config.apiScheme}://${o}`}function jo(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Bo{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Eo(this.auth,"network-request-failed"))),Uo.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Wo(e,t,r){const i={appName:e.name};r.email&&(i.email=r.email),r.phoneNumber&&(i.phoneNumber=r.phoneNumber);const o=Eo(e,t,i);return o.customData._tokenResponse=r,o}function qo(e){return void 0!==e&&void 0!==e.enterprise}class Ko{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return jo(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}}async function Go(e,t){return zo(e,"POST","/v1/accounts:lookup",t)}
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
 */function Jo(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function Yo(e){return 1e3*Number(e)}function Xo(e){const[t,r,i]=e.split(".");if(void 0===t||void 0===r||void 0===i)return wo("JWT malformed, contained fewer than 3 sections"),null;try{const e=Ir(r);return e?JSON.parse(e):(wo("Failed to decode base64 JWT payload"),null)}catch(e){return wo("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}function Zo(e){const t=Xo(e);return Co(t,"internal-error"),Co(void 0!==t.exp,"internal-error"),Co(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
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
 */async function Qo(e,t,r=!1){if(r)return t;try{return await t}catch(t){throw t instanceof Pr&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class en{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
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
 */class tn{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jo(this.lastLoginAt),this.creationTime=Jo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function rn(e){var t;const r=e.auth,i=await e.getIdToken(),o=await Qo(e,Go(r,{idToken:i}));Co(null==o?void 0:o.users.length,r,"internal-error");const n=o.users[0];e._notifyReloadListener(n);const s=(null===(t=n.providerUserInfo)||void 0===t?void 0:t.length)?on(n.providerUserInfo):[],a=function(e,t){const r=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...r,...t]}(e.providerData,s),l=e.isAnonymous,c=!(e.email&&n.passwordHash||(null==a?void 0:a.length)),d=!!l&&c,h={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:a,metadata:new tn(n.createdAt,n.lastLoginAt),isAnonymous:d};Object.assign(e,h)}function on(e){return e.map((e=>{var{providerId:t}=e,r=ht(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}))}
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
class nn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Co(e.idToken,"internal-error"),Co(void 0!==e.idToken,"internal-error"),Co(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):Zo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Co(0!==e.length,"internal-error");const t=Zo(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(Co(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await async function(e,t){const r=await Ho(e,{},(async()=>{const r=Dr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,n=Fo(e,i,"/v1/token",`key=${o}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",Lo.fetch()(n,{method:"POST",headers:s,body:r})}));return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,n=new nn;return r&&(Co("string"==typeof r,"internal-error",{appName:e}),n.refreshToken=r),i&&(Co("string"==typeof i,"internal-error",{appName:e}),n.accessToken=i),o&&(Co("number"==typeof o,"internal-error",{appName:e}),n.expirationTime=o),n}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nn,this.toJSON())}_performRefresh(){return To("not implemented")}}
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
 */function sn(e,t){Co("string"==typeof e||void 0===e,"internal-error",{appName:t})}class an{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,o=ht(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new en(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new tn(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Qo(this,this.stsTokenManager.getToken(this.auth,e));return Co(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const r=Vr(e),i=await r.getIdToken(t),o=Xo(i);Co(o&&o.exp&&o.auth_time&&o.iat,r.auth,"internal-error");const n="object"==typeof o.firebase?o.firebase:void 0,s=null==n?void 0:n.sign_in_provider;return{claims:o,token:i,authTime:Jo(Yo(o.auth_time)),issuedAtTime:Jo(Yo(o.iat)),expirationTime:Jo(Yo(o.exp)),signInProvider:s||null,signInSecondFactor:(null==n?void 0:n.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Vr(e);await rn(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Co(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new an(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Co(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await rn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zi(this.auth.app))return Promise.reject(Ao(this.auth));const e=await this.getIdToken();return await Qo(this,
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
async function(e,t){return zo(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,o,n,s,a,l,c;const d=null!==(r=t.displayName)&&void 0!==r?r:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,u=null!==(o=t.phoneNumber)&&void 0!==o?o:void 0,p=null!==(n=t.photoURL)&&void 0!==n?n:void 0,f=null!==(s=t.tenantId)&&void 0!==s?s:void 0,v=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,g=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:b,emailVerified:y,isAnonymous:_,providerData:w,stsTokenManager:x}=t;Co(b&&x,e,"internal-error");const E=nn.fromJSON(this.name,x);Co("string"==typeof b,e,"internal-error"),sn(d,e.name),sn(h,e.name),Co("boolean"==typeof y,e,"internal-error"),Co("boolean"==typeof _,e,"internal-error"),sn(u,e.name),sn(p,e.name),sn(f,e.name),sn(v,e.name),sn(m,e.name),sn(g,e.name);const I=new an({uid:b,auth:e,email:h,emailVerified:y,displayName:d,isAnonymous:_,photoURL:p,phoneNumber:u,tenantId:f,stsTokenManager:E,createdAt:m,lastLoginAt:g});return w&&Array.isArray(w)&&(I.providerData=w.map((e=>Object.assign({},e)))),v&&(I._redirectEventId=v),I}static async _fromIdTokenResponse(e,t,r=!1){const i=new nn;i.updateFromServerResponse(t);const o=new an({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await rn(o),o}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];Co(void 0!==i.localId,"internal-error");const o=void 0!==i.providerUserInfo?on(i.providerUserInfo):[],n=!(i.email&&i.passwordHash||(null==o?void 0:o.length)),s=new nn;s.updateFromIdToken(r);const a=new an({uid:i.localId,auth:e,stsTokenManager:s,isAnonymous:n}),l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new tn(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash||(null==o?void 0:o.length))};return Object.assign(a,l),a}}
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
 */const ln=new Map;function cn(e){$o(e instanceof Function,"Expected a class definition");let t=ln.get(e);return t?($o(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ln.set(e,t),t)}
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
 */class dn{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}dn.type="NONE";const hn=dn;
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
 */function un(e,t,r){return`firebase:${e}:${t}:${r}`}class pn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=un(this.userKey,i.apiKey,o),this.fullPersistenceKey=un("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?an._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new pn(cn(hn),e,r);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let o=i[0]||cn(hn);const n=un(r,e.config.apiKey,e.name);let s=null;for(const r of t)try{const t=await r._get(n);if(t){const i=an._fromJSON(e,t);r!==o&&(s=i),o=r;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return o._shouldAllowMigration&&a.length?(o=a[0],s&&await o._set(n,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==o)try{await e._remove(n)}catch(e){}}))),new pn(o,e,r)):new pn(o,e,r)}}
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
 */function fn(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(bn(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(vn(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(_n(t))return"Blackberry";if(wn(t))return"Webos";if(mn(t))return"Safari";if((t.includes("chrome/")||gn(t))&&!t.includes("edge/"))return"Chrome";if(yn(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(t);if(2===(null==r?void 0:r.length))return r[1]}return"Other"}function vn(e=kr()){return/firefox\//i.test(e)}function mn(e=kr()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function gn(e=kr()){return/crios\//i.test(e)}function bn(e=kr()){return/iemobile/i.test(e)}function yn(e=kr()){return/android/i.test(e)}function _n(e=kr()){return/blackberry/i.test(e)}function wn(e=kr()){return/webos/i.test(e)}function xn(e=kr()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function En(){return function(){const e=kr();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function In(e=kr()){return xn(e)||yn(e)||wn(e)||_n(e)||/windows phone/i.test(e)||bn(e)}
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
function An(e,t=[]){let r;switch(e){case"Browser":r=fn(kr());break;case"Worker":r=`${fn(kr())}-${e}`;break;default:r=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${to}/${i}`}
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
 */class Sn{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=t=>new Promise(((r,i)=>{try{r(e(t))}catch(e){i(e)}}));r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
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
 */class Cn{constructor(e){var t,r,i,o;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=n.minPasswordLength)&&void 0!==t?t:6,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),void 0!==n.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),void 0!==n.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),void 0!==n.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),void 0!==n.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(i=null===(r=e.allowedNonAlphanumericCharacters)||void 0===r?void 0:r.join(""))&&void 0!==i?i:"",this.forceUpgradeOnSignin=null!==(o=e.forceUpgradeOnSignin)&&void 0!==o&&o,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,o,n,s;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(r=a.meetsMaxPasswordLength)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsLowercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(o=a.containsUppercaseLetter)||void 0===o||o),a.isValid&&(a.isValid=null===(n=a.containsNumericCharacter)||void 0===n||n),a.isValid&&(a.isValid=null===(s=a.containsNonAlphanumericCharacter)||void 0===s||s),a}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){let r;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}
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
 */class Tn{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kn(this),this.idTokenSubscription=new kn(this),this.beforeStateQueue=new Sn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=cn(t)),this._initializationPromise=this.queue((async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await pn.create(this,e),!this._deleted)){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await Go(this,{idToken:e}),r=await an._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Zi(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,n=null==i?void 0:i._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==n||!(null==s?void 0:s.user)||(i=s.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=r,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Co(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await rn(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Zi(this.app))return Promise.reject(Ao(this));const t=e?Vr(e):null;return t&&Co(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Co(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return Zi(this.app)?Promise.reject(Ao(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Zi(this.app)?Promise.reject(Ao(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(cn(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return zo(e,"GET","/v2/passwordPolicy",Mo(e,t))}
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
 */(this),t=new Cn(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Rr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged((()=>{r(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return zo(e,"POST","/v2/accounts:revokeToken",Mo(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&cn(e)||this._popupRedirectResolver;Co(t,this,"argument-error"),this.redirectPersistenceManager=await pn.create(this,[cn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(r=this.redirectUser)||void 0===r?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o="function"==typeof t?t:t.next.bind(t);let n=!1;const s=this._isInitialized?Promise.resolve():this._initializationPromise;if(Co(s,this,"internal-error"),s.then((()=>{n||o(this.currentUser)})),"function"==typeof t){const o=e.addObserver(t,r,i);return()=>{n=!0,o()}}{const r=e.addObserver(t);return()=>{n=!0,r()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Co(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=An(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){_o.logLevel<=qr.WARN&&_o.warn(`Auth (${to}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function $n(e){return Vr(e)}class kn{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const r=new zr(e,t);return r.subscribe.bind(r)}((e=>this.observer=e))}get next(){return Co(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */let Pn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Rn(e){return Pn.loadJS(e)}class On{constructor(e){this.type="recaptcha-enterprise",this.auth=$n(e)}async verify(e="verify",t=!1){async function r(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,r)=>{(async function(e,t){return zo(e,"GET","/v2/recaptchaConfig",Mo(e,t))})(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const r=new Ko(i);return null==e.tenantId?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,t(r.siteKey)}r(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{r(e)}))}))}function i(t,r,i){const o=window.grecaptcha;qo(o)?o.enterprise.ready((()=>{o.enterprise.execute(t,{action:e}).then((e=>{r(e)})).catch((()=>{r("NO_RECAPTCHA")}))})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,o)=>{r(this.auth).then((r=>{if(!t&&qo(window.grecaptcha))i(r,e,o);else{if("undefined"==typeof window)return void o(new Error("RecaptchaVerifier is only supported in browser"));let t=Pn.recaptchaEnterpriseScript;0!==t.length&&(t+=r),Rn(t).then((()=>{i(r,e,o)})).catch((e=>{o(e)}))}})).catch((e=>{o(e)}))}))}}async function Nn(e,t,r,i=!1){const o=new On(e);let n;try{n=await o.verify(r)}catch(e){n=await o.verify(r,!0)}const s=Object.assign({},t);return i?Object.assign(s,{captchaResp:n}):Object.assign(s,{captchaResponse:n}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function Ln(e,t,r,i){var o;if(null===(o=e._getRecaptchaConfig())||void 0===o?void 0:o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Nn(e,t,r,"getOobCode"===r);return i(e,o)}return i(e,t).catch((async o=>{if("auth/missing-recaptcha-token"===o.code){console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Nn(e,t,r,"getOobCode"===r);return i(e,o)}return Promise.reject(o)}))}
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
 */function Dn(e,t,r){const i=$n(e);Co(i._canInitEmulator,i,"emulator-config-failed"),Co(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const o=!!(null==r?void 0:r.disableWarnings),n=Un(t),{host:s,port:a}=function(e){const t=Un(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};const i=r[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const e=o[1];return{host:e,port:Mn(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:Mn(t)}}}(t),l=null===a?"":`:${a}`;i.config.emulator={url:`${n}//${s}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:s,port:a,protocol:n.replace(":",""),options:Object.freeze({disableWarnings:o})}),o||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function Un(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Mn(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class zn{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return To("not implemented")}_getIdTokenResponse(e){return To("not implemented")}_linkToIdToken(e,t){return To("not implemented")}_getReauthenticationResolver(e){return To("not implemented")}}async function Hn(e,t){return zo(e,"POST","/v1/accounts:signUp",t)}
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
 */async function Vn(e,t){return Vo(e,"POST","/v1/accounts:signInWithPassword",Mo(e,t))}
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
class Fn extends zn{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Fn(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Fn(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Ln(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",Vn);case"emailLink":return async function(e,t){return Vo(e,"POST","/v1/accounts:signInWithEmailLink",Mo(e,t))}(e,{email:this._email,oobCode:this._password});default:xo(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ln(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Hn);case"emailLink":return async function(e,t){return Vo(e,"POST","/v1/accounts:signInWithEmailLink",Mo(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:xo(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function jn(e,t){return Vo(e,"POST","/v1/accounts:signInWithIdp",Mo(e,t))}
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
 */class Bn extends zn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Bn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):xo("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,o=ht(t,["providerId","signInMethod"]);if(!r||!i)return null;const n=new Bn(r,i);return n.idToken=o.idToken||void 0,n.accessToken=o.accessToken||void 0,n.secret=o.secret,n.nonce=o.nonce,n.pendingToken=o.pendingToken||null,n}_getIdTokenResponse(e){return jn(e,this.buildRequest())}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,jn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,jn(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Dr(t)}return e}}
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
 */class Wn{constructor(e){var t,r,i,o,n,s;const a=Ur(Mr(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(r=a.oobCode)&&void 0!==r?r:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);Co(l&&c&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=c,this.continueUrl=null!==(o=a.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(n=a.languageCode)&&void 0!==n?n:null,this.tenantId=null!==(s=a.tenantId)&&void 0!==s?s:null}static parseLink(e){const t=function(e){const t=Ur(Mr(e)).link,r=t?Ur(Mr(t)).deep_link_id:null,i=Ur(Mr(e)).deep_link_id;return(i?Ur(Mr(i)).link:null)||i||r||t||e}(e);try{return new Wn(t)}catch(e){return null}}}
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
 */class qn{constructor(){this.providerId=qn.PROVIDER_ID}static credential(e,t){return Fn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Wn.parseLink(t);return Co(r,"argument-error"),Fn._fromEmailAndCode(e,r.code,r.tenantId)}}qn.PROVIDER_ID="password",qn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",qn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Kn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class Gn extends Kn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
 */class Jn extends Gn{constructor(){super("facebook.com")}static credential(e){return Bn._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch(e){return null}}}Jn.FACEBOOK_SIGN_IN_METHOD="facebook.com",Jn.PROVIDER_ID="facebook.com";
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
class Yn extends Gn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Bn._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Yn.credential(t,r)}catch(e){return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com",Yn.PROVIDER_ID="google.com";
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
class Xn extends Gn{constructor(){super("github.com")}static credential(e){return Bn._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Xn.credential(e.oauthAccessToken)}catch(e){return null}}}Xn.GITHUB_SIGN_IN_METHOD="github.com",Xn.PROVIDER_ID="github.com";
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
class Zn extends Gn{constructor(){super("twitter.com")}static credential(e,t){return Bn._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Zn.credential(t,r)}catch(e){return null}}}
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
async function Qn(e,t){return Vo(e,"POST","/v1/accounts:signUp",Mo(e,t))}
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
 */Zn.TWITTER_SIGN_IN_METHOD="twitter.com",Zn.PROVIDER_ID="twitter.com";class es{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await an._fromIdTokenResponse(e,r,i),n=ts(r);return new es({user:o,providerId:n,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=ts(r);return new es({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function ts(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
 */class rs extends Pr{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,rs.prototype),this.customData={appName:e.name,tenantId:null!==(o=e.tenantId)&&void 0!==o?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new rs(e,t,r,i)}}function is(e,t,r,i){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch((r=>{if("auth/multi-factor-auth-required"===r.code)throw rs._fromErrorAndOperation(e,r,t,i);throw r}))}
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
async function os(e,t,r=!1){if(Zi(e.app))return Promise.reject(Ao(e));const i="signIn",o=await is(e,i,t),n=await es._fromIdTokenResponse(e,i,o);return r||await e._updateCurrentUser(n.user),n}
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
async function ns(e){const t=$n(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}function ss(e,t,r){return Zi(e.app)?Promise.reject(Ao(e)):async function(e,t){return os($n(e),t)}(Vr(e),qn.credential(t,r)).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&ns(e),t}))}function as(e,t,r,i){return Vr(e).onAuthStateChanged(t,r,i)}const ls="__sak";
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
 */class cs{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ls,"1"),this.storage.removeItem(ls),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */class ds extends cs{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=kr();return mn(e)||xn(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=In(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,r)=>{this.notifyListeners(e,r)}));const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},o=this.storage.getItem(r);En()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const e of Array.from(r))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ds.type="LOCAL";const hs=ds;
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
 */class us extends cs{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}us.type="SESSION";const ps=us;
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
class fs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const r=new fs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,n=this.handlersMap[i];if(!(null==n?void 0:n.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const s=Array.from(n).map((async e=>e(t.origin,o))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(s);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function vs(e="",t=10){let r="";for(let e=0;e<t;e++)r+=Math.floor(10*Math.random());return e+r}
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
 */fs.receivers=[];class ms{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,n;return new Promise(((s,a)=>{const l=vs("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),r);n={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),o=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(o),s(t.data.response);break;default:clearTimeout(c),clearTimeout(o),a(new Error("invalid_response"))}}},this.handlers.add(n),i.port1.addEventListener("message",n.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])})).finally((()=>{n&&this.removeMessageHandler(n)}))}}
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
 */function gs(){return window}
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
function bs(){return void 0!==gs().WorkerGlobalScope&&"function"==typeof gs().importScripts}
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
const ys="firebaseLocalStorageDb",_s="firebaseLocalStorage",ws="fbase_key";class xs{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Es(e,t){return e.transaction([_s],t?"readwrite":"readonly").objectStore(_s)}function Is(){const e=indexedDB.open(ys,1);return new Promise(((t,r)=>{e.addEventListener("error",(()=>{r(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(_s,{keyPath:ws})}catch(e){r(e)}})),e.addEventListener("success",(async()=>{const r=e.result;r.objectStoreNames.contains(_s)?t(r):(r.close(),await function(){const e=indexedDB.deleteDatabase(ys);return new xs(e).toPromise()}(),t(await Is()))}))}))}async function As(e,t,r){const i=Es(e,!0).put({[ws]:t,value:r});return new xs(i).toPromise()}function Ss(e,t){const r=Es(e,!0).delete(t);return new xs(r).toPromise()}class Cs{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Is()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fs._getInstance(bs()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new ms(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&(null===(e=r[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=r[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Is();return await As(e,ls,"1"),await Ss(e,ls),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((r=>As(r,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const r=Es(e,!1).get(t),i=await new xs(r).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Ss(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Es(e,!1).getAll();return new xs(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],r=new Set;if(0!==e.length)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!r.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const e of Array.from(r))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Cs.type="LOCAL";const Ts=Cs;new Oo(3e4,6e4);
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
class $s extends zn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return jn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return jn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ks(e){return os(e.auth,new $s(e),e.bypassAuthState)}function Ps(e){const{auth:t,user:r}=e;return Co(r,t,"internal-error"),
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
async function(e,t,r=!1){const{auth:i}=e;if(Zi(i.app))return Promise.reject(Ao(i));const o="reauthenticate";try{const n=await Qo(e,is(i,o,t,e),r);Co(n.idToken,i,"internal-error");const s=Xo(n.idToken);Co(s,i,"internal-error");const{sub:a}=s;return Co(e.uid===a,i,"user-mismatch"),es._forOperation(e,o,n)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&xo(i,"user-mismatch"),e}}(r,new $s(e),e.bypassAuthState)}async function Rs(e){const{auth:t,user:r}=e;return Co(r,t,"internal-error"),async function(e,t,r=!1){const i=await Qo(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return es._forOperation(e,"link",i)}(r,new $s(e),e.bypassAuthState)}
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
 */class Os{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:n,type:s}=e;if(n)return void this.reject(n);const a={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ks;case"linkViaPopup":case"linkViaRedirect":return Rs;case"reauthViaPopup":case"reauthViaRedirect":return Ps;default:xo(this.auth,"internal-error")}}resolve(e){$o(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$o(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Ns=new Oo(2e3,1e4);class Ls extends Os{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Ls.currentPopupAction&&Ls.currentPopupAction.cancel(),Ls.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Co(e,this.auth,"internal-error"),e}async onExecution(){$o(1===this.filter.length,"Popup operations only handle one event");const e=vs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Eo(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Eo(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ls.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;(null===(r=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===r?void 0:r.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Eo(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Ns.get())};e()}}Ls.currentPopupAction=null;
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
const Ds="pendingRedirect",Us=new Map;class Ms extends Os{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Us.get(this.auth._key());if(!e){try{const t=await async function(e,t){const r=function(e){return un(Ds,e.config.apiKey,e.name)}(t),i=function(e){return cn(e._redirectPersistence)}(e);if(!await i._isAvailable())return!1;const o="true"===await i._get(r);return await i._remove(r),o}(this.resolver,this.auth),r=t?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Us.set(this.auth._key(),e)}return this.bypassAuthState||Us.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function zs(e,t){Us.set(e._key(),t)}async function Hs(e,t,r=!1){if(Zi(e.app))return Promise.reject(Ao(e));const i=$n(e),o=
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
function(e,t){return t?cn(t):(Co(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(i,t),n=new Ms(i,o,r),s=await n.execute();return s&&!r&&(delete s.user._redirectEventId,await i._persistUserIfCurrent(s.user),await i._setRedirectUser(null,t)),s}
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
 */class Vs{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return js(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!js(e)){const i=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(Eo(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fs(e))}saveEventToCache(e){this.cachedEventUids.add(Fs(e)),this.lastProcessedEventTime=Date.now()}}function Fs(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function js({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const Bs=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ws=/^https?/;async function qs(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return zo(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Ks(e))return}catch(e){}xo(e,"unauthorized-domain")}function Ks(e){const t=ko(),{protocol:r,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return""===o.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&o.hostname===i}if(!Ws.test(r))return!1;if(Bs.test(e))return i===e;const o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
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
 */const Gs=new Oo(3e4,6e4);function Js(){const e=gs().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function Ys(e){return new Promise(((t,r)=>{var i,o,n;function s(){Js(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Js(),r(Eo(e,"network-request-failed"))},timeout:Gs.get()})}if(null===(o=null===(i=gs().gapi)||void 0===i?void 0:i.iframes)||void 0===o?void 0:o.Iframe)t(gapi.iframes.getContext());else{if(!(null===(n=gs().gapi)||void 0===n?void 0:n.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return gs()[t]=()=>{gapi.load?s():r(Eo(e,"network-request-failed"))},Rn(`${Pn.gapiScript}?onload=${t}`).catch((e=>r(e)))}s()}})).catch((e=>{throw Xs=null,e}))}let Xs=null;
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
const Zs=new Oo(5e3,15e3),Qs="__/auth/iframe",ea="emulator/auth/iframe",ta={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ra=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ia(e){const t=e.config;Co(t.authDomain,e,"auth-domain-config-required");const r=t.emulator?No(t,ea):`https://${e.config.authDomain}/${Qs}`,i={apiKey:t.apiKey,appName:e.name,v:to},o=ra.get(e.config.apiHost);o&&(i.eid=o);const n=e._getFrameworks();return n.length&&(i.fw=n.join(",")),`${r}?${Dr(i).slice(1)}`}async function oa(e){const t=await function(e){return Xs=Xs||Ys(e),Xs}(e),r=gs().gapi;return Co(r,e,"internal-error"),t.open({where:document.body,url:ia(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ta,dontclear:!0},(t=>new Promise((async(r,i)=>{await t.restyle({setHideOnLeave:!1});const o=Eo(e,"network-request-failed"),n=gs().setTimeout((()=>{i(o)}),Zs.get());function s(){gs().clearTimeout(n),r(t)}t.ping(s).then(s,(()=>{i(o)}))}))))}
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
 */const na={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class sa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function aa(e,t,r,i=500,o=600){const n=Math.max((window.screen.availHeight-o)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},na),{width:i.toString(),height:o.toString(),top:n,left:s}),c=kr().toLowerCase();r&&(a=gn(c)?"_blank":r),vn(c)&&(t=t||"http://localhost",l.scrollbars="yes");const d=Object.entries(l).reduce(((e,[t,r])=>`${e}${t}=${r},`),"");if(function(e=kr()){var t;return xn(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const r=document.createElement("a");r.href=e,r.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(i)}
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
 */(t||"",a),new sa(null);const h=window.open(t||"",a,d);Co(h,e,"popup-blocked");try{h.focus()}catch(e){}return new sa(h)}const la="__/auth/handler",ca="emulator/auth/handler",da=encodeURIComponent("fac");async function ha(e,t,r,i,o,n){Co(e.config.authDomain,e,"auth-domain-config-required"),Co(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:i,v:to,eventId:o};if(t instanceof Kn){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(n||{}))s[e]=t}if(t instanceof Gn){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(s.scopes=e.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const l=await e._getAppCheckToken(),c=l?`#${da}=${encodeURIComponent(l)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${la}`;return No(e,ca)}
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
 */(e)}?${Dr(a).slice(1)}${c}`}const ua="webStorageSupport";const pa=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ps,this._completeRedirectFn=Hs,this._overrideRedirectResult=zs}async _openPopup(e,t,r,i){var o;$o(null===(o=this.eventManagers[e._key()])||void 0===o?void 0:o.manager,"_initialize() not called before _openPopup()");return aa(e,await ha(e,t,r,ko(),i),vs())}async _openRedirect(e,t,r,i){await this._originValidation(e);return function(e){gs().location.href=e}(await ha(e,t,r,ko(),i)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:r}=this.eventManagers[t];return e?Promise.resolve(e):($o(r,"If manager is not set, promise should be"),r)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch((()=>{delete this.eventManagers[t]})),r}async initAndGetManager(e){const t=await oa(e),r=new Vs(e);return t.register("authEvent",(t=>{Co(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:r.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ua,{type:ua},(r=>{var i;const o=null===(i=null==r?void 0:r[0])||void 0===i?void 0:i[ua];void 0!==o&&t(!!o),xo(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=qs(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return In()||mn()||xn()}};var fa="@firebase/auth",va="1.7.3";
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
class ma{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Co(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
const ga=Tr("authIdTokenMaxAge")||300;let ba=null;function ya(e=function(e=Bi){const t=qi.get(e);if(!t&&e===Bi&&Cr())return ro();if(!t)throw Qi.create("no-app",{appName:e});return t}()){const t=Xi(e,"auth");if(t.isInitialized())return t.getImmediate();const r=function(e,t){const r=Xi(e,"auth");if(r.isInitialized()){const e=r.getImmediate();if(Nr(r.getOptions(),null!=t?t:{}))return e;xo(e,"already-initialized")}return r.initialize({options:t})}(e,{popupRedirectResolver:pa,persistence:[Ts,hs,ps]}),i=Tr("authTokenSyncURL");if(i&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(i,location.origin);if(location.origin===e.origin){const t=(o=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),r=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>ga)return;const i=null==t?void 0:t.token;ba!==i&&(ba=i,await fetch(o,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(e,t,r){Vr(e).beforeAuthStateChanged(t,r)}(r,t,(()=>t(r.currentUser))),function(e,t,r,i){Vr(e).onIdTokenChanged(t,r,i)}(r,(e=>t(e)))}}var o;const n=(s="auth",null===(l=null===(a=Sr())||void 0===a?void 0:a.emulatorHosts)||void 0===l?void 0:l[s]);var s,a,l;return n&&Dn(r,`http://${n}`),r}var _a;!function(e){Pn=e}({loadJS:e=>new Promise(((t,r)=>{const i=document.createElement("script");var o,n;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=Eo("internal-error");t.customData=e,r(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(n=null===(o=document.getElementsByTagName("head"))||void 0===o?void 0:o[0])&&void 0!==n?n:document).appendChild(i)})),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),_a="Browser",Yi(new Fr("auth",((e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:n,authDomain:s}=r.options;Co(n&&!n.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:n,authDomain:s,clientPlatform:_a,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:An(_a)},l=new Tn(r,i,o,a);return function(e,t){const r=(null==t?void 0:t.persistence)||[],i=(Array.isArray(r)?r:[r]).map(cn);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,r)=>{e.getProvider("auth-internal").initialize()}))),Yi(new Fr("auth-internal",(e=>(e=>new ma(e))($n(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),io(fa,va,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(_a)),io(fa,va,"esm2017");
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class wa extends ct{render(){return Fe`<slot></slot>`}connectedCallback(){super.connectedCallback();"false"!==this.getAttribute("aria-hidden")?this.setAttribute("aria-hidden","true"):this.removeAttribute("aria-hidden")}}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const xa=de`:host{font-size:var(--md-icon-size, 24px);width:var(--md-icon-size, 24px);height:var(--md-icon-size, 24px);color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;place-items:center;place-content:center;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;flex-shrink:0;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}
`
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let Ea=class extends wa{};Ea.styles=[xa],Ea=ut([pt("md-icon")],Ea);const Ia={apiKey:"AIzaSyAnbEWhDNFgo896bU3t-O20KuHr8jhHCxY",authDomain:"writing-assist.firebaseapp.com",databaseURL:"https://writing-assist-default-rtdb.firebaseio.com",projectId:"writing-assist",storageBucket:"writing-assist.appspot.com",messagingSenderId:"668975628741",appId:"1:668975628741:web:214e555ea5a1e4ae110bac",measurementId:"G-F6FS0Z1T0H"};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Aa extends ct{constructor(){super(...arguments),this.disabled=!1,this.error=!1,this.focused=!1,this.label="",this.populated=!1,this.required=!1,this.resizable=!1,this.supportingText="",this.errorText="",this.count=-1,this.max=-1,this.hasStart=!1,this.hasEnd=!1,this.isAnimating=!1,this.refreshErrorAlert=!1,this.disableTransitions=!1}get counterText(){const e=this.count??-1,t=this.max??-1;return e<0||t<=0?"":`${e} / ${t}`}get supportingOrErrorText(){return this.error&&this.errorText?this.errorText:this.supportingText}reannounceError(){this.refreshErrorAlert=!0}update(e){e.has("disabled")&&void 0!==e.get("disabled")&&(this.disableTransitions=!0),this.disabled&&this.focused&&(e.set("focused",!0),this.focused=!1),this.animateLabelIfNeeded({wasFocused:e.get("focused"),wasPopulated:e.get("populated")}),super.update(e)}render(){const e=this.renderLabel(!0),t=this.renderLabel(!1),r=this.renderOutline?.(e),i={disabled:this.disabled,"disable-transitions":this.disableTransitions,error:this.error&&!this.disabled,focused:this.focused,"with-start":this.hasStart,"with-end":this.hasEnd,populated:this.populated,resizable:this.resizable,required:this.required,"no-label":!this.label};return Fe`
      <div class="field ${zt(i)}">
        <div class="container-overflow">
          ${this.renderBackground?.()} ${this.renderIndicator?.()} ${r}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              <div class="label-wrapper">
                ${t} ${r?Be:e}
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
    `}updated(e){(e.has("supportingText")||e.has("errorText")||e.has("count")||e.has("max"))&&this.updateSlottedAriaDescribedBy(),this.refreshErrorAlert&&requestAnimationFrame((()=>{this.refreshErrorAlert=!1})),this.disableTransitions&&requestAnimationFrame((()=>{this.disableTransitions=!1}))}renderSupportingText(){const{supportingOrErrorText:e,counterText:t}=this;if(!e&&!t)return Be;const r=Fe`<span>${e}</span>`,i=t?Fe`<span class="counter">${t}</span>`:Be,o=this.error&&this.errorText&&!this.refreshErrorAlert;return Fe`
      <div class="supporting-text" role=${o?"alert":Be}>${r}${i}</div>
      <slot
        name="aria-describedby"
        @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `}updateSlottedAriaDescribedBy(){for(const e of this.slottedAriaDescribedBy)st(Fe`${this.supportingOrErrorText} ${this.counterText}`,e),e.setAttribute("hidden","")}renderLabel(e){if(!this.label)return Be;let t;t=e?this.focused||this.populated||this.isAnimating:!this.focused&&!this.populated&&!this.isAnimating;const r={hidden:!t,floating:e,resting:!e},i=`${this.label}${this.required?"*":""}`;return Fe`
      <span class="label ${zt(r)}" aria-hidden=${!t}
        >${i}</span
      >
    `}animateLabelIfNeeded({wasFocused:e,wasPopulated:t}){if(!this.label)return;e??(e=this.focused),t??(t=this.populated);(e||t)!==(this.focused||this.populated)&&(this.isAnimating=!0,this.labelAnimation?.cancel(),this.labelAnimation=this.floatingLabelEl?.animate(this.getLabelKeyframes(),{duration:150,easing:Ht}),this.labelAnimation?.addEventListener("finish",(()=>{this.isAnimating=!1})))}getLabelKeyframes(){const{floatingLabelEl:e,restingLabelEl:t}=this;if(!e||!t)return[];const{x:r,y:i,height:o}=e.getBoundingClientRect(),{x:n,y:s,height:a}=t.getBoundingClientRect(),l=e.scrollWidth,c=t.scrollWidth,d=c/l,h=`translateX(${n-r}px) translateY(${s-i+Math.round((a-o*d)/2)}px) scale(${d})`,u="translateX(0) translateY(0) scale(1)",p=t.clientWidth,f=c>p?p/d+"px":"";return this.focused||this.populated?[{transform:h,width:f},{transform:u,width:f}]:[{transform:u,width:f},{transform:h,width:f}]}getSurfacePositionClientRect(){return this.containerEl.getBoundingClientRect()}}ut([mt({type:Boolean})],Aa.prototype,"disabled",void 0),ut([mt({type:Boolean})],Aa.prototype,"error",void 0),ut([mt({type:Boolean})],Aa.prototype,"focused",void 0),ut([mt()],Aa.prototype,"label",void 0),ut([mt({type:Boolean})],Aa.prototype,"populated",void 0),ut([mt({type:Boolean})],Aa.prototype,"required",void 0),ut([mt({type:Boolean})],Aa.prototype,"resizable",void 0),ut([mt({attribute:"supporting-text"})],Aa.prototype,"supportingText",void 0),ut([mt({attribute:"error-text"})],Aa.prototype,"errorText",void 0),ut([mt({type:Number})],Aa.prototype,"count",void 0),ut([mt({type:Number})],Aa.prototype,"max",void 0),ut([mt({type:Boolean,attribute:"has-start"})],Aa.prototype,"hasStart",void 0),ut([mt({type:Boolean,attribute:"has-end"})],Aa.prototype,"hasEnd",void 0),ut([xt({slot:"aria-describedby"})],Aa.prototype,"slottedAriaDescribedBy",void 0),ut([gt()],Aa.prototype,"isAnimating",void 0),ut([gt()],Aa.prototype,"refreshErrorAlert",void 0),ut([gt()],Aa.prototype,"disableTransitions",void 0),ut([yt(".label.floating")],Aa.prototype,"floatingLabelEl",void 0),ut([yt(".label.resting")],Aa.prototype,"restingLabelEl",void 0),ut([yt(".container")],Aa.prototype,"containerEl",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Sa extends Aa{renderBackground(){return Fe`
      <div class="background"></div>
      <div class="state-layer"></div>
    `}renderIndicator(){return Fe`<div class="active-indicator"></div>`}}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ca=de`@layer styles{:host{--_active-indicator-color: var(--md-filled-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-field-active-indicator-height, 1px);--_bottom-space: var(--md-filled-field-bottom-space, 16px);--_container-color: var(--md-filled-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_content-color: var(--md-filled-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-filled-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-filled-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-filled-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-weight: var(--md-filled-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-active-indicator-color: var(--md-filled-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-field-disabled-container-opacity, 0.04);--_disabled-content-color: var(--md-filled-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-filled-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-filled-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-filled-field-disabled-leading-content-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-filled-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-filled-field-disabled-trailing-content-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-content-color: var(--md-filled-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-active-indicator-color: var(--md-filled-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-content-color: var(--md-filled-field-error-focus-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-label-text-color: var(--md-filled-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-filled-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-filled-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-content-color: var(--md-filled-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-filled-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-filled-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-filled-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-filled-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-filled-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-field-focus-active-indicator-height, 3px);--_focus-content-color: var(--md-filled-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-filled-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-filled-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-field-hover-active-indicator-height, 1px);--_hover-content-color: var(--md-filled-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-content-color: var(--md-filled-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-filled-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-filled-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-filled-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-filled-field-leading-space, 16px);--_supporting-text-color: var(--md-filled-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-filled-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-filled-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-filled-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-filled-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-filled-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-filled-field-top-space, 16px);--_trailing-content-color: var(--md-filled-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-filled-field-trailing-space, 16px);--_with-label-bottom-space: var(--md-filled-field-with-label-bottom-space, 8px);--_with-label-top-space: var(--md-filled-field-with-label-top-space, 8px);--_container-shape-start-start: var(--md-filled-field-container-shape-start-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-filled-field-container-shape-start-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-filled-field-container-shape-end-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-filled-field-container-shape-end-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)))}.background,.state-layer{border-radius:inherit;inset:0;pointer-events:none;position:absolute}.background{background:var(--_container-color)}.state-layer{visibility:hidden}.field:not(.disabled):hover .state-layer{visibility:visible}.label.floating{position:absolute;top:var(--_with-label-top-space)}.field:not(.with-start) .label-wrapper{margin-inline-start:var(--_leading-space)}.field:not(.with-end) .label-wrapper{margin-inline-end:var(--_trailing-space)}.active-indicator{inset:auto 0 0 0;pointer-events:none;position:absolute;width:100%;z-index:1}.active-indicator::before,.active-indicator::after{border-bottom:var(--_active-indicator-height) solid var(--_active-indicator-color);inset:auto 0 0 0;content:"";position:absolute;width:100%}.active-indicator::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .active-indicator::after{opacity:1}.field:not(.with-start) .content ::slotted(*){padding-inline-start:var(--_leading-space)}.field:not(.with-end) .content ::slotted(*){padding-inline-end:var(--_trailing-space)}.field:not(.no-label) .content ::slotted(:not(textarea)){padding-bottom:var(--_with-label-bottom-space);padding-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}.field:not(.no-label) .content ::slotted(textarea){margin-bottom:var(--_with-label-bottom-space);margin-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}:hover .active-indicator::before{border-bottom-color:var(--_hover-active-indicator-color);border-bottom-width:var(--_hover-active-indicator-height)}.active-indicator::after{border-bottom-color:var(--_focus-active-indicator-color);border-bottom-width:var(--_focus-active-indicator-height)}:hover .state-layer{background:var(--_hover-state-layer-color);opacity:var(--_hover-state-layer-opacity)}.disabled .active-indicator::before{border-bottom-color:var(--_disabled-active-indicator-color);border-bottom-width:var(--_disabled-active-indicator-height);opacity:var(--_disabled-active-indicator-opacity)}.disabled .background{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.error .active-indicator::before{border-bottom-color:var(--_error-active-indicator-color)}.error:hover .active-indicator::before{border-bottom-color:var(--_error-hover-active-indicator-color)}.error:hover .state-layer{background:var(--_error-hover-state-layer-color);opacity:var(--_error-hover-state-layer-opacity)}.error .active-indicator::after{border-bottom-color:var(--_error-focus-active-indicator-color)}.resizable .container{bottom:var(--_focus-active-indicator-height);clip-path:inset(var(--_focus-active-indicator-height) 0 0 0)}.resizable .container>*{top:var(--_focus-active-indicator-height)}}@layer hcm{@media(forced-colors: active){.disabled .active-indicator::before{border-color:GrayText;opacity:1}}}
`
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */,Ta=de`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}@layer styles{.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start,.with-end .end{min-width:48px}.with-start .start{margin-inline-end:4px}.with-end .end{margin-inline-start:4px}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;overflow-wrap:revert;white-space:revert}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}}@layer hcm{@media(forced-colors: active){.disabled :is(.start,.content,.end){color:GrayText;opacity:1}}}@layer styles{.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .label:not(.hidden){color:GrayText;opacity:1}}}@layer styles{.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .supporting-text{color:GrayText;opacity:1}}}
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let $a=class extends Sa{};$a.styles=[Ta,Ca],$a=ut([pt("md-filled-field")],$a);
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const ka=de`:host{--_active-indicator-color: var(--md-filled-text-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-text-field-active-indicator-height, 1px);--_caret-color: var(--md-filled-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_container-color: var(--md-filled-text-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-active-indicator-color: var(--md-filled-text-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-text-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-text-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-text-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-text-field-disabled-container-opacity, 0.04);--_disabled-input-text-color: var(--md-filled-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-filled-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-filled-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-filled-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-filled-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-filled-text-field-disabled-trailing-icon-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-text-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-active-indicator-color: var(--md-filled-text-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-caret-color: var(--md-filled-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-filled-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-filled-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-filled-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-filled-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-text-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-input-text-color: var(--md-filled-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-filled-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-text-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-text-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-filled-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-filled-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-filled-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-filled-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-filled-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-text-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-text-field-focus-active-indicator-height, 3px);--_focus-input-text-color: var(--md-filled-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-filled-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-filled-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-text-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-text-field-hover-active-indicator-height, 1px);--_hover-input-text-color: var(--md-filled-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-text-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-icon-color: var(--md-filled-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-text-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-text-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filled-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-filled-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-filled-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-filled-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-filled-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-filled-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-filled-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-filled-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-filled-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-filled-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-filled-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-filled-text-field-leading-icon-size, 24px);--_supporting-text-color: var(--md-filled-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-filled-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-filled-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-filled-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-filled-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var(--md-filled-text-field-container-shape-start-start, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-filled-text-field-container-shape-start-end, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-filled-text-field-container-shape-end-end, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-filled-text-field-container-shape-end-start, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_leading-space: var(--md-filled-text-field-leading-space, 16px);--_trailing-space: var(--md-filled-text-field-trailing-space, 16px);--_top-space: var(--md-filled-text-field-top-space, 16px);--_bottom-space: var(--md-filled-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-filled-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-filled-text-field-input-text-suffix-leading-space, 2px);--_with-label-top-space: var(--md-filled-text-field-with-label-top-space, 8px);--_with-label-bottom-space: var(--md-filled-text-field-with-label-bottom-space, 8px);--_focus-caret-color: var(--md-filled-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--md-filled-field-active-indicator-color: var(--_active-indicator-color);--md-filled-field-active-indicator-height: var(--_active-indicator-height);--md-filled-field-bottom-space: var(--_bottom-space);--md-filled-field-container-color: var(--_container-color);--md-filled-field-container-shape-end-end: var(--_container-shape-end-end);--md-filled-field-container-shape-end-start: var(--_container-shape-end-start);--md-filled-field-container-shape-start-end: var(--_container-shape-start-end);--md-filled-field-container-shape-start-start: var(--_container-shape-start-start);--md-filled-field-content-color: var(--_input-text-color);--md-filled-field-content-font: var(--_input-text-font);--md-filled-field-content-line-height: var(--_input-text-line-height);--md-filled-field-content-size: var(--_input-text-size);--md-filled-field-content-weight: var(--_input-text-weight);--md-filled-field-disabled-active-indicator-color: var(--_disabled-active-indicator-color);--md-filled-field-disabled-active-indicator-height: var(--_disabled-active-indicator-height);--md-filled-field-disabled-active-indicator-opacity: var(--_disabled-active-indicator-opacity);--md-filled-field-disabled-container-color: var(--_disabled-container-color);--md-filled-field-disabled-container-opacity: var(--_disabled-container-opacity);--md-filled-field-disabled-content-color: var(--_disabled-input-text-color);--md-filled-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-filled-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-filled-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-filled-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-filled-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-filled-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-filled-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-filled-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-filled-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-filled-field-error-active-indicator-color: var(--_error-active-indicator-color);--md-filled-field-error-content-color: var(--_error-input-text-color);--md-filled-field-error-focus-active-indicator-color: var(--_error-focus-active-indicator-color);--md-filled-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-filled-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-filled-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-filled-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-filled-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-filled-field-error-hover-active-indicator-color: var(--_error-hover-active-indicator-color);--md-filled-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-filled-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-filled-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-filled-field-error-hover-state-layer-color: var(--_error-hover-state-layer-color);--md-filled-field-error-hover-state-layer-opacity: var(--_error-hover-state-layer-opacity);--md-filled-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-filled-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-filled-field-error-label-text-color: var(--_error-label-text-color);--md-filled-field-error-leading-content-color: var(--_error-leading-icon-color);--md-filled-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-filled-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-filled-field-focus-active-indicator-color: var(--_focus-active-indicator-color);--md-filled-field-focus-active-indicator-height: var(--_focus-active-indicator-height);--md-filled-field-focus-content-color: var(--_focus-input-text-color);--md-filled-field-focus-label-text-color: var(--_focus-label-text-color);--md-filled-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-filled-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-filled-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-filled-field-hover-active-indicator-color: var(--_hover-active-indicator-color);--md-filled-field-hover-active-indicator-height: var(--_hover-active-indicator-height);--md-filled-field-hover-content-color: var(--_hover-input-text-color);--md-filled-field-hover-label-text-color: var(--_hover-label-text-color);--md-filled-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-filled-field-hover-state-layer-color: var(--_hover-state-layer-color);--md-filled-field-hover-state-layer-opacity: var(--_hover-state-layer-opacity);--md-filled-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-filled-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-filled-field-label-text-color: var(--_label-text-color);--md-filled-field-label-text-font: var(--_label-text-font);--md-filled-field-label-text-line-height: var(--_label-text-line-height);--md-filled-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-filled-field-label-text-populated-size: var(--_label-text-populated-size);--md-filled-field-label-text-size: var(--_label-text-size);--md-filled-field-label-text-weight: var(--_label-text-weight);--md-filled-field-leading-content-color: var(--_leading-icon-color);--md-filled-field-leading-space: var(--_leading-space);--md-filled-field-supporting-text-color: var(--_supporting-text-color);--md-filled-field-supporting-text-font: var(--_supporting-text-font);--md-filled-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-filled-field-supporting-text-size: var(--_supporting-text-size);--md-filled-field-supporting-text-weight: var(--_supporting-text-weight);--md-filled-field-top-space: var(--_top-space);--md-filled-field-trailing-content-color: var(--_trailing-icon-color);--md-filled-field-trailing-space: var(--_trailing-space);--md-filled-field-with-label-bottom-space: var(--_with-label-bottom-space);--md-filled-field-with-label-top-space: var(--_with-label-top-space)}
`
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,Pa={},Ra=Ut(class extends Mt{constructor(e){if(super(e),e.type!==Lt&&e.type!==Nt&&e.type!==Dt)throw Error("The `live` directive is not allowed on child or event bindings");if(!(e=>void 0===e.strings)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===je||t===Be)return t;const r=e.element,i=e.name;if(e.type===Lt){if(t===r[i])return je}else if(e.type===Dt){if(!!t===r.hasAttribute(i))return je}else if(e.type===Nt&&r.getAttribute(i)===t+"")return je;return((e,t=Pa)=>{e._$AH=t;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */})(e),t}}),Oa="important",Na=" !"+Oa,La=Ut(class extends Mt{constructor(e){var t;if(super(e),e.type!==Nt||"style"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,r)=>{const i=e[r];return null==i?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(e,[t]){const{style:r}=e.element;if(void 0===this.ht){this.ht=new Set;for(const e in t)this.ht.add(e);return this.render(t)}this.ht.forEach((e=>{null==t[e]&&(this.ht.delete(e),e.includes("-")?r.removeProperty(e):r[e]="")}));for(const e in t){const i=t[e];if(null!=i){this.ht.add(e);const t="string"==typeof i&&i.endsWith(Na);e.includes("-")||t?r.setProperty(e,t?i.slice(0,-11):i,t?Oa:""):r[e]=i}}return je}}),Da={fromAttribute:e=>e??"",toAttribute:e=>e||null};
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ua=Symbol("createValidator"),Ma=Symbol("getValidityAnchor"),za=Symbol("privateValidator"),Ha=Symbol("privateSyncValidity"),Va=Symbol("privateCustomValidationMessage");
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Fa=Symbol("getFormValue"),ja=Symbol("getFormState");
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const Ba=Symbol("onReportValidity"),Wa=Symbol("privateCleanupFormListeners"),qa=Symbol("privateDoNotReportInvalid"),Ka=Symbol("privateIsSelfReportingValidity"),Ga=Symbol("privateCallOnReportValidity");const Ja=new WeakMap;
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class Ya{constructor(e){this.getCurrentState=e,this.currentValidity={validity:{},validationMessage:""}}getValidity(){const e=this.getCurrentState();if(!(!this.prevState||!this.equals(this.prevState,e)))return this.currentValidity;const{validity:t,validationMessage:r}=this.computeValidity(e);return this.prevState=this.copy(e),this.currentValidity={validationMessage:r,validity:{badInput:t.badInput,customError:t.customError,patternMismatch:t.patternMismatch,rangeOverflow:t.rangeOverflow,rangeUnderflow:t.rangeUnderflow,stepMismatch:t.stepMismatch,tooLong:t.tooLong,tooShort:t.tooShort,typeMismatch:t.typeMismatch,valueMissing:t.valueMissing}},this.currentValidity}}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Xa extends Ya{computeValidity({state:e,renderedControl:t}){let r=t;Za(e)&&!r?(r=this.inputControl||document.createElement("input"),this.inputControl=r):r||(r=this.textAreaControl||document.createElement("textarea"),this.textAreaControl=r);const i=Za(e)?r:null;if(i&&(i.type=e.type),r.value!==e.value&&(r.value=e.value),r.required=e.required,i){const t=e;t.pattern?i.pattern=t.pattern:i.removeAttribute("pattern"),t.min?i.min=t.min:i.removeAttribute("min"),t.max?i.max=t.max:i.removeAttribute("max"),t.step?i.step=t.step:i.removeAttribute("step")}return(e.minLength??-1)>-1?r.setAttribute("minlength",String(e.minLength)):r.removeAttribute("minlength"),(e.maxLength??-1)>-1?r.setAttribute("maxlength",String(e.maxLength)):r.removeAttribute("maxlength"),{validity:r.validity,validationMessage:r.validationMessage}}equals({state:e},{state:t}){const r=e.type===t.type&&e.value===t.value&&e.required===t.required&&e.minLength===t.minLength&&e.maxLength===t.maxLength;return Za(e)&&Za(t)?r&&e.pattern===t.pattern&&e.min===t.min&&e.max===t.max&&e.step===t.step:r}copy({state:e}){return{state:Za(e)?this.copyInput(e):this.copyTextArea(e),renderedControl:null}}copyInput(e){const{type:t,pattern:r,min:i,max:o,step:n}=e;return{...this.copySharedState(e),type:t,pattern:r,min:i,max:o,step:n}}copyTextArea(e){return{...this.copySharedState(e),type:e.type}}copySharedState({value:e,required:t,minLength:r,maxLength:i}){return{value:e,required:t,minLength:r,maxLength:i}}}function Za(e){return"textarea"!==e.type}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Qa=function(e){var t,r,i;class o extends e{constructor(...e){super(...e),this[t]=new AbortController,this[r]=!1,this[i]=!1,this.addEventListener("invalid",(e=>{!this[qa]&&e.isTrusted&&this.addEventListener("invalid",(()=>{this[Ga](e)}),{once:!0})}),{capture:!0})}checkValidity(){this[qa]=!0;const e=super.checkValidity();return this[qa]=!1,e}reportValidity(){this[Ka]=!0;const e=super.reportValidity();return e&&this[Ga](null),this[Ka]=!1,e}[(t=Wa,r=qa,i=Ka,Ga)](e){const t=e?.defaultPrevented;if(t)return;this[Ba](e);!t&&e?.defaultPrevented&&(this[Ka]||function(e,t){if(!e)return!0;let r;for(const t of e.elements)if(t.matches(":invalid")){r=t;break}return r===t}(this[Yt].form,this))&&this.focus()}[Ba](e){throw new Error("Implement [onReportValidity]")}formAssociatedCallback(e){super.formAssociatedCallback&&super.formAssociatedCallback(e),this[Wa].abort(),e&&(this[Wa]=new AbortController,function(e,t,r,i){const o=function(e){if(!Ja.has(e)){const t=new EventTarget;Ja.set(e,t);for(const r of["reportValidity","requestSubmit"]){const i=e[r];e[r]=function(){t.dispatchEvent(new Event("before"));const e=Reflect.apply(i,this,arguments);return t.dispatchEvent(new Event("after")),e}}}return Ja.get(e)}(t);let n,s=!1,a=!1;o.addEventListener("before",(()=>{a=!0,n=new AbortController,s=!1,e.addEventListener("invalid",(()=>{s=!0}),{signal:n.signal})}),{signal:i}),o.addEventListener("after",(()=>{a=!1,n?.abort(),s||r()}),{signal:i}),t.addEventListener("submit",(()=>{a||r()}),{signal:i})}(this,e,(()=>{this[Ga](null)}),this[Wa].signal))}}return o}(function(e){var t;class r extends e{constructor(){super(...arguments),this[t]=""}get validity(){return this[Ha](),this[Yt].validity}get validationMessage(){return this[Ha](),this[Yt].validationMessage}get willValidate(){return this[Ha](),this[Yt].willValidate}checkValidity(){return this[Ha](),this[Yt].checkValidity()}reportValidity(){return this[Ha](),this[Yt].reportValidity()}setCustomValidity(e){this[Va]=e,this[Ha]()}requestUpdate(e,t,r){super.requestUpdate(e,t,r),this[Ha]()}firstUpdated(e){super.firstUpdated(e),this[Ha]()}[(t=Va,Ha)](){this[za]||(this[za]=this[Ua]());const{validity:e,validationMessage:t}=this[za].getValidity(),r=!!this[Va],i=this[Va]||t;this[Yt].setValidity({...e,customError:r},i,this[Ma]()??void 0)}[Ua](){throw new Error("Implement [createValidator]")}[Ma](){throw new Error("Implement [getValidityAnchor]")}}return r}(function(e){class t extends e{get form(){return this[Yt].form}get labels(){return this[Yt].labels}get name(){return this.getAttribute("name")??""}set name(e){this.setAttribute("name",e)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){this.toggleAttribute("disabled",e)}attributeChangedCallback(e,t,r){if("name"!==e&&"disabled"!==e)super.attributeChangedCallback(e,t,r);else{const r="disabled"===e?null!==t:t;this.requestUpdate(e,r)}}requestUpdate(e,t,r){super.requestUpdate(e,t,r),this[Yt].setFormValue(this[Fa](),this[ja]())}[Fa](){throw new Error("Implement [getFormValue]")}[ja](){return this[Fa]()}formDisabledCallback(e){this.disabled=e}}return t.formAssociated=!0,ut([mt({noAccessor:!0})],t.prototype,"name",null),ut([mt({type:Boolean,noAccessor:!0})],t.prototype,"disabled",null),t}(Zt(ct))));class el extends Qa{constructor(){super(...arguments),this.error=!1,this.errorText="",this.label="",this.required=!1,this.value="",this.prefixText="",this.suffixText="",this.hasLeadingIcon=!1,this.hasTrailingIcon=!1,this.supportingText="",this.textDirection="",this.rows=2,this.cols=20,this.inputMode="",this.max="",this.maxLength=-1,this.min="",this.minLength=-1,this.noSpinner=!1,this.pattern="",this.placeholder="",this.readOnly=!1,this.multiple=!1,this.step="",this.type="text",this.autocomplete="",this.dirty=!1,this.focused=!1,this.nativeError=!1,this.nativeErrorText=""}get selectionDirection(){return this.getInputOrTextarea().selectionDirection}set selectionDirection(e){this.getInputOrTextarea().selectionDirection=e}get selectionEnd(){return this.getInputOrTextarea().selectionEnd}set selectionEnd(e){this.getInputOrTextarea().selectionEnd=e}get selectionStart(){return this.getInputOrTextarea().selectionStart}set selectionStart(e){this.getInputOrTextarea().selectionStart=e}get valueAsNumber(){const e=this.getInput();return e?e.valueAsNumber:NaN}set valueAsNumber(e){const t=this.getInput();t&&(t.valueAsNumber=e,this.value=t.value)}get valueAsDate(){const e=this.getInput();return e?e.valueAsDate:null}set valueAsDate(e){const t=this.getInput();t&&(t.valueAsDate=e,this.value=t.value)}get hasError(){return this.error||this.nativeError}select(){this.getInputOrTextarea().select()}setRangeText(...e){this.getInputOrTextarea().setRangeText(...e),this.value=this.getInputOrTextarea().value}setSelectionRange(e,t,r){this.getInputOrTextarea().setSelectionRange(e,t,r)}stepDown(e){const t=this.getInput();t&&(t.stepDown(e),this.value=t.value)}stepUp(e){const t=this.getInput();t&&(t.stepUp(e),this.value=t.value)}reset(){this.dirty=!1,this.value=this.getAttribute("value")??"",this.nativeError=!1,this.nativeErrorText=""}attributeChangedCallback(e,t,r){"value"===e&&this.dirty||super.attributeChangedCallback(e,t,r)}render(){const e={disabled:this.disabled,error:!this.disabled&&this.hasError,textarea:"textarea"===this.type,"no-spinner":this.noSpinner};return Fe`
      <span class="text-field ${zt(e)}">
        ${this.renderField()}
      </span>
    `}updated(e){const t=this.getInputOrTextarea().value;this.value!==t&&(this.value=t)}renderField(){return pr`<${this.fieldTag}
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
    </${this.fieldTag}>`}renderLeadingIcon(){return Fe`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderTrailingIcon(){return Fe`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `}renderInputOrTextarea(){const e={direction:this.textDirection},t=this.ariaLabel||this.label||Be,r=this.autocomplete,i=(this.maxLength??-1)>-1,o=(this.minLength??-1)>-1;if("textarea"===this.type)return Fe`
        <textarea
          class="input"
          style=${La(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${t}
          autocomplete=${r||Be}
          ?disabled=${this.disabled}
          maxlength=${i?this.maxLength:Be}
          minlength=${o?this.minLength:Be}
          placeholder=${this.placeholder||Be}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols}
          .value=${Ra(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}></textarea>
      `;const n=this.renderPrefix(),s=this.renderSuffix(),a=this.inputMode;return Fe`
      <div class="input-wrapper">
        ${n}
        <input
          class="input"
          style=${La(e)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${t}
          autocomplete=${r||Be}
          ?disabled=${this.disabled}
          inputmode=${a||Be}
          max=${this.max||Be}
          maxlength=${i?this.maxLength:Be}
          min=${this.min||Be}
          minlength=${o?this.minLength:Be}
          pattern=${this.pattern||Be}
          placeholder=${this.placeholder||Be}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${this.step||Be}
          type=${this.type}
          .value=${Ra(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${s}
      </div>
    `}renderPrefix(){return this.renderAffix(this.prefixText,!1)}renderSuffix(){return this.renderAffix(this.suffixText,!0)}renderAffix(e,t){if(!e)return Be;return Fe`<span class="${zt({suffix:t,prefix:!t})}">${e}</span>`}getErrorText(){return this.error?this.errorText:this.nativeErrorText}handleFocusChange(){this.focused=this.inputOrTextarea?.matches(":focus")??!1}handleInput(e){this.dirty=!0,this.value=e.target.value}redispatchEvent(e){!
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
function(e,t){!t.bubbles||e.shadowRoot&&!t.composed||t.stopPropagation();const r=Reflect.construct(t.constructor,[t.type,t]),i=e.dispatchEvent(r);i||t.preventDefault()}(this,e)}getInputOrTextarea(){return this.inputOrTextarea||(this.connectedCallback(),this.scheduleUpdate()),this.isUpdatePending&&this.scheduleUpdate(),this.inputOrTextarea}getInput(){return"textarea"===this.type?null:this.getInputOrTextarea()}handleIconChange(){this.hasLeadingIcon=this.leadingIcons.length>0,this.hasTrailingIcon=this.trailingIcons.length>0}[Fa](){return this.value}formResetCallback(){this.reset()}formStateRestoreCallback(e){this.value=e}focus(){this.getInputOrTextarea().focus()}[Ua](){return new Xa((()=>({state:this,renderedControl:this.inputOrTextarea})))}[Ma](){return this.inputOrTextarea}[Ba](e){e?.preventDefault();const t=this.getErrorText();this.nativeError=!!e,this.nativeErrorText=this.validationMessage,t===this.getErrorText()&&this.field?.reannounceError()}}Jt(el),el.shadowRootOptions={...ct.shadowRootOptions,delegatesFocus:!0},ut([mt({type:Boolean,reflect:!0})],el.prototype,"error",void 0),ut([mt({attribute:"error-text"})],el.prototype,"errorText",void 0),ut([mt()],el.prototype,"label",void 0),ut([mt({type:Boolean,reflect:!0})],el.prototype,"required",void 0),ut([mt()],el.prototype,"value",void 0),ut([mt({attribute:"prefix-text"})],el.prototype,"prefixText",void 0),ut([mt({attribute:"suffix-text"})],el.prototype,"suffixText",void 0),ut([mt({type:Boolean,attribute:"has-leading-icon"})],el.prototype,"hasLeadingIcon",void 0),ut([mt({type:Boolean,attribute:"has-trailing-icon"})],el.prototype,"hasTrailingIcon",void 0),ut([mt({attribute:"supporting-text"})],el.prototype,"supportingText",void 0),ut([mt({attribute:"text-direction"})],el.prototype,"textDirection",void 0),ut([mt({type:Number})],el.prototype,"rows",void 0),ut([mt({type:Number})],el.prototype,"cols",void 0),ut([mt({reflect:!0})],el.prototype,"inputMode",void 0),ut([mt()],el.prototype,"max",void 0),ut([mt({type:Number})],el.prototype,"maxLength",void 0),ut([mt()],el.prototype,"min",void 0),ut([mt({type:Number})],el.prototype,"minLength",void 0),ut([mt({type:Boolean,attribute:"no-spinner"})],el.prototype,"noSpinner",void 0),ut([mt()],el.prototype,"pattern",void 0),ut([mt({reflect:!0,converter:Da})],el.prototype,"placeholder",void 0),ut([mt({type:Boolean,reflect:!0})],el.prototype,"readOnly",void 0),ut([mt({type:Boolean,reflect:!0})],el.prototype,"multiple",void 0),ut([mt()],el.prototype,"step",void 0),ut([mt({reflect:!0})],el.prototype,"type",void 0),ut([mt({reflect:!0})],el.prototype,"autocomplete",void 0),ut([gt()],el.prototype,"dirty",void 0),ut([gt()],el.prototype,"focused",void 0),ut([gt()],el.prototype,"nativeError",void 0),ut([gt()],el.prototype,"nativeErrorText",void 0),ut([yt(".input")],el.prototype,"inputOrTextarea",void 0),ut([yt(".field")],el.prototype,"field",void 0),ut([xt({slot:"leading-icon"})],el.prototype,"leadingIcons",void 0),ut([xt({slot:"trailing-icon"})],el.prototype,"trailingIcons",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class tl extends el{constructor(){super(...arguments),this.fieldTag=hr`md-filled-field`}}
/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const rl=de`:host{display:inline-flex;outline:none;resize:both;text-align:start;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}.icon{color:currentColor;display:flex;fill:currentColor}.icon ::slotted(*){display:flex}[hasstart] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[hasend] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}
`
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let il=class extends tl{constructor(){super(...arguments),this.fieldTag=hr`md-filled-field`}};il.styles=[rl,ka],il=ut([pt("md-filled-text-field")],il);const ol=ya(ro(Ia));class nl extends ct{static properties={user:{type:Object},errorMessage:{type:String},isSignUp:{type:Boolean}};constructor(){super(),this.user=null,this.errorMessage="",this.isSignUp=!1}firstUpdated(){as(ol,(e=>{this.user=e,this.requestUpdate()}))}async handleSignUp(e){e.preventDefault();const t=this.shadowRoot.querySelector("#sign-up-email").value,r=this.shadowRoot.querySelector("#sign-up-password").value;try{const e=await async function(e,t,r){if(Zi(e.app))return Promise.reject(Ao(e));const i=$n(e),o=Ln(i,{returnSecureToken:!0,email:t,password:r,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Qn),n=await o.catch((t=>{throw"auth/password-does-not-meet-requirements"===t.code&&ns(e),t})),s=await es._fromIdTokenResponse(i,"signIn",n);return await i._updateCurrentUser(s.user),s}(ol,t,r);this.user=e.user,this.dispatchEvent(new CustomEvent("auth-success",{detail:e}))}catch(e){this.errorMessage=e.message}}async handleSignIn(e){e.preventDefault();const t=this.shadowRoot.querySelector("#sign-in-email").value,r=this.shadowRoot.querySelector("#sign-in-password").value;try{const e=await ss(ol,t,r);this.user=e.user,this.dispatchEvent(new CustomEvent("auth-success",{detail:e}))}catch(e){this.errorMessage=e.message}}toggleForm(){this.isSignUp=!this.isSignUp,this.errorMessage=""}render(){return Fe`
      ${this.user?Fe`<p>Welcome, ${this.user.email}</p>`:Fe`
          <div>
            ${this.isSignUp?Fe`
                <h2>Create Account</h2>
                <form @submit="${this.handleSignUp}">
                  <md-filled-text-field id="sign-up-email" label="Email" type="email" required></md-filled-text-field>
                  <md-filled-text-field id="sign-up-password" label="Password" type="password" required></md-filled-text-field>
                  <md-filled-button type="submit">Sign Up</md-filled-button>
                  <p>Already have an account? <a href="#" @click="${this.toggleForm}">Sign In</a></p>
                </form>
              `:Fe`
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
    `}static styles=de`
    .auth-container {
      font-family: var(--md-ref-typeface-plain);
    }
    h2 {
      font-family: var(--title-font);
    }
    p {
      font-family: var(--md-ref-typeface-plain);
    }
  `}customElements.define("auth-ui-login",nl);const sl=ya(ro(Ia));customElements.define("modal-auth-login",class extends ct{static properties={user:{type:Object}};constructor(){super(),this.user=null}connectedCallback(){super.connectedCallback(),as(sl,(e=>{this.user=e,this.requestUpdate()}))}openDialog(){this.shadowRoot.querySelector("#auth-dialog").showModal()}closeDialog(){this.shadowRoot.querySelector("#auth-dialog").close()}async logout(){try{await function(e){return Vr(e).signOut()}(sl),console.log("User signed out successfully")}catch(e){console.error("Error signing out:",e)}}render(){return Fe`
      ${this.user?Fe`
        <md-icon-button aria-label="User" @click="${this.logout}">
            <md-icon>account_circle</md-icon>
        </md-icon-button>`:Fe`<md-filled-button @click="${this.openDialog}">Sign In</md-filled-button>`}
      <dialog id="auth-dialog">
        <auth-ui-login @auth-success="${this.closeDialog}"></auth-ui-login>
        <md-filled-button @click="${this.closeDialog}">Close</md-filled-button>
      </dialog>
    `}});class al extends ct{static properties={user:{type:Object}};constructor(){super(),this.user=null}connectedCallback(){super.connectedCallback()}render(){return Fe`
      <header>
        <div class="title">
          <slot name="title">My Website</slot>
        </div>
        <div class="auth">
          <modal-auth-login @auth-success="${this.handleAuthSuccess}"></modal-auth-login>
        </div>
      </header>
    `}handleAuthSuccess(e){this.user=e.detail.user,this.requestUpdate()}static styles=de`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      background-color: var(--md-sys-color-primary);
      color: var(--md-sys-color-on-primary);
    }
    .title {
      font-family: var(--title-font);
      font-size: 28px;
      font-weight: 700;
    }
    .auth {
      display: flex;
      align-items: center;
    }
  `}customElements.define("header-bar",al);class ll extends ie{static styles=n`
    :host {
      display: block;
      padding: 16px;
      color: var(--my-app-text-color, black);
    }
  `;render(){return V`
      <header-bar><span slot="title">Writing Assist</span></header-bar>
    `}}customElements.define("my-app",ll);
