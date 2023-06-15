import classNames from 'classnames';
import React from 'react';
import ArrowSyncFilled from './assets/arrow_sync_24_filled.svg';
import ArrowSync from './assets/arrow_sync_24_regular.svg';
import { SvgIconProps } from './types';

export function ArrowSyncIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ArrowSync className={classNames('arrow-sync-icon', className)} {...props} />;
}

export function ArrowSyncFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ArrowSyncFilled className={classNames('arrow-sync-filled-icon', className)} {...props} />;
}
