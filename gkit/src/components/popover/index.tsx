import './style.less';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { DismissIcon } from '@itgenio/icons/dismissIcon';

type ArrowProps = {
  arrowWidth?: PopoverPrimitive.PopoverArrowProps['width'];
  arrowHeight?: PopoverPrimitive.PopoverArrowProps['height'];
};

export type PopoverProps = PopoverPrimitive.PopoverProps &
  PopoverPrimitive.PopoverTriggerProps &
  PopoverPrimitive.PopoverPortalProps &
  PopoverPrimitive.PopoverContentProps &
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
  container,
  onOpenAutoFocus,
  onCloseAutoFocus,
  onEscapeKeyDown,
  onPointerDownOutside,
  onFocusOutside,
  onInteractOutside,
  forceMount,
  side,
  sideOffset,
  align,
  alignOffset,
  avoidCollisions,
  collisionBoundary,
  collisionPadding,
  arrowPadding,
  sticky,
  hideWhenDetached,
  arrowWidth = 16,
  arrowHeight = 7,
}: PopoverProps) {
  return (
    <PopoverPrimitive.Root {...{ defaultOpen, open, onOpenChange, modal }}>
      <PopoverPrimitive.Trigger asChild={asChild}>{children}</PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal container={container}>
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
            forceMount,
            side,
            sideOffset,
            align,
            alignOffset,
            avoidCollisions,
            collisionBoundary,
            collisionPadding,
            arrowPadding,
            sticky,
            hideWhenDetached,
          }}
        >
          {content}
          <PopoverPrimitive.Arrow className="popover-arrow" width={arrowWidth} height={arrowHeight} />
          <PopoverPrimitive.Close className="popover-close-btn">
            <DismissIcon />
          </PopoverPrimitive.Close>
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}
