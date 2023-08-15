import classNames from 'classnames';
import React from 'react';
import PartyPopperColor from './assets/party_popper_color.svg';
import { EmojiProps } from './types';

export const PartyPopperEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <PartyPopperColor className={classNames('party-popper-color-emoji', className)} {...props} />;
};
