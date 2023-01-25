import classNames from 'classnames';
import React from 'react';
import HomeCheckmarkFilled from './assets/home_checkmark_24_filled.svg';
import HomeCheckmark from './assets/home_checkmark_24_regular.svg';
import { SvgIconProps } from './types';

export function HomeCheckmarkIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <HomeCheckmark className={classNames('home-checkmark-icon', className)} {...props} />;
}

export function HomeCheckmarkFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <HomeCheckmarkFilled className={classNames('home-checkmark-filled-icon', className)} {...props} />;
}
