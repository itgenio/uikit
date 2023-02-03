import classNames from 'classnames';
import React from 'react';
import FireColor from './assets/fire_color.svg';
import { EmojiProps } from './types';

export const FireEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <FireColor className={classNames('fire-color-emoji', className)} {...props} />;
};
