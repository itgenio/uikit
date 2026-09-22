import classNames from 'classnames';
import React from 'react';
import NothingWorks from './assets/nothing_works.svg';
import { EmojiProps } from './types';

export const NothingWorksEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <NothingWorks className={classNames('nothing-works-emoji', className)} {...props} />;
};
