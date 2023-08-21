import './style.less';

import React, { CSSProperties, useCallback, useState } from 'react';
import * as gkitEmojis from '@itgenio/gkit/emoji';
import { Tooltip } from '@itgenio/gkit/tooltip';
import { STEP, Slider } from '../slider';

const DEFAULT_SIZE = 40;

const EMOJIS = Object.entries(gkitEmojis)
  .filter(([key, value]) => typeof value === 'function' && key.endsWith('Emoji'))
  .map(([, value]) => value as Function)
  .sort((a, b) => a.name.localeCompare(b.name));

export function Emojis() {
  const [currentSize, setCurrentSize] = useState(DEFAULT_SIZE);

  const onClickMinus = useCallback(() => setCurrentSize(s => s - STEP), []);
  const onClickPlus = useCallback(() => setCurrentSize(s => s + STEP), []);
  const onChangeInput = useCallback(e => setCurrentSize(e.target.valueAsNumber), []);

  return (
    <div className="emojis">
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
        {EMOJIS.map(Emoji => (
          <Tooltip key={Emoji.name} content={Emoji.name}>
            <Emoji />
          </Tooltip>
        ))}
      </div>
    </div>
  );
}

Emojis.displayName = 'Emojis';
