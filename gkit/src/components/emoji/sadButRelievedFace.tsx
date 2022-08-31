import classNames from 'classnames';
import React from 'react';
import SadButRelievedFaceColor from './assets/sad_but_relieved_face_color.svg';
import { EmojiProps } from './types';

export const SadButRelievedFaceColorEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <SadButRelievedFaceColor className={classNames('sad-but-relieved-face-color', className)} {...props} />;
};
