import classNames from 'classnames';
import React from 'react';
import AlertFilled from './assets/alert_24_filled.svg';
import Alert from './assets/alert_24_regular.svg';
import { SvgIconProps } from './types';

export function AlertIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Alert className={classNames('alert-icon', className)} {...props} />;
}

export function AlertFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <AlertFilled className={classNames('alert-filled-icon', className)} {...props} />;
}
