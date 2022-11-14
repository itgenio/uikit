import classNames from 'classnames';
import React from 'react';
import BriefcaseFilled from './assets/briefcase_24_filled.svg';
import Briefcase from './assets/briefcase_24_regular.svg';
import { SvgIconProps } from './types';

export function BriefcaseIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Briefcase className={classNames('briefcase-icon', className)} {...props} />;
}

export function BriefcaseFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <BriefcaseFilled className={classNames('briefcase-filled-icon', className)} {...props} />;
}
