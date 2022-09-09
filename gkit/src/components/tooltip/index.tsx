import './style.less';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

type RootProps = Pick<TooltipPrimitive.TooltipProps, 'defaultOpen' | 'open' | 'delayDuration' | 'onOpenChange'>;

type TriggerProps = { triggerClassName?: string; triggerIdQa?: string } & Pick<
  TooltipPrimitive.TooltipTriggerProps,
  'asChild'
>;

type ContentProps = Pick<
  TooltipPrimitive.TooltipContentProps,
  'side' | 'align' | 'sideOffset' | 'alignOffset' | 'avoidCollisions' | 'collisionTolerance'
>;

type ArrowProps = {
  arrowWidth?: TooltipPrimitive.TooltipArrowProps['width'];
  arrowHeight?: TooltipPrimitive.TooltipArrowProps['height'];
  arrowOffset?: TooltipPrimitive.TooltipArrowProps['offset'];
};

export type TooltipProps = RootProps &
  TriggerProps &
  ContentProps &
  ArrowProps &
  PropsWithChildren<{
    idQa?: string;
    className?: string;
    content: React.ReactNode;
  }>;

export function Tooltip({
  children,
  className,
  idQa,
  triggerClassName,
  triggerIdQa,
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
  arrowWidth = 16,
  arrowHeight = 7,
  arrowOffset = 6,
}: TooltipProps) {
  return (
    <TooltipPrimitive.Root {...{ delayDuration, defaultOpen, open, onOpenChange }}>
      <TooltipPrimitive.Trigger
        className={classNames('gkit-tooltip-trigger', triggerClassName)}
        asChild={asChild}
        id-qa={triggerIdQa}
      >
        {children}
      </TooltipPrimitive.Trigger>

      <TooltipPrimitive.Content
        id-qa={idQa}
        className={classNames('gkit-tooltip', className)}
        {...{ side, align, sideOffset, alignOffset, avoidCollisions, collisionTolerance }}
      >
        {content}

        <TooltipPrimitive.Arrow
          className="gkit-tooltip-arrow"
          width={arrowWidth}
          height={arrowHeight}
          offset={arrowOffset}
        />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  );
}
