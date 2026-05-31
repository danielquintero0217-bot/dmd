/* ═══════════════════════════════════════════════════
   DMD — app.js
   i18n · cursor · nav · reveals · portfolio · modal · faq · gsap
   ═══════════════════════════════════════════════════ */

/* ── TRANSLATIONS ── */
const translations = {
  en: {
    nav_work:       'Work',
    nav_about:      'About',
    nav_contact:    'Contact',

    hero_tag:       'Audiovisual Production · Colombia',
    hero_line1:     'Crafting High-End',
    hero_line2:     'Motion for Fashion.',
    hero_line3:     'Exporting top-tier production',
    hero_line4:     'from Colombia to the world.',
    hero_cta:       'View Work',

    brands_label:   'Trusted By',

    portfolio_tag:  'Selected Work',
    portfolio_title:'Our Projects',

    modal_cta:      'I want to know more →',

    about_tag:      'About DMD',
    about_title:    'We make brands move.',
    about_desc:     'DMD is a high-end audiovisual production company based in Medellín, Colombia. We create brand films, campaigns, and editorial content for fashion and luxury brands worldwide. Our work bridges the creative energy of Latin America with the visual standards of global markets.',
    stat_years:     'Years of Experience',
    stat_brands:    'Global Brands',
    stat_awards:    'Industry Awards',

    cta_tag:        "Let's Work Together",
    cta_title_line1:'Let\'s create',
    cta_title_line2:'together.',
    cta_sub:        'High-end production. Fast turnaround. World-class results.',
    cta_book:       'Schedule a Call',
    cta_quote:      'Request a Quote',

    faq_tag:        'FAQ',
    faq_title:      'Common Questions',
    faq_q1:         'Where are you based?',
    faq_a1:         'We are based in Medellín, Colombia, with a production team that travels globally. We specialize in the US and European markets.',
    faq_q2:         'Do you work with international clients?',
    faq_a2:         'Yes. We specialize in remote collaboration and have extensive experience with brands across North America, Europe, and Latin America.',
    faq_q3:         'What types of productions do you specialize in?',
    faq_a3:         'Brand films, fashion editorials, commercial campaigns, music videos, and high-end promotional content for luxury and lifestyle brands.',
    faq_q4:         'How do we start a project?',
    faq_a4:         'Schedule a discovery call or send us your brief. We\'ll review it and come back with a tailored production proposal within 48 hours.',
    faq_q5:         'What are your rates?',
    faq_a5:         'Every project is unique. Contact us for a personalized quote — we offer competitive pricing without compromising on quality.',

    footer_tagline: 'High-End Audiovisual Production',
    footer_legal:   '© 2026 DMD. All rights reserved.',
  },

  es: {
    nav_work:       'Trabajo',
    nav_about:      'Nosotros',
    nav_contact:    'Contacto',

    hero_tag:       'Producción Audiovisual · Colombia',
    hero_line1:     'Producción Audiovisual',
    hero_line2:     'de Alto Nivel.',
    hero_line3:     'Desde Colombia para las',
    hero_line4:     'mejores marcas del mundo.',
    hero_cta:       'Ver Trabajo',

    brands_label:   'Confían en Nosotros',

    portfolio_tag:  'Trabajo Selecto',
    portfolio_title:'Nuestros Proyectos',

    modal_cta:      'Quiero saber más →',

    about_tag:      'Sobre DMD',
    about_title:    'Hacemos que las marcas se muevan.',
    about_desc:     'DMD es una productora audiovisual de alto nivel con sede en Medellín, Colombia. Creamos películas de marca, campañas y contenido editorial para marcas de moda y lujo en todo el mundo. Nuestro trabajo une la energía creativa de América Latina con los estándares visuales de los mercados globales.',
    stat_years:     'Años de Experiencia',
    stat_brands:    'Marcas Globales',
    stat_awards:    'Premios de la Industria',

    cta_tag:        'Trabajemos Juntos',
    cta_title_line1:'Creemos algo',
    cta_title_line2:'juntos.',
    cta_sub:        'Producción de alto nivel. Entregas rápidas. Resultados de clase mundial.',
    cta_book:       'Agendar Llamada',
    cta_quote:      'Solicitar Cotización',

    faq_tag:        'Preguntas',
    faq_title:      'Preguntas Frecuentes',
    faq_q1:         '¿Dónde están ubicados?',
    faq_a1:         'Estamos en Medellín, Colombia, con un equipo de producción que viaja globalmente. Nos especializamos en el mercado estadounidense y europeo.',
    faq_q2:         '¿Trabajan con clientes internacionales?',
    faq_a2:         'Sí. Nos especializamos en colaboración remota y tenemos amplia experiencia con marcas de Norteamérica, Europa y Latinoamérica.',
    faq_q3:         '¿En qué tipos de producción se especializan?',
    faq_a3:         'Películas de marca, editoriales de moda, campañas comerciales, videos musicales y contenido promocional de alto nivel para marcas de lujo.',
    faq_q4:         '¿Cómo iniciamos un proyecto?',
    faq_a4:         'Agenda una llamada de descubrimiento o envíanos tu brief. Lo revisaremos y te enviaremos una propuesta personalizada en 48 horas.',
    faq_q5:         '¿Cuáles son sus tarifas?',
    faq_a5:         'Cada proyecto es único. Contáctanos para una cotización personalizada: ofrecemos precios competitivos sin comprometer la calidad.',

    footer_tagline: 'Producción Audiovisual de Alto Nivel',
    footer_legal:   '© 2026 DMD. Todos los derechos reservados.',
  }
};

