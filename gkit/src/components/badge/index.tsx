import './style.less';
import classNames from 'classnames';
import React from 'react';
import { CloseIcon } from '../icons/close';
import { StarIcon } from '../icons/star';

type Sizes = 'small' | 'large';
type Colors = 'neutral' | 'primary' | 'blue' | 'purple' | 'orange' | 'danger';
type Icons = 'star' | 'remove';
type Variants = 'outlined' | 'inline';

export type BadgeProps = {
  size?: Sizes;
  color?: Colors;
  icon?: Icons;
  variant?: Variants;
  label?: string;
  onDelete?: () => void;
  className?: string;
  idQa?: string;
};

export function Badge({
  size = 'large',
  color = 'neutral',
  variant = 'outlined',
  label,
  onDelete,
  className,
  idQa,
  icon,
}: BadgeProps) {
  return (
    <span id-qa={idQa} onClick={onDelete} className={classNames('gkit-badge', className, size, color, variant)}>
      {icon === 'star' && <StarIcon />}
      {label}
      {icon === 'remove' && <CloseIcon />}
    </span>
  );
}
