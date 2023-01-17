import classNames from 'classnames';
import React from 'react';
import ThinkingFace from './assets/thinking_face_color.svg';
import { EmojiProps } from './types';

export const ThinkingFaceEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <ThinkingFace className={classNames('thinking-face-emoji', className)} {...props} />;
};
