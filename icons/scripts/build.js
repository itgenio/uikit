const path = require('path');
const { build } = require('esbuild');
const { lessLoader } = require('esbuild-plugin-less');
const svgPlugin = require('./plugins/svgPlugin');
const { writePlugin } = require('./plugins/writePlugin');

// isProduction flag for watch mode
const isProduction = process.env.NODE_ENV === 'production';

(async () => {
  const { globby } = await import('globby');

  const entryPoints = await globby(['src/index.ts', 'src/custom/svg', 'src/fluent/svg']);

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
    external: ['react', 'react-dom', '@itgenio/utils'],
    plugins: [lessLoader(), svgPlugin(), writePlugin()],
  }).catch(e => console.error(e.message));
})();
