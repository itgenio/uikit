import './style.less';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

type TooltipContainerPropsKeys = 'defaultOpen' | 'open' | 'delayDuration' | 'onOpenChange';
type TooltipContainerPickProps = Pick<TooltipPrimitive.TooltipProps, TooltipContainerPropsKeys>;

type TooltipContainerProps = PropsWithChildren<
  {
    idQa?: string;
  } & TooltipContainerPickProps
>;

export function TooltipContainer({
  children,
  idQa,
  delayDuration = 0,
  ...TooltipContainerPropsKeys
}: TooltipContainerProps) {
  return (
    <TooltipPrimitive.Root id-qa={idQa} {...{ delayDuration }} {...TooltipContainerPropsKeys}>
      {children}
    </TooltipPrimitive.Root>
  );
}

type TooltipTriggerPickProps = Pick<TooltipPrimitive.TooltipTriggerProps, 'asChild'>;
type TooltipTriggerProps = PropsWithChildren<{} & TooltipTriggerPickProps>;

export function TooltipTrigger({ children, ...TooltipTriggerPickProps }: TooltipTriggerProps) {
  return <TooltipPrimitive.Trigger {...TooltipTriggerPickProps}>{children}</TooltipPrimitive.Trigger>;
}

type TooltipContentPropsKeys =
  | 'side'
  | 'align'
  | 'sideOffset'
  | 'alignOffset'
  | 'avoidCollisions'
  | 'collisionTolerance';
type TooltipContentPickProps = Pick<TooltipPrimitive.TooltipContentProps, TooltipContentPropsKeys>;

export type TooltipContentProps = PropsWithChildren<
  {
    className?: string;
    offset?: number;
  } & TooltipContentPickProps
>;

export function TooltipContent({ children, className, offset, ...TooltipPropsKeys }: TooltipContentProps) {
  return (
    <TooltipPrimitive.Content className={classNames('gkit-tooltip', className)} {...TooltipPropsKeys}>
      {children}
      <TooltipArrow {...{ offset }} />
    </TooltipPrimitive.Content>
  );
}

type TooltipArrowPropsKeys = 'width' | 'height' | 'offset';
type TooltipArrowProps = Pick<TooltipPrimitive.TooltipArrowProps, TooltipArrowPropsKeys>;

function TooltipArrow({ width = 16, height = 7, offset = 6 }: TooltipArrowProps) {
  return <TooltipPrimitive.Arrow className="tooltip-arrow" {...{ width, height, offset }} />;
}
