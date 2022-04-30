import './style.less';
import React, { Fragment, useState } from 'react';
import { Select, SelectProps, SelectOption } from '@itgenio/gkit';

export function Selects() {
  const sizes = ['small', 'large'] as const;
  const [value, setValue] = useState<string | number>('');

  const renderState = (state: string, props: SelectProps, index: number) => {
    return (
      <Fragment key={index}>
        <div>{state}</div>
        {sizes.map(size => {
          const p = { ...props, size };
          return (
            <Select
              key={size}
              {...p}
              placeholder="Placeholder"
              label="Label"
              helperText="Desc"
              options={options}
              value={value}
              onChange={value => setValue(value)}
            />
          );
        })}
      </Fragment>
    );
  };

  const states: { state: string; props?: SelectProps }[] = [
    { state: 'Normal' },
    { state: 'Hover', props: { hover: true } },
    { state: 'Focused', props: { focus: true } },
    { state: 'Filled', props: { filled: true } },
    { state: 'Error', props: { error: true } },
    { state: 'Disabled', props: { disabled: true } },
  ];

  const options: SelectOption[] = [
    { label: 'Option1', value: '1' },
    { label: 'Option2', value: '2' },
    { label: 'Option3', value: '3' },
  ];

  return (
    <div className="selects">
      <div className="grid">{states.map(({ state, props = {} }, index) => renderState(state, props, index))}</div>
    </div>
  );
}

Selects.displayName = 'Selects';
