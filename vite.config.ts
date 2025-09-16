import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
        '.ts': 'ts',
        '.tsx': 'tsx',
      },
    },
  },
  esbuild: {
    jsx: 'automatic',
  },
  server: {
  hmr: {
    overlay: false
  }
},
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.tsx', '.json'],
  },
})
