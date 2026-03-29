/* ============================================================
   AGROS RYTHU SEVA KENDRAM — script.js
   ============================================================ */

/* ---- Loader ---- */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('done');
  }, 2100);
});

/* ---- Custom Cursor ---- */
const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');

document.addEventListener('mousemove', e => {
  cursor.style.left     = e.clientX + 'px';
  cursor.style.top      = e.clientY  + 'px';
  cursorRing.style.left = e.clientX + 'px';
  cursorRing.style.top  = e.clientY  + 'px';
});

const hoverTargets = document.querySelectorAll(
  'a, button, .why-card, .testi-card, .pill'
);
hoverTargets.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform     = 'translate(-50%,-50%) scale(2.2)';
    cursorRing.style.transform = 'translate(-50%,-50%) scale(1.6)';
    cursorRing.style.opacity   = '.85';
    cursorRing.style.borderColor = '#d4a843';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform     = 'translate(-50%,-50%) scale(1)';
    cursorRing.style.transform = 'translate(-50%,-50%) scale(1)';
    cursorRing.style.opacity   = '.45';
    cursorRing.style.borderColor = '#2d7d45';
  });
});

/* ---- Navbar scroll class ---- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 55);
});

/* ---- Scroll Reveal ---- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.11 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ---- Count-up ---- */
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting || entry.target.dataset.counted) return;
    entry.target.dataset.counted = '1';
    const target   = parseInt(entry.target.dataset.count, 10);
    const duration = 1800;
    const step     = target / (duration / 16);
    let current    = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      entry.target.textContent = Math.floor(current) + '+';
      if (current >= target) clearInterval(timer);
    }, 16);
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => countObserver.observe(el));

/* ---- Language Toggle ---- */
let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.classList.toggle('active', el.dataset.lang === lang);
  });
  document.querySelectorAll('[data-li]').forEach(el => {
    el.classList.toggle('active', el.dataset.li === lang);
  });
  document.documentElement.lang = lang === 'te' ? 'te' : 'en';
}
window.setLang = setLang;
setLang('en');

/* ============================================================
   PRODUCT SHOWCASE — 20 PRODUCTS
   ============================================================ */

