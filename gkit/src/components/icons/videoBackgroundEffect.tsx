import classNames from 'classnames';
import React from 'react';
import VideoBackgroundEffectFilled from './assets/video_background_effect_24_filled.svg';
import VideoBackgroundEffect from './assets/video_background_effect_24_regular.svg';
import { SvgIconProps } from './types';

export function VideoBackgroundEffectIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <VideoBackgroundEffect className={classNames('video-background-effect-icon', className)} {...props} />;
}

export function VideoBackgroundEffectFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <VideoBackgroundEffectFilled className={classNames('video-background-effect-filled-icon', className)} {...props} />
  );
}
