import classNames from 'classnames';
import React from 'react';
import FaceWithRollingEyes from './assets/face_with_rolling_eyes_color.svg';
import { EmojiProps } from './types';

export const FaceWithRollingEyesEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <FaceWithRollingEyes className={classNames('face-with-rolling-eyes-emoji', className)} {...props} />;
};
