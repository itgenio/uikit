import './style.less';

import React, { Fragment, useState } from 'react';
import { Badge } from '@itgenio/gkit/badge';
import { DismissIcon } from '@itgenio/gkit/icons';
import { MultiSelect, MultiSelectProps } from '@itgenio/gkit/multiSelect';

type CustomProps = { closureRenderValue?: (size: MultiSelectProps['size']) => MultiSelectProps['renderValues'] };

const options: NonNullable<MultiSelectProps['options']> = Array.from({ length: 60 }, (_, i) => {
  const index = i + 1;

  return { label: `Option ${index}`, value: index };
});

export function MultiSelects() {
  const sizes = ['small', 'large'] as const;
  const [value, setValue] = useState<MultiSelectProps['values']>([1]);

  const renderState = (state: string, props: MultiSelectProps, customProps: CustomProps, index: number) => {
    return (
      <Fragment key={index}>
        <div>{state}</div>
        {sizes.map(size => {
          const p = { ...props, size };
          return (
            <MultiSelect
              key={size}
              {...p}
              renderValues={customProps?.closureRenderValue?.(size)}
              label="Label"
              hasSelectAllOption
              helperText="Desc"
              inputText="inputText"
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

  const states: {
    state: string;
    props?: MultiSelectProps;
    customProps?: CustomProps;
  }[] = [
    { state: 'Normal' },
    { state: 'Hover', props: { hover: true } },
    { state: 'Focused', props: { focus: true } },
    { state: 'Error', props: { error: true } },
    { state: 'Disabled', props: { disabled: true } },
    {
      state: 'Custom Render Values',
      customProps: {
        closureRenderValue: size => values => {
          return values.map(value => {
            return (
              <Badge type="secondary" key={value} size={size}>
                {options.find(({ value: v }) => v === value)?.label}
                <button
                  onClick={e => {
                    e.stopPropagation();

                    setValue(prevState => prevState?.filter(v => v !== value));
                  }}
                >
                  <DismissIcon />
                </button>
              </Badge>
            );
          });
        },
      },
    },
  ];

  return (
    <div className="multi-selects">
      <div className="grid">
        {states.map(({ state, props = {}, customProps = {} }, index) => renderState(state, props, customProps, index))}
      </div>
    </div>
  );
}

MultiSelects.displayName = 'MultiSelects';
