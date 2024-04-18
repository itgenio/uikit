const fs = require('fs');
const path = require('path');
const svgrTransform = require('@svgr/core').transform;
const uniqueIdsPlugin = require('./uniqueIdsPlugin').plugin;

const escapedPathSep = [...path.sep].map(char => `\\${char}`).join('');

const EMOJI_PATH_FILTER = new RegExp([`emoji`, `assets`, `\\w+\\.svg$`].join(escapedPathSep));

const getContents = async ({ svgFilePath, svgrConfig = {}, svgoConfig: fullSvgoConfig = {}, svgProps = {} }) => {
  const svgContent = await fs.promises.readFile(svgFilePath, 'utf8');

  const { plugins: svgoPlugins = [], ...svgoConfig } = fullSvgoConfig;

  return await svgrTransform(
    svgContent,
    {
      expandProps: 'start',
      titleProp: true,
      dimensions: false,
      plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
      jsx: { babelConfig: { plugins: [uniqueIdsPlugin] } },
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
                moveElemsAttrsToGroup: false,
              },
            },
          },
          'removeXMLNS',
          // 'prefixIds', // Не используем. Для генерации id используется плагин uniqueIdsPlugin
          ...svgoPlugins,
        ],
        ...svgoConfig,
      },
      svgProps: {
        focusable: false,
        color: 'inherit',
        'aria-hidden': '{props.title ? undefined : true}',
        ...svgProps,
      },
      ...svgrConfig,
    },
    { filePath: svgFilePath }
  );
};

module.exports = () => ({
  name: 'svg',
  setup(build) {
    // Emoji
    build.onLoad({ filter: EMOJI_PATH_FILTER }, async args => {
      const contents = await getContents({
        svgFilePath: args.path,
        svgProps: { className: '{"gkit-emoji" + (props.className ? " " + props.className : "")}' },
      });

      return {
        contents,
        loader: 'tsx',
      };
    });
  },
});
