import classNames from 'classnames';
import React from 'react';
import MailFilled from './assets/mail_24_filled.svg';
import Mail from './assets/mail_24_regular.svg';
import { SvgIconProps } from './types';

export function MailIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <Mail className={classNames('mail-icon', className)} {...props} />;
}

export function MailFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return <MailFilled className={classNames('mail-filled-icon', className)} {...props} />;
}
