import classNames from 'classnames';
import React from 'react';
import SportsMedal from './assets/sports_medal_color.svg';
import { EmojiProps } from './types';

export const SportsMedalColorEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <SportsMedal className={classNames('sports-medal-color-emoji', className)} {...props} />;
};
