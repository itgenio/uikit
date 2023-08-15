import classNames from 'classnames';
import React from 'react';
import Backpack from './assets/backpack.svg';
import { EmojiProps } from './types';

export const BackpackEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <Backpack className={classNames('backpack-emoji', className)} {...props} />;
};
