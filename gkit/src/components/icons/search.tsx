import classNames from 'classnames';
import React from 'react';
import Search from './assets/search_24_regular.svg';
import { SvgIconProps } from './types';

export function SearchIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Search className={classNames('search-icon', className)} {...props} />;
}
