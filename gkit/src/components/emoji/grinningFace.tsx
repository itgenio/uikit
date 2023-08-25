import classNames from 'classnames';
import React from 'react';
import GrinningFace from './assets/grinning_face_color.svg';
import { EmojiProps } from './types';

export const GrinningFaceEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <GrinningFace className={classNames('grinning-face-emoji', className)} {...props} />;
};
