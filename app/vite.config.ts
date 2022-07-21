import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// @ts-expect-error
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: { port: 3005 },
  resolve: {
    // @ts-expect-error
    alias: [{ find: '@itgenio/gkit', replacement: path.resolve(__dirname, '../gkit') }],
  },
});
