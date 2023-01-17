import classNames from 'classnames';
import React from 'react';
import FontAdd from './assets/font_add_24_regular.svg';
import { SvgIconProps } from './types';

export function FontAddIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <FontAdd className={classNames('font-add-icon', className)} {...props} />;
}
