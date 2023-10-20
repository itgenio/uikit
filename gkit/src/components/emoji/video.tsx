import classNames from 'classnames';
import React from 'react';
import Video from './assets/video.svg';
import { EmojiProps } from './types';

export const VideoEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <Video className={classNames('video-emoji', className)} {...props} />;
};
