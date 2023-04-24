import classNames from 'classnames';
import React from 'react';
import HuggingFace from './assets/hugging_face_color.svg';
import { EmojiProps } from './types';

export const HuggingFaceEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <HuggingFace className={classNames('hugging-face-emoji', className)} {...props} />;
};
