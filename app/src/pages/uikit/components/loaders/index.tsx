import './style.less';

import React, { Fragment } from 'react';
import { Loader } from '@itgenio/gkit/loader';

export function Loaders() {
  const sizes = ['small', 'normal', 'large'];

  const renderState = (state: string, props: any = {}, content?: any) => {
    return (
      <Fragment key={state}>
        <div>{state}</div>

        <div className="column">
          {sizes.map(size => {
            const p = { ...props, size };

            return (
              <Loader key={`${state}${size}`} {...p}>
                {content ?? size}
              </Loader>
            );
          })}
        </div>
      </Fragment>
    );
  };

  const states = [
    ['Default', {}],
    ['With text', { text: 'Loading...' }],
  ] as const;

  return (
    <div className="loaders">
      <div className="grid">
        <div>
          <span className="title">State</span>
        </div>

        <div>
          <span className="title">Primary</span>
        </div>

        {states.map(([name, props]) => renderState(name, props))}
      </div>
    </div>
  );
}

Loaders.displayName = 'Loaders';
