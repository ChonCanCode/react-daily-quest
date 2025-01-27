import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/react-daily-quest/' : '/', // Use '/' for local dev, '/react-daily-quest/' for production
  plugins: [react()],
}));