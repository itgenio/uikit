import './style.less';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

type TooltipContainerProps = PropsWithChildren<{
  defaultOpen?: boolean;
  open?: boolean;
  delayDuration?: number;
  onOpenChange?: (open: boolean) => void;
  idQa?: string;
}>;

export function TooltipContainer({
  children,
  defaultOpen,
  open,
  delayDuration = 0,
  onOpenChange,
  idQa,
}: TooltipContainerProps) {
  return (
    <TooltipPrimitive.Root id-qa={idQa} {...{ defaultOpen, open, delayDuration, onOpenChange }}>
      {children}
    </TooltipPrimitive.Root>
  );
}

type TooltipTriggerProps = PropsWithChildren<{ asChild?: boolean; className?: string }>;

export function TooltipTrigger({ children, asChild = false, className }: TooltipTriggerProps) {
  return (
    <TooltipPrimitive.Trigger className={classNames(className)} {...{ asChild }}>
      {children}
    </TooltipPrimitive.Trigger>
  );
}

export type TooltipContentProps = PropsWithChildren<{
  className?: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
  sideOffset?: number;
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
  avoidCollisions?: boolean;
  collisionTolerance?: number;
  offset?: number;
}>;

export function TooltipContent({
  children,
  className,
  side = 'bottom',
  sideOffset = 0,
  align = 'center',
  alignOffset = 0,
  avoidCollisions = true,
  collisionTolerance = 0,
  offset,
}: TooltipContentProps) {
  return (
    <TooltipPrimitive.Content
      className={classNames('gkit-tooltip', className)}
      {...{ side, sideOffset, align, alignOffset, avoidCollisions, collisionTolerance }}
    >
      {children}
      <ArrowIcon {...{ offset }} />
    </TooltipPrimitive.Content>
  );
}

type ArrowIconProps = {
  width?: number;
  height?: number;
  offset?: number;
};

export function ArrowIcon({ width = 16, height = 7, offset = 6 }: ArrowIconProps) {
  return <TooltipPrimitive.Arrow className="tooltip-arrow" {...{ width, height, offset }} />;
}
