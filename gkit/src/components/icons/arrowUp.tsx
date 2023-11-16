import classNames from 'classnames';
import React from 'react';
import ArrowUpFilled from './assets/arrow_up_24_filled.svg';
import ArrowUp from './assets/arrow_up_24_regular.svg';
import { SvgIconProps } from './types';

export function ArrowUpIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ArrowUp className={classNames('arrow-up-icon', className)} {...props} />;
}

export function ArrowUpFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ArrowUpFilled className={classNames('arrow-up-filled-icon', className)} {...props} />;
}
