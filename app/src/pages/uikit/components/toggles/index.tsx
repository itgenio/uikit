import React, { Fragment } from 'react';
import { Toggle } from '@itgenio/gkit';

export function Toggles() {
  const renderState = (state: string, props: any = {}) => {
    return (
      <Fragment key={state}>
        <div>{state}</div>
        <Toggle {...props} onChange={() => console.log('click on toggle')} />
      </Fragment>
    );
  };

  const states = [
    ['Normal', { label: 'label' }],
    ['Hover', { hover: true, label: 'label' }],
    ['Checked', { checked: true, label: 'label' }],
    ['Disabled', { disabled: true, checked: false, label: 'label' }],
    ['Disabled+Checked', { disabled: true, checked: true, label: 'label' }],
  ] as const;

  return (
    <div className="toggle">
      <div className="grid">{states.map(([name, props]) => renderState(name, props))}</div>
    </div>
  );
}

Toggles.displayName = 'Toggles';
