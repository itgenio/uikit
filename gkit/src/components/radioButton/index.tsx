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
  value?: string | number;
  name?: string;
}>;

export function RadioButton({
  children,
  hover,
  disabled,
  checked,
  idQa,
  onChange,
  className,
  name,
  value,
}: RadioButtonProps) {
  return (
    <label className={classNames('gkit-radio-button', className)} id-qa={idQa}>
      <input
        type="radio"
        className={classNames('radio-input', { hover })}
        id-qa={classNames({ [`${idQa}-input`]: idQa })}
        {...{ disabled, checked, onChange, name, value }}
      />

      {children && <span className="radio-button-span">{children}</span>}
    </label>
  );
}
