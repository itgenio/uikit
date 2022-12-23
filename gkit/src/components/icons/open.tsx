import classNames from 'classnames';
import React from 'react';
import Open from './assets/open_24_regular.svg';
import { SvgIconProps } from './types';

export function OpenIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Open className={classNames('open-icon', className)} {...props} />;
}
