import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ command }) => ({
  plugins: [vue()],
  // Dev mantém o path atual; build aponta para o projeto no GitHub Pages.
  base: command === 'serve' ? '/jornadacompleta/' : '/rede/',
}))
