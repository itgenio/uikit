import classNames from 'classnames';
import React from 'react';
import Speaker from './assets/speaker_2_24_regular.svg';
import { SvgIconProps } from './types';

export function SpeakerIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Speaker className={classNames('speaker-icon', className)} {...props} />;
}
