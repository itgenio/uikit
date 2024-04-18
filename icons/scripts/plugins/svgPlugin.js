const fs = require('fs');
const path = require('path');
const svgrTransform = require('@svgr/core').transform;
const uniqueIdsPlugin = require('./uniqueIdsPlugin').plugin;
const { FLUENT_ICON_PREFIX } = require('./writePlugin');

const escapedPathSep = [...path.sep].map(char => `\\${char}`).join('');

const ICONS_PATH_FILTER = new RegExp([`svg`, `\\w+\\.svg$`].join(escapedPathSep));

const getContents = async ({ svgFilePath, svgrConfig = {}, svgoConfig: fullSvgoConfig = {}, svgProps = {} }) => {
  const svgContent = await fs.promises.readFile(svgFilePath, 'utf8');

  const { plugins: svgoPlugins = [], ...svgoConfig } = fullSvgoConfig;

  return await svgrTransform(
    svgContent,
    {
      expandProps: 'start',
      titleProp: true,
      dimensions: false,
      exportType: 'named',
      plugins: [
        (code, config, state) => {
          const filePath = state.filePath;

          let iconNameParts = path.basename(filePath).replace(FLUENT_ICON_PREFIX, '').replace('.svg', '').split('_');

          const isRegular = iconNameParts.at(-1) === 'regular';

          iconNameParts.splice(iconNameParts.length - 2, isRegular ? 2 : 1);
          iconNameParts.push('icon');

          const componentName = iconNameParts.map(part => part[0].toUpperCase() + part.slice(1)).join('');
          const className = iconNameParts.join('-');

          state.componentName = componentName;
          config.svgProps.className = `{"gkit-svg-icon ${className}" + (props.className ? " " + props.className : "")}`;

          return code;
        },
        '@svgr/plugin-svgo',
        '@svgr/plugin-jsx',
        code => code.replace('as ReactComponent ', ' '),
      ],
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
    build.onLoad({ filter: ICONS_PATH_FILTER }, async args => {
      const contents = await getContents({
        svgFilePath: args.path,
        svgrConfig: { replaceAttrValues: { '#212121': 'currentColor' } },
        svgoConfig: {
          plugins: [{ name: 'removeAttrs', params: { attrs: 'svg:fill' } }],
        },
      });

      return {
        contents,
        loader: 'tsx',
      };
    });
  },
});
