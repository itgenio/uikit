import classNames from 'classnames';
import React from 'react';
import OpenBook from './assets/open_book_color.svg';
import { EmojiProps } from './types';

export const OpenBookEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <OpenBook className={classNames('open-book-color-emoji', className)} {...props} />;
};
