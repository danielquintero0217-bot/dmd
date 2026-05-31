/* ═══════════════════════════════════════════════════
   DMD — app.js  (v2)
   i18n · cursor · nav · reveals · hero · portfolio+filter ·
   modal · sheets (calendly/proposal) · faq · gsap
   ═══════════════════════════════════════════════════ */

/* ── TRANSLATIONS ── */
const translations = {
  en: {
    nav_work: 'Work', nav_about: 'About', nav_contact: 'Contact',

    hero_tag: 'Audiovisual Production · Cali, Colombia',
    hero_founders: 'Diego Zapata — Mateo Barreto — Daniel Quintero',
    hero_tagline: 'High-end motion for fashion & sports — from Cali to the world.',
    hero_cta: 'View Work',
    hero_cta2: 'Start a Project',

    brands_label: 'Trusted By',

    portfolio_tag: 'Selected Work',
    portfolio_title: 'Our Projects',
    filter_all: 'All',
    filter_brand: 'Brand Films',
    filter_fashion: 'Fashion',
    filter_streaming: 'Streaming',
    filter_campaign: 'Campaigns',

    modal_role: 'Role', modal_year: 'Year',
    modal_cta: 'Start a project like this →',

    about_tag: 'About DMD',
    about_title: 'We make brands move.',
    about_desc: 'DMD is a high-end audiovisual production studio based in Cali, Colombia. We create brand films, fashion editorials and campaigns for brands worldwide. Producing from Colombia lets us deliver world-class craft at a fraction of US and European rates — top-tier quality, accessible pricing.',
    about_desc2: 'With diverse in-house gear and eight years of experience, we handle each project end to end — from concept to final color.',
    stat_years: 'Years of Experience',
    stat_brands: 'Brands Worldwide',
    stat_inhouse: 'In-House Production',
    team_tag: 'The Studio',
    role_diego: 'Creative Director · Cinematographer',
    role_mateo: 'Creative Director · Cinematographer',
    role_daniel: 'Creative Director · Editor',

    cta_tag: "Let's Work Together",
    cta_title_line1: "Let's create",
    cta_title_line2: 'together.',
    cta_sub: 'High-end production. Fast turnaround. World-class results — at Colombian rates.',
    cta_book: 'Schedule a Call',
    cta_quote: 'Request a Proposal',
    cta_note: 'Prefer email? <a href="mailto:danielquintero0217@gmail.com">danielquintero0217@gmail.com</a>',
    cta_media_label: 'Showreel',
    cta_media_sub: '2026',

    sched_tag: 'Book a Discovery Call',
    sched_title: "Let's talk about your project.",
    sched_fallback: 'Calendar not loading? Email us at <a href="mailto:danielquintero0217@gmail.com">danielquintero0217@gmail.com</a>',

    prop_tag: 'Request an Artistic Proposal',
    prop_title: 'Tell us what you have in mind.',
    prop_sub: "No call needed. Send us a brief and we'll come back with a tailored creative proposal.",
    form_name: 'Name', form_email: 'Email', form_brand: 'Brand / Company',
    form_type: 'Project type', form_budget: 'Estimated budget (USD)',
    form_message: 'What do you have in mind?', form_send: 'Send Brief',
    opt_brand: 'Brand Film', opt_fashion: 'Fashion / Editorial',
    opt_streaming: 'Streaming', opt_campaign: 'Campaign', opt_other: 'Other',
    opt_unsure: 'Not sure yet',
    form_sending: 'Sending…',
    form_ok: 'Thank you — your brief is on its way. We\'ll be in touch shortly.',
    form_err: 'Something went wrong. Please email us at danielquintero0217@gmail.com',

    faq_tag: 'FAQ',
    faq_title: 'Common Questions',
    faq_nudge: 'Still unsure? <a href="mailto:danielquintero0217@gmail.com">Write to us.</a>',
    faq_q1: 'Where are you based?',
    faq_a1: 'We are based in Cali, Colombia, and work with clients across the US, Europe and Latin America. Our team travels for production when a project calls for it.',
    faq_q2: 'Do you work with international clients?',
    faq_a2: "Yes — that's our focus. We're set up for remote collaboration and have extensive experience with brands in North America, Europe and Latin America.",
    faq_q3: 'How do payments work?',
    faq_a3: 'We invoice in USD or EUR. We ask for 50% upfront to lock the project in, and the remaining 50% on delivery of the final work.',
    faq_q4: 'What are your rates?',
    faq_a4: "Every project is unique. Because we produce from Colombia, we deliver top-tier quality at noticeably better rates than US or European studios. Tell us your brief and we'll quote it.",
    faq_q5: 'How do we start a project?',
    faq_a5: 'Book a discovery call or send us a brief through "Request a Proposal". We\'ll review it and come back with a tailored creative proposal.',

    footer_tagline: 'High-End Audiovisual Production',
    footer_legal: '© 2026 DMD. All rights reserved.',
  },

  es: {
    nav_work: 'Trabajo', nav_about: 'Nosotros', nav_contact: 'Contacto',

    hero_tag: 'Producción Audiovisual · Cali, Colombia',
    hero_founders: 'Diego Zapata — Mateo Barreto — Daniel Quintero',
    hero_tagline: 'Motion de alto nivel para moda y deporte — desde Cali para el mundo.',
    hero_cta: 'Ver Trabajo',
    hero_cta2: 'Iniciar Proyecto',

    brands_label: 'Confían en Nosotros',

    portfolio_tag: 'Trabajo Selecto',
    portfolio_title: 'Nuestros Proyectos',
    filter_all: 'Todos',
    filter_brand: 'Films de Marca',
    filter_fashion: 'Moda',
    filter_streaming: 'Streaming',
    filter_campaign: 'Campañas',

    modal_role: 'Rol', modal_year: 'Año',
    modal_cta: 'Quiero un proyecto así →',

    about_tag: 'Sobre DMD',
    about_title: 'Hacemos que las marcas se muevan.',
    about_desc: 'DMD es un estudio de producción audiovisual de alto nivel con sede en Cali, Colombia. Creamos films de marca, editoriales de moda y campañas para marcas de todo el mundo. Producir desde Colombia nos permite entregar calidad de clase mundial a una fracción de las tarifas de EE. UU. y Europa — máxima calidad, precio accesible.',
    about_desc2: 'Con equipos propios diversos y ocho años de experiencia, manejamos cada proyecto de principio a fin — del concepto al color final.',
    stat_years: 'Años de Experiencia',
    stat_brands: 'Marcas en el Mundo',
    stat_inhouse: 'Producción Propia',
    team_tag: 'El Estudio',
    role_diego: 'Director Creativo · Cinematógrafo',
    role_mateo: 'Director Creativo · Cinematógrafo',
    role_daniel: 'Director Creativo · Editor',

    cta_tag: 'Trabajemos Juntos',
    cta_title_line1: 'Creemos algo',
    cta_title_line2: 'juntos.',
    cta_sub: 'Producción de alto nivel. Entregas rápidas. Resultados de clase mundial — a tarifas colombianas.',
    cta_book: 'Agendar Llamada',
    cta_quote: 'Pedir una Propuesta',
    cta_note: '¿Prefieres correo? <a href="mailto:danielquintero0217@gmail.com">danielquintero0217@gmail.com</a>',
    cta_media_label: 'Showreel',
    cta_media_sub: '2026',

    sched_tag: 'Agenda una Llamada',
    sched_title: 'Hablemos de tu proyecto.',
    sched_fallback: '¿No carga el calendario? Escríbenos a <a href="mailto:danielquintero0217@gmail.com">danielquintero0217@gmail.com</a>',

    prop_tag: 'Pide una Propuesta Artística',
    prop_title: 'Cuéntanos qué tienes en mente.',
    prop_sub: 'Sin llamada. Envíanos un brief y te devolvemos una propuesta creativa a tu medida.',
    form_name: 'Nombre', form_email: 'Correo', form_brand: 'Marca / Empresa',
    form_type: 'Tipo de proyecto', form_budget: 'Presupuesto estimado (USD)',
    form_message: '¿Qué tienes en mente?', form_send: 'Enviar Brief',
    opt_brand: 'Film de Marca', opt_fashion: 'Moda / Editorial',
    opt_streaming: 'Streaming', opt_campaign: 'Campaña', opt_other: 'Otro',
    opt_unsure: 'Aún no estoy seguro',
    form_sending: 'Enviando…',
    form_ok: 'Gracias — tu brief va en camino. Te contactamos muy pronto.',
    form_err: 'Algo salió mal. Escríbenos a danielquintero0217@gmail.com',

    faq_tag: 'Preguntas',
    faq_title: 'Preguntas Frecuentes',
    faq_nudge: '¿Aún con dudas? <a href="mailto:danielquintero0217@gmail.com">Escríbenos.</a>',
    faq_q1: '¿Dónde están ubicados?',
    faq_a1: 'Estamos en Cali, Colombia, y trabajamos con clientes de EE. UU., Europa y Latinoamérica. Nuestro equipo viaja para producir cuando el proyecto lo amerita.',
    faq_q2: '¿Trabajan con clientes internacionales?',
    faq_a2: 'Sí — es nuestro foco. Estamos listos para colaboración remota y tenemos amplia experiencia con marcas de Norteamérica, Europa y Latinoamérica.',
    faq_q3: '¿Cómo funcionan los pagos?',
    faq_a3: 'Facturamos en USD o EUR. Pedimos el 50% por adelantado para asegurar el proyecto, y el 50% restante a la entrega del trabajo final.',
    faq_q4: '¿Cuáles son sus tarifas?',
    faq_a4: 'Cada proyecto es único. Como producimos desde Colombia, entregamos máxima calidad a tarifas notablemente mejores que estudios de EE. UU. o Europa. Cuéntanos tu brief y lo cotizamos.',
    faq_q5: '¿Cómo iniciamos un proyecto?',
    faq_a5: 'Agenda una llamada o envíanos un brief en "Pedir una Propuesta". Lo revisamos y te devolvemos una propuesta creativa a tu medida.',

    footer_tagline: 'Producción Audiovisual de Alto Nivel',
    footer_legal: '© 2026 DMD. Todos los derechos reservados.',
  }
};

