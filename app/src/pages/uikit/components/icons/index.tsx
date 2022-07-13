import './style.less';

import React, { CSSProperties, useState } from 'react';
import * as gkit from '@itgenio/gkit';
import { Button, Tooltip } from '@itgenio/gkit';

const STEP = 2;
const DEFAULT_SIZE = 24;

const ICONS = Object.entries(gkit)
  .filter(([key, value]) => typeof value === 'function' && key.endsWith('Icon'))
  .map(([, value]) => value as Function)
  .sort((a, b) => a.name.localeCompare(b.name));

export function Icons() {
  const [currentSize, setCurrentSize] = useState(DEFAULT_SIZE);

  return (
    <div className="icons">
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
