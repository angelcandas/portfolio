// All copy for the site lives here, in both languages.
// To change a project, a link or a sentence, edit this file only.

export type Lang = 'es' | 'en';

export const site = {
  name: 'Ángel Candás',
  fullName: 'Ángel Candás Sobrino',
  domain: 'sobrinotech.com',
  url: 'https://sobrinotech.com',
  github: 'https://github.com/angelcandas',
  linkedin: 'https://www.linkedin.com/in/angelcandas/',
  // Contact address per language (both forward to the same inbox). Leave empty to hide the button.
  email: { en: 'hello@sobrinotech.com', es: 'hola@sobrinotech.com' } as Record<'en' | 'es', string>,
  location: 'Valencia, España',
  timezone: 'Europe/Madrid',
};

export type ProjectId = 'micfx' | 'quecomo' | 'carlog' | 'homelog' | 'llanes';

export interface Link { label: string; href: string }

const shared = {
  micfx: {
    year: '2026',
    stack: ['C++20', 'JUCE', 'DSP', 'WebView UI', 'AU · VST3'],
    links: [{ label: 'GitHub', href: 'https://github.com/angelcandas/local-mic-effects' }],
  },
  quecomo: {
    year: '2026',
    stack: ['PWA', 'Vanilla JS', 'Firebase', 'Cloudflare Workers', 'Telegram'],
    links: [{ label: 'App', href: 'https://que-como-1111.firebaseapp.com/' }],
  },
  carlog: {
    year: '2026',
    stack: ['React 19', 'TypeScript', 'Vite', 'Firestore', 'Playwright'],
    links: [{ label: 'App', href: 'https://carlog-f70e4.web.app' }],
  },
  homelog: {
    year: '2026',
    stack: ['PWA', 'Vanilla JS', 'Firestore', 'Offline sync'],
    links: [{ label: 'App', href: 'https://homelog-quecomo.web.app' }],
  },
  llanes: {
    year: '2026',
    stack: ['React', 'Vite', 'GitHub Pages'],
    links: [
      { label: 'Web', href: 'https://angelcandas.github.io/llanes-guia/' },
      { label: 'GitHub', href: 'https://github.com/angelcandas/llanes-guia' },
    ],
  },
} satisfies Record<ProjectId, { year: string; stack: string[]; links: Link[] }>;

const archive = [
  { year: '2023', name: 'Recipe API', stack: 'Django · DRF · Docker · PostgreSQL', href: 'https://github.com/angelcandas/recipe-app-api' },
  { year: '2021', name: 'OpenLayers Raster Palette', stack: 'OpenLayers · Canvas · GIS', href: 'https://github.com/angelcandas/OpenlayersRasterPalette' },
  { year: '2018', name: 'Sobrify', stack: 'Angular · Node · Express · S3', href: 'https://github.com/angelcandas/sobrify' },
  { year: '2018', name: 'IoT ACS', stack: 'React · MQTT · Node', href: 'https://github.com/angelcandas/iotacs' },
  { year: '2018', name: 'Face Recognition API', stack: 'Node · Express · PostgreSQL · Clarifai', href: 'https://github.com/angelcandas/api_facerecognition' },
];

