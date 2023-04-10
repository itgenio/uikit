import classNames from 'classnames';
import React from 'react';
import GuardianFilled from './assets/guardian_24_filled.svg';
import Guardian from './assets/guardian_24_regular.svg';
import { SvgIconProps } from './types';

export function GuardianIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Guardian className={classNames('guardian-icon', className)} {...props} />;
}

export function GuardianFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <GuardianFilled className={classNames('guardian-filled-icon', className)} {...props} />;
}
