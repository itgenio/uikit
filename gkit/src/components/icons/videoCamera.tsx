import classNames from 'classnames';
import React from 'react';
import VideoCameraFilled from './assets/video_24_filled.svg';
import VideoCamera from './assets/video_24_regular.svg';
import { SvgIconProps } from './types';

export function VideoCameraIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <VideoCamera className={classNames('arrow-download-icon', className)} {...props} />;
}

export function VideoCameraFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <VideoCameraFilled className={classNames('arrow-download-icon', className)} {...props} />;
}
