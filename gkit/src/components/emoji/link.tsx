import classNames from 'classnames';
import React from 'react';
import Link from './assets/link_color.svg';
import { EmojiProps } from './types';

export const LinkEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <Link className={classNames('link-color-emoji', className)} {...props} />;
};
