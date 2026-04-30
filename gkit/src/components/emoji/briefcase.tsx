import classNames from 'classnames';
import React from 'react';
import Briefcase from './assets/briefcase.svg';
import { EmojiProps } from './types';

export const BriefcaseEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <Briefcase className={classNames('briefcase-emoji', className)} {...props} />;
};
