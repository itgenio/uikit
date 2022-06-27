import classNames from 'classnames';
import React from 'react';
import Image from './assets/image_24_regular.svg';
import { SvgIconProps } from './svgIcon';

export function ImageIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Image className={classNames('image-icon', className)} {...props} />;
}
