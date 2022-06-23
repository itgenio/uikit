const path = require('path');
const { build } = require('esbuild');
const { lessLoader } = require('esbuild-plugin-less');

// isProduction flag for watch mode
const isProduction = process.env.NODE_ENV === 'production';

(async () => {
  build({
    watch: isProduction
      ? false
      : {
          onRebuild(error) {
            if (!error) {
              console.log('Build succeeded');
            }
          },
        },
    entryPoints: [path.resolve(__dirname, 'src/index.ts')],
    outbase: 'src',
    bundle: true,
    format: 'esm',
    splitting: true,
    external: [
      'react',
      'react-dom',
      'classnames',
      'focus-trap-react',
      '@radix-ui/react-toggle-group',
      '@radix-ui/react-popover',
      '@radix-ui/react-tooltip',
      'use-onclickoutside',
    ],
    outdir: path.resolve(__dirname, 'dist'),
    plugins: [lessLoader({})],
    loader: {
      '.ts': 'ts',
    },
  }).catch(e => console.error(e.message));
})();
