const path = require('path');
const { build } = require('esbuild');
const { lessLoader } = require('esbuild-plugin-less');
const svgrPlugin = require('./plugins/svgrPlugin');
const writePlugin = require('./plugins/writePlugin');

// isProduction flag for watch mode
const isProduction = process.env.NODE_ENV === 'production';

(async () => {
  const { globby } = await import('globby');

  const entryPoints = await globby([
    'src/index.ts', // global styles
    'src/components/icons/index.ts', // icons
    'src/components/*/index.tsx', // components
    '!src/components/internal', // exclude internal components
  ]);

  await build({
    watch: isProduction
      ? false
      : {
          onRebuild(error) {
            if (!error) {
              console.log('Build succeeded');
            }
          },
        },
    format: 'esm',
    keepNames: true,
    outdir: path.resolve(__dirname, '..'),
    entryPoints,
    bundle: true,
    write: false, // check writePlugin
    external: [
      'react',
      'react-dom',
      'classnames',
      'focus-trap-react',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-select',
      '@radix-ui/react-toggle-group',
      '@radix-ui/react-popover',
      '@radix-ui/react-tooltip',
      'use-onclickoutside',
      '@itgenio/utils',
    ],
    plugins: [lessLoader(), svgrPlugin(), writePlugin()],
  }).catch(e => console.error(e.message));
})();
