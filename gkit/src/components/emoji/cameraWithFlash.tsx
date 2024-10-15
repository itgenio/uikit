import classNames from 'classnames';
import React from 'react';
import CameraWithFlash from './assets/camera_with_flash_color.svg';
import { EmojiProps } from './types';

export const CameraWithFlashEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <CameraWithFlash className={classNames('camera-with-flash-emoji', className)} {...props} />;
};
