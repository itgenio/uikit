import './style.less';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

export type ToggleProps = PropsWithChildren<{
  disabled?: boolean;
  hover?: boolean;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
}>;

export function Toggle({ children, hover, disabled, checked, onChange, className }: ToggleProps) {
  return (
    <label className={classNames('gkit-toggle', className)}>
      <input
        className={classNames('toggle-input', { hover, disabled, checked })}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        disabled={disabled}
      />

      <span className="slider round" />

      {children && <span className={classNames('toggle-text', { disabled, checked })}>{children}</span>}
    </label>
  );
}
