import classNames from 'classnames';
import React from 'react';
import { SvgIconProps } from '@itgenio/icons/types';
import GoogleCalendar from './assets/google_calendar_color.svg';

export function GoogleCalendarEmoji({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <GoogleCalendar className={classNames('google-calendar-emoji', className)} {...props} />;
}
