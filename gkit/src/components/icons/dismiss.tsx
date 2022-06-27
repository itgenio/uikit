import classNames from 'classnames';
import React from 'react';
import Dismiss from './assets/dismiss_24_regular.svg';
import { SvgIconProps } from './svgIcon';

export function DismissIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Dismiss className={classNames('dismiss-icon', className)} {...props} />;
}
