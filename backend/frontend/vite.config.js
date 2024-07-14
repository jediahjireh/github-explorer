// vite.config.js

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    // desired port number for vite development server
    port: 8000,
    proxy: {
      '/api': {
        // backend server
        target: 'http://localhost:8080/api',
        // needed for virtual hosted sites
        changeOrigin: true,
        // rewrite path
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});