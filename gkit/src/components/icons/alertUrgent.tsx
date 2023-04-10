import classNames from 'classnames';
import React from 'react';
import AlertUrgentFilled from './assets/alert_urgent_24_filled.svg';
import AlertUrgent from './assets/alert_urgent_24_regular.svg';
import { SvgIconProps } from './types';

export function AlertUrgentIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <AlertUrgent className={classNames('alert-urgent-icon', className)} {...props} />;
}

export function AlertUrgentFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <AlertUrgentFilled className={classNames('alert-urgent-filled-icon', className)} {...props} />;
}
