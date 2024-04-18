import './style.less';

import React, { Fragment, SetStateAction, useState } from 'react';
import { Badge } from '@itgenio/gkit/badge';
import { MultiSelect, MultiSelectOption, MultiSelectProps } from '@itgenio/gkit/multiSelect';
import { DismissIcon } from '@itgenio/icons/dismissIcon';

type Option = MultiSelectOption<{ someData: string }>;
type Props = MultiSelectProps<Option>;

type CustomProps = { closureRenderValue?: (size: Props['size']) => Props['renderValues'] };
const sizes = ['small', 'large'] as const;

export const getMultiSelectOptions = (withObjValues = false): Option[] => {
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

const getClosureRenderValue =
  (setValue: React.Dispatch<SetStateAction<Props['values'] | undefined>>, withBadge?: boolean) =>
  (size: Props['size']) =>
  (values: Props['values']) => {
    if (!withBadge) {
      return (values ?? []).map(value => getMultiSelectOptions().find(({ value: v }) => v === value)?.label).join(', ');
    }

    return (values ?? []).map(value => {
      return (
        <Badge type="secondary" key={value as number} size={size}>
          {getMultiSelectOptions().find(({ value: v }) => v === value)?.label}
          <button
            onClick={e => {
              e.stopPropagation();

              setValue((prevState: Props['values']) => (prevState ?? []).filter(v => v !== value));
            }}
          >
            <DismissIcon />
          </button>
        </Badge>
      );
    });
  };

export function MultiSelects() {
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
              options={getMultiSelectOptions(isOptionsWithObjState)}
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
      customProps: { closureRenderValue: getClosureRenderValue(setValue, true) },
    },
    { state: 'With search', props: { search: { active: true, props: { placeholder: 'Search' } } } },
    {
      state: 'Render values inline with counter',
      props: { renderValuesInline: true },
      customProps: { closureRenderValue: getClosureRenderValue(setValue) },
    },
    {
      state: 'Render values inline with counter (with coeffForShowCount)',
      props: { renderValuesInline: { coeffForShowCount: 0.9 } },
      customProps: { closureRenderValue: getClosureRenderValue(setValue, true) },
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
