import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import macrosPlugin from 'vite-plugin-babel-macros';

export default defineConfig({
  plugins: [react(), macrosPlugin()],
  resolve: {
    alias: {
      ui: '/src/ui',
      components: '/src/components',
      modules: '/src/modules',
      pages: '/src/pages',
      services: '/src/services',
      assets: '/src/assets',
    },
  },
});
