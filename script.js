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
function setLang(lang) {
  document.body.classList.remove('lang-en', 'lang-te');
  document.body.classList.add('lang-' + lang);
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');
  document.getElementById('btn-te').classList.toggle('active', lang === 'te');
  document.documentElement.lang = lang === 'te' ? 'te' : 'en';
}
window.setLang = setLang;

/* ---- Smooth Scroll ---- */
function smoothScroll(e, id) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
window.smoothScroll = smoothScroll;

/* Default language: Telugu */
document.addEventListener('DOMContentLoaded', () => {
  setLang('te');
});

/* ============================================================
   PRODUCT SHOWCASE — 53 PRODUCTS (IMAGE ONLY)
   ============================================================ */

const PRODUCTS = [
  /* ── Fertilizers ── */
  { img: 'products/vesomax.jpeg',           name: 'VesoMax' },
  { img: 'products/vesogro.jpeg',           name: 'VesoGro' },
  { img: 'products/aquaris-npk.jpeg',       name: 'Aquaris NPK 19-19-19' },
  { img: 'products/nanodap.jpeg',           name: 'Gromor NanoDAP' },
  { img: 'products/shine-k.jpeg',           name: 'Shine-K (Potash + Silicon)' },
  /* ── Nutrients / Micronutrients ── */
  { img: 'products/black-gold.jpeg',        name: 'Black Gold' },
  { img: 'products/basfoliar-cabmag.jpeg',  name: 'Basfoliar CaBMag SL' },
  { img: 'products/horticab.jpeg',          name: 'HorticaB' },
  { img: 'products/boro-spray.jpeg',        name: 'Boro Spray' },
  { img: 'products/aquacal.jpeg',           name: 'Aquacal' },
  /* ── Bio-Stimulants ── */
  { img: 'products/prim-horus.jpeg',        name: 'Prim Horus' },
  { img: 'products/allwin-top-plus.jpeg',   name: 'Allwin Top Plus' },
  { img: 'products/allwin-wonder-plus.jpeg',name: 'Allwin Wonder Plus' },
  { img: 'products/shine-g.jpeg',           name: 'Shine-G' },
  { img: 'products/ecomax.jpeg',            name: 'Ecomax+' },
  { img: 'products/karishma.jpeg',          name: 'Karishma (Seaweed Extract)' },
  { img: 'products/shine-basil10.jpeg',     name: 'Shine Basil 10' },
  { img: 'products/decade.jpeg',            name: 'Decade' },
  /* ── Fungicides ── */
  { img: 'products/enigma.jpeg',            name: 'Enigma' },
  { img: 'products/panzer.jpeg',            name: 'Panzer' },
  { img: 'products/shark.jpeg',             name: 'Shark' },
  { img: 'products/kavach.jpeg',            name: 'Kavach' },
  { img: 'products/kavachflo.jpeg',         name: 'KavachFlo' },
  { img: 'products/simodis.jpeg',           name: 'Simodis' },
  { img: 'products/shield.jpeg',            name: 'Shield (Thiophanate Methyl)' },
  { img: 'products/mepro-top.jpeg',         name: 'Mepro-Top' },
  { img: 'products/rodia.jpeg',             name: 'Rodia' },
  { img: 'products/klaatu.jpeg',            name: 'Klaatu (Thiophanate Methyl)' },
  { img: 'products/blue-top.jpeg',          name: 'Blue Top (Copper Oxychloride)' },
  { img: 'products/sartaz.jpeg',            name: 'Sartaz (Carbendazim + Mancozeb)' },
  { img: 'products/medusa.jpeg',            name: 'Medusa' },
  /* ── Insecticides ── */
  { img: 'products/mahakal.jpeg',           name: 'Mahakal' },
  { img: 'products/ayaka.jpeg',             name: 'Ayaka' },
  { img: 'products/tridev.jpeg',            name: 'Tridev' },
  { img: 'products/ampligo.jpeg',           name: 'Ampligo' },
  { img: 'products/alika.jpeg',             name: 'Alika' },
  { img: 'products/curacron.jpeg',          name: 'Curacron' },
  { img: 'products/virtako.jpeg',           name: 'Virtako' },
  { img: 'products/acitop-gold.jpeg',       name: 'Acitop Gold' },
  { img: 'products/barood.jpeg',            name: 'Barood' },
  { img: 'products/vastu.jpeg',             name: 'Vastu (Clothianidin 50% WG)' },
  { img: 'products/cartop-4g.jpeg',         name: 'Cartop 4G' },
  { img: 'products/profex-super.jpeg',      name: 'Profex Super' },
  { img: 'products/no1-validamycin.jpeg',   name: 'No-1 Validamycin' },
  { img: 'products/archer.jpeg',            name: 'Archer (Acephate 75% SP)' },
  { img: 'products/jugni.jpeg',             name: 'Jugni (Flubendiamide 20% WG)' },
  { img: 'products/ethon-cyper.jpeg',       name: 'Ethon Cyper' },
  { img: 'products/dhooan.jpeg',            name: 'Dhooan (Imidacloprid 17.8% SL)' },
  { img: 'products/kudrat.jpeg',            name: 'Kudrat' },
  /* ── Herbicides ── */
  { img: 'products/pegasus.jpeg',           name: 'Pegasus' },
  { img: 'products/decent-sc.jpeg',         name: 'Decent SC' },
  { img: 'products/atratop-plus.jpeg',      name: 'Atratop Plus' },
  { img: 'products/shera.jpeg',             name: 'Shera (Glyphosate 71% SG)' },
];

