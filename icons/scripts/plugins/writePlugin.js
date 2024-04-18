const fs = require('fs');
const path = require('path');
const { groupByPropertyToDict, chunkArray } = require('@itgenio/utils');

const JS_EXT = '.js';
const TS_DEC_EXT = '.d.ts';
const ICONS_LIST_FILENAME = 'iconsList';
const FLUENT_ICON_PREFIX = 'ic_fluent_';

module.exports = {
  FLUENT_ICON_PREFIX,
  writePlugin: () => ({
    name: 'write',
    setup(build) {
      const outDir = path.resolve(process.cwd());

      build.onEnd(async result => {
        const files = result.outputFiles;

        const filesDict = groupByPropertyToDict(files, file => file.path);

        const iconsList = [];

        const filesChunks = chunkArray(files, 100);

        for (const chunk of filesChunks) {
          await Promise.allSettled(
            chunk.map(async file => {
              const filePath = file.path;
              let fileContent = file.text;

              const fileDir = path.dirname(filePath);
              let fileName = path.basename(filePath).replace(FLUENT_ICON_PREFIX, '');

              const fileNameWithoutExt = fileName.replace(JS_EXT, '');

              const fileNameParts = fileName.replace(JS_EXT, '').split('_');

              const isRegular = fileNameParts.at(-1) === 'regular';

              fileNameParts.splice(fileNameParts.length - 2, isRegular ? 2 : 1);
              fileNameParts.push('icon');

              const promises = [];

              if (filePath.endsWith(JS_EXT)) {
                const cssFileRelativePath = `./${fileNameWithoutExt}.css`;
                const cssFile = filesDict[path.resolve(fileDir, cssFileRelativePath)];

                if (cssFile) {
                  fileContent = `import '${cssFileRelativePath}';\n${fileContent}`;
                }

                if (fileNameWithoutExt !== 'index') {
                  const componentName = fileNameParts.map(part => part[0].toUpperCase() + part.slice(1)).join('');
                  const fileNameWithoutExt = componentName[0].toLowerCase() + componentName.slice(1);

                  iconsList.push([fileNameWithoutExt, componentName]);

                  fileName = `${fileNameWithoutExt}${JS_EXT}`;

                  promises.push(
                    fs.promises.writeFile(
                      path.resolve(outDir, `${fileNameWithoutExt}${TS_DEC_EXT}`),
                      `/// <reference types="react" />
  import { SvgIconProps } from './types';
  export declare function ${componentName}({ className, ...props }?: Partial<SvgIconProps>): JSX.Element;
                `
                    )
                  );
                }
              }

              promises.push(fs.promises.writeFile(path.resolve(outDir, fileName), fileContent));

              await Promise.allSettled(promises);
            })
          );
        }

        await Promise.allSettled([
          fs.promises.writeFile(
            path.resolve(outDir, `${ICONS_LIST_FILENAME}${JS_EXT}`),
            `var iconsList = ${JSON.stringify(iconsList)};
  export { iconsList };
  `
          ),
          fs.promises.writeFile(
            path.resolve(outDir, `${ICONS_LIST_FILENAME}${TS_DEC_EXT}`),
            `export declare var iconsList: [string, string][];`
          ),
        ]);
      });
    },
  }),
};
