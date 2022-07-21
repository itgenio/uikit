const fs = require('fs');

module.exports = () => ({
  name: 'index-file',
  setup(build) {
    build.onLoad({ filter: /index\.ts$/ }, async args => {
      const indexFileContent = await fs.promises.readFile(args.path, 'utf-8');

      const formattedContent = indexFileContent.replaceAll('components/', '').replaceAll('.less', '.css');

      return {
        contents: formattedContent,
        loader: 'ts',
      };
    });
  },
});
