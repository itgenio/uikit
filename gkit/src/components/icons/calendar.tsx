import classNames from 'classnames';
import React from 'react';
import Calendar from './assets/calendar_24_regular.svg';
import { SvgIconProps } from './types';

export function CalendarIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Calendar className={classNames('calendar-icon', className)} {...props} />;
}
