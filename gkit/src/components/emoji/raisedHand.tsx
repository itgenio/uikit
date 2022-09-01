import classNames from 'classnames';
import React from 'react';
import RaisedHandColorMedium from './assets/raised_hand_color_medium.svg';
import RaisedHandColorMediumLight from './assets/raised_hand_color_medium_light.svg';
import { EmojiProps } from './types';

export const RaisedHandColorMediumEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <RaisedHandColorMedium className={classNames('raised-hand-color-medium-emoji', className)} {...props} />;
};

export const RaisedHandColorMediumLightEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return (
    <RaisedHandColorMediumLight className={classNames('raised-hand-color-medium-light-emoji', className)} {...props} />
  );
};
