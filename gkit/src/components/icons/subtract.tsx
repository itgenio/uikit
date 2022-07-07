import React from 'react';
import Subtract from './assets/subtract_24_filled.svg';
import { SvgIconProps } from './types';

export function SubtractIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Subtract className={className} {...props} />;
}
