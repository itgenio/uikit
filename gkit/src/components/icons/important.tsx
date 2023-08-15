import classNames from 'classnames';
import React from 'react';
import ImportantFilled from './assets/important_24_filled.svg';
import Important from './assets/important_24_regular.svg';
import { SvgIconProps } from './types';

export function ImportantIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Important className={classNames('important-icon', className)} {...props} />;
}

export function ImportantFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ImportantFilled className={classNames('important-filled-icon', className)} {...props} />;
}
