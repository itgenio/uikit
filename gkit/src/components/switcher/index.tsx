import './style.less';
import {
  ToggleGroupSingleProps,
  ToggleGroupMultipleProps,
  Root as ToggleRoot,
  Item as ToggleItem,
} from '@radix-ui/react-toggle-group';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { CircleIcon } from '@itgenio/icons/circleIcon';

type TogglePropsKeys = 'type' | 'value' | 'onValueChange';

type ToggleProps = Pick<ToggleGroupSingleProps, TogglePropsKeys> | Pick<ToggleGroupMultipleProps, TogglePropsKeys>;

type SwitcherContainerProps = PropsWithChildren<{ className?: string; idQa?: string } & ToggleProps>;

export function SwitcherContainer({ children, className, idQa, ...toggleProps }: SwitcherContainerProps) {
  return (
    <ToggleRoot id-qa={idQa} className={classNames('gkit-switcher-container', className)} {...toggleProps}>
      {children}
    </ToggleRoot>
  );
}

type Sizes = 'medium' | 'large';

export type SwitcherItemProps = PropsWithChildren<{
  value?: string;
  size?: Sizes;
  className?: string;
  idQa?: string;
  disabled?: boolean;
}>;

export function SwitcherItem({ children, idQa, value, size = 'medium', className, disabled }: SwitcherItemProps) {
  return (
    <ToggleItem id-qa={idQa} className={classNames('switcher-item', className, size)} value={value} disabled={disabled}>
      {children && <span className="switcher-span">{children}</span>}
    </ToggleItem>
  );
}

export function SwitcherCircle() {
  return <CircleIcon />;
}
