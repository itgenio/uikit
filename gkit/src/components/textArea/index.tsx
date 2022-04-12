import './style.less';
import classNames from 'classnames';
import React, { PropsWithChildren, useState } from 'react';

export type TextAreaProps = PropsWithChildren<{
  size?: string;
  id?: number;
  resize?: string;
  maxLength?: number;
  rows?: number;
  cols?: number;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  value?: string;
  required?: boolean;
  label?: string;
  description?: string;
  hover?: boolean;
  active?: boolean;
  focus?: boolean;
  filled?: boolean;
  error?: boolean;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  options?: any;
  idQa?: string;
}>;

export function TextAreaContainer({
  children,
  id,
  size = 'large',
  label,
  description,
  className,
  idQa,
}: TextAreaProps) {
  return (
    <div id-qa={idQa} className="gkit-text-area-container">
      {label && (
        <label htmlFor={`${id}`} className={classNames('text-area-label', className, size)}>
          {label}
        </label>
      )}
      {children}
      {description && <label className="text-area-description">{description}</label>}
    </div>
  );
}

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

export function Selector({
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
}: TextAreaProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(placeholder);

  const handleDropdownClick = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <div className="wrapper-select">
      <div
        className={classNames(className, size, open ? 'select _active' : 'select', {
          hover,
          focus,
          filled,
          error,
          placeholder,
          disabled,
        })}
        id={`${id}`}
        onClick={handleDropdownClick}
      >
        <div className={classNames('select-selected', size)}>{value}</div>

        {open && (
          <div className="select-dropdown">
            {options.map((option, index) => {
              return (
                <SelectOption
                  key={index}
                  text={option.text}
                  onClick={e => {
                    console.log(e);
                    setValue(e.target.innerText);
                    setOpen(false);
                    e.stopPropagation();
                  }}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

type SelectOptionProps = { text?: string; onClick?: () => void };

function SelectOption({ text, onClick }: SelectOptionProps) {
  return (
    <div className="select-option" onClick={onClick}>
      {text}
    </div>
  );
}
