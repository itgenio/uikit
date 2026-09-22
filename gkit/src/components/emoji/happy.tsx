import classNames from 'classnames';
import React from 'react';
import Happy from './assets/happy.svg';
import { EmojiProps } from './types';

export const HappyEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <Happy className={classNames('happy-emoji', className)} {...props} />;
};
