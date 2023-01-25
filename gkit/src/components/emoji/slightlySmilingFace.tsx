import classNames from 'classnames';
import React from 'react';
import SlightlySmilingFace from './assets/slightly_smiling_face_color.svg';
import { EmojiProps } from './types';

export const SlightlySmilingFaceEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <SlightlySmilingFace className={classNames('slightly-smiling-face-emoji', className)} {...props} />;
};
