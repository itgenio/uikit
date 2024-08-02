import './style.less';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { CheckmarkFilledIcon } from '@itgenio/icons/checkmarkFilledIcon';

export type CheckboxProps = PropsWithChildren<{
  disabled?: boolean;
  hover?: boolean;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLLabelElement>;
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
  onClick,
  className,
  icon,
  checkedIcon = <CheckmarkFilledIcon />,
}: CheckboxProps) {
  return (
    <label
      className={classNames('gkit-checkbox', className)}
      id-qa={idQa}
      onClick={e => {
        if (onClick) {
          e.preventDefault();
          onClick(e);
        }
      }}
    >
      <input type="checkbox" disabled={disabled} checked={checked} onChange={onChange} id-qa={idQaCheckbox} />

      <span className={classNames('checkbox-body', { hover })}>{checked ? checkedIcon : icon}</span>

      {children && <span className="checkbox-children">{children}</span>}
    </label>
  );
}
