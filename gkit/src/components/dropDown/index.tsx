import './style.less';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { CheckMarkIcon } from '../icons';

type ContainerProps = Pick<
  DropdownMenuPrimitive.DropdownMenuProps,
  'dir' | 'open' | 'onOpenChange' | 'defaultOpen' | 'modal'
>;

type TriggerProps = Pick<DropdownMenuPrimitive.DropdownMenuTriggerProps, 'asChild'>;

type ContentProps = Pick<
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

type DropdownProps = ContainerProps &
  TriggerProps &
  ContentProps &
  PropsWithChildren<{ idQa?: string; className?: string; content: React.ReactNode }>;

export const Dropdown = ({
  children,
  className,
  idQa,
  asChild,
  content,
  dir,
  open,
  onOpenChange,
  defaultOpen,
  modal,
  allowPinchZoom,
  loop,
  onCloseAutoFocus,
  onEscapeKeyDown,
  onPointerDownOutside,
  onFocusOutside,
  onInteractOutside,
  portalled,
  forceMount,
  collisionTolerance,
  side,
  sideOffset,
  align,
  alignOffset,
  avoidCollisions,
}: DropdownProps) => {
  return (
    <DropdownMenuPrimitive.Root id-qa={idQa} {...{ dir, open, onOpenChange, defaultOpen, modal }}>
      <DropdownMenuPrimitive.Trigger {...{ className, asChild }}>{children}</DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Content
        className={classNames('gkit-dropdown-content', className)}
        {...{
          allowPinchZoom,
          loop,
          onCloseAutoFocus,
          onEscapeKeyDown,
          onPointerDownOutside,
          onFocusOutside,
          onInteractOutside,
          portalled,
          forceMount,
          collisionTolerance,
          side,
          sideOffset,
          align,
          alignOffset,
          avoidCollisions,
        }}
      >
        {content}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Root>
  );
};

type ItemPickProps = Pick<
  DropdownMenuPrimitive.DropdownMenuCheckboxItemProps,
  'asChild' | 'checked' | 'onCheckedChange' | 'disabled' | 'onSelect' | 'textValue'
>;

type ItemProps = ItemPickProps & PropsWithChildren<{ className?: string }>;

export const DropdownItem = ({ children, className, ...props }: ItemProps) => {
  return (
    <div className="dropdown-container-checkbox-item">
      <DropdownMenuPrimitive.CheckboxItem className={classNames('dropdown-checkbox-item', className)} {...props}>
        {children}
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckMarkIcon />
        </DropdownMenuPrimitive.ItemIndicator>
      </DropdownMenuPrimitive.CheckboxItem>
    </div>
  );
};
