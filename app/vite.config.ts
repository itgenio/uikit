import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dynamicImport from 'vite-plugin-dynamic-import';
// import dynamicImport from './dynamicImport';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dynamicImport({
      onFiles(files) {
        return files.filter(file => {
          return (
            !file.includes('node_modules/@itgenio/icons') ||
            /node_modules\/@itgenio\/icons\/\w+.(\.d\.ts|\.js)/.test(file)
          );
        });
      },
    }),
  ],
  preview: { port: 3005 },
});
