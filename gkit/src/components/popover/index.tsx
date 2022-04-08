import './style.less';
import { Cross2Icon } from '@radix-ui/react-icons';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

type PopoverRootProps = PropsWithChildren<{ open?: boolean }>;

export function PopoverRoot({ children, open }: PopoverRootProps) {
  return <PopoverPrimitive.Root open={open}>{children}</PopoverPrimitive.Root>;
}

type PopoverTriggerProps = PropsWithChildren<{ className?: string }>;

export function PopoverTrigger({ children, className }: PopoverTriggerProps) {
  return (
    <PopoverPrimitive.Trigger className={classNames('popover-trigger', className)}>{children}</PopoverPrimitive.Trigger>
  );
}

export function PopoverContent({ children }: PropsWithChildren<{}>) {
  return (
    <PopoverPrimitive.Content className="gkit-popover-content" sideOffset={5}>
      {children}
      <PopoverPrimitive.Arrow className="popover-arrow" />
      <PopoverPrimitive.Close className="popover-close">
        <Cross2Icon />
      </PopoverPrimitive.Close>
    </PopoverPrimitive.Content>
  );
}

export function PopoverHeader({ children }: PropsWithChildren<{}>) {
  return <div className="popover-header">{children}</div>;
}

export function PopoverText({ children }: PropsWithChildren<{}>) {
  return <div className="popover-text">{children}</div>;
}

type PopoverButtonContainerProps = PropsWithChildren<{ className?: string }>;

export function PopoverButtonContainer({ children, className }: PopoverButtonContainerProps) {
  return <div className={classNames('popover-button-container', className)}>{children}</div>;
}

export const PopoverSeparator = () => {
  return <div className="popover-separator" />;
};
