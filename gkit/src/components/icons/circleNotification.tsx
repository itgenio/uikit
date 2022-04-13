import classNames from 'classnames';
import React from 'react';
import { SvgIcon, SvgIconProps } from './svgIcon';

export function CircleNotificationIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('circle-notification-icon', className)} viewBox="0 0 26 26" {...props}>
      <path
        d="M10 0C15.523 0 20 4.478 20 10C20 15.522 15.523 20 10 20C4.477 20 0 15.522 0 10C0 4.478 4.477 0 10 0ZM10.0018 13.0037C9.45025 13.0037 9.00314 13.4508 9.00314 14.0024C9.00314 14.5539 9.45025 15.001 10.0018 15.001C10.5533 15.001 11.0005 14.5539 11.0005 14.0024C11.0005 13.4508 10.5533 13.0037 10.0018 13.0037ZM9.99964 5C9.4868 5.00018 9.06427 5.38638 9.00669 5.88374L9 6.00036L9.0018 11.0012L9.00857 11.1179C9.06651 11.6152 9.48932 12.0011 10.0022 12.0009C10.515 12.0007 10.9375 11.6145 10.9951 11.1171L11.0018 11.0005L11 5.99964L10.9932 5.88302C10.9353 5.3857 10.5125 4.99982 9.99964 5Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
