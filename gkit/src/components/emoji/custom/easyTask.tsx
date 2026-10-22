import classNames from 'classnames';
import React from 'react';
import EasyTask from '../assets/easy_task.svg';
import { EmojiProps } from '../types';

export const EasyTaskEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <EasyTask className={classNames('easy-task-emoji', className)} {...props} />;
};
