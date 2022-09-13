import classNames from 'classnames';
import React from 'react';
import Wallet from './assets/wallet_24_regular.svg';
import { SvgIconProps } from './types';

export function WalletIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  //TODO: remove
  return <Wallet className={classNames('wallet-icon', className)} {...props} />;
}
