import classNames from 'classnames';
import React from 'react';
import HeartFilled from './assets/heart_24_filled.svg';
import Heart from './assets/heart_24_regular.svg';
import { SvgIconProps } from './types';

export function HeartIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Heart className={classNames('heart-icon', className)} {...props} />;
}

export function HeartFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <HeartFilled className={classNames('heart-filled-icon', className)} {...props} />;
}
