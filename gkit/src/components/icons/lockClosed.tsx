import classNames from 'classnames';
import React from 'react';
import LockClosedFilled from './assets/lock_closed_24_filled.svg';
import LockClosed from './assets/lock_closed_24_regular.svg';
import { SvgIconProps } from './types';

export function LockClosedIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <LockClosed className={classNames('lock-closed-icon', className)} {...props} />;
}

export function LockClosedFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <LockClosedFilled className={classNames('lock-closed-filled-icon', className)} {...props} />;
}
