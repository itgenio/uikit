import classNames from 'classnames';
import React from 'react';
import DizzyColor from './assets/dizzy_color.svg';
import { EmojiProps } from './types';

export const DizzyEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <DizzyColor className={classNames('dizzy-emoji', className)} {...props} />;
};
