import classNames from 'classnames';
import React from 'react';
import CheckmarkFilled from './assets/checkmark_24_filled.svg';
import Checkmark from './assets/checkmark_24_regular.svg';
import { SvgIconProps } from './svgIcon';

export function CheckmarkIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Checkmark className={classNames('checkmark-icon', className)} {...props} />;
}

export function CheckmarkFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <CheckmarkFilled className={classNames('checkmark-filled-icon', className)} {...props} />;
}
