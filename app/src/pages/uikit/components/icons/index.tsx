import './style.less';

import React, { CSSProperties, useState } from 'react';
import * as gkit from '@itgenio/gkit';
import { Button, ButtonGroup, Tooltip } from '@itgenio/gkit';

const STEP = 2;
const DEFAULT_SIZE = 20;

const ICONS = Object.entries(gkit)
  .filter(([key]) => key.endsWith('Icon'))
  .map(([, value]) => value)
  .sort((a, b) => a.name.localeCompare(b.name));

export function Icons() {
  const [currentSize, setCurrentSize] = useState(DEFAULT_SIZE);

  return (
    <div className="icons">
      <div className="sizes">
        <span>Current size: {currentSize}</span>

        <ButtonGroup>
          <Button onClick={() => setCurrentSize(s => s + STEP)} size="small">
            +
          </Button>

          <Button onClick={() => setCurrentSize(s => s - STEP)} size="small">
            -
          </Button>
        </ButtonGroup>

        <ButtonGroup>
          {[16, 24, 36, 48, 64, 72, 100, 132].map(size => (
            <Button key={size} onClick={() => setCurrentSize(size)} size="small">
              {size}
            </Button>
          ))}
        </ButtonGroup>
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
