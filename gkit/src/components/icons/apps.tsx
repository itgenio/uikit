import classNames from 'classnames';
import React from 'react';
import Apps from './assets/apps_24_regular.svg';
import { SvgIconProps } from './types';

export function AppsIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Apps className={classNames('apps-icon', className)} {...props} />;
}
