import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  build: {
    outDir: './build',
  },
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('/src', import.meta.url)) },
    ],
  },
  css: {
    preprocessorOptions: {
        scss: {
            api: "modern-compiler"
        }
    }
  },
  plugins: [vue()],
})
