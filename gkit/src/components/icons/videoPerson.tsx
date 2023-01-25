import classNames from 'classnames';
import React from 'react';
import VideoPersonCallFilled from './assets/video_person_call_24_filled.svg';
import VideoPersonCall from './assets/video_person_call_24_regular.svg';
import { SvgIconProps } from './types';

export function VideoPersonCallIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <VideoPersonCall className={classNames('video-person-call-icon', className)} {...props} />;
}

export function VideoPersonCallFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <VideoPersonCallFilled className={classNames('video-person-call-filled-icon', className)} {...props} />;
}
