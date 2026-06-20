import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/static/',
  plugins: [react()],
  build: {
    outDir: '../../womendb-back-repo/frontend_build/dist',
    emptyOutDir: true,
  },
})