/* ── STATE ── */
let currentLang = 'en';

/* ── UTILS ── */
function $(sel, ctx = document) { return ctx.querySelector(sel); }
function $$(sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; }

/* ══════════════════════════════════
   i18n
══════════════════════════════════ */
function applyTranslations(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);

  $$('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = translations[lang][key];
    if (val === undefined) return;
    /* strings with markup (links) → innerHTML, otherwise textContent */
    if (val.indexOf('<') !== -1) el.innerHTML = val;
    else el.textContent = val;
  });

  $$('.lang-opt').forEach(btn => btn.classList.remove('active'));
  $(`.lang-${lang}`)?.classList.add('active');

  /* refresh portfolio follower if active */
  const follower = $('#portfolio-follower');
  if (follower && follower.classList.contains('active')) {
    const hovered = $('.portfolio-item:hover');
    if (hovered) follower.textContent = hovered.getAttribute(`data-project-${lang}`) || hovered.getAttribute('data-project-en') || '';
  }

  /* re-run the hero typewriter with the freshly-swapped tagline text */
  if (typeof window.__dmdRetypeTagline === 'function') window.__dmdRetypeTagline();
}

function initI18n() {
  const saved = localStorage.getItem('dmd-lang');
  applyTranslations(saved || 'en');

  $('#lang-toggle')?.addEventListener('click', () => {
    const next = currentLang === 'en' ? 'es' : 'en';
    localStorage.setItem('dmd-lang', next);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { applyTranslations(next); return; }
    /* brief fade-out → swap → fade-in for a smoother transition */
    document.body.classList.add('lang-swapping');
    setTimeout(() => {
      applyTranslations(next);
      document.body.classList.remove('lang-swapping');
    }, 260);
  });
}

