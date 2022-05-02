import './style.less';
import classNames from 'classnames';
import React, { HTMLInputTypeAttribute, useMemo, useRef, useState } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import { DismissCircleIcon } from '../../icons/dismissCircle';
import { EyeIcon, EyeOffIcon } from '../../icons/eye';
import { generateId } from '../../utils/generateId';
import { InputsContainer } from '../components/inputsContainer';

type Sizes = 'small' | 'large';

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
}: Props) {
  const [showPassword, setShowPassword] = useState(false);
  const [focusWrapper, setFocusWrapper] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => setFocusWrapper(false));

  const id = useMemo(() => generateId(), []);

  return (
    <InputsContainer {...{ id, size, label, idQa, helperText, className }}>
      <div
        ref={ref}
        onClick={() => setFocusWrapper(!focusWrapper)}
        className={classNames('gkit-text-field-wrapper', size, {
          hover,
          focus,
          'focus-wrapper': focusWrapper,
          'full-width': fullWidth,
          active,
          error,
          disabled,
        })}
      >
        <input
          id-qa={idQaForInput}
          type={inputType && showPassword ? 'password' : 'text'}
          className={classNames('text-field', size)}
          list={id + 'list'}
          {...{
            required,
            value,
            id,
            onChange,
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
        <div className="icons-wrapper">
          {value && (
            <button onClick={onClear}>
              <DismissCircleIcon />
            </button>
          )}
          {inputType === 'password' && (
            <button onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeIcon /> : <EyeOffIcon />}
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
