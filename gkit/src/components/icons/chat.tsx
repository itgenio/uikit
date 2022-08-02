import classNames from 'classnames';
import React from 'react';
import ChatFilled from './assets/chat_24_filled.svg';
import Chat from './assets/chat_24_regular.svg';
import { SvgIconProps } from './types';

export function ChatIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Chat className={classNames('chat-icon', className)} {...props} />;
}

export function ChatFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ChatFilled className={classNames('chat-filled-icon', className)} {...props} />;
}
