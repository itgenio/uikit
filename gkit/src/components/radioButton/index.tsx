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

export function RadioButton({ label, hover, disabled, checked, className, idQa, onChange }: Props) {
  return (
    <label className={classNames(className, 'gkit-radio-button', { hover, focus })}>
      <input type="radio" id-qa={idQa} disabled={disabled} checked={checked} onChange={onChange} />
      <span>{label}</span>
    </label>
  );
}
