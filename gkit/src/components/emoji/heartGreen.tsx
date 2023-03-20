import classNames from 'classnames';
import React from 'react';
import HeartGreenFlatEmoji from './assets/green_heart_flat.svg';
import { EmojiProps } from './types';

export const HeartGreenEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <HeartGreenFlatEmoji className={classNames('heart-green-flat-emoji', className)} {...props} />;
};
