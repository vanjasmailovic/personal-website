import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import { siteConfig } from './src/config/site';

export default defineConfig({
  site: siteConfig.origin,
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    server: {
      watch: {
        // Google Drive's mounted filesystem can drop native change events.
        // Polling keeps Vite's hot reload reliable in this workspace.
        usePolling: true,
        interval: 200,
      },
    },
  },
});
