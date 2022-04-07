import './style.less';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

export type TextAreaProps = PropsWithChildren<{
  size?: string;
  resize?: string;
  maxlength?: number;
  rows?: number;
  cols?: number;
  name?: string;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
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
  idQa?: string;
}>;

export function TextArea({
  children,
  size = 'large',
  resize = 'both',
  maxlength,
  cols = 32,
  rows = 5,
  name,
  onChange,
  value,
  required,
  label,
  description,
  hover,
  focus,
  filled,
  error,
  disabled,
  placeholder,
  className,
  idQa,
}: TextAreaProps) {
  return (
    <div id-qa={idQa} className="gkit-text-area-container">
      <label htmlFor={`${label}${size}`} className={classNames('text-area-label', size)}>
        {label}
      </label>
      <textarea
        id={`${label}${size}`}
        onChange={() => onChange}
        {...{ value, maxlength, placeholder, disabled, name, rows, cols, required }}
        className={classNames('text-area', className, size, resize, {
          hover,
          focus,
          filled,
          error,
          disabled,
          placeholder,
        })}
      />
      <label className="text-area-description">{description ?? children}</label>
    </div>
  );
}
