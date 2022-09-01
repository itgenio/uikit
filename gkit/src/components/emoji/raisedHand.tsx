import classNames from 'classnames';
import React from 'react';
import RaisedHandColorMedium from './assets/raised_hand_color_medium.svg';
import { EmojiProps } from './types';

export const RaisedHandColorMediumEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <RaisedHandColorMedium className={classNames('raised-hand-color-medium-emoji', className)} {...props} />;
};
