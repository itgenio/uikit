import classNames from 'classnames';
import React from 'react';
import Memo from './assets/memo_color.svg';
import { EmojiProps } from './types';

export const MemoEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <Memo className={classNames('memo-color-emoji', className)} {...props} />;
};
