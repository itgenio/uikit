import classNames from 'classnames';
import React from 'react';
import InfoFilled from './assets/info_24_filled.svg';
import Info from './assets/info_24_regular.svg';
import { SvgIconProps } from './types';

export function InfoIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Info className={classNames('info-icon', className)} {...props} />;
}

export function InfoFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <InfoFilled className={classNames('info-filled-icon', className)} {...props} />;
}
