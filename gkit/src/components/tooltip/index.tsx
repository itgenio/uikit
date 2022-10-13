import './style.less';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

type RootProps = Pick<
  TooltipPrimitive.TooltipProps,
  'defaultOpen' | 'open' | 'delayDuration' | 'onOpenChange' | 'disableHoverableContent'
>;

type TriggerProps = { triggerClassName?: string; triggerIdQa?: string } & Pick<
  TooltipPrimitive.TooltipTriggerProps,
  'asChild'
>;

type ContentProps = Pick<
  TooltipPrimitive.TooltipContentProps,
  | 'onEscapeKeyDown'
  | 'onPointerDownOutside'
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
  arrowWidth?: TooltipPrimitive.TooltipArrowProps['width'];
  arrowHeight?: TooltipPrimitive.TooltipArrowProps['height'];
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
  arrowWidth = 16,
  arrowHeight = 7,
  ...props
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

      <TooltipPrimitive.Content id-qa={idQa} className={classNames('gkit-tooltip', className)} {...props}>
        {content}

        <TooltipPrimitive.Arrow className="gkit-tooltip-arrow" width={arrowWidth} height={arrowHeight} />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  );
}

type ProviderProps = Pick<
  TooltipPrimitive.TooltipProviderProps,
  'delayDuration' | 'skipDelayDuration' | 'disableHoverableContent'
>;

export function TooltipProvider({
  children,
  delayDuration,
  skipDelayDuration,
  disableHoverableContent,
}: ProviderProps & PropsWithChildren<{}>) {
  return (
    <TooltipPrimitive.Provider {...{ delayDuration, skipDelayDuration, disableHoverableContent }}>
      {children}
    </TooltipPrimitive.Provider>
  );
}
