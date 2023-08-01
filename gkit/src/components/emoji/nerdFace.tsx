import classNames from 'classnames';
import React from 'react';
import NerdFaceColor from './assets/nerd_face_color.svg';
import { EmojiProps } from './types';

export const NerdFaceColorEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <NerdFaceColor className={classNames('nerd-face-color-emoji', className)} {...props} />;
};
