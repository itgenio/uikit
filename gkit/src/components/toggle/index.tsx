import './style.less';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

export type ToggleProps = PropsWithChildren<{
  disabled?: boolean;
  hover?: boolean;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  idQa?: string;
  name?: string;
}>;

export function Toggle({ children, hover, disabled, checked, idQa, onChange, className, name }: ToggleProps) {
  return (
    <label className={classNames('gkit-toggle', className)} id-qa={idQa}>
      <input
        className={classNames('toggle-input', { hover, disabled, checked })}
        type="checkbox"
        {...{ name, disabled, checked, onChange }}
      />

      <span className="slider round" />

      {children && <span className={classNames('toggle-text', { disabled })}>{children}</span>}
    </label>
  );
}
