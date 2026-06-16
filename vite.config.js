import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Build the standalone legal pages alongside the main app so they're
      // emitted into dist/ and Vercel can serve /terms.html and /privacy.html.
      input: {
        main: 'index.html',
        terms: 'terms.html',
        privacy: 'privacy.html',
      },
    },
  },
});
