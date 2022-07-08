import './style.less';
import React, { Fragment, useState } from 'react';
import { Select, SelectProps, SelectOption } from '@itgenio/gkit';

const options: SelectOption[] = [
  { label: 'Option1 Option1 Option1 Option1 Option1', value: '1' },
  { label: 'Option2', value: '2' },
  { label: 'Option3', value: '3' },
  { label: 'Option4', value: '4' },
  { label: 'Option5', value: '5' },
  { label: 'Option6', value: '6' },
  { label: 'Option7', value: '7' },
  { label: 'Option8', value: '8' },
  { label: 'Option9', value: '9' },
  { label: 'Option10', value: '10' },
  { label: 'Option11', value: '11' },
  { label: 'Option12', value: '12' },
  { label: 'Option13', value: '13' },
  { label: 'Option14', value: '14' },
  { label: 'Option15', value: '15' },
  { label: 'Option16', value: '16' },
  { label: 'Option17', value: '17' },
  { label: 'Option18', value: '18' },
  { label: 'Option19', value: '19' },
  { label: 'Option20', value: '20' },
];

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
