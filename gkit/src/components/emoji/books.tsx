import classNames from 'classnames';
import React from 'react';
import BooksColor from './assets/books_color.svg';
import { EmojiProps } from './types';

export const BooksColorEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <BooksColor className={classNames('books-color-emoji', className)} {...props} />;
};
