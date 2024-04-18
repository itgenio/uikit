const { exec } = require('child_process');

exec('tsc -p tsconfig.build.json', () => {});
