import classNames from 'classnames';
import React from 'react';
import SoccerBall from './assets/soccer_ball_color.svg';
import { EmojiProps } from './types';

export const SoccerBallEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <SoccerBall className={classNames('soccer-ball-emoji', className)} {...props} />;
};
