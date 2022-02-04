import './style.less';
import React, { Fragment } from 'react';
import { Link } from '@itgenio/gkit';

export function Links() {
  const sizes = ['small', 'normal', 'large'];

  const renderState = (state: string, props: any = {}, content?: any) => {
    return (
      <Fragment key={state}>
        <div>{state}</div>

        <div className="row">
          {sizes.map(size => {
            const p = { ...props, size };

            return (
              <Link key={`${state}${size}`} {...p} href="/" onClick={() => console.log(`click on button`)}>
                {content ?? size}
              </Link>
            );
          })}
        </div>
      </Fragment>
    );
  };

  const states = [
    ['Normal', {}],
    ['Hover', { hover: true }],
    ['Disabled', { disabled: true }],
  ] as const;

  return (
    <div className="links">
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

Links.displayName = 'Links';