/* ══════════════════════════════════
   CUSTOM CURSOR
══════════════════════════════════ */
function initCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const dot  = $('#cursor-dot');
  const ring = $('#cursor-ring');
  if (!dot || !ring) return;

  let rx = 0, ry = 0, dotX = 0, dotY = 0;

  document.addEventListener('mousemove', (e) => {
    dotX = e.clientX; dotY = e.clientY;
    dot.style.left = dotX + 'px';
    dot.style.top  = dotY + 'px';
    document.body.classList.add('cursor-ready');
  });

  (function lerp() {
    rx += (dotX - rx) * 0.12;
    ry += (dotY - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(lerp);
  })();

  const interactors = 'a, button, .portfolio-item, .faq-q, .filter-btn, input, select, textarea';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactors)) {
      ring.style.width = '46px'; ring.style.height = '46px';
      ring.style.borderColor = 'rgba(234,234,234,0.55)';
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactors)) {
      ring.style.width = '32px'; ring.style.height = '32px';
      ring.style.borderColor = 'rgba(234,234,234,0.35)';
    }
  });
  document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1'; });
}

/* ══════════════════════════════════
   NAV
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
   REVEAL
══════════════════════════════════ */
function initReveals() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    $$('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.05 });
  $$('.reveal').forEach(el => io.observe(el));
}

