import classNames from 'classnames';
import React from 'react';
import DismissCircleFilled from './assets/dismiss_circle_24_filled.svg';
import DismissCircle from './assets/dismiss_circle_24_regular.svg';
import { SvgIconProps } from './types';

export function DismissCircleIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <DismissCircle className={classNames('dismiss-circle-icon', className)} {...props} />;
}

export function DismissCircleFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <DismissCircleFilled className={classNames('dismiss-circle-filled-icon', className)} {...props} />;
}
