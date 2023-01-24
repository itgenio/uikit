import classNames from 'classnames';
import React from 'react';
import AddCircleDownFilled from './assets/arrow_circle_down_24_filled.svg';
import AddCircleDown from './assets/arrow_circle_down_24_regular.svg';
import AddCircleLeftFilled from './assets/arrow_circle_left_24_filled.svg';
import AddCircleLeft from './assets/arrow_circle_left_24_regular.svg';
import AddCircleRightFilled from './assets/arrow_circle_right_24_filled.svg';
import AddCircleRight from './assets/arrow_circle_right_24_regular.svg';
import AddCircleUpFilled from './assets/arrow_circle_up_24_filled.svg';
import AddCircleUp from './assets/arrow_circle_up_24_regular.svg';
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

export function ArrowCircleUpIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <AddCircleUp className={classNames('arrow-circle-up-icon', className)} {...props} />;
}

export function ArrowCircleUpFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <AddCircleUpFilled className={classNames('arrow-circle-up-filled-icon', className)} {...props} />;
}

export function ArrowCircleDownIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <AddCircleDown className={classNames('arrow-circle-down-icon', className)} {...props} />;
}

export function ArrowCircleDownFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <AddCircleDownFilled className={classNames('arrow-circle-down-filled-icon', className)} {...props} />;
}
