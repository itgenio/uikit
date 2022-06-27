import classNames from 'classnames';
import React from 'react';
import Star from './assets/star_24_regular.svg';
import { SvgIconProps } from './svgIcon';

export function StarIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Star className={classNames('star-icon', className)} {...props} />;
}
