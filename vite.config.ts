import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // Proxy all requests to the specified domain
      '/api': {
        target: 'https://lapi.transitchicago.com',
        changeOrigin: true,
        rewrite: (path) => {
          // Optionally, you can modify the path here if needed
          return path;
        },
      },
    },
  },
  plugins: [react()],
});
