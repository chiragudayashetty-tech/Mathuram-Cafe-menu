/* =====================================================
   RENDER
===================================================== */
const scallopSVG = `<svg class="scallop" viewBox="0 0 200 16" preserveAspectRatio="none"><path fill="currentColor" d="M0 16 Q 8.3 0 16.6 16 Q 25 0 33.3 16 Q 41.6 0 50 16 Q 58.3 0 66.6 16 Q 75 0 83.3 16 Q 91.6 0 100 16 Q 108.3 0 116.6 16 Q 125 0 133.3 16 Q 141.6 0 150 16 Q 158.3 0 166.6 16 Q 175 0 183.3 16 Q 191.6 0 200 16 Z"/></svg>`;

function itemHTML(it){
  const [name, price, special] = it;
  return `<div class="item" data-name="${name.toLowerCase()}">
    <span class="dot"></span>
    <span class="name">${name}${special ? '<span class="badge">★ Weekend</span>' : ''}</span>
    <span class="leader"></span>
    <span class="price">₹${price}</span>
  </div>`;
}

function groupHTML(g){
  const items = g.items.map(itemHTML).join('');
  return `<div class="group">
    ${g.name ? `<h3 class="group-title">${g.name}</h3>` : ''}
    ${items}
  </div>`;
}

function sectionHTML(sec){
  const groups = sec.groups.map(groupHTML).join('');
  return `<section class="menu-section t-${sec.theme}" id="${sec.key}" data-theme="${sec.theme}">
    ${scallopSVG}
    <div class="section-head">
      <span class="kicker">${sec.kicker}</span>
      <h2>${sec.title}</h2>
      <p class="sub">${sec.sub || ''}</p>
      <div class="rule"></div>
    </div>
    ${groups}
    ${sec.note ? `<p class="note">${sec.note}</p>` : ''}
  </section>`;
}

document.getElementById('menuRoot').innerHTML = MENU.map(sectionHTML).join('');
document.getElementById('catnav').innerHTML = MENU.map(sec =>
  `<a class="pill" href="#${sec.key}" data-key="${sec.key}">${NAV_LABELS[sec.key]}</a>`
).join('');

/* =====================================================
   SCROLLSPY
===================================================== */
const pills = [...document.querySelectorAll('.pill')];
const sections = [...document.querySelectorAll('.menu-section')];
const catnav = document.getElementById('catnav');

const spy = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const key = entry.target.id;
      pills.forEach(p=>p.classList.toggle('active', p.dataset.key===key));
      const activePill = pills.find(p=>p.dataset.key===key);
      if(activePill){
        catnav.scrollTo({left: activePill.offsetLeft - catnav.clientWidth/2 + activePill.clientWidth/2, behavior:'smooth'});
      }
    }
  });
}, {rootMargin:'-45% 0px -50% 0px', threshold:0});
sections.forEach(s=>spy.observe(s));

pills.forEach(p=>p.addEventListener('click', e=>{
  e.preventDefault();
  const target = document.getElementById(p.dataset.key);
  const offset = target.getBoundingClientRect().top + window.scrollY - 108;
  window.scrollTo({top:offset, behavior:'smooth'});
}));

/* =====================================================
   REVEAL ON SCROLL
===================================================== */
const reveal = new IntersectionObserver((entries)=>{
  entries.forEach((entry, i)=>{
    if(entry.isIntersecting){
      entry.target.style.transitionDelay = (i%8 * 0.04)+'s';
      entry.target.classList.add('show');
      reveal.unobserve(entry.target);
    }
  });
}, {threshold:0.12, rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.item').forEach(el=>reveal.observe(el));

/* =====================================================
   SEARCH
===================================================== */
const searchToggle = document.getElementById('searchToggle');
const searchWrap = document.getElementById('searchWrap');
const searchInput = document.getElementById('searchInput');
const emptyState = document.getElementById('emptyState');

searchToggle.addEventListener('click', ()=>{
  searchWrap.classList.toggle('open');
  if(searchWrap.classList.contains('open')) setTimeout(()=>searchInput.focus(), 200);
  else { searchInput.value=''; runSearch(''); }
});

function runSearch(qRaw){
  const q = qRaw.trim().toLowerCase();
  let totalVisible = 0;
  sections.forEach(sec=>{
    let secVisible = 0;
    sec.querySelectorAll('.group').forEach(group=>{
      let groupVisible = 0;
      group.querySelectorAll('.item').forEach(item=>{
        const match = !q || item.dataset.name.includes(q);
        item.classList.toggle('hidden', !match);
        if(match){ groupVisible++; totalVisible++; secVisible++; item.classList.add('show'); }
      });
      group.classList.toggle('hidden', groupVisible===0 && q!=='');
    });
    sec.classList.toggle('hidden', secVisible===0 && q!=='');
  });
  emptyState.classList.toggle('show', q!=='' && totalVisible===0);
}
searchInput.addEventListener('input', e=>runSearch(e.target.value));

/* =====================================================
   BACK TO TOP FAB
===================================================== */
const fabTop = document.getElementById('fabTop');
window.addEventListener('scroll', ()=>{
  fabTop.classList.toggle('visible', window.scrollY > 700);
}, {passive:true});
fabTop.addEventListener('click', e=>{ e.preventDefault(); window.scrollTo({top:0, behavior:'smooth'}); });