import classNames from 'classnames';
import React from 'react';
import ManRunningColor from './assets/man_running_color_default.svg';
import { EmojiProps } from './types';

export const ManRunningColorEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <ManRunningColor className={classNames('man-running-color-emoji', className)} {...props} />;
};
