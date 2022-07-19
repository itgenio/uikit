import './style.less';
import React, { Fragment, useState } from 'react';
import { Select, SelectProps, SelectOption } from '@itgenio/gkit';

const sizes = ['small', 'large'] as const;

const defaultOptions: SelectOption[] = Array.from({ length: 20 }, (_, i) => {
  const index = i + 1;

  return { label: `Option${index}`, value: index };
});

const optionsWithGroups = defaultOptions.map((option, i) => {
  option.group = i % 2 ? 'Odd' : 'Even';

  return option;
});

type State = { title: string; props?: SelectProps; options?: SelectProps['options'] };

export function Selects() {
  const [value, setValue] = useState<string | number>('');

  const renderState = ({ title, props, options = defaultOptions }: State, index: number) => {
    return (
      <Fragment key={index}>
        <div>{title}</div>

        {sizes.map(size => (
          <Select
            key={size}
            size={size}
            placeholder="Placeholder"
            label="Label"
            helperText="Desc"
            options={options}
            value={value}
            onChange={value => setValue(value)}
            {...props}
          />
        ))}
      </Fragment>
    );
  };

  const states: State[] = [
    { title: 'Normal' },
    { title: 'Hover', props: { hover: true } },
    { title: 'Focused', props: { focus: true } },
    { title: 'Filled', props: { filled: true } },
    { title: 'DivideByGroups', props: { divideByGroups: true }, options: optionsWithGroups },
    { title: 'Error', props: { error: true } },
    { title: 'Disabled', props: { disabled: true } },
  ];

  return (
    <div className="selects">
      <div className="grid">{states.map(renderState)}</div>
    </div>
  );
}

Selects.displayName = 'Selects';
