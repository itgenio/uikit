import classNames from 'classnames';
import React from 'react';
import Money from './assets/money_24_regular.svg';
import { SvgIconProps } from './svgIcon';

export function MoneyIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Money className={classNames('money-icon', className)} {...props} />;
}
