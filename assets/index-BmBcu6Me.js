(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();const h=document.getElementById("myForm"),E=document.getElementById("list");window.addEventListener("load",function(){const d=JSON.parse(localStorage.getItem("todoList"));d&&d.forEach(o=>{const t=C(o.text,o.deadLine,o.isCompleted);E.appendChild(t)})});h.addEventListener("submit",function(d){d.preventDefault();let o=document.getElementById("deadLine").value;o===""&&(o="Не указано");const t=document.getElementById("textInput").value;if(document.getElementById("textInput").value="",t==="")alert("Нельзя вводить пустое поле!");else{const c=C(t,o);E.appendChild(c),f()}});function C(d,o){const t=document.createElement("li");t.classList.add("listElement"),t.appendChild(document.createElement("hr"));const c=document.createElement("h3");c.textContent="Дед лайн: "+o,t.appendChild(c);const e=document.createElement("p");e.classList.add("textSpot"),e.textContent=d,t.appendChild(e);const n=document.createElement("div");t.appendChild(n);const s=document.createElement("button");s.textContent="Удалить",s.classList.add("deleteButton");const l=document.createElement("button");l.textContent="Редактировать",l.classList.add("editButton");const r=document.createElement("button");return r.textContent="Выполнено",r.classList.add("successPointButton"),n.appendChild(s),n.appendChild(l),n.appendChild(r),s.addEventListener("click",function(){E.removeChild(t),f()}),l.addEventListener("click",function(){const m=document.createElement("div"),i=document.createElement("form"),p=document.createElement("input"),a=document.createElement("button");a.type="button";const u=document.createElement("button");u.type="button",p.value=e.textContent,a.textContent="Применить",a.classList.add("successPointButton"),u.textContent="Отменить",u.classList.add("deleteButton"),i.appendChild(p),i.appendChild(a),i.appendChild(u),m.appendChild(i),t.appendChild(m),u.addEventListener("click",function(){m.removeChild(i)}),a.addEventListener("click",function(){p.value!==""?(e.textContent=p.value,t.appendChild(n),t.removeChild(m),f()):alert("Вы оставили поле пустым!")})}),r.addEventListener("click",function(){e.style.color="green",n.removeChild(l),n.removeChild(r),f()}),t}function f(){const d=Array.from(E.children).map(o=>{const t=o.querySelector("p").textContent,c=o.querySelector("h3").textContent.replace("Дед лайн: ",""),e=o.querySelector("p").style.color==="green";return{text:t,deadLine:c,isCompleted:e}});localStorage.setItem("todoList",JSON.stringify(d))}
