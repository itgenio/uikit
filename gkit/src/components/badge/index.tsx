import './style.less';
import classNames from 'classnames';
import React from 'react';

type Sizes = 'small' | 'large';
type Colors = 'neutral' | 'green' | 'blue' | 'purple' | 'orange' | 'danger';
type Type = 'secondary' | 'primary';

export type BadgeProps = {
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  size?: Sizes;
  color?: Colors;
  type?: Type;
  label?: string;
  onClick?: () => void;
  className?: string;
  idQa?: string;
};

export function Badge({
  iconStart,
  iconEnd,
  size = 'large',
  color = 'neutral',
  type = 'secondary',
  label,
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
      {iconStart}
      {label}
      {iconEnd}
    </span>
  );
}
