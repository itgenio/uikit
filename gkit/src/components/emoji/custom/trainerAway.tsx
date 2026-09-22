import classNames from 'classnames';
import React from 'react';
import TrainerAway from '../assets/trainer_away.svg';
import { EmojiProps } from '../types';

export const TrainerAwayEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <TrainerAway className={classNames('trainer-away-emoji', className)} {...props} />;
};
