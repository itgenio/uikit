const fs = require('fs');
const path = require('path');

const SOURCES_FOLDER = 'fluentui-system-icons-main';

/**
 * Скрипт для создания набора иконок из fluentui-system-icons
 * https://github.com/microsoft/fluentui-system-icons
 *
 * Нужно склонировать исходники в эту папку, после завершения добавится папка fluent-icons-set
 *
 * Поддерживаемые размеры по приоритету: 24, 20. (Если нет 24, то используем 20)
 * Поддерживаемые типы: regular, filled
 */
(async () => {
  const { globby } = await import('globby');

  const paths = await globby(`${SOURCES_FOLDER}/assets/**/SVG/*_(regular|filled).svg`, {
    onlyFiles: false,
  });

  const icons = paths.reduce((acc, iconPath) => {
    const fullIconName = path.basename(iconPath);

    const [, name, size, type] = fullIconName.match(/(\w+)_([0-9]+)_(\w+)\.svg$/) ?? [];

    if (!acc[name]) {
      const folderPath = path.dirname(iconPath);

      acc[name] = { folder: folderPath, icons: {} };
    }

    if (!acc[name].icons[type]) {
      acc[name].icons[type] = [];
    }

    acc[name].icons[type].push(size);

    return acc;
  }, {});

  const newIcons = [];

  Object.entries(icons).forEach(([iconName, data]) => {
    Object.entries(data.icons).forEach(([iconType, sizes]) => {
      for (const size of ['24', '20']) {
        if (sizes.includes(size)) {
          const postfix = `_${size}_${iconType}.svg`;

          newIcons.push([`${iconName}${postfix}`, path.resolve(data.folder, `${iconName}${postfix}`)]);

          break;
        }
      }
    });
  });

  const outDir = path.resolve(process.cwd(), 'fluent-icons-set');

  await fs.promises.mkdir(outDir, { recursive: true });

  await Promise.allSettled(
    newIcons.map(async ([iconName, oldIconPath]) => {
      const content = await fs.promises.readFile(oldIconPath, 'utf8');

      await fs.promises.writeFile(path.resolve(outDir, iconName), content);
    })
  );
})();
