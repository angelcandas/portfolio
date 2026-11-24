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

export type ProjectId = 'depthline' | 'cryptotax' | 'micfx' | 'aiwilltrade' | 'quecomo' | 'carlog' | 'homelog' | 'llanes';
export type SmallProjectId = 'aiwilltrade' | 'quecomo' | 'carlog' | 'homelog' | 'llanes';

export interface Link { label: string; href: string }
export interface Stat { value: string; label: string }

const shared = {
  depthline: {
    year: '',
    stack: ['TypeScript', 'WebGPU', 'Vite', 'WebSockets', 'Web Workers', 'SharedArrayBuffer'],
    links: [{ label: 'Demo', href: 'https://orderbook.aiwilltrade.com' }],
  },
  cryptotax: {
    year: '2026',
    stack: ['React 18', 'Vite', 'TypeScript', 'Node · Express', 'Prisma'],
    links: [{ label: 'App', href: 'https://crypto-tax.aiwilltrade.com' }],
  },
  micfx: {
    year: '2026',
    stack: ['C++20', 'JUCE', 'DSP', 'WebView UI', 'AU · VST3'],
    links: [{ label: 'GitHub', href: 'https://github.com/angelcandas/local-mic-effects' }],
  },
  aiwilltrade: {
    year: '',
    stack: ['React', 'AWS', 'Python ML'],
    links: [] as Link[],
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
    stack: ['PWA', 'Firestore', 'Offline-first'],
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

// Lighthouse performance, legacy portal vs new portal (verified figures).
export const perf = [
  { id: 'dashboard', before: 53, after: 83 },
  { id: 'payment', before: 44, after: 63 },
  { id: 'approvals', before: 55, after: 64 },
] as const;

const es = {
  lang: 'es' as Lang,
  meta: {
    title: 'Ángel Candás · Senior Frontend Engineer y Tech Lead · Pagos regulados',
    description:
      'Ángel Candás, Senior Frontend Engineer y Tech Lead en Valencia. Más de 10 años con React y TypeScript. Lidera el frontend del portal de empresas de un banco de compensación británico: pagos PSD2, Next.js y un equipo de 5 ingenieros senior.',
  },
  nav: { experience: 'Experiencia', work: 'Proyectos', about: 'Perfil', contact: 'Contacto', switch: 'EN', switchHref: '/', switchLabel: 'Read in English' },
  skip: 'Saltar al contenido',
  cv: 'Descargar CV',
  cvShort: 'CV',
  hero: {
    kicker: 'Senior Frontend Engineer · Tech Lead',
    location: 'Valencia, España · Ciudadano de la UE · Remoto en Europa (CET)',
    title: 'Construyo y lidero frontend para *pagos regulados*.',
    intro:
      'Más de diez años con React y TypeScript, siete de ellos liderando equipos. Hoy dirijo el frontend del portal de empresas de un banco de compensación británico: flujos de pago y aprobación con PSD2, Next.js con un BFF propio, versiones semanales tras feature flags y un equipo de cinco ingenieros senior.',
    email: 'Escríbeme',
    facts: [
      { value: '10+', label: 'años con React y TypeScript' },
      { value: '7', label: 'años liderando equipos' },
      { value: '5', label: 'ingenieros senior a mi cargo' },
      { value: 'Semanal', label: 'publicación en producción' },
    ],
    clientsLabel: 'He trabajado para',
    clients: ['Banco de compensación británico', 'Inditex', 'Dow Jones', 'CloudPay', 'Gilytics'],
  },
  release: {
    label: 'Cómo sale cada versión',
    title: 'Portal de banca de empresas',
    badge: 'Semanal',
    steps: [
      { k: 'Merge a la rama principal', v: 'Revisión de código y CI' },
      { k: 'Pruebas end-to-end', v: 'Cypress y Playwright · 5 tipos de pago' },
      { k: 'Feature flag', v: 'Azure App Configuration y capa propia' },
      { k: 'Producción', v: 'Una versión cada semana' },
      { k: 'Monitorización', v: 'Application Insights y Clarity' },
    ],
    foot: 'Lighthouse del dashboard',
  },
  experience: {
    label: 'Experiencia',
    title: 'Caso principal',
    case: {
      eyebrow: 'Wizeline · Cliente actual',
      title: 'Reconstrucción del portal de empresas de un banco de compensación británico',
      summary:
        'Las empresas clientes del banco hacen pagos, los aprueban y gestionan sus usuarios en este portal. Dirijo su reconstrucción en React, Next.js con SSR y Material-UI. El portal nuevo está en beta cerrada y sustituirá al actual, que usan miles de usuarios de empresa.',
      meta: [
        { k: 'Rol', v: 'Frontend Tech Lead' },
        { k: 'Equipo', v: '5 ingenieros senior' },
        { k: 'Dominio', v: 'Pagos B2B · PSD2' },
        { k: 'Estado', v: 'Beta cerrada' },
      ],
      ownLabel: 'De qué me encargo',
      bullets: [
        'Arquitectura frontend y plan de entrega, con un backend-for-frontend en JavaScript dentro de la app de Next.js.',
        'Flujos de pago y aprobación con patrones de reautenticación PSD2, accesibles según WCAG 2.1 AA.',
        'Pruebas end-to-end montadas desde cero con Cypress y Playwright: smoke tests, 5 tipos de pago, aprobaciones y alta y baja de usuarios.',
        'Una versión a producción cada semana tras feature flags, con Azure App Configuration y una capa de flags propia.',
        'Monitorización con Application Insights y Microsoft Clarity.',
      ],
      stack: ['React', 'Next.js SSR', 'TypeScript', 'Material-UI', 'BFF en JavaScript', 'Cypress', 'Playwright', 'Azure'],
      perfScreen: 'Pantalla',
      perfLabel: 'Rendimiento Lighthouse: portal antiguo frente al nuevo',
      perfLegend: { before: 'Portal antiguo', after: 'Portal nuevo' },
      perfNames: { dashboard: 'Dashboard', payment: 'Formulario de pago', approvals: 'Aprobaciones' },
      perfCaption: 'Puntuación de rendimiento de Lighthouse (0 a 100) en las mismas pantallas.',
    },
    rowsLabel: 'Trayectoria',
    rows: [
      {
        org: 'Wizeline',
        note: 'adquirida por Cognizant en noviembre de 2026',
        period: 'Ene 2022 – hoy',
        place: 'Remoto',
        role: 'Senior Frontend Engineer · Technical Lead',
        text: 'Lidero el frontend del portal bancario descrito arriba. Construí con otros compañeros un entorno de desarrollo con IA de unos 100 archivos (guías, skills, agentes e instrucciones) para GitHub Copilot con modelos de Claude y OpenAI. He sido mentor de varios ingenieros que después ascendieron. Clientes anteriores: Inditex (módulos nuevos en una plataforma de micro-frontends que comparten más de 50 squads de producto), Dow Jones (herramientas editoriales y de gráficos) y CloudPay (migración de la interfaz de nóminas a Vue 3 y KendoUI).',
        stack: ['React', 'Next.js', 'Micro-frontends', 'Vue 3', 'GitHub Copilot'],
      },
      {
        org: 'Gilytics',
        note: '',
        period: 'Ene 2019 – Ene 2022',
        place: 'Zúrich, en remoto',
        role: 'Lead Frontend Engineer',
        text: 'Startup respaldada por la ESA que planifica trazados de líneas eléctricas para operadores de red. Lideré a 5 ingenieros en la plataforma WebGIS y planificar el trazado de una línea pasó de semanas a días. Me encargué de la arquitectura frontend, CI/CD y la incorporación de gente nueva, y dirigí una refactorización a fondo del código React para pasar a Context y Hooks.',
        stack: ['React', 'WebGIS', 'CI/CD'],
      },
      {
        org: 'Cartonatura · Otus Robotic Engineering',
        note: '',
        period: '2014 – 2018',
        place: 'España',
        role: 'Full-Stack Developer · R&D Engineer',
        text: 'WebGIS de agricultura de precisión en Angular y Django, y sistemas de control telemático IoT en React y Java.',
        stack: ['Angular', 'Django', 'React', 'Java', 'IoT'],
      },
    ],
  },
  work: {
    label: 'Proyectos',
    title: 'Proyectos personales',
    lead: 'Productos completos que diseño, construyo y mantengo fuera del trabajo.',
    more: 'Más proyectos',
    visit: 'Abrir',
    private: 'Código privado',
    live: 'Demo en vivo',
    signin: 'App (requiere iniciar sesión)',
  },
  projects: {
    depthline: {
      name: 'Depthline',
      tag: 'Libro de órdenes en tiempo real para Kraken y Binance',
      summary:
        'Recibe en directo los libros de órdenes de Kraken y Binance, valida cada actualización con checksums y control de secuencia, y dibuja profundidad, velas y un mapa de liquidaciones en pocos milisegundos desde que llega el mensaje. El parseo y la detección de patrones corren en workers sobre memoria compartida.',
      stats: [
        { value: '2', label: 'exchanges en directo' },
        { value: '5 / s', label: 'comprobaciones de alertas de precio' },
      ] as Stat[],
    },
    cryptotax: {
      name: 'Crypto Tax ES',
      tag: 'Gestor fiscal para inversores en cripto en España',
      summary:
        'Importa las operaciones de Kraken y Binance a través de sus APIs firmadas, calcula el coste de adquisición por FIFO y exporta los modelos de Hacienda. Full stack en TypeScript, de la integración con los exchanges a la interfaz.',
      flowLabel: 'Del exchange al modelo de Hacienda',
      flow: ['Kraken · Binance', 'APIs firmadas', 'Coste FIFO', 'Modelos fiscales'],
    },
    micfx: {
      name: 'MicFX',
      tag: 'Estudio de voz y DAW nativo',
      summary:
        'Efectos de voz en tiempo real para el micrófono, en local y con unos milisegundos de latencia. Empezó como un autotune y hoy es un DAW con pistas, mezclador, piano roll y MIDI. Lo construí con Claude Code como compañero de programación.',
      stats: [
        { value: '26', label: 'efectos en cadena' },
        { value: '24', label: 'presets de voz' },
        { value: '5 ms', label: 'ventana de detección de tono' },
      ] as Stat[],
    },
    aiwilltrade: {
      name: 'AiWillTrade',
      tag: 'Startup de trading algorítmico · cofundador',
      summary: 'Construí el dashboard en React y la infraestructura en AWS para gestionar carteras a partir de predictores de machine learning en Python.',
    },
    quecomo: {
      name: '¿Qué como?',
      tag: 'Planificador de comidas',
      summary: 'Dice qué toca comer, monta la semana y crea la lista de la compra con precios reales. Tiene un bot de Telegram.',
    },
    carlog: {
      name: 'CarLog',
      tag: 'Los coches de casa, al día',
      summary: 'Averías, ITV, seguro, kilómetros y facturas de los coches de la familia, compartidos y disponibles sin conexión.',
    },
    homelog: {
      name: 'HomeLog',
      tag: 'Tareas de casa, entre todos',
      summary: 'Qué toca hoy en casa y cuándo se hizo cada cosa, con hogares compartidos y sincronización al volver la conexión.',
    },
    llanes: {
      name: 'Guía de Llanes',
      tag: 'Guía de viaje escrita por un llanisco',
      summary: 'Playas, rutas y restaurantes de Llanes (Asturias), con diseño editorial y versión en PDF.',
    },
  },
  about: {
    label: 'Perfil',
    title: 'Ingeniería primero. Producto siempre.',
    body: [
      'Soy ingeniero de telecomunicaciones con un máster en mecatrónica. Me gusta hacerme cargo de un área de producto de principio a fin: arquitectura, pruebas y cómo usa la gente el producto después de cada versión.',
      'En el trabajo usamos GitHub Copilot con modelos de Claude y OpenAI, y en mis proyectos uso Claude Code.',
    ],
    details: [
      { k: 'Formación', v: ['Ingeniería de Telecomunicación, Universidad de Oviedo', 'Máster en Mecatrónica, Universitat Politècnica de València', 'MBA, The Power MBA (2020–2021)'] },
      { k: 'Idiomas', v: ['Español', 'Inglés', 'Italiano'] },
      { k: 'Ubicación', v: ['Valencia, España (CET)', 'Remoto en Europa'] },
    ],
    capsLabel: 'Competencias',
    caps: [
      { title: 'Frontend', items: ['React · Next.js (SSR) · TypeScript', 'Micro-frontends · Vue 3', 'Material-UI · Tailwind', 'Accesibilidad WCAG 2.1 AA'] },
      { title: 'Backend y datos', items: ['Node · Express · BFF', 'REST · GraphQL · Prisma', 'PostgreSQL · MongoDB', 'Django · Java'] },
      { title: 'Calidad y entrega', items: ['Playwright · Cypress · Jest', 'Feature flags, versiones semanales', 'GitHub Actions · Azure · AWS', 'Application Insights · Clarity'] },
      { title: 'Liderazgo', items: ['Equipos de 5 ingenieros senior', 'Arquitectura y plan de entrega', 'Mentoría', 'Herramientas de IA para el equipo'] },
    ],
  },
  contact: {
    label: 'Contacto',
    title: '¿Buscas un Senior Frontend o Full-stack Engineer?',
    body: 'Escríbeme si tienes un puesto en mente o quieres comentar algo de esta página.',
    email: 'Escribir un correo',
  },
  footer: { built: 'Diseñado y construido por Ángel Candás con Astro', local: 'Hora local', top: 'Volver arriba' },
  notFound: { title: 'Página no encontrada', body: 'Esta página no existe.', back: 'Volver al inicio' },
};

type Copy = typeof es;

const en: Copy = {
  lang: 'en',
  meta: {
    title: 'Ángel Candás · Senior Frontend Engineer & Tech Lead · Regulated payments',
    description:
      'Ángel Candás, senior frontend engineer and tech lead in Valencia, Spain. 10+ years of React and TypeScript. Leads the frontend of a UK clearing bank’s business portal: PSD2 payments, Next.js and a team of 5 senior engineers.',
  },
  nav: { experience: 'Experience', work: 'Projects', about: 'About', contact: 'Contact', switch: 'ES', switchHref: '/es/', switchLabel: 'Leer en español' },
  skip: 'Skip to content',
  cv: 'Download CV',
  cvShort: 'CV',
  hero: {
    kicker: 'Senior Frontend Engineer · Tech Lead',
    location: 'Valencia, Spain · EU citizen · Remote across Europe (CET)',
    title: 'I build and lead frontend for *regulated payments*.',
    intro:
      '10+ years with React and TypeScript, seven of them leading teams. Today I lead the frontend of a UK clearing bank’s business portal: PSD2 payment and approval flows, Next.js with its own BFF, weekly releases behind feature flags, and a team of five senior engineers.',
    email: 'Email me',
    facts: [
      { value: '10+', label: 'years with React and TypeScript' },
      { value: '7', label: 'years leading teams' },
      { value: '5', label: 'senior engineers led' },
      { value: 'Weekly', label: 'production releases' },
    ],
    clientsLabel: 'Worked with',
    clients: ['UK clearing bank', 'Inditex', 'Dow Jones', 'CloudPay', 'Gilytics'],
  },
  release: {
    label: 'How each release ships',
    title: 'Business banking portal',
    badge: 'Weekly',
    steps: [
      { k: 'Merge to main', v: 'Code review and CI' },
      { k: 'End-to-end tests', v: 'Cypress and Playwright · 5 payment types' },
      { k: 'Feature flag', v: 'Azure App Configuration and a custom layer' },
      { k: 'Production', v: 'A release every week' },
      { k: 'Monitoring', v: 'Application Insights and Clarity' },
    ],
    foot: 'Dashboard Lighthouse',
  },
  experience: {
    label: 'Experience',
    title: 'Featured work',
    case: {
      eyebrow: 'Wizeline · Current client',
      title: 'Rebuilding a UK clearing bank’s business portal',
      summary:
        'The bank’s business customers use this portal to make payments, approve them and manage their users. I lead the rebuild in React, Next.js with SSR and Material-UI. The new portal is in closed beta and will replace a production portal used by thousands of business users.',
      meta: [
        { k: 'Role', v: 'Frontend tech lead' },
        { k: 'Team', v: '5 senior engineers' },
        { k: 'Domain', v: 'B2B payments · PSD2' },
        { k: 'Status', v: 'Closed beta' },
      ],
      ownLabel: 'What I own',
      bullets: [
        'Frontend architecture and the delivery plan, including a JavaScript backend-for-frontend inside the Next.js app.',
        'Payment and approval flows with PSD2 reauthentication patterns that meet WCAG 2.1 AA.',
        'End-to-end testing set up from scratch with Cypress and Playwright: smoke tests, 5 payment types, approvals, and user creation and deletion.',
        'A production release every week behind feature flags, using Azure App Configuration and a custom flag layer.',
        'Monitoring on Application Insights and Microsoft Clarity.',
      ],
      stack: ['React', 'Next.js SSR', 'TypeScript', 'Material-UI', 'JavaScript BFF', 'Cypress', 'Playwright', 'Azure'],
      perfScreen: 'Screen',
      perfLabel: 'Lighthouse performance: legacy portal vs new',
      perfLegend: { before: 'Legacy portal', after: 'New portal' },
      perfNames: { dashboard: 'Dashboard', payment: 'Payment form', approvals: 'Approvals' },
      perfCaption: 'Lighthouse performance score (0 to 100) on the same screens.',
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
        role: 'Full-Stack Developer · R&D Engineer',
        text: 'Precision-agriculture WebGIS in Angular and Django, and IoT telematic control systems in React and Java.',
        stack: ['Angular', 'Django', 'React', 'Java', 'IoT'],
      },
    ],
  },
  work: {
    label: 'Projects',
    title: 'Side projects',
    lead: 'Complete products I design, build and run outside work.',
    more: 'More projects',
    visit: 'Open',
    private: 'Private source',
    live: 'Live demo',
    signin: 'App (sign-in required)',
  },
  projects: {
    depthline: {
      name: 'Depthline',
      tag: 'Real-time order book for Kraken and Binance',
      summary:
        'Streams live order books from Kraken and Binance, checks every update with checksums and sequence numbers, and draws depth, candles and a liquidation heatmap within milliseconds of each message. Parsing and pattern detection run in workers over shared memory.',
      stats: [
        { value: '2', label: 'live exchanges' },
        { value: '5 / s', label: 'price-alert checks' },
      ] as Stat[],
    },
    cryptotax: {
      name: 'Crypto Tax ES',
      tag: 'Tax manager for Spanish crypto investors',
      summary:
        'Imports trades from Kraken and Binance through their signed APIs, computes FIFO cost basis and exports the Spanish tax forms. Full-stack TypeScript, from the exchange integrations to the interface.',
      flowLabel: 'From exchange to tax form',
      flow: ['Kraken · Binance', 'Signed APIs', 'FIFO cost basis', 'Tax forms'],
    },
    micfx: {
      name: 'MicFX',
      tag: 'Native voice studio & DAW',
      summary:
        'Real-time voice effects for your microphone, all local, with a few milliseconds of latency. It started as an autotune and is now a DAW with tracks, a mixer, a piano roll and MIDI. I built it with Claude Code as my pair programmer.',
      stats: [
        { value: '26', label: 'chained effects' },
        { value: '24', label: 'voice presets' },
        { value: '5 ms', label: 'pitch detection window' },
      ] as Stat[],
    },
    aiwilltrade: {
      name: 'AiWillTrade',
      tag: 'Algorithmic trading startup · co-founder',
      summary: 'Built the React dashboard and the AWS infrastructure for portfolio management driven by Python machine-learning predictors.',
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
    body: [
      'I’m a telecommunications engineer with a master’s in mechatronics. I like owning a product area end to end: architecture, testing, and what users actually do after a release.',
      'At work we use GitHub Copilot with Claude and OpenAI models, and I build my own projects with Claude Code.',
    ],
    details: [
      { k: 'Education', v: ['Telecommunications Engineering, University of Oviedo', 'MSc Mechatronics, Universitat Politècnica de València', 'MBA, The Power MBA (2020–2021)'] },
      { k: 'Languages', v: ['Spanish', 'English', 'Italian'] },
      { k: 'Location', v: ['Valencia, Spain (CET)', 'Remote across Europe'] },
    ],
    capsLabel: 'Skills',
    caps: [
      { title: 'Frontend', items: ['React · Next.js (SSR) · TypeScript', 'Micro-frontends · Vue 3', 'Material-UI · Tailwind', 'WCAG 2.1 AA accessibility'] },
      { title: 'Backend & data', items: ['Node · Express · BFF', 'REST · GraphQL · Prisma', 'PostgreSQL · MongoDB', 'Django · Java'] },
      { title: 'Quality & delivery', items: ['Playwright · Cypress · Jest', 'Feature flags, weekly releases', 'GitHub Actions · Azure · AWS', 'Application Insights · Clarity'] },
      { title: 'Leadership', items: ['Teams of 5 senior engineers', 'Architecture & delivery plans', 'Mentoring', 'AI tooling for the team'] },
    ],
  },
  contact: {
    label: 'Contact',
    title: 'Hiring a senior frontend or full-stack engineer?',
    body: 'Write to me about a role or about anything on this page.',
    email: 'Send an email',
  },
  footer: { built: 'Designed and built by Ángel Candás with Astro', local: 'Local time', top: 'Back to top' },
  notFound: { title: 'Page not found', body: 'This page doesn’t exist.', back: 'Back home' },
};

export const copy: Record<Lang, Copy> = { es, en };
export const smallProjects: SmallProjectId[] = ['aiwilltrade', 'quecomo', 'carlog', 'homelog', 'llanes'];
// Apps that show a sign-in screen to a visitor who is not logged in.
export const signInRequired: SmallProjectId[] = ['quecomo', 'carlog', 'homelog'];
export { shared as projectMeta };
