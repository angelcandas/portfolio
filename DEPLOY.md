# Publicar sobrinotech.com en Cloudflare Pages

El sitio es estático (Astro) y se publica con la integración de Git de Cloudflare Pages: Cloudflare
lee el repositorio y construye cada push. No hace falta ningún token ni secreto en GitHub.

```
push a master ─▶ Cloudflare Pages (proyecto "portfolio"): npm run build ─▶ dist/ ─▶ sobrinotech.com
push a otra rama / PR ─▶ vista previa en <rama>.portfolio-hqc.pages.dev
push / PR ─▶ GitHub Actions (quality.yml): build · astro check · pruebas (axe, desbordes, consola, capturas)
```

## Configuración actual en Cloudflare

- **Workers & Pages → portfolio**, conectado a `angelcandas/portfolio`.
- Rama de producción `master`, preset Astro, comando `npm run build`, salida `dist`.
- Dominios: `sobrinotech.com` y `www.sobrinotech.com` (Custom domains del proyecto).
- URL de Pages: https://portfolio-hqc.pages.dev/

Para que `www` redirija a la raíz: **sobrinotech.com (zona) → Rules → Redirect Rules → Redirect from WWW to root**.

Las pruebas de GitHub Actions no bloquean el despliegue de Cloudflare. Mira que el check esté en verde antes
de fusionar un PR a `master`.

## Correo

`hello@sobrinotech.com` (inglés) y `hola@sobrinotech.com` (español) están en `site.email` de
`src/i18n/content.ts`. Ambos se reenvían con **Email Routing** de la zona a la bandeja de trabajo.

## Día a día

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # astro check + build en dist/
npm test           # pruebas sobre dist/ (necesita `npx playwright install chromium` la primera vez)
```

Todo el texto, enlaces y proyectos están en `src/i18n/content.ts` (inglés y español).
