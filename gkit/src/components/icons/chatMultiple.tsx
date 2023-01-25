import classNames from 'classnames';
import React from 'react';
import ChatMultipleFilled from './assets/chat_multiple_24_filled.svg';
import ChatMultiple from './assets/chat_multiple_24_regular.svg';
import { SvgIconProps } from './types';

export function ChatMultipleIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ChatMultiple className={classNames('chat-multiple-icon', className)} {...props} />;
}

export function ChatMultipleFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ChatMultipleFilled className={classNames('chat-multiple-filled-icon', className)} {...props} />;
}
