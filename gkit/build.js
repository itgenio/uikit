const path = require('path');
const { build } = require('esbuild');
const { lessLoader } = require('esbuild-plugin-less');
const svgrPlugin = require('./svgrPlugin');

(async () => {
  build({
    entryPoints: [path.resolve(__dirname, 'src/index.ts')],
    outbase: 'src',
    bundle: true,
    format: 'esm',
    splitting: true,
    keepNames: true,
    external: [
      'react',
      'react-dom',
      'classnames',
      'focus-trap-react',
      '@radix-ui/react-toggle-group',
      '@radix-ui/react-popover',
      '@radix-ui/react-tooltip',
      'use-onclickoutside',
      '@itgenio/utils',
    ],
    outdir: path.resolve(__dirname, 'dist'),
    plugins: [lessLoader({}), svgrPlugin()],
    loader: {
      '.ts': 'ts',
    },
  }).catch(e => console.error(e.message));
})();
