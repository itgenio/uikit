import classNames from 'classnames';
import React from 'react';
import Camera from './assets/camera_24_regular.svg';
import { SvgIconProps } from './types';

export function CameraIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Camera className={classNames('camera-icon', className)} {...props} />;
}
