import classNames from 'classnames';
import React from 'react';
import TimelineFilled from './assets/timeline_24_filled.svg';
import Timeline from './assets/timeline_24_regular.svg';
import { SvgIconProps } from './types';

export function TimelineIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Timeline className={classNames('timeline-icon', className)} {...props} />;
}

export function TimelineFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <TimelineFilled className={classNames('timeline-filled-icon', className)} {...props} />;
}
