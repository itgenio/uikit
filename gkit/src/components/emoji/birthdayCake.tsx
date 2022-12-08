import classNames from 'classnames';
import React from 'react';
import BirthdayCakeColor from './assets/birthday_cake_color.svg';
import { EmojiProps } from './types';

export const BirthdayCakeColorEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <BirthdayCakeColor className={classNames('birthday-cake-color-emoji', className)} {...props} />;
};
