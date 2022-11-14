import classNames from 'classnames';
import React from 'react';
import EditFilled from './assets/edit_24_filled.svg';
import Edit from './assets/edit_24_regular.svg';
import { SvgIconProps } from './types';

export function EditIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Edit className={classNames('edit-icon', className)} {...props} />;
}

export function EditFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <EditFilled className={classNames('edit-filled-icon', className)} {...props} />;
}
