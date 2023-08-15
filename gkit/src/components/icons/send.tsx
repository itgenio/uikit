import classNames from 'classnames';
import React from 'react';
import SendFilled from './assets/send_24_filled.svg';
import Send from './assets/send_24_regular.svg';
import { SvgIconProps } from './types';

export function SendIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Send className={classNames('send-icon', className)} {...props} />;
}

export function SendFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <SendFilled className={classNames('send-filled-icon', className)} {...props} />;
}
