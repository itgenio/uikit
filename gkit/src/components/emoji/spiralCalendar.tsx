import classNames from 'classnames';
import React from 'react';
import SpiralCalendarFlat from './assets/spiral_calendar_flat.svg';
import { EmojiProps } from './types';

export const SpiralCalendarEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <SpiralCalendarFlat className={classNames('spiral-calendar-flat-emoji', className)} {...props} />;
};
