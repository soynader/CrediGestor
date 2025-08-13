// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
    assets: '_astro'
  },
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    }
  }
});