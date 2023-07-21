import './style.less';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { DismissIcon } from '../icons';

type RootProps = Pick<PopoverPrimitive.PopoverProps, 'defaultOpen' | 'open' | 'onOpenChange' | 'modal'>;

type TriggerProps = Pick<PopoverPrimitive.PopoverTriggerProps, 'asChild'>;

type PortalProps = Pick<PopoverPrimitive.PopoverPortalProps, 'forceMount' | 'container'>;

type ContentProps = Pick<
  PopoverPrimitive.PopoverContentProps,
  | 'onOpenAutoFocus'
  | 'onCloseAutoFocus'
  | 'onEscapeKeyDown'
  | 'onPointerDownOutside'
  | 'onFocusOutside'
  | 'onInteractOutside'
  | 'forceMount'
  | 'side'
  | 'sideOffset'
  | 'align'
  | 'alignOffset'
  | 'avoidCollisions'
  | 'collisionBoundary'
  | 'collisionPadding'
  | 'arrowPadding'
  | 'sticky'
  | 'hideWhenDetached'
>;

type ArrowProps = {
  arrowWidth?: PopoverPrimitive.PopoverArrowProps['width'];
  arrowHeight?: PopoverPrimitive.PopoverArrowProps['height'];
};

export type PopoverProps = RootProps &
  TriggerProps &
  PortalProps &
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
      <PopoverPrimitive.Portal>
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
