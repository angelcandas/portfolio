// Progressive enhancement only: the page is complete and readable without this file.
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;

/* ---------- Nav: tint when scrolled, hide on scroll down ---------- */
function initNav() {
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  if (!nav) return;
  let last = window.scrollY;
  let ticking = false;
  const update = () => {
    const y = window.scrollY;
    nav.classList.toggle('is-scrolled', y > 24);
    const hide = y > last && y > 400 && !nav.contains(document.activeElement);
    nav.classList.toggle('is-hidden', hide);
    last = y;
    ticking = false;
  };
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();
}

/* ---------- Reveal on scroll ---------- */
function initReveal() {
  const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (reduce || !('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('is-in')); return; }
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  els.forEach((e) => io.observe(e));
}

/* ---------- Counters ---------- */
function initCounters() {
  const els = document.querySelectorAll<HTMLElement>('[data-count]');
  if (reduce) return;
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      const el = e.target as HTMLElement;
      // Scrolled past it without it ever showing: just show the final value.
      if (!e.isIntersecting) { if (e.boundingClientRect.top < 0) { io.unobserve(el); el.textContent = el.dataset.count ?? ''; } continue; }
      io.unobserve(el);
      const to = Number(el.dataset.count);
      const start = performance.now();
      const dur = 1600;
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - p, 4);
        el.textContent = String(Math.round(to * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  }, { threshold: 0.2 });
  els.forEach((e) => { if (e.getBoundingClientRect().top > window.innerHeight) { e.textContent = '0'; io.observe(e); } });
}

/* ---------- Magnetic buttons ---------- */
function initMagnetic() {
  if (reduce || !finePointer) return;
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    el.addEventListener('pointermove', (ev) => {
      const r = el.getBoundingClientRect();
      const x = (ev.clientX - r.left - r.width / 2) * 0.22;
      const y = (ev.clientY - r.top - r.height / 2) * 0.32;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });
}

/* ---------- Tilt on project media ---------- */
function initTilt() {
  if (reduce || !finePointer) return;
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
    el.addEventListener('pointermove', (ev) => {
      const r = el.getBoundingClientRect();
      const px = (ev.clientX - r.left) / r.width - 0.5;
      const py = (ev.clientY - r.top) / r.height - 0.5;
      el.style.setProperty('--ry', `${px * 6}deg`);
      el.style.setProperty('--rx', `${-py * 6}deg`);
    });
    el.addEventListener('pointerleave', () => { el.style.setProperty('--ry', '0deg'); el.style.setProperty('--rx', '0deg'); });
  });
}

/* ---------- Parallax ---------- */
function initParallax() {
  if (reduce) return;
  const els = [...document.querySelectorAll<HTMLElement>('[data-parallax]')];
  if (!els.length || window.innerWidth < 960) return;
  let ticking = false;
  const update = () => {
    const vh = window.innerHeight;
    for (const el of els) {
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) continue;
      const k = Number(el.dataset.parallax);
      const off = (r.top + r.height / 2 - vh / 2) * k;
      el.style.translate = `0 ${off.toFixed(1)}px`;
    }
    ticking = false;
  };
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();
}

/* ---------- Cursor ---------- */
function initCursor() {
  if (reduce || !finePointer) return;
  const dot = document.createElement('div');
  dot.className = 'cursor';
  dot.setAttribute('aria-hidden', 'true');
  document.body.append(dot);
  let x = -100, y = -100, cx = -100, cy = -100;
  window.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    if (!dot.classList.contains('is-on')) { cx = e.clientX; cy = e.clientY; }
    x = e.clientX; y = e.clientY; dot.classList.add('is-on');
  }, { passive: true });
  document.addEventListener('pointerleave', () => dot.classList.remove('is-on'));
  document.addEventListener('pointerover', (e) => {
    const t = e.target as Element;
    dot.classList.toggle('is-link', !!t.closest('a, button'));
    dot.classList.toggle('is-media', !!t.closest('[data-tilt], .shot'));
  });
  const loop = () => {
    cx += (x - cx) * 0.2; cy += (y - cy) * 0.2;
    dot.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
    requestAnimationFrame(loop);
  };
  loop();
}

