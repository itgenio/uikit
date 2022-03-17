import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';
import './style.less';
import React from 'react';
import { DropdownMenuDemo } from './DropdownMenu';

type Types = 'Dropdown Menu Item';

type Props = {
  type?: Types;
  disabled?: boolean;
  hover?: boolean;
  checked?: boolean;
  focus?: boolean;
  label?: string;
  className?: string;
};

export const DropdownItem = ({ label, hover, disabled, checked, focus }: Props) => {
  return (
    <div className="container">
      <div className="wrapper">
        <label className={classNames('gkit-dropDown', { hover, focus, disabled })}>
          <span>{label}</span>
          <CheckboxPrimitive.Root disabled={disabled} checked={checked} className="checkBox1">
            <CheckboxPrimitive.Indicator className="indicator1">
              <CheckIcon />
            </CheckboxPrimitive.Indicator>
          </CheckboxPrimitive.Root>
        </label>
      </div>
      <label className={classNames('gkit-dropDown', { hover, focus, disabled })}>
        <CheckboxPrimitive.Root
          disabled={disabled}
          checked={checked}
          className={classNames('checkBox', { hover, focus, disabled, checked })}
        >
          <CheckboxPrimitive.Indicator className="indicator">
            <CheckIcon />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        <span>{label}</span>
      </label>
      <DropdownMenuDemo label="Dropdown Menu" />
    </div>
  );
};
