import './style.less';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { CheckmarkFilledIcon } from '../icons/checkmark';

export type CheckboxProps = PropsWithChildren<{
  disabled?: boolean;
  hover?: boolean;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  idQa?: string;
  idQaCheckbox?: string;
  icon?: React.ReactNode;
  checkedIcon?: React.ReactNode;
}>;

export function Checkbox({
  children,
  hover,
  disabled,
  checked,
  idQa,
  idQaCheckbox,
  onChange = () => {},
  className,
  icon,
  checkedIcon = <CheckmarkFilledIcon />,
}: CheckboxProps) {
  return (
    <label className={classNames('gkit-checkbox', className)} id-qa={idQa}>
      <input type="checkbox" disabled={disabled} checked={checked} onChange={onChange} id-qa={idQaCheckbox} />

      <span className={classNames('checkbox-body', { hover })}>{checked ? checkedIcon : icon}</span>

      {children && <span className="checkbox-children">{children}</span>}
    </label>
  );
}
