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
  'a, button, .product-card, .why-card, .offer-card, .testi-card, .pill'
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
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
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

  /* nav buttons */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  /* block elements */
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.classList.toggle('active', el.dataset.lang === lang);
  });

  /* inline elements */
  document.querySelectorAll('[data-li]').forEach(el => {
    el.classList.toggle('active', el.dataset.li === lang);
  });

  document.documentElement.lang = lang === 'te' ? 'te' : 'en';
}

/* expose globally for onclick */
window.setLang = setLang;

/* initialise */
setLang('en');
