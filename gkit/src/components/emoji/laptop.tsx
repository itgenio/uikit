import classNames from 'classnames';
import React from 'react';
import LaptopColor from './assets/laptop_color.svg';
import { EmojiProps } from './types';

export const LaptopEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <LaptopColor className={classNames('laptop-color-emoji', className)} {...props} />;
};
