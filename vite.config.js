import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/crbc/' // Replace 'your-repo-name' with the repository name
})
