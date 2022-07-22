const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

const asyncRimraf = path => {
  return new Promise((res, rej) => {
    rimraf(path, error => {
      if (error) {
        rej(error);
      }

      res();
    });
  });
};

(async () => {
  const { globby } = await import('globby');

  const rawGitignorePatterns = await fs.promises.readFile(path.resolve(__dirname, '../.gitignore'), 'utf8');

  const patterns = rawGitignorePatterns.trim().split(/\s+/g);
  patterns.push('!node_modules');

  const paths = await globby(patterns, { onlyFiles: false });

  await Promise.allSettled(paths.map(asyncRimraf));
})();
