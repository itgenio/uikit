import './style.less';
import React, { Fragment, useState } from 'react';
import { Select, SelectProps, SelectOption } from '@itgenio/gkit';

const options: SelectOption[] = Array.from({ length: 20 }, (_, i) => {
  const index = i + 1;

  return { label: `Option${index}`, value: index };
});

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

  return (
    <div className="selects">
      <div className="grid">{states.map(({ state, props = {} }, index) => renderState(state, props, index))}</div>
    </div>
  );
}

Selects.displayName = 'Selects';
