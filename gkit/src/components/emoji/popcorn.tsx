import classNames from 'classnames';
import React from 'react';
import Popcorn from './assets/popcorn_color.svg';
import { EmojiProps } from './types';

export const PopcornEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <Popcorn className={classNames('popcorn-color-emoji', className)} {...props} />;
};
