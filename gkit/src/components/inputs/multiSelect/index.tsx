import './style.less';
import classNames from 'classnames';
import React, { Fragment, useLayoutEffect, useRef, useState } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import { Checkbox } from '../../checkbox';
import { SubtractFilledIcon, ChevronDownFilledIcon, ChevronUpFilledIcon, CheckmarkFilledIcon } from '../../icons';
import { InputsContainer } from '../components/inputsContainer';

type Sizes = 'small' | 'large';

type Value = string | number;

const DROPDOWN_PADDING = 20;

type Option = { label: string; value: Value };

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
  options?: Option[];
  onChange?: (selectedValues: Value[]) => void;
  selectAllOptionLabel?: string;
  hasSelectAllOption?: boolean;
  inputText?: string;
  renderValues?: (values: Value[]) => React.ReactNode;
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
    renderValues: renderValuesProp,
  }: MultiSelectProps) => {
    const [open, setOpen] = useState(false);
    const hasValue = values.length > 0;

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

    const renderValues = () => {
      if (renderValuesProp) {
        return renderValuesProp(values);
      }

      return (
        <Fragment>
          {inputText}

          {hasValue && !disabled && <span className="multi-select-count">{values.length}</span>}
        </Fragment>
      );
    };

    return (
      <InputsContainer
        {...{ ref, idQa, size, label, helperText, className: classNames('gkit-multi-select', className) }}
      >
        <div
          className={classNames('multi-select-content', size, {
            hover,
            focus,
            error,
            disabled,
          })}
          onClick={e => {
            e.stopPropagation();

            setOpen(!open);
          }}
        >
          <div className={classNames('multi-select-label', size, { disabled, selected: hasValue })}>
            {renderValues()}
          </div>
          <div className="multi-select-chevron">
            {open && !disabled ? <ChevronUpFilledIcon /> : <ChevronDownFilledIcon />}
          </div>
        </div>

        {open && !disabled && (
          <ul ref={dropdownRef} id-qa={classNames({ [`${idQa}-dropdown`]: idQa })} className="multi-select-dropdown">
            {hasSelectAllOption && (
              <li
                id-qa={classNames({ [`${idQa}-option-select-all`]: idQa })}
                className={classNames('multi-select-option', size)}
                onClick={() => {
                  onChange(values.length === options.length ? [] : options.map(({ value }) => value));
                }}
              >
                <Checkbox
                  className="multi-select-checkbox"
                  checked={hasValue}
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
                id-qa={classNames({ [`${idQa}-option-${value}`]: idQa })}
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
