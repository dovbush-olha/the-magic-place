import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import macrosPlugin from 'vite-plugin-babel-macros';
// eslint-disable-next-line import/no-extraneous-dependencies
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), macrosPlugin(), svgr()],
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
