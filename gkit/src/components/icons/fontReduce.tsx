import classNames from 'classnames';
import React from 'react';
import FontReduce from './assets/font_reduce_24_regular.svg';
import { SvgIconProps } from './types';

export function FontReduceIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <FontReduce className={classNames('font-reduce-icon', className)} {...props} />;
}
