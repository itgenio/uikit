import classNames from 'classnames';
import React from 'react';
import HardTask from '../assets/hard_task.svg';
import { EmojiProps } from '../types';

export const HardTaskEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <HardTask className={classNames('hard-task-emoji', className)} {...props} />;
};