const PRODUCTS = [
  /* ── Fertilizers ── */
  {
    img   : 'products/vesomax.jpeg',
    name  : 'VesoMax',
    nameTe: 'వీసోమెక్స్',
    type  : 'Liquid Fertilizer',
    typeTe: 'తరల ఉర్వరక',
    detail: 'Fortified NP (7-21-0) Liquid',
    brand : 'Ramcides CropScience',
    tag   : 'Fertilizer',
  },
  {
    img   : 'products/vesogro.jpeg',
    name  : 'VesoGro',
    nameTe: 'వీసోగ్రో',
    type  : 'Straight Nitrogenous Fertilizer',
    typeTe: 'సరళ నైట్రోజన్ ఉర్వరక',
    detail: 'Urea Ammonium Nitrate 32% N (Liquid)',
    brand : 'Ramcides CropScience',
    tag   : 'Fertilizer',
  },
  {
    img   : 'products/aquaris-npk.jpeg',
    name  : 'Aquaris NPK 19-19-19',
    nameTe: 'అక్వారిస్ NPK 19-19-19',
    type  : 'Water Soluble NPK Fertilizer',
    typeTe: 'నీటిలో కరిగే NPK ఎరువు',
    detail: 'Balanced Nitrogen : Phosphorus : Potassium — 19:19:19',
    brand : 'Munara Agro Technologies',
    tag   : 'Fertilizer',
  },
  {
    img   : 'products/nanodap.jpeg',
    name  : 'Gromor NanoDAP',
    nameTe: 'గ్రోమోర్ నానోడ్యాప్',
    type  : 'Nano Fertilizer',
    typeTe: 'నానో ఎరువు',
    detail: 'DAP (2-5-0) Nano Formulation · Made in India',
    brand : 'Coromandel International',
    tag   : 'Fertilizer',
  },
  /* ── Nutrients / Micronutrients ── */
  {
    img   : 'products/black-gold.jpeg',
    name  : 'Black Gold',
    nameTe: 'బ్లాక్ గోల్డ్',
    type  : 'Liquid Plant Nutrient',
    typeTe: 'తరల మొక్కల పోషక',
    detail: 'Humic & Fulvic Acid Enriched',
    brand : 'Munara Agro Technologies',
    tag   : 'Nutrient',
  },
  {
    img   : 'products/basfoliar-cabmag.jpeg',
    name  : 'Basfoliar® CaBMag SL',
    nameTe: 'బాస్ఫోలియర్ CaBMag SL',
    type  : 'Foliar Fertilizer',
    typeTe: 'ఫోలియర్ ఎరువు',
    detail: 'Calcium + Boron + Magnesium Complex',
    brand : 'Compo Expert',
    tag   : 'Micronutrient',
  },
  {
    img   : 'products/horticab.jpeg',
    name  : 'HorticaB',
    nameTe: 'హోర్టికాబి',
    type  : 'Plant Nutrient',
    typeTe: 'మొక్కల పోషక',
    detail: 'Organic Boron – Calcium Complex',
    brand : 'Aries Agro Limited',
    tag   : 'Micronutrient',
  },
  {
    img   : 'products/boro-spray.jpeg',
    name  : 'Boro Spray',
    nameTe: 'బోరో స్ప్రే',
    type  : 'Foliar Boron',
    typeTe: 'ఫోలియర్ బోరాన్',
    detail: 'Boron 20% — Di-Sodium Octa Borate Tetra Hydrate',
    brand : 'Munara Agro Technologies',
    tag   : 'Micronutrient',
  },
  {
    img   : 'products/aquacal.jpeg',
    name  : 'Aquacal',
    nameTe: 'అక్వాకాల్',
    type  : 'Plant Nutrient',
    typeTe: 'మొక్కల పోషక',
    detail: 'Liquid Calcium Nitrate with Chelated Minerals',
    brand : 'Aries Agro Limited',
    tag   : 'Nutrient',
  },
  /* ── Bio-Stimulants ── */
  {
    img   : 'products/prim-horus.jpeg',
    name  : 'Prim Horus',
    nameTe: 'ప్రిమ్ హోరస్',
    type  : 'Plant Growth Stimulant',
    typeTe: 'మొక్కల పెరుగుదల ఉద్దీపన',
    detail: 'Rooting · Vegetative Growth · Flowering · Fruiting',
    brand : 'Fertinagro',
    tag   : 'Bio-Stimulant',
  },
  {
    img   : 'products/allwin-top-plus.jpeg',
    name  : 'Allwin Top Plus',
    nameTe: 'ఆల్విన్ టాప్ ప్లస్',
    type  : 'Bio-Stimulant for Foliar',
    typeTe: 'ఫోలియర్ బయో-స్టిమ్యులెంట్',
    detail: 'For Foliar Application — Plant Science Division',
    brand : 'Ramcides CropScience',
    tag   : 'Bio-Stimulant',
  },
  {
    img   : 'products/allwin-wonder-plus.jpeg',
    name  : 'Allwin Wonder Plus',
    nameTe: 'ఆల్విన్ వండర్ ప్లస్',
    type  : 'Bio-Stimulant for Soil',
    typeTe: 'నేల బయో-స్టిమ్యులెంట్',
    detail: 'For Soil Application · Patent No. 257446',
    brand : 'Ramcides CropScience',
    tag   : 'Bio-Stimulant',
  },
  {
    img   : 'products/shine-g.jpeg',
    name  : 'Shine-G',
    nameTe: 'షైన్-జి',
    type  : 'Plant Antioxidant Biostimulant',
    typeTe: 'మొక్కల యాంటీఆక్సిడెంట్',
    detail: 'Basil10 Sunglow · Contains Ocimum sanctum',
    brand : 'Thakar Chemicals',
    tag   : 'Bio-Stimulant',
  },
  {
    img   : 'products/ecomax.jpeg',
    name  : 'Ecomax+',
    nameTe: 'ఎకోమాక్స్+',
    type  : 'Mycorrhizal Bio-Fertilizer',
    typeTe: 'మైకోర్రిజల్ బయో-ఫర్టిలైజర్',
    detail: 'Stronger Roots · More Feeder Roots · More Nutrients',
    brand : 'JU Agri Sciences',
    tag   : 'Bio-Stimulant',
  },
  /* ── Fungicides ── */
  {
    img   : 'products/enigma.jpeg',
    name  : 'Enigma',
    nameTe: 'ఎనిగ్మా',
    type  : 'Systemic Fungicide',
    typeTe: 'సిస్టమిక్ శిలీంధ్రనాశకం',
    detail: 'Thiophanate Methyl 70% WP',
    brand : 'Thakar Chemicals',
    tag   : 'Fungicide',
  },
  {
    img   : 'products/panzer.jpeg',
    name  : 'Panzer',
    nameTe: 'పాంజర్',
    type  : 'Systemic & Contact Fungicide',
    typeTe: 'సిస్టమిక్ & కాంటాక్ట్ శిలీంధ్రనాశకం',
    detail: 'Tebuconazole 10% + Sulphur 65% WG',
    brand : 'Thakar Chemicals',
    tag   : 'Fungicide',
  },
  {
    img   : 'products/shark.jpeg',
    name  : 'Shark',
    nameTe: 'షార్క్',
    type  : 'Systemic Fungicide',
    typeTe: 'సిస్టమిక్ శిలీంధ్రనాశకం',
    detail: 'Tricyclazole 75% WP — Ideal for Blast Disease',
    brand : 'Thakar Chemicals',
    tag   : 'Fungicide',
  },
  /* ── Insecticides ── */
  {
    img   : 'products/mahakal.jpeg',
    name  : 'Mahakal',
    nameTe: 'మహాకాల్',
    type  : 'Systemic & Contact Insecticide',
    typeTe: 'సిస్టమిక్ & కాంటాక్ట్ కీటకనాశకం',
    detail: 'Fipronil 40% + Imidacloprid 40% WG',
    brand : 'JU Agri Sciences',
    tag   : 'Insecticide',
  },
  {
    img   : 'products/ayaka.jpeg',
    name  : 'Ayaka',
    nameTe: 'అయాక',
    type  : 'Patented Insecticide',
    typeTe: 'పేటెంట్ కీటకనాశకం',
    detail: 'Powered by Quad Force Technology',
    brand : 'JU Agri Sciences',
    tag   : 'Insecticide',
  },
  {
    img   : 'products/tridev.jpeg',
    name  : 'Tridev',
    nameTe: 'త్రిదేవ్',
    type  : 'Triple-Action Insecticide',
    typeTe: 'త్రిపుల్-యాక్షన్ కీటకనాశకం',
    detail: 'Pyriproxyfen 8% + Dinotefuran 5% + Diafenthiuron 18% SC',
    brand : 'JU Agri Sciences',
    tag   : 'Insecticide',
  },
];

