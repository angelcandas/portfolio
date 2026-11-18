// All copy for the site lives here, in both languages.
// To change a project, a link or a sentence, edit this file only.
// Facts on this page come from the verified list Ángel approved. Do not add numbers, clients or outcomes that are not on it.

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
  // Public CV: phone and personal email removed. Built from Ángel's LaTeX source.
  cv: '/Angel_Candas_CV.pdf',
  location: 'Valencia, España',
  timezone: 'Europe/Madrid',
};

export type ProjectId = 'cryptotax' | 'micfx' | 'quecomo' | 'carlog' | 'homelog' | 'llanes';
export type SmallProjectId = 'quecomo' | 'carlog' | 'homelog' | 'llanes';

export interface Link { label: string; href: string }
export interface Stat { value: string; count?: number; label: string }

const shared = {
  cryptotax: {
    year: '2026',
    stack: ['React 18', 'Vite', 'TypeScript', 'Node · Express', 'Prisma'],
    links: [] as Link[],
  },
  micfx: {
    year: '2026',
    stack: ['C++20', 'JUCE', 'DSP', 'WebView UI', 'AU · VST3'],
    links: [{ label: 'GitHub', href: 'https://github.com/angelcandas/local-mic-effects' }],
  },
  quecomo: {
    year: '2026',
    stack: ['PWA', 'Firebase', 'Cloudflare Workers'],
    links: [{ label: 'App', href: 'https://que-como-1111.firebaseapp.com/' }],
  },
  carlog: {
    year: '2026',
    stack: ['React 19', 'TypeScript', 'Firestore'],
    links: [{ label: 'App', href: 'https://carlog-f70e4.web.app' }],
  },
  homelog: {
    year: '2026',
    stack: ['PWA', 'Firestore', 'Offline sync'],
    links: [{ label: 'App', href: 'https://homelog-quecomo.web.app' }],
  },
  llanes: {
    year: '2026',
    stack: ['React', 'Vite'],
    links: [
      { label: 'Web', href: 'https://angelcandas.github.io/llanes-guia/' },
      { label: 'GitHub', href: 'https://github.com/angelcandas/llanes-guia' },
    ],
  },
} satisfies Record<ProjectId, { year: string; stack: string[]; links: Link[] }>;

