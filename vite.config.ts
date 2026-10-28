import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the build works at any path (e.g. GitHub Pages project sites).
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    // The claude.ai page build embeds images, since it ships as a single file.
    assetsInlineLimit: process.env.VITE_ARTIFACT === '1' ? 50_000_000 : 4096,
  },
})
