/* ── DATA ─────────────────────────────── */
const PROFILE = {
  name:     "Althaf Dhia Hamid",
  age:      15,
  role:     "Frontend Developer",
  location: "Indonesia",
  skills: [
    { name: "Front End Dev",  level: 92, icon: "🌐" },
    { name: "JavaScript",     level: 87, icon: "⚡" },
    { name: "PHP",            level: 85, icon: "🐘" },
    { name: "Laravel",        level: 82, icon: "🔴" },
    { name: "ReactJS",        level: 80, icon: "⚛️" },
    { name: "UI/UX Design",   level: 85, icon: "🎨" },
    { name: "Visual Design",  level: 80, icon: "✏️" },
    { name: "Cisco",          level: 72, icon: "📡" },
  ],
  projects: [
    {
      title: "Destentation",
      desc:  "Professional web agency landing page — showcasing web development services, portfolios, and client acquisition flow. Clean, conversion-focused design.",
      stack: ["Laravel", "Tailwind CSS", "MySQL"],
      year:  2025,
      num:   "01",
      color: "#7c3aed",
      tag:   "Agency",
      url:   "https://destentation.com",
    },
    {
      title: "D-Course",
      desc:  "Full-stack online learning platform for programming. Students can enroll, watch lessons, track progress, and get certified — all in one place.",
      stack: ["ReactJS", "PHP", "MySQL", "Tailwind CSS"],
      year:  2025,
      num:   "02",
      color: "#2563eb",
      tag:   "EdTech",
      url:   "https://d-course.id",
    },
    {
      title: "Cretecs",
      desc:  "Second-hand marketplace where users can list, browse, and buy used goods. Complete with auth, listings management, and a smooth checkout flow.",
      stack: ["Laravel", "MySQL", "Tailwind CSS"],
      year:  2024,
      num:   "03",
      color: "#d97706",
      tag:   "E-Commerce",
      url:   "https://cretecs.com",
    },
    {
      title: "UI/UX Contributor",
      desc:  "Open-source design contributor — crafting interfaces, component systems, and UX flows for community-driven web projects and tools.",
      stack: ["Figma", "HTML/CSS", "JavaScript"],
      year:  2024,
      num:   "04",
      color: "#059669",
      tag:   "Design",
      url:   "https://github.com/hanif",
    },
    {
      title: "HIUNetwork",
      desc:  "Minecraft server founded and operated solo from 2021–2023. Built custom plugins, managed infrastructure, handled server networking and moderation — all dari nol.",
      stack: ["Minecraft", "Java", "Server Mgmt", "Networking"],
      year:  "2021–2023",
      num:   "05",
      color: "#7c3aed",
      tag:   "Server",
      url:   "#",
    },
    {
      title: "HIUGanz",
      desc:  "Co-founded Minecraft server bareng StromGanz di 2022. Kolaborasi ngebangun komunitas gaming dengan full backend server management dan infrastructure sendiri.",
      stack: ["Minecraft", "Java", "Co-Founder", "Community"],
      year:  2022,
      num:   "06",
      color: "#f59e0b",
      tag:   "Collab",
      url:   "#",
    },
  ],
};

/* ── CODE CARD ────────────────────────── */
function buildCodeCard() {
  const k = t => `<span class="t-k">${t}</span>`;
  const v = t => `<span class="t-v">${t}</span>`;
  const s = t => `<span class="t-s">"${t}"</span>`;
  const n = t => `<span class="t-n">${t}</span>`;
  const p = t => `<span class="t-p">${t}</span>`;
  const c = t => `<span class="t-c">${t}</span>`;

  const lines = [
    c('// ─── Developer Profile ────────────────────'),
    '',
    `${k('const')} ${v('name')}     ${p('=')} ${s(PROFILE.name)}${p(';')}`,
    `${k('const')} ${v('age')}      ${p('=')} ${n(PROFILE.age)}${p(';')}`,
    `${k('const')} ${v('role')}     ${p('=')} ${s(PROFILE.role)}${p(';')}`,
    `${k('const')} ${v('location')} ${p('=')} ${s(PROFILE.location)}${p(';')}`,
    '',
    `${k('const')} ${v('skills')} ${p('= [')}`,
    `<span class="t-i">${s('JavaScript')}${p(', ')}${s('PHP')}${p(', ')}${s('Laravel')}${p(',')}</span>`,
    `<span class="t-i">${s('Flutter')}${p(', ')}${s('UI/UX')}${p(', ')}${s('Dart')}</span>`,
    `${p('];')}`,
    '',
    c('// status: building something great') + ' <span class="caret"></span>',
  ];

  const el = document.getElementById('cc-body');
  if (!el) return;
  el.innerHTML = lines.map(l =>
    `<div style="min-height:1.6em;line-height:2.1">${l || '&nbsp;'}</div>`
  ).join('');
}

