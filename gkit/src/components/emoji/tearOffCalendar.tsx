import classNames from 'classnames';
import React from 'react';
import TearOffCalendar from './assets/tear_off_calendar_flat.svg';
import { EmojiProps } from './types';

export const TearOffCalendarEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <TearOffCalendar className={classNames('tear-off-calendar-emoji', className)} {...props} />;
};
