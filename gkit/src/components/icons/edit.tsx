import classNames from 'classnames';
import React from 'react';
import Edit from './assets/edit_24_regular.svg';
import { SvgIconProps } from './types';

export function EditIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Edit className={classNames('edit-icon', className)} {...props} />;
}
