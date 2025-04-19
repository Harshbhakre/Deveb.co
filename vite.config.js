import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import glsl from 'vite-plugin-glsl';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),glsl()
  ],
  server: {
    host: '0.0.0.0', // Allow external access
    port: 5173,      // Optional: specify port if needed
  }
})
