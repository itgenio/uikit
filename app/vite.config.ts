import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// @ts-expect-error
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    preserveSymlinks: true,
    // @ts-expect-error
    alias: [{ find: '@itgenio/gkit', replacement: path.resolve(__dirname, './node_modules/@itgenio/gkit') }],
  },
});
