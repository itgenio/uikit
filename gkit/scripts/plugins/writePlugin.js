const fs = require('fs');
const path = require('path');
const { groupByPropertyToDict } = require('@itgenio/utils');

const JS_EXT = '.js';

module.exports = () => ({
  name: 'write',
  setup(build) {
    const cwd = process.cwd();

    build.onEnd(async result => {
      const files = result.outputFiles;

      const filesDict = groupByPropertyToDict(files, file => file.path);

      await Promise.allSettled(
        files.map(async file => {
          const filePath = file.path;
          let fileText = file.text;

          const fileDir = path.dirname(filePath);
          const fileName = path.basename(filePath);
          const fileNameWithoutExt = fileName.replace(JS_EXT, '');

          const outFolder = fileDir.replace(cwd, '').split('\\').at(-1);
          const outDir = path.resolve(cwd, outFolder);

          await fs.promises.mkdir(outDir, { recursive: true });

          // Если это JS сборка, то нужно импортировать в него CSS сборку
          if (filePath.endsWith(JS_EXT)) {
            const cssFileRelativePath = `./${fileNameWithoutExt}.css`;

            const cssFile = filesDict[path.resolve(fileDir, cssFileRelativePath)];

            if (cssFile) {
              fileText = `import '${cssFileRelativePath}';\n${fileText}`;
            }

            const packageJsonPath = path.resolve(outDir, './package.json');

            if (!fs.existsSync(packageJsonPath)) {
              const packageJsonContent = `{\n  "sideEffects": false,\n  "module": "./index.js",\n  "typings": "./index.d.ts"\n}`;

              await fs.promises.writeFile(packageJsonPath, packageJsonContent);
            }
          }

          await fs.promises.writeFile(path.resolve(outDir, fileName), fileText);
        })
      );
    });
  },
});
