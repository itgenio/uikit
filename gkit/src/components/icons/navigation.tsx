import classNames from 'classnames';
import React from 'react';
import NavigationFilled from './assets/navigation_24_filled.svg';
import Navigation from './assets/navigation_24_regular.svg';
import { SvgIconProps } from './types';

export function NavigationIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Navigation className={classNames('navigation-icon', className)} {...props} />;
}

export function NavigationFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <NavigationFilled className={classNames('navigation-filled-icon', className)} {...props} />;
}
