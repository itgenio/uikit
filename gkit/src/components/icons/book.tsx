import classNames from 'classnames';
import React from 'react';
import BookFilled from './assets/book_24_filled.svg';
import Book from './assets/book_24_regular.svg';
import { SvgIconProps } from './types';

export function BookIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Book className={classNames('book-icon', className)} {...props} />;
}

export function BookFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <BookFilled className={classNames('book-filled-icon', className)} {...props} />;
}
