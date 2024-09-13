"use strict";require('../assets/components/QuesoCollapsible.css');const t=require("vue");function D(e){return t.getCurrentScope()?(t.onScopeDispose(e),!0):!1}function S(e){return typeof e=="function"?e():t.unref(e)}const V=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const X=e=>e!=null,Q=Object.prototype.toString,Y=e=>Q.call(e)==="[object Object]",O=()=>{},J=U();function U(){var e,o;return V&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((o=window==null?void 0:window.navigator)==null?void 0:o.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function B(e,o){function l(...n){return new Promise((d,i)=>{Promise.resolve(e(()=>o.apply(this,n),{fn:o,thisArg:this,args:n})).then(d).catch(i)})}return l}function Z(e,o={}){let l,n,d=O;const i=c=>{clearTimeout(c),d(),d=O};return c=>{const b=S(e),p=S(o.maxWait);return l&&i(l),b<=0||p!==void 0&&p<=0?(n&&(i(n),n=null),Promise.resolve(c())):new Promise((f,h)=>{d=o.rejectOnCancel?h:f,p&&!n&&(n=setTimeout(()=>{l&&i(l),n=null,f(c())},p)),l=setTimeout(()=>{n&&i(n),n=null,f(c())},b)})}}function ee(...e){let o=0,l,n=!0,d=O,i,s,c,b,p;!t.isRef(e[0])&&typeof e[0]=="object"?{delay:s,trailing:c=!0,leading:b=!0,rejectOnCancel:p=!1}=e[0]:[s,c=!0,b=!0,p=!1]=e;const f=()=>{l&&(clearTimeout(l),l=void 0,d(),d=O)};return r=>{const u=S(s),v=Date.now()-o,y=()=>i=r();return f(),u<=0?(o=Date.now(),y()):(v>u&&(b||!n)?(o=Date.now(),y()):c&&(i=new Promise((a,w)=>{d=p?w:a,l=setTimeout(()=>{o=Date.now(),n=!0,a(y()),f()},Math.max(0,u-v))})),!b&&!l&&(l=setTimeout(()=>n=!0,u)),n=!1,i)}}function te(e){return t.getCurrentInstance()}function oe(e,o=200,l={}){return B(Z(o,l),e)}function ne(e,o=200,l=!1,n=!0,d=!1){return B(ee(o,l,n,d),e)}function H(e,o=!0,l){te()?t.onMounted(e,l):o?e():t.nextTick(e)}function E(e){var o;const l=S(e);return(o=l==null?void 0:l.$el)!=null?o:l}const P=V?window:void 0;function T(...e){let o,l,n,d;if(typeof e[0]=="string"||Array.isArray(e[0])?([l,n,d]=e,o=P):[o,l,n,d]=e,!o)return O;Array.isArray(l)||(l=[l]),Array.isArray(n)||(n=[n]);const i=[],s=()=>{i.forEach(f=>f()),i.length=0},c=(f,h,r,u)=>(f.addEventListener(h,r,u),()=>f.removeEventListener(h,r,u)),b=t.watch(()=>[E(o),S(d)],([f,h])=>{if(s(),!f)return;const r=Y(h)?{...h}:h;i.push(...l.flatMap(u=>n.map(v=>c(f,u,v,r))))},{immediate:!0,flush:"post"}),p=()=>{b(),s()};return D(p),p}let q=!1;function le(e,o,l={}){const{window:n=P,ignore:d=[],capture:i=!0,detectIframe:s=!1}=l;if(!n)return O;J&&!q&&(q=!0,Array.from(n.document.body.children).forEach(r=>r.addEventListener("click",O)),n.document.documentElement.addEventListener("click",O));let c=!0;const b=r=>d.some(u=>{if(typeof u=="string")return Array.from(n.document.querySelectorAll(u)).some(v=>v===r.target||r.composedPath().includes(v));{const v=E(u);return v&&(r.target===v||r.composedPath().includes(v))}}),f=[T(n,"click",r=>{const u=E(e);if(!(!u||u===r.target||r.composedPath().includes(u))){if(r.detail===0&&(c=!b(r)),!c){c=!0;return}o(r)}},{passive:!0,capture:i}),T(n,"pointerdown",r=>{const u=E(e);c=!b(r)&&!!(u&&!r.composedPath().includes(u))},{passive:!0}),s&&T(n,"blur",r=>{setTimeout(()=>{var u;const v=E(e);((u=n.document.activeElement)==null?void 0:u.tagName)==="IFRAME"&&!(v!=null&&v.contains(n.document.activeElement))&&o(r)},0)})].filter(Boolean);return()=>f.forEach(r=>r())}function re(e){return typeof e=="function"?e:typeof e=="string"?o=>o.key===e:Array.isArray(e)?o=>e.includes(o.key):()=>!0}function se(...e){let o,l,n={};e.length===3?(o=e[0],l=e[1],n=e[2]):e.length===2?typeof e[1]=="object"?(o=!0,l=e[0],n=e[1]):(o=e[0],l=e[1]):(o=!0,l=e[0]);const{target:d=P,eventName:i="keydown",passive:s=!1,dedupe:c=!1}=n,b=re(o);return T(d,i,f=>{f.repeat&&S(c)||b(f)&&l(f)},s)}function ie(){const e=t.ref(!1),o=t.getCurrentInstance();return o&&t.onMounted(()=>{e.value=!0},o),e}function K(e){const o=ie();return t.computed(()=>(o.value,!!e()))}function ue(e,o,l={}){const{window:n=P,...d}=l;let i;const s=K(()=>n&&"MutationObserver"in n),c=()=>{i&&(i.disconnect(),i=void 0)},b=t.computed(()=>{const r=S(e),u=(Array.isArray(r)?r:[r]).map(E).filter(X);return new Set(u)}),p=t.watch(()=>b.value,r=>{c(),s.value&&n&&r.size&&(i=new MutationObserver(o),r.forEach(u=>i.observe(u,d)))},{immediate:!0,flush:"post"}),f=()=>i==null?void 0:i.takeRecords(),h=()=>{c(),p()};return D(h),{isSupported:s,stop:h,takeRecords:f}}function F(e,o,l={}){const{window:n=P,...d}=l;let i;const s=K(()=>n&&"ResizeObserver"in n),c=()=>{i&&(i.disconnect(),i=void 0)},b=t.computed(()=>Array.isArray(e)?e.map(h=>E(h)):[E(e)]),p=t.watch(b,h=>{if(c(),s.value&&n){i=new ResizeObserver(o);for(const r of h)r&&i.observe(r,d)}},{immediate:!0,flush:"post"}),f=()=>{c(),p()};return D(f),{isSupported:s,stop:f}}function ce(e,o={}){const{reset:l=!0,windowResize:n=!0,windowScroll:d=!0,immediate:i=!0}=o,s=t.ref(0),c=t.ref(0),b=t.ref(0),p=t.ref(0),f=t.ref(0),h=t.ref(0),r=t.ref(0),u=t.ref(0);function v(){const y=E(e);if(!y){l&&(s.value=0,c.value=0,b.value=0,p.value=0,f.value=0,h.value=0,r.value=0,u.value=0);return}const a=y.getBoundingClientRect();s.value=a.height,c.value=a.bottom,b.value=a.left,p.value=a.right,f.value=a.top,h.value=a.width,r.value=a.x,u.value=a.y}return F(e,v),t.watch(()=>E(e),y=>!y&&v()),ue(e,v,{attributeFilter:["style","class"]}),d&&T("scroll",v,{capture:!0,passive:!0}),n&&T("resize",v,{passive:!0}),H(()=>{i&&v()}),{height:s,bottom:c,left:b,right:p,top:f,width:h,x:r,y:u,update:v}}const N=1;function ae(e,o={}){const{throttle:l=0,idle:n=200,onStop:d=O,onScroll:i=O,offset:s={left:0,right:0,top:0,bottom:0},eventListenerOptions:c={capture:!1,passive:!0},behavior:b="auto",window:p=P,onError:f=m=>{console.error(m)}}=o,h=t.ref(0),r=t.ref(0),u=t.computed({get(){return h.value},set(m){y(m,void 0)}}),v=t.computed({get(){return r.value},set(m){y(void 0,m)}});function y(m,A){var _,x,R;if(!p)return;const C=S(e);C&&((R=C instanceof Document?p.document.body:C)==null||R.scrollTo({top:(_=S(A))!=null?_:v.value,left:(x=S(m))!=null?x:u.value,behavior:S(b)}))}const a=t.ref(!1),w=t.reactive({left:!0,right:!1,top:!0,bottom:!1}),g=t.reactive({left:!1,right:!1,top:!1,bottom:!1}),L=m=>{a.value&&(a.value=!1,g.left=!1,g.right=!1,g.top=!1,g.bottom=!1,d(m))},G=oe(L,l+n),k=m=>{var A;if(!p)return;const _=((A=m==null?void 0:m.document)==null?void 0:A.documentElement)||(m==null?void 0:m.documentElement)||E(m),{display:x,flexDirection:R}=getComputedStyle(_),C=_.scrollLeft;g.left=C<h.value,g.right=C>h.value;const I=Math.abs(C)<=(s.left||0),z=Math.abs(C)+_.clientWidth>=_.scrollWidth-(s.right||0)-N;x==="flex"&&R==="row-reverse"?(w.left=z,w.right=I):(w.left=I,w.right=z),h.value=C;let M=_.scrollTop;m===p.document&&!M&&(M=p.document.body.scrollTop),g.top=M<r.value,g.bottom=M>r.value;const W=Math.abs(M)<=(s.top||0),j=Math.abs(M)+_.clientHeight>=_.scrollHeight-(s.bottom||0)-N;x==="flex"&&R==="column-reverse"?(w.top=j,w.bottom=W):(w.top=W,w.bottom=j),r.value=M},$=m=>{var A;if(!p)return;const _=(A=m.target.documentElement)!=null?A:m.target;k(_),a.value=!0,G(m),i(m)};return T(e,"scroll",l?ne($,l,!0,!1):$,c),H(()=>{try{const m=S(e);if(!m)return;k(m)}catch(m){f(m)}}),T(e,"scrollend",L,c),{x:u,y:v,isScrolling:a,arrivedState:w,directions:g,measure(){const m=S(e);p&&m&&k(m)}}}const fe=["aria-expanded"],de={class:"queso-collapsible__header__text"},pe={class:"queso-collapsible__header__icon"},ve=t.defineComponent({__name:"QuesoCollapsible",props:{expandOnMount:{type:Boolean}},emits:["collapsible:open","collapsible:close","collapsible:toggle"],setup(e,{expose:o,emit:l}){t.useCssVars(a=>({"8af02d4c":h.value}));const n=e,d=l,i=t.ref(),s=t.ref(!1),c=t.ref(n.expandOnMount),b="queso-collapsible__"+Math.random().toString(36).substring(2,9);t.onBeforeMount(()=>{c.value&&(s.value=!0)});const p=t.computed(()=>({"is-collapsible-open":s.value,"is-collapsible-close":!s.value})),{height:f}=ce(i),h=t.computed(()=>c.value?"none":s.value?`${f.value}px`:"0px"),r=()=>{s.value=!0},u=()=>{c.value=!1,setTimeout(()=>{s.value=!1},1)},v=()=>{s.value?u():r()},y=a=>{(a.key===" "||a.key==="Space")&&(a.preventDefault(),v())};return t.watch(s,a=>{d(a?"collapsible:open":"collapsible:close"),d("collapsible:toggle",a)}),o({isCollapsibleOpen:s,open:r,close:u,toggle:v}),(a,w)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["queso-collapsible",p.value])},[t.renderSlot(a.$slots,"beforeHeader"),t.createElementVNode("div",{class:"queso-collapsible__header","aria-expanded":s.value,"aria-controls":b,tabindex:"0",onClick:w[0]||(w[0]=g=>v()),onKeydown:w[1]||(w[1]=g=>y(g))},[t.renderSlot(a.$slots,"header",t.normalizeProps(t.guardReactiveProps({isCollapsibleOpen:s.value})),()=>[t.renderSlot(a.$slots,"headerPrefix"),t.createElementVNode("div",de,[t.renderSlot(a.$slots,"headerText",t.normalizeProps(t.guardReactiveProps({isCollapsibleOpen:s.value})))]),t.renderSlot(a.$slots,"headerSuffix"),t.createElementVNode("div",pe,[t.renderSlot(a.$slots,"headerIcon",t.normalizeProps(t.guardReactiveProps({isCollapsibleOpen:s.value})),()=>[t.createTextVNode("↓")])])])],40,fe),t.renderSlot(a.$slots,"afterHeader"),t.renderSlot(a.$slots,"beforeContent"),t.createElementVNode("div",{class:"queso-collapsible__content",id:b},[t.createElementVNode("div",{ref_key:"collapsibleContent",ref:i,class:"queso-collapsible__content__inner"},[t.renderSlot(a.$slots,"content")],512)]),t.renderSlot(a.$slots,"afterContent")],2))}});exports._sfc_main=ve;exports.onClickOutside=le;exports.onKeyStroke=se;exports.useResizeObserver=F;exports.useScroll=ae;