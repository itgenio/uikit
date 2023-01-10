import classNames from 'classnames';
import React from 'react';
import Tiles from './assets/tiles_24_regular.svg';
import { SvgIconProps } from './types';

export function TilesIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Tiles className={classNames('tiles-icon', className)} {...props} />;
}
