import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
// @ts-expect-error
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    preserveSymlinks: true,
    alias: [
      {
        find: '@itgenio/gkit',
        // @ts-expect-error
        replacement: path.resolve(__dirname, './node_modules/@itgenio/gkit'),
        customResolver: (...args) => {
          console.log({ args });

          return args[0];
        },
      },
    ],
  },
});
