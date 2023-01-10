import classNames from 'classnames';
import React from 'react';
import Tile from './assets/tile_24_regular.svg';
import { SvgIconProps } from './types';

export function TileIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Tile className={classNames('tile-icon', className)} {...props} />;
}
