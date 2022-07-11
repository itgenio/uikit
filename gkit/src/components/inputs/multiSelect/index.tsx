import './style.less';
import classNames from 'classnames';
import React, { Fragment, useLayoutEffect, useRef, useState } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import { Badge } from '../../badge';
import { Checkbox } from '../../checkbox';
import {
  SubtractFilledIcon,
  ChevronDownFilledIcon,
  ChevronUpFilledIcon,
  CheckmarkFilledIcon,
  DismissIcon,
} from '../../icons';
import { InputsContainer } from '../components/inputsContainer';

type Sizes = 'small' | 'large';

type Value = string | number;

const DROPDOWN_PADDING = 20;

export type MultiSelectProps = {
  size?: Sizes;
  label?: string;
  idQa?: string;
  className?: string;
  error?: boolean;
  focus?: boolean;
  hover?: boolean;
  disabled?: boolean;
  values?: Value[];
  helperText?: React.ReactNode;
  options?: { label: string; value: Value }[];
  onChange?: (selectedValues: Value[]) => void;
  selectAllOptionLabel?: string;
  hasSelectAllOption?: boolean;
  inputText?: string;
  isBadge?: boolean;
  customBadge?: () => React.ReactNode;
};

export const MultiSelect = React.memo(
  ({
    size,
    label,
    idQa,
    className,
    focus,
    hover,
    disabled,
    error,
    values,
    options,
    helperText,
    onChange,
    selectAllOptionLabel,
    hasSelectAllOption,
    inputText,
    isBadge = false,
    customBadge,
  }: MultiSelectProps) => {
    const [open, setOpen] = useState(false);

    const ref = useRef(null);
    const dropdownRef = useRef<HTMLUListElement>(null);

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

    const defaultBadge = value => (
      <Badge type="primary" key={value} size={size}>
        {options.find(option => option.value === value)?.label}
        <DismissIcon
          onClick={e => {
            e.stopPropagation();

            onChange(values.filter(v => v !== value));
          }}
        />
      </Badge>
    );

    return (
      <InputsContainer
        {...{ ref, idQa, size, label, helperText, className: classNames('gkit-multi-select', className) }}
      >
        <div
          className={classNames('multi-select-content-wrapper', size, {
            hover,
            focus,
            error,
            disabled,
          })}
          onClick={e => {
            e.stopPropagation();

            // @ts-expect-error не знаю как сделать так чтобы не ругался
            if (e.target.closest('.gkit-badge')) return;

            setOpen(!open);
          }}
        >
          <div className={classNames('multi-select-label', size, { disabled, selected: values.length !== 0 })}>
            {isBadge ? (
              values.length !== 0 && !disabled ? (
                values.map(customBadge ? customBadge : defaultBadge)
              ) : (
                inputText
              )
            ) : (
              <Fragment>
                {inputText}
                {values.length !== 0 && !disabled && <span className="multi-select-count">{values.length}</span>}
              </Fragment>
            )}
          </div>
          <div className="multi-select-chevron">
            {open && !disabled ? <ChevronUpFilledIcon /> : <ChevronDownFilledIcon />}
          </div>
        </div>

        {open && !disabled && (
          <ul ref={dropdownRef} className="multi-select-dropdown">
            {hasSelectAllOption && (
              <li
                className={classNames('multi-select-option', size)}
                onClick={() => {
                  onChange(values.length === options.length ? [] : options.map(({ value }) => value));
                }}
              >
                <Checkbox
                  className="multi-select-checkbox"
                  checked={values.length !== 0}
                  onChange={({ target: { checked } }) => {
                    onChange(!checked ? options.map(({ value }) => value) : []);
                  }}
                  icon={<SubtractFilledIcon />}
                  checkedIcon={values.length === options.length ? <CheckmarkFilledIcon /> : <SubtractFilledIcon />}
                >
                  {selectAllOptionLabel}
                </Checkbox>
              </li>
            )}

            {options.map(({ label, value }) => (
              <li
                className={classNames('multi-select-option', size)}
                key={value}
                onChange={e => {
                  e.stopPropagation();

                  onChange(values.includes(value) ? values.filter(v => v !== value) : [...values, value]);
                }}
              >
                <Checkbox className="multi-select-checkbox" checked={values.includes(value)}>
                  {label}
                </Checkbox>
              </li>
            ))}
          </ul>
        )}
      </InputsContainer>
    );
  }
);

MultiSelect.displayName = 'MultiSelect';