const es = {
  lang: 'es' as Lang,
  meta: {
    title: 'Ángel Candás · Frontend & Product Engineer',
    description:
      'Portfolio de Ángel Candás Sobrino: ingeniero frontend y de producto con más de 10 años en React y TypeScript, líder técnico y autor de MicFX, ¿Qué como? y otros proyectos.',
  },
  nav: { work: 'Trabajo', about: 'Perfil', contact: 'Contacto', switch: 'EN', switchHref: '/', switchLabel: 'Read in English' },
  skip: 'Saltar al contenido',
  hero: {
    kicker: 'Frontend & Product Engineer · Tech Lead',
    lines: ['Construyo software', 'que *suena*, se instala', 'y se usa a diario.'],
    intro:
      'Más de 10 años construyendo aplicaciones web con React y TypeScript, los últimos siete liderando equipos. Fuera del trabajo, del procesado de señal en C++ a PWAs que usamos en casa cada día.',
    cta: 'Ver proyectos',
    status: 'Abierto a nuevos proyectos',
    scroll: 'Desliza',
  },
  marquee: ['React', 'TypeScript', 'Next.js', 'Liderazgo técnico', 'WCAG 2.1 AA', 'Playwright', 'Audio en tiempo real', 'C++ / JUCE', 'PWAs', 'Claude Code'],
  work: {
    label: 'Trabajo seleccionado',
    title: 'Proyectos',
    count: 'proyectos',
    visit: 'Abrir',
    private: 'Código privado',
  },
  projects: {
    micfx: {
      name: 'MicFX',
      tag: 'Estudio de voz y DAW nativo',
      summary:
        'Efectos de voz en tiempo real para tu micrófono, con unos milisegundos de latencia y todo en local. Empezó como un autotune y hoy es un DAW completo: pistas, mezclador, piano roll, MIDI y automatización.',
      bullets: [
        'Autotune propio: detector de tono YIN cada 5 ms y desplazamiento TD-PSOLA que conserva los formantes.',
        'Armonizador que sigue los acordes de la canción, del teclado MIDI o de una guitarra.',
        'Reducción de ruido espectral adaptativa (MCRA) y EQ paramétrica de siete bandas.',
        'Un solo código para app independiente, AU y VST3. Interfaz HTML/CSS/JS en un WebView nativo.',
      ],
      stats: [
        { value: 26, suffix: '', label: 'efectos en cadena' },
        { value: 24, suffix: '', label: 'presets de voz' },
        { value: 70, suffix: 'k', label: 'líneas de C++' },
        { value: 5, suffix: ' ms', label: 'ventana de detección de tono' },
      ],
    },
    quecomo: {
      name: '¿Qué como?',
      tag: 'Plan de alimentación como app',
      summary:
        'Una PWA que dice qué toca comer a cada hora, monta la semana y crea la lista de la compra con precios reales del catálogo de Mercadona. Tiene buscador en lenguaje natural («tengo garbanzos y atún») y un bot de Telegram en un Cloudflare Worker.',
    },
    carlog: {
      name: 'CarLog',
      tag: 'Los coches de casa, al día',
      summary:
        'Averías, reparaciones, ITV, seguro, kilómetros y facturas de los coches de la familia, compartidos y sin conexión. React 19 y TypeScript, con reglas de seguridad probadas y despliegue continuo.',
    },
    homelog: {
      name: 'HomeLog',
      tag: 'Tareas de casa, entre todos',
      summary:
        'Qué toca hoy en casa y cuándo se hizo cada cosa. Hogares compartidos con invitación por enlace, login de Google y sincronización al volver la conexión. Comparte usuarios y lista de la compra con ¿Qué como?.',
    },
    llanes: {
      name: 'Guía de Llanes',
      tag: 'Guía de viaje de un local',
      summary:
        'Playas, rutas, restaurantes y zonas de Llanes (Asturias), con cómo llegar, qué pedir y cuándo ir. Diseño editorial y versión descargable en PDF.',
    },
  },
  archive: { label: 'Archivo', title: 'Antes de esto', cols: ['Año', 'Proyecto', 'Tecnología'] },
  about: {
    label: 'Perfil',
    title: 'Ingeniería primero. Producto siempre.',
    facts: [
      { value: 10, suffix: '+', label: 'años con React y TypeScript' },
      { value: 7, suffix: '', label: 'años liderando equipos' },
      { value: 50, suffix: '+', label: 'squads en la plataforma de micro-frontends de Inditex' },
      { value: 83, suffix: '', label: 'Lighthouse del nuevo dashboard bancario (antes 53)' },
    ],
    body: [
      'Soy ingeniero de telecomunicaciones (Universidad de Oviedo) con un máster en mecatrónica (UPV). Hoy lidero el equipo frontend que reconstruye el portal de clientes empresa de un banco de compensación británico: pagos, aprobaciones y usuarios, con PSD2, WCAG 2.1 AA y una versión nueva cada semana.',
      'Me gusta hacerme cargo de un área de producto de principio a fin: arquitectura, pruebas y lo que hace la gente después de cada versión. Uso Claude Code y Copilot como parte de cómo entrega mi equipo, y casi todo lo que hay en esta página lo usamos en casa cada día.',
    ],
    capsLabel: 'Lo que hago',
    caps: [
      { title: 'Frontend', items: ['React · Next.js (SSR) · TypeScript', 'Micro-frontends · Vue 3', 'Material-UI · Tailwind', 'Accesibilidad WCAG 2.1 AA'] },
      { title: 'Liderazgo y entrega', items: ['Equipos de 5 ingenieros senior', 'Arquitectura y plan de entrega', 'Feature flags y versiones semanales', 'Mentoría y herramientas de IA'] },
      { title: 'Calidad y backend', items: ['Playwright · Cypress · Jest', 'Node · BFF · REST · GraphQL', 'PostgreSQL · MongoDB', 'GitHub Actions · Azure · AWS'] },
      { title: 'Audio y tiempo real', items: ['C++20 · JUCE', 'DSP: pitch, FFT, filtros', 'Plugins AU / VST3', 'MIDI y automatización'] },
    ],
    expLabel: 'Experiencia',
    exp: [
      { org: 'Wizeline', period: '2022 — hoy', role: 'Senior Frontend Engineer · Tech Lead', text: 'Lidero 5 ingenieros senior en la reconstrucción del portal de clientes empresa de un banco de compensación británico (React, Next.js, Material-UI). Flujos de pago y aprobación con PSD2 y WCAG 2.1 AA, pruebas end-to-end desde cero y versiones semanales con feature flags. Antes, módulos para Inditex, Dow Jones y CloudPay.' },
      { org: 'Gilytics', period: '2019 — 2022', role: 'Lead Frontend Engineer', text: 'Startup respaldada por la ESA que diseña trazados de líneas eléctricas. Lideré 5 ingenieros en la plataforma WebGIS: planificar una línea pasó de semanas a días.' },
      { org: 'Cartonatura · Otus Robotic Engineering', period: '2014 — 2018', role: 'Full-Stack Developer · I+D', text: 'WebGIS de agricultura de precisión en Angular y Django, y sistemas de control telemático IoT en React y Java.' },
    ],
  },
  contact: {
    label: 'Contacto',
    title: ['¿Tienes algo', 'en mente?'],
    body: 'Escríbeme y lo hablamos.',
    email: 'Escribir un correo',
  },
  footer: { built: 'Diseñado y construido por Ángel Candás', local: 'Hora local', top: 'Volver arriba' },
  notFound: { title: 'Señal perdida', body: 'Esta página no existe.', back: 'Volver al inicio' },
};

