import './style.less';

import React, { Fragment, useState } from 'react';
import { MultiSelect, MultiSelectProps, Badge, DismissIcon } from '@itgenio/gkit';

const options: MultiSelectProps['options'] = [];

for (let value = 1; value < 100; value++) {
  options.push({
    label: `Options ${value}`,
    value,
  });
}

export function MultiSelects() {
  const sizes = ['small', 'large'] as const;
  const [value, setValue] = useState<(string | number)[]>([1]);

  const renderState = (state: string, props: MultiSelectProps, index: number) => {
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
              helperText="Desc"
              inputText="inputText"
              options={options}
              values={value}
              customBadge={value =>
                options.length !== 0 ? (
                  <Badge type="secondary" key={value} size={size}>
                    {options.find(option => option?.value === value)?.label}
                    <DismissIcon onClick={() => setValue(prevState => prevState.filter(v => v !== value))} />
                  </Badge>
                ) : null
              }
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

  const states1: { state: string; props?: MultiSelectProps }[] = [
    { state: 'Normal' },
    { state: 'Hover', props: { hover: true } },
    { state: 'Focused', props: { focus: true } },
    { state: 'Error', props: { error: true } },
    { state: 'Disabled', props: { disabled: true } },
  ];

  const states2: { state: string; props?: MultiSelectProps }[] = [
    {
      state: 'Normal',
      props: {
        isBadge: true,
      },
    },
    {
      state: 'Hover',
      props: {
        isBadge: true,
        hover: true,
      },
    },
    {
      state: 'Focused',
      props: {
        isBadge: true,
        focus: true,
      },
    },
    { state: 'Error', props: { isBadge: true, error: true } },
    {
      state: 'Disabled',
      props: {
        isBadge: true,
        disabled: true,
      },
    },
  ];

  return (
    <div className="multi-selects">
      <div className="grid">{states1.map(({ state, props = {} }, index) => renderState(state, props, index))}</div>
      <div className="grid">{states2.map(({ state, props = {} }, index) => renderState(state, props, index))}</div>
    </div>
  );
}

MultiSelects.displayName = 'MultiSelects';
