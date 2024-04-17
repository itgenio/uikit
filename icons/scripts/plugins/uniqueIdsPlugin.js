// Fork of: https://github.com/laleksiunas/inline-svg-unique-id
// Author: Laurynas Aleksiunas

// Плагин для генерации уникальных id для иконок.

// Для чего нужен плагин:
// После билда у каждой иконки свой уникальный id из-за чего они между собой не конфликтуют,
// но если на одной странице две одинаковые иконки, то они начинают конфликтовать, т.к id сгенерировался на этапе билда.
// Этот плагин добавляет переменную с id в тело компонента из-за чего у каждой иконки на странице он будет уникальный, т.к
// теперь id создается на этапе маунта компонента.

// Отличия форка от оригинала:
// Переменная с id создается один раз для всего компонента (в оригинале id создавался на каждый аттрибут id).
// Добавлен префикс для id ([icon_name]_[old_id]_[component_unique_id]).
// Заменена функция для создания id.

const jsxSyntaxPlugin = require('@babel/plugin-syntax-jsx').default;
const template = require('@babel/template').default;

const idGeneratorFunctionName = 'generateId';
const idGeneratorFunctionImportPath = `../../internal/utils/${idGeneratorFunctionName}`;

const idAttributeName = 'id';

const idRegex = '#([a-zA-Z][\\w:.-]*)'; // Matches ID: #example
const idExactMatchRegex = new RegExp(`^${idRegex}$`);

const iriRegex = `url\\(${idRegex}\\)`; // Matches SVG IRI: url(#example)
const iriExactMatchRegex = new RegExp(`^${iriRegex}$`);
const iriGlobalMatchRegex = new RegExp(iriRegex, 'g');

const svgIdentifiers = {
  svg: ['svg', 'Svg'],
  defs: ['defs', 'Defs'],
  style: ['style'],
};

const getPrefixByComponentPath = path => {
  const basename = /[/\\]?([^/\\]+)$/.exec(path)?.[1] ?? '';

  return basename.replace(/[. ]/g, '_');
};

const isSvgComponentIdentifier = (openingElementNameIdentifier, expectedSvgIdentifiers) => {
  return expectedSvgIdentifiers.some(i => openingElementNameIdentifier.isJSXIdentifier({ name: i }));
};

const isSvgComponentPath = (path, expectedSvgIdentifiers) => {
  return isSvgComponentIdentifier(path.get('openingElement.name'), expectedSvgIdentifiers);
};

const isSvgPath = path => isSvgComponentPath(path, svgIdentifiers.svg);
const isDefsPath = path => isSvgComponentPath(path, svgIdentifiers.defs);
const isStylePath = path => isSvgComponentPath(path, svgIdentifiers.style);
const isIdAttribute = attribute => attribute.get('name').isJSXIdentifier({ name: idAttributeName });
const isStringLiteralAttribute = attribute => attribute.get('value').isStringLiteral();

const createId = (prefix, id) => `${prefix} + '_' + ${id}`;
const createIriUrl = (prefix, id) => `'url(#' + ${createId(prefix, id)} + ')'`;

const isXlinkHrefAttribute = attribute => {
  const nameNode = attribute.get('name');

  return (
    nameNode.isJSXIdentifier({ name: 'xlinkHref' }) ||
    (nameNode.isJSXNamespacedName() && nameNode.node.namespace.name === 'xlink' && nameNode.node.name.name === 'href')
  );
};

const createIdValuesContainer = ({ createIdIdentifier, componentPrefix, types }) => {
  const idIdentifierByIdValueMap = new Map();
  const rootIdIdentifier = { value: undefined };

  return {
    createIdIdentifier: idValue => {
      if (!rootIdIdentifier.value) {
        rootIdIdentifier.value = createIdIdentifier();
      }

      if (!idIdentifierByIdValueMap.has(idValue)) {
        idIdentifierByIdValueMap.set(idValue, { idPrefix: types.stringLiteral(`${componentPrefix}_${idValue}`) });
      }

      return { idIdentifier: rootIdIdentifier.value, ...idIdentifierByIdValueMap.get(idValue) };
    },
    getIdIdentifier: idValue => {
      const value = idIdentifierByIdValueMap.get(idValue);
      if (!value) return undefined;

      return { idIdentifier: rootIdIdentifier.value, ...idIdentifierByIdValueMap.get(idValue) };
    },
    componentPrefix,
    rootIdIdentifier,
  };
};

const buildIdExpression = template.expression('`#${%%idPrefix%% + %%idIdentifier%%}`');
const buildIriUrlExpression = template.expression(createIriUrl('%%idPrefix%%', '%%idIdentifier%%'));

const buildIdGeneratorHookImportStatement = template(
  `import { useRef } from 'react';
   import { ${idGeneratorFunctionName} } from '${idGeneratorFunctionImportPath}';`
);

const buildIdIdentifierGeneratorStatement = template(
  `const %%idIdentifier%% = useRef(${idGeneratorFunctionName}()).current;`
);