/* tag colour map */
const TAG_COLORS = {
  'Fertilizer'   : { bg: '#e8f5e9', text: '#1b5e20' },
  'Micronutrient': { bg: '#e3f2fd', text: '#0d47a1' },
  'Nutrient'     : { bg: '#e0f7fa', text: '#006064' },
  'Bio-Stimulant': { bg: '#fff8e1', text: '#e65100' },
  'Fungicide'    : { bg: '#ede7f6', text: '#4a148c' },
  'Insecticide'  : { bg: '#fce4ec', text: '#880e4f' },
};

(function initProductShowcase() {
  const stage     = document.getElementById('prodStage');
  const thumbRail = document.getElementById('prodThumbRail');
  const prevBtn   = document.getElementById('prodPrev');
  const nextBtn   = document.getElementById('prodNext');
  const progress  = document.getElementById('prodProgress');
  const currEl    = document.getElementById('prodCurrent');
  const totalEl   = document.getElementById('prodTotal');

  if (!stage) return;

  let current  = 0;
  let autoTimer = null;
  const DELAY   = 4500;

  totalEl.textContent = String(PRODUCTS.length).padStart(2, '0');

  /* Build slides */
  PRODUCTS.forEach((p, i) => {
    const tc = TAG_COLORS[p.tag] || TAG_COLORS['Nutrient'];
    const slide = document.createElement('div');
    slide.className = 'prod-slide' + (i === 0 ? ' active' : '');
    slide.innerHTML = `
      <div class="prod-slide-img">
        <img src="${p.img}" alt="${p.name}" loading="${i < 2 ? 'eager' : 'lazy'}">
        <div class="prod-slide-veil"></div>
      </div>
      <div class="prod-slide-info">
        <span class="prod-tag" style="background:${tc.bg};color:${tc.text}">${p.tag}</span>
        <h3 class="prod-name" data-lang="en">${p.name}</h3>
        <h3 class="prod-name" data-lang="te">${p.nameTe}</h3>
        <p  class="prod-type" data-lang="en">${p.type}</p>
        <p  class="prod-type" data-lang="te">${p.typeTe}</p>
        <p  class="prod-detail">${p.detail}</p>
        <span class="prod-brand">${p.brand}</span>
      </div>
    `;
    stage.appendChild(slide);
  });

  /* Build thumbnails */
  PRODUCTS.forEach((p, i) => {
    const thumb = document.createElement('button');
    thumb.className = 'prod-thumb' + (i === 0 ? ' active' : '');
    thumb.setAttribute('aria-label', p.name);
    thumb.innerHTML = `<img src="${p.img}" alt="${p.name}" loading="lazy">`;
    thumb.addEventListener('click', () => goTo(i));
    thumbRail.appendChild(thumb);
  });

  function syncLang() {
    stage.querySelectorAll('[data-lang]').forEach(el => {
      el.classList.toggle('active', el.dataset.lang === currentLang);
    });
  }

  function goTo(idx) {
    const slides = stage.querySelectorAll('.prod-slide');
    const thumbs = thumbRail.querySelectorAll('.prod-thumb');
    slides[current].classList.remove('active');
    thumbs[current].classList.remove('active');
    current = (idx + PRODUCTS.length) % PRODUCTS.length;
    slides[current].classList.add('active');
    thumbs[current].classList.add('active');
    currEl.textContent = String(current + 1).padStart(2, '0');
    thumbs[current].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    progress.style.transition = 'none';
    progress.style.width = '0%';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        progress.style.transition = `width ${DELAY}ms linear`;
        progress.style.width = '100%';
      });
    });
    syncLang();
  }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(() => goTo(current + 1), DELAY);
    progress.style.transition = `width ${DELAY}ms linear`;
    progress.style.width = '100%';
  }
  function stopAuto() {
    clearInterval(autoTimer);
    progress.style.transition = 'none';
    progress.style.width = '0%';
  }

  prevBtn.addEventListener('click', () => { stopAuto(); goTo(current - 1); startAuto(); });
  nextBtn.addEventListener('click', () => { stopAuto(); goTo(current + 1); startAuto(); });

  const showcase = document.querySelector('.prod-showcase');
  if (showcase) {
    showcase.addEventListener('mouseenter', stopAuto);
    showcase.addEventListener('mouseleave', startAuto);
  }

  let touchStartX = 0;
  stage.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) { stopAuto(); goTo(current + (dx < 0 ? 1 : -1)); startAuto(); }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  { stopAuto(); goTo(current - 1); startAuto(); }
    if (e.key === 'ArrowRight') { stopAuto(); goTo(current + 1); startAuto(); }
  });

  const _orig = window.setLang;
  window.setLang = function(lang) {
    _orig(lang);
    syncLang();
  };

  setTimeout(syncLang, 50);
  startAuto();
  goTo(0);
})();
