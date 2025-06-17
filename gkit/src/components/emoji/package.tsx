import classNames from 'classnames';
import React from 'react';
import Package from './assets/package_flat.svg';
import { EmojiProps } from './types';

export const PackageEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <Package className={classNames('package-emoji', className)} {...props} />;
};