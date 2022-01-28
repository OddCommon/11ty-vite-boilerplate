import path, { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  root: './_dev/',
  build: {
    outDir: `${path.resolve(__dirname, './dist')}`,
    rollupOptions: {
      input: {
        index: resolve(__dirname, './_dev/index.html'),
        about: resolve(__dirname, './_dev/about/index.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@scripts': `${path.resolve(__dirname, './_dev/scripts')}`,
      '@components': `${path.resolve(__dirname, './_dev/scripts/components')}`,
      '@styles': `${path.resolve(__dirname, './_dev/styles')}`,
    },
  },
});
