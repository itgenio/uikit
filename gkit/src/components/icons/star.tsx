import classNames from 'classnames';
import React from 'react';
import StarFilled from './assets/star_24_filled.svg';
import Star from './assets/star_24_regular.svg';
import { SvgIconProps } from './types';

export function StarIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Star className={classNames('star-icon', className)} {...props} />;
}

export function StarFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <StarFilled className={classNames('star-filled-icon', className)} {...props} />;
}
