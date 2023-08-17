var C=`.consoli pre {
  margin: 0;
  padding: 0;
  padding-left: 1rem;
  line-height: 1.5rem;
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
  line-height: 1rem;
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
  line-height: 1rem;
  display: inline-block;
  text-align: center;
  color: white;
  position: relative;
  left: -0.5rem;
  transform: scale(0.75);
}

.consoli__warn.no-hint-icon::before,
.consoli__error.no-hint-icon::before {
  display: none;
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
}`;var M=document.head||document.getElementsByTagName("head")[0],y=document.createElement("style");y.styleSheet?y.styleSheet.cssText=C:y.appendChild(document.createTextNode(C));M.appendChild(y);typeof BigInt=="function"&&!BigInt.prototype.toJSON&&(BigInt.prototype.toJSON=function(){return`${this}n`});function E(n,o,f,a){n[o]=n[o]||[],n[o][a]=f}function O(n){let o={};if(n){let f=0,a=Object.keys(n).every(d=>d===Number(d).toString());for(let[d,c]of Object.entries(n))if(typeof c!="function"){if(E(o,"(index)",a?Number(d):d,f),c==null||typeof c!="object"||c instanceof RegExp)E(o,"Value",c,f);else for(let[l,p]of Object.entries(c))E(o,l,p,f);f++}return o}return n}function H(n,o){let f=n["(index)"].length;if(f){let a=document.createElement("table"),d=document.createElement("thead");a.appendChild(d),a.className="consoli__table";let c=Object.keys(n);o&&(c=c.filter(t=>t==="(index)"||t==="Value"||o.includes(t)));let l=document.createElement("tr");l.innerHTML=c.map((t,u)=>`<th data-index="${u}">${t}</th>`).join(""),d.appendChild(l);let p=document.createElement("tbody");a.appendChild(p);for(let t=0;t<f;t++){let u=document.createElement("tr");p.appendChild(u);for(let e=0;e<c.length;e++){let r=c[e],s=document.createElement("td");if(t in n[r]){let i=n[r][t];typeof i=="string"&&r!=="(index)"&&(i=`'${i}'`),Array.isArray(i)?i.length>3&&(s.textContent=`${i.slice(0,3)}... (total: ${i.length})`):typeof i=="bigint"?s.textContent=`${i}n`:typeof i=="symbol"?s.textContent=i.toString():s.textContent=i,s.className=N(i).toLowerCase()}u.appendChild(s)}}return a}}function w(n){if(Object.prototype.toString.call(n)==="[object Object]")try{return JSON.stringify(n)}catch{return n.toString()}return n}function k(n){let o=w(n[0]),f=[],a=/%[cdfios]/,d=0;for(let c=1;c<n.length;c++){let l=w(n[c]);if(a.test(o))o=o.replace(a,p=>{if(p==="%c"){let t=`${d?"</span>":""}<span style="${l}">`;return d++,t}if(p==="%d"||p==="%i")return parseInt(l,10);if(p==="%f")return parseFloat(l);if(p==="%s")return l.toString();if(p==="%o")try{return JSON.stringify(l)}catch{return l.toString()}});else{f.push(...n.slice(c).map(w));break}}return f=[o,...f],d&&f.push("</span>"),f}function N(n){return Object.prototype.toString.call(n).slice(8,-1)}function S(n,o=0){let f=document.createElement("ul");f.className="consoli__dir";let a=N(n),d=document.createElement("div");d.textContent=n instanceof HTMLElement?n.tagName.toLowerCase():a,d.addEventListener("click",()=>{d.classList.toggle("expand")}),f.appendChild(d);let c=[];for(let l in n)typeof n[l]!="function"&&c.push([l,n[l]]);Array.isArray(n)&&c.push(["length",n.length]),c.sort((l,p)=>l[0]>p[0]?1:l[0]<p[0]?-1:0);for(let l=0;l<c.length;l++){let[p,t]=c[l];typeof t=="string"&&(t=`"${t}"`);let u=document.createElement("li"),e=document.createElement("em");e.textContent=p;let r=document.createElement("span");if(r.className=N(t).toLowerCase(),Array.isArray(t)&&t.length<=0?r.textContent="Array(0)":t instanceof NodeList?r.textContent=`NodeList(${t.length})`:t instanceof HTMLCollection?r.textContent=`HTMLCollection(${t.length})`:t instanceof DOMTokenList?r.textContent=`DOMTokenList(${t.length})`:t instanceof HTMLElement?r.textContent=`${t.tagName.toLowerCase()}${t.id?`#${t.id}`:""}`:r.textContent=t,o<2&&t&&typeof t=="object"&&!(t instanceof Window)){let s=S(t,o+1);s.children[0].innerHTML="",s.children[0].appendChild(e),s.children[0].appendChild(r),u.appendChild(s)}else u.appendChild(e),u.appendChild(r);f.appendChild(u)}return f}var h={log:console.log,info:console.info,warn:console.warn,error:console.error,dir:console.dir,table:console.table,group:console.group,groupCollapsed:console.groupCollapsed,groupEnd:console.groupEnd,count:console.count,countReset:console.countReset,time:console.time,timeEnd:console.timeEnd,assert:console.assert,clear:console.clear},B=(n,{console:o=h,hintIcon:f=!0}={})=>{let a=document.createElement("div");a.className="consoli",n.append(a);let d=(e,r="info")=>{let s=document.createElement("pre");s.className=`consoli__${r}${f?"":" no-hint-icon"}`,s.innerHTML=e,a.appendChild(s)},c=e=>(...r)=>{o[e]&&h[e](...r),r=k(r);let s=r.map(i=>i==null?String(i):i.toString?i.toString():Object.prototype.toString.call(i)).join(" ");d(s,e)},l=[],p=(e,r=!1)=>{let s=document.createElement("div");s.className="consoli__group",a.appendChild(s);let i=document.createElement("div");i.textContent=e,r||(i.className="expand"),s.appendChild(i),i.addEventListener("click",()=>{i.classList.toggle("expand")}),l.push(a),a=s},t={},u={};return{log:c("log"),info:c("info"),warn:c("warn"),error:c("error"),assert:(e,...r)=>{if(o.assert&&h.assert(e,...r),!e){let s=k(r).join(" ");d(`Assertion failed: ${s}`,"error")}},clear:()=>{o.clear&&h.clear(),l.length>0&&(a=l[0],l.length=0),a.innerHTML=""},group:e=>{o.group&&h.group(e),p(e)},groupCollapsed:e=>{o.groupCollapsed&&h.groupCollapsed(e),p(e,!0)},groupEnd:()=>{o.groupEnd&&h.groupEnd(),l.length>0&&(a=l.pop())},count:(e="default")=>{o.count&&h.count(e),e=e.toString(),t[e]=t[e]||0,t[e]++,d(`${e}: ${t[e]}`)},time:(e="default")=>{o.time&&h.time(e),e=e.toString(),e in u?d(`Timer '${e}' already exists`,"warn"):u[e]=performance.now()},countReset:(e="default")=>{o.countReset&&h.countReset(e),e=e.toString(),e in t?delete t[e]:d(`Count for '${e}' does not exist`,"warn")},timeEnd:(e="default")=>{o.timeEnd&&h.timeEnd(e),e=e.toString(),e in u?(d(`${e}: ${performance.now()-u[e]} ms`),delete u[e]):d(`Timer '${e}' does not exist`,"warn")},dir:e=>{o.dir&&h.dir(e);let r=S(e);a.appendChild(r)},table:(e,r)=>{o.table&&h.table(e,r);let s=O(e),i=H(s,r);i.addEventListener("click",L=>{let m=L.target;if(m.tagName==="TH"){let $=Number(m.dataset.index),v=[...i.querySelectorAll("tr")].slice(1);v.sort((g,x)=>{g=g.children[$],x=x.children[$];let b=g.textContent,_=x.textContent;return g.className==="number"&&(b=Number(b)),x.className==="number"&&(_=Number(_)),g.className==="bigint"&&(b=BigInt(b.slice(0,-1))),x.className==="bigint"&&(_=BigInt(_.slice(0,-1))),b>_?m.dataset.sort==="asc"?-1:1:b<_?m.dataset.sort==="asc"?1:-1:0}),v.forEach(g=>{i.appendChild(g)}),m.dataset.sort=m.dataset.sort==="asc"?"desc":"asc"}}),a.appendChild(i)}}};export{B as consoli};
