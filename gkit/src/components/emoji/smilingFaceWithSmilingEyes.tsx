import classNames from 'classnames';
import React from 'react';
import SmilingFaceWithSmilingEyes from './assets/smiling_face_with_smiling_eyes_color.svg';
import { EmojiProps } from './types';

export const SmilingFaceWithSmilingEyesEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return (
    <SmilingFaceWithSmilingEyes className={classNames('smiling-face-with-smiling-eyes-emoji', className)} {...props} />
  );
};
