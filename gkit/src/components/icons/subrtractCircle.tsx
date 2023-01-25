import classNames from 'classnames';
import React from 'react';
import SubtractCircleFilled from './assets/subtract_circle_24_filled.svg';
import SubtractCircle from './assets/subtract_circle_24_regular.svg';
import { SvgIconProps } from './types';

export function SubtractCircleIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <SubtractCircle className={classNames('subtract-circle-icon', className)} {...props} />;
}

export function SubtractCircleFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <SubtractCircleFilled className={classNames('subtract-circle-filled-icon', className)} {...props} />;
}
