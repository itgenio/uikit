import classNames from 'classnames';
import React from 'react';
import PensiveFaceColor from './assets/pensive_face_color.svg';
import { EmojiProps } from './types';

export const PensiveFaceEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <PensiveFaceColor className={classNames('pensive-face-color-emoji', className)} {...props} />;
};
