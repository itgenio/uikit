import './style.less';
import React, { Fragment } from 'react';
import { Checkbox } from '@itgenio/gkit';

export function Checkboxes() {
  const renderState = (state: string, props: any = {}) => {
    return (
      <Fragment key={state}>
        <div>{state}</div>
        <Checkbox {...props} onChange={() => console.log('click on checkbox')}>
          label
        </Checkbox>
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
    <div className="checkboxes">
      <div className="grid">{states.map(([name, props]) => renderState(name, props))}</div>
    </div>
  );
}

Checkboxes.displayName = 'Checkboxes';
