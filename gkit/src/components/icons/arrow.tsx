import classNames from 'classnames';
import React from 'react';
import { SvgIcon, SvgIconProps } from './svgIcon';

export function ArrowIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('arrow-icon', className)} viewBox="0 0 26 26" {...props}>
      <path
        d="M7.3415 0.576191C7.71852 0.246293 8.28148 0.246294 8.6585 0.576191L16 7H0L7.3415 0.576191Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
