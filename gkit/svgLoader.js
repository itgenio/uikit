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
          svgProps: {
            focusable: false,
            color: 'inherit',
            className: '{"gkit-svg-icon" + (props.className ? " " + props.className : "")}',
            'aria-hidden': '{props.alt ? undefined : true}',
            role: '{props.alt ? "img" : undefined}',
            title: '{props.alt}',
            xmlns: undefined,
            fill: undefined,
          },
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
