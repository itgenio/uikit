import classNames from 'classnames';
import React from 'react';
import Trainer from './assets/trainer.svg';
import { EmojiProps } from './types';

export const TrainerEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <Trainer className={classNames('trainer-emoji', className)} {...props} />;
};
