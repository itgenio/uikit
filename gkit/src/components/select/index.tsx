import './style.less';
import * as SelectPrimitive from '@radix-ui/react-select';
import classNames from 'classnames';
import React, { Fragment, useEffect, useMemo, useRef, useState } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import { groupByPropertyToDict } from '@itgenio/utils';
import { CheckmarkIcon, ChevronUpFilledIcon, ChevronDownFilledIcon } from '../icons';
import { InputsContainer } from '../internal/components/inputsContainer';
import { generateId } from '../internal/utils/generateId';

type Sizes = 'small' | 'large';

type Values = string | number;

export type SelectOption = { label: string; value: Values; group?: string };

export type GroupConfig = {
  hideText?: boolean;
  hideSeparator?: boolean;
  separateNotGrouped?: boolean;
};

export type SelectProps = {
  label?: string;
  helperText?: React.ReactNode;
  idQa?: string;
  onChange?: (value: Values) => void;
  placeholder?: string;
  className?: string;
  size?: Sizes;
  hover?: boolean;
  active?: boolean;
  focus?: boolean;
  filled?: boolean;
  error?: boolean;
  disabled?: boolean;
  options?: SelectOption[];
  value?: Values;
  valuePrefix?: string;
  groupConfig?: GroupConfig;
  portalProps?: SelectPrimitive.SelectPortalProps;
  idQaForHelperText?: string;
};

export const Select = React.memo(
  ({
    size = 'large',
    className,
    label,
    helperText,
    idQa,
    onChange,
    hover,
    focus,
    filled,
    error,
    disabled,
    placeholder,
    options,
    value,
    portalProps = {},
    groupConfig,
    valuePrefix = '',
    idQaForHelperText,
  }: SelectProps) => {
    const [open, setOpen] = useState(false);
    const id = useMemo(() => generateId(), []);
    const ref = useRef<HTMLDivElement>(null);
    const canShowDropdown = open && !disabled;

    useOnClickOutside(ref, () => setOpen(false));

    const renderOptionItem = (option: SelectOption, index: number) => (
      <SelectPrimitive.Item
        id-qa={classNames({ [`${idQa}-option-${option.value}`]: idQa })}
        className={classNames('gkit-select-option', size)}
        key={index}
        value={String(option.value)}
        data-value={option.value}
      >
        <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
        {option.value === value && (
          <SelectPrimitive.ItemIndicator>
            <CheckmarkIcon />
          </SelectPrimitive.ItemIndicator>
        )}
      </SelectPrimitive.Item>
    );

    const renderOptionsByGroups = () => {
      const optionsByGroupDict = groupByPropertyToDict(
        options.filter(o => !!o.group),
        option => option.group
      );
      const optionsWithoutGroup = options.filter(o => !o.group);

      return [
        ...optionsWithoutGroup.map(renderOptionItem),
        groupConfig?.separateNotGrouped && <SelectPrimitive.Separator className="gkit-select-separator" />,
        ...Object.values(optionsByGroupDict).map((options, index, groupedOptions) => [
          <SelectPrimitive.Group className="gkit-select-group" key={options[0].group}>
            {!groupConfig?.hideText && (
              <SelectPrimitive.Label className="text-xs gkit-select-group-text">
                {options[0].group}
              </SelectPrimitive.Label>
            )}
          </SelectPrimitive.Group>,
          options.map(renderOptionItem),
          index !== groupedOptions.length - 1 && !groupConfig?.hideSeparator && (
            <SelectPrimitive.Separator className="gkit-select-separator" />
          ),
        ]),
      ];
    };

    const onValueChange = (newValue: string) => {
      const option = options.find(option => String(option.value) === newValue);

      if (!option) {
        throw new Error(`no option???: ${newValue}`);
      }

      onChange(option.value);
    };

    return (
      <InputsContainer {...{ id, size, label, helperText, idQa, className, error, idQaForHelperText }}>
        <SelectPrimitive.Root
          value={value != null ? String(value) : undefined}
          onValueChange={onValueChange}
          open={disabled ? false : undefined}
          onOpenChange={setOpen}
        >
          <SelectPrimitive.Trigger
            className={classNames('gkit-select', 'input-wrapper', size, {
              hover,
              focus,
              error,
              disabled,
              filled,
            })}
            id-qa={classNames({ [`${idQa}-trigger`]: idQa })}
            id={id}
          >
            <SelectPrimitive.Value
              placeholder={placeholder}
              aria-label={value != null ? valuePrefix + value : undefined}
            />
            <SelectPrimitive.Icon className="select-chevron">
              {canShowDropdown ? <ChevronUpFilledIcon /> : <ChevronDownFilledIcon />}
            </SelectPrimitive.Icon>
          </SelectPrimitive.Trigger>
          <SelectPrimitive.Portal {...portalProps} className={classNames('gkit-select-portal', portalProps.className)}>
            <Fragment>
              <Overlay open={canShowDropdown} />
              <SelectPrimitive.Content
                className="gkit-select-dropdown"
                id-qa={classNames({ [`${idQa}-dropdown`]: idQa })}
              >
                <SelectPrimitive.Viewport
                  className="gkit-select-viewport"
                  id-qa={classNames({ [`${idQa}-viewport`]: idQa })}
                >
                  {options.some(({ group }) => !!group) ? renderOptionsByGroups() : options.map(renderOptionItem)}
                </SelectPrimitive.Viewport>
              </SelectPrimitive.Content>
            </Fragment>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
      </InputsContainer>
    );
  }
);

Select.displayName = 'Select';

/* Workaround for touch events propagating to underlying elements https://github.com/radix-ui/primitives/issues/1658 */
const Overlay = ({ open }: { open: boolean }) => {
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    if (!open) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 10);
      return () => {
        clearTimeout(timer);
      };
    }

    setVisible(true);

    return () => {};
  }, [open]);

  return visible ? <div className="gkit-select-overlay" onClick={e => e.stopPropagation()} /> : null;
};
