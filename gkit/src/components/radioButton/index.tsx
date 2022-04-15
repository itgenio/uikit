import './style.less';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

export type RadioButtonProps = PropsWithChildren<{
  disabled?: boolean;
  hover?: boolean;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  idQa?: string;
}>;

export function RadioButton({ children, hover, disabled, checked, idQa, onChange, className }: RadioButtonProps) {
  return (
    <label className={classNames('gkit-radio-button', className)}>
      <input
        type="radio"
        className={classNames('radio-inputs', { hover })}
        id-qa={idQa}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      {children && <span className="radio-button-span">{children}</span>}
    </label>
  );
}
