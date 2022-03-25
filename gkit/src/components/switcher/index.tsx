import './style.less';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import classNames from 'classnames';
import React from 'react';

type Sizes = 'medium' | 'large';
type Types = 'normal' | 'hover' | 'active';

type Props = {
  children?: React.PropsWithChildren<any>;
  value?: string;
  size?: Sizes;
  type?: Types;
  normal?: boolean;
  hover?: boolean;
  active?: boolean;
};

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

export function SwitcherIcon({ normal, hover }: Props) {
  return (
    <svg
      className={classNames('switcher-icon', { normal, hover })}
      width=""
      height=""
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1ZM0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z"
        fill=""
      />
    </svg>
  );
}
