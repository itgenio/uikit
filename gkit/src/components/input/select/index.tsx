import './style.less';
import classNames from 'classnames';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { generateId } from '../../utils/generateId';
import { InputsContainer } from '../components/inputsContainer';

type Sizes = 'small' | 'large';

export type SelectMenuItemProps = { label?: string; value: string | number };

type SelectProps = {
  label?: string;
  description?: string;
  idQa?: string;
  onChange?: (value: EventTarget) => void;
  placeholder?: string;
  className?: string;
  size?: Sizes;
  hover?: boolean;
  active?: boolean;
  focus?: boolean;
  filled?: boolean;
  error?: boolean;
  disabled?: boolean;
  options?: SelectMenuItemProps[];
};

export function Select({
  size = 'large',
  label,
  description,
  idQa,
  onChange,
  hover,
  focus,
  filled,
  error,
  disabled,
  placeholder,
  options,
  className,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const root = useRef(null);
  const id = useMemo(() => generateId(), []);

  const handleDropdownClick = () => {
    open ? setOpen(false) : setOpen(true);
  };

  useEffect(() => {
    const onClick = e => root.current.contains(e.target) || setOpen(false);
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <InputsContainer {...{ id, size, label, description, idQa }}>
      <div
        ref={root}
        className={classNames(className, size, open ? 'select _active' : 'select', {
          hover,
          focus,
          filled,
          error,
          disabled,
        })}
        onClick={handleDropdownClick}
      >
        <input
          readOnly
          id={id}
          className={classNames('select-input', size, { filled, error, disabled })}
          placeholder={placeholder}
          defaultValue={value}
        />

        {open && (
          <div className="select-dropdown">
            {options.map((option, index) => {
              return (
                <div
                  className={classNames('select-option', size)}
                  key={index}
                  onClick={e => {
                    onChange(e.target);
                    setValue((e.target as HTMLElement).innerText);
                    setOpen(false);
                    e.stopPropagation();
                  }}
                >
                  {option.value}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </InputsContainer>
  );
}
