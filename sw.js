if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let o={};const t=e=>s(e,n),d={module:{uri:n},exports:o,require:t};i[n]=Promise.all(c.map((e=>d[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"5b45cdf575772676e62f0f6be500aed8"},{url:"manifest.json",revision:"6560cb248389772c3ad85d80ec31c3fd"},{url:"output.css",revision:"ca46b68b37cd0ae07ba673667c9ca8cc"},{url:"package-lock.json",revision:"4a60f59c058b48d188d615eb9d6eaae5"},{url:"package.json",revision:"ec21df87f72121ed5b454e07f3972f83"},{url:"README.md",revision:"0e788218c543c4bcd1bd9d8e98659330"},{url:"styles.css",revision:"44d00c69fd8ee74b1259f40a785b299f"},{url:"tailwind.config.js",revision:"ed6f49eacb62da7010fea445331a0125"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
