import classNames from 'classnames';
import React from 'react';
import CycloneFlat from './assets/cyclone_flat.svg';
import { EmojiProps } from './types';

export const CycloneEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <CycloneFlat className={classNames('cyclone-flat-emoji', className)} {...props} />;
};
