var Z=Object.defineProperty;var tt=(e,t,n)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var j=(e,t,n)=>(tt(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const u of i)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const u={};return i.integrity&&(u.integrity=i.integrity),i.referrerPolicy&&(u.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?u.credentials="include":i.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(i){if(i.ep)return;i.ep=!0;const u=n(i);fetch(i.href,u)}})();function l(){}function V(e){return e()}function K(){return Object.create(null)}function H(e){e.forEach(V)}function W(e){return typeof e=="function"}function v(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function et(e){return Object.keys(e).length===0}function y(e,t){e.appendChild(t)}function w(e,t,n){e.insertBefore(t,n||null)}function p(e){e.parentNode&&e.parentNode.removeChild(e)}function a(e){return document.createElement(e)}function J(e){return document.createTextNode(e)}function B(){return J(" ")}function nt(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function A(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function rt(e){return Array.from(e.childNodes)}function it(e,t){t=""+t,e.data!==t&&(e.data=t)}let z;function C(e){z=e}const L=[],Q=[];let P=[];const R=[],st=Promise.resolve();let T=!1;function ut(){T||(T=!0,st.then(X))}function U(e){P.push(e)}const I=new Set;let E=0;function X(){if(E!==0)return;const e=z;do{try{for(;E<L.length;){const t=L[E];E++,C(t),ot(t.$$)}}catch(t){throw L.length=0,E=0,t}for(C(null),L.length=0,E=0;Q.length;)Q.pop()();for(let t=0;t<P.length;t+=1){const n=P[t];I.has(n)||(I.add(n),n())}P.length=0}while(L.length);for(;R.length;)R.pop()();T=!1,I.clear(),C(e)}function ot(e){if(e.fragment!==null){e.update(),H(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(U)}}function ct(e){const t=[],n=[];P.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),P=t}const q=new Set;let S;function ft(){S={r:0,c:[],p:S}}function lt(){S.r||H(S.c),S=S.p}function d(e,t){e&&e.i&&(q.delete(e),e.i(t))}function m(e,t,n,r){if(e&&e.o){if(q.has(e))return;q.add(e),S.c.push(()=>{q.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function b(e){e&&e.c()}function _(e,t,n){const{fragment:r,after_update:i}=e.$$;r&&r.m(t,n),U(()=>{const u=e.$$.on_mount.map(V).filter(W);e.$$.on_destroy?e.$$.on_destroy.push(...u):H(u),e.$$.on_mount=[]}),i.forEach(U)}function h(e,t){const n=e.$$;n.fragment!==null&&(ct(n.after_update),H(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function at(e,t){e.$$.dirty[0]===-1&&(L.push(e),ut(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function k(e,t,n,r,i,u,c,o=[-1]){const f=z;C(e);const s=e.$$={fragment:null,ctx:[],props:u,update:l,not_equal:i,bound:K(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:K(),dirty:o,skip_bound:!1,root:t.target||f.$$.root};c&&c(s.root);let g=!1;if(s.ctx=n?n(e,t.props||{},($,F,...G)=>{const D=G.length?G[0]:F;return s.ctx&&i(s.ctx[$],s.ctx[$]=D)&&(!s.skip_bound&&s.bound[$]&&s.bound[$](D),g&&at(e,$)),F}):[],s.update(),g=!0,H(s.before_update),s.fragment=r?r(s.ctx):!1,t.target){if(t.hydrate){const $=rt(t.target);s.fragment&&s.fragment.l($),$.forEach(p)}else s.fragment&&s.fragment.c();t.intro&&d(e.$$.fragment),_(e,t.target,t.anchor),X()}C(f)}class N{constructor(){j(this,"$$");j(this,"$$set")}$destroy(){h(this,1),this.$destroy=l}$on(t,n){if(!W(n))return l;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(t){this.$$set&&!et(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const dt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(dt);const O=[];function mt(e,t=l){let n;const r=new Set;function i(o){if(v(e,o)&&(e=o,n)){const f=!O.length;for(const s of r)s[1](),O.push(s,e);if(f){for(let s=0;s<O.length;s+=2)O[s][0](O[s+1]);O.length=0}}}function u(o){i(o(e))}function c(o,f=l){const s=[o,f];return r.add(s),r.size===1&&(n=t(i,u)||l),o(e),()=>{r.delete(s),r.size===0&&n&&(n(),n=null)}}return{set:i,update:u,subscribe:c}}const x={home:"/",addStudent:"/add-student",getStudent:"/get-student"},Y=mt(x.home);function _t(e){let t,n,r,i,u,c;return{c(){t=a("main"),n=a("button"),r=a("h1"),i=J(e[0]),A(r,"class","svelte-14u6nd5"),A(n,"class","svelte-14u6nd5"),A(t,"class","svelte-14u6nd5")},m(o,f){w(o,t,f),y(t,n),y(n,r),y(r,i),u||(c=nt(n,"click",e[1]),u=!0)},p(o,[f]){f&1&&it(i,o[0])},i:l,o:l,d(o){o&&p(t),u=!1,c()}}}function ht(e,t,n){let{title:r}=t,{path:i="NONE"}=t;function u(){i!="NONE"?Y.update(c=>(console.log(`Old Path: ${c}`),i)):console.log("Did nothing you fool!")}return e.$$set=c=>{"title"in c&&n(0,r=c.title),"path"in c&&n(2,i=c.path)},[r,u,i]}class M extends N{constructor(t){super(),k(this,t,ht,_t,v,{title:0,path:2})}}function pt(e){let t,n,r,i,u,c,o,f;return r=new M({props:{title:"Home",path:x.home}}),u=new M({props:{title:"Add Student",path:x.addStudent}}),o=new M({props:{title:"Get Students",path:x.getStudent}}),{c(){t=a("main"),n=a("div"),b(r.$$.fragment),i=B(),b(u.$$.fragment),c=B(),b(o.$$.fragment),A(n,"class","nav-items svelte-19q93r5"),A(t,"class","svelte-19q93r5")},m(s,g){w(s,t,g),y(t,n),_(r,n,null),y(n,i),_(u,n,null),y(n,c),_(o,n,null),f=!0},p:l,i(s){f||(d(r.$$.fragment,s),d(u.$$.fragment,s),d(o.$$.fragment,s),f=!0)},o(s){m(r.$$.fragment,s),m(u.$$.fragment,s),m(o.$$.fragment,s),f=!1},d(s){s&&p(t),h(r),h(u),h(o)}}}class gt extends N{constructor(t){super(),k(this,t,null,pt,v,{})}}function $t(e){let t;return{c(){t=a("h1"),t.textContent="Add User Here"},m(n,r){w(n,t,r)},p:l,i:l,o:l,d(n){n&&p(t)}}}class yt extends N{constructor(t){super(),k(this,t,null,$t,v,{})}}function bt(e){let t;return{c(){t=a("main"),t.innerHTML="<h1>Query Students</h1>"},m(n,r){w(n,t,r)},p:l,i:l,o:l,d(n){n&&p(t)}}}class xt extends N{constructor(t){super(),k(this,t,null,bt,v,{})}}function vt(e){let t;return{c(){t=a("main"),t.innerHTML="<h1>Home</h1>"},m(n,r){w(n,t,r)},p:l,i:l,o:l,d(n){n&&p(t)}}}class wt extends N{constructor(t){super(),k(this,t,null,vt,v,{})}}function St(e){let t;return{c(){t=a("h1"),t.textContent="Page Not Found 🤕"},m(n,r){w(n,t,r)},i:l,o:l,d(n){n&&p(t)}}}function kt(e){let t,n;return t=new xt({}),{c(){b(t.$$.fragment)},m(r,i){_(t,r,i),n=!0},i(r){n||(d(t.$$.fragment,r),n=!0)},o(r){m(t.$$.fragment,r),n=!1},d(r){h(t,r)}}}function Nt(e){let t,n;return t=new yt({}),{c(){b(t.$$.fragment)},m(r,i){_(t,r,i),n=!0},i(r){n||(d(t.$$.fragment,r),n=!0)},o(r){m(t.$$.fragment,r),n=!1},d(r){h(t,r)}}}function Et(e){let t,n;return t=new wt({}),{c(){b(t.$$.fragment)},m(r,i){_(t,r,i),n=!0},i(r){n||(d(t.$$.fragment,r),n=!0)},o(r){m(t.$$.fragment,r),n=!1},d(r){h(t,r)}}}function Ot(e){let t,n,r,i;const u=[Et,Nt,kt,St],c=[];function o(f,s){return f[0]==x.home?0:f[0]==x.addStudent?1:f[0]==x.getStudent?2:3}return n=o(e),r=c[n]=u[n](e),{c(){t=a("main"),r.c()},m(f,s){w(f,t,s),c[n].m(t,null),i=!0},p(f,[s]){let g=n;n=o(f),n!==g&&(ft(),m(c[g],1,1,()=>{c[g]=null}),lt(),r=c[n],r||(r=c[n]=u[n](f),r.c()),d(r,1),r.m(t,null))},i(f){i||(d(r),i=!0)},o(f){m(r),i=!1},d(f){f&&p(t),c[n].d()}}}function Lt(e,t,n){let r;return Y.subscribe(i=>{console.log(`Navigated to: ${i}`),n(0,r=i)}),n(0,r=x.home),[r]}class At extends N{constructor(t){super(),k(this,t,Lt,Ot,v,{})}}function Pt(e){let t,n,r,i,u,c;return n=new gt({}),u=new At({}),{c(){t=a("main"),b(n.$$.fragment),r=B(),i=a("div"),b(u.$$.fragment),A(t,"class","svelte-u9kvie")},m(o,f){w(o,t,f),_(n,t,null),y(t,r),y(t,i),_(u,i,null),c=!0},p:l,i(o){c||(d(n.$$.fragment,o),d(u.$$.fragment,o),c=!0)},o(o){m(n.$$.fragment,o),m(u.$$.fragment,o),c=!1},d(o){o&&p(t),h(n),h(u)}}}class Ct extends N{constructor(t){super(),k(this,t,null,Pt,v,{})}}new Ct({target:document.getElementById("app")});