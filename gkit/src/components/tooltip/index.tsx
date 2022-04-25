import './style.less';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

type TooltipPickProps = Pick<TooltipPrimitive.TooltipProps, 'defaultOpen' | 'open' | 'delayDuration' | 'onOpenChange'> &
  Pick<TooltipPrimitive.TooltipTriggerProps, 'asChild'> &
  Pick<
    TooltipPrimitive.TooltipContentProps,
    'side' | 'align' | 'sideOffset' | 'alignOffset' | 'avoidCollisions' | 'collisionTolerance'
  > &
  Pick<TooltipPrimitive.TooltipArrowProps, 'width' | 'height' | 'offset'>;

export type TooltipProps = PropsWithChildren<
  { idQa?: string; className?: string; content: React.ReactNode } & TooltipPickProps
>;

export function Tooltip({
  children,
  idQa,
  className,
  content,
  defaultOpen,
  open,
  onOpenChange,
  delayDuration = 0,
  asChild,
  side,
  align,
  sideOffset,
  alignOffset,
  avoidCollisions,
  collisionTolerance,
  width = 16,
  height = 7,
  offset = 6,
}: TooltipProps) {
  return (
    <TooltipPrimitive.Root id-qa={idQa} {...{ delayDuration, defaultOpen, open, onOpenChange }}>
      <TooltipPrimitive.Trigger asChild={asChild}>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Content
        className={classNames('gkit-tooltip', className)}
        {...{ side, align, sideOffset, alignOffset, avoidCollisions, collisionTolerance }}
      >
        {content}
        <TooltipPrimitive.Arrow className="tooltip-arrow" {...{ width, height, offset }} />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  );
}
