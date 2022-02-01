import './style.less';
import classNames from 'classnames';
import React, { useMemo } from 'react';

type Props = React.PropsWithChildren<{
  disabled?: boolean;
  hover?: boolean;
  active?: boolean;
  focus?: boolean;
  className?: string;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  fullWidth?: boolean;
  label?: string;
  helperText?: string;
  inputType?: 'text';
  required?: boolean;
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
  className,
  onChange,
  label,
  helperText,
  inputType = 'text',
  required,
}: Props) {
  const id = useMemo(() => generateId(), []);

  return (
    <div
      className={classNames('gkit-text-field', className, { hover, active, focus, 'full-width': fullWidth, disabled })}
    >
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={inputType}
        className={classNames({ hover, active, focus })}
        {...{ value, required, id, placeholder, disabled, onChange }}
      />
      {helperText && <span className="helper-text">{helperText}</span>}
    </div>
  );
}
