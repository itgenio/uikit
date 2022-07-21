const path = require('path');
const fs = require('fs-extra');

function createCJSExportDeclaration(external) {
  return `module.exports = ${external};`;
}

module.exports = function (opts = {}) {
  let externals;
  let externalLibs;
  let shouldSkip = false;

  const externalCacheDir = path.join(process.cwd(), 'node_modules', '.vite_external');

  return {
    name: 'external',

    config(config, { mode }) {
      let tmp;
      externals = Object.assign({}, opts.externals, (tmp = opts[mode]) && tmp.externals);
      externalLibs = Object.keys(externals);
      shouldSkip = !externalLibs.length;

      if (shouldSkip) {
        return;
      }

      if (mode !== 'development') {
        return;
      }

      if (!fs.existsSync) {
        fs.mkdirSync(externalCacheDir);
      } else {
        fs.emptyDirSync(externalCacheDir);
      }

      let { resolve } = config;
      if (!resolve) {
        resolve = {};
        config.resolve = resolve;
      }

      let { alias } = resolve;
      if (!alias || typeof alias !== 'object') {
        alias = [];
        resolve.alias = alias;
      }

      if (!Array.isArray(alias)) {
        alias = Object.entries(alias).map(([key, value]) => {
          return { find: key, replacement: value };
        });
      }

      for (const libName of externalLibs) {
        const libPath = path.join(externalCacheDir, `${libName.replace(/\//g, '_')}.js`);
        fs.writeFileSync(libPath, createCJSExportDeclaration(externals[libName]));

        alias.push({ find: new RegExp(`^${libName}$`), replacement: libPath });
      }
    },

    options(opts) {
      if (shouldSkip) {
        return;
      }

      let { output, external } = opts;

      if (!output) {
        output = {};
        opts.output = output;
      }

      let { globals } = output;

      if (!globals) {
        globals = {};
        output.globals = globals;
      }

      Object.assign(globals, externals);

      if (!external) {
        external = [];
        opts.external = external;
      }

      external.push(...externalLibs);
    },
  };
};
