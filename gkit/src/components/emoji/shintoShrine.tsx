import classNames from 'classnames';
import React from 'react';
import ShintoShrine from './assets/shinto_shrine_color.svg';
import { EmojiProps } from './types';

export const ShintoShrineEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <ShintoShrine className={classNames('shinto-shrine-emoji', className)} {...props} />;
};
