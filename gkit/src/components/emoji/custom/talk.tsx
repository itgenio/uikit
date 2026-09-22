import classNames from 'classnames';
import React from 'react';
import Talk from '../assets/talk.svg';
import { EmojiProps } from '../types';

export const TalkEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <Talk className={classNames('talk-emoji', className)} {...props} />;
};
