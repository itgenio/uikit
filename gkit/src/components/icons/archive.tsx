import classNames from 'classnames';
import React from 'react';
import Archive from './assets/archive_24_regular.svg';
import { SvgIconProps } from './types';

export function ArchiveIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Archive className={classNames('archive-icon', className)} {...props} />;
}
