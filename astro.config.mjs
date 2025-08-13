// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  devToolbar: {
    enabled: false
  },
  build: {
    inlineStylesheets: 'auto',
    assets: '_astro'
  },
  compressHTML: true,
  vite: {
    build: {
      cssCodeSplit: false,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      rollupOptions: {
        output: {
          manualChunks: undefined,
          assetFileNames: 'assets/[name].[hash][extname]',
          chunkFileNames: 'assets/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js'
        }
      }
    },
    css: {
      devSourcemap: true,
      // Optimización de CSS simplificada
      preprocessorOptions: {
        scss: {
          outputStyle: 'compressed'
        }
      }
    },
    // Optimizar caché para recursos estáticos
    server: {
      headers: {
        'Cache-Control': 'public, max-age=31536000'
      }
    }
  }
});
