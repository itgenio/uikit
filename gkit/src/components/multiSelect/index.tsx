import './style.less';
import classNames from 'classnames';
import React, { useLayoutEffect, useRef, useState } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import { Checkbox } from '../checkbox';
import { SubtractFilledIcon, ChevronDownFilledIcon, ChevronUpFilledIcon, CheckmarkFilledIcon } from '../icons';

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

    return (
      <div id-qa={idQa} className={classNames('gkit-multi-select-wrapper', size)}>
        <div
          ref={ref}
          className={classNames('gkit-multi-select', className, size, {
            hover,
            focus,
            error,
            disabled,
          })}
        >
          <div
            className="multi-select-content-wrapper"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <div className={classNames('multi-select-label', { disabled })}>{label}</div>

            {values.length !== 0 && !disabled && <div className="multi-select-count">{values.length}</div>}

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
                  onChange={() => {
                    onChange(values.includes(value) ? values.filter(v => v !== value) : [...values, value]);
                  }}
                >
                  <Checkbox checked={values.includes(value)}>{label}</Checkbox>
                </li>
              ))}
            </ul>
          )}
        </div>

        {helperText && <div className="multi-select-helper-text">{helperText}</div>}
      </div>
    );
  }
);

MultiSelect.displayName = 'MultiSelect';
