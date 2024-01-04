import classNames from 'classnames';
import React from 'react';
import PinFilled from './assets/pin_24_filled.svg';
import Pin from './assets/pin_24_regular.svg';
import { SvgIconProps } from './types';

export function PinIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Pin className={classNames('pin-icon', className)} {...props} />;
}

export function PinFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <PinFilled className={classNames('pin-filled-icon', className)} {...props} />;
}
