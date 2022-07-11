import './style.less';

import React, { Fragment, useState } from 'react';
import { MultiSelect, MultiSelectProps, Badge, DismissIcon } from '@itgenio/gkit';

const options: MultiSelect['options'] = [];

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
          const customBadge = props.customBadge ? props.customBadge(size) : undefined;
          return (
            <MultiSelect
              key={size}
              {...p}
              label="Label"
              hasSelectAllOption
              helperText="Desc"
              inputText="inputText"
              options={options}
              customBadge={customBadge}
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

  const customBadge = size => {
    const element = value => (
      <Badge type="primary" key={value} size={size}>
        {options.find(option => option.value === value)?.label}
        <DismissIcon onClick={() => setValue(prevState => prevState.filter(v => v !== value))} />
      </Badge>
    );
    return value => element(value);
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
        customBadge,
      },
    },
    {
      state: 'Hover',
      props: {
        isBadge: true,
        customBadge,
        hover: true,
      },
    },
    {
      state: 'Focused',
      props: {
        isBadge: true,
        customBadge,
        focus: true,
      },
    },
    { state: 'Error', props: { isBadge: true, customBadge, error: true } },
    {
      state: 'Disabled',
      props: {
        isBadge: true,
        customBadge,
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
