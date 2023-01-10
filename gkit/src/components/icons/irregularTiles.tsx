import classNames from 'classnames';
import React from 'react';
import IrregularTiles from './assets/irregular_tiles_24_regular.svg';
import { SvgIconProps } from './types';

export function IrregularTilesIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <IrregularTiles className={classNames('irregular-tiles-icon', className)} {...props} />;
}
