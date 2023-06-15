import classNames from 'classnames';
import React from 'react';
import EmojiSadFilled from './assets/emoji_sad_24_filled.svg';
import EmojiSad from './assets/emoji_sad_24_regular.svg';
import { SvgIconProps } from './types';

export function EmojiSadIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <EmojiSad className={classNames('emoji-sad-icon', className)} {...props} />;
}

export function EmojiSadFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <EmojiSadFilled className={classNames('emoji-sad-filled-icon', className)} {...props} />;
}
