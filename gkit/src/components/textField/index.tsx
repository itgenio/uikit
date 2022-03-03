import './style.less';
import classNames from 'classnames';
import React, { useMemo } from 'react';

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
  inputType?: 'text' | 'password';
  required?: boolean;
  idQa?: string;
  name?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  dataList?: string[];
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
  name,
  autoComplete,
  autoFocus,
  dataList,
}: Props) {
  const id = useMemo(() => generateId(), []);

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
      <input
        type={inputType}
        className={classNames({ hover, active, focus })}
        list={id + 'list'}
        {...{ value, required, id, placeholder, disabled, onChange, autoFocus, name, autoComplete }}
      />
      {helperText && <span className="helper-text">{helperText}</span>}
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
