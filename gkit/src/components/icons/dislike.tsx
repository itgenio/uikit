import classNames from 'classnames';
import React from 'react';
import Dislike from './assets/dislike_24_regular.svg';
import { SvgIconProps } from './types';

export function DislikeIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Dislike className={classNames('dislike-icon', className)} {...props} />;
}
