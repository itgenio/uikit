import classNames from 'classnames';
import React from 'react';
import GameDie from './assets/game_die_color.svg';
import { EmojiProps } from './types';

export const GameDieEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <GameDie className={classNames('game-die-color-emoji', className)} {...props} />;
};
