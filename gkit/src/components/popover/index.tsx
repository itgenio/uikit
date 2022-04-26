import './style.less';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { CloseIcon } from '../icons/close';

type PopoverPickProps = Pick<PopoverPrimitive.PopoverProps, 'defaultOpen' | 'open' | 'onOpenChange' | 'modal'> &
  Pick<PopoverPrimitive.PopoverTriggerProps, 'asChild'> &
  Pick<
    PopoverPrimitive.PopoverContentProps,
    | 'allowPinchZoom'
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
  > &
  Pick<PopoverPrimitive.PopoverArrowProps, 'width' | 'height' | 'offset'>;

export type PopoverProps = PropsWithChildren<
  { idQa?: string; className?: string; content: React.ReactNode } & PopoverPickProps
>;

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
  allowPinchZoom,
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
  width = 16,
  height = 7,
  offset = 24,
}: PopoverProps) {
  return (
    <PopoverPrimitive.Root id-qa={idQa} {...{ defaultOpen, open, onOpenChange, modal }}>
      <PopoverPrimitive.Trigger asChild={asChild}>{children}</PopoverPrimitive.Trigger>
      {content && (
        <PopoverPrimitive.Content
          className={classNames('gkit-popover-content', className)}
          {...{
            allowPinchZoom,
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
          <PopoverPrimitive.Arrow className="popover-arrow" {...{ width, height, offset }} />
          <PopoverPrimitive.Close className="popover-close">
            <CloseIcon />
          </PopoverPrimitive.Close>
        </PopoverPrimitive.Content>
      )}
    </PopoverPrimitive.Root>
  );
}
