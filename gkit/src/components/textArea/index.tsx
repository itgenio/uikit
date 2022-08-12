import './style.less';
import classNames from 'classnames';
import React, { useMemo, useState } from 'react';
import { InputsContainer } from '../internal/components/inputsContainer';
import { generateId } from '../internal/utils/generateId';

type Sizes = 'small' | 'large';

export type TextAreaProps = {
  idQa?: string;
  idQaForTextArea?: string;
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
  onKeyPress?: React.KeyboardEventHandler<HTMLTextAreaElement>;
};

export function TextArea({
  idQa,
  idQaForTextArea,
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
  onKeyPress,
}: TextAreaProps) {
  const [hasFocus, setHasFocus] = useState(false);

  const id = useMemo(() => generateId(), []);

  return (
    <InputsContainer {...{ id, size, label, helperText, idQa, className }}>
      <div
        className={classNames('gkit-text-area-wrapper', size, {
          hover,
          focus: focus || hasFocus,
          error,
          disabled,
          filled,
        })}
      >
        <textarea
          id-qa={idQaForTextArea}
          {...{ id, onChange, onKeyPress, value, maxLength, placeholder, disabled, name, rows, cols, required }}
          className={classNames('gkit-text-area', resize)}
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
        />
      </div>
    </InputsContainer>
  );
}
