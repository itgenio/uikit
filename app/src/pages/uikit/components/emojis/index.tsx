import './style.less';

import React, { CSSProperties, useState } from 'react';
import { Button } from '@itgenio/gkit/button';
import * as gkitEmojis from '@itgenio/gkit/emoji';
import { Tooltip } from '@itgenio/gkit/tooltip';

const STEP = 2;
const DEFAULT_SIZE = 24;

const EMOJIS = Object.entries(gkitEmojis)
  .filter(([key, value]) => typeof value === 'function' && key.endsWith('Emoji'))
  .map(([, value]) => value as Function)
  .sort((a, b) => a.name.localeCompare(b.name));

export function Emojis() {
  const [currentSize, setCurrentSize] = useState(DEFAULT_SIZE);

  return (
    <div className="emojis">
      <div className="sizes">
        <span>Current size: {currentSize}</span>

        <div className="slider">
          <Button onClick={() => setCurrentSize(s => s - STEP)} size="small" asIcon>
            -
          </Button>

          <input
            value={currentSize}
            type="range"
            min="1"
            max="200"
            onChange={e => setCurrentSize(e.target.valueAsNumber)}
          />

          <Button onClick={() => setCurrentSize(s => s + STEP)} size="small" asIcon>
            +
          </Button>
        </div>
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
