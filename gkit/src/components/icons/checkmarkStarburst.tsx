import classNames from 'classnames';
import React from 'react';
import CheckmarkStarburst from './assets/checkmark_starburst_24_regular.svg';
import { SvgIconProps } from './types';

export function CheckmarkStarburstIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <CheckmarkStarburst className={classNames('checkmark-starburst-icon', className)} {...props} />;
}
