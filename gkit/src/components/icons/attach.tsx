import classNames from 'classnames';
import React from 'react';
import AttachFilled from './assets/attach_24_filled.svg';
import Attach from './assets/attach_24_regular.svg';
import { SvgIconProps } from './types';

export function AttachIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Attach className={classNames('attach-icon', className)} {...props} />;
}

export function AttachFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <AttachFilled className={classNames('attach-filled-icon', className)} {...props} />;
}
