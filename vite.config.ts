import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize image assets
    assetsInlineLimit: 4096, // Inline images smaller than 4kb
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const fileName = assetInfo.name || 'asset';
          let extType = fileName.split('.').pop() || '';
          if (/png|jpe?g|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
      },
    },
  },
  server: {
    // Enable HTTP/2 server push for better performance
    middlewareMode: false,
  },
})
