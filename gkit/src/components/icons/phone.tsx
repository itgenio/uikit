import classNames from 'classnames';
import React from 'react';
import Phone from './assets/phone_24_regular.svg';
import { SvgIconProps } from './svgIcon';

export function PhoneIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Phone className={classNames('phone-icon', className)} {...props} />;
}
