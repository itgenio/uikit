import classNames from 'classnames';
import React from 'react';
import ClapperBoard from './assets/clapper_board_color.svg';
import { EmojiProps } from './types';

export const ClapperBoardEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <ClapperBoard className={classNames('clapper-board-emoji', className)} {...props} />;
};
