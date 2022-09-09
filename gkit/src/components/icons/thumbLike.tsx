import classNames from 'classnames';
import React from 'react';
import ThumbLike from './assets/thumb_like_24_regular.svg';
import { SvgIconProps } from './types';

export function ThumbLikeIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ThumbLike className={classNames('thumb-like-icon', className)} {...props} />;
}
