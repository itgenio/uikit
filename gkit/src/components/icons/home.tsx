import classNames from 'classnames';
import React from 'react';
import HomeFilled from './assets/home_24_filled.svg';
import Home from './assets/home_24_regular.svg';
import { SvgIconProps } from './types';

export function HomeIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Home className={classNames('home-icon', className)} {...props} />;
}

export function HomeFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <HomeFilled className={classNames('home-filled-icon', className)} {...props} />;
}
