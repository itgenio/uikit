import classNames from 'classnames';
import React from 'react';
import SubtractFilled from './assets/subtract_24_filled.svg';
import Subtract from './assets/subtract_24_regular.svg';
import { SvgIconProps } from './types';

export function SubtractIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Subtract className={classNames('subtract-icon', className)} {...props} />;
}

export function SubtractFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <SubtractFilled className={classNames('subtract-filled-icon', className)} {...props} />;
}
