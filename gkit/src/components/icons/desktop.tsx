import classNames from 'classnames';
import React from 'react';
import DesktopFilled from './assets/desktop_24_filled.svg';
import Desktop from './assets/desktop_24_regular.svg';
import { SvgIconProps } from './types';

export function DesktopIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Desktop className={classNames('desktop-icon', className)} {...props} />;
}

export function DesktopFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <DesktopFilled className={classNames('desktop-filled-icon', className)} {...props} />;
}
