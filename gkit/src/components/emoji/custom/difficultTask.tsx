import classNames from 'classnames';
import React from 'react';
import DifficultTask from '../assets/difficult_task.svg';
import { EmojiProps } from '../types';

export const DifficultTaskEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <DifficultTask className={classNames('difficult-task-emoji', className)} {...props} />;
};
