module.exports = () => ({
  name: 'svgr',
  setup(build) {
    const svgr = require('@svgr/core').transform;
    const fs = require('fs');

    build.onLoad({ filter: /\.svg$/ }, async args => {
      const svg = await fs.promises.readFile(args.path, 'utf8');
      const contents = await svgr(
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
