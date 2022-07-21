import './style.less';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { DismissIcon } from '../icons/dismiss';

type RootProps = Pick<PopoverPrimitive.PopoverProps, 'defaultOpen' | 'open' | 'onOpenChange' | 'modal'>;

type TriggerProps = Pick<PopoverPrimitive.PopoverTriggerProps, 'asChild'>;

type ContentProps = Pick<
  PopoverPrimitive.PopoverContentProps,
  | 'onOpenAutoFocus'
  | 'onCloseAutoFocus'
  | 'onEscapeKeyDown'
  | 'onPointerDownOutside'
  | 'onFocusOutside'
  | 'onInteractOutside'
  | 'portalled'
  | 'forceMount'
  | 'side'
  | 'sideOffset'
  | 'align'
  | 'alignOffset'
  | 'avoidCollisions'
  | 'collisionTolerance'
>;

type ArrowProps = {
  arrowWidth?: PopoverPrimitive.PopoverArrowProps['width'];
  arrowHeight?: PopoverPrimitive.PopoverArrowProps['height'];
  arrowOffset?: PopoverPrimitive.PopoverArrowProps['offset'];
};

export type PopoverProps = RootProps &
  TriggerProps &
  ContentProps &
  ArrowProps &
  PropsWithChildren<{
    idQa?: string;
    className?: string;
    content: React.ReactNode;
  }>;

export function Popover({
  children,
  idQa,
  className,
  content,
  defaultOpen,
  open,
  onOpenChange,
  modal,
  asChild,
  onOpenAutoFocus,
  onCloseAutoFocus,
  onEscapeKeyDown,
  onPointerDownOutside,
  onFocusOutside,
  onInteractOutside,
  portalled,
  forceMount,
  side,
  sideOffset,
  align,
  alignOffset,
  avoidCollisions,
  collisionTolerance,
  arrowWidth = 16,
  arrowHeight = 7,
  arrowOffset = 24,
}: PopoverProps) {
  return (
    <PopoverPrimitive.Root {...{ defaultOpen, open, onOpenChange, modal }}>
      <PopoverPrimitive.Trigger asChild={asChild}>{children}</PopoverPrimitive.Trigger>
      <PopoverPrimitive.Content
        id-qa={idQa}
        className={classNames('gkit-popover-content', className)}
        {...{
          onOpenAutoFocus,
          onCloseAutoFocus,
          onEscapeKeyDown,
          onPointerDownOutside,
          onFocusOutside,
          onInteractOutside,
          portalled,
          forceMount,
          side,
          sideOffset,
          align,
          alignOffset,
          avoidCollisions,
          collisionTolerance,
        }}
      >
        {content}
        <PopoverPrimitive.Arrow
          className="popover-arrow"
          width={arrowWidth}
          height={arrowHeight}
          offset={arrowOffset}
        />
        <PopoverPrimitive.Close className="popover-close-btn">
          <DismissIcon />
        </PopoverPrimitive.Close>
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Root>
  );
}
