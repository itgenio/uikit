import classNames from 'classnames';
import React from 'react';
import LowHelp from '../assets/low_help.svg';
import { EmojiProps } from '../types';

export const LowHelpEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <LowHelp className={classNames('low-help-emoji', className)} {...props} />;
};
