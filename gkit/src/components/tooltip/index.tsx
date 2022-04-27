import './style.less';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

type RootProps = Pick<TooltipPrimitive.TooltipProps, 'defaultOpen' | 'open' | 'delayDuration' | 'onOpenChange'>;

type TriggerProps = Pick<TooltipPrimitive.TooltipTriggerProps, 'asChild'>;

type ContentProps = Pick<
  TooltipPrimitive.TooltipContentProps,
  'side' | 'align' | 'sideOffset' | 'alignOffset' | 'avoidCollisions' | 'collisionTolerance'
>;

type ArrowProps = Pick<TooltipPrimitive.TooltipArrowProps, 'width' | 'height' | 'offset'>;

export type TooltipProps = RootProps &
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
  widthArrow = 16,
  heightArrow = 7,
  offsetArrow = 6,
}: TooltipProps) {
  return (
    <TooltipPrimitive.Root {...{ delayDuration, defaultOpen, open, onOpenChange }}>
      <TooltipPrimitive.Trigger asChild={asChild}>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Content
        id-qa={idQa}
        className={classNames('gkit-tooltip', className)}
        {...{ side, align, sideOffset, alignOffset, avoidCollisions, collisionTolerance }}
      >
        {content}
        <TooltipPrimitive.Arrow
          className="tooltip-arrow"
          width={widthArrow}
          height={heightArrow}
          offset={offsetArrow}
        />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  );
}
