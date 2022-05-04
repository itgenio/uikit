import './style.less';
import classNames from 'classnames';
import React, { HTMLInputTypeAttribute, useMemo } from 'react';
import { DismissCircleIcon } from '../../icons';
import { EyeIcon, EyeOffIcon } from '../../icons';
import { generateId } from '../../utils/generateId';
import { InputsContainer } from '../components/inputsContainer';

type Sizes = 'small' | 'large';

export type TextFieldProps = React.PropsWithChildren<{
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
  required?: boolean;
  idQa?: string;
  idQaForInput?: string;
  name?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  dataList?: string[];
  maxLength?: number;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onClear?: () => void;
  isPasswordHidden?: boolean;
  isFocused?: boolean;
  onShowPassword?: () => void;
}>;

export function TextField({
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
  required,
  idQa,
  idQaForInput,
  name,
  autoComplete,
  autoFocus,
  dataList,
  maxLength,
  onFocus,
  onBlur,
  onClear,
  isPasswordHidden = true,
  isFocused,
  onShowPassword,
}: TextFieldProps) {
  const id = useMemo(() => generateId(), []);

  return (
    <InputsContainer {...{ id, size, label, idQa, helperText, className }}>
      <div
        id-qa={idQaForInput}
        className={classNames('text-field-wrapper', size, {
          hover,
          focus: focus || isFocused || autoFocus,
          'full-width': fullWidth,
          active,
          error,
          disabled,
        })}
      >
        <input
          type={inputType === 'password' && isPasswordHidden ? 'password' : 'text'}
          className={classNames('text-field', size)}
          list={id + 'list'}
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
            name,
            autoComplete,
          }}
        />
        <div className="icons-wrapper">
          {onClear && value && (
            <button onClick={onClear}>
              <DismissCircleIcon />
            </button>
          )}
          {inputType === 'password' && (
            <button onClick={onShowPassword}>{isPasswordHidden ? <EyeIcon /> : <EyeOffIcon />}</button>
          )}
        </div>
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
}
