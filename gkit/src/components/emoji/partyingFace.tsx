import classNames from 'classnames';
import React from 'react';
import PartyingFaceColor from './assets/partying_face_color.svg';
import { EmojiProps } from './types';

export const PartyingFaceEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <PartyingFaceColor className={classNames('partying-face-color-emoji', className)} {...props} />;
};
