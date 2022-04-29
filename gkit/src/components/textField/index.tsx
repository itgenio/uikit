import './style.less';
import classNames from 'classnames';
import React, { HTMLInputTypeAttribute, useMemo, useState } from 'react';
import { DismissCircleIcon } from '../icons/dismissCircle';
import { EyeIcon, EyeOffIcon } from '../icons/eye';

type Props = React.PropsWithChildren<{
  disabled?: boolean;
  hover?: boolean;
  active?: boolean;
  focus?: boolean;
  error?: boolean;
  className?: string;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
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
}>;

const generateId = () => String(Date.now() * Math.random());

export function TextField({
  value,
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
}: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const id = useMemo(() => generateId(), []);

  const handleClickClearPassword = () => {
    setPassword('');
    setShowPassword(false);
  };

  return (
    <div
      id-qa={idQa}
      className={classNames('gkit-text-field', className, {
        hover,
        active,
        focus,
        'full-width': fullWidth,
        disabled,
        error,
      })}
    >
      {label && <label htmlFor={id}>{label}</label>}

      {inputType === 'password' ? (
        <div
          onChange={onChange}
          className={classNames('textField-password-wrapper', { hover, focus, active, disabled })}
        >
          <input
            id-qa={idQaForInput}
            type={showPassword ? 'text' : 'password'}
            className="textField-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            {...{
              required,
              id,
              placeholder,
              onFocus,
              onBlur,
              maxLength,
              disabled,
              autoFocus,
              name,
              autoComplete,
            }}
          />
          <div className="icon-wrapper">
            <button onClick={handleClickClearPassword}>{password && <DismissCircleIcon />}</button>
            <button onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeIcon /> : <EyeOffIcon />}
            </button>
          </div>
        </div>
      ) : (
        <input
          id-qa={idQaForInput}
          type={inputType}
          className={classNames('textField-text', { hover, active, focus })}
          list={id + 'list'}
          {...{
            value,
            required,
            id,
            placeholder,
            onFocus,
            onBlur,
            maxLength,
            disabled,
            onChange,
            autoFocus,
            name,
            autoComplete,
          }}
        />
      )}

      {helperText && (
        <span id-qa={idQaForInput ? `helper-text-${idQaForInput}` : 'helper-text'} className="helper-text">
          {helperText}
        </span>
      )}
      {dataList && (
        <datalist id={id + 'list'}>
          {dataList.map(value => (
            <option key={value} value={value} />
          ))}
        </datalist>
      )}
    </div>
  );
}

export function TextFieldEyeIcon() {
  return <EyeIcon />;
}

export function TextFieldEyeOffIcon() {
  return <EyeOffIcon />;
}
