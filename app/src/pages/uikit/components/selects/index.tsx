import './style.less';
import React, { Fragment, useState } from 'react';
import { Select, SelectProps, SelectOption } from '@itgenio/gkit/select';

const sizes = ['small', 'large'] as const;

export const defaultSelectOptions: SelectOption[] = Array.from({ length: 20 }, (_, i) => {
  const index = i + 1;

  const baseOption: SelectOption = { label: `Option${index}`, value: String(index) };

  if (i === 3) {
    return { ...baseOption, customDropdownOption: <span>Option ({index})</span> };
  }

  if (index === 5) {
    return {
      ...baseOption,
      customDropdownOption: <span>Option with custom label ({index})</span>,
      customLabel: (
        <div>
          <span>CustomLabel</span> <div>({index})</div>
        </div>
      ),
    };
  }

  return baseOption;
});

const optionsWithGroups = defaultSelectOptions.map((option, i) => {
  if (i > 15) return option;

  return {
    ...option,
    group: i % 2 ? 'Odd' : 'Even',
  };
});

type State = { title: string; props?: SelectProps; options?: SelectProps['options'] };

export function Selects() {
  const [value, setValue] = useState<string | number | undefined>(undefined);

  const renderState = ({ title, props, options = defaultSelectOptions }: State, index: number) => {
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
            onChange={setValue}
            {...props}
          />
        ))}
      </Fragment>
    );
  };

  const states: State[] = [
    { title: 'Inline', props: { inline: true } },
    { title: 'Normal' },
    { title: 'Hover', props: { hover: true } },
    { title: 'Focused', props: { focus: true } },
    { title: 'Filled', props: { filled: true } },
    { title: 'Groups config', options: optionsWithGroups },
    {
      title: 'Groups config with hide separator',
      options: optionsWithGroups,
      props: { groupsConfig: { hideSeparator: true, separateNotGrouped: true } },
    },
    {
      title: 'Group config',
      options: optionsWithGroups,
      props: {
        groupConfig: { Even: { label: <div>Custom label</div> }, Odd: { hideLabel: false } },
      },
    },
    { title: 'Disabled List', props: { disabledList: ['1', '2', '3'] } },
    { title: 'Error', props: { error: true } },
    { title: 'Disabled', props: { disabled: true } },
    { title: 'StartAdornment', props: { startAdornment: <span>Icon</span> } },
    { title: 'With search', props: { search: { active: true, props: { placeholder: 'Search' } } } },
  ];

  return (
    <div className="selects">
      <div className="grid">{states.map(renderState)}</div>
    </div>
  );
}

Selects.displayName = 'Selects';
