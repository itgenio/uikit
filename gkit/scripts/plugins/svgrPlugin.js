const fs = require('fs');
const svgrTransform = require('@svgr/core').transform;

module.exports = () => ({
  name: 'svgr',
  setup(build) {
    build.onLoad({ filter: /\.svg$/ }, async args => {
      const svg = await fs.promises.readFile(args.path, 'utf8');
      const contents = await svgrTransform(
        svg,
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
          },
          svgProps: {
            focusable: false,
            color: 'inherit',
            className: '{"gkit-svg-icon" + (props.className ? " " + props.className : "")}',
            'aria-hidden': '{props.title ? undefined : true}',
          },
          replaceAttrValues: { '#212121': 'currentColor' },
          plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
        },
        { filePath: args.path }
      );

      return {
        contents,
        loader: 'tsx',
      };
    });
  },
});
