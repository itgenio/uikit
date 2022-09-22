import classNames from 'classnames';
import React from 'react';
import PersonCallFilled from './assets/person_call_24_filled.svg';
import PersonCall from './assets/person_call_24_regular.svg';
import { SvgIconProps } from './types';

export function PersonCallIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <PersonCall className={classNames('person-call-icon', className)} {...props} />;
}

export function PersonCallFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <PersonCallFilled className={classNames('person-call-filled-icon', className)} {...props} />;
}
