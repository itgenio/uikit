import classNames from 'classnames';
import React from 'react';
import PersonFilled from './assets/person_24_filled.svg';
import Person from './assets/person_24_regular.svg';
import { SvgIconProps } from './types';

export function PersonIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Person className={classNames('person-icon', className)} {...props} />;
}

export function PersonFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <PersonFilled className={classNames('person-filled-icon', className)} {...props} />;
}
