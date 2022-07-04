import './style.less';

import React, { Fragment, useState } from 'react';
import { Dropdown } from '@itgenio/gkit';

const options = [
  { label: 'Option1', value: '1' },
  { label: 'Option2', value: '2' },
  { label: 'Option3', value: '3' },
];

export function Dropdowns() {
  const sizes = ['small', 'large'] as const;
  const [value, setValue] = useState<string | number>(['1']);

  const renderState = (state: string, props: any, index: number) => {
    return (
      <Fragment key={index}>
        <div>{state}</div>
        {sizes.map(size => {
          const p = { ...props, size };
          return (
            <Dropdown
              key={size}
              {...p}
              label="Label"
              isShowBtnSelectAll
              options={options}
              values={value}
              onChange={value => {
                setValue(value);
              }}
            />
          );
        })}
      </Fragment>
    );
  };

  const states: { state: string; props?: any }[] = [
    { state: 'Normal' },
    { state: 'Hover', props: { hover: true } },
    { state: 'Focused', props: { focus: true } },
    { state: 'Filled', props: { filled: true } },
    { state: 'Error', props: { error: true } },
    { state: 'Disabled', props: { disabled: true } },
  ];

  return (
    <div className="dropdowns">
      <div className="grid">{states.map(({ state, props = {} }, index) => renderState(state, props, index))}</div>
    </div>
  );
}

Dropdowns.displayName = 'Dropdowns';