/* ══════════════════════════════════
   HERO BACKGROUND VIDEO (optional drop-in)
   Looks for assets/showreel.mp4 — if present, fades it in (fetch/Blob for seeking-safe).
══════════════════════════════════ */
function initShowreel(videoEl, src) {
  if (!videoEl) return;
  fetch(src, { method: 'HEAD' })
    .then(r => {
      if (!r.ok) return;
      videoEl.src = src;
      videoEl.play().catch(() => {});
      videoEl.addEventListener('loadeddata', () => videoEl.classList.add('loaded'), { once: true });
    })
    .catch(() => { /* no showreel yet — animated placeholder stays */ });
}

/* ══════════════════════════════════
   PORTFOLIO — filter + hover follower + modal
══════════════════════════════════ */
function initPortfolio() {
  const grid     = $('#portfolio-grid');
  const items    = $$('.portfolio-item');
  const follower = $('#portfolio-follower');
  if (!items.length) return;

  /* Filters */
  $$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-filter');
      $$('.filter-btn').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
      btn.classList.add('active'); btn.setAttribute('aria-selected', 'true');

      if (grid) grid.style.opacity = '0';
      setTimeout(() => {
        items.forEach(item => {
          const match = cat === 'all' || item.getAttribute('data-cat') === cat;
          item.classList.toggle('hide', !match);
        });
        if (grid) grid.style.opacity = '1';
        if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
      }, 220);
    });
  });
  if (grid) grid.style.transition = 'opacity .22s ease';

  /* Hover follower + modal */
  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      if (!follower) return;
      follower.textContent = item.getAttribute(`data-project-${currentLang}`) || item.getAttribute('data-project-en') || '';
      follower.classList.add('active');
    });
    item.addEventListener('mousemove', (e) => {
      if (!follower) return;
      follower.style.left = (e.clientX + 24) + 'px';
      follower.style.top  = e.clientY + 'px';
    });
    item.addEventListener('mouseleave', () => { if (follower) follower.classList.remove('active'); });

    item.addEventListener('click', () => openModal(item));
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(item); }
    });
  });

  $('#modal-close')?.addEventListener('click', closeModal);
  $('#modal')?.addEventListener('click', (e) => { if (e.target === $('#modal')) closeModal(); });
  $('#modal-cta')?.addEventListener('click', () => {
    closeModal();
    setTimeout(() => $('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 200);
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeModal(); closeSheets(); } });
}

