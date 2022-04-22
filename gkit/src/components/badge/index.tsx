import './style.less';
import classNames from 'classnames';
import React from 'react';
import { CloseIcon } from '../icons/close';

type Sizes = 'small' | 'large';
type Colors = 'neutral' | 'green' | 'blue' | 'purple' | 'orange' | 'danger';
type Type = 'secondary' | 'primary';

export type BadgeProps = {
  icon?: React.ReactElement<SVGSVGElement>;
  size?: Sizes;
  color?: Colors;
  type?: Type;
  label?: string;
  onDelete?: () => void;
  onClick?: () => void;
  className?: string;
  idQa?: string;
};

export function Badge({
  icon,
  size = 'large',
  color = 'neutral',
  type = 'secondary',
  label,
  onDelete,
  className,
  idQa,
  onClick,
}: BadgeProps) {
  return (
    <span id-qa={idQa} onClick={onClick} className={classNames('gkit-badge', className, size, color, type)}>
      {icon}
      {label}
      {onDelete && (
        <CloseIcon
          onClick={e => {
            e.stopPropagation();
            onDelete();
          }}
        />
      )}
    </span>
  );
}
