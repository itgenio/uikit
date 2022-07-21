const path = require('path');
const { build } = require('esbuild');
const { lessLoader } = require('esbuild-plugin-less');
const indexFilePlugin = require('./plugins/indexFilePlugin');
const svgrPlugin = require('./plugins/svgrPlugin');
const writePlugin = require('./plugins/writePlugin');

// isProduction flag for watch mode
const isProduction = process.env.NODE_ENV === 'production';

(async () => {
  const options = {
    format: 'esm',
    keepNames: true,
    outdir: path.resolve(__dirname, '..'),
    watch: isProduction
      ? false
      : {
          onRebuild(error) {
            if (!error) {
              console.log('Build succeeded');
            }
          },
        },
  };

  const { globby } = await import('globby');

  const entryPoints = await globby([
    'src/components/icons/index.ts', // icons
    'src/components/*/index.tsx', // components
    '!src/components/internal', // exclude internal components
  ]);

  await Promise.allSettled([
    build({
      ...options,
      entryPoints,
      bundle: true,
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
      plugins: [lessLoader(), svgrPlugin(), writePlugin()],
    }).catch(e => console.error(e.message)),

    build({
      ...options,
      entryPoints: ['src/index.ts', 'src/index.less'],
      plugins: [lessLoader(), indexFilePlugin()],
    }).catch(e => console.error(e.message)),
  ]);
})();
