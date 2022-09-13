import classNames from 'classnames';
import React from 'react';
import ErrorCircleFilled from './assets/error_circle_24_filled.svg';
import ErrorCircle from './assets/error_circle_24_regular.svg';
import { SvgIconProps } from './types';

export function ErrorCircleIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ErrorCircle className={classNames('error-circle-icon', className)} {...props} />;
}

export function ErrorCircleFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ErrorCircleFilled className={classNames('error-circle-filled-icon', className)} {...props} />;
}
