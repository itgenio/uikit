import './style.less';
import { Cross2Icon } from '@radix-ui/react-icons';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import React from 'react';

type Props = React.PropsWithChildren<{
  children?: React.PropsWithChildren<any>;
  placeholder?: string;
  open?: boolean;
  whiteBackground?: boolean;
}>;

export function PopoverRoot({ children, open }: Props) {
  return <PopoverPrimitive.Root open={open}>{children}</PopoverPrimitive.Root>;
}

export function PopoverTrigger({ children }: Props) {
  return <PopoverPrimitive.Trigger>{children}</PopoverPrimitive.Trigger>;
}

export function PopoverContent({ children }: Props) {
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

export function PopoverHeader({ children }: Props) {
  return <div className="popover-header">{children}</div>;
}

export function PopoverText({ children }: Props) {
  return <div className="popover-text">{children}</div>;
}

export function PopoverInput({ children, placeholder }: Props) {
  return (
    <fieldset className="popover-fieldset">
      <label htmlFor="username" className="popover-label">
        {children}
      </label>
      <input className="popover-input" type="text" name="username" placeholder={placeholder} />
    </fieldset>
  );
}

export function PopoverButtonContainer({ children }: Props) {
  return <div className="popover-button-container">{children}</div>;
}

export function PopoverButton({ children, whiteBackground }: Props) {
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
