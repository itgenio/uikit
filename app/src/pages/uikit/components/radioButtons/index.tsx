import React, { Fragment } from 'react';
import { RadioButton } from '@itgenio/gkit';

export function RadioButtons() {
  const renderState = (state: string, props: any = {}) => {
    return (
      <Fragment key={state}>
        <div>{state}</div>
        <RadioButton {...props} onChange={() => console.log('click on radio button')}>
          label
        </RadioButton>
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
    <div className="radioButtons">
      <div className="grid">{states.map(([name, props]) => renderState(name, props))}</div>
    </div>
  );
}

RadioButtons.displayName = 'RadioButtons';
