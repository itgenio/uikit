import './style.less';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { CheckmarkIcon } from '../icons/checkmark';

type DropdownMenuProps = PropsWithChildren<{
  id?: string;
  dir?: 'ltr' | 'rtl';
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
  idQa?: string;
}>;

export const DropdownMenu = ({
  children,
  id,
  dir = 'ltr',
  open,
  onOpenChange,
  defaultOpen,
  idQa,
}: DropdownMenuProps) => {
  return (
    <DropdownMenuPrimitive.Root id-qa={idQa} {...{ id, open, dir, onOpenChange, defaultOpen }}>
      {children}
    </DropdownMenuPrimitive.Root>
  );
};

type DropdownTriggerProps = PropsWithChildren<{ asChild?: boolean }>;

export const DropdownTrigger = ({ children, asChild = false }: DropdownTriggerProps) => {
  return <DropdownMenuPrimitive.Trigger {...{ asChild }}>{children}</DropdownMenuPrimitive.Trigger>;
};

type DropdownContentProps = PropsWithChildren<{
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
  avoidCollisions?: boolean;
  className?: string;
}>;

export const DropdownContent = ({
  children,
  side = 'bottom',
  sideOffset = 0,
  align = 'center',
  alignOffset = 0,
  avoidCollisions = true,
  className,
}: DropdownContentProps) => {
  return (
    <DropdownMenuPrimitive.Content
      className={classNames('gkit-dropdown-content', className)}
      {...{ side, sideOffset, align, alignOffset, avoidCollisions }}
    >
      {children}
    </DropdownMenuPrimitive.Content>
  );
};

type DropdownItemProps = PropsWithChildren<{
  disabled?: boolean;
  checked?: boolean;
  asChild?: boolean;
  className?: string;
  onCheckedChange?: (checked: boolean) => void;
  onSelect?: (e: Event) => void;
}>;

export const DropdownCheckboxItem = ({
  children,
  disabled,
  checked,
  onCheckedChange,
  onSelect,
  asChild = false,
  className,
}: DropdownItemProps) => {
  return (
    <div className="dropdown-container-checkbox-item">
      <DropdownMenuPrimitive.CheckboxItem
        {...{ disabled, checked, onCheckedChange, onSelect, asChild, className }}
        className={classNames('dropdown-checkbox-item', className)}
      >
        {children && <span className="dropdown-text">{children}</span>}
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckmarkIcon />
        </DropdownMenuPrimitive.ItemIndicator>
      </DropdownMenuPrimitive.CheckboxItem>
    </div>
  );
};
