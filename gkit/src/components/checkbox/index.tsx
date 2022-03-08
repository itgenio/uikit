import './style.less';
import classNames from 'classnames';
import React from 'react';

type Props = {
  disabled?: boolean;
  hover?: boolean;
  checked?: boolean;
  className?: string;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  idQa?: string;
  label?: string;
};

export function Checkbox({ label, hover, disabled, checked, className, idQa, onChange }: Props) {
  return (
    <label className={classNames(className, 'gkit-checkbox', { hover, focus })}>
      <input
        type="checkbox"
        id-qa={idQa}
        className="filled"
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <span>{label}</span>
    </label>
  );
}
