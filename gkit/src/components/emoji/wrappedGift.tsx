import classNames from 'classnames';
import React from 'react';
import WrappedGift from './assets/wrapped_gift_flat.svg';
import { EmojiProps } from './types';

export const WrappedGiftEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <WrappedGift className={classNames('wrapped-gift-emoji', className)} {...props} />;
};
