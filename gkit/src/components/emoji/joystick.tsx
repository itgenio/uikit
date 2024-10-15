import classNames from 'classnames';
import React from 'react';
import Joystick from './assets/joystick_color.svg';
import { EmojiProps } from './types';

export const JoystickEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <Joystick className={classNames('joystick-emoji', className)} {...props} />;
};
