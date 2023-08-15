import classNames from 'classnames';
import React from 'react';
import Important from './assets/important_24_regular.svg';
import { SvgIconProps } from './types';

export function ImportantIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Important className={classNames('important-icon', className)} {...props} />;
}
