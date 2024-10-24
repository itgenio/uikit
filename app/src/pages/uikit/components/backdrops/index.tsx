import './style.less';

import React, { Fragment, FunctionComponent } from 'react';
import { BackdropExampleDefault, BackdropExampleIgnoreClickOverlay } from './examples/simple';

const EXAMPLES: { name: string; Backdrop: FunctionComponent }[] = [
  { name: 'Default', Backdrop: BackdropExampleDefault },
  { name: 'Ignore click on overlay', Backdrop: BackdropExampleIgnoreClickOverlay },
];

export function Backdrops() {
  return (
    <div className="backdrops">
      <div className="grid">
        {EXAMPLES.map(({ name, Backdrop }, index) => {
          return (
            <Fragment key={index}>
              {name}

              <Backdrop />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

Backdrops.displayName = 'Backdrops';