/* ── STATE ── */
let currentLang = 'en';

/* ── UTILS ── */
function $(sel, ctx = document) { return ctx.querySelector(sel); }
function $$(sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; }

/* ══════════════════════════════════
   i18n SYSTEM
══════════════════════════════════ */
function applyTranslations(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);

  $$('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = translations[lang][key];
    if (val !== undefined) el.textContent = val;
  });

  /* Update lang toggle visual state */
  $$('.lang-opt').forEach(btn => btn.classList.remove('active'));
  $(`.lang-${lang}`)?.classList.add('active');

  /* Update portfolio follower if hovering */
  const follower = $('#portfolio-follower');
  if (follower && follower.classList.contains('active')) {
    const hovered = $('.portfolio-item:hover');
    if (hovered) {
      follower.textContent = hovered.getAttribute(`data-project-${lang}`) || hovered.getAttribute('data-project-en') || '';
    }
  }
}

function initI18n() {
  /* Always default to EN for US market — only use saved preference */
  const saved = localStorage.getItem('dmd-lang');
  const initLang = saved || 'en';

  applyTranslations(initLang);

  $('#lang-toggle')?.addEventListener('click', () => {
    const next = currentLang === 'en' ? 'es' : 'en';
    applyTranslations(next);
    localStorage.setItem('dmd-lang', next);
  });
}

/* ══════════════════════════════════
   CUSTOM CURSOR (adapted from vault: cursor-personalizado.md)
   Color adapted: gold → off-white for DMD
══════════════════════════════════ */
function initCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return; /* skip touch devices */

  const dot  = $('#cursor-dot');
  const ring = $('#cursor-ring');
  if (!dot || !ring) return;

  let rx = 0, ry = 0;
  let dotX = 0, dotY = 0;

  document.addEventListener('mousemove', (e) => {
    dotX = e.clientX;
    dotY = e.clientY;
    dot.style.left = dotX + 'px';
    dot.style.top  = dotY + 'px';
    document.body.classList.add('cursor-ready');
  });

  /* Ring follows with lerp */
  (function lerp() {
    rx += (dotX - rx) * 0.12;
    ry += (dotY - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(lerp);
  })();

  /* Magnetic expand on interactive elements */
  const interactors = 'a, button, .portfolio-item, .faq-q, .btn-primary, .btn-secondary';
  $$('body').forEach(() => {
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactors)) {
        ring.style.width  = '46px';
        ring.style.height = '46px';
        ring.style.borderColor = 'rgba(234,234,234,0.55)';
      }
    });
    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactors)) {
        ring.style.width  = '32px';
        ring.style.height = '32px';
        ring.style.borderColor = 'rgba(234,234,234,0.35)';
      }
    });
  });

  /* Hide on scroll-over nav (looks cleaner) */
  document.addEventListener('mouseleave', () => {
    dot.style.opacity  = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity  = '1';
    ring.style.opacity = '1';
  });
}

