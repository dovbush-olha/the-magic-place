import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import macrosPlugin from 'vite-plugin-babel-macros';
// eslint-disable-next-line import/no-extraneous-dependencies
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), macrosPlugin(), svgr()],
  resolve: {
    alias: {
      app: '/src/app',
      modules: '/src/modules',
      pages: '/src/pages',
      shared: '/src/shared',
    },
  },
});
