import './style.less';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

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
