import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// @ts-expect-error
const externalPlugin = require('./viteExternal.js');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    externalPlugin({
      externals: {
        '@itgenio/gkit': '@itgenio/gkit',
      },
    }),
  ],
  preview: { port: 3005 },
});
