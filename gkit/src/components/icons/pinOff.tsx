import classNames from 'classnames';
import React from 'react';
import PinOff from './assets/pin_off_16_regular.svg';
import PinOffFilled from './assets/pin_off_24_filled.svg';
import { SvgIconProps } from './types';

export function PinOffIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <PinOff className={classNames('pin-off-icon', className)} {...props} />;
}

export function PinOffFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <PinOffFilled className={classNames('pin-off-filled-icon', className)} {...props} />;
}
