// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://sobrinotech.com',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en-US', es: 'es-ES' } },
      filter: (page) => !page.includes('404'),
    }),
  ],
  build: { inlineStylesheets: 'auto' },
});
