import classNames from 'classnames';
import React from 'react';
import PlayFilled from './assets/play_24_filled.svg';
import Play from './assets/play_24_regular.svg';
import { SvgIconProps } from './types';

export function PlayIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Play className={classNames('play-icon', className)} {...props} />;
}

export function PlayFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <PlayFilled className={classNames('play-filled-icon', className)} {...props} />;
}
