import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    strictPort: true, // Ensures port usage strictness
  },
  build: {
    target: 'modules', // or 'modules' if targeting older browsers
  },
});
