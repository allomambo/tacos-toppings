var ae=require("../assets/components/QuesoCollapsible.css");const t=require("vue");function B(e){return t.getCurrentScope()?(t.onScopeDispose(e),!0):!1}function _(e){return typeof e=="function"?e():t.unref(e)}const H=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const G=Object.prototype.toString,X=e=>G.call(e)==="[object Object]",T=()=>{},Q=Y();function Y(){var e,s;return H&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((s=window==null?void 0:window.navigator)==null?void 0:s.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function j(e,s){function l(...o){return new Promise((f,u)=>{Promise.resolve(e(()=>s.apply(this,o),{fn:s,thisArg:this,args:o})).then(f).catch(u)})}return l}function J(e,s={}){let l,o,f=T;const u=a=>{clearTimeout(a),f(),f=T};return a=>{const h=_(e),p=_(s.maxWait);return l&&u(l),h<=0||p!==void 0&&p<=0?(o&&(u(o),o=null),Promise.resolve(a())):new Promise((d,v)=>{f=s.rejectOnCancel?v:d,p&&!o&&(o=setTimeout(()=>{l&&u(l),o=null,d(a())},p)),l=setTimeout(()=>{o&&u(o),o=null,d(a())},h)})}}function K(e,s=!0,l=!0,o=!1){let f=0,u,i=!0,a=T,h;const p=()=>{u&&(clearTimeout(u),u=void 0,a(),a=T)};return v=>{const n=_(e),c=Date.now()-f,r=()=>h=v();return p(),n<=0?(f=Date.now(),r()):(c>n&&(l||!i)?(f=Date.now(),r()):s&&(h=new Promise((g,b)=>{a=o?b:g,u=setTimeout(()=>{f=Date.now(),i=!0,g(r()),p()},Math.max(0,n-c))})),!l&&!u&&(u=setTimeout(()=>i=!0,n)),i=!1,h)}}function U(e){return e||t.getCurrentInstance()}function Z(e,s=200,l={}){return j(J(s,l),e)}function ee(e,s=200,l=!1,o=!0,f=!1){return j(K(s,l,o,f),e)}function z(e,s=!0,l){const o=U(l);o?t.onMounted(e,o):s?e():t.nextTick(e)}function E(e){var s;const l=_(e);return(s=l==null?void 0:l.$el)!=null?s:l}const P=H?window:void 0;function x(...e){let s,l,o,f;if(typeof e[0]=="string"||Array.isArray(e[0])?([l,o,f]=e,s=P):[s,l,o,f]=e,!s)return T;Array.isArray(l)||(l=[l]),Array.isArray(o)||(o=[o]);const u=[],i=()=>{u.forEach(d=>d()),u.length=0},a=(d,v,n,c)=>(d.addEventListener(v,n,c),()=>d.removeEventListener(v,n,c)),h=t.watch(()=>[E(s),_(f)],([d,v])=>{if(i(),!d)return;const n=X(v)?{...v}:v;u.push(...l.flatMap(c=>o.map(r=>a(d,c,r,n))))},{immediate:!0,flush:"post"}),p=()=>{h(),i()};return B(p),p}let V=!1;function te(e,s,l={}){const{window:o=P,ignore:f=[],capture:u=!0,detectIframe:i=!1}=l;if(!o)return;Q&&!V&&(V=!0,Array.from(o.document.body.children).forEach(n=>n.addEventListener("click",T)),o.document.documentElement.addEventListener("click",T));let a=!0;const h=n=>f.some(c=>{if(typeof c=="string")return Array.from(o.document.querySelectorAll(c)).some(r=>r===n.target||n.composedPath().includes(r));{const r=E(c);return r&&(n.target===r||n.composedPath().includes(r))}}),d=[x(o,"click",n=>{const c=E(e);if(!(!c||c===n.target||n.composedPath().includes(c))){if(n.detail===0&&(a=!h(n)),!a){a=!0;return}s(n)}},{passive:!0,capture:u}),x(o,"pointerdown",n=>{const c=E(e);a=!h(n)&&!!(c&&!n.composedPath().includes(c))},{passive:!0}),i&&x(o,"blur",n=>{setTimeout(()=>{var c;const r=E(e);((c=o.document.activeElement)==null?void 0:c.tagName)==="IFRAME"&&!(r!=null&&r.contains(o.document.activeElement))&&s(n)},0)})].filter(Boolean);return()=>d.forEach(n=>n())}function oe(){const e=t.ref(!1);return t.getCurrentInstance()&&t.onMounted(()=>{e.value=!0}),e}function ne(e){const s=oe();return t.computed(()=>(s.value,!!e()))}function N(e,s,l={}){const{window:o=P,...f}=l;let u;const i=ne(()=>o&&"ResizeObserver"in o),a=()=>{u&&(u.disconnect(),u=void 0)},h=t.computed(()=>Array.isArray(e)?e.map(v=>E(v)):[E(e)]),p=t.watch(h,v=>{if(a(),i.value&&o){u=new ResizeObserver(s);for(const n of v)n&&u.observe(n,f)}},{immediate:!0,flush:"post",deep:!0}),d=()=>{a(),p()};return B(d),{isSupported:i,stop:d}}function re(e,s={}){const{reset:l=!0,windowResize:o=!0,windowScroll:f=!0,immediate:u=!0}=s,i=t.ref(0),a=t.ref(0),h=t.ref(0),p=t.ref(0),d=t.ref(0),v=t.ref(0),n=t.ref(0),c=t.ref(0);function r(){const g=E(e);if(!g){l&&(i.value=0,a.value=0,h.value=0,p.value=0,d.value=0,v.value=0,n.value=0,c.value=0);return}const b=g.getBoundingClientRect();i.value=b.height,a.value=b.bottom,h.value=b.left,p.value=b.right,d.value=b.top,v.value=b.width,n.value=b.x,c.value=b.y}return N(e,r),t.watch(()=>E(e),g=>!g&&r()),f&&x("scroll",r,{capture:!0,passive:!0}),o&&x("resize",r,{passive:!0}),z(()=>{u&&r()}),{height:i,bottom:a,left:h,right:p,top:d,width:v,x:n,y:c,update:r}}const q=1;function le(e,s={}){const{throttle:l=0,idle:o=200,onStop:f=T,onScroll:u=T,offset:i={left:0,right:0,top:0,bottom:0},eventListenerOptions:a={capture:!1,passive:!0},behavior:h="auto",window:p=P}=s,d=t.ref(0),v=t.ref(0),n=t.computed({get(){return d.value},set(m){r(m,void 0)}}),c=t.computed({get(){return v.value},set(m){r(void 0,m)}});function r(m,C){var w,A,M;if(!p)return;const y=_(e);y&&((M=y instanceof Document?p.document.body:y)==null||M.scrollTo({top:(w=_(C))!=null?w:c.value,left:(A=_(m))!=null?A:n.value,behavior:_(h)}))}const g=t.ref(!1),b=t.reactive({left:!0,right:!1,top:!0,bottom:!1}),S=t.reactive({left:!1,right:!1,top:!1,bottom:!1}),L=m=>{g.value&&(g.value=!1,S.left=!1,S.right=!1,S.top=!1,S.bottom=!1,f(m))},F=Z(L,l+o),D=m=>{var C;if(!p)return;const w=m.document?m.document.documentElement:(C=m.documentElement)!=null?C:m,{display:A,flexDirection:M}=getComputedStyle(w),y=w.scrollLeft;S.left=y<d.value,S.right=y>d.value;const R=Math.abs(y)<=0+(i.left||0),$=Math.abs(y)+w.clientWidth>=w.scrollWidth-(i.right||0)-q;A==="flex"&&M==="row-reverse"?(b.left=$,b.right=R):(b.left=R,b.right=$),d.value=y;let O=w.scrollTop;m===p.document&&!O&&(O=p.document.body.scrollTop),S.top=O<v.value,S.bottom=O>v.value;const I=Math.abs(O)<=0+(i.top||0),W=Math.abs(O)+w.clientHeight>=w.scrollHeight-(i.bottom||0)-q;A==="flex"&&M==="column-reverse"?(b.top=W,b.bottom=I):(b.top=I,b.bottom=W),v.value=O},k=m=>{var C;if(!p)return;const w=(C=m.target.documentElement)!=null?C:m.target;D(w),g.value=!0,F(m),u(m)};return x(e,"scroll",l?ee(k,l,!0,!1):k,a),z(()=>{const m=_(e);m&&D(m)}),x(e,"scrollend",L,a),{x:n,y:c,isScrolling:g,arrivedState:b,directions:S,measure(){const m=_(e);p&&m&&D(m)}}}const se={class:"queso-collapsible__header__text"},ie={class:"queso-collapsible__header__icon"},ue=["aria-expanded"],ce=t.defineComponent({__name:"QuesoCollapsible",props:{expandOnMount:{type:Boolean}},emits:["open","close","toggle"],setup(e,{expose:s,emit:l}){t.useCssVars(r=>({"3263d5a2":d.value}));const o=e,f=l,u=t.ref(),i=t.ref(!1),a=t.ref(o.expandOnMount);t.onBeforeMount(()=>{a.value&&(i.value=!0)});const h=t.computed(()=>({"is-collapsible-open":i.value,"is-collapsible-close":!i.value})),{height:p}=re(u),d=t.computed(()=>a.value?"none":i.value?`${p.value}px`:"0px"),v=()=>{i.value=!0},n=()=>{a.value=!1,setTimeout(()=>{i.value=!1},1)},c=(r=!1)=>{r?v():n()};return t.watch(i,r=>{f(r?"open":"close"),f("toggle",r)}),s({isCollapsibleOpen:i,open:v,close:n,toggle:c}),(r,g)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["queso-collapsible",h.value])},[t.renderSlot(r.$slots,"beforeHeader"),t.createElementVNode("div",{class:"queso-collapsible__header",onClick:g[0]||(g[0]=b=>c(!i.value))},[t.renderSlot(r.$slots,"headerPrefix"),t.createElementVNode("div",se,[t.renderSlot(r.$slots,"headerText")]),t.renderSlot(r.$slots,"headerSuffix"),t.createElementVNode("div",ie,[t.renderSlot(r.$slots,"headerIcon",{},()=>[t.createTextVNode("↓")])])]),t.renderSlot(r.$slots,"afterHeader"),t.renderSlot(r.$slots,"beforeContent"),t.createElementVNode("div",{class:"queso-collapsible__content","aria-expanded":i.value},[t.createElementVNode("div",{ref_key:"collapsibleContent",ref:u,class:"queso-collapsible__content__inner"},[t.renderSlot(r.$slots,"content")],512)],8,ue),t.renderSlot(r.$slots,"afterContent")],2))}});exports._sfc_main=ce;exports.onClickOutside=te;exports.useResizeObserver=N;exports.useScroll=le;
