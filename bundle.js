(()=>{var C=[],u,z;function M(e){let t=u,r=()=>{};u=r,$(r);let o=e(()=>{w(r),u=void 0});return u=t,o}function S(e){let t=u;u=void 0;let r=e();return u=t,r}function g(e){function t(r){if(arguments.length===0)return u&&!t.__o.has(u)&&(t.__o.add(u),u.u.push(t)),e;if(z)return t.t===C&&z.push(t),t.t=r,r;e=r;let o=u;return u=void 0,t.o=new Set(t.__o),t.o.forEach(n=>n.i=!1),t.o.forEach(n=>{n.i||n()}),u=o,e}return t.$o=1,t.__o=new Set,t.t=C,t}function I(e,t){function r(){let n=u;return u&&u.__c.push(r),w(r),r.i=!0,u=r,t=e(t),u=n,t}function o(){return r.i?u&&r.u.forEach(n=>n()):t=r(),t}return e.l=r,$(r),r(),o.$o=1,o}function N(e){return u&&u.v.push(e),e}function y(e){return I(e),()=>w(e.l)}function w(e){e.__c.forEach(w),e.u.forEach(t=>{t.__o.delete(e),t.o&&t.o.delete(e)}),e.v.forEach(t=>t()),$(e)}function $(e){e.u=[],e.__c=[],e.v=[]}var j=(e,t,r,o)=>{let n={};for(let s=1;s<t.length;s++){let l=t[s],c=typeof l=="number"?r[l]:l,i=t[++s];if(i===1)o[0]=c;else if(i===3)o[1]=Object.assign(o[1]||{},c);else if(i===5)(o[1]=o[1]||{})[t[++s]]=c;else if(i===6){let h=t[++s],v=(o[1]=o[1]||{})[h],p=n[h];p||typeof c!="function"&&typeof v!="function"||(p=v&&[v]||[],o[1][h]=function(){let d="";for(var m=0;m<p.length;m++)d+=typeof p[m]=="function"?p[m].call(this):p[m];return d}),p?p.push(c):o[1][h]+=c+""}else if(i){let h=()=>e.apply(null,j(e,c,r,["",null]));o.push(typeof o[0]=="function"?h:h())}else o.push(c)}return o},R=function(e){let t,r,o=1,n="",s="",l=[0],c=i=>{o===1&&(i||(n=n.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?l.push(i||n,0):o===3&&(i||n)?(l.push(i||n,1),o=2):o===2&&n==="..."&&i?l.push(i,3):o===2&&n&&!i?l.push(!0,5,n):o>=5&&((n||!i&&o===5)&&(l.push(n,o,r),o=6),i&&(l.push(i,o,r),o=6)),n=""};for(let i=0;i<e.length;i++){i&&(o===1&&c(),c(i));for(let h=0;h<e[i].length;h++)t=e[i][h],o===1?t==="<"?(c(),l=[l],o=3):n+=t:o===4?n==="--"&&t===">"?(o=1,n=""):n=t+n[0]:s?t===s?s="":n+=t:t==='"'||t==="'"?s=t:t===">"?(c(),o=1):o&&(t==="="?(o=5,r=n,n=""):t==="/"&&(o<5||e[i][h+1]===">")?(c(),o===3&&(l=l[0]),o=l,(l=l[0]).push(o,2),o=0):t===" "||t==="	"||t===`
`||t==="\r"?(c(),o=2):n+=t),o===3&&n==="!--"&&(o=4,l=l[0])}return c(),l},L=new Map,D=function(e){let t=L.get(this);return t||(t=new Map,L.set(this,t)),t=j(this,t.get(e)||(t.set(e,t=R(e)),t),arguments,[]),t.length>1?t:t[0]},O=function(){let e=D.apply(this,arguments);if(e)return Array.isArray(e)?this(e):typeof e=="object"?e:this([e])},A=function(){let e=O.bind(this);return(this.wrap||e).apply(e,arguments)};var a={},P=[];function B(e){return this.t&&this.t[e.type](e)}a.h=(...e)=>{let t,r=o=>{if(o!=null)if(typeof o=="string")t?a.add(t,o):t=a.s?document.createElementNS("http://www.w3.org/2000/svg",o):document.createElement(o);else if(Array.isArray(o))t||(t=document.createDocumentFragment()),o.forEach(r);else if(o instanceof Node)t?a.add(t,o):t=o;else if(typeof o=="object")a.property(t,o,null,a.s);else if(typeof o=="function")if(t){let n=a.add(t,"");a.insert(t,o,n)}else t=o.apply(null,e.splice(1));else a.add(t,""+o)};return e.forEach(r),t},a.insert=(e,t,r,o,n)=>(e=r&&r.parentNode||e,n=n||o instanceof Node&&o,t===o||(o&&typeof o!="string"||!(typeof t=="string"||typeof t=="number"&&(t+=""))?typeof t=="function"?a.subscribe(()=>{o=a.insert(e,t.call({el:e,endMark:r}),r,o,n)}):(r?o&&(n||(n=o.o&&o.o.nextSibling||r.previousSibling),a.rm(e,n,r)):e.textContent="",o=null,t&&t!==!0&&(o=a.add(e,t,r))):(o!=null&&e.firstChild?r?(r.previousSibling||e.lastChild).data=t:e.firstChild.data=t:r?a.add(e,t,r):e.textContent=t,o=t)),o),a.property=(e,t,r,o,n)=>{if(t!=null)if(!r||r==="attrs"&&(o=!0))for(r in t)a.property(e,t[r],r,o,n);else r[0]!=="o"||r[1]!=="n"||t.$o?typeof t=="function"?a.subscribe(()=>{a.property(e,t.call({el:e,name:r}),r,o,n)}):n?e.style.setProperty(r,t):o||r.slice(0,5)==="data-"||r.slice(0,5)==="aria-"?e.setAttribute(r,t):r==="style"?typeof t=="string"?e.style.cssText=t:a.property(e,t,null,o,!0):(r==="class"&&(r+="Name"),e[r]=t):((s,l,c)=>{l=l.slice(2).toLowerCase(),c?s.addEventListener(l,B):s.removeEventListener(l,B),(s.t||(s.t={}))[l]=c})(e,r,t)},a.add=(e,t,r)=>{let o=(n=>{let{childNodes:s}=n;if(s&&n.nodeType===11)return s.length<2?s[0]:{o:a.add(n,"",s[0])}})(t=(n=>typeof n=="string"?document.createTextNode(n):n instanceof Node?n:a.h(P,n))(t))||t;return e.insertBefore(t,r&&r.parentNode&&r),o},a.rm=(e,t,r)=>{for(;t&&t!==r;){let o=t.nextSibling;e===t.parentNode&&e.removeChild(t),t=o}},a.subscribe=y,a.cleanup=N,a.root=M,a.sample=S,a.hs=(...e)=>{let t=a.s;a.s=!0;let r=H(...e);return a.s=t,r};var H=(...e)=>a.h.apply(a.h,e),W=(...e)=>a.hs.apply(a.hs,e),f=(...e)=>A.apply(H,e),x=(...e)=>A.apply(W,e);var q=()=>{let e=g(""),t={Home:/^$/,About:/^about/,Contact:/^contact/,Index:/^index/,Blog:/^blog\/(?<page>\w+)$/},r=(p,d)=>{for(let m in t){let b=p.match(t[m]);if(b)return d(m)({...b.groups})}},o=async p=>await(await fetch("./../pages/"+p+".json")).json(),h={Home:()=>f`<h1>Hello World !!!</h1>`,About:()=>f`<h1>About</h1>`,Contact:()=>f`<h1>Contact</h1>`,Index:()=>{let p=g([]);return o("_pages").then(d=>{p(d.pages)}),f`
        <div>
            ${()=>p().map(d=>f`
                  <p>${d.title}</p>
                `)}
        </div>
        `},Blog:({page:p})=>{let d=g(""),m=g("");return o(p).then(b=>{d(b.title),m(b.content)}),f`<h1>${d}</h1><hr/><p>${m}</p>`}},v=()=>e(location.hash.substr(1));return window.addEventListener("hashchange",v),v(),f`
    <main class="container">
        ${()=>r(e(),p=>h[p])}
    </main>
    `},T=q;var G=()=>x`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
    </svg>
    `,_=G;var J=()=>x`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
    </svg>
    `,E=J;var K=e=>f`
    <header class="container">
        <nav>
            <ul><li><strong>Brand</strong></li></ul>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#blog/page">post</a></li>
                <li><a href="#blog/page33">post33</a></li>
                <li><a href="#" role="link" onclick=${e.toggle} data-tooltip='${e.theme} theme' data-placement="left">${e.icon}</a></li>
            </ul>
        </nav> 
    </header>
    `,k=K;var Q=()=>f`
    <footer>
        <div class="container">
            <p>footer</p>
        </div>
    </footer>
    `,F=Q;var U=()=>{let e=!0,t=g("light"),r=g(e?_:E);return y(()=>{document.documentElement.setAttribute("data-theme",`${t()}`)}),f`
    <${k} toggle=${s=>{s.preventDefault(),e=!e,t(e?"light":"dark"),r(e?_:E)}} theme=${t} icon=${r} />
    <${T}/>
    <${F}/>
    `};document.body.append(f`<${U}/>`);})();
