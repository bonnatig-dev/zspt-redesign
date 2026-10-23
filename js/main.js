const b=document.querySelector('.burger'),n=document.getElementById('nav');
b.addEventListener('click',()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{n.classList.remove('open');b.setAttribute('aria-expanded','false')}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&n.classList.contains('open')){n.classList.remove('open');b.setAttribute('aria-expanded','false');b.focus()}});
const f=document.querySelector('.form');
f.addEventListener('submit',e=>{e.preventDefault();const er=f.querySelector('.err');let m=[];
const E=f.elements,nm=E['name'],tl=E['tel'],em=E['email'],ag=E['agree'];[nm,tl,em].forEach(i=>i.removeAttribute('aria-invalid'));
if(nm.value.trim().length<2){m.push('укажите имя');nm.setAttribute('aria-invalid','true')}
if(!/^\+?[\d\s()-]{9,18}$/.test(tl.value.trim())){m.push('укажите телефон, например +375 29 123-45-67');tl.setAttribute('aria-invalid','true')}
if(em.value&&!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em.value.trim())){m.push('проверьте e-mail');em.setAttribute('aria-invalid','true')}
if(!ag.checked)m.push('нужно согласие на обработку данных');
er.textContent=m.length?'Пожалуйста, '+m.join('; ')+'.':'';if(m.length)return;
f.querySelector('.ok').hidden=false;f.querySelector('button').disabled=true});
