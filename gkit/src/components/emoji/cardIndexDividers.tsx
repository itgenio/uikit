import classNames from 'classnames';
import React from 'react';
import CardIndexDividersColor from './assets/card_index_dividers_color.svg';
import { EmojiProps } from './types';

export const CardIndexDividersColorEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <CardIndexDividersColor className={classNames('card-index-dividers-color', className)} {...props} />;
};
