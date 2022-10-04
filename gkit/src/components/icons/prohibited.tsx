import classNames from 'classnames';
import React from 'react';
import ProhibitedFilled from './assets/prohibited_24_filled.svg';
import Prohibited from './assets/prohibited_24_regular.svg';
import { SvgIconProps } from './types';

export function ProhibitedIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Prohibited className={classNames('prohibited-icon', className)} {...props} />;
}

export function ProhibitedFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ProhibitedFilled className={classNames('prohibited-filled-icon', className)} {...props} />;
}
