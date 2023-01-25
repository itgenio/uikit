import classNames from 'classnames';
import React from 'react';
import SmilingFaceWithHeartEyes from './assets/smiling_face_with_heart_eyes_color.svg';
import { EmojiProps } from './types';

export const SmilingFaceWithHeartEyesEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return (
    <SmilingFaceWithHeartEyes className={classNames('smiling-face-with-heart-eyes-emoji', className)} {...props} />
  );
};
