import './style.less';
import React, { Fragment } from 'react';
import { Toggle, ToggleProps } from '@itgenio/gkit/toggle';

export function Toggles() {
  const renderState = (state: string, props: ToggleProps) => {
    return (
      <Fragment key={state}>
        <div>{state}</div>
        <Toggle {...props} onChange={() => console.log('click on toggle')}>
          label
        </Toggle>
      </Fragment>
    );
  };

  const states: [string, ToggleProps][] = [
    ['Normal', {}],
    ['Hover', { hover: true }],
    ['Checked', { checked: true }],
    ['Disabled', { disabled: true, checked: false }],
    ['Disabled+Checked', { disabled: true, checked: true }],
  ];

  return (
    <div className="toggle">
      <div className="grid">{states.map(([name, props]) => renderState(name, props))}</div>
    </div>
  );
}

Toggles.displayName = 'Toggles';
