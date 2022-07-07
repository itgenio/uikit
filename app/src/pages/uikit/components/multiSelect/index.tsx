import './style.less';

import React, { Fragment, useState } from 'react';
import { MultiSelect, MultiSelectProps } from '@itgenio/gkit';

const options = [
  { label: 'Option1', value: '1' },
  { label: 'Option2', value: '2' },
  { label: 'Option3', value: '3' },
];

export function MultiSelects() {
  const sizes = ['small', 'large'] as const;
  const [value, setValue] = useState<(string | number)[]>(['1']);

  const renderState = (state: string, props: any, index: number) => {
    return (
      <Fragment key={index}>
        <div>{state}</div>
        {sizes.map(size => {
          const p = { ...props, size };
          return (
            <MultiSelect
              key={size}
              {...p}
              label="Label"
              hasSelectAllOption
              options={options}
              values={value}
              selectAllOptionLabel="All Selected"
              onChange={values => {
                setValue(values);
              }}
            />
          );
        })}
      </Fragment>
    );
  };

  const states: { state: string; props?: MultiSelectProps }[] = [
    { state: 'Normal' },
    { state: 'Hover', props: { hover: true } },
    { state: 'Focused', props: { focus: true } },
    { state: 'Filled', props: { filled: true } },
    { state: 'Error', props: { error: true } },
    { state: 'Disabled', props: { disabled: true } },
  ];

  return (
    <div className="multi-selects">
      <div className="grid">{states.map(({ state, props = {} }, index) => renderState(state, props, index))}</div>
    </div>
  );
}

MultiSelects.displayName = 'MultiSelects';
