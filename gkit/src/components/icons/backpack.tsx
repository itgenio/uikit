import classNames from 'classnames';
import React from 'react';
import BackpackFilled from './assets/backpack_24_filled.svg';
import Backpack from './assets/backpack_24_regular.svg';
import { SvgIconProps } from './types';

export function BackpackIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Backpack className={classNames('backpack-icon', className)} {...props} />;
}

export function BackpackFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <BackpackFilled className={classNames('backpack-filled-icon', className)} {...props} />;
}