/* ══════════════════════════════════
   NAV — transparent → opaque on scroll
══════════════════════════════════ */
function initNav() {
  const nav = $('#nav');
  if (!nav) return;

  const io = new IntersectionObserver(
    ([entry]) => nav.classList.toggle('scrolled', !entry.isIntersecting),
    { threshold: 0, rootMargin: '-80px 0px 0px 0px' }
  );
  const sentinel = document.createElement('div');
  sentinel.style.cssText = 'position:absolute;top:120px;height:1px;width:1px;pointer-events:none;';
  document.body.prepend(sentinel);
  io.observe(sentinel);
}

/* ══════════════════════════════════
   REVEAL (from vault: reveal-scroll.md)
══════════════════════════════════ */
function initReveals() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    $$('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.05 });

  $$('.reveal').forEach(el => io.observe(el));
}

/* ══════════════════════════════════
   PORTFOLIO — hover video + cursor follower + modal trigger
══════════════════════════════════ */
function initPortfolio() {
  const items    = $$('.portfolio-item');
  const follower = $('#portfolio-follower');
  const modal    = $('#modal');

  if (!items.length) return;

  items.forEach(item => {
    /* Cursor follower */
    item.addEventListener('mouseenter', () => {
      if (!follower) return;
      const lang = currentLang;
      follower.textContent = item.getAttribute(`data-project-${lang}`) || item.getAttribute('data-project-en') || '';
      follower.classList.add('active');
    });

    item.addEventListener('mousemove', (e) => {
      if (!follower) return;
      follower.style.left = (e.clientX + 24) + 'px';
      follower.style.top  = e.clientY + 'px';
    });

    item.addEventListener('mouseleave', () => {
      if (!follower) return;
      follower.classList.remove('active');
    });

    /* Click → open modal */
    item.addEventListener('click', () => openModal(item));
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(item); }
    });
  });

  /* Close modal */
  $('#modal-close')?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(item) {
  const modal     = $('#modal');
  const titleEl   = $('#modal-title');
  const tagEl     = $('#modal-tag');
  if (!modal) return;

  const lang    = currentLang;
  const name    = item.getAttribute(`data-project-${lang}`) || item.getAttribute('data-project-en') || '';
  const cat     = item.getAttribute('data-category') || '';

  if (titleEl) titleEl.textContent = name;
  if (tagEl)   tagEl.textContent   = cat;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = $('#modal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ══════════════════════════════════
   FAQ ACCORDION
══════════════════════════════════ */
function initFaq() {
  $$('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-q');
    const ans = item.querySelector('.faq-a');
    if (!btn || !ans) return;

    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      /* Close all others */
      $$('.faq-q[aria-expanded="true"]').forEach(openBtn => {
        if (openBtn !== btn) {
          openBtn.setAttribute('aria-expanded', 'false');
          openBtn.closest('.faq-item')?.querySelector('.faq-a')?.classList.remove('open');
        }
      });

      /* Toggle current */
      btn.setAttribute('aria-expanded', String(!isOpen));
      ans.classList.toggle('open', !isOpen);
    });
  });
}

/* ══════════════════════════════════
   GSAP — hero reveal + scroll parallax
══════════════════════════════════ */
function initGsap() {
  if (typeof gsap === 'undefined') return;
  if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

  /* Hero text stagger */
  gsap.fromTo('.hero-tag',
    { opacity: 0, y: 16 },
    { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
  );

  gsap.fromTo('.hero-line',
    { opacity: 0, y: 44 },
    { opacity: 1, y: 0, duration: 1.1, stagger: 0.13, ease: 'power3.out', delay: 0.45 }
  );

  gsap.fromTo('.hero-cta',
    { opacity: 0 },
    { opacity: 1, duration: 1.0, ease: 'power2.out', delay: 1.3 }
  );

  /* Scroll parallax on portfolio media — subtle scale + translateY */
  if (typeof ScrollTrigger !== 'undefined') {
    $$('.media-still, .media-video').forEach(media => {
      gsap.to(media, {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: media.closest('.portfolio-item'),
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        }
      });
    });
  }
}

/* ══════════════════════════════════
   SMOOTH ANCHOR SCROLL
══════════════════════════════════ */
function initSmoothScroll() {
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* ══════════════════════════════════
   INIT
══════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initI18n();
  initCursor();
  initNav();
  initReveals();
  initPortfolio();
  initFaq();
  initSmoothScroll();
});

/* GSAP needs to run after all scripts loaded */
window.addEventListener('load', () => {
  initGsap();
});
