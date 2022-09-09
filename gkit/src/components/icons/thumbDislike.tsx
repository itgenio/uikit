import classNames from 'classnames';
import React from 'react';
import ThumbDislike from './assets/thumb_dislike_24_regular.svg';
import { SvgIconProps } from './types';

export function ThumbDislikeIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ThumbDislike className={classNames('thumb-dislike-icon', className)} {...props} />;
}
