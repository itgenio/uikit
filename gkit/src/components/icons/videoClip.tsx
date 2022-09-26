import classNames from 'classnames';
import React from 'react';
import VideoClipFilled from './assets/video_clip_24_filled.svg';
import VideoClip from './assets/video_clip_24_regular.svg';
import { SvgIconProps } from './types';

export function VideoClipIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <VideoClip className={classNames('video-clip-icon', className)} {...props} />;
}

export function VideoClipFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <VideoClipFilled className={classNames('video-clip-filled-icon', className)} {...props} />;
}
