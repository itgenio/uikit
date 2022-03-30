import './style.less';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

export type ToggleProps = PropsWithChildren<{
  disabled?: boolean;
  hover?: boolean;
  checked?: boolean;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  idQa?: string;
}>;

export function Toggle({ children, hover, disabled, checked, idQa, onChange }: ToggleProps) {
  return (
    <label className="gkit-toggle">
      <input
        className={classNames('toggle-input', { hover, disabled, checked })}
        type="checkbox"
        disabled={disabled}
        checked={checked}
        id-qa={idQa}
        onChange={onChange}
      />
      <span className="slider round" />
      <span className={classNames('toggle-text', { disabled, checked })}>{children}</span>
    </label>
  );
}
