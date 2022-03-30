import './style.less';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { SwitcherIcon } from '../icons/switcherIcon';

export type SwitcherProps = SwitcherContainerProps & { hover?: boolean; active?: boolean };

type SwitcherContainerProps = PropsWithChildren<{ normal?: boolean; className?: string }>;

export function SwitcherContainer({ children, normal, className }: SwitcherContainerProps) {
  return (
    <ToggleGroupPrimitive.Root
      className={classNames('gkit-switcher-container', className, { normal })}
      type="single"
      defaultValue="left"
    >
      {children}
    </ToggleGroupPrimitive.Root>
  );
}

type SwitcherItemProps = SwitcherProps & {
  value?: string;
  size?: string;
  type?: string;
  className?: string;
};

export function SwitcherItem({ children, value, size, type, hover, active, className }: SwitcherItemProps) {
  return (
    <ToggleGroupPrimitive.Item
      className={classNames('switcher-item', className, size, type, { hover, active })}
      value={value}
    >
      <span className="switcher-span">{children}</span>
    </ToggleGroupPrimitive.Item>
  );
}

export function SwitcherCircle() {
  return <SwitcherIcon />;
}
