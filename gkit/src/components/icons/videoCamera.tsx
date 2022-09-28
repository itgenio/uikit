import classNames from 'classnames';
import React from 'react';
import VideoCamera from './assets/video_camera.svg';
import { SvgIconProps } from './types';

export function VideoCameraIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <VideoCamera className={classNames('arrow-download-icon', className)} {...props} />;
}
