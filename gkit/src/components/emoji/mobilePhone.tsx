import classNames from 'classnames';
import React from 'react';
import MobilePhone from './assets/mobile_phone_color.svg';
import { EmojiProps } from './types';

export const MobilePhoneEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <MobilePhone className={classNames('mobile-phone-emoji', className)} {...props} />;
};
