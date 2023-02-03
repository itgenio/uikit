import classNames from 'classnames';
import React from 'react';
import SignOutFilled from './assets/sign_out_24_filled.svg';
import SignOut from './assets/sign_out_24_regular.svg';
import { SvgIconProps } from './types';

export function SignOutIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <SignOut className={classNames('sign-out-icon', className)} {...props} />;
}

export function SignOutFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <SignOutFilled className={classNames('sign-out-filled-icon', className)} {...props} />;
}
