import './style.less';

import classNames from 'classnames';
import React, {
  ForwardedRef,
  forwardRef,
  HTMLInputTypeAttribute,
  MouseEventHandler,
  PropsWithChildren,
  useMemo,
} from 'react';
import { InputsContainer } from '../internal/components/inputsContainer';
import { generateId } from '../internal/utils/generateId';

type Sizes = 'small' | 'large';

export type TextFieldProps = PropsWithChildren<{
  disabled?: boolean;
  hover?: boolean;
  active?: boolean;
  focus?: boolean;
  error?: boolean;
  className?: string;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  size?: Sizes;
  fullWidth?: boolean;
  label?: string;
  helperText?: React.ReactNode;
  inputType?: HTMLInputTypeAttribute;
  inputPattern?: string;
  required?: boolean;
  idQa?: string;
  idQaForInput?: string;
  idQaForHelperText?: string;
  name?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  dataList?: string[];
  maxLength?: number;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  inputRef?: ForwardedRef<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onTouchStart?: React.KeyboardEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onInputClick?: MouseEventHandler<HTMLInputElement>;
  readOnly?: boolean;
}>;

export const TextField = forwardRef(function TextField(
  {
    value,
    size = 'large',
    fullWidth,
    placeholder,
    hover,
    disabled,
    active,
    focus,
    error,
    className,
    onChange,
    label,
    helperText,
    inputType = 'text',
    inputPattern,
    required,
    idQa,
    idQaForInput,
    idQaForHelperText,
    name,
    autoComplete,
    autoFocus,
    dataList,
    maxLength,
    onFocus,
    onBlur,
    startAdornment,
    endAdornment,
    inputRef,
    onKeyDown,
    onTouchStart,
    onInputClick,
    readOnly,
  }: TextFieldProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  const id = useMemo(() => generateId(), []);

  return (
    <InputsContainer
      ref={ref}
      className={classNames('gkit-text-field', className)}
      {...{ id, size, label, idQa, required, helperText, error, idQaForHelperText }}
    >
      <div
        className={classNames('text-field-wrapper', size, {
          hover,
          focus,
          'full-width': fullWidth,
          active,
          error,
          disabled,
        })}
      >
        {startAdornment}

        <input
          id-qa={idQaForInput}
          ref={inputRef}
          type={inputType}
          className={classNames('text-field', size)}
          list={id + 'list'}
          pattern={inputPattern}
          {...{
            required,
            value,
            id,
            onChange,
            placeholder,
            autoFocus,
            onFocus,
            onBlur,
            maxLength,
            disabled,
            readOnly,
            name,
            autoComplete,
            onKeyDown,
            onTouchStart,
            onClick: e => {
              if (!onInputClick) return;

              e.stopPropagation();
              onInputClick(e);
            },
          }}
        />

        {endAdornment}
      </div>

      {dataList && (
        <datalist id={id + 'list'}>
          {dataList.map(value => (
            <option key={value} value={value} />
          ))}
        </datalist>
      )}
    </InputsContainer>
  );
});
