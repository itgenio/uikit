import classNames from 'classnames';
import React from 'react';
import CalendarArrowRightFilled from './assets/calendar_arrow_right_24_filled.svg';
import CalendarArrowRight from './assets/calendar_arrow_right_24_regular.svg';
import { SvgIconProps } from './svgIcon';

export function CalendarArrowRightIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <CalendarArrowRight className={classNames('calendar-arrow-right-icon', className)} {...props} />;
}

export function CalendarArrowRightFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <CalendarArrowRightFilled className={classNames('calendar-arrow-right-filled-icon', className)} {...props} />;
}
