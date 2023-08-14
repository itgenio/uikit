import classNames from 'classnames';
import React from 'react';
import MicFilled from './assets/mic_24_filled.svg';
import Mic from './assets/mic_24_regular.svg';
import { SvgIconProps } from './types';

export function MicIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Mic className={classNames('mic-icon', className)} {...props} />;
}

export function MicFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <MicFilled className={classNames('mic-filled-icon', className)} {...props} />;
}
