import './style.less';
import classNames from 'classnames';
import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';

type Sizes = 'small' | 'large';

export type SelectMenuItemProps = { key?: string; text?: string };

export type StateProps = {
  size?: Sizes;
  hover?: boolean;
  active?: boolean;
  focus?: boolean;
  filled?: boolean;
  error?: boolean;
  disabled?: boolean;
};

type ContainerInputsProps = PropsWithChildren<{
  idQa?: string;
  id?: number;
  label?: string;
  size?: Sizes;
  description?: string;
  className?: string;
}>;

export function ContainerInputs({
  children,
  id,
  size = 'large',
  label,
  description,
  className,
  idQa,
}: ContainerInputsProps) {
  return (
    <div id-qa={idQa} className={classNames('gkit-container-inputs', className)}>
      {label && (
        <label htmlFor={`${id}`} className={classNames('container-inputs-label', size)}>
          {label}
        </label>
      )}
      {children}
      {description && <label className="container-inputs-description">{description}</label>}
    </div>
  );
}

type TextAreaProps = {
  id?: number;
  resize?: string;
  maxLength?: number;
  rows?: number;
  cols?: number;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  value?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
} & StateProps;

export function TextArea({
  id,
  size = 'large',
  resize = 'both',
  maxLength,
  cols = 32,
  rows = 5,
  name,
  onChange,
  value,
  required,
  hover,
  focus,
  filled,
  error,
  disabled,
  placeholder,
  className,
}: TextAreaProps) {
  return (
    <textarea
      id={`${id}`}
      onChange={onChange}
      {...{ value, maxLength, placeholder, disabled, name, rows, cols, required }}
      className={classNames('text-area', className, size, resize, {
        hover,
        focus,
        filled,
        error,
        placeholder,
        disabled,
      })}
    />
  );
}

type SelectProps = {
  id?: number;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  className?: string;
  options?: SelectMenuItemProps[];
} & StateProps;

export function Select({
  id,
  size = 'large',
  onChange,
  hover,
  focus,
  filled,
  error,
  disabled = false,
  placeholder,
  options,
  className,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const root = useRef(null);

  const handleDropdownClick = () => {
    open ? setOpen(false) : setOpen(true);
  };

  useEffect(() => {
    const onClick = e => root.current.contains(e.target) || setOpen(false);
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div
      ref={root}
      className={classNames(className, size, open ? 'select _active' : 'select', {
        hover,
        focus,
        filled,
        error,
        disabled,
      })}
      id={`${id}`}
      onClick={handleDropdownClick}
    >
      <input
        readOnly
        className={classNames('select-input', size, { filled, error, disabled })}
        placeholder={placeholder}
        defaultValue={value}
      />

      {open && (
        <div className="select-dropdown">
          {options.map((option, index) => {
            return (
              <div
                className="select-option"
                key={index}
                onClick={e => {
                  onChange(e.target.innerText);
                  setValue((e.target as HTMLElement).innerText);
                  setOpen(false);
                  e.stopPropagation();
                }}
              >
                {option.text}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
