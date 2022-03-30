import './style.less';
import { Cross2Icon } from '@radix-ui/react-icons';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import React, { PropsWithChildren } from 'react';

type PopoverRootProps = PropsWithChildren<{ open?: boolean }>;

export function PopoverRoot({ children, open }: PopoverRootProps) {
  return <PopoverPrimitive.Root open={open}>{children}</PopoverPrimitive.Root>;
}

export function PopoverTrigger({ children }: PropsWithChildren<{}>) {
  return <PopoverPrimitive.Trigger>{children}</PopoverPrimitive.Trigger>;
}

export function PopoverContent({ children }: PropsWithChildren<{}>) {
  return (
    <PopoverPrimitive.Content className="popover-content" sideOffset={5}>
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

type PopoverInputProps = PropsWithChildren<{ placeholder?: string }>;

export function PopoverInput({ children, placeholder }: PopoverInputProps) {
  return (
    <fieldset className="popover-fieldset">
      <label htmlFor="username" className="popover-label">
        {children}
      </label>
      <input className="popover-input" type="text" name="username" placeholder={placeholder} />
    </fieldset>
  );
}

export function PopoverButtonContainer({ children }: PropsWithChildren<{}>) {
  return <div className="popover-button-container">{children}</div>;
}

type PopoverButtonProps = PropsWithChildren<{ whiteBackground?: boolean }>;

export function PopoverButton({ children, whiteBackground }: PopoverButtonProps) {
  const style = {
    color: `${whiteBackground ? '#1F2737' : 'white'}`,
    background: `${whiteBackground ? 'white' : '#10B981'}`,
    border: `${whiteBackground ? '1px solid #E4E6EB' : ''}`,
  };
  return (
    <button style={style} className="popover-button">
      {children}
    </button>
  );
}

export const PopoverSeparator = () => {
  return <div className="popover-separator" />;
};
