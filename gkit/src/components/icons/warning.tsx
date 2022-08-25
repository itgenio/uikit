import classNames from 'classnames';
import React from 'react';
import WarningFilled from './assets/warning_24_filled.svg';
import Warning from './assets/warning_24_regular.svg';
import { SvgIconProps } from './types';

export function WarningIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Warning className={classNames('warning-icon', className)} {...props} />;
}

export function WarningFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <WarningFilled className={classNames('warning-filled-icon', className)} {...props} />;
}
