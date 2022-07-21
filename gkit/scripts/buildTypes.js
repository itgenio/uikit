const { exec } = require('child_process');
const path = require('path');
const rimraf = require('rimraf');

const cwd = process.cwd();

exec('tsc -p tsconfig.build.json', () => {
  // Remove internal components types
  rimraf(path.resolve(cwd, './internal'), error => {
    if (!error) {
      console.log('Types build succeeded');
    }
  });
});
