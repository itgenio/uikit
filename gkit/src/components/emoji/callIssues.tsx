import classNames from 'classnames';
import React from 'react';
import CallIssues from './assets/call_issues.svg';
import { EmojiProps } from './types';

export const CallIssuesEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <CallIssues className={classNames('call-issues-emoji', className)} {...props} />;
};
