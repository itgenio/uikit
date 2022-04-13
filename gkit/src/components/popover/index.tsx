import './style.less';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { CloseIcon } from '../icons/close';

type PopoverRootProps = PropsWithChildren<{ open?: boolean; onOpenChange?: (open: boolean) => void }>;

export function PopoverRoot({ children, open, onOpenChange }: PopoverRootProps) {
  return (
    <PopoverPrimitive.Root onOpenChange={onOpenChange} open={open}>
      {children}
    </PopoverPrimitive.Root>
  );
}

type PopoverProps = PropsWithChildren<{ className?: string }>;

export function PopoverTrigger({ children, className }: PopoverProps) {
  return <PopoverPrimitive.Trigger className={classNames(className)}>{children}</PopoverPrimitive.Trigger>;
}

export function PopoverContent({ children, className }: PopoverProps) {
  return (
    <PopoverPrimitive.Content className={classNames('gkit-popover-content', className)} sideOffset={5}>
      {children}
      <PopoverPrimitive.Arrow className="popover-arrow" />
      <PopoverPrimitive.Close className="popover-close">
        <CloseIcon />
      </PopoverPrimitive.Close>
    </PopoverPrimitive.Content>
  );
}
