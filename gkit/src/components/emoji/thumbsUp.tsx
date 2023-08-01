import classNames from 'classnames';
import React from 'react';
import ThumbsUp from './assets/thumbs_up_color.svg';
import { EmojiProps } from './types';

export const ThumbsUpEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <ThumbsUp className={classNames('thumbs-up-emoji', className)} {...props} />;
};
