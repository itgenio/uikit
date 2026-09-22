import classNames from 'classnames';
import React from 'react';
import NeutralFaceColor from './assets/neutral_face_color.svg';
import { EmojiProps } from './types';

export const NeutralFaceEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <NeutralFaceColor className={classNames('neutral-face-color-emoji', className)} {...props} />;
};
