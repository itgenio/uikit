import classNames from 'classnames';
import React from 'react';
import ThumbsDownColor from './assets/thumbs_down_color_default.svg';
import { EmojiProps } from './types';

export const ThumbsDownEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <ThumbsDownColor className={classNames('thumbs-down-emoji', className)} {...props} />;
};
