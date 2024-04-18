import './style.less';

import React from 'react';
import { iconsList } from '@itgenio/icons/iconsList';
import { chunkArray } from '@itgenio/utils';
import { IconsView } from './iconsView';

const ALL_ICONS = iconsList
  .sort(([, a], [, b]) => a.localeCompare(b))
  .map(([fileName, iconName]) => {
    const LazyComponent = React.lazy(() => {
      return import(`@itgenio/icons/${fileName}`).then(item => {
        return { default: item[iconName] };
      });
    });

    const component = function Icon() {
      return (
        <React.Suspense fallback={null}>
          <LazyComponent />
        </React.Suspense>
      );
    };

    Object.defineProperty(component, 'name', { value: iconName });

    return component;
  });

const ICONS_CHUNKS = chunkArray(ALL_ICONS, 100);

export function Icons() {
  return <IconsView iconsSets={ICONS_CHUNKS} />;
}

Icons.displayName = 'Icons';
