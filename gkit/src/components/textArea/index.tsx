import './style.less';
import classNames from 'classnames';
import React, { useMemo } from 'react';
import { generateId } from '../utils/generateId';

export type TextAreaProps = {
  size?: string;
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
};

export function TextArea({
  size = 'large',
  resize = 'both',
  maxLength,
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
  const id = useMemo(() => generateId(), []);

  return (
    <div id-qa={idQa} className="gkit-text-area-container">
      {label && (
        <label htmlFor={id} className={classNames('text-area-label', size)}>
          {label}
        </label>
      )}
      <textarea
        id={id}
        onChange={onChange}
        {...{ value, maxLength, placeholder, disabled, name, rows, cols, required }}
        className={classNames('text-area', className, size, resize, {
          hover,
          focus,
          filled,
          error,
          disabled,
          placeholder,
        })}
      />
      {description && <label className="text-area-description">{description}</label>}
    </div>
  );
}
