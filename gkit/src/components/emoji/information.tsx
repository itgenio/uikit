import classNames from 'classnames';
import React from 'react';
import InformationColor from './assets/information_color.svg';
import { EmojiProps } from './types';

export const InformationEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <InformationColor className={classNames('information-color-emoji', className)} {...props} />;
};
