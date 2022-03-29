import './style.less';
import React, { Fragment } from 'react';
import { Checkbox } from '@itgenio/gkit';

type CheckboxProps = Parameters<typeof Checkbox>[0];

export function Checkboxes() {
  const renderState = (state: string, props: CheckboxProps) => {
    return (
      <Fragment key={state}>
        <div>{state}</div>
        <Checkbox {...props} onChange={() => console.log('click on checkbox')}>
          label
        </Checkbox>
      </Fragment>
    );
  };

  const states: [string, CheckboxProps][] = [
    ['Normal', {}],
    ['Hover', { hover: true }],
    ['Checked', { checked: true }],
    ['Disabled', { disabled: true, checked: false }],
    ['Disabled+Checked', { disabled: true, checked: true }],
  ];

  return (
    <div className="checkboxes">
      <div className="grid">{states.map(([name, props]) => renderState(name, props))}</div>
    </div>
  );
}

Checkboxes.displayName = 'Checkboxes';
