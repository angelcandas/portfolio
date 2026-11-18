// All copy for the site lives here, in both languages.
// To change a project, a link or a sentence, edit this file only.

export type Lang = 'es' | 'en';

export const site = {
  name: 'Angel Candas',
  domain: 'sobrinotech.com',
  url: 'https://sobrinotech.com',
  github: 'https://github.com/angelcandas',
  linkedin: 'https://www.linkedin.com/in/angelcandas/',
  // Leave empty to hide the email button. Example: 'hola@sobrinotech.com'
  email: '',
  location: 'Asturias, España',
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
    title: 'Angel Candas · Ingeniero y desarrollador',
    description:
      'Portfolio de Angel Candas: ingeniero de telecomunicaciones que construye software de audio en tiempo real, PWAs y productos web de principio a fin.',
  },
  nav: { work: 'Trabajo', about: 'Perfil', contact: 'Contacto', switch: 'EN', switchHref: '/en/', switchLabel: 'Read in English' },
  skip: 'Saltar al contenido',
  hero: {
    kicker: 'Ingeniero de telecomunicaciones · Desarrollador',
    lines: ['Construyo software', 'que *suena*, se instala', 'y se usa a diario.'],
    intro:
      'Del procesado de señal en C++ a apps web que funcionan sin conexión. Diseño, programo y pongo en producción productos completos.',
    cta: 'Ver proyectos',
    status: 'Abierto a nuevos proyectos',
    scroll: 'Desliza',
  },
  marquee: ['Audio en tiempo real', 'C++ / JUCE', 'PWAs', 'React', 'TypeScript', 'Firebase', 'Cloudflare', 'IoT', 'DSP', 'Pruebas end-to-end'],
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
    body: [
      'Soy ingeniero de telecomunicaciones y mecatrónica. Empecé diseñando placas, redes y firmware para sistemas IoT, y hoy construyo software de principio a fin: el motor de audio, la interfaz, las pruebas y el despliegue.',
      'Me gustan los productos que la gente usa de verdad. Casi todo lo que hay en esta página lo usamos en casa cada día.',
    ],
    capsLabel: 'Lo que hago',
    caps: [
      { title: 'Audio y tiempo real', items: ['C++20 · JUCE', 'DSP: pitch, FFT, filtros', 'Plugins AU / VST3', 'MIDI y automatización'] },
      { title: 'Producto web', items: ['PWAs que funcionan sin conexión', 'React · TypeScript · Vite', 'JavaScript sin dependencias', 'Diseño de interfaz'] },
      { title: 'Backend y nube', items: ['Firebase · Firestore · Auth', 'Cloudflare Workers y Pages', 'Node · Django · Docker', 'CI/CD con GitHub Actions'] },
      { title: 'Hardware e IoT', items: ['Diseño de PCB', 'Electrónica embebida', 'Wi-Fi, Zigbee, RFID, MQTT', 'Backend en Java'] },
    ],
    expLabel: 'Experiencia',
    exp: [
      { org: 'Otus Robotic Engineering', role: 'Ingeniero y desarrollador', text: 'Sistema IoT para una terminal portuaria en un equipo de tres: diseño del sistema, PCB, red Wi-Fi, firmware embebido y backend en Java.' },
      { org: 'Skiconnect', role: 'I+D en RFID', text: 'Investigación de tecnologías RFID y diseño de una aplicación para localizar clientes dentro de una estación.' },
      { org: 'ArcelorMittal', role: 'Ingeniero electrónico en prácticas', text: 'Comparativa de módulos Zigbee de bajo consumo para comunicaciones industriales.' },
      { org: 'HRK Studios', role: 'Producción audiovisual', text: 'Cortometraje producido por HRK Studios, participante en el Festival Internacional de Cine de Gijón.' },
    ],
  },
  contact: {
    label: 'Contacto',
    title: ['¿Tienes algo', 'en mente?'],
    body: 'Escríbeme y lo hablamos.',
    email: 'Escribir un correo',
  },
  footer: { built: 'Diseñado y construido por Angel Candas', local: 'Hora local', top: 'Volver arriba' },
  notFound: { title: 'Señal perdida', body: 'Esta página no existe.', back: 'Volver al inicio' },
};

type Copy = typeof es;

const en: Copy = {
  lang: 'en',
  meta: {
    title: 'Angel Candas · Engineer & developer',
    description:
      'Portfolio of Angel Candas: telecommunications engineer building real-time audio software, offline-first PWAs and web products end to end.',
  },
  nav: { work: 'Work', about: 'About', contact: 'Contact', switch: 'ES', switchHref: '/', switchLabel: 'Leer en español' },
  skip: 'Skip to content',
  hero: {
    kicker: 'Telecommunications engineer · Developer',
    lines: ['I build software', 'that *sounds* good, installs', 'and gets used daily.'],
    intro:
      'From signal processing in C++ to web apps that work offline. I design, code and ship complete products.',
    cta: 'See projects',
    status: 'Open to new projects',
    scroll: 'Scroll',
  },
  marquee: ['Real-time audio', 'C++ / JUCE', 'PWAs', 'React', 'TypeScript', 'Firebase', 'Cloudflare', 'IoT', 'DSP', 'End-to-end tests'],
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
    body: [
      'I’m a telecommunications and mechatronics engineer. I started out designing boards, networks and firmware for IoT systems, and today I build software end to end: the audio engine, the interface, the tests and the deployment.',
      'I like products people actually use. Almost everything on this page is used at home every day.',
    ],
    capsLabel: 'What I do',
    caps: [
      { title: 'Audio & real time', items: ['C++20 · JUCE', 'DSP: pitch, FFT, filters', 'AU / VST3 plugins', 'MIDI & automation'] },
      { title: 'Web product', items: ['Offline-first PWAs', 'React · TypeScript · Vite', 'Dependency-free JavaScript', 'Interface design'] },
      { title: 'Backend & cloud', items: ['Firebase · Firestore · Auth', 'Cloudflare Workers & Pages', 'Node · Django · Docker', 'CI/CD with GitHub Actions'] },
      { title: 'Hardware & IoT', items: ['PCB design', 'Embedded electronics', 'Wi-Fi, Zigbee, RFID, MQTT', 'Java backends'] },
    ],
    expLabel: 'Experience',
    exp: [
      { org: 'Otus Robotic Engineering', role: 'Engineer & developer', text: 'IoT system for a port terminal in a team of three: system design, PCB, Wi-Fi network, embedded firmware and Java backend.' },
      { org: 'Skiconnect', role: 'RFID R&D', text: 'Researched RFID technologies and designed an app to locate customers inside a ski resort.' },
      { org: 'ArcelorMittal', role: 'Electronics engineering intern', text: 'Benchmarked low-power Zigbee modules for industrial communications.' },
      { org: 'HRK Studios', role: 'Film production', text: 'Short film produced by HRK Studios, screened at the Gijón International Film Festival.' },
    ],
  },
  contact: {
    label: 'Contact',
    title: ['Got something', 'in mind?'],
    body: 'Drop me a line and let’s talk.',
    email: 'Send an email',
  },
  footer: { built: 'Designed and built by Angel Candas', local: 'Local time', top: 'Back to top' },
  notFound: { title: 'Signal lost', body: 'This page doesn’t exist.', back: 'Back home' },
};

export const copy: Record<Lang, Copy> = { es, en };
export const projectOrder: ProjectId[] = ['micfx', 'quecomo', 'carlog', 'homelog', 'llanes'];
export { shared as projectMeta, archive };
