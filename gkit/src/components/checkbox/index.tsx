import './style.less';
import classNames from 'classnames';
import React from 'react';

type Props = React.PropsWithChildren<{
  disabled?: boolean;
  hover?: boolean;
  checked?: boolean;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  idQa?: string;
  children?: React.PropsWithChildren<any>;
}>;

export function Checkbox({ children, hover, disabled, checked, idQa, onChange }: Props) {
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
