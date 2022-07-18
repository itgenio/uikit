import './style.less';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

type ContainerProps = Pick<
  DropdownMenuPrimitive.DropdownMenuProps,
  'dir' | 'open' | 'onOpenChange' | 'defaultOpen' | 'modal'
>;

type Sizes = 'small' | 'normal' | 'large';

type Types = 'primary' | 'secondary' | 'linkSecondary' | 'danger' | 'neutral' | 'linkNeutral';

type TriggerPickProps = Pick<DropdownMenuPrimitive.DropdownMenuTriggerProps, 'asChild'>;

type TriggerProps = TriggerPickProps &
  PropsWithChildren<{
    className?: string;
    size?: Sizes;
    type?: Types;
    asIcon?: boolean;
    hover?: boolean;
    active?: boolean;
    focus?: boolean;
  }>;

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
  PropsWithChildren<{ idQa?: string; classNameContent?: string; content: React.ReactNode }>;

export const Dropdown = ({
  children,
  className,
  classNameContent,
  idQa,
  asChild,
  size = 'normal',
  type = 'primary',
  asIcon,
  hover,
  active,
  focus,
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
  sideOffset = 5,
  align,
  alignOffset,
  avoidCollisions,
}: DropdownProps) => {
  return (
    <DropdownMenuPrimitive.Root id-qa={idQa} {...{ dir, open, onOpenChange, defaultOpen, modal }}>
      <DropdownMenuPrimitive.Trigger
        className={classNames('gkit-dropdown-trigger', className, size, type, {
          hover,
          active,
          focus,
          icon: asIcon,
        })}
        asChild={asChild}
      >
        {children}
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Content
        className={classNames('gkit-dropdown-content', classNameContent)}
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

type ItemPickProps = Pick<DropdownMenuPrimitive.MenuItemProps, 'asChild' | 'disabled' | 'onSelect' | 'textValue'>;

type ItemProps = ItemPickProps & PropsWithChildren<{ className?: string }>;

export const DropdownItem = ({ children, className, ...props }: ItemProps) => {
  return (
    <DropdownMenuPrimitive.Item className={classNames('dropdown-item', className)} {...props}>
      {children}
    </DropdownMenuPrimitive.Item>
  );
};

type CheckboxItemPickProps = Pick<
  DropdownMenuPrimitive.DropdownMenuCheckboxItemProps,
  'asChild' | 'checked' | 'onCheckedChange' | 'disabled' | 'onSelect' | 'textValue'
>;

type CheckboxItemProps = CheckboxItemPickProps & PropsWithChildren<{ className?: string }>;

export const DropdownCheckboxItem = ({ children, className, ...props }: CheckboxItemProps) => {
  return (
    <DropdownMenuPrimitive.CheckboxItem className={classNames('dropdown-item', className)} {...props}>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
};

type RadioGroupPickProps = Pick<DropdownMenuPrimitive.MenuRadioGroupProps, 'asChild' | 'value' | 'onValueChange'>;

type RadioGroupProps = RadioGroupPickProps & PropsWithChildren<{ className?: string }>;

export const DropdownRadioGroup = ({ children, className, ...props }: RadioGroupProps) => {
  return (
    <DropdownMenuPrimitive.RadioGroup className={classNames(className)} {...props}>
      {children}
    </DropdownMenuPrimitive.RadioGroup>
  );
};

type RadioItemPickProps = Pick<
  DropdownMenuPrimitive.MenuRadioItemProps,
  'asChild' | 'value' | 'disabled' | 'onSelect' | 'textValue'
>;

type RadioItemProps = RadioItemPickProps & PropsWithChildren<{ className?: string }>;

export const DropdownRadioItem = ({ children, className, ...props }: RadioItemProps) => {
  return (
    <DropdownMenuPrimitive.RadioItem className={classNames('dropdown-item', className)} {...props}>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
};

type ItemIndicatorPickProps = Pick<DropdownMenuPrimitive.MenuItemIndicatorProps, 'asChild' | 'forceMount'>;

type ItemIndicatorProps = ItemIndicatorPickProps & PropsWithChildren<{ className?: string }>;

export const DropdownItemIndicator = ({ children, className, ...props }: ItemIndicatorProps) => {
  return (
    <DropdownMenuPrimitive.ItemIndicator className={classNames(className)} {...props}>
      {children}
    </DropdownMenuPrimitive.ItemIndicator>
  );
};
