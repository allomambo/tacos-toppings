"use strict";require('../assets/components/QuesoCollapsible.css');const t=require("vue");function D(e){return t.getCurrentScope()?(t.onScopeDispose(e),!0):!1}function y(e){return typeof e=="function"?e():t.unref(e)}const q=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const X=e=>e!=null,Q=Object.prototype.toString,Y=e=>Q.call(e)==="[object Object]",E=()=>{},J=U();function U(){var e,o;return q&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((o=window==null?void 0:window.navigator)==null?void 0:o.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function B(e,o){function l(...n){return new Promise((d,u)=>{Promise.resolve(e(()=>o.apply(this,n),{fn:o,thisArg:this,args:n})).then(d).catch(u)})}return l}function Z(e,o={}){let l,n,d=E;const u=a=>{clearTimeout(a),d(),d=E};return a=>{const h=y(e),p=y(o.maxWait);return l&&u(l),h<=0||p!==void 0&&p<=0?(n&&(u(n),n=null),Promise.resolve(a())):new Promise((f,v)=>{d=o.rejectOnCancel?v:f,p&&!n&&(n=setTimeout(()=>{l&&u(l),n=null,f(a())},p)),l=setTimeout(()=>{n&&u(n),n=null,f(a())},h)})}}function ee(...e){let o=0,l,n=!0,d=E,u,i,a,h,p;!t.isRef(e[0])&&typeof e[0]=="object"?{delay:i,trailing:a=!0,leading:h=!0,rejectOnCancel:p=!1}=e[0]:[i,a=!0,h=!0,p=!1]=e;const f=()=>{l&&(clearTimeout(l),l=void 0,d(),d=E)};return r=>{const c=y(i),s=Date.now()-o,w=()=>u=r();return f(),c<=0?(o=Date.now(),w()):(s>c&&(h||!n)?(o=Date.now(),w()):a&&(u=new Promise((b,g)=>{d=p?g:b,l=setTimeout(()=>{o=Date.now(),n=!0,b(w()),f()},Math.max(0,c-s))})),!h&&!l&&(l=setTimeout(()=>n=!0,c)),n=!1,u)}}function te(e){return t.getCurrentInstance()}function oe(e,o=200,l={}){return B(Z(o,l),e)}function ne(e,o=200,l=!1,n=!0,d=!1){return B(ee(o,l,n,d),e)}function H(e,o=!0,l){te()?t.onMounted(e,l):o?e():t.nextTick(e)}function _(e){var o;const l=y(e);return(o=l==null?void 0:l.$el)!=null?o:l}const M=q?window:void 0;function T(...e){let o,l,n,d;if(typeof e[0]=="string"||Array.isArray(e[0])?([l,n,d]=e,o=M):[o,l,n,d]=e,!o)return E;Array.isArray(l)||(l=[l]),Array.isArray(n)||(n=[n]);const u=[],i=()=>{u.forEach(f=>f()),u.length=0},a=(f,v,r,c)=>(f.addEventListener(v,r,c),()=>f.removeEventListener(v,r,c)),h=t.watch(()=>[_(o),y(d)],([f,v])=>{if(i(),!f)return;const r=Y(v)?{...v}:v;u.push(...l.flatMap(c=>n.map(s=>a(f,c,s,r))))},{immediate:!0,flush:"post"}),p=()=>{h(),i()};return D(p),p}let N=!1;function le(e,o,l={}){const{window:n=M,ignore:d=[],capture:u=!0,detectIframe:i=!1}=l;if(!n)return E;J&&!N&&(N=!0,Array.from(n.document.body.children).forEach(r=>r.addEventListener("click",E)),n.document.documentElement.addEventListener("click",E));let a=!0;const h=r=>d.some(c=>{if(typeof c=="string")return Array.from(n.document.querySelectorAll(c)).some(s=>s===r.target||r.composedPath().includes(s));{const s=_(c);return s&&(r.target===s||r.composedPath().includes(s))}}),f=[T(n,"click",r=>{const c=_(e);if(!(!c||c===r.target||r.composedPath().includes(c))){if(r.detail===0&&(a=!h(r)),!a){a=!0;return}o(r)}},{passive:!0,capture:u}),T(n,"pointerdown",r=>{const c=_(e);a=!h(r)&&!!(c&&!r.composedPath().includes(c))},{passive:!0}),i&&T(n,"blur",r=>{setTimeout(()=>{var c;const s=_(e);((c=n.document.activeElement)==null?void 0:c.tagName)==="IFRAME"&&!(s!=null&&s.contains(n.document.activeElement))&&o(r)},0)})].filter(Boolean);return()=>f.forEach(r=>r())}function re(e){return typeof e=="function"?e:typeof e=="string"?o=>o.key===e:Array.isArray(e)?o=>e.includes(o.key):()=>!0}function se(...e){let o,l,n={};e.length===3?(o=e[0],l=e[1],n=e[2]):e.length===2?typeof e[1]=="object"?(o=!0,l=e[0],n=e[1]):(o=e[0],l=e[1]):(o=!0,l=e[0]);const{target:d=M,eventName:u="keydown",passive:i=!1,dedupe:a=!1}=n,h=re(o);return T(d,u,f=>{f.repeat&&y(a)||h(f)&&l(f)},i)}function ie(){const e=t.ref(!1),o=t.getCurrentInstance();return o&&t.onMounted(()=>{e.value=!0},o),e}function K(e){const o=ie();return t.computed(()=>(o.value,!!e()))}function ue(e,o,l={}){const{window:n=M,...d}=l;let u;const i=K(()=>n&&"MutationObserver"in n),a=()=>{u&&(u.disconnect(),u=void 0)},h=t.computed(()=>{const r=y(e),c=(Array.isArray(r)?r:[r]).map(_).filter(X);return new Set(c)}),p=t.watch(()=>h.value,r=>{a(),i.value&&n&&r.size&&(u=new MutationObserver(o),r.forEach(c=>u.observe(c,d)))},{immediate:!0,flush:"post"}),f=()=>u==null?void 0:u.takeRecords(),v=()=>{a(),p()};return D(v),{isSupported:i,stop:v,takeRecords:f}}function F(e,o,l={}){const{window:n=M,...d}=l;let u;const i=K(()=>n&&"ResizeObserver"in n),a=()=>{u&&(u.disconnect(),u=void 0)},h=t.computed(()=>Array.isArray(e)?e.map(v=>_(v)):[_(e)]),p=t.watch(h,v=>{if(a(),i.value&&n){u=new ResizeObserver(o);for(const r of v)r&&u.observe(r,d)}},{immediate:!0,flush:"post"}),f=()=>{a(),p()};return D(f),{isSupported:i,stop:f}}function ce(e,o={}){const{reset:l=!0,windowResize:n=!0,windowScroll:d=!0,immediate:u=!0}=o,i=t.ref(0),a=t.ref(0),h=t.ref(0),p=t.ref(0),f=t.ref(0),v=t.ref(0),r=t.ref(0),c=t.ref(0);function s(){const w=_(e);if(!w){l&&(i.value=0,a.value=0,h.value=0,p.value=0,f.value=0,v.value=0,r.value=0,c.value=0);return}const b=w.getBoundingClientRect();i.value=b.height,a.value=b.bottom,h.value=b.left,p.value=b.right,f.value=b.top,v.value=b.width,r.value=b.x,c.value=b.y}return F(e,s),t.watch(()=>_(e),w=>!w&&s()),ue(e,s,{attributeFilter:["style","class"]}),d&&T("scroll",s,{capture:!0,passive:!0}),n&&T("resize",s,{passive:!0}),H(()=>{u&&s()}),{height:i,bottom:a,left:h,right:p,top:f,width:v,x:r,y:c,update:s}}const V=1;function ae(e,o={}){const{throttle:l=0,idle:n=200,onStop:d=E,onScroll:u=E,offset:i={left:0,right:0,top:0,bottom:0},eventListenerOptions:a={capture:!1,passive:!0},behavior:h="auto",window:p=M,onError:f=m=>{console.error(m)}}=o,v=t.ref(0),r=t.ref(0),c=t.computed({get(){return v.value},set(m){w(m,void 0)}}),s=t.computed({get(){return r.value},set(m){w(void 0,m)}});function w(m,A){var S,x,R;if(!p)return;const C=y(e);C&&((R=C instanceof Document?p.document.body:C)==null||R.scrollTo({top:(S=y(A))!=null?S:s.value,left:(x=y(m))!=null?x:c.value,behavior:y(h)}))}const b=t.ref(!1),g=t.reactive({left:!0,right:!1,top:!0,bottom:!1}),O=t.reactive({left:!1,right:!1,top:!1,bottom:!1}),L=m=>{b.value&&(b.value=!1,O.left=!1,O.right=!1,O.top=!1,O.bottom=!1,d(m))},G=oe(L,l+n),k=m=>{var A;if(!p)return;const S=((A=m==null?void 0:m.document)==null?void 0:A.documentElement)||(m==null?void 0:m.documentElement)||_(m),{display:x,flexDirection:R}=getComputedStyle(S),C=S.scrollLeft;O.left=C<v.value,O.right=C>v.value;const z=Math.abs(C)<=(i.left||0),I=Math.abs(C)+S.clientWidth>=S.scrollWidth-(i.right||0)-V;x==="flex"&&R==="row-reverse"?(g.left=I,g.right=z):(g.left=z,g.right=I),v.value=C;let P=S.scrollTop;m===p.document&&!P&&(P=p.document.body.scrollTop),O.top=P<r.value,O.bottom=P>r.value;const W=Math.abs(P)<=(i.top||0),j=Math.abs(P)+S.clientHeight>=S.scrollHeight-(i.bottom||0)-V;x==="flex"&&R==="column-reverse"?(g.top=j,g.bottom=W):(g.top=W,g.bottom=j),r.value=P},$=m=>{var A;if(!p)return;const S=(A=m.target.documentElement)!=null?A:m.target;k(S),b.value=!0,G(m),u(m)};return T(e,"scroll",l?ne($,l,!0,!1):$,a),H(()=>{try{const m=y(e);if(!m)return;k(m)}catch(m){f(m)}}),T(e,"scrollend",L,a),{x:c,y:s,isScrolling:b,arrivedState:g,directions:O,measure(){const m=y(e);p&&m&&k(m)}}}const fe={class:"queso-collapsible__header__text"},de={class:"queso-collapsible__header__icon"},pe=["aria-expanded"],ve=t.defineComponent({__name:"QuesoCollapsible",props:{expandOnMount:{type:Boolean}},emits:["collapsible:open","collapsible:close","collapsible:toggle"],setup(e,{expose:o,emit:l}){t.useCssVars(s=>({"5f3fdece":f.value}));const n=e,d=l,u=t.ref(),i=t.ref(!1),a=t.ref(n.expandOnMount);t.onBeforeMount(()=>{a.value&&(i.value=!0)});const h=t.computed(()=>({"is-collapsible-open":i.value,"is-collapsible-close":!i.value})),{height:p}=ce(u),f=t.computed(()=>a.value?"none":i.value?`${p.value}px`:"0px"),v=()=>{i.value=!0},r=()=>{a.value=!1,setTimeout(()=>{i.value=!1},1)},c=(s=!1)=>{s?v():r()};return t.watch(i,s=>{d(s?"collapsible:open":"collapsible:close"),d("collapsible:toggle",s)}),o({isCollapsibleOpen:i,open:v,close:r,toggle:c}),(s,w)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["queso-collapsible",h.value])},[t.renderSlot(s.$slots,"beforeHeader"),t.createElementVNode("div",{class:"queso-collapsible__header",onClick:w[0]||(w[0]=b=>c(!i.value))},[t.renderSlot(s.$slots,"header",t.normalizeProps(t.guardReactiveProps({isCollapsibleOpen:i.value})),()=>[t.renderSlot(s.$slots,"headerPrefix"),t.createElementVNode("div",fe,[t.renderSlot(s.$slots,"headerText",t.normalizeProps(t.guardReactiveProps({isCollapsibleOpen:i.value})))]),t.renderSlot(s.$slots,"headerSuffix"),t.createElementVNode("div",de,[t.renderSlot(s.$slots,"headerIcon",t.normalizeProps(t.guardReactiveProps({isCollapsibleOpen:i.value})),()=>[t.createTextVNode("↓")])])])]),t.renderSlot(s.$slots,"afterHeader"),t.renderSlot(s.$slots,"beforeContent"),t.createElementVNode("div",{class:"queso-collapsible__content","aria-expanded":i.value},[t.createElementVNode("div",{ref_key:"collapsibleContent",ref:u,class:"queso-collapsible__content__inner"},[t.renderSlot(s.$slots,"content")],512)],8,pe),t.renderSlot(s.$slots,"afterContent")],2))}});exports._sfc_main=ve;exports.onClickOutside=le;exports.onKeyStroke=se;exports.useResizeObserver=F;exports.useScroll=ae;