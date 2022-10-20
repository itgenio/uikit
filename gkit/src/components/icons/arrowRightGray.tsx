import classNames from 'classnames';
import React from 'react';
import RightArrow from './/assets/arrow_right_gray.svg';
import { SvgIconProps } from './types';

export function RightArrowIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <RightArrow className={classNames('arrow-right-icon', className)} {...props} />;
}
