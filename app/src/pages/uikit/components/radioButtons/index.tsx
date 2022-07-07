import './style.less';
import React, { Fragment } from 'react';
import { RadioButton, RadioButtonProps } from '@itgenio/gkit';

export function RadioButtons() {
  const renderState = (state: string, props: RadioButtonProps, index: number) => {
    return (
      <Fragment key={index}>
        <div>{state}</div>
        <RadioButton {...props} onChange={() => console.log('click on radio button')}>
          label
        </RadioButton>
      </Fragment>
    );
  };

  const states: { state: string; props?: RadioButtonProps }[] = [
    { state: 'Normal' },
    { state: 'Hover', props: { hover: true } },
    { state: 'Checked', props: { checked: true } },
    { state: 'Disabled', props: { disabled: true, checked: false } },
    { state: 'Disabled+Checked', props: { disabled: true, checked: true } },
  ];

  return (
    <div className="radioButtons">
      <div className="grid">{states.map(({ state, props = {} }, index) => renderState(state, props, index))}</div>
    </div>
  );
}

RadioButtons.displayName = 'RadioButtons';
