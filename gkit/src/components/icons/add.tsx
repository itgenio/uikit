import classNames from 'classnames';
import React from 'react';
import AddFilled from './assets/add_24_filled.svg';
import Add from './assets/add_24_regular.svg';
import { SvgIconProps } from './types';

export function AddIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Add className={classNames('add-icon', className)} {...props} />;
}

export function AddFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <AddFilled className={classNames('add-filled-icon', className)} {...props} />;
}
