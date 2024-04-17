# Fluent UI System Icons

## Добавление новой иконки

Оригинал необходимой иконки можно найти здесь: https://github.com/microsoft/fluentui-system-icons/find/main

При добавлении новой иконки оригинальный svg-файл нужно положить в папку `assets`.

При сборке у иконки автоматически заменяется цвет `#212121` на `currentColor`.

Сборкой иконок занимается плагин `gkit\scripts\plugins\svgPlugin.js`