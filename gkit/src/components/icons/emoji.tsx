import classNames from 'classnames';
import React from 'react';
import EmojiFilled from './assets/emoji_24_filled.svg';
import Emoji from './assets/emoji_24_regular.svg';
import { SvgIconProps } from './types';

export function EmojiIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Emoji className={classNames('emoji-icon', className)} {...props} />;
}

export function EmojiFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <EmojiFilled className={classNames('emoji-filled-icon', className)} {...props} />;
}
