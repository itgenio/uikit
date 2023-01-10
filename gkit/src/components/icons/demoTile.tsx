import classNames from 'classnames';
import React from 'react';
import DemoTile from './assets/demo_tile_24_regular.svg';
import { SvgIconProps } from './types';

export function DemoTileIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <DemoTile className={classNames('demo-tile-icon', className)} {...props} />;
}
