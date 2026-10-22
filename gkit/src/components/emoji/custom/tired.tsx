import classNames from 'classnames';
import React from 'react';
import Tired from '../assets/tired.svg';
import { EmojiProps } from '../types';

export const TiredEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <Tired className={classNames('tired-emoji', className)} {...props} />;
};
