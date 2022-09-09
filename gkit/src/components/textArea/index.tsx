import './style.less';
import classNames from 'classnames';
import React, { useLayoutEffect, useMemo, useRef } from 'react';
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
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
  autoFocus?: boolean;
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
  onFocus,
  onBlur,
  autoFocus,
}: TextAreaProps) {
  const id = useMemo(() => generateId(), []);

  const ref = useRef<HTMLTextAreaElement>();

  useLayoutEffect(() => {
    if (!autoFocus) return;

    const textAreaElement = ref.current;

    if (!textAreaElement) return;

    const pos = ref.current.value.length;

    textAreaElement.setSelectionRange(pos, pos);
  }, [autoFocus]);

  return (
    <InputsContainer {...{ id, size, label, helperText, idQa, className }}>
      <div
        className={classNames('gkit-text-area-wrapper', size, {
          hover,
          focus,
          error,
          disabled,
          filled,
        })}
      >
        <textarea
          id-qa={idQaForTextArea}
          ref={ref}
          {...{
            id,
            onChange,
            onKeyPress,
            value,
            maxLength,
            placeholder,
            disabled,
            name,
            rows,
            cols,
            required,
            onFocus,
            onBlur,
            autoFocus,
          }}
          className={classNames('gkit-text-area', resize)}
        />
      </div>
    </InputsContainer>
  );
}
