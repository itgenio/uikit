import classNames from 'classnames';
import React from 'react';
import NoEntryColor from './assets/no_entry_color.svg';
import { EmojiProps } from './types';

export const NoEntryColorEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <NoEntryColor className={classNames('no-entry-color-emoji', className)} {...props} />;
};
