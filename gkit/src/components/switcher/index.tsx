import './style.less';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { SwitcherIcon } from '../icons/switcherIcon';

export type SwitcherProps = SwitcherContainerProps & { hover?: boolean; active?: boolean };

type SwitcherContainerProps = PropsWithChildren<{ normal?: boolean }>;

export function SwitcherContainer({ children, normal }: SwitcherContainerProps) {
  return (
    <ToggleGroupPrimitive.Root
      className={classNames('switcher-container', { normal })}
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
};

export function SwitcherItem({ children, value, size, type, hover, active }: SwitcherItemProps) {
  return (
    <ToggleGroupPrimitive.Item className={classNames('switcher-item', size, type, { hover, active })} value={value}>
      <span className="switcher-span">{children}</span>
    </ToggleGroupPrimitive.Item>
  );
}

export function SwitcherCircle() {
  return <SwitcherIcon />;
}
