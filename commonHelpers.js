import{a as f,i as p}from"./assets/vendor-ae6d56ab.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const h=document.querySelector(".search-form"),y=document.querySelector('input[name="query"]'),d=document.querySelector(".news");let c="",g=1,l=[];f.defaults.baseURL="https://newsapi.org";h.addEventListener("submit",async s=>{if(s.preventDefault(),c=s.target.elements.query.value.trim(),c===""){u("Please enter a search query.");return}v(),l=(await b(c)).articles;try{l.length===0?u("Sorry, there are no articles matching your search query. Please try again!"):L(l),y.value=""}catch(n){u(n.message)}});async function b(s){const r="345785a066764794828ce40eac434841",n="/v2/everything",a=new URLSearchParams({apiKey:r,q:s,pageSize:20,page:g});try{const t=(await f.get(n,{params:a})).data;return{articles:t.articles.filter(i=>i.title!=="[Removed]"&&i.urlToImage!==null),totalResults:t.totalResults}}catch(e){console.error("Error fetching the images:",e)}}function L(s){const r=document.createElement("ul");r.classList.add("news-list");const n=s.map(({author:a,description:e,publishedAt:t,title:o,url:i,urlToImage:m})=>` 
      <li class="articles">
      <div class="articles-content">
      <h1>${o}</h1>
      <p>${e}</p>
      <span><b>Author:</b> ${a}</span><br>
      <span><b>Published At:</b> ${t}</span><br>
      <a href="${i}"><em>Read more</em></a>
</div>
<img src="${m}" alt="${o}" class="article-image">
      </li>
    </ul>`).join("");r.innerHTML=n,d.innerHTML="",d.appendChild(r)}function u(s){p.error({title:"Error",message:s,backgroundColor:"#ef4040",theme:"dark"})}function v(){d.innerHTML=""}
//# sourceMappingURL=commonHelpers.js.map