function openModal(item) {
  const modal = $('#modal');
  if (!modal) return;
  const lang = currentLang;
  const g = (k) => item.getAttribute(`data-${k}-${lang}`) || item.getAttribute(`data-${k}-en`) || '';

  $('#modal-title').textContent = g('project');
  $('#modal-tag').textContent   = item.getAttribute('data-category') || '';
  $('#modal-desc').textContent  = g('desc');
  $('#modal-role').textContent  = g('role');
  $('#modal-year').textContent  = item.getAttribute('data-year') || '';

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = $('#modal');
  if (!modal || !modal.classList.contains('open')) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ══════════════════════════════════
   SHEETS — schedule (Calendly) + proposal (Web3Forms)
══════════════════════════════════ */
let calendlyLoaded = false;
function loadCalendly() {
  if (calendlyLoaded) return;
  calendlyLoaded = true;
  const s = document.createElement('script');
  s.src = 'https://assets.calendly.com/assets/external/widget.js';
  s.async = true;
  document.body.appendChild(s);
}

function openSheet(id) {
  const sheet = document.getElementById(id);
  if (!sheet) return;
  sheet.classList.add('open');
  sheet.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  if (id === 'schedule-modal') loadCalendly();
}

function closeSheets() {
  $$('.sheet-overlay.open').forEach(s => {
    s.classList.remove('open');
    s.setAttribute('aria-hidden', 'true');
  });
  document.body.style.overflow = '';
}

function initSheets() {
  $('#open-schedule')?.addEventListener('click', () => openSheet('schedule-modal'));
  $('#open-proposal')?.addEventListener('click', () => openSheet('proposal-modal'));
  $$('[data-close-sheet]').forEach(b => b.addEventListener('click', closeSheets));
  $$('.sheet-overlay').forEach(s => s.addEventListener('click', (e) => { if (e.target === s) closeSheets(); }));

  /* Proposal form → Web3Forms */
  const form = $('#proposal-form');
  const status = $('#form-status');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (status) { status.className = 'form-status'; status.textContent = translations[currentLang].form_sending; }
      try {
        const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
        const json = await res.json();
        if (json.success) {
          if (status) { status.className = 'form-status ok'; status.textContent = translations[currentLang].form_ok; }
          form.reset();
        } else {
          if (status) { status.className = 'form-status error'; status.textContent = translations[currentLang].form_err; }
        }
      } catch (err) {
        if (status) { status.className = 'form-status error'; status.textContent = translations[currentLang].form_err; }
      }
    });
  }
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
      $$('.faq-q[aria-expanded="true"]').forEach(openBtn => {
        if (openBtn !== btn) {
          openBtn.setAttribute('aria-expanded', 'false');
          openBtn.closest('.faq-item')?.querySelector('.faq-a')?.classList.remove('open');
        }
      });
      btn.setAttribute('aria-expanded', String(!isOpen));
      ans.classList.toggle('open', !isOpen);
    });
  });
}

