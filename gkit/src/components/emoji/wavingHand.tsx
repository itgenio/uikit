import classNames from 'classnames';
import React from 'react';
import WavingHandColorDefault from './assets/waving_hand_color_default.svg';
import { EmojiProps } from './types';

export const WavingHandColorEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <WavingHandColorDefault className={classNames('waving-hand-color-emoji', className)} {...props} />;
};
