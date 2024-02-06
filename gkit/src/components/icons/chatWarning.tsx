import classNames from 'classnames';
import React from 'react';
import ChatWarningFilled from './assets/chat_warning_24_filled.svg';
import ChatWarning from './assets/chat_warning_24_regular.svg';
import { SvgIconProps } from './types';

export function ChatWarningIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ChatWarning className={classNames('chat-warning-icon', className)} {...props} />;
}

export function ChatWarningFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ChatWarningFilled className={classNames('chat-warning-filled-icon', className)} {...props} />;
}
