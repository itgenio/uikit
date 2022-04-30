import './style.less';
import classNames from 'classnames';
import React, { useMemo, useRef, useState } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import { generateId } from '../../utils/generateId';
import { InputsContainer } from '../components/inputsContainer';

type Sizes = 'small' | 'large';

type Values = string | number;

export type SelectOption = { label: string; value: Values };

export type SelectProps = {
  label?: string;
  helperText?: string;
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
};

export function Select({
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
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const id = useMemo(() => generateId(), []);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => setOpen(false));

  return (
    <InputsContainer {...{ id, size, label, helperText, idQa, className }}>
      <div
        ref={ref}
        className={classNames('gkit-select', size, {
          active: open,
          hover,
          focus,
          error,
          disabled,
        })}
      >
        <input
          readOnly
          id={id}
          className={classNames('select-input', size, { filled, error, disabled })}
          {...{ placeholder, disabled, value }}
          onClick={() => setOpen(!open)}
        />
        {open && !disabled && (
          <div className="select-dropdown">
            {options.map((option, index) => (
              <div
                className={classNames('select-option', size)}
                key={index}
                onClick={e => {
                  e.stopPropagation();
                  setOpen(!open);
                  onChange(option.label);
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </InputsContainer>
  );
}
