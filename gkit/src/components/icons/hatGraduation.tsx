import classNames from 'classnames';
import React from 'react';
import HatGraduationFilled from './assets/hat_graduation_24_filled.svg';
import HatGraduation from './assets/hat_graduation_24_regular.svg';
import { SvgIconProps } from './types';

export function HatGraduationIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <HatGraduation className={classNames('hat-graduation-icon', className)} {...props} />;
}

export function HatGraduationFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <HatGraduationFilled className={classNames('hat-graduation-filled-icon', className)} {...props} />;
}
