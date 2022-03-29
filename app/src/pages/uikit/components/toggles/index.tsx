import React, { Fragment } from 'react';
import { Toggle } from '@itgenio/gkit';

export function Toggles() {
  const renderState = (state: string, props: any = {}) => {
    return (
      <Fragment key={state}>
        <div>{state}</div>
        <Toggle {...props} onChange={() => console.log('click on toggle')}>
          label
        </Toggle>
      </Fragment>
    );
  };

  const states = [
    ['Normal', {}],
    ['Hover', { hover: true }],
    ['Checked', { checked: true }],
    ['Disabled', { disabled: true, checked: false }],
    ['Disabled+Checked', { disabled: true, checked: true }],
  ] as const;

  return (
    <div className="toggle">
      <div className="grid">{states.map(([name, props]) => renderState(name, props))}</div>
    </div>
  );
}

Toggles.displayName = 'Toggles';
