const path = require('path');
const { build } = require('esbuild');
const { lessLoader } = require('esbuild-plugin-less');
const glob = require('tiny-glob');

// isProduction flag for watch mode
const isProduction = process.env.NODE_ENV === 'production';

(async () => {
  const entryPoints = await glob('./src/icons/*.tsx');

  build({
    watch: isProduction
      ? false
      : {
          onRebuild(error: any) {
            if (!error) {
              console.log('Build succeeded');
            }
          },
        },
    entryPoints: [
      path.resolve(__dirname, 'src/index.ts'),
      path.resolve(__dirname, 'src/styles/index.less'),
      ...entryPoints,
    ],
    outbase: 'src',
    bundle: true,
    format: 'esm',
    splitting: true,
    external: ['react'],
    outdir: path.resolve(__dirname, 'dist'),
    plugins: [lessLoader({})],
    loader: {
      '.ts': 'ts',
    },
  }).catch((e: Error) => console.error(e.message));
})();