/* ---------- Oscilloscope ---------- */
function initScope() {
  const canvas = document.querySelector<HTMLCanvasElement>('[data-scope]');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  let w = 0, h = 0, dpr = 1;
  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    const r = canvas.getBoundingClientRect();
    w = r.width; h = r.height;
    canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  resize();
  new ResizeObserver(resize).observe(canvas);

  let mx = 0.5, my = 0.5, tmx = 0.5, tmy = 0.5;
  window.addEventListener('pointermove', (e) => { tmx = e.clientX / window.innerWidth; tmy = e.clientY / window.innerHeight; }, { passive: true });

  const waves = [
    { color: 'rgba(200,255,61,1)', width: 2, amp: 1, f: 1, speed: 1, phase: 0, blur: 18 },
    { color: 'rgba(124,107,255,0.75)', width: 1.4, amp: 0.7, f: 1.6, speed: -0.7, phase: 1.3, blur: 12 },
    { color: 'rgba(239,237,230,0.25)', width: 1, amp: 0.45, f: 2.7, speed: 1.4, phase: 2.1, blur: 0 },
  ];
  const t0 = performance.now();

  const draw = (now: number) => {
    const t = (now - t0) / 1000;
    mx += (tmx - mx) * 0.05; my += (tmy - my) * 0.05;
    ctx.clearRect(0, 0, w, h);

    // graticule
    ctx.strokeStyle = 'rgba(239,237,230,0.05)';
    ctx.lineWidth = 1;
    const step = Math.max(48, w / 24);
    ctx.beginPath();
    for (let gx = (w % step) / 2; gx < w; gx += step) { ctx.moveTo(gx, 0); ctx.lineTo(gx, h); }
    for (let gy = h / 2 % step; gy < h; gy += step) { ctx.moveTo(0, gy); ctx.lineTo(w, gy); }
    ctx.stroke();

    const lock = reduce ? 1 : Math.min(1, t / 1.8);
    const lockE = 1 - Math.pow(1 - lock, 3);
    const baseAmp = h * 0.32 * lockE * (0.55 + (1 - my) * 0.6);
    const freq = 2.2 + mx * 3.2;
    const mid = h / 2;

    for (const wv of waves) {
      ctx.beginPath();
      ctx.lineWidth = wv.width;
      ctx.strokeStyle = wv.color;
      ctx.shadowColor = wv.color;
      ctx.shadowBlur = wv.blur;
      const segs = Math.ceil(w / 3);
      for (let i = 0; i <= segs; i++) {
        const x = (i / segs) * w;
        const u = i / segs;
        // envelope: quiet at the edges, loud in the middle
        const env = Math.sin(Math.PI * u) ** 1.6;
        const ph = u * Math.PI * 2 * freq * wv.f + t * wv.speed * 2 + wv.phase;
        const y = mid
          + env * baseAmp * wv.amp * (Math.sin(ph) * 0.7 + Math.sin(ph * 2.03 + t) * 0.2 + Math.sin(ph * 0.5 - t * 0.6) * 0.25);
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    ctx.shadowBlur = 0;
  };

  if (reduce) { draw(t0 + 4000); return; }
  let raf = 0, visible = true;
  const loop = (now: number) => { draw(now); raf = requestAnimationFrame(loop); };
  const io = new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    cancelAnimationFrame(raf);
    if (visible && !document.hidden) raf = requestAnimationFrame(loop);
  });
  io.observe(canvas);
  document.addEventListener('visibilitychange', () => {
    cancelAnimationFrame(raf);
    if (!document.hidden && visible) raf = requestAnimationFrame(loop);
  });
}

/* ---------- Clock ---------- */
function initClock() {
  const el = document.querySelector<HTMLTimeElement>('[data-clock]');
  if (!el) return;
  const fmt = new Intl.DateTimeFormat(document.documentElement.lang === 'es' ? 'es-ES' : 'en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Madrid' });
  const tick = () => { el.textContent = fmt.format(new Date()); };
  tick();
  setInterval(tick, 15000);
}

initNav();
initReveal();
initCounters();
initMagnetic();
initTilt();
initParallax();
initCursor();
initScope();
initClock();