/* ── TECH GRID ────────────────────────── */
function buildTechGrid() {
  const el = document.getElementById('tech-grid');
  if (!el) return;

  el.innerHTML = PROFILE.skills.map(s => `
    <div class="tg-item" data-name="${s.name}" data-level="${s.level}">
      <div class="tg-icon">${s.icon}</div>
      <div class="tg-name">${s.name}</div>
      <div class="tg-level">${s.level}%</div>
      <div class="tg-ring">
        <svg viewBox="0 0 36 36" class="tg-svg">
          <circle cx="18" cy="18" r="15" fill="none" stroke="rgba(255,255,255,.05)" stroke-width="2"/>
          <circle class="tg-arc" cx="18" cy="18" r="15" fill="none"
            stroke="url(#tggrad)" stroke-width="2"
            stroke-linecap="round"
            stroke-dasharray="0 94.2"
            transform="rotate(-90 18 18)"/>
          <defs>
            <linearGradient id="tggrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#a78bfa"/>
              <stop offset="100%" stop-color="#7c3aed"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  `).join('');

  /* stagger pop-in when section enters viewport */
  const section = document.getElementById('skills');
  const items   = el.querySelectorAll('.tg-item');
  let animated  = false;

  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !animated) {
      animated = true;
      items.forEach((item, i) => {
        setTimeout(() => {
          item.classList.add('tg-visible');
          /* animate the arc ring */
          const arc = item.querySelector('.tg-arc');
          const pct = +item.dataset.level;
          setTimeout(() => {
            arc.style.strokeDasharray = `${(pct / 100) * 94.2} 94.2`;
          }, 100);
        }, i * 80);
      });
      obs.disconnect();
    }
  }, { threshold: 0.15 });
  if (section) obs.observe(section);
}

/* ── HORIZONTAL PROJECTS ──────────────── */
function buildProjects() {
  const el = document.getElementById('proj-hscroll');
  if (!el) return;

  el.innerHTML = PROFILE.projects.map((p) => `
    <div class="ph-card" data-color="${p.color}" data-url="${p.url || '#'}" style="cursor:pointer;">
      <div class="ph-line" style="background: linear-gradient(to right, ${p.color}, ${p.color}88)"></div>
      <div class="ph-glow" style="background: radial-gradient(ellipse 80% 60% at 50% 100%, ${p.color}18, transparent)"></div>
      <div class="ph-top">
        <span class="ph-num">${p.num}</span>
        <span class="ph-pill" style="color:${p.color}; border-color:${p.color}44; background:${p.color}11">${p.tag}</span>
      </div>
      <p class="ph-year">${p.year}</p>
      <h3 class="ph-title">${p.title}</h3>
      <p class="ph-desc">${p.desc}</p>
      <div class="ph-stack">
        ${p.stack.map(t => `<span class="ph-tag">${t}</span>`).join('')}
      </div>
      <div class="ph-visit-btn" style="border-color:${p.color}44; color:${p.color}">
        Visit Project ↗
      </div>
    </div>
  `).join('');

  /* drag to scroll */
  let isDown = false, startX, scrollLeft;
  el.addEventListener('mousedown', e => {
    isDown = true;
    el.classList.add('dragging');
    startX = e.pageX - el.offsetLeft;
    scrollLeft = el.scrollLeft;
  });
  el.addEventListener('mouseleave', () => { isDown = false; el.classList.remove('dragging'); });
  el.addEventListener('mouseup',    () => { isDown = false; el.classList.remove('dragging'); });
  el.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    el.scrollLeft = scrollLeft - (x - startX) * 1.4;
  });

  /* click to visit project website */
  el.querySelectorAll('.ph-card').forEach(card => {
    card.addEventListener('click', e => {
      /* don't navigate if user was dragging */
      if (el.classList.contains('dragging')) return;
      const url = card.dataset.url;
      if (url && url !== '#') window.open(url, '_blank');
    });
  });

  /* 3D tilt on cards */
  el.querySelectorAll('.ph-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      const cx = r.width / 2;
      const cy = r.height / 2;
      const tiltX = ((y - cy) / cy) * -8;
      const tiltY = ((x - cx) / cx) * 8;
      card.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* ── CURSOR ───────────────────────────── */
function initCursor() {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  document.addEventListener('mousemove', e => {
    dot.style.left = e.clientX + 'px';
    dot.style.top  = e.clientY + 'px';
    ring.style.left = e.clientX + 'px';
    ring.style.top  = e.clientY + 'px';
  });

  document.querySelectorAll('a, .ph-card, .tg-item').forEach(el => {
    el.addEventListener('mouseenter', () => { dot.style.width = '20px'; dot.style.height = '20px'; });
    el.addEventListener('mouseleave', () => { dot.style.width = '10px'; dot.style.height = '10px'; });
  });
}

/* ── MOUSE GLOW ───────────────────────── */
function initMouseGlow() {
  const glow = document.getElementById('mouse-glow');
  if (!glow) return;
  let mx = 0, my = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  let raf;
  function update() {
    glow.style.left = mx + 'px';
    glow.style.top  = my + 'px';
    raf = requestAnimationFrame(update);
  }
  update();
}

/* ── NAV ──────────────────────────────── */
function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });

  /* active link tracking */
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a');

  const sectionObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => sectionObs.observe(s));
}