const es = {
  lang: 'es' as Lang,
  meta: {
    title: 'Ángel Candás · Frontend Tech Lead · Pagos regulados',
    description:
      'Ángel Candás, tech lead frontend en Valencia. Lidera el frontend del portal de empresas de un banco de compensación británico: pagos con PSD2, React, Next.js y TypeScript, y un equipo de 5 ingenieros senior.',
  },
  nav: { experience: 'Experiencia', work: 'Proyectos', about: 'Perfil', contact: 'Contacto', switch: 'EN', switchHref: '/', switchLabel: 'Read in English' },
  skip: 'Saltar al contenido',
  cv: 'Descargar CV',
  hero: {
    kicker: 'Frontend & Product Engineer · Tech Lead',
    location: 'Valencia, España · Remoto en Europa',
    lines: ['Lidero equipos frontend', 'que construyen productos de *pagos*', 'y publican cada semana.'],
    intro:
      'Más de 10 años creando aplicaciones web con React y TypeScript, los últimos siete al frente de equipos pequeños. Hoy dirijo el frontend del portal de empresas de un banco de compensación británico, con PSD2 y WCAG 2.1 AA.',
    experience: 'Ver experiencia',
    scroll: 'Desliza',
  },
  marquee: ['React', 'TypeScript', 'Next.js', 'Pagos PSD2', 'WCAG 2.1 AA', 'Liderazgo técnico', 'Playwright', 'Cypress', 'Feature flags', 'Claude Code'],
  experience: {
    label: 'Experiencia',
    title: 'Dónde trabajo ahora',
    case: {
      eyebrow: 'Wizeline · Cliente actual',
      title: 'Reconstruyendo el portal de empresas de un banco de compensación británico',
      summary:
        'Las empresas clientes del banco hacen pagos, los aprueban y gestionan sus usuarios en este portal. Dirijo su reconstrucción en React, Next.js con SSR y Material-UI. El portal nuevo está en beta cerrada y sustituirá a uno en producción que usan miles de usuarios técnicos B2B.',
      stats: [
        { value: '5', count: 5, label: 'ingenieros senior a mi cargo' },
        { value: 'Semanal', label: 'publicación en producción' },
        { value: '53 → 83', label: 'Lighthouse del dashboard frente al portal antiguo' },
        { value: '5', count: 5, label: 'tipos de pago cubiertos con pruebas end-to-end' },
      ] as Stat[],
      bullets: [
        'Me encargo de la arquitectura frontend y del plan de entrega, con un backend-for-frontend en JavaScript dentro de la app de Next.js.',
        'Flujos de pago y aprobación con patrones de reautenticación PSD2, accesibles según WCAG 2.1 AA.',
        'Pruebas end-to-end montadas desde cero con Cypress y Playwright: smoke tests, 5 tipos de pago, aprobaciones y alta y baja de usuarios.',
        'Cada semana sale una versión a producción tras feature flags, con Azure App Configuration y una capa de flags propia.',
        'Monitorización con Application Insights y Microsoft Clarity. Lighthouse frente al portal antiguo: formulario de pago de 44 a 63 y aprobaciones de 55 a 64.',
      ],
      stack: ['React', 'Next.js SSR', 'Material-UI', 'BFF en JavaScript', 'Cypress', 'Playwright', 'Azure App Configuration', 'Application Insights'],
      flowLabel: 'Cómo sale cada versión',
      flow: [
        { k: 'Merge', v: 'Rama principal' },
        { k: 'E2E', v: 'Cypress y Playwright' },
        { k: 'Flag', v: 'Azure App Configuration' },
        { k: 'Release', v: 'Producción, cada semana' },
        { k: 'Monitor', v: 'Application Insights y Clarity' },
      ],
    },
    rowsLabel: 'Trayectoria',
    rows: [
      {
        org: 'Wizeline',
        note: 'adquirida por Cognizant en noviembre de 2026',
        period: 'Ene 2022 – hoy',
        place: 'Remoto',
        role: 'Senior Frontend Engineer · Technical Lead',
        text: 'Lidero el frontend del portal bancario de arriba. Construí con otros compañeros un entorno de desarrollo con IA de unos 100 archivos (guías, skills, agentes e instrucciones) para GitHub Copilot con modelos de Claude y OpenAI. He sido mentor de varios ingenieros que después ascendieron. Clientes anteriores: Inditex (módulos nuevos en una plataforma de micro-frontends que comparten más de 50 squads de producto), Dow Jones (herramientas editoriales y de gráficos) y CloudPay (migración de la interfaz de nóminas a Vue 3 y KendoUI).',
        stack: ['React', 'Next.js', 'Micro-frontends', 'Vue 3', 'GitHub Copilot'],
      },
      {
        org: 'Gilytics',
        note: '',
        period: 'Ene 2019 – ene 2022',
        place: 'Zúrich, en remoto',
        role: 'Lead Frontend Engineer',
        text: 'Startup respaldada por la ESA que planifica trazados de líneas eléctricas para operadores de red. Lideré a 5 ingenieros en la plataforma WebGIS y planificar el trazado de una línea pasó de semanas a días. Me encargué de la arquitectura frontend, CI/CD y la incorporación de gente nueva, y dirigí una gran refactorización de React a Context y Hooks.',
        stack: ['React', 'WebGIS', 'CI/CD'],
      },
      {
        org: 'Cartonatura · Otus Robotic Engineering',
        note: '',
        period: '2014 – 2018',
        place: 'España',
        role: '',
        text: 'WebGIS de agricultura de precisión en Angular y Django, y sistemas de control telemático IoT en React y Java.',
        stack: ['Angular', 'Django', 'React', 'Java', 'IoT'],
      },
    ],
  },
  work: {
    label: 'Fuera del trabajo',
    title: 'Proyectos personales',
    visit: 'Abrir',
    private: 'Código privado',
    signin: 'App (requiere iniciar sesión)',
  },
  projects: {
    cryptotax: {
      name: 'Crypto Tax ES',
      tag: 'Gestor fiscal para inversores en cripto en España',
      summary:
        'Importa las operaciones de Kraken y Binance a través de sus APIs firmadas, calcula el coste de adquisición por FIFO y exporta los modelos de Hacienda. Lo construí en 2026 con Claude Code.',
      flowLabel: 'Del exchange al modelo de Hacienda',
      flow: ['Kraken · Binance', 'APIs firmadas', 'Coste FIFO', 'Modelos fiscales'],
    },
    micfx: {
      name: 'MicFX',
      tag: 'Estudio de voz y DAW nativo',
      summary:
        'Efectos de voz en tiempo real para el micrófono, en local y con unos milisegundos de latencia. Empezó como un autotune y hoy es un DAW con pistas, mezclador, piano roll y MIDI. Lo construí con Claude Code como compañero de programación.',
      stats: [
        { value: '26', count: 26, label: 'efectos en cadena' },
        { value: '24', count: 24, label: 'presets de voz' },
        { value: '5 ms', label: 'ventana de detección de tono' },
      ] as Stat[],
    },
    quecomo: {
      name: '¿Qué como?',
      tag: 'Plan de comidas como app',
      summary: 'Dice qué toca comer, monta la semana y crea la lista de la compra con precios reales. Tiene un bot de Telegram.',
    },
    carlog: {
      name: 'CarLog',
      tag: 'Los coches de casa, al día',
      summary: 'Averías, ITV, seguro, kilómetros y facturas de los coches de la familia, compartidos y sin conexión.',
    },
    homelog: {
      name: 'HomeLog',
      tag: 'Tareas de casa, entre todos',
      summary: 'Qué toca hoy en casa y cuándo se hizo cada cosa, con hogares compartidos y sincronización al volver la conexión.',
    },
    llanes: {
      name: 'Guía de Llanes',
      tag: 'Guía de viaje de un local',
      summary: 'Playas, rutas y restaurantes de Llanes (Asturias), con diseño editorial y versión en PDF.',
    },
  },
  about: {
    label: 'Perfil',
    title: 'Ingeniería primero. Producto siempre.',
    facts: [
      { value: 10, suffix: '+', label: 'años con React y TypeScript' },
      { value: 7, suffix: '', label: 'años liderando equipos' },
      { value: 50, suffix: '+', label: 'squads de producto comparten la plataforma de Inditex para la que construí módulos' },
      { value: 83, suffix: '', label: 'Lighthouse del nuevo dashboard bancario (antes 53)' },
    ],
    body: [
      'Soy ingeniero de telecomunicaciones (Universidad de Oviedo) con un máster en mecatrónica (UPV). Hoy lidero el equipo frontend que reconstruye el portal de clientes empresa de un banco de compensación británico: pagos, aprobaciones y usuarios, con PSD2, WCAG 2.1 AA y una versión nueva cada semana.',
      'Me gusta hacerme cargo de un área de producto de principio a fin: arquitectura, pruebas y lo que hace la gente después de cada versión. En el trabajo usamos GitHub Copilot con modelos de Claude y OpenAI, y en mis proyectos uso Claude Code.',
    ],
    capsLabel: 'Lo que hago',
    caps: [
      { title: 'Frontend', items: ['React · Next.js (SSR) · TypeScript', 'Micro-frontends · Vue 3', 'Material-UI · Tailwind', 'Accesibilidad WCAG 2.1 AA'] },
      { title: 'Liderazgo y entrega', items: ['Equipos de 5 ingenieros senior', 'Arquitectura y plan de entrega', 'Feature flags y versiones semanales', 'Mentoría y herramientas de IA'] },
      { title: 'Calidad y backend', items: ['Playwright · Cypress · Jest', 'Node · BFF · REST · GraphQL', 'PostgreSQL · MongoDB', 'GitHub Actions · Azure · AWS'] },
      { title: 'Audio y tiempo real', items: ['C++20 · JUCE', 'DSP: pitch, FFT, filtros', 'Plugins AU / VST3', 'MIDI y automatización'] },
    ],
  },
  contact: {
    label: 'Contacto',
    title: ['Hablemos.'],
    body: 'Escríbeme sobre un puesto o sobre cualquier cosa de esta página.',
    email: 'Escribir un correo',
  },
  footer: { built: 'Diseñado y construido por Ángel Candás', local: 'Hora local', top: 'Volver arriba' },
  notFound: { title: 'Señal perdida', body: 'Esta página no existe.', back: 'Volver al inicio' },
};

