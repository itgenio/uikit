import classNames from 'classnames';
import React from 'react';
import MoreHorizontal from './assets/more_horizontal_24_regular.svg';
import { SvgIconProps } from './svgIcon';

export function MoreHorizontalIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <MoreHorizontal className={classNames('more-horizontal-icon', className)} {...props} />;
}
