import classNames from 'classnames';
import React from 'react';
import PensiveFaceWithSweat from './assets/pensive-face-with-sweat.svg.svg';
import { EmojiProps } from './types';

export const PensiveFaceWithSweatEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <PensiveFaceWithSweat className={classNames('pensive-face-with-sweat', className)} {...props} />;
};
