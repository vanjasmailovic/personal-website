import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import { siteConfig } from './src/config/site';

export default defineConfig({
  site: siteConfig.origin,
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
