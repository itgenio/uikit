import classNames from 'classnames';
import React from 'react';
import LedgerColor from './assets/ledger_color.svg';
import { EmojiProps } from './types';

export const LedgerEmoji = ({ className, ...props }: Partial<EmojiProps> = {}) => {
  return <LedgerColor className={classNames('ledger-color-emoji', className)} {...props} />;
};
