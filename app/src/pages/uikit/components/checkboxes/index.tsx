import './style.less';
import React, { Fragment } from 'react';
import { Checkbox, CheckboxProps, SubtractIcon } from '@itgenio/gkit';

export function Checkboxes() {
  const renderState = (state: string, props: CheckboxProps) => {
    return (
      <Fragment key={state}>
        <div>{state}</div>
        <Checkbox {...props}>label</Checkbox>
      </Fragment>
    );
  };

  const states: [string, CheckboxProps][] = [
    ['Normal', {}],
    ['Hover', { hover: true }],
    ['Checked', { checked: true }],
    ['Disabled', { disabled: true, checked: false }],
    ['Disabled+Checked', { disabled: true, checked: true }],
    ['Minus', { checked: true, icon: <SubtractIcon /> }],
  ];

  return (
    <div className="checkboxes">
      <div className="grid">{states.map(([name, props]) => renderState(name, props))}</div>
    </div>
  );
}

Checkboxes.displayName = 'Checkboxes';
