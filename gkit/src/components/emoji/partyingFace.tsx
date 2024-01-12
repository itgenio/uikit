import classNames from 'classnames';
import React from 'react';
import PatyingFaceColor from './assets/partying_face_color.svg';
import { EmojiProps } from './types';

export const PatyingFaceEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <PatyingFaceColor className={classNames('partying-face-color-emoji', className)} {...props} />;
};
