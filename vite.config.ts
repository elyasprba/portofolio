import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portofolio/', // Add only this section
  server: {
    port: 4200,
  },
});
