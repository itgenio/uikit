import classNames from 'classnames';
import React from 'react';
import WandFilled from './assets/wand_24_filled.svg';
import Wand from './assets/wand_24_regular.svg';
import { SvgIconProps } from './types';

export function WandIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Wand className={classNames('wand-icon', className)} {...props} />;
}

export function WandFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <WandFilled className={classNames('wand-filled-icon', className)} {...props} />;
}
