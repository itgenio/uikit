import classNames from 'classnames';
import React from 'react';
import Like from './assets/like_24_regular.svg';
import { SvgIconProps } from './types';

export function LikeIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Like className={classNames('like-icon', className)} {...props} />;
}
