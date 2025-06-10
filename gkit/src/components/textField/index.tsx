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

export type TextFieldProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onClick'> &
  PropsWithChildren<{
    hover?: boolean;
    active?: boolean;
    focus?: boolean;
    error?: boolean;
    size?: Sizes;
    fullWidth?: boolean;
    label?: string;
    helperText?: React.ReactNode;
    inputType?: HTMLInputTypeAttribute;
    inputPattern?: string;
    idQa?: string;
    idQaForInput?: string;
    idQaForHelperText?: string;
    dataList?: string[];
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    inputRef?: ForwardedRef<HTMLInputElement>;
    onInputClick?: MouseEventHandler<HTMLInputElement>;
  }>;

export const TextField = forwardRef(function TextField(
  {
    size = 'large',
    fullWidth,
    hover,
    disabled,
    active,
    focus,
    error,
    className,
    label,
    helperText,
    inputType = 'text',
    inputPattern,
    required,
    idQa,
    idQaForInput,
    idQaForHelperText,
    dataList,
    startAdornment,
    endAdornment,
    inputRef,
    onInputClick,
    ...inputProps
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
            ...inputProps,
            required,
            id,
            disabled,
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
