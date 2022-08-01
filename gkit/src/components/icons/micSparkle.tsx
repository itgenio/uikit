import classNames from 'classnames';
import React from 'react';
import MicSparkleFilled from './assets/mic_sparkle_24_filled.svg';
import MicSparkle from './assets/mic_sparkle_24_regular.svg';
import { SvgIconProps } from './types';

export function MicSparkleIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <MicSparkle className={classNames('mic-sparkle-icon', className)} {...props} />;
}

export function MicSparkleFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <MicSparkleFilled className={classNames('mic-sparkle-filled-icon', className)} {...props} />;
}
