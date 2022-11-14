import classNames from 'classnames';
import React from 'react';
import RibbonFilled from './assets/ribbon_24_filled.svg';
import Ribbon from './assets/ribbon_24_regular.svg';
import { SvgIconProps } from './types';

export function RibbonIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Ribbon className={classNames('ribbon-icon', className)} {...props} />;
}

export function RibbonFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <RibbonFilled className={classNames('ribbon-filled-icon', className)} {...props} />;
}
