import classNames from 'classnames';
import React from 'react';
import CalendarCancelFilled from './assets/calendar_cancel_24_filled.svg';
import CalendarCancel from './assets/calendar_cancel_24_regular.svg';
import { SvgIconProps } from './types';

export function CalendarCancelIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <CalendarCancel className={classNames('calendar-cancel-icon', className)} {...props} />;
}

export function CalendarCancelFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <CalendarCancelFilled className={classNames('calendar-cancel-filled-icon', className)} {...props} />;
}
