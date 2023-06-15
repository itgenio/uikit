import classNames from 'classnames';
import React from 'react';
import ListFilled from './assets/list_24_filled.svg';
import List from './assets/list_24_regular.svg';
import { SvgIconProps } from './types';

export function ListIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <List className={classNames('list-icon', className)} {...props} />;
}

export function ListFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ListFilled className={classNames('list-filled-icon', className)} {...props} />;
}
