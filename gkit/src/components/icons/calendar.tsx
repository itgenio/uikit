import classNames from 'classnames';
import React from 'react';
import CalendarFilled from './assets/calendar_ltr_24_filled.svg';
import Calendar from './assets/calendar_ltr_24_regular.svg';
import { SvgIconProps } from './types';

export function CalendarIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Calendar className={classNames('calendar-icon', className)} {...props} />;
}

export function CalendarFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <CalendarFilled className={classNames('calendar-filled-icon', className)} {...props} />;
}
