import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import { siteConfig } from './src/config/site';

export default defineConfig({
  site: siteConfig.origin,
  output: 'static',
  server: {
    host: '127.0.0.1',
    port: 4321,
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      // Never move the live-reloading dev server to a surprise port. If 4321 is
      // occupied, fail loudly so an old process cannot masquerade as this one.
      strictPort: true,
      watch: {
        // Google Drive's mounted filesystem can drop native change events.
        // Polling keeps Vite's hot reload reliable in this workspace.
        usePolling: true,
        interval: 200,
      },
    },
    // Keep production-build inspection away from the canonical dev URL.
    preview: {
      host: '127.0.0.1',
      port: 4322,
      strictPort: true,
    },
  },
});
