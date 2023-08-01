import classNames from 'classnames';
import React from 'react';
import GlobeAfrica from './assets/globe_showing_europe_africa.svg';
import { EmojiProps } from './types';

export const GlobeAfricaEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <GlobeAfrica className={classNames('globe-africa-emoji', className)} {...props} />;
};