/* ── SCROLL REVEAL — UPGRADED ─────────── */
function initReveal() {
  const allReveal = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children';

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.07 });

  document.querySelectorAll(allReveal).forEach(el => obs.observe(el));

  /* journey milestone stagger */
  const jObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        jObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal-journey').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.06}s`;
    jObs.observe(el);
  });

  /* cert cards stagger */
  const certObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      document.querySelectorAll('.cert-card').forEach((card, i) => {
        setTimeout(() => card.classList.add('cert-visible'), i * 120);
      });
      certObs.disconnect();
    }
  }, { threshold: 0.1 });
  const certScroll = document.querySelector('.cert-scroll');
  if (certScroll) certObs.observe(certScroll);

  /* about stat count-up pop */
  const statObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      document.querySelectorAll('.ast').forEach((el, i) => {
        setTimeout(() => el.classList.add('ast-animated'), i * 150);
      });
      statObs.disconnect();
    }
  }, { threshold: 0.2 });
  const statsRow = document.querySelector('.about-stats-row');
  if (statsRow) statObs.observe(statsRow);
}

/* ── CERTIFICATE LIGHTBOX ─────────────── */
function initCertLightbox() {
  const overlay = document.getElementById('cert-lightbox-overlay');
  const closeBtn = document.getElementById('cert-lightbox-close');
  const img = document.getElementById('cert-lightbox-img');
  if (!overlay) return;

  document.querySelectorAll('.cert-img-card').forEach(card => {
    card.addEventListener('click', () => {
      const src = card.dataset.img;
      img.src = src;
      overlay.classList.add('cert-lightbox-open');
      document.body.style.overflow = 'hidden';
    });
  });

  const close = () => {
    overlay.classList.remove('cert-lightbox-open');
    document.body.style.overflow = '';
  };

  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

/* ── INIT ─────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  buildCodeCard();
  buildTechGrid();
  buildProjects();
  initCursor();
  initMouseGlow();
  initNav();
  initReveal();
  initCertLightbox();
  initYouTubeSection(); 
});



/* ── YOUTUBE SECTION JS ───────────────────
   Paste this function into app.js
   Call initYouTubeSection() inside DOMContentLoaded
────────────────────────────────────────── */

function initYouTubeSection() {
  /* video thumbnail swap into main player */
  const iframe = document.getElementById('yt-main-iframe');
  const cards  = document.querySelectorAll('.ytv[data-vidid]');

  cards.forEach(card => {
    card.addEventListener('click', e => {
      e.preventDefault();
      const id = card.dataset.vidid;
      if (iframe) {
        iframe.src = `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&autoplay=1`;
      }
      cards.forEach(c => c.classList.remove('ytv-active'));
      card.classList.add('ytv-active');
      if (window.innerWidth < 900) {
        document.querySelector('.yt-player-wrap')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });

  /* animated stat counters */
  const countUp = (el, target, suffix) => {
    let cur = 0;
    const steps = 55;
    const inc = target / steps;
    const tick = () => {
      cur = Math.min(cur + inc, target);
      el.innerHTML = `${Math.round(cur)}<span>${suffix}</span>`;
      if (cur < target) requestAnimationFrame(tick);
      else el.innerHTML = `${target}<span>${suffix}</span>`;
    };
    requestAnimationFrame(tick);
  };

  let counted = false;
  const obs = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting || counted) return;
    counted = true;
    document.querySelectorAll('.yt-bstat-n[data-target]').forEach((el, i) => {
      const t = parseFloat(el.dataset.target);
      const s = el.dataset.suffix || '';
      setTimeout(() => countUp(el, t, s), i * 120);
    });
    obs.disconnect();
  }, { threshold: 0.3 });

  const sec = document.getElementById('youtube');
  if (sec) obs.observe(sec);

  /* cursor expand on hover */
  const dot = document.getElementById('cursor-dot');
  document.querySelectorAll('.ytv, .yt-sub-cta, .yt-ci-sub, .yt-hud-sub-btn').forEach(el => {
    el.addEventListener('mouseenter', () => { if (dot) { dot.style.width = '20px'; dot.style.height = '20px'; } });
    el.addEventListener('mouseleave', () => { if (dot) { dot.style.width = '10px'; dot.style.height = '10px'; } });
  });
}
/* ── INTRO / LOADING SCREEN ─────────────── */
(function initIntro() {
  const screen = document.getElementById('intro-screen');
  const nameEl = document.getElementById('intro-name');
  if (!screen || !nameEl) return;

  const fullName = "Welcome.";
  nameEl.innerHTML = fullName.split('').map((ch, i) => {
    const delay = i * 0.045;
    const char = ch === ' ' ? '&nbsp;' : ch;
    return `<span class="char" style="animation-delay:${delay}s">${char}</span>`;
  }).join('');

  setTimeout(() => {
    screen.classList.add('hidden');
    document.body.classList.remove('intro-active');
  }, 2000);
})();