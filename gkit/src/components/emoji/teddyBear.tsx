import classNames from 'classnames';
import React from 'react';
import TeddyBear from './assets/teddy_bear.svg';
import { EmojiProps } from './types';

export const TeddyBearEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <TeddyBear className={classNames('teddy-bear-emoji', className)} {...props} />;
};
