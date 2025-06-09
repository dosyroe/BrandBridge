import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8085,
    open: true, // Автоматически открывать браузер при запуске
    historyApiFallback: true,
  },
  build: {
    outDir: 'build', // Папка для сборки (аналогично create-react-app)
  },
});