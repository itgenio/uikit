# Plugins

## SVGPlugin

### Плагин moveElemsAttrsToGroup для SVGO

При сборке отключаем плагин `moveElemsAttrsToGroup` для SVGO, чтобы не объединять аттрибуты дочерних элементов у парента

Пример:

Элементы

```TypeScript
<g filter="url(#filter2_i_20020_2909)">
  <rect x="25.9568" y="10.7305" width="5.82021" height="9.0435" rx="2.9101" transform="rotate(90 25.9568 10.7305)" fill="url(#paint6_linear_20020_2909)"/>
  <rect x="25.9568" y="10.7305" width="5.82021" height="9.0435" rx="2.9101" transform="rotate(90 25.9568 10.7305)" fill="url(#paint7_radial_20020_2909)"/>
</g>
```

Будут собраны в:

С включенным плагином

```TypeScript
a.createElement(
  'g',
  // Трансформ убрался у дочерних элементов и добавился к родительском элементу
  { filter: 'url(#thumbs_up_color_svg__i)', transform: 'rotate(90 25.957 10.73)' },
  a.createElement('rect', {
    x: 25.957,
    y: 10.73,
    width: 5.82,
    height: 9.043,
    rx: 2.91,
    fill: 'url(#thumbs_up_color_svg__j)',
  }),
  a.createElement('rect', {
    x: 25.957,
    y: 10.73,
    width: 5.82,
    height: 9.043,
    rx: 2.91,
    fill: 'url(#thumbs_up_color_svg__k)',
  })
),
```

С отключенным плагином

```TypeScript
a.createElement(
    'g',
    { filter: 'url(#thumbs_up_color_svg__i)' },
    a.createElement('rect', {
      x: 25.957,
      y: 10.73,
      width: 5.82,
      height: 9.043,
      rx: 2.91,
      transform: 'rotate(90 25.957 10.73)', // Трансформ остался у дочерних элементов
      fill: 'url(#thumbs_up_color_svg__j)',
    }),
    a.createElement('rect', {
      x: 25.957,
      y: 10.73,
      width: 5.82,
      height: 9.043,
      rx: 2.91,
      transform: 'rotate(90 25.957 10.73)',
      fill: 'url(#thumbs_up_color_svg__k)',
    })
  ),
```
