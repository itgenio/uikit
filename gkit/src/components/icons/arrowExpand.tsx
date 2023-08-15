import classNames from 'classnames';
import React from 'react';
import ArrowExpandFilled from './assets/arrow_expand_24_filled.svg';
import ArrowExpand from './assets/arrow_expand_24_regular.svg';
import { SvgIconProps } from './types';

export function ArrowExpandIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ArrowExpand className={classNames('arrow-expand-icon', className)} {...props} />;
}

export function ArrowExpandFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <ArrowExpandFilled className={classNames('arrow-expand-filled-icon', className)} {...props} />;
}
