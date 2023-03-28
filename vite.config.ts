import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
  },
  resolve: {
    alias: {
      ui: '/src/ui',
      components: '/src/components',
      modules: '/src/modules',
      pages: '/src/pages',
      services: 'src/services',
      assets: 'src/assets',
    },
  },
});
