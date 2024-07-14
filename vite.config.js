import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/NoteApp/', // Buraya repository adını ekle
  plugins: [vue()]
})
