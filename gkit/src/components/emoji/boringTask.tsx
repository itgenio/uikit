import classNames from 'classnames';
import React from 'react';
import BoringTask from './assets/boring_task.svg';
import { EmojiProps } from './types';

export const BoringTaskEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <BoringTask className={classNames('boring-task-emoji', className)} {...props} />;
};
