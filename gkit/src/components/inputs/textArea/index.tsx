import './style.less';
import classNames from 'classnames';
import React, { useMemo } from 'react';
import { generateId } from '../../utils/generateId';
import { InputsContainer } from '../components/inputsContainer';

type Sizes = 'small' | 'large';

export type TextAreaProps = {
  idQa?: string;
  resize?: string;
  maxLength?: number;
  rows?: number;
  cols?: number;
  name?: string;
  label?: string;
  helperText?: React.ReactNode;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  value?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  size?: Sizes;
  hover?: boolean;
  active?: boolean;
  focus?: boolean;
  filled?: boolean;
  error?: boolean;
  disabled?: boolean;
};

export function TextArea({
  idQa,
  size = 'large',
  label,
  helperText,
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
  const id = useMemo(() => generateId(), []);
  return (
    <InputsContainer {...{ id, size, label, helperText, idQa, className }}>
      <textarea
        id={id}
        onChange={onChange}
        {...{ value, maxLength, placeholder, disabled, name, rows, cols, required }}
        className={classNames('gkit-text-area', size, resize, {
          hover,
          focus,
          filled,
          error,
          placeholder,
          disabled,
        })}
      />
    </InputsContainer>
  );
}