const plugin = ({ types }) => {
  const splitStylesStringByIriToLiterals = (stylesString, idValuesWithIdentifiers, componentPrefix) => {
    return idValuesWithIdentifiers
      .reduce(
        (splitStylesLiterals, [idValue, identifierData]) => {
          return splitStylesLiterals.flatMap(stylesOrIdIdentifier => {
            if (typeof stylesOrIdIdentifier !== 'string') {
              return stylesOrIdIdentifier;
            }

            const iriUrlExpression = buildIriUrlExpression({
              idPrefix: identifierData.idPrefix,
              idIdentifier: identifierData.idIdentifier,
            });

            return stylesOrIdIdentifier
              .split(createIriUrl(componentPrefix, idValue))
              .flatMap((s, i, splits) => (i === splits.length - 1 ? [s] : [s, iriUrlExpression]));
          });
        },
        [stylesString]
      )
      .map(stylesOrIdIdentifier => {
        return typeof stylesOrIdIdentifier === 'string'
          ? types.stringLiteral(stylesOrIdIdentifier)
          : stylesOrIdIdentifier;
      });
  };

  const jsxAttributeValue = value => types.jsxExpressionContainer(value);

  const updateAttributeIdReference = ({ attribute, idValueRegex, valueBuilder, idValuesContainer }) => {
    if (!isStringLiteralAttribute(attribute)) return;

    const idValueMatches = attribute.node.value.value.match(idValueRegex);
    if (!idValueMatches) return;

    const identifierData = idValuesContainer.getIdIdentifier(idValueMatches[1]);
    if (!identifierData?.idIdentifier) return;

    const expression = valueBuilder({ idIdentifier: identifierData.idIdentifier, idPrefix: identifierData.idPrefix });

    attribute.get('value').replaceWith(jsxAttributeValue(expression));
  };

  const svgDefsElementsIdIdentifiersCreatorVisitor = {
    JSXOpeningElement(path, state) {
      const idAttribute = path.get('attributes').find(isIdAttribute);

      if (!idAttribute || !isStringLiteralAttribute(idAttribute)) {
        return;
      }

      const identifierData = state.idValuesContainer.createIdIdentifier(idAttribute.node.value.value);

      const expression = template.expression(createId('%%idPrefix%%', '%%idIdentifier%%'))({
        idPrefix: identifierData.idPrefix,
        idIdentifier: identifierData.idIdentifier,
      });

      idAttribute.get('value').replaceWith(jsxAttributeValue(expression));
    },
  };

  const svgDefsElementsAttributesMapperVisitor = {
    JSXOpeningElement(path, state) {
      path.get('attributes').forEach(attribute => {
        if (!isIdAttribute(attribute)) {
          updateAttributeIdReference({
            attribute,
            valueBuilder: buildIdExpression,
            idValueRegex: idExactMatchRegex,
            idValuesContainer: state.idValuesContainer,
          });
        }
      });
    },
  };

  const svgDefsVisitor = {
    JSXElement(path, state) {
      if (isDefsPath(path)) {
        path.traverse(svgDefsElementsIdIdentifiersCreatorVisitor, state);
        path.traverse(svgDefsElementsAttributesMapperVisitor, state);
      }
    },
  };

  const styleTagsUpdateVisitor = {
    StringLiteral(path, state) {
      const stylesString = path.node.value;
      const iriMatches = new Set(Array.from(stylesString.matchAll(iriGlobalMatchRegex)).map(x => x[1]));

      const idValuesWithIdentifiers = Array.from(iriMatches)
        .map(idValue => [idValue, state.idValuesContainer.getIdIdentifier(idValue)?.idIdentifier])
        .filter(([, idIdentifier]) => idIdentifier);

      if (idValuesWithIdentifiers.length === 0) return;

      const stylesStringLiterals = splitStylesStringByIriToLiterals(
        stylesString,
        idValuesWithIdentifiers,
        state.idValuesContainer.componentPrefix
      );

      const concatenatedStyles = stylesStringLiterals.reduce((node, styleLiteral) => {
        return node ? types.binaryExpression('+', node, styleLiteral) : styleLiteral;
      });

      path.replaceWith(concatenatedStyles);
    },
  };

  const svgElementsVisitor = {
    JSXElement(path, state) {
      if (isStylePath(path)) {
        path.traverse(styleTagsUpdateVisitor, state);
      }
    },
    JSXOpeningElement(path, state) {
      path.get('attributes').forEach(attribute => {
        updateAttributeIdReference({
          attribute,
          valueBuilder: buildIriUrlExpression,
          idValueRegex: iriExactMatchRegex,
          idValuesContainer: state.idValuesContainer,
        });

        if (isXlinkHrefAttribute(attribute)) {
          updateAttributeIdReference({
            attribute,
            valueBuilder: buildIdExpression,
            idValueRegex: idExactMatchRegex,
            idValuesContainer: state.idValuesContainer,
          });
        }
      });
    },
  };

  const renderedJsxVisitor = {
    JSXElement(path, state) {
      if (isSvgPath(path)) {
        path.traverse(svgDefsVisitor, state);
        path.traverse(svgElementsVisitor, state);
      }
    },
  };

  const componentVisitor = {
    Function(path, state) {
      const componentPrefix = getPrefixByComponentPath(state.file.opts.filename);

      const idValuesContainer = createIdValuesContainer({
        createIdIdentifier: () => path.scope.generateUidIdentifier(idAttributeName),
        componentPrefix,
        types,
      });

      path.traverse(renderedJsxVisitor, { idValuesContainer });

      const rootIdIdentifier = idValuesContainer.rootIdIdentifier.value;
      if (!rootIdIdentifier) return;

      if (path.isArrowFunctionExpression()) {
        path.arrowFunctionToExpression();
      }

      const body = path.get('body');
      const rootPath = path.findParent(p => p.isProgram());

      rootPath.unshiftContainer('body', buildIdGeneratorHookImportStatement());

      body.unshiftContainer('body', buildIdIdentifierGeneratorStatement({ idIdentifier: rootIdIdentifier }));
    },
  };

  return {
    inherits: jsxSyntaxPlugin,
    visitor: componentVisitor,
  };
};

module.exports = { plugin };
