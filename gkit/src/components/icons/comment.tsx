import classNames from 'classnames';
import React from 'react';
import CommentFilled from './assets/comment_24_filled.svg';
import Comment from './assets/comment_24_regular.svg';
import { SvgIconProps } from './types';

export function CommentIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Comment className={classNames('comment-icon', className)} {...props} />;
}

export function CommentFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <CommentFilled className={classNames('comment-filled-icon', className)} {...props} />;
}