type Copy = typeof es;

const en: Copy = {
  lang: 'en',
  meta: {
    title: 'Ángel Candás · Frontend Tech Lead · Regulated payments',
    description:
      'Ángel Candás, frontend tech lead in Valencia, Spain. Leads the frontend of a UK clearing bank’s business portal: PSD2 payments in React, Next.js and TypeScript, with a team of 5 senior engineers.',
  },
  nav: { experience: 'Experience', work: 'Projects', about: 'About', contact: 'Contact', switch: 'ES', switchHref: '/es/', switchLabel: 'Leer en español' },
  skip: 'Skip to content',
  cv: 'Download CV',
  hero: {
    kicker: 'Frontend & Product Engineer · Tech Lead',
    location: 'Valencia, Spain · Remote across Europe',
    lines: ['I lead frontend teams', 'building *payments* products', 'that ship every week.'],
    intro:
      '10+ years building web applications with React and TypeScript, the last seven leading small teams. Today I lead the frontend of a UK clearing bank’s business portal, built for PSD2 and WCAG 2.1 AA.',
    experience: 'See experience',
    scroll: 'Scroll',
  },
  marquee: ['React', 'TypeScript', 'Next.js', 'PSD2 payments', 'WCAG 2.1 AA', 'Technical leadership', 'Playwright', 'Cypress', 'Feature flags', 'Claude Code'],
  experience: {
    label: 'Experience',
    title: 'Where I work now',
    case: {
      eyebrow: 'Wizeline · Current client',
      title: 'Rebuilding a UK clearing bank’s business portal',
      summary:
        'The bank’s business customers use this portal to make payments, approve them and manage their users. I lead the rebuild in React, Next.js with SSR and Material-UI. The new portal is in closed beta and will replace a production portal used by thousands of technical B2B users.',
      stats: [
        { value: '5', count: 5, label: 'senior engineers led' },
        { value: 'Weekly', label: 'production releases' },
        { value: '53 → 83', label: 'dashboard Lighthouse score against the legacy portal' },
        { value: '5', count: 5, label: 'payment types under end-to-end tests' },
      ] as Stat[],
      bullets: [
        'I own the frontend architecture and the delivery plan, including a JavaScript backend-for-frontend inside the Next.js app.',
        'Payment and approval flows use PSD2 reauthentication patterns and meet WCAG 2.1 AA.',
        'I set up end-to-end testing from scratch with Cypress and Playwright: smoke tests, 5 payment types, approvals, and user creation and deletion.',
        'A release goes to production every week behind feature flags, using Azure App Configuration and a custom flag layer.',
        'Monitoring runs on Application Insights and Microsoft Clarity. Lighthouse against the legacy portal: payment form 44 to 63, approvals 55 to 64.',
      ],
      stack: ['React', 'Next.js SSR', 'Material-UI', 'JavaScript BFF', 'Cypress', 'Playwright', 'Azure App Configuration', 'Application Insights'],
      flowLabel: 'How each release ships',
      flow: [
        { k: 'Merge', v: 'Main branch' },
        { k: 'E2E', v: 'Cypress and Playwright' },
        { k: 'Flag', v: 'Azure App Configuration' },
        { k: 'Release', v: 'Production, every week' },
        { k: 'Monitor', v: 'Application Insights and Clarity' },
      ],
    },
    rowsLabel: 'Career',
    rows: [
      {
        org: 'Wizeline',
        note: 'acquired by Cognizant, Nov 2026',
        period: 'Jan 2022 – Present',
        place: 'Remote',
        role: 'Senior Frontend Engineer · Technical Lead',
        text: 'Leading the frontend of the bank portal above. Co-built an AI development harness of about 100 files (guidelines, skills, agents and instructions) for GitHub Copilot with Claude and OpenAI models. Mentored engineers, several of whom were promoted. Earlier clients: Inditex (new modules in a micro-frontend platform shared by 50+ product squads), Dow Jones (editorial and charting tools) and CloudPay (payroll interface migrated to Vue 3 and KendoUI).',
        stack: ['React', 'Next.js', 'Micro-frontends', 'Vue 3', 'GitHub Copilot'],
      },
      {
        org: 'Gilytics',
        note: '',
        period: 'Jan 2019 – Jan 2022',
        place: 'Zurich, remote',
        role: 'Lead Frontend Engineer',
        text: 'ESA-backed startup building route planning for power grid operators. Led 5 engineers on the WebGIS platform, and planning a powerline route went from weeks to days. Owned frontend architecture, CI/CD and onboarding, and led a large React refactor to Context and Hooks.',
        stack: ['React', 'WebGIS', 'CI/CD'],
      },
      {
        org: 'Cartonatura · Otus Robotic Engineering',
        note: '',
        period: '2014 – 2018',
        place: 'Spain',
        role: '',
        text: 'Precision-agriculture WebGIS in Angular and Django, and IoT telematic control systems in React and Java.',
        stack: ['Angular', 'Django', 'React', 'Java', 'IoT'],
      },
    ],
  },
  work: {
    label: 'After hours',
    title: 'Side projects',
    visit: 'Open',
    private: 'Private source',
    signin: 'App (sign-in required)',
  },
  projects: {
    cryptotax: {
      name: 'Crypto Tax ES',
      tag: 'Tax manager for Spanish crypto investors',
      summary:
        'Imports trades from Kraken and Binance through their signed APIs, computes FIFO cost basis and exports the Spanish tax forms. Built in 2026 with Claude Code.',
      flowLabel: 'From exchange to tax form',
      flow: ['Kraken · Binance', 'Signed APIs', 'FIFO cost basis', 'Tax forms'],
    },
    micfx: {
      name: 'MicFX',
      tag: 'Native voice studio & DAW',
      summary:
        'Real-time voice effects for your microphone, all local, with a few milliseconds of latency. It started as an autotune and is now a DAW with tracks, a mixer, a piano roll and MIDI. I built it with Claude Code as my pair programmer.',
      stats: [
        { value: '26', count: 26, label: 'chained effects' },
        { value: '24', count: 24, label: 'voice presets' },
        { value: '5 ms', label: 'pitch detection window' },
      ] as Stat[],
    },
    quecomo: {
      name: '¿Qué como?',
      tag: 'A meal plan, as an app',
      summary: 'Tells you what to eat, plans the week and builds the shopping list with real prices. Comes with a Telegram bot.',
    },
    carlog: {
      name: 'CarLog',
      tag: 'The family cars, up to date',
      summary: 'Repairs, inspections, insurance, mileage and invoices for the family cars, shared and offline-ready.',
    },
    homelog: {
      name: 'HomeLog',
      tag: 'Household chores, shared',
      summary: 'What’s due at home today and when each thing was last done, with shared households and offline sync.',
    },
    llanes: {
      name: 'Llanes Guide',
      tag: 'A local’s travel guide',
      summary: 'Beaches, trails and restaurants of Llanes (Asturias, Spain), with an editorial design and a PDF version.',
    },
  },
  about: {
    label: 'About',
    title: 'Engineering first. Product always.',
    facts: [
      { value: 10, suffix: '+', label: 'years with React and TypeScript' },
      { value: 7, suffix: '', label: 'years leading teams' },
      { value: 50, suffix: '+', label: 'product squads sharing the Inditex platform I built modules for' },
      { value: 83, suffix: '', label: 'Lighthouse on the new banking dashboard (was 53)' },
    ],
    body: [
      'I’m a telecommunications engineer (University of Oviedo) with a master’s in mechatronics (UPV). Today I lead the frontend team rebuilding a UK clearing bank’s business customer portal: payments, approvals and user management, under PSD2 and WCAG 2.1 AA, released every week.',
      'I like owning a product area end to end: architecture, testing and what users actually do after a release. At work we use GitHub Copilot with Claude and OpenAI models, and I build my own projects with Claude Code.',
    ],
    capsLabel: 'What I do',
    caps: [
      { title: 'Frontend', items: ['React · Next.js (SSR) · TypeScript', 'Micro-frontends · Vue 3', 'Material-UI · Tailwind', 'WCAG 2.1 AA accessibility'] },
      { title: 'Leadership & delivery', items: ['Teams of 5 senior engineers', 'Architecture & delivery plans', 'Feature flags, weekly releases', 'Mentoring & AI tooling'] },
      { title: 'Quality & backend', items: ['Playwright · Cypress · Jest', 'Node · BFF · REST · GraphQL', 'PostgreSQL · MongoDB', 'GitHub Actions · Azure · AWS'] },
      { title: 'Audio & real time', items: ['C++20 · JUCE', 'DSP: pitch, FFT, filters', 'AU / VST3 plugins', 'MIDI & automation'] },
    ],
  },
  contact: {
    label: 'Contact',
    title: ['Get in', 'touch.'],
    body: 'Write to me about a role or about anything on this page.',
    email: 'Send an email',
  },
  footer: { built: 'Designed and built by Ángel Candás', local: 'Local time', top: 'Back to top' },
  notFound: { title: 'Signal lost', body: 'This page doesn’t exist.', back: 'Back home' },
};

export const copy: Record<Lang, Copy> = { es, en };
export const smallProjects: SmallProjectId[] = ['quecomo', 'carlog', 'homelog', 'llanes'];
// Apps that show a sign-in screen to a visitor who is not logged in.
export const signInRequired: SmallProjectId[] = [];
export { shared as projectMeta };
