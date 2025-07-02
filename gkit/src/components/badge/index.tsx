import './style.less';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

type Sizes = 'small' | 'large';
type Colors = 'neutral' | 'green' | 'blue' | 'purple' | 'orange' | 'danger' | 'white' | 'black';
type Type = 'secondary' | 'primary';

export type BadgeProps = PropsWithChildren<{
  size?: Sizes;
  color?: Colors;
  type?: Type;
  onClick?: () => void;
  className?: string;
  idQa?: string;
}>;

export function Badge({
  children,
  size = 'large',
  color = 'neutral',
  type = 'secondary',
  className,
  idQa,
  onClick,
}: BadgeProps) {
  return (
    <span
      id-qa={idQa}
      onClick={onClick}
      className={classNames('gkit-badge', className, size, color, type, { clickable: !!onClick })}
    >
      {children}
    </span>
  );
}
