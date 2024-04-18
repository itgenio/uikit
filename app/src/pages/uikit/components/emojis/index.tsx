import './style.less';

import React from 'react';
import * as gkitEmojis from '@itgenio/gkit/emoji';
import { IconsView } from '../icons/iconsView';

const EMOJIS = Object.entries(gkitEmojis)
  .filter(([key, value]) => typeof value === 'function' && key.endsWith('Emoji'))
  .map(([, value]) => value as Function)
  .sort((a, b) => a.name.localeCompare(b.name));

export function Emojis() {
  return <IconsView iconsSets={[EMOJIS]} />;
}

Emojis.displayName = 'Emojis';
