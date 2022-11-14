import classNames from 'classnames';
import React from 'react';
import ChevronDownFilled from './assets/chevron_down_24_filled.svg';
import ChevronDown from './assets/chevron_down_24_regular.svg';
import ChevronLeftFilled from './assets/chevron_left_24_filled.svg';
import ChevronLeft from './assets/chevron_left_24_regular.svg';
import ChevronRightFilled from './assets/chevron_right_24_filled.svg';
import ChevronRight from './assets/chevron_right_24_regular.svg';
import ChevronUpFilled from './assets/chevron_up_24_filled.svg';
import ChevronUp from './assets/chevron_up_24_regular.svg';
import { SvgIconProps } from './types';

export function ChevronDownIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ChevronDown className={classNames('chevron-down-icon', className)} {...props} />;
}

export function ChevronDownFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ChevronDownFilled className={classNames('chevron-down-filled-icon', className)} {...props} />;
}

export function ChevronUpIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ChevronUp className={classNames('chevron-up-icon', className)} {...props} />;
}

export function ChevronUpFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ChevronUpFilled className={classNames('chevron-up-filled-icon', className)} {...props} />;
}

export function ChevronLeftIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ChevronLeft className={classNames('chevron-left-icon', className)} {...props} />;
}

export function ChevronLeftFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ChevronLeftFilled className={classNames('chevron-left-filled-icon', className)} {...props} />;
}

export function ChevronRightIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ChevronRight className={classNames('chevron-right-icon', className)} {...props} />;
}

export function ChevronRightFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ChevronRightFilled className={classNames('chevron-right-filled-icon', className)} {...props} />;
}
