import './style.less';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

export type CheckboxProps = PropsWithChildren<{
  disabled?: boolean;
  type?: 'check' | 'minus';
  hover?: boolean;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  idQa?: string;
}>;

export function Checkbox({
  children,
  type = 'check',
  hover,
  disabled,
  checked,
  idQa,
  onChange = () => {},
  className,
}: CheckboxProps) {
  return (
    <label className={classNames('gkit-checkbox', className)} id-qa={idQa}>
      <input
        type="checkbox"
        className={classNames(type, { hover })}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />

      {children && <span className="checkbox-span">{children}</span>}
    </label>
  );
}
