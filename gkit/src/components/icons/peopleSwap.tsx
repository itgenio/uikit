import classNames from 'classnames';
import React from 'react';
import PeopleSwapFilled from './assets/people_swap_24_filled.svg';
import PeopleSwap from './assets/people_swap_24_regular.svg';
import { SvgIconProps } from './types';

export function PeopleSwapIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <PeopleSwap className={classNames('people-swap-icon', className)} {...props} />;
}

export function PeopleSwapFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <PeopleSwapFilled className={classNames('people-swap-filled-icon', className)} {...props} />;
}
