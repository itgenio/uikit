import classNames from 'classnames';
import React from 'react';
import HeartSuitColor from './assets/heart_suit_color.svg';
import { EmojiProps } from './types';

export const HeartSuitEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <HeartSuitColor className={classNames('heart-suit-color-emoji', className)} {...props} />;
};
