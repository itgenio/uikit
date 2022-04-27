import './style.less';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { CloseIcon } from '../icons/close';

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

type ArrowProps = Pick<PopoverPrimitive.PopoverArrowProps, 'width' | 'height' | 'offset'>;

export type PopoverProps = RootProps &
  TriggerProps &
  ContentProps &
  ArrowProps &
  PropsWithChildren<{
    idQa?: string;
    className?: string;
    content: React.ReactNode;
    widthArrow?: number;
    heightArrow?: number;
    offsetArrow?: number;
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
  widthArrow = 16,
  heightArrow = 7,
  offsetArrow = 24,
}: PopoverProps) {
  return (
    <PopoverPrimitive.Root {...{ defaultOpen, open, onOpenChange, modal }}>
      <PopoverPrimitive.Trigger asChild={asChild}>{children}</PopoverPrimitive.Trigger>
      {content && (
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
            width={widthArrow}
            height={heightArrow}
            offset={offsetArrow}
          />
          <PopoverPrimitive.Close className="popover-close">
            <CloseIcon />
          </PopoverPrimitive.Close>
        </PopoverPrimitive.Content>
      )}
    </PopoverPrimitive.Root>
  );
}
