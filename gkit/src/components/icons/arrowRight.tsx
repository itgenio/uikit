import classNames from 'classnames';
import React from 'react';
import ArrowRight from './assets/arrow_right_24_regular.svg';
import { SvgIconProps } from './types';

export function ArrowRightIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ArrowRight className={classNames('arrow-right-icon', className)} {...props} />;
}
