import classNames from 'classnames';
import React from 'react';
import VideoFilled from './assets/video_24_filled.svg';
import Video from './assets/video_24_regular.svg';
import { SvgIconProps } from './types';

export function VideoIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Video className={classNames('video-icon', className)} {...props} />;
}

export function VideoFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <VideoFilled className={classNames('video-filled-icon', className)} {...props} />;
}
