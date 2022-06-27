import classNames from 'classnames';
import React from 'react';
import MoreVertical from './assets/more_vertical_24_regular.svg';
import { SvgIconProps } from './svgIcon';

export function MoreVerticalIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <MoreVertical className={classNames('more-vertical-icon', className)} {...props} />;
}