/* ══════════════════════════════════
   GSAP — hero wordmark reveal + parallax
══════════════════════════════════ */
function initGsap() {
  if (typeof gsap === 'undefined') return;
  if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    gsap.set('.hero-tag, .wm-letter, .hero-founders, .hero-tagline, .hero-actions', { opacity: 1, y: 0, filter: 'blur(0px)' });
    return;
  }

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  tl.fromTo('.hero-tag', { opacity: 0, y: 14, filter: 'blur(6px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, delay: 0.2 })
    .fromTo('.wm-letter', { opacity: 0, yPercent: 22, filter: 'blur(12px)' }, { opacity: 1, yPercent: 0, filter: 'blur(0px)', duration: 1.1, stagger: 0.12 }, '-=0.3')
    .fromTo('.hero-founders', { opacity: 0, y: 16, filter: 'blur(5px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.9 }, '-=0.5')
    .fromTo('.hero-tagline', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.9 }, '-=0.6')
    .fromTo('.hero-actions', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5');

  /* Subtle hero drift on scroll — moves the whole block as a unit so the giant
     wordmark never collides with the founders line below it. */
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.to('.hero-inner', {
      yPercent: 8, opacity: 0.55, ease: 'none',
      scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1 }
    });
    $$('.media-still, .media-video').forEach(media => {
      gsap.to(media, {
        yPercent: -6, ease: 'none',
        scrollTrigger: { trigger: media.closest('.portfolio-item'), start: 'top bottom', end: 'bottom top', scrub: 1.2 }
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
      const href = a.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* ══════════════════════════════════
   MAGNETIC BUTTONS + PORTFOLIO FOLLOW
══════════════════════════════════ */
function initMagnetic() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  $$('.btn-primary, .btn-secondary, .hero-cta, .filter-btn, .modal-cta, .nav-logo').forEach(el => {
    el.style.transition = 'transform .35s cubic-bezier(.25,.46,.45,.94), color .3s ease, border-color .3s ease, background .3s ease';
    el.style.willChange = 'transform';
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const mx = e.clientX - (r.left + r.width / 2);
      const my = e.clientY - (r.top + r.height / 2);
      const clamp = (v) => Math.max(-10, Math.min(10, v));
      el.style.transform = `translate(${clamp(mx * 0.3)}px, ${clamp(my * 0.3)}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });

  /* Portfolio cards: gentle drift toward the cursor */
  $$('.portfolio-item').forEach(item => {
    const media = item.querySelector('.media-wrapper');
    if (!media) return;
    media.style.transition = 'transform .45s cubic-bezier(.25,.46,.45,.94)';
    item.addEventListener('mousemove', (e) => {
      const r = item.getBoundingClientRect();
      const mx = e.clientX - (r.left + r.width / 2);
      const my = e.clientY - (r.top + r.height / 2);
      media.style.transform = `translate(${mx * 0.04}px, ${my * 0.05}px)`;
    });
    item.addEventListener('mouseleave', () => { media.style.transform = ''; });
  });
}

/* ══════════════════════════════════
   FLOATING PARTICLES (subtle, white)
══════════════════════════════════ */
function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const ctx = canvas.getContext('2d');
  const coarse = window.matchMedia('(pointer: coarse)').matches;
  let w, h, dpr, particles = [], raf;

  const count = () => coarse ? 20 : Math.min(46, Math.round(window.innerWidth / 34));

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.width = window.innerWidth * dpr;
    h = canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
  }
  function make() {
    particles = [];
    for (let i = 0, n = count(); i < n; i++) {
      particles.push({
        x: Math.random() * w, y: Math.random() * h,
        r: (Math.random() * 1.4 + 0.4) * dpr,
        vx: (Math.random() - 0.5) * 0.12 * dpr,
        vy: (-Math.random() * 0.18 - 0.04) * dpr,
        a: Math.random() * 0.1 + 0.05
      });
    }
  }
  function tick() {
    ctx.clearRect(0, 0, w, h);
    for (const p of particles) {
      p.x += p.vx; p.y += p.vy;
      if (p.y < -12) { p.y = h + 12; p.x = Math.random() * w; }
      if (p.x < -12) p.x = w + 12;
      if (p.x > w + 12) p.x = -12;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,' + p.a + ')';
      ctx.fill();
    }
    raf = requestAnimationFrame(tick);
  }

  resize(); make(); tick();
  requestAnimationFrame(() => canvas.classList.add('ready'));

  let rt;
  window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { resize(); make(); }, 200); });
  document.addEventListener('visibilitychange', () => {
    cancelAnimationFrame(raf);
    if (!document.hidden) raf = requestAnimationFrame(tick);
  });
}

/* ══════════════════════════════════
   HERO TAGLINE TYPEWRITER (i18n-aware)
══════════════════════════════════ */
function initTypewriter() {
  const el = $('.hero-tagline');
  if (!el) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let timer = null;

  function type() {
    if (timer) { clearInterval(timer); timer = null; }
    const text = (translations[currentLang] && translations[currentLang].hero_tagline) || el.textContent;
    if (reduce) { el.textContent = text; return; }
    el.textContent = '';
    const node = document.createTextNode('');
    const caret = document.createElement('span');
    caret.className = 'tw-cursor';
    caret.setAttribute('aria-hidden', 'true');
    el.appendChild(node);
    el.appendChild(caret);
    let i = 0;
    timer = setInterval(() => {
      node.nodeValue = text.slice(0, ++i);
      if (i >= text.length) {
        clearInterval(timer); timer = null;
        caret.classList.add('done');
      }
    }, 38);
  }

  /* exposed so applyTranslations can re-type after a language swap */
  window.__dmdRetypeTagline = type;

  if (reduce) return;
  el.textContent = '';            /* clear until the entrance reveals it */
  setTimeout(type, 1150);         /* timed to the GSAP hero entrance */
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
  initSheets();
  initFaq();
  initSmoothScroll();
  initMagnetic();
  initParticles();
  initTypewriter();
  initShowreel($('#hero-video'), 'assets/showreel.mp4');
  initShowreel($('#cta-video'), 'assets/showreel.mp4');
});

window.addEventListener('load', () => { initGsap(); });
