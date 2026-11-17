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
        refund: 'refund.html',
        statusSaver: 'status-saver.html',
        imageConverter: 'image-to-file-converter.html',
        duplicateRemover: 'duplicate-photo-remover.html',
        applock: 'applock-lockit-pro.html',
        otpSaver: 'otp-saver.html',
      },
    },
  },
});
