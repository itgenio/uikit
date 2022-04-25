import './style.less';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { CheckMarkIcon } from '../icons';

type DropdownContainerPickProps = Pick<
  DropdownMenuPrimitive.DropdownMenuProps,
  'dir' | 'open' | 'onOpenChange' | 'defaultOpen' | 'modal'
>;

type DropdownContainerProps = PropsWithChildren<{ idQa?: string } & DropdownContainerPickProps>;

export const DropdownContainer = ({ children, idQa, ...props }: DropdownContainerProps) => {
  return (
    <DropdownMenuPrimitive.Root id-qa={idQa} {...props}>
      {children}
    </DropdownMenuPrimitive.Root>
  );
};

type DropdownTriggerPickProps = Pick<DropdownMenuPrimitive.DropdownMenuTriggerProps, 'asChild'>;
type DropdownTriggerProps = PropsWithChildren<{ className?: string; asChild?: boolean } & DropdownTriggerPickProps>;

export const DropdownTrigger = ({ children, className, asChild }: DropdownTriggerProps) => {
  return <DropdownMenuPrimitive.Trigger {...{ className, asChild }}>{children}</DropdownMenuPrimitive.Trigger>;
};

type DropdownContentPickProps = Pick<
  DropdownMenuPrimitive.DropdownMenuContentProps,
  | 'asChild'
  | 'allowPinchZoom'
  | 'loop'
  | 'onCloseAutoFocus'
  | 'onEscapeKeyDown'
  | 'onPointerDownOutside'
  | 'onFocusOutside'
  | 'onInteractOutside'
  | 'portalled'
  | 'forceMount'
  | 'collisionTolerance'
  | 'side'
  | 'sideOffset'
  | 'align'
  | 'alignOffset'
  | 'avoidCollisions'
>;

type DropdownContentProps = PropsWithChildren<{ className?: string } & DropdownContentPickProps>;

export const DropdownContent = ({ children, className, ...props }: DropdownContentProps) => {
  return (
    <DropdownMenuPrimitive.Content className={classNames('gkit-dropdown-content', className)} {...props}>
      {children}
    </DropdownMenuPrimitive.Content>
  );
};

type DropdownItemPickProps = Pick<
  DropdownMenuPrimitive.DropdownMenuCheckboxItemProps,
  'asChild' | 'checked' | 'onCheckedChange' | 'disabled' | 'onSelect' | 'textValue'
>;

type DropdownCheckboxItemProps = PropsWithChildren<{ className?: string } & DropdownItemPickProps>;

export const DropdownCheckboxItem = ({ children, className, ...props }: DropdownCheckboxItemProps) => {
  return (
    <div className="dropdown-container-checkbox-item">
      <DropdownMenuPrimitive.CheckboxItem className={classNames('dropdown-checkbox-item', className)} {...props}>
        {children && <span className="dropdown-text">{children}</span>}
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckMarkIcon />
        </DropdownMenuPrimitive.ItemIndicator>
      </DropdownMenuPrimitive.CheckboxItem>
    </div>
  );
};
