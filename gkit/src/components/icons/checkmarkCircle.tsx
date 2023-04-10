import classNames from 'classnames';
import React from 'react';
import CheckmarkCircleFilled from './assets/checkmark_circle_24_filled.svg';
import CheckmarkCircle from './assets/checkmark_circle_24_regular.svg';
import { SvgIconProps } from './types';

export function CheckmarkCircleIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <CheckmarkCircle className={classNames('checkmark-circle-icon', className)} {...props} />;
}

export function CheckmarkCircleFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <CheckmarkCircleFilled className={classNames('checkmark-circle-filled-icon', className)} {...props} />;
}
