import './style.less';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import classNames from 'classnames';
import React from 'react';
import { SwitcherIcon } from '../icons/switcherIcon';

type Types = 'normal' | 'hover' | 'active';

type Props = React.PropsWithChildren<{
  children?: React.PropsWithChildren<any>;
  value?: string;
  size?: string;
  type?: Types;
  normal?: boolean;
  hover?: boolean;
  active?: boolean;
}>;

export function SwitcherContainer({ children, normal }: Props) {
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

export function SwitcherItem({ children, value, size, type, hover, active }: Props) {
  return (
    <ToggleGroupPrimitive.Item className={classNames('switcher-item', size, type, { hover, active })} value={value}>
      <span className="switcher-span">{children}</span>
    </ToggleGroupPrimitive.Item>
  );
}

export function SwitcherCircle() {
  return <SwitcherIcon />;
}
