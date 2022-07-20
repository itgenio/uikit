import classNames from 'classnames';
import React from 'react';
import AddCircleFilled from './assets/add_circle_24_filled.svg';
import AddCircle from './assets/add_circle_24_regular.svg';
import { SvgIconProps } from './types';

export function AddCircleIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <AddCircle className={classNames('add-circle-icon', className)} {...props} />;
}

export function AddCircleFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <AddCircleFilled className={classNames('add-circle-filled-icon', className)} {...props} />;
}
