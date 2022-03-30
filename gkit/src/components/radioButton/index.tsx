import './style.less';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

export type RadioButtonProps = PropsWithChildren<{
  disabled?: boolean;
  hover?: boolean;
  checked?: boolean;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  idQa?: string;
}>;

export function RadioButton({ children, hover, disabled, checked, idQa, onChange }: RadioButtonProps) {
  return (
    <label className={classNames('gkit-radio-button')}>
      <input
        type="radio"
        className={classNames('radio-input', { hover })}
        id-qa={idQa}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <span>{children}</span>
    </label>
  );
}
