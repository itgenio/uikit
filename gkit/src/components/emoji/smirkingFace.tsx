import classNames from 'classnames';
import React from 'react';
import SmirkingFace from './assets/smirking_face_color.svg';
import { EmojiProps } from './types';

export const SmirkingFaceEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <SmirkingFace className={classNames('smirking-face-emoji', className)} {...props} />;
};
