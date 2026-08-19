import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    host: true,
  },
  build: {
    // Code splitting: separate vendor chunks for better caching
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'vendor-react'
          }
          if (id.includes('node_modules/framer-motion') || id.includes('node_modules/lenis')) {
            return 'vendor-animation'
          }
        },
      },
    },
    // Minification
    sourcemap: false,
    // Target modern browsers for smaller bundles
    target: 'es2020',
    // Chunk size warning limit
    chunkSizeWarningLimit: 600,
  },
})
