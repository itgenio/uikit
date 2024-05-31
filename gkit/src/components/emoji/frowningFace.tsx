import classNames from 'classnames';
import React from 'react';
import FrowningFace from './assets/frowning_face_color.svg';
import { EmojiProps } from './types';

export const FrowningFaceEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <FrowningFace className={classNames('frowning-face-emoji', className)} {...props} />;
};
