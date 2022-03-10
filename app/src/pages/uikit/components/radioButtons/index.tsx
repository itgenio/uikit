import React, { Fragment } from 'react';
import { RadioButton } from '@itgenio/gkit';

export function RadioButtons() {
  const renderState = (state: string, props: any = {}) => {
    return (
      <Fragment key={state}>
        <div>{state}</div>
        <RadioButton {...props} onChange={() => console.log('click on radio button')} />
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
    <div className="radioButtons">
      <div className="grid">{states.map(([name, props]) => renderState(name, props))}</div>
    </div>
  );
}

RadioButtons.displayName = 'RadioButtons';
