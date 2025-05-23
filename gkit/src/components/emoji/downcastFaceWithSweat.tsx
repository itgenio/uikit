import classNames from 'classnames';
import React from 'react';
import DowncastFaceWithSweat from './assets/downcast_face_with_sweat_color.svg';
import { EmojiProps } from './types';

export const DowncastFaceWithSweatEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <DowncastFaceWithSweat className={classNames('downcast-face-with-sweat-color-emoji', className)} {...props} />;
};
