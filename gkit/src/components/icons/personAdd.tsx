import classNames from 'classnames';
import React from 'react';
import PersonAddFilled from './assets/person_add_24_filled.svg';
import PersonAdd from './assets/person_add_24_regular.svg';
import { SvgIconProps } from './types';

export function PersonAddIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <PersonAdd className={classNames('person-add-icon', className)} {...props} />;
}

export function PersonAddFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <PersonAddFilled className={classNames('person-add-filled-icon', className)} {...props} />;
}
