import classNames from 'classnames';
import React from 'react';
import SparklesColor from './assets/sparkles_color.svg';
import { EmojiProps } from './types';

export const SparklesColorEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <SparklesColor className={classNames('sparkles-color-emoji', className)} {...props} />;
};
