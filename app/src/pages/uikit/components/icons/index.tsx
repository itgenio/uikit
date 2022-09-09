import './style.less';

import React, { CSSProperties, useCallback, useState } from 'react';
import * as gkitIcons from '@itgenio/gkit/icons';
import { Tooltip } from '@itgenio/gkit/tooltip';
import { STEP, Slider } from '../slider';

const DEFAULT_SIZE = 24;

const ICONS = Object.entries(gkitIcons)
  .filter(([key, value]) => typeof value === 'function' && key.endsWith('Icon'))
  .map(([, value]) => value as Function)
  .sort((a, b) => a.name.localeCompare(b.name));

export function Icons() {
  const [currentSize, setCurrentSize] = useState(DEFAULT_SIZE);

  const onClickMinus = useCallback(() => setCurrentSize(s => s - STEP), []);
  const onClickPlus = useCallback(() => setCurrentSize(s => s + STEP), []);
  const onChangeInput = useCallback(e => setCurrentSize(e.target.valueAsNumber), []);

  return (
    <div className="icons">
      <div className="sizes">
        <span>Current size: {currentSize}</span>

        <Slider
          onClickMinus={onClickMinus}
          onClickPlus={onClickPlus}
          value={currentSize}
          onChangeInput={onChangeInput}
        />
      </div>

      <div className="board" style={{ '--icon-size': `${currentSize}px` } as CSSProperties}>
        {ICONS.map(Icon => (
          <Tooltip key={Icon.name} content={Icon.name}>
            <Icon />
          </Tooltip>
        ))}
      </div>
    </div>
  );
}

Icons.displayName = 'Icons';
