import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://youzi900g-bblin.github.io',
  integrations: [sitemap()],
});
