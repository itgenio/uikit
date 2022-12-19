import classNames from 'classnames';
import React from 'react';
import AddCircleLeftFilled from './assets/arrow_circle_left_24_filled.svg';
import AddCircleLeft from './assets/arrow_circle_left_24_regular.svg';
import AddCircleRightFilled from './assets/arrow_circle_right_24_filled.svg';
import AddCircleRight from './assets/arrow_circle_right_24_regular.svg';
import { SvgIconProps } from './types';

export function ArrowCircleLeftIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <AddCircleLeft className={classNames('arrow-circle-left-icon', className)} {...props} />;
}

export function ArrowCircleLeftFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <AddCircleLeftFilled className={classNames('arrow-circle-left-filled-icon', className)} {...props} />;
}

export function ArrowCircleRightIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <AddCircleRight className={classNames('arrow-circle-right-icon', className)} {...props} />;
}

export function ArrowCircleRightFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <AddCircleRightFilled className={classNames('arrow-circle-right-filled-icon', className)} {...props} />;
}
