function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e,n,r){if(t){const o=a(t,e,n,r);return t[0](o)}}function a(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function f(t,e,n,r,o,s,c){const i=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(i){const o=a(e,n,r,c);t.p(o,i)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function $(){return m("")}function _(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t){return Array.from(t.childNodes)}function b(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):h(e)}function E(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return m(e)}function S(t){return E(t," ")}function x(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function P(t,e){t.value=null==e?"":e}function w(t,e=document.body){return Array.from(e.querySelectorAll(t))}let N;function j(t){N=t}function C(){if(!N)throw new Error("Function called outside component initialization");return N}function R(t){C().$$.on_mount.push(t)}function A(){const t=C();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach((e=>{e.call(t,o)}))}}}const I=[],O=[],L=[],T=[],k=Promise.resolve();let q=!1;function U(t){L.push(t)}let J=!1;const B=new Set;function K(){if(!J){J=!0;do{for(let t=0;t<I.length;t+=1){const e=I[t];j(e),M(e.$$)}for(j(null),I.length=0;O.length;)O.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];B.has(e)||(B.add(e),e())}L.length=0}while(I.length);for(;T.length;)T.pop()();q=!1,J=!1,B.clear()}}function M(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}const D=new Set;let V;function z(){V={r:0,c:[],p:V}}function F(){V.r||o(V.c),V=V.p}function G(t,e){t&&t.i&&(D.delete(t),t.i(e))}function H(t,e,n,r){if(t&&t.o){if(D.has(t))return;D.add(t),V.c.push((()=>{D.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function Y(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],i=e[s];if(i){for(const t in c)t in i||(r[t]=1);for(const t in i)o[t]||(n[t]=i[t],o[t]=1);t[s]=i}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function W(t){return"object"==typeof t&&null!==t?t:{}}function X(t){t&&t.c()}function Q(t,e){t&&t.l(e)}function Z(t,e,r){const{fragment:c,on_mount:i,on_destroy:a,after_update:f}=t.$$;c&&c.m(e,r),U((()=>{const e=i.map(n).filter(s);a?a.push(...e):o(e),t.$$.on_mount=[]})),f.forEach(U)}function tt(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function et(t,e){-1===t.$$.dirty[0]&&(I.push(t),q||(q=!0,k.then(K)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function nt(e,n,s,c,i,a,f=[-1]){const l=N;j(e);const u=n.props||{},d=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:r(),dirty:f,skip_bound:!1};let h=!1;if(d.ctx=s?s(e,u,((t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=o)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](o),h&&et(e,t)),n})):[],d.update(),h=!0,o(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=v(n.target);d.fragment&&d.fragment.l(t),t.forEach(p)}else d.fragment&&d.fragment.c();n.intro&&G(e.$$.fragment),Z(e,n.target,n.anchor),K()}j(l)}class rt{$destroy(){tt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ot=[];function st(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!ot.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),ot.push(n,e)}if(t){for(let t=0;t<ot.length;t+=2)ot[t][0](ot[t+1]);ot.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,i=t){const a=[c,i];return o.push(a),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(a);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const ct={};function it(t){let e,n;const r=t[2].default,o=i(r,t,t[1],null);return{c(){e=h("main"),o&&o.c(),this.h()},l(t){e=b(t,"MAIN",{class:!0});var n=v(e);o&&o.l(n),n.forEach(p),this.h()},h(){y(e,"class","container svelte-10ct3o4")},m(t,r){u(t,e,r),o&&o.m(e,null),n=!0},p(t,[e]){o&&o.p&&2&e&&f(o,r,t,t[1],e,null,null)},i(t){n||(G(o,t),n=!0)},o(t){H(o,t),n=!1},d(t){t&&p(e),o&&o.d(t)}}}function at(t,e,n){let{$$slots:r={},$$scope:o}=e,{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment),"$$scope"in t&&n(1,o=t.$$scope)},[s,o,r]}class ft extends rt{constructor(t){super(),nt(this,t,at,it,c,{segment:0})}}function lt(t){let e,n,r=t[1].stack+"";return{c(){e=h("pre"),n=m(r)},l(t){e=b(t,"PRE",{});var o=v(e);n=E(o,r),o.forEach(p)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&x(n,r)},d(t){t&&p(e)}}}function ut(e){let n,r,o,s,c,i,a,f,d,_=e[1].message+"";document.title=n=e[0];let P=e[2]&&e[1].stack&&lt(e);return{c(){r=g(),o=h("h1"),s=m(e[0]),c=g(),i=h("p"),a=m(_),f=g(),P&&P.c(),d=$(),this.h()},l(t){w('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(p),r=S(t),o=b(t,"H1",{class:!0});var n=v(o);s=E(n,e[0]),n.forEach(p),c=S(t),i=b(t,"P",{class:!0});var l=v(i);a=E(l,_),l.forEach(p),f=S(t),P&&P.l(t),d=$(),this.h()},h(){y(o,"class","svelte-8od9u6"),y(i,"class","svelte-8od9u6")},m(t,e){u(t,r,e),u(t,o,e),l(o,s),u(t,c,e),u(t,i,e),l(i,a),u(t,f,e),P&&P.m(t,e),u(t,d,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&x(s,t[0]),2&e&&_!==(_=t[1].message+"")&&x(a,_),t[2]&&t[1].stack?P?P.p(t,e):(P=lt(t),P.c(),P.m(d.parentNode,d)):P&&(P.d(1),P=null)},i:t,o:t,d(t){t&&p(r),t&&p(o),t&&p(c),t&&p(i),t&&p(f),P&&P.d(t),t&&p(d)}}}function pt(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}class dt extends rt{constructor(t){super(),nt(this,t,pt,ut,c,{status:0,error:1})}}function ht(t){let n,r,o;const s=[t[4].props];var c=t[4].component;function i(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(i())),{c(){n&&X(n.$$.fragment),r=$()},l(t){n&&Q(n.$$.fragment,t),r=$()},m(t,e){n&&Z(n,t,e),u(t,r,e),o=!0},p(t,e){const o=16&e?Y(s,[W(t[4].props)]):{};if(c!==(c=t[4].component)){if(n){z();const t=n;H(t.$$.fragment,1,0,(()=>{tt(t,1)})),F()}c?(n=new c(i()),X(n.$$.fragment),G(n.$$.fragment,1),Z(n,r.parentNode,r)):n=null}else c&&n.$set(o)},i(t){o||(n&&G(n.$$.fragment,t),o=!0)},o(t){n&&H(n.$$.fragment,t),o=!1},d(t){t&&p(r),n&&tt(n,t)}}}function mt(t){let e,n;return e=new dt({props:{error:t[0],status:t[1]}}),{c(){X(e.$$.fragment)},l(t){Q(e.$$.fragment,t)},m(t,r){Z(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(G(e.$$.fragment,t),n=!0)},o(t){H(e.$$.fragment,t),n=!1},d(t){tt(e,t)}}}function gt(t){let e,n,r,o;const s=[mt,ht],c=[];function i(t,e){return t[0]?0:1}return e=i(t),n=c[e]=s[e](t),{c(){n.c(),r=$()},l(t){n.l(t),r=$()},m(t,n){c[e].m(t,n),u(t,r,n),o=!0},p(t,o){let a=e;e=i(t),e===a?c[e].p(t,o):(z(),H(c[a],1,1,(()=>{c[a]=null})),F(),n=c[e],n?n.p(t,o):(n=c[e]=s[e](t),n.c()),G(n,1),n.m(r.parentNode,r))},i(t){o||(G(n),o=!0)},o(t){H(n),o=!1},d(t){c[e].d(t),t&&p(r)}}}function $t(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[gt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new ft({props:s}),{c(){X(n.$$.fragment)},l(t){Q(n.$$.fragment,t)},m(t,e){Z(n,t,e),r=!0},p(t,[e]){const r=12&e?Y(o,[4&e&&{segment:t[2][0]},8&e&&W(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(G(n.$$.fragment,t),r=!0)},o(t){H(n.$$.fragment,t),r=!1},d(t){tt(n,t)}}}function _t(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:c}=e,{level0:i}=e,{level1:a=null}=e,{notify:f}=e;var l,u,p;return l=f,C().$$.after_update.push(l),u=ct,p=r,C().$$.context.set(u,p),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,a=t.level1),"notify"in t&&n(6,f=t.notify)},[o,s,c,i,a,r,f]}class yt extends rt{constructor(t){super(),nt(this,t,_t,$t,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const vt=[/^\/blog\.json$/,/^\/blog\/([^/]+?)\.json$/],bt=[{js:()=>Promise.all([import("./index.9968299f.js"),__inject_styles(["client-c5ff02a0.css","index-61cefff3.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./signup.46504e0c.js"),__inject_styles(["client-c5ff02a0.css","signup-61cefff3.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./about.47d2add5.js"),__inject_styles(["client-c5ff02a0.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./close.f4376e55.js"),__inject_styles(["client-c5ff02a0.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.f934cbe5.js"),__inject_styles(["client-c5ff02a0.css","index-cbc51ef2.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./index.06a5f168.js"),__inject_styles(["client-c5ff02a0.css","index-7ed37c94.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[slug].e74887fa.js"),__inject_styles(["client-c5ff02a0.css","[slug]-5bc8f95f.css"])]).then((function(t){return t[0]}))}],Et=(St=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/signup\/?$/,parts:[{i:1}]},{pattern:/^\/about\/?$/,parts:[{i:2}]},{pattern:/^\/close\/?$/,parts:[{i:3}]},{pattern:/^\/users\/?$/,parts:[{i:4}]},{pattern:/^\/blog\/?$/,parts:[{i:5}]},{pattern:/^\/blog\/([^/]+?)\/?$/,parts:[null,{i:6,params:t=>({slug:St(t[1])})}]}]);var St;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function xt(t,e,n,r){return new(n||(n=Promise))((function(o,s){function c(t){try{a(r.next(t))}catch(t){s(t)}}function i(t){try{a(r.throw(t))}catch(t){s(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(c,i)}a((r=r.apply(t,e||[])).next())}))}function Pt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let wt,Nt=1;const jt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},Ct={};let Rt,At;function It(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach((t=>{const[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r})),e}function Ot(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Rt))return null;let e=t.pathname.slice(Rt.length);if(""===e&&(e="/"),!vt.some((t=>t.test(e))))for(let n=0;n<Et.length;n+=1){const r=Et[n],o=r.pattern.exec(e);if(o){const n=It(t.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},i={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:o,page:i}}}}function Lt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=Pt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Ot(o);if(s){qt(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),jt.pushState({id:wt},"",o.href)}}function Tt(){return{x:pageXOffset,y:pageYOffset}}function kt(t){if(Ct[wt]=Tt(),t.state){const e=Ot(new URL(location.href));e?qt(e,t.state.id):location.href=location.href}else Nt=Nt+1,function(t){wt=t}(Nt),jt.replaceState({id:wt},"",location.href)}function qt(t,e,n,r){return xt(this,void 0,void 0,(function*(){const o=!!e;if(o)wt=e;else{const t=Tt();Ct[wt]=t,wt=e=++Nt,Ct[wt]=n?t:{x:0,y:0}}if(yield At(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=Ct[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),Ct[wt]=n,o||t?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Ut(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Jt,Bt=null;function Kt(t){const e=Pt(t.target);e&&"prefetch"===e.rel&&function(t){const e=Ot(new URL(t,Ut(document)));if(e)Bt&&t===Bt.href||(Bt={href:t,promise:oe(e)}),Bt.promise}(e.href)}function Mt(t){clearTimeout(Jt),Jt=setTimeout((()=>{Kt(t)}),20)}function Dt(t,e={noscroll:!1,replaceState:!1}){const n=Ot(new URL(t,Ut(document)));return n?(jt[e.replaceState?"replaceState":"pushState"]({id:wt},"",t),qt(n,null,e.noscroll)):(location.href=t,new Promise((()=>{})))}const Vt="undefined"!=typeof __SAPPER__&&__SAPPER__;let zt,Ft,Gt,Ht=!1,Yt=[],Wt="{}";const Xt={page:function(t){const e=st(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:st(null),session:st(Vt&&Vt.session)};let Qt,Zt,te;function ee(t,e){const{error:n}=t;return Object.assign({error:n},e)}function ne(t){return xt(this,void 0,void 0,(function*(){zt&&Xt.preloading.set(!0);const e=function(t){return Bt&&Bt.href===t.href?Bt.promise:oe(t)}(t),n=Ft={},r=yield e,{redirect:o}=r;if(n===Ft)if(o)yield Dt(o.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield re(n,e,ee(e,t.page))}}))}function re(t,e,n){return xt(this,void 0,void 0,(function*(){Xt.page.set(n),Xt.preloading.set(!1),zt?zt.$set(e):(e.stores={page:{subscribe:Xt.page.subscribe},preloading:{subscribe:Xt.preloading.subscribe},session:Xt.session},e.level0={props:yield Gt},e.notify=Xt.page.notify,zt=new yt({target:te,props:e,hydrate:!0})),Yt=t,Wt=JSON.stringify(n.query),Ht=!0,Zt=!1}))}function oe(t){return xt(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!Gt){const t=()=>({});Gt=Vt.preloaded[0]||t.call(c,{host:n.host,path:n.path,query:n.query,params:{}},Qt)}let i,a=1;try{const o=JSON.stringify(n.query),f=e.pattern.exec(n.path);let l=!1;i=yield Promise.all(e.parts.map(((e,i)=>xt(this,void 0,void 0,(function*(){const u=r[i];if(function(t,e,n,r){if(r!==Wt)return!0;const o=Yt[t];return!!o&&(e!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(i,u,f,o)&&(l=!0),s.segments[a]=r[i+1],!e)return{segment:u};const p=a++;if(!Zt&&!l&&Yt[i]&&Yt[i].part===e.i)return Yt[i];l=!1;const{default:d,preload:h}=yield bt[e.i].js();let m;return m=Ht||!Vt.preloaded[i+1]?h?yield h.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Qt):{}:Vt.preloaded[i+1],s[`level${p}`]={component:d,props:m,segment:u,match:f,part:e.i}})))))}catch(t){s.error=t,s.status=500,i=[]}return{redirect:o,props:s,branch:i}}))}var se,ce,ie;Xt.session.subscribe((t=>xt(void 0,void 0,void 0,(function*(){if(Qt=t,!Ht)return;Zt=!0;const e=Ot(new URL(location.href)),n=Ft={},{redirect:r,props:o,branch:s}=yield oe(e);n===Ft&&(r?yield Dt(r.location,{replaceState:!0}):yield re(s,o,ee(o,e.page)))})))),se={target:document.querySelector("#sapper")},ce=se.target,te=ce,ie=Vt.baseUrl,Rt=ie,At=ne,"scrollRestoration"in jt&&(jt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{jt.scrollRestoration="auto"})),addEventListener("load",(()=>{jt.scrollRestoration="manual"})),addEventListener("click",Lt),addEventListener("popstate",kt),addEventListener("touchstart",Kt),addEventListener("mousemove",Mt),Vt.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:o,status:s,error:c}=Vt;Gt||(Gt=o&&o[0]);const i={error:c,status:s,session:r,level0:{props:Gt},level1:{props:{status:s,error:c},component:dt},segments:o},a=It(n);re([],i,{host:t,path:e,query:a,params:{},error:c})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;jt.replaceState({id:Nt},"",e);const n=Ot(new URL(location.href));if(n)return qt(n,Nt,!0,t)}));export{$ as A,F as B,z as C,w as D,x as E,R as F,d as G,rt as S,g as a,Q as b,X as c,S as d,h as e,b as f,v as g,E as h,nt as i,p as j,y as k,u as l,Z as m,l as n,P as o,_ as p,G as q,H as r,c as s,m as t,tt as u,o as v,A as w,t as x,i as y,f as z};

import __inject_styles from './inject_styles.5607aec6.js';