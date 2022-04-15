import './style.less';
import React, { Fragment } from 'react';
import { TextArea, Select, TextField, SelectMenuItemProps } from '@itgenio/gkit';

type InputsProps = {
  size?: 'small' | 'large';
  hover?: boolean;
  active?: boolean;
  focus?: boolean;
  filled?: boolean;
  error?: boolean;
  disabled?: boolean;
};

export function Inputs() {
  const sizes = ['small', 'large'] as const;

  const renderState = (state: string, props: InputsProps, index: number) => {
    return (
      <Fragment key={index}>
        <div>{state}</div>
        {sizes.map(size => {
          const p = { ...props, size };
          return <TextField key={size} {...p} placeholder="Placeholder" label="Label" helperText="Desc" />;
        })}
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
              onChange={value => console.log(value)}
            />
          );
        })}
        {sizes.map(size => {
          const p = { ...props, size };
          return <TextArea {...p} placeholder="Placeholder" key={size} label="Label" helperText="Desc" />;
        })}
      </Fragment>
    );
  };

  const states: { state: string; props?: InputsProps }[] = [
    { state: 'Normal' },
    { state: 'Hover', props: { hover: true } },
    { state: 'Focused', props: { focus: true } },
    { state: 'Filled', props: { filled: true } },
    { state: 'Error', props: { error: true } },
    { state: 'Disabled', props: { disabled: true } },
  ];

  const options: SelectMenuItemProps[] = [{ value: 'Option1' }, { value: 'Option2' }, { value: 'Option3' }];

  return (
    <div className="textAreas">
      <div className="grid">{states.map(({ state, props = {} }, index) => renderState(state, props, index))}</div>
    </div>
  );
}

Inputs.displayName = 'Inputs';
