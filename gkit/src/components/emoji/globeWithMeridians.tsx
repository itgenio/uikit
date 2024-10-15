import classNames from 'classnames';
import React from 'react';
import GlobeWithMeridians from './assets/globe_with_meridians_color.svg';
import { EmojiProps } from './types';

export const GlobeWithMeridiansEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <GlobeWithMeridians className={classNames('globe-with-meridians-emoji', className)} {...props} />;
};
