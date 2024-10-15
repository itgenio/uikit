import classNames from 'classnames';
import React from 'react';
import ChartIncreasing from './assets/chart_increasing_color.svg';
import { EmojiProps } from './types';

export const ChartIncreasingEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <ChartIncreasing className={classNames('chart-increasing-emoji', className)} {...props} />;
};
