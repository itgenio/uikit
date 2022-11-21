import classNames from 'classnames';
import React from 'react';
import VideoClipMultiple from './assets/video_clip_multiple_24_regular.svg';
import { SvgIconProps } from './types';

export function VideoClipMultipleIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <VideoClipMultiple className={classNames('video-clip-multiple-icon', className)} {...props} />;
}
