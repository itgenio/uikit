import classNames from 'classnames';
import React from 'react';
import HandRightFilled from './assets/hand_right_24_filled.svg';
import HandRight from './assets/hand_right_24_regular.svg';
import { SvgIconProps } from './types';

export function HandRightIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <HandRight className={classNames('hand-right-icon', className)} {...props} />;
}

export function HandRightFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <HandRightFilled className={classNames('hand-right-filled-icon', className)} {...props} />;
}
