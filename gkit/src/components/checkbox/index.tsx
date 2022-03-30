import './style.less';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

export type CheckboxProps = PropsWithChildren<{
  disabled?: boolean;
  hover?: boolean;
  checked?: boolean;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  idQa?: string;
}>;

export function Checkbox({ children, hover, disabled, checked, idQa, onChange }: CheckboxProps) {
  return (
    <label className="gkit-checkbox">
      <input
        type="checkbox"
        id-qa={idQa}
        className={classNames('filled', { hover })}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <span>{children}</span>
    </label>
  );
}
