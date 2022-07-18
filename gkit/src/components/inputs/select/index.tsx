import './style.less';
import classNames from 'classnames';
import React, { useLayoutEffect, useMemo, useRef, useState } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import { groupByPropertyToDict } from '@itgenio/utils';
import { CheckmarkIcon, ChevronUpFilledIcon, ChevronDownFilledIcon } from '../../icons';
import { generateId } from '../../utils/generateId';
import { InputsContainer } from '../components/inputsContainer';

type Sizes = 'small' | 'large';

type Values = string | number;

export type SelectOption = { label: string; value: Values; group?: string };

const DROPDOWN_PADDING = 20;

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
  divideByGroups?: boolean;
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
    divideByGroups,
  }: SelectProps) => {
    const [open, setOpen] = useState(false);
    const id = useMemo(() => generateId(), []);
    const ref = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useOnClickOutside(ref, () => setOpen(false));

    useLayoutEffect(() => {
      if (!open) return;

      const dropdownElement = dropdownRef.current;

      if (!dropdownElement) return;

      const rect = dropdownElement.getBoundingClientRect();

      if (rect.right > window.innerWidth) {
        dropdownElement.style.left = `-${rect.right - window.innerWidth + DROPDOWN_PADDING}px`;
      }

      if (rect.bottom > window.innerHeight) {
        dropdownElement.style.top = `calc(100% - ${rect.bottom - window.innerHeight + DROPDOWN_PADDING}px)`;
      }
    }, [open]);

    const renderOptionItem = (option: SelectOption, index: number) => (
      <div
        id-qa={classNames({ [`${idQa}-option-${option.value}`]: idQa })}
        className={classNames('select-option', size)}
        key={index}
        onClick={e => {
          e.stopPropagation();
          setOpen(!open);
          onChange(option.value);
        }}
      >
        {option.label}
        {option.value === value && <CheckmarkIcon />}
      </div>
    );

    const renderOptionsByGroups = () => {
      const optionsByGroupDict = groupByPropertyToDict(
        options.filter(o => !!o.group),
        option => option.group
      );

      return Object.keys(optionsByGroupDict).map((group, groupIdx, groups) => [
        optionsByGroupDict[group].map(renderOptionItem),

        groupIdx !== groups.length - 1 && (
          <div key={`divider-${groupIdx}`} tabIndex={-1}>
            <hr />
          </div>
        ),
      ]);
    };

    return (
      <InputsContainer {...{ id, size, label, helperText, idQa, className }}>
        <div
          ref={ref}
          className={classNames('gkit-select', size, {
            hover,
            focus,
            error,
            disabled,
          })}
          onClick={() => setOpen(!open)}
        >
          <div className="input-wrapper">
            <input
              readOnly
              className={classNames('select-input', size, { filled, error, disabled })}
              {...{ id, placeholder, disabled }}
              value={options.find(option => option.value === value)?.label}
            />

            <div className="select-chevron">
              {open && !disabled ? <ChevronUpFilledIcon /> : <ChevronDownFilledIcon />}
            </div>
          </div>

          {open && !disabled && (
            <div className="select-dropdown" id-qa={classNames({ [`${idQa}-dropdown`]: idQa })} ref={dropdownRef}>
              {divideByGroups ? renderOptionsByGroups() : options.map(renderOptionItem)}
            </div>
          )}
        </div>
      </InputsContainer>
    );
  }
);

Select.displayName = 'Select';
