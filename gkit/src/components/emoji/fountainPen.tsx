import classNames from 'classnames';
import React from 'react';
import FountainPenColor from './assets/fountain_pen_color.svg';
import { EmojiProps } from './types';

export const FountainPenEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <FountainPenColor className={classNames('fountain-pen-color-emoji', className)} {...props} />;
};
