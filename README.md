# sobrinotech.com

Portfolio de Angel Candas. Astro, CSS a mano y unas 200 líneas de TypeScript para el movimiento
(osciloscopio en canvas, revelado al hacer scroll, botones magnéticos). Bilingüe: `/` en inglés (público internacional) y `/es/` en español.

- Contenido: `src/i18n/content.ts`
- Componentes: `src/components/`
- Estilos globales: `src/styles/global.css`
- Comportamiento: `src/scripts/main.ts` (todo es mejora progresiva; sin JS la página está completa)
- Pruebas: `tests/run.mjs` (axe WCAG 2.2 AA, sin scroll horizontal, sin errores de consola, capturas en 3 tamaños, con y sin animaciones)
- Publicar: ver [DEPLOY.md](DEPLOY.md)

Lighthouse (móvil y escritorio): 100 en rendimiento, accesibilidad, buenas prácticas y SEO.
