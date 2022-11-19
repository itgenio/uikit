import './style.less';

import React, { Fragment, useState } from 'react';
import { Badge } from '@itgenio/gkit/badge';
import { DismissIcon } from '@itgenio/gkit/icons';
import { MultiSelect, MultiSelectOption, MultiSelectProps } from '@itgenio/gkit/multiSelect';

type Option = MultiSelectOption<{ someData: string }>;
type Props = MultiSelectProps<Option>;

type CustomProps = { closureRenderValue?: (size: Props['size']) => Props['renderValues'] };

const getOptions = (withObjValues = false): Option[] => {
  return Array.from({ length: 60 }, (_, i) => {
    const index = i + 1;

    return {
      label: `Option ${index}`,
      value: withObjValues ? { key: index, someData: `data-${index}` } : index,
      group: index > 5 ? (index % 2 === 0 ? 'Even' : 'Odd') : undefined,
      isDisabled: withObjValues && index == 3,
    };
  });
};

export function MultiSelects() {
  const sizes = ['small', 'large'] as const;
  const [value, setValue] = useState<Props['values']>([1]);
  const [objValues, setObjValues] = useState<Props['values']>([{ key: 1, someData: 'data' }]);

  const renderState = (state: string, props: Props, customProps: CustomProps, index: number) => {
    const isOptionsWithObjState = state === 'Options with objects and disabled option';

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
              options={isOptionsWithObjState ? getOptions(true) : getOptions()}
              values={isOptionsWithObjState ? objValues : value}
              selectAllOptionLabel="All Selected"
              onChange={values => {
                isOptionsWithObjState ? setObjValues(values) : setValue(values);
              }}
            />
          );
        })}
      </Fragment>
    );
  };

  const states: {
    state: string;
    props?: Props;
    customProps?: CustomProps;
  }[] = [
    { state: 'Normal' },
    { state: 'Hover', props: { hover: true } },
    { state: 'Focused', props: { focus: true } },
    { state: 'Error', props: { error: true } },
    { state: 'Disabled', props: { disabled: true } },
    {
      state: 'DivideByGroups with separator for without group',
      props: { groupConfig: { hideSeparator: true, separateNotGrouped: true } },
    },
    { state: 'Options with objects and disabled option' },
    {
      state: 'Custom Render Values',
      customProps: {
        closureRenderValue: size => values => {
          return values.map(value => {
            return (
              <Badge type="secondary" key={value as number} size={size}>
                {getOptions().find(({ value: v }) => v === (value as number))?.label}
                <button
                  onClick={e => {
                    e.stopPropagation();

                    setValue(prevState => prevState?.filter(v => v !== (value as number)));
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
