import classNames from 'classnames';
import React from 'react';
import DataTrendingFilled from './assets/data_trending_24_filled.svg';
import DataTrending from './assets/data_trending_24_regular.svg';
import { SvgIconProps } from './types';

export function DataTrendingIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <DataTrending className={classNames('data-trending-icon', className)} {...props} />;
}

export function DataTrendingFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <DataTrendingFilled className={classNames('data-trending-filled-icon', className)} {...props} />;
}
