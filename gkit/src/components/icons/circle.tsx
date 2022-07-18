import classNames from 'classnames';
import React from 'react';
import Circle from './assets/circle_24_regular.svg';
import { SvgIconProps } from './types';

export function CircleIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Circle className={classNames('circle-icon', className)} {...props} />;
}
