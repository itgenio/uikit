import classNames from 'classnames';
import React from 'react';
import BookOpenFilled from './assets/book_open_24_filled.svg';
import BookOpen from './assets/book_open_24_regular.svg';
import { SvgIconProps } from './types';

export function BookOpenIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <BookOpen className={classNames('book-open-icon', className)} {...props} />;
}

export function BookOpenFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <BookOpenFilled className={classNames('book-open-filled-icon', className)} {...props} />;
}
