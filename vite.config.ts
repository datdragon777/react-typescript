import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': `${path.resolve(__dirname, './src/assets/')}`,
      '@components': `${path.resolve(__dirname, './src/components/')}`,
      '@constants': `${path.resolve(__dirname, './src/constants/')}`,
      '@contexts': `${path.resolve(__dirname, './src/contexts/')}`,
      '@mocks': `${path.resolve(__dirname, './src/mocks/')}`,
      '@helpers': `${path.resolve(__dirname, './src/helpers/')}`,
      '@layouts': `${path.resolve(__dirname, './src/layouts/')}`,
      '@pages': `${path.resolve(__dirname, './src/pages/')}`,
      '@services': `${path.resolve(__dirname, './src/services')}`,
      '@themes': `${path.resolve(__dirname, './src/themes/')}`,
      '@stores': `${path.resolve(__dirname, './src/stores/')}`,
      '@hooks': `${path.resolve(__dirname, './src/hooks/')}`,
      '@types': `${path.resolve(__dirname, './src/types/')}`,
    },
  },
});
