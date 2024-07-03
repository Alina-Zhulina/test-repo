import{a}from"./assets/vendor-45ab28e1.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const c=document.querySelector(".reviews-container");async function l(){const i="https://portfolio-js.b.goit.study/api/reviews";try{return(await a.get(i)).data}catch(t){throw console.error("Error fetching reviews:",t),t}}async function d(){try{const s=await l();if(!s||s.length===0){c.innerHTML="<p>Not found</p>";return}const o=document.createElement("ul");o.classList.add("reviews-list");const i=s.map(({author:t,avatar_url:e,review:r})=>`
            <li class="reviews-item">
  <div class="review-photo">
    <img src="${e}" alt='${t}' class="avatar">
</div>
<div class="review-content">
    <h3 class="author">${t}</h3>
    <p class="text">${r}</p>
</div>
</li>`).join("");o.innerHTML=i,c.appendChild(o)}catch(s){alert("Error rendering reviews"),console.error("Error rendering reviews:",s)}}d();
//# sourceMappingURL=commonHelpers.js.map
