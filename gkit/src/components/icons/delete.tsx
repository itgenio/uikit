import classNames from 'classnames';
import React from 'react';
import DeleteFilled from './assets/delete_24_filled.svg';
import Delete from './assets/delete_24_regular.svg';
import { SvgIconProps } from './types';

export function DeleteIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Delete className={classNames('delete-icon', className)} {...props} />;
}

export function DeleteFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <DeleteFilled className={classNames('delete-filled-icon', className)} {...props} />;
}