type Copy = typeof es;

const en: Copy = {
  lang: 'en',
  meta: {
    title: 'Ángel Candás · Frontend & Product Engineer',
    description:
      'Portfolio of Ángel Candás Sobrino: frontend and product engineer with 10+ years in React and TypeScript, tech lead, and maker of MicFX, ¿Qué como? and more.',
  },
  nav: { work: 'Work', about: 'About', contact: 'Contact', switch: 'ES', switchHref: '/es/', switchLabel: 'Leer en español' },
  skip: 'Skip to content',
  hero: {
    kicker: 'Frontend & Product Engineer · Tech Lead',
    lines: ['I build software', 'that *sounds* good, installs', 'and gets used daily.'],
    intro:
      '10+ years building web applications with React and TypeScript, the last seven leading teams. After hours, anything from C++ signal processing to PWAs we use at home every day.',
    cta: 'See projects',
    status: 'Open to new projects',
    scroll: 'Scroll',
  },
  marquee: ['React', 'TypeScript', 'Next.js', 'Technical leadership', 'WCAG 2.1 AA', 'Playwright', 'Real-time audio', 'C++ / JUCE', 'PWAs', 'Claude Code'],
  work: {
    label: 'Selected work',
    title: 'Projects',
    count: 'projects',
    visit: 'Open',
    private: 'Private source',
  },
  projects: {
    micfx: {
      name: 'MicFX',
      tag: 'Native voice studio & DAW',
      summary:
        'Real-time voice effects for your microphone, a few milliseconds of latency, all local. It started as an autotune and is now a full DAW: tracks, mixer, piano roll, MIDI and automation.',
      bullets: [
        'Custom autotune: YIN pitch detection every 5 ms and TD-PSOLA shifting that keeps formants intact.',
        'Harmonizer that follows the song’s chords, a MIDI keyboard or a guitar input.',
        'Adaptive spectral denoiser (MCRA) and a seven-band parametric EQ.',
        'One codebase for standalone, AU and VST3. HTML/CSS/JS interface in a native WebView.',
      ],
      stats: [
        { value: 26, suffix: '', label: 'chained effects' },
        { value: 24, suffix: '', label: 'voice presets' },
        { value: 70, suffix: 'k', label: 'lines of C++' },
        { value: 5, suffix: ' ms', label: 'pitch detection window' },
      ],
    },
    quecomo: {
      name: '¿Qué como?',
      tag: 'A meal plan, as an app',
      summary:
        'A PWA that tells you what to eat at each hour, plans the week and builds the shopping list with real prices from a supermarket catalogue. Natural-language search (“I have chickpeas and tuna”) and a Telegram bot on a Cloudflare Worker.',
    },
    carlog: {
      name: 'CarLog',
      tag: 'The family cars, up to date',
      summary:
        'Breakdowns, repairs, inspections, insurance, mileage and invoices for the family cars, shared and offline-ready. React 19 and TypeScript, with tested security rules and continuous deployment.',
    },
    homelog: {
      name: 'HomeLog',
      tag: 'Household chores, shared',
      summary:
        'What’s due at home today and when each thing was last done. Shared households with invite links, Google sign-in and sync when you’re back online. Shares users and shopping list with ¿Qué como?.',
    },
    llanes: {
      name: 'Llanes Guide',
      tag: 'A local’s travel guide',
      summary:
        'Beaches, trails, restaurants and areas of Llanes (Asturias, Spain), with how to get there, what to order and when to go. Editorial design and a downloadable PDF.',
    },
  },
  archive: { label: 'Archive', title: 'Before this', cols: ['Year', 'Project', 'Stack'] },
  about: {
    label: 'About',
    title: 'Engineering first. Product always.',
    facts: [
      { value: 10, suffix: '+', label: 'years with React and TypeScript' },
      { value: 7, suffix: '', label: 'years leading teams' },
      { value: 50, suffix: '+', label: 'squads on Inditex’s micro-frontend platform' },
      { value: 83, suffix: '', label: 'Lighthouse on the new banking dashboard (was 53)' },
    ],
    body: [
      'I’m a telecommunications engineer (University of Oviedo) with a master’s in mechatronics (UPV). Today I lead the frontend team rebuilding a UK clearing bank’s business customer portal: payments, approvals and user management, under PSD2 and WCAG 2.1 AA, released every week.',
      'I like owning a product area end to end: architecture, testing and what users actually do after a release. I use Claude Code and Copilot as part of how my team ships, and almost everything on this page is used at home every day.',
    ],
    capsLabel: 'What I do',
    caps: [
      { title: 'Frontend', items: ['React · Next.js (SSR) · TypeScript', 'Micro-frontends · Vue 3', 'Material-UI · Tailwind', 'WCAG 2.1 AA accessibility'] },
      { title: 'Leadership & delivery', items: ['Teams of 5 senior engineers', 'Architecture & delivery plans', 'Feature flags, weekly releases', 'Mentoring & AI tooling'] },
      { title: 'Quality & backend', items: ['Playwright · Cypress · Jest', 'Node · BFF · REST · GraphQL', 'PostgreSQL · MongoDB', 'GitHub Actions · Azure · AWS'] },
      { title: 'Audio & real time', items: ['C++20 · JUCE', 'DSP: pitch, FFT, filters', 'AU / VST3 plugins', 'MIDI & automation'] },
    ],
    expLabel: 'Experience',
    exp: [
      { org: 'Wizeline', period: '2022 — now', role: 'Senior Frontend Engineer · Tech Lead', text: 'Leading 5 senior engineers rebuilding a UK clearing bank’s business customer portal (React, Next.js, Material-UI). Payment and approval flows under PSD2 and WCAG 2.1 AA, end-to-end testing from scratch and weekly releases behind feature flags. Before that, modules for Inditex, Dow Jones and CloudPay.' },
      { org: 'Gilytics', period: '2019 — 2022', role: 'Lead Frontend Engineer', text: 'ESA-backed startup building route planning for power grid operators. Led 5 engineers on the WebGIS platform: planning a powerline went from weeks to days.' },
      { org: 'Cartonatura · Otus Robotic Engineering', period: '2014 — 2018', role: 'Full-Stack Developer · R&D', text: 'Precision-agriculture WebGIS in Angular and Django, and IoT telematic control systems in React and Java.' },
    ],
  },
  contact: {
    label: 'Contact',
    title: ['Got something', 'in mind?'],
    body: 'Drop me a line and let’s talk.',
    email: 'Send an email',
  },
  footer: { built: 'Designed and built by Ángel Candás', local: 'Local time', top: 'Back to top' },
  notFound: { title: 'Signal lost', body: 'This page doesn’t exist.', back: 'Back home' },
};

export const copy: Record<Lang, Copy> = { es, en };
export const projectOrder: ProjectId[] = ['micfx', 'quecomo', 'carlog', 'homelog', 'llanes'];
export { shared as projectMeta, archive };
