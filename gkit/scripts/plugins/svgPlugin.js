const fs = require('fs');
const path = require('path');
const svgrTransform = require('@svgr/core').transform;

const escapedPathSep = [...path.sep].map(char => `\\${char}`).join('');

const ICONS_PATH_FILTER = new RegExp([`icons`, `assets`, `\\w+\\.svg$`].join(escapedPathSep));
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
          'prefixIds',
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
    // Icons
    build.onLoad({ filter: ICONS_PATH_FILTER }, async args => {
      const contents = await getContents({
        svgFilePath: args.path,
        svgProps: { className: '{"gkit-svg-icon" + (props.className ? " " + props.className : "")}' },
        svgrConfig: { replaceAttrValues: { '#212121': 'currentColor' } },
        svgoConfig: {
          plugins: [
            // Для иконок можно удалить, т.к. он лишний,
            // для эмодзи оставляем, т.к. они отображаются не корректно, если удалить
            { name: 'removeAttrs', params: { attrs: 'svg:fill' } },
          ],
        },
      });

      return {
        contents,
        loader: 'tsx',
      };
    });

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
