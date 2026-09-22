import classNames from 'classnames';
import React from 'react';
import DisappointedFaceColor from './assets/disappointed_face_color.svg';
import { EmojiProps } from './types';

export const DisappointedFaceEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <DisappointedFaceColor className={classNames('disappointed-face-color-emoji', className)} {...props} />;
};
