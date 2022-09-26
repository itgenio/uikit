import classNames from 'classnames';
import React from 'react';
import CartFilled from './assets/cart_24_filled.svg';
import Cart from './assets/cart_24_regular.svg';
import { SvgIconProps } from './types';

export function CartIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Cart className={classNames('cart-icon', className)} {...props} />;
}

export function CartFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <CartFilled className={classNames('cart-filled-icon', className)} {...props} />;
}
