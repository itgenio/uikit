import classNames from 'classnames';
import React from 'react';
import PalmTree from '../assets/palm_tree.svg';
import { EmojiProps } from '../types';

export const PalmTreeEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <PalmTree className={classNames('palm-tree-emoji', className)} {...props} />;
};
