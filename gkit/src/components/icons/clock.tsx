import classNames from 'classnames';
import React from 'react';
import ClockFilled from './assets/clock_24_filled.svg';
import Clock from './assets/clock_24_regular.svg';
import { SvgIconProps } from './types';

export function ClockIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Clock className={classNames('clock-icon', className)} {...props} />;
}

export function ClockFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ClockFilled className={classNames('clock-filled-icon', className)} {...props} />;
}
