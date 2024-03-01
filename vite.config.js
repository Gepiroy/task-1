import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/task-2/wp-content/themes/task-2/dist/", //at the end it should make links like "/task-2/wp-content/themes/task-2/dist/assets/index-B4sr1-xF.js"
  build: {
    outDir: "C:/Users/1/Desktop/server/task-2/wp-content/themes/task-2/dist"
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@c': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@img': fileURLToPath(new URL('./src/assets/img', import.meta.url))
    }
  }
})
