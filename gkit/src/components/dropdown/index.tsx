import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { CheckIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';
import './style.less';
import React from 'react';

type Props = {
  disabled?: boolean;
  hover?: boolean;
  checked?: boolean;
  focus?: boolean;
  label?: string;
  className?: string;
  children?: React.PropsWithChildren<any>;
};

export const DropdownItemCheck = ({ children, label, hover, disabled, checked, focus }: Props) => {
  return (
    <label className={classNames('gkit-dropdown', { hover, focus, disabled })}>
      <span className="dropdown-text">{label ?? children}</span>
      <CheckboxPrimitive.Root disabled={disabled} checked={checked} className="dropdown-checkbox">
        <CheckboxPrimitive.Indicator className="dropdown-indicator">
          <CheckIcon className="icon-without-border" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    </label>
  );
};

export const DropdownItemCheckbox = ({ children, label, hover, disabled, checked, focus }: Props) => {
  return (
    <label className={classNames('gkit-dropdown', { hover, focus, disabled })}>
      <CheckboxPrimitive.Root
        disabled={disabled}
        checked={checked}
        className={classNames('dropdown-checkbox checkbox', { hover, focus, disabled, checked })}
      >
        <CheckboxPrimitive.Indicator className="dropdown-indicator">
          <CheckIcon className="icon-without-border icon" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      <span className="dropdown-text">{label ?? children}</span>
    </label>
  );
};

export const DropdownMenu = ({ children, label }: Props) => {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        <button className="dropdown-menu-button">{label}</button>
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Content className="dropdown-menu-content">{children}</DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Root>
  );
};

export const DropdownMenuChapter = ({ children }: Props) => {
  return <DropdownMenuPrimitive.Label className="dropdown-chapter">{children}</DropdownMenuPrimitive.Label>;
};

export const DropdownMenuSeparator = () => {
  return <DropdownMenuPrimitive.Separator className="dropdown-separator" />;
};