(function initProductShowcase() {
  const stage     = document.getElementById('prodStage');
  const thumbRail = document.getElementById('prodThumbRail');
  const prevBtn   = document.getElementById('prodPrev');
  const nextBtn   = document.getElementById('prodNext');
  const progress  = document.getElementById('prodProgress');
  const currEl    = document.getElementById('prodCurrent');
  const totalEl   = document.getElementById('prodTotal');

  if (!stage) return;

  let current   = 0;
  let autoTimer = null;
  const DELAY   = 4500;

  totalEl.textContent = String(PRODUCTS.length).padStart(2, '0');

  /* Build slides */
  PRODUCTS.forEach((p, i) => {
    const slide = document.createElement('div');
    slide.className = 'prod-slide' + (i === 0 ? ' active' : '');
    slide.innerHTML = `
      <div class="prod-slide-img">
        <img src="${p.img}" alt="${p.name}" loading="${i < 2 ? 'eager' : 'lazy'}">
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

  function scrollThumbIntoView(idx) {
    const thumbs = thumbRail.querySelectorAll('.prod-thumb');
    const thumb  = thumbs[idx];
    if (!thumb) return;
    const targetLeft = thumb.offsetLeft
                     - thumbRail.clientWidth / 2
                     + thumb.offsetWidth  / 2;
    const maxScroll = thumbRail.scrollWidth - thumbRail.clientWidth;
    thumbRail.scrollLeft = Math.max(0, Math.min(targetLeft, maxScroll));
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

    scrollThumbIntoView(current);

    progress.style.transition = 'none';
    progress.style.width = '0%';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        progress.style.transition = `width ${DELAY}ms linear`;
        progress.style.width = '100%';
      });
    });
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

  prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    stopAuto();
    goTo(current - 1);
    startAuto();
  });
  nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    stopAuto();
    goTo(current + 1);
    startAuto();
  });

  const showcase = document.querySelector('.prod-showcase');
  if (showcase) {
    showcase.addEventListener('mouseenter', stopAuto);
    showcase.addEventListener('mouseleave', startAuto);
  }

  let touchStartX = 0;
  stage.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  stage.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) {
      stopAuto();
      goTo(current + (dx < 0 ? 1 : -1));
      startAuto();
    }
  }, { passive: true });

  let showcaseHovered = false;
  if (showcase) {
    showcase.addEventListener('mouseenter', () => { showcaseHovered = true;  });
    showcase.addEventListener('mouseleave', () => { showcaseHovered = false; });
  }
  document.addEventListener('keydown', e => {
    if (!showcaseHovered) return;
    if (e.key === 'ArrowLeft')  { e.preventDefault(); stopAuto(); goTo(current - 1); startAuto(); }
    if (e.key === 'ArrowRight') { e.preventDefault(); stopAuto(); goTo(current + 1); startAuto(); }
  });

  goTo(0);
  startAuto();
})();
