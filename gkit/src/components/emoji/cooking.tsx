import classNames from 'classnames';
import React from 'react';
import Cooking from './assets/cooking_color.svg';
import { EmojiProps } from './types';

export const CookingEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <Cooking className={classNames('cooking-emoji', className)} {...props} />;
};
