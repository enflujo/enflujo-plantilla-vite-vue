import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  clearScreen: false,
  build: {
    outDir: 'publico',
    assetsDir: 'recursos',
    sourcemap: true,
  },
  publicDir: 'estaticos',
  server: {
    port: 3000,
  },
});
