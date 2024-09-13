"use strict";require('../assets/components/QuesoDropdown.css');const s=require("vue"),ee=require("./QuesoCollapsible-D3MZTStb.cjs");function ge(i){return s.getCurrentScope()?(s.onScopeDispose(i),!0):!1}function re(i){return typeof i=="function"?i():s.unref(i)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ye=i=>i!=null;function we(i){var e;const t=re(i);return(e=t==null?void 0:t.$el)!=null?e:t}/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var de=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],H=de.join(","),fe=typeof Element>"u",O=fe?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,Y=!fe&&Element.prototype.getRootNode?function(i){var e;return i==null||(e=i.getRootNode)===null||e===void 0?void 0:e.call(i)}:function(i){return i==null?void 0:i.ownerDocument},Q=function i(e,t){var a;t===void 0&&(t=!0);var u=e==null||(a=e.getAttribute)===null||a===void 0?void 0:a.call(e,"inert"),l=u===""||u==="true",o=l||t&&e&&i(e.parentNode);return o},Ne=function(e){var t,a=e==null||(t=e.getAttribute)===null||t===void 0?void 0:t.call(e,"contenteditable");return a===""||a==="true"},ve=function(e,t,a){if(Q(e))return[];var u=Array.prototype.slice.apply(e.querySelectorAll(H));return t&&O.call(e,H)&&u.unshift(e),u=u.filter(a),u},be=function i(e,t,a){for(var u=[],l=Array.from(e);l.length;){var o=l.shift();if(!Q(o,!1))if(o.tagName==="SLOT"){var f=o.assignedElements(),v=f.length?f:o.children,p=i(v,!0,a);a.flatten?u.push.apply(u,p):u.push({scopeParent:o,candidates:p})}else{var N=O.call(o,H);N&&a.filter(o)&&(t||!e.includes(o))&&u.push(o);var w=o.shadowRoot||typeof a.getShadowRoot=="function"&&a.getShadowRoot(o),g=!Q(w,!1)&&(!a.shadowRootFilter||a.shadowRootFilter(o));if(w&&g){var F=i(w===!0?o.children:w.children,!0,a);a.flatten?u.push.apply(u,F):u.push({scopeParent:o,candidates:F})}else l.unshift.apply(l,o.children)}}return u},pe=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},C=function(e){if(!e)throw new Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||Ne(e))&&!pe(e)?0:e.tabIndex},Te=function(e,t){var a=C(e);return a<0&&t&&!pe(e)?0:a},ke=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},he=function(e){return e.tagName==="INPUT"},Ee=function(e){return he(e)&&e.type==="hidden"},Se=function(e){var t=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(a){return a.tagName==="SUMMARY"});return t},Fe=function(e,t){for(var a=0;a<e.length;a++)if(e[a].checked&&e[a].form===t)return e[a]},De=function(e){if(!e.name)return!0;var t=e.form||Y(e),a=function(f){return t.querySelectorAll('input[type="radio"][name="'+f+'"]')},u;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")u=a(window.CSS.escape(e.name));else try{u=a(e.name)}catch(o){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",o.message),!1}var l=Fe(u,e.form);return!l||l===e},Pe=function(e){return he(e)&&e.type==="radio"},Re=function(e){return Pe(e)&&!De(e)},Ce=function(e){var t,a=e&&Y(e),u=(t=a)===null||t===void 0?void 0:t.host,l=!1;if(a&&a!==e){var o,f,v;for(l=!!((o=u)!==null&&o!==void 0&&(f=o.ownerDocument)!==null&&f!==void 0&&f.contains(u)||e!=null&&(v=e.ownerDocument)!==null&&v!==void 0&&v.contains(e));!l&&u;){var p,N,w;a=Y(u),u=(p=a)===null||p===void 0?void 0:p.host,l=!!((N=u)!==null&&N!==void 0&&(w=N.ownerDocument)!==null&&w!==void 0&&w.contains(u))}}return l},oe=function(e){var t=e.getBoundingClientRect(),a=t.width,u=t.height;return a===0&&u===0},Oe=function(e,t){var a=t.displayCheck,u=t.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var l=O.call(e,"details>summary:first-of-type"),o=l?e.parentElement:e;if(O.call(o,"details:not([open]) *"))return!0;if(!a||a==="full"||a==="legacy-full"){if(typeof u=="function"){for(var f=e;e;){var v=e.parentElement,p=Y(e);if(v&&!v.shadowRoot&&u(v)===!0)return oe(e);e.assignedSlot?e=e.assignedSlot:!v&&p!==e.ownerDocument?e=p.host:e=v}e=f}if(Ce(e))return!e.getClientRects().length;if(a!=="legacy-full")return!0}else if(a==="non-zero-area")return oe(e);return!1},Ie=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName==="FIELDSET"&&t.disabled){for(var a=0;a<t.children.length;a++){var u=t.children.item(a);if(u.tagName==="LEGEND")return O.call(t,"fieldset[disabled] *")?!0:!u.contains(e)}return!0}t=t.parentElement}return!1},Z=function(e,t){return!(t.disabled||Q(t)||Ee(t)||Oe(t,e)||Se(t)||Ie(t))},ae=function(e,t){return!(Re(t)||C(t)<0||!Z(e,t))},Ae=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},_e=function i(e){var t=[],a=[];return e.forEach(function(u,l){var o=!!u.scopeParent,f=o?u.scopeParent:u,v=Te(f,o),p=o?i(u.candidates):f;v===0?o?t.push.apply(t,p):t.push(f):a.push({documentOrder:l,tabIndex:v,item:u,isScope:o,content:p})}),a.sort(ke).reduce(function(u,l){return l.isScope?u.push.apply(u,l.content):u.push(l.content),u},[]).concat(t)},xe=function(e,t){t=t||{};var a;return t.getShadowRoot?a=be([e],t.includeContainer,{filter:ae.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Ae}):a=ve(e,t.includeContainer,ae.bind(null,t)),_e(a)},Be=function(e,t){t=t||{};var a;return t.getShadowRoot?a=be([e],t.includeContainer,{filter:Z.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):a=ve(e,t.includeContainer,Z.bind(null,t)),a},_=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return O.call(e,H)===!1?!1:ae(t,e)},Ke=de.concat("iframe").join(","),te=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return O.call(e,Ke)===!1?!1:Z(t,e)};/*!
* focus-trap 7.5.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function ie(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(i);e&&(a=a.filter(function(u){return Object.getOwnPropertyDescriptor(i,u).enumerable})),t.push.apply(t,a)}return t}function se(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ie(Object(t),!0).forEach(function(a){Le(i,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):ie(Object(t)).forEach(function(a){Object.defineProperty(i,a,Object.getOwnPropertyDescriptor(t,a))})}return i}function Le(i,e,t){return e=Ve(e),e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function qe(i,e){if(typeof i!="object"||i===null)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var a=t.call(i,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function Ve(i){var e=qe(i,"string");return typeof e=="symbol"?e:String(e)}var ue={activateTrap:function(e,t){if(e.length>0){var a=e[e.length-1];a!==t&&a.pause()}var u=e.indexOf(t);u===-1||e.splice(u,1),e.push(t)},deactivateTrap:function(e,t){var a=e.indexOf(t);a!==-1&&e.splice(a,1),e.length>0&&e[e.length-1].unpause()}},Me=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},$e=function(e){return(e==null?void 0:e.key)==="Escape"||(e==null?void 0:e.key)==="Esc"||(e==null?void 0:e.keyCode)===27},M=function(e){return(e==null?void 0:e.key)==="Tab"||(e==null?void 0:e.keyCode)===9},je=function(e){return M(e)&&!e.shiftKey},Ge=function(e){return M(e)&&e.shiftKey},le=function(e){return setTimeout(e,0)},ce=function(e,t){var a=-1;return e.every(function(u,l){return t(u)?(a=l,!1):!0}),a},V=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),u=1;u<t;u++)a[u-1]=arguments[u];return typeof e=="function"?e.apply(void 0,a):e},W=function(e){return e.target.shadowRoot&&typeof e.composedPath=="function"?e.composedPath()[0]:e.target},Ue=[],ze=function(e,t){var a=(t==null?void 0:t.document)||document,u=(t==null?void 0:t.trapStack)||Ue,l=se({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward:je,isKeyBackward:Ge},t),o={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0,recentNavEvent:void 0},f,v=function(r,n,d){return r&&r[n]!==void 0?r[n]:l[d||n]},p=function(r,n){var d=typeof(n==null?void 0:n.composedPath)=="function"?n.composedPath():void 0;return o.containerGroups.findIndex(function(b){var h=b.container,m=b.tabbableNodes;return h.contains(r)||(d==null?void 0:d.includes(h))||m.find(function(y){return y===r})})},N=function(r){var n=l[r];if(typeof n=="function"){for(var d=arguments.length,b=new Array(d>1?d-1:0),h=1;h<d;h++)b[h-1]=arguments[h];n=n.apply(void 0,b)}if(n===!0&&(n=void 0),!n){if(n===void 0||n===!1)return n;throw new Error("`".concat(r,"` was specified but was not a node, or did not return a node"))}var m=n;if(typeof n=="string"&&(m=a.querySelector(n),!m))throw new Error("`".concat(r,"` as selector refers to no known node"));return m},w=function(){var r=N("initialFocus");if(r===!1)return!1;if(r===void 0||!te(r,l.tabbableOptions))if(p(a.activeElement)>=0)r=a.activeElement;else{var n=o.tabbableGroups[0],d=n&&n.firstTabbableNode;r=d||N("fallbackFocus")}if(!r)throw new Error("Your focus-trap needs to have at least one focusable element");return r},g=function(){if(o.containerGroups=o.containers.map(function(r){var n=xe(r,l.tabbableOptions),d=Be(r,l.tabbableOptions),b=n.length>0?n[0]:void 0,h=n.length>0?n[n.length-1]:void 0,m=d.find(function(T){return _(T)}),y=d.slice().reverse().find(function(T){return _(T)}),k=!!n.find(function(T){return C(T)>0});return{container:r,tabbableNodes:n,focusableNodes:d,posTabIndexesFound:k,firstTabbableNode:b,lastTabbableNode:h,firstDomTabbableNode:m,lastDomTabbableNode:y,nextTabbableNode:function(R){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,D=n.indexOf(R);return D<0?L?d.slice(d.indexOf(R)+1).find(function(q){return _(q)}):d.slice(0,d.indexOf(R)).reverse().find(function(q){return _(q)}):n[D+(L?1:-1)]}}}),o.tabbableGroups=o.containerGroups.filter(function(r){return r.tabbableNodes.length>0}),o.tabbableGroups.length<=0&&!N("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");if(o.containerGroups.find(function(r){return r.posTabIndexesFound})&&o.containerGroups.length>1)throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.")},F=function c(r){var n=r.activeElement;if(n)return n.shadowRoot&&n.shadowRoot.activeElement!==null?c(n.shadowRoot):n},E=function c(r){if(r!==!1&&r!==F(document)){if(!r||!r.focus){c(w());return}r.focus({preventScroll:!!l.preventScroll}),o.mostRecentlyFocusedNode=r,Me(r)&&r.select()}},$=function(r){var n=N("setReturnFocus",r);return n||(n===!1?!1:r)},I=function(r){var n=r.target,d=r.event,b=r.isBackward,h=b===void 0?!1:b;n=n||W(d),g();var m=null;if(o.tabbableGroups.length>0){var y=p(n,d),k=y>=0?o.containerGroups[y]:void 0;if(y<0)h?m=o.tabbableGroups[o.tabbableGroups.length-1].lastTabbableNode:m=o.tabbableGroups[0].firstTabbableNode;else if(h){var T=ce(o.tabbableGroups,function(X){var J=X.firstTabbableNode;return n===J});if(T<0&&(k.container===n||te(n,l.tabbableOptions)&&!_(n,l.tabbableOptions)&&!k.nextTabbableNode(n,!1))&&(T=y),T>=0){var R=T===0?o.tabbableGroups.length-1:T-1,L=o.tabbableGroups[R];m=C(n)>=0?L.lastTabbableNode:L.lastDomTabbableNode}else M(d)||(m=k.nextTabbableNode(n,!1))}else{var D=ce(o.tabbableGroups,function(X){var J=X.lastTabbableNode;return n===J});if(D<0&&(k.container===n||te(n,l.tabbableOptions)&&!_(n,l.tabbableOptions)&&!k.nextTabbableNode(n))&&(D=y),D>=0){var q=D===o.tabbableGroups.length-1?0:D+1,ne=o.tabbableGroups[q];m=C(n)>=0?ne.firstTabbableNode:ne.firstDomTabbableNode}else M(d)||(m=k.nextTabbableNode(n))}}else m=N("fallbackFocus");return m},A=function(r){var n=W(r);if(!(p(n,r)>=0)){if(V(l.clickOutsideDeactivates,r)){f.deactivate({returnFocus:l.returnFocusOnDeactivate});return}V(l.allowOutsideClick,r)||r.preventDefault()}},j=function(r){var n=W(r),d=p(n,r)>=0;if(d||n instanceof Document)d&&(o.mostRecentlyFocusedNode=n);else{r.stopImmediatePropagation();var b,h=!0;if(o.mostRecentlyFocusedNode)if(C(o.mostRecentlyFocusedNode)>0){var m=p(o.mostRecentlyFocusedNode),y=o.containerGroups[m].tabbableNodes;if(y.length>0){var k=y.findIndex(function(T){return T===o.mostRecentlyFocusedNode});k>=0&&(l.isKeyForward(o.recentNavEvent)?k+1<y.length&&(b=y[k+1],h=!1):k-1>=0&&(b=y[k-1],h=!1))}}else o.containerGroups.some(function(T){return T.tabbableNodes.some(function(R){return C(R)>0})})||(h=!1);else h=!1;h&&(b=I({target:o.mostRecentlyFocusedNode,isBackward:l.isKeyBackward(o.recentNavEvent)})),E(b||o.mostRecentlyFocusedNode||w())}o.recentNavEvent=void 0},x=function(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;o.recentNavEvent=r;var d=I({event:r,isBackward:n});d&&(M(r)&&r.preventDefault(),E(d))},S=function(r){if($e(r)&&V(l.escapeDeactivates,r)!==!1){r.preventDefault(),f.deactivate();return}(l.isKeyForward(r)||l.isKeyBackward(r))&&x(r,l.isKeyBackward(r))},B=function(r){var n=W(r);p(n,r)>=0||V(l.clickOutsideDeactivates,r)||V(l.allowOutsideClick,r)||(r.preventDefault(),r.stopImmediatePropagation())},G=function(){if(o.active)return ue.activateTrap(u,f),o.delayInitialFocusTimer=l.delayInitialFocus?le(function(){E(w())}):E(w()),a.addEventListener("focusin",j,!0),a.addEventListener("mousedown",A,{capture:!0,passive:!1}),a.addEventListener("touchstart",A,{capture:!0,passive:!1}),a.addEventListener("click",B,{capture:!0,passive:!1}),a.addEventListener("keydown",S,{capture:!0,passive:!1}),f},U=function(){if(o.active)return a.removeEventListener("focusin",j,!0),a.removeEventListener("mousedown",A,!0),a.removeEventListener("touchstart",A,!0),a.removeEventListener("click",B,!0),a.removeEventListener("keydown",S,!0),f},z=function(r){var n=r.some(function(d){var b=Array.from(d.removedNodes);return b.some(function(h){return h===o.mostRecentlyFocusedNode})});n&&E(w())},K=typeof window<"u"&&"MutationObserver"in window?new MutationObserver(z):void 0,P=function(){K&&(K.disconnect(),o.active&&!o.paused&&o.containers.map(function(r){K.observe(r,{subtree:!0,childList:!0})}))};return f={get active(){return o.active},get paused(){return o.paused},activate:function(r){if(o.active)return this;var n=v(r,"onActivate"),d=v(r,"onPostActivate"),b=v(r,"checkCanFocusTrap");b||g(),o.active=!0,o.paused=!1,o.nodeFocusedBeforeActivation=a.activeElement,n==null||n();var h=function(){b&&g(),G(),P(),d==null||d()};return b?(b(o.containers.concat()).then(h,h),this):(h(),this)},deactivate:function(r){if(!o.active)return this;var n=se({onDeactivate:l.onDeactivate,onPostDeactivate:l.onPostDeactivate,checkCanReturnFocus:l.checkCanReturnFocus},r);clearTimeout(o.delayInitialFocusTimer),o.delayInitialFocusTimer=void 0,U(),o.active=!1,o.paused=!1,P(),ue.deactivateTrap(u,f);var d=v(n,"onDeactivate"),b=v(n,"onPostDeactivate"),h=v(n,"checkCanReturnFocus"),m=v(n,"returnFocus","returnFocusOnDeactivate");d==null||d();var y=function(){le(function(){m&&E($(o.nodeFocusedBeforeActivation)),b==null||b()})};return m&&h?(h($(o.nodeFocusedBeforeActivation)).then(y,y),this):(y(),this)},pause:function(r){if(o.paused||!o.active)return this;var n=v(r,"onPause"),d=v(r,"onPostPause");return o.paused=!0,n==null||n(),U(),P(),d==null||d(),this},unpause:function(r){if(!o.paused||!o.active)return this;var n=v(r,"onUnpause"),d=v(r,"onPostUnpause");return o.paused=!1,n==null||n(),g(),G(),P(),d==null||d(),this},updateContainerElements:function(r){var n=[].concat(r).filter(Boolean);return o.containers=n.map(function(d){return typeof d=="string"?a.querySelector(d):d}),o.active&&g(),P(),this}},f.updateContainerElements(e),f};function me(i,e={}){let t;const{immediate:a,...u}=e,l=s.ref(!1),o=s.ref(!1),f=g=>t&&t.activate(g),v=g=>t&&t.deactivate(g),p=()=>{t&&(t.pause(),o.value=!0)},N=()=>{t&&(t.unpause(),o.value=!1)},w=s.computed(()=>{const g=re(i);return(Array.isArray(g)?g:[g]).map(F=>{const E=re(F);return typeof E=="string"?E:we(E)}).filter(ye)});return s.watch(w,g=>{g.length&&(t=ze(g,{...u,onActivate(){l.value=!0,e.onActivate&&e.onActivate()},onDeactivate(){l.value=!1,e.onDeactivate&&e.onDeactivate()}}),a&&f())},{flush:"post"}),ge(()=>v()),{hasFocus:l,isPaused:o,activate:f,deactivate:v,pause:p,unpause:N}}const We=["aria-expanded"],He={class:"queso-dropdown__selector__text"},Ye={key:0,class:"queso-dropdown__selector__text__placeholder"},Qe={key:1,class:"queso-dropdown__selector__text__active-label"},Ze={class:"queso-dropdown__selector__icon"},Xe={key:0,class:"queso-dropdown__popover__header"},Je=["tabindex","onClick","onKeydown"],et={key:1,class:"queso-dropdown__popover__footer"},tt=s.defineComponent({__name:"QuesoDropdown",props:s.mergeModels({options:{},multiple:{type:Boolean},stayOpenOnSelection:{type:Boolean}},{modelValue:{default:()=>[]},modelModifiers:{}}),emits:s.mergeModels(["open:dropdown","close:dropdown"],["update:modelValue"]),setup(i,{expose:e,emit:t}){const a=i,u=t,l=s.useModel(i,"modelValue"),o=s.ref(null),f=s.ref([]),v=s.ref(null),p=s.ref(!1),{options:N}=s.toRefs(a),w="queso-collapsible__"+Math.random().toString(36).substring(2,9),g=s.computed(()=>N.value.filter(c=>l.value.includes(c.value))),F=s.computed(()=>({"is-multiple":a.multiple,"is-dropdown-open":p.value,"is-dropdown-close":!p.value})),{activate:E,deactivate:$}=me(o),I=c=>{a.multiple?l.value.includes(c)?l.value=l.value.filter(r=>r!==c):l.value=[...l.value,c]:l.value=[c],a.multiple||a.stayOpenOnSelection||S()},A=(c,r)=>{r.preventDefault();const n=f.value.findIndex(y=>y===r.target),d=(n+1)%f.value.length,b=(n-1+f.value.length)%f.value.length,h=f.value[d],m=f.value[b];r.key==="ArrowDown"||r.key==="ArrowRight"?h.focus():r.key==="ArrowUp"||r.key==="ArrowLeft"?m.focus():(r.key==="Enter"||r.key===" "||r.key==="Space")&&I(c)},j=()=>{setTimeout(()=>{U.value=0},210)},x=()=>{p.value=!0;const c=f.value[0];E(),c&&c.focus(),u("open:dropdown")},S=()=>{p.value=!1,$(),j(),u("close:dropdown")},B=()=>{p.value?S():x()},G=c=>{(c.key===" "||c.key==="Space")&&(c.preventDefault(),B())};ee.onKeyStroke("Escape",()=>{p.value&&S()}),ee.onClickOutside(o,()=>S());const{y:U,arrivedState:z}=ee.useScroll(v,{offset:{top:15,bottom:15}}),K=s.computed(()=>{var c,r;return v.value?((c=v.value)==null?void 0:c.scrollHeight)>((r=v.value)==null?void 0:r.clientHeight):!1}),P=s.computed(()=>({"is-scrolled-top":z.top,"is-scrolled-bottom":z.bottom||!K.value}));return e({isDropdownOpen:p,openDropdown:x,closeDropdown:S}),(c,r)=>s.unref(N).length>0?(s.openBlock(),s.createElementBlock("div",{key:0,ref_key:"dropdown",ref:o,class:s.normalizeClass(["queso-dropdown",F.value])},[s.createElementVNode("div",{class:"queso-dropdown__selector","aria-expanded":p.value,"aria-controls":w,tabindex:"0",onClick:r[0]||(r[0]=n=>B()),onKeydown:r[1]||(r[1]=n=>G(n))},[s.renderSlot(c.$slots,"selector",s.normalizeProps(s.guardReactiveProps({options:s.unref(N),activeOptions:g.value})),()=>[s.renderSlot(c.$slots,"selectorBeforeText"),s.createElementVNode("div",He,[g.value.length<1?(s.openBlock(),s.createElementBlock("div",Ye,[s.renderSlot(c.$slots,"selectorPlaceholder")])):(s.openBlock(),s.createElementBlock("div",Qe,[s.renderSlot(c.$slots,"selectorActiveOptions",s.normalizeProps(s.guardReactiveProps({activeOptions:g.value})),()=>[s.createTextVNode(s.toDisplayString(g.value),1)])]))]),s.renderSlot(c.$slots,"selectorAfterText"),s.createElementVNode("div",Ze,[s.renderSlot(c.$slots,"selectorIcon",{},()=>[s.createTextVNode("↓")])])])],40,We),s.createElementVNode("div",{class:"queso-dropdown__popover",id:w},[c.$slots.popoverHeader?(s.openBlock(),s.createElementBlock("div",Xe,[s.renderSlot(c.$slots,"popoverHeader")])):s.createCommentVNode("",!0),s.createElementVNode("div",{class:s.normalizeClass(["queso-dropdown__popover__scroll",P.value])},[s.createElementVNode("ul",{ref_key:"dropdownPopover",ref:v,class:"queso-dropdown__popover__options-list"},[(s.openBlock(!0),s.createElementBlock(s.Fragment,null,s.renderList(s.unref(N),(n,d)=>(s.openBlock(),s.createElementBlock("li",{key:n.value,ref_for:!0,ref_key:"optionsRefs",ref:f,class:s.normalizeClass(["queso-dropdown__popover__options-list__item",{"is-option-active":l.value.includes(n.value)}]),tabindex:p.value?"0":"-1",onClick:b=>I(n.value),onKeydown:b=>A(n.value,b)},[s.renderSlot(c.$slots,"item",s.mergeProps({ref_for:!0},{...n,openDropdown:x,closeDropdown:S}),()=>[s.createTextVNode(s.toDisplayString(n),1)])],42,Je))),128))],512)],2),c.$slots.popoverFooter?(s.openBlock(),s.createElementBlock("div",et,[s.renderSlot(c.$slots,"popoverFooter")])):s.createCommentVNode("",!0)])],2)):s.createCommentVNode("",!0)}});exports._sfc_main=tt;exports.useFocusTrap=me;