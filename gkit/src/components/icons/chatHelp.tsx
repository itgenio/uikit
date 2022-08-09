import classNames from 'classnames';

import React from 'react';
import ChatHelpFilled from './assets/chat_help_24_filled.svg';
import ChatHelp from './assets/chat_help_24_regular.svg';
import { SvgIconProps } from './types';

export function ChatHelpIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ChatHelp className={classNames('chat-help-icon', className)} {...props} />;
}

export function ChatHelpFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ChatHelpFilled className={classNames('chat-help-filled-icon', className)} {...props} />;
}
