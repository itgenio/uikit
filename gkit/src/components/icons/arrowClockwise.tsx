import classNames from 'classnames';
import React from 'react';
import ArrowClockwiseFilled from './assets/arrow_clockwise_24_filled.svg';
import ArrowClockwise from './assets/arrow_clockwise_24_regular.svg';
import { SvgIconProps } from './types';

export function ArrowClockwiseIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ArrowClockwise className={classNames('arrow-clockwise-icon', className)} {...props} />;
}

export function ArrowClockwiseFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ArrowClockwiseFilled className={classNames('arrow-clockwise-filled-icon', className)} {...props} />;
}
