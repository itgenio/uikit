import classNames from 'classnames';
import React from 'react';
import ArrowSwapFilled from './assets/arrow_swap_24_filled.svg';
import ArrowSwap from './assets/arrow_swap_24_regular.svg';
import { SvgIconProps } from './types';

export function ArrowSwapIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ArrowSwap className={classNames('arrow-swap-icon', className)} {...props} />;
}

export function ArrowSwapFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ArrowSwapFilled className={classNames('arrow-swap-filled-icon', className)} {...props} />;
}
