import './style.less';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { CircleIcon } from '../icons/circle';

type Types = 'single' | 'multiple';

type SwitcherContainerProps = PropsWithChildren<{
  className?: string;
  defaultValue?: string;
  type?: Types;
}>;

export function SwitcherContainer({ children, className, defaultValue, type = 'single' }: SwitcherContainerProps) {
  return (
    <ToggleGroupPrimitive.Root className={classNames('gkit-switcher-container', className)} {...{ defaultValue, type }}>
      {children}
    </ToggleGroupPrimitive.Root>
  );
}

type Sizes = 'medium' | 'large';

export type SwitcherItemProps = PropsWithChildren<{
  value?: string;
  size?: Sizes;
  hover?: boolean;
  active?: boolean;
  className?: string;
}>;

export function SwitcherItem({ children, value, size, hover, active, className }: SwitcherItemProps) {
  return (
    <ToggleGroupPrimitive.Item
      className={classNames('switcher-item', className, size, { hover, active })}
      value={value}
    >
      {children && <span className="switcher-span">{children}</span>}
    </ToggleGroupPrimitive.Item>
  );
}

type SwitcherCircleProps = { className?: string };

export function SwitcherCircle({ className }: SwitcherCircleProps) {
  return <CircleIcon className={classNames(className)} />;
}
