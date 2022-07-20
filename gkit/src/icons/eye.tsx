import classNames from 'classnames';
import React from 'react';
import Eye from './assets/eye_24_regular.svg';
import EyeOff from './assets/eye_off_24_regular.svg';
import { SvgIconProps } from './types';

export function EyeIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Eye className={classNames('eye-icon', className)} {...props} />;
}

export function EyeOffIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <EyeOff className={classNames('eye-off-icon', className)} {...props} />;
}
