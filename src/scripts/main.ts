// Progressive enhancement only: the page is complete and readable without this file.
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Nav: hairline border once the page scrolls */
function initNav() {
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  if (!nav) return;
  const update = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* Reveal on scroll: a short fade, skipped for reduced motion */
function initReveal() {
  const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (reduce || !('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('is-in')); return; }
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  }, { rootMargin: '0px 0px -6% 0px', threshold: 0.05 });
  els.forEach((e) => io.observe(e));
}

/* Local time in Valencia, in the footer */
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
initClock();
