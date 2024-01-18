import classNames from 'classnames';
import React from 'react';
import LinkFilled from './assets/link_24_filled.svg';
import Link from './assets/link_24_regular.svg';
import { SvgIconProps } from './types';

export function LinkIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Link className={classNames('link-icon', className)} {...props} />;
}

export function LinkFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <LinkFilled className={classNames('link-filled-icon', className)} {...props} />;
}
