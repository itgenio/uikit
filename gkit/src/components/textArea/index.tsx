import './style.less';
import classNames from 'classnames';
import React, { CSSProperties, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { InputsContainer } from '../internal/components/inputsContainer';
import { generateId } from '../internal/utils/generateId';

type Sizes = 'small' | 'large';

export type TextAreaProps = {
  idQa?: string;
  idQaForTextArea?: string;
  resize?: CSSProperties['resize'];
  maxLength?: number;
  rows?: number;
  cols?: number;
  name?: string;
  label?: React.ReactNode;
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
  idQaForHelperText?: string;
  withAutoHeight?: boolean;
  fullWidth?: boolean;
};

export const TextArea = React.memo(
  ({
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
    idQaForHelperText,
    withAutoHeight = false,
    fullWidth,
  }: TextAreaProps) => {
    const id = useMemo(() => generateId(), []);
    //for uncontrollable textarea (without value from props)
    const [textAreaValue, setTextAreaValue] = useState(value);
    const [textAreaElement, setTextAreaNode] = useState<HTMLTextAreaElement>(null);

    withAutoHeight && (rows = 1);

    useLayoutEffect(() => {
      if (!autoFocus || !textAreaElement) return;

      const pos = textAreaElement.value.length;

      textAreaElement.setSelectionRange(pos, pos);
    }, [autoFocus, textAreaElement]);

    useLayoutEffect(() => {
      if (!withAutoHeight) return;

      if (textAreaElement) {
        textAreaElement.style.height = '0px';
        textAreaElement.style.height = `${textAreaElement.scrollHeight}px`;
      }
    }, [textAreaElement, textAreaValue, withAutoHeight]);

    const isControllableState = value !== undefined;

    useEffect(() => {
      if (!withAutoHeight || !isControllableState) return;

      setTextAreaValue(value);
    }, [isControllableState, value, withAutoHeight]);

    const onValueChange = (e?: React.ChangeEvent<HTMLTextAreaElement>) => {
      !isControllableState && withAutoHeight && setTextAreaValue(e.currentTarget.value);

      onChange?.(e);
    };

    return (
      <InputsContainer {...{ id, size, label, helperText, idQa, className, error, idQaForHelperText }}>
        <div
          className={classNames('gkit-text-area-wrapper', size, {
            hover,
            focus,
            error,
            disabled,
            filled,
            'full-width': fullWidth,
          })}
        >
          <textarea
            id-qa={idQaForTextArea}
            ref={node => setTextAreaNode(node)}
            onChange={onValueChange}
            {...{
              id,
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
            className={classNames('gkit-text-area', `resize-${resize}`)}
          />
        </div>
      </InputsContainer>
    );
  }
);

TextArea.displayName = 'TextArea';
