import classNames from 'classnames';
import React from 'react';
import HeartRedColor from './assets/red_heart_color.svg';
import { EmojiProps } from './types';

export const HeartRedEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <HeartRedColor className={classNames('heart-red-color-emoji', className)} {...props} />;
};
