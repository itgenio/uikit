import classNames from 'classnames';
import React from 'react';
import PaymentFilled from './assets/payment_24_filled.svg';
import Payment from './assets/payment_24_regular.svg';
import { SvgIconProps } from './types';

export function PaymentIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Payment className={classNames('payment-icon', className)} {...props} />;
}

export function PaymentFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <PaymentFilled className={classNames('payment-filled-icon', className)} {...props} />;
}
