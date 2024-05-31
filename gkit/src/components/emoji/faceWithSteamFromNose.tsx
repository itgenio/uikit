import classNames from 'classnames';
import React from 'react';
import FaceWithSteamFromNose from './assets/face_with_steam_from_nose_color.svg';
import { EmojiProps } from './types';

export const FaceWithSteamFromNoseEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <FaceWithSteamFromNose className={classNames('face-with-steam-from-nose-emoji', className)} {...props} />;
};
