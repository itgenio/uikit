import classNames from 'classnames';
import React from 'react';
import SmilingFaceWithSunglassesColor from './assets/smiling_face_with_sunglasses_color.svg';
import { EmojiProps } from './types';

export const SmilingFaceWithSunglassesEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return (
    <SmilingFaceWithSunglassesColor
      className={classNames('smiling-face-with-sunglasses-color-emoji', className)}
      {...props}
    />
  );
};
