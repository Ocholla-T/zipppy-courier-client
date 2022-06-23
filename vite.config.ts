import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@styles': path.resolve(__dirname, './src/assets/styles'),
      '@store': path.resolve(__dirname, './src/store'),
      '@ui': path.resolve(__dirname, './src/components/ui'),
      '@pages': path.resolve(__dirname, './src/components/pages'),
    },
  },
})
