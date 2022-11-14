import classNames from 'classnames';
import React from 'react';
import WalletFilled from './assets/wallet_24_filled.svg';
import Wallet from './assets/wallet_24_regular.svg';
import { SvgIconProps } from './types';

export function WalletIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Wallet className={classNames('wallet-icon', className)} {...props} />;
}

export function WalletFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <WalletFilled className={classNames('wallet-filled-icon', className)} {...props} />;
}
