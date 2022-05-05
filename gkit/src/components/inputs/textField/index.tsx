import './style.less';
import classNames from 'classnames';
import React, { HTMLInputTypeAttribute, useMemo, useState } from 'react';
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
  defaultPasswordHidden?: boolean;
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
  defaultPasswordHidden = true,
}: TextFieldProps) {
  const [isPasswordHidden, setPasswordHidden] = useState(defaultPasswordHidden);
  const [isFocused, setFocused] = useState(false);

  const id = useMemo(() => generateId(), []);

  return (
    <InputsContainer className={classNames('gkit-text-field', className)} {...{ id, size, label, idQa, helperText }}>
      <div
        id-qa={idQaForInput}
        className={classNames('text-field-wrapper', size, {
          hover,
          focus: focus || isFocused,
          'full-width': fullWidth,
          active,
          error,
          disabled,
        })}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        <input
          type={
            inputType === 'password' && isPasswordHidden
              ? 'password'
              : inputType === 'password' && !isPasswordHidden
              ? 'text'
              : inputType
          }
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
            <button
              onClick={() => {
                onClear();
                setPasswordHidden(!isPasswordHidden);
              }}
            >
              <DismissCircleIcon />
            </button>
          )}
          {inputType === 'password' && (
            <button onClick={() => setPasswordHidden(!isPasswordHidden)}>
              {isPasswordHidden ? <EyeIcon /> : <EyeOffIcon />}
            </button>
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
