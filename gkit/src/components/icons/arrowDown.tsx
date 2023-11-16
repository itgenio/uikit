import classNames from 'classnames';
import React from 'react';
import ArrowDownFilled from './assets/arrow_down_24_filled.svg';
import ArrowDown from './assets/arrow_down_24_regular.svg';
import { SvgIconProps } from './types';

export function ArrowDownIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ArrowDown className={classNames('arrow-down-icon', className)} {...props} />;
}

export function ArrowDownFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ArrowDownFilled className={classNames('arrow-down-filled-icon', className)} {...props} />;
}
