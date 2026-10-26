const path = require('path');

module.exports = ({ entryPoints }) => ({
  name: 'external-entries',
  setup(build) {
    const srcDir = path.resolve('src');
    const isRootFile = file => path.dirname(file) === srcDir;

    const entryFiles = entryPoints.map(entryPoint => path.resolve(entryPoint)).filter(file => !isRootFile(file));

    build.onResolve(
      { filter: /^\.\.?\// },
      async ({ path: importPath, resolveDir, importer, namespace, kind, pluginData }) => {
        if (kind === 'entry-point' || pluginData?.isExternalEntriesCheck || isRootFile(importer)) return;

        const { path: resolvedPath, errors } = await build.resolve(importPath, {
          importer,
          namespace,
          resolveDir,
          kind,
          pluginData: { isExternalEntriesCheck: true },
        });

        if (errors.length || !entryFiles.includes(resolvedPath)) return;

        const entryDir = path.dirname(resolvedPath);

        if (importer.startsWith(entryDir + path.sep)) return;

        return { path: `../${path.basename(entryDir)}/index.js`, external: true };
      }
    );
  },
});
