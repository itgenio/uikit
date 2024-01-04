import './style.less';

import React from 'react';
import * as gkitIcons from '@itgenio/gkit/icons';
import { IconsView } from './iconsView';

const ICONS = Object.entries(gkitIcons)
  .filter(([key, value]) => typeof value === 'function' && key.endsWith('Icon'))
  .map(([, value]) => value as Function)
  .sort((a, b) => a.name.localeCompare(b.name));

export function Icons() {
  return <IconsView icons={ICONS} />;
}

Icons.displayName = 'Icons';
