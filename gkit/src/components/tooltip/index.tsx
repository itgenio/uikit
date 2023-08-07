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

type PortalProps = Pick<TooltipPrimitive.TooltipPortalProps, 'forceMount' | 'container'>;

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
  PortalProps &
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
  forceMount,
  container,
  side = 'bottom',
  delayDuration = 0,
  asChild,
  arrowWidth = 16,
  arrowHeight = 7,
  disableHoverableContent,
  ...props
}: TooltipProps) {
  return (
    <TooltipPrimitive.Provider {...{ delayDuration, disableHoverableContent }}>
      <TooltipPrimitive.Root {...{ defaultOpen, open, onOpenChange, delayDuration, disableHoverableContent }}>
        <TooltipPrimitive.Trigger
          className={classNames('gkit-tooltip-trigger', triggerClassName)}
          asChild={asChild}
          id-qa={triggerIdQa}
        >
          {children}
        </TooltipPrimitive.Trigger>

        <TooltipPrimitive.Portal forceMount={forceMount} container={container}>
          <TooltipPrimitive.Content
            id-qa={idQa}
            className={classNames('gkit-tooltip', className)}
            side={side}
            {...props}
          >
            {content}

            <TooltipPrimitive.Arrow className="gkit-tooltip-arrow" width={arrowWidth} height={arrowHeight} />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
