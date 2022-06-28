import classNames from 'classnames';
import React from 'react';
import Comment from './assets/comment_24_regular.svg';
import { SvgIconProps } from './types';

export function CommentIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Comment className={classNames('comment-icon', className)} {...props} />;
}
