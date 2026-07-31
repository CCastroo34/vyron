import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        faq: resolve(__dirname, 'faq.html'),
        features: resolve(__dirname, 'features.html'),
        requirements: resolve(__dirname, 'requirements.html'),
        updates: resolve(__dirname, 'updates.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        notFound: resolve(__dirname, '404.html'),
      },
    },
  },
})
