import './style.less';
import React, { Fragment, useState } from 'react';
import { Checkbox, CheckboxProps } from '@itgenio/gkit/checkbox';
import { SubtractFilledIcon } from '@itgenio/icons/subtractFilledIcon';

export function Checkboxes() {
  const [checked, setChecked] = useState(false);

  const renderState = (state: string, props: CheckboxProps) => {
    return (
      <Fragment key={state}>
        <div>{state}</div>
        <Checkbox {...props}>label</Checkbox>
      </Fragment>
    );
  };

  const states: [string, CheckboxProps][] = [
    [
      'Normal',
      {
        checked,
        onChange: ({ target }) => {
          setChecked(target.checked);
        },
      },
    ],
    ['Hover', { hover: true, checked: false }],
    ['Checked', { checked: true }],
    ['Disabled', { disabled: true, checked: false }],
    ['Disabled+Checked', { disabled: true, checked: true }],
    ['Custom icon', { checked: true, checkedIcon: <SubtractFilledIcon /> }],
  ];

  return (
    <div className="checkboxes">
      <div className="grid">{states.map(([name, props]) => renderState(name, props))}</div>
    </div>
  );
}

Checkboxes.displayName = 'Checkboxes';
