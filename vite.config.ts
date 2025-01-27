import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react-daily-quest/', // Add the repository name
  plugins: [react()],
});