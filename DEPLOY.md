# Publicar sobrinotech.com en Cloudflare Pages

El sitio es estático (Astro). Cada push a `master` pasa las pruebas en GitHub Actions y, si todo va bien,
se publica en Cloudflare Pages. Cada pull request se publica también en una URL de vista previa.

```
push / PR ─▶ GitHub Actions: build · astro check · pruebas (axe, desbordes, consola) ─▶ wrangler pages deploy
                                                                                      ├─ master → sobrinotech.com
                                                                                      └─ rama → <rama>.sobrinotech.pages.dev
```

## Configuración (una sola vez, desde tu ordenador)

Necesitas Node 22, la CLI de GitHub (`gh auth login`) y el navegador.

```bash
git clone https://github.com/angelcandas/portfolio.git sobrinotech && cd sobrinotech
bash tools/setup-cloudflare.sh
```

El script:

1. Inicia sesión en Cloudflare con `wrangler login`.
2. Crea el proyecto de Pages `sobrinotech` con `master` como rama de producción.
3. Te pide un token de API (Create Custom Token → **Account · Cloudflare Pages · Edit**).
4. Guarda `CLOUDFLARE_API_TOKEN` y `CLOUDFLARE_ACCOUNT_ID` como secretos del repositorio.
5. Añade `sobrinotech.com` y `www.sobrinotech.com` como dominios del proyecto.

Si el paso 5 no se puede hacer por API, hazlo a mano (son dos clics, el DNS ya está en Cloudflare):
**Workers & Pages → sobrinotech → Custom domains → Set up a custom domain →** `sobrinotech.com` y luego
`www.sobrinotech.com`. Cloudflare crea los registros CNAME solo. Si en la zona ya hay registros A/AAAA/CNAME
para `@` o `www` (por ejemplo de un aparcamiento de dominio), bórralos antes.

Para que `www` redirija a la raíz: **sobrinotech.com (zona) → Rules → Redirect Rules → Redirect from WWW to root**.

## Día a día

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # astro check + build en dist/
npm test           # pruebas sobre dist/ (necesita `npx playwright install chromium` la primera vez)
```

Todo el texto, enlaces y proyectos están en `src/i18n/content.ts` (español e inglés).
Para mostrar un correo de contacto, rellena `site.email` en ese archivo.
