import classNames from 'classnames';
import React from 'react';
import UnamusedFace from './assets/unamused_face_color.svg';
import { EmojiProps } from './types';

export const UnamusedFaceEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <UnamusedFace className={classNames('unamused-face-emoji', className)} {...props} />;
};
