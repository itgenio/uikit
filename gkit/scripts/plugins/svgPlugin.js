const fs = require('fs');
const svgrTransform = require('@svgr/core').transform;

const getContents = async ({ svgFilePath, svgrConfig = {}, svgoConfig = {}, svgProps = {} }) => {
  const svgContent = await fs.promises.readFile(svgFilePath, 'utf8');

  return await svgrTransform(
    svgContent,
    {
      expandProps: 'start',
      titleProp: true,
      dimensions: false,
      svgoConfig: {
        plugins: [
          { name: 'preset-default', params: { overrides: { removeViewBox: false } } },
          'removeXMLNS',
          { name: 'removeAttrs', params: { attrs: 'svg:fill' } },
        ],
        ...svgoConfig,
      },
      svgProps: {
        focusable: false,
        color: 'inherit',
        'aria-hidden': '{props.title ? undefined : true}',
        ...svgProps,
      },
      plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
      ...svgrConfig,
    },
    { filePath: svgFilePath }
  );
};

module.exports = () => ({
  name: 'svg',
  setup(build) {
    // Icons
    build.onLoad({ filter: /\\icons\\assets\\\w+\.svg$/ }, async args => {
      const contents = await getContents({
        svgFilePath: args.path,
        svgProps: { className: '{"gkit-svg-icon" + (props.className ? " " + props.className : "")}' },
        svgrConfig: { replaceAttrValues: { '#212121': 'currentColor' } },
      });

      return {
        contents,
        loader: 'tsx',
      };
    });

    // Emoji
    build.onLoad({ filter: /\\emoji\\assets\\\w+\.svg$/ }, async args => {
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
