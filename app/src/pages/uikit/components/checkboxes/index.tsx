import './style.less';
import React, { Fragment } from 'react';
import { Checkbox } from '@itgenio/gkit';

export function Checkboxes() {
  const renderState = (state: string, props: any = {}) => {
    return (
      <Fragment key={state}>
        <div>{state}</div>
        <Checkbox {...props} onChange={() => console.log('click on checkbox')} />
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
    <div className="checkboxes">
      <div className="grid">{states.map(([name, props]) => renderState(name, props))}</div>
    </div>
  );
}

Checkboxes.displayName = 'Checkboxes';
