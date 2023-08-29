import classNames from 'classnames';
import React from 'react';
import ArrowForward from './assets/arrow_forward_24_regular.svg';
import { SvgIconProps } from './types';

export function ArrowForwardIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ArrowForward className={classNames('arrow-forward-icon', className)} {...props} />;
}
