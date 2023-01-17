import classNames from 'classnames';
import React from 'react';
import ThumbsDownColor from './assets/thumbs_down_color_default.svg';
import { EmojiProps } from './types';

export const ThumbsDownEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <ThumbsDownColor className={classNames('heart-red-color-emoji', className)} {...props} />;
};
