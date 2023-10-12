import classNames from 'classnames';
import React from 'react';
import EarthHeartFilled from './assets/earth_heart_24_filled.svg';
import EarthHeart from './assets/arrow_clockwise_24_regular.svg';
import { SvgIconProps } from './types';

export function EarthHeartIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <EarthHeart className={classNames('earth-heart-icon', className)} {...props} />;
}

export function EarthHeartFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <EarthHeartFilled className={classNames('earth-heart-filled-icon', className)} {...props} />;
}
