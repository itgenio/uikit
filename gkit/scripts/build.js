const path = require('path');
const { build } = require('esbuild');
const { lessLoader } = require('esbuild-plugin-less');
const svgPlugin = require('./plugins/svgPlugin');
const writePlugin = require('./plugins/writePlugin');
const externalEntriesPlugin = require('./plugins/externalEntriesPlugin');

// isProduction flag for watch mode
const isProduction = process.env.NODE_ENV === 'production';

(async () => {
  const { globby } = await import('globby');

  const entryPoints = await globby([
    'src/index.ts', // global styles
    'src/components/emoji/index.ts', // emoji
    'src/components/*/index.tsx', // components
    'src/components/internal/components/*/index.tsx', // internal components with styles
  ]);

  // Каждая точка входа собирается в <имя папки>/index.js, поэтому имена папок должны быть уникальными
  const entryNames = entryPoints.map(entryPoint => path.basename(path.dirname(entryPoint)));
  const duplicatedNames = entryNames.filter((name, index) => entryNames.indexOf(name) !== index);

  if (duplicatedNames.length) {
    throw new Error(`Entry points with the same name: ${duplicatedNames.join(', ')}`);
  }

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
    target: 'es6',
    keepNames: true,
    outdir: path.resolve(__dirname, '..'),
    entryPoints,
    minify: true,
    bundle: true,
    write: false, // check writePlugin
    external: [
      'react',
      'react-dom',
      'classnames',
      'react-focus-lock',
      '@itgenio/icons',
      '@itgenio/utils',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-select',
      '@radix-ui/react-toggle-group',
      '@radix-ui/react-popover',
      '@radix-ui/react-tooltip',
      '@radix-ui/react-toast',
      'use-onclickoutside',
    ],
    plugins: [externalEntriesPlugin({ entryPoints }), lessLoader(), svgPlugin(), writePlugin()],
  }).catch(e => {
    console.error(e.message);
    process.exitCode = 1;
  });
})();
