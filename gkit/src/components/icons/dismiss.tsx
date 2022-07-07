import classNames from 'classnames';
import React from 'react';
import DismissFilled from './assets/dismiss_24_filled.svg';
import Dismiss from './assets/dismiss_24_regular.svg';
import { SvgIconProps } from './types';

export function DismissIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Dismiss className={classNames('dismiss-icon', className)} {...props} />;
}

export function DismissFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <DismissFilled className={classNames('dismiss-filled-icon', className)} {...props} />;
}
