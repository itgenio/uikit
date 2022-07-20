const path = require('node:path/win32');
const { build } = require('esbuild');
const { lessLoader } = require('esbuild-plugin-less');
const svgrPlugin = require('./svgrPlugin');
const writePlugin = require('./writePlugin');

// isProduction flag for watch mode
const isProduction = process.env.NODE_ENV === 'production';

(async () => {
  const { globby } = await import('globby');

  const entryPoints = await globby([
    'src/index.ts', // global styles
    'src/icons/index.ts', // icons
    'src/components/*/index.tsx', // components
    '!src/components/internal', // exclude internal components
  ]);

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
    entryPoints,
    bundle: true,
    format: 'esm',
    keepNames: true,
    write: false, // check writePlugin
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
    outdir: path.resolve(__dirname, '..'),
    plugins: [lessLoader(), svgrPlugin(), writePlugin()],
  }).catch(e => console.error(e.message));
})();
