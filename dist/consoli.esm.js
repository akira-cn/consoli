var y=`.consoli pre {
  margin: 0;
  padding: 0;
  padding-left: 1rem;
  overflow-x: scroll;
}

.consoli__warn {
  background-color: #fefbe7;
}

.consoli__error {
  background-color: #fcf1f0;
}

.consoli__warn::before {
  content: "!";
  background: #ecbe41;
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  width: 1rem;
  height: 1rem;
  display: inline-block;
  text-align: center;
  color: white;
  position: relative;
  left: -0.5rem;
  transform: scale(0.75);
}

.consoli__error::before {
  content: "x";
  background: #bb2f22;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  display: inline-block;
  text-align: center;
  color: white;
  position: relative;
  left: -0.5rem;
  transform: scale(0.75);
}

table.consoli__table {
  width: 100%;
  border: solid 1px #dfe1e3;
  border-spacing: 0;
  margin: 1.2rem 0;
  display: table!important;
}

.consoli__table tr th {
  font-weight: normal;
  text-align: left;
  background-color: #f1f3f4;
  user-select: none;
}

.consoli__table tr th:hover {
  font-weight: normal;
  text-align: left;
  background-color: #d1d3d4;
}

.consoli__table tr td,
.consoli__table tr th {
  padding: 2px 6px;
}

.consoli__table th {
  border: solid 1px #dfe1e3;
}

.consoli__table td:not(:last-child) {
  border-right: solid 1px #dfe1e3;
}

.consoli__table tr:nth-child(2n) {
  background-color: #f1f3f4;
}

.consoli .null::after {
  content: 'null';
  color: #999;
}

.consoli .undefined::after {
  content: 'undefined';
  color: #999;
}

.consoli .number,
.consoli .boolean {
  color: #16229f;
}

.consoli .string,
.consoli .regexp,
.consoli .symbol {
  color: #bb2f22;
}

.consoli .bigint,
.consoli .array {
  color: #396b2f;
}

.consoli__table td:first-child {
  color: inherit;
}

.consoli__dir {
  list-style-type: none;
  padding: 0;
}

.consoli__dir li {
  margin-left: 1rem;
  font-size: 12px;
}

.consoli__dir em {
  font-style: normal;
  color: #7d237c;
  margin-right: .5rem;
}

.consoli__dir em::after {
  content: ':';
}

.consoli__dir > div:first-child::before,
.consoli__group > div:first-child::before {
  content: ' ';
  display: inline-block;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 8.67px;
  border-color: transparent;
  border-left-color: currentColor;
  transform: translateX(6px);
}

.consoli__dir {
  margin: 0;
}

.consoli__dir > div ~ li {
  display: none;
}

.consoli__dir > div.expand::before {
  transform: rotate(90deg) translateX(6px);
}

.consoli__dir > div.expand ~ li,
.consoli__group > div.expand ~ * {
  display: block;
}

.consoli__group :not(:first-child) {
  margin-left: 1rem;
}

.consoli__group > div {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.consoli__group > div ~ * {
  display: none;
}`;var L=document.head||document.getElementsByTagName("head")[0],x=document.createElement("style");x.styleSheet?x.styleSheet.cssText=y:x.appendChild(document.createTextNode(y));L.appendChild(x);typeof BigInt=="function"&&!BigInt.prototype.toJSON&&(BigInt.prototype.toJSON=function(){return`${this}n`});function C(o,t,r,p){o[t]=o[t]||[],o[t][p]=r}function T(o){let t={};if(o){let r=0,p=Object.keys(o).every(f=>f===Number(f).toString());for(let[f,i]of Object.entries(o))if(typeof i!="function"){if(C(t,"(index)",p?Number(f):f,r),i==null||typeof i!="object"||i instanceof RegExp)C(t,"Value",i,r);else for(let[s,d]of Object.entries(i))C(t,s,d,r);r++}return t}return o}function M(o,t){let r=o["(index)"].length;if(r){let p=document.createElement("table"),f=document.createElement("thead");p.appendChild(f),p.className="consoli__table";let i=Object.keys(o);t&&(i=i.filter(n=>n==="(index)"||n==="Value"||t.includes(n)));let s=document.createElement("tr");s.innerHTML=i.map((n,e)=>`<th data-index="${e}">${n}</th>`).join(""),f.appendChild(s);let d=document.createElement("tbody");p.appendChild(d);for(let n=0;n<r;n++){let e=document.createElement("tr");d.appendChild(e);for(let a=0;a<i.length;a++){let l=i[a],c=document.createElement("td");if(n in o[l]){let u=o[l][n];typeof u=="string"&&l!=="(index)"&&(u=`'${u}'`),Array.isArray(u)?u.length>3&&(c.textContent=`${u.slice(0,3)}... (total: ${u.length})`):typeof u=="bigint"?c.textContent=`${u}n`:typeof u=="symbol"?c.textContent=u.toString():c.textContent=u,c.className=w(u).toLowerCase()}e.appendChild(c)}}return p}}function E(o){if(Object.prototype.toString.call(o)==="[object Object]")try{return JSON.stringify(o)}catch{return o.toString()}return o}function $(o){let t=E(o[0]),r=[],p=/%[cdfios]/,f=0;for(let i=1;i<o.length;i++){let s=E(o[i]);if(p.test(t))t=t.replace(p,d=>{if(d==="%c"){let n=`${f?"</span>":""}<span style="${s}">`;return f++,n}if(d==="%d"||d==="%i")return parseInt(s,10);if(d==="%f")return parseFloat(s);if(d==="%s")return s.toString();if(d==="%o")try{return JSON.stringify(s)}catch{return s.toString()}});else{r.push(...o.slice(i).map(E));break}}return r=[t,...r],f&&r.push("</span>"),r}function w(o){return Object.prototype.toString.call(o).slice(8,-1)}function k(o,t=0){let r=document.createElement("ul");r.className="consoli__dir";let p=w(o),f=document.createElement("div");f.textContent=o instanceof HTMLElement?o.tagName.toLowerCase():p,f.addEventListener("click",()=>{f.classList.toggle("expand")}),r.appendChild(f);let i=[];for(let s in o)typeof o[s]!="function"&&i.push([s,o[s]]);Array.isArray(o)&&i.push(["length",o.length]),i.sort((s,d)=>s[0]>d[0]?1:s[0]<d[0]?-1:0);for(let s=0;s<i.length;s++){let[d,n]=i[s];typeof n=="string"&&(n=`"${n}"`);let e=document.createElement("li"),a=document.createElement("em");a.textContent=d;let l=document.createElement("span");if(l.className=w(n).toLowerCase(),Array.isArray(n)&&n.length<=0?l.textContent="Array(0)":n instanceof NodeList?l.textContent=`NodeList(${n.length})`:n instanceof HTMLCollection?l.textContent=`HTMLCollection(${n.length})`:n instanceof DOMTokenList?l.textContent=`DOMTokenList(${n.length})`:n instanceof HTMLElement?l.textContent=`${n.tagName.toLowerCase()}${n.id?`#${n.id}`:""}`:l.textContent=n,t<2&&n&&typeof n=="object"&&!(n instanceof Window)){let c=k(n,t+1);c.children[0].innerHTML="",c.children[0].appendChild(a),c.children[0].appendChild(l),e.appendChild(c)}else e.appendChild(a),e.appendChild(l);r.appendChild(e)}return r}var O={log:console.log,info:console.info,warn:console.warn,error:console.error,dir:console.dir,table:console.table,group:console.group,groupCollapsed:console.groupCollapsed,groupEnd:console.groupEnd,count:console.count,countReset:console.countReset,time:console.time,timeEnd:console.timeEnd,assert:console.assert,clear:console.clear},j=(o,t=O)=>{let r=document.createElement("div");r.className="consoli",o.append(r);let p=(e,a="info")=>{let l=document.createElement("pre");l.className=`consoli__${a}`,l.innerHTML=e,r.appendChild(l)},f=e=>(...a)=>{t&&t[e](...a),a=$(a);let l=a.map(c=>c==null?String(c):c.toString?c.toString():Object.prototype.toString.call(c)).join(" ");p(l,e)},i=[],s=(e,a=!1)=>{let l=document.createElement("div");l.className="consoli__group",r.appendChild(l);let c=document.createElement("div");c.textContent=e,a||(c.className="expand"),l.appendChild(c),c.addEventListener("click",()=>{c.classList.toggle("expand")}),i.push(r),r=l},d={},n={};return{log:f("log"),info:f("info"),warn:f("warn"),error:f("error"),assert:(e,...a)=>{if(t&&t.assert(e,...a),!e){let l=$(a).join(" ");p(`Assertion failed: ${l}`,"error")}},clear:()=>{t&&t.clear(),i.length>0&&(r=i[0],i.length=0),r.innerHTML=""},group:e=>{t&&t.group(e),s(e)},groupCollapsed:e=>{t&&t.groupCollapsed(e),s(e,!0)},groupEnd:()=>{t&&t.groupEnd(),i.length>0&&(r=i.pop())},count:(e="default")=>{t&&t.count(e),e=e.toString(),d[e]=d[e]||0,d[e]++,p(`${e}: ${d[e]}`)},time:(e="default")=>{t&&t.time(e),e=e.toString(),e in n?p(`Timer '${e}' already exists`,"warn"):n[e]=performance.now()},countReset:(e="default")=>{t&&t.countReset(e),e=e.toString(),e in d?delete d[e]:p(`Count for '${e}' does not exist`,"warn")},timeEnd:(e="default")=>{t&&t.timeEnd(e),e=e.toString(),e in n?(p(`${e}: ${performance.now()-n[e]} ms`),delete n[e]):p(`Timer '${e}' does not exist`,"warn")},dir:e=>{t&&t.dir(e);let a=k(e);r.appendChild(a)},table:(e,a)=>{t&&t.table(e,a);let l=T(e),c=M(l,a);c.addEventListener("click",u=>{let m=u.target;if(m.tagName==="TH"){let N=Number(m.dataset.index),v=[...c.querySelectorAll("tr")].slice(1);v.sort((g,_)=>{g=g.children[N],_=_.children[N];let b=g.textContent,h=_.textContent;return g.className==="number"&&(b=Number(b)),_.className==="number"&&(h=Number(h)),g.className==="bigint"&&(b=BigInt(b.slice(0,-1))),_.className==="bigint"&&(h=BigInt(h.slice(0,-1))),b>h?m.dataset.sort==="asc"?-1:1:b<h?m.dataset.sort==="asc"?1:-1:0}),v.forEach(g=>{c.appendChild(g)}),m.dataset.sort=m.dataset.sort==="asc"?"desc":"asc"}}),r.appendChild(c)}}};export{j as consoli};
