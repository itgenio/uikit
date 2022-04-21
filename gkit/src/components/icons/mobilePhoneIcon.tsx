import classNames from 'classnames';
import React from 'react';
import { SvgIcon, SvgIconProps } from './svgIcon';

export function MobilePhoneIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('icon-mobile-phone', className)} viewBox="0 0 12 12" {...props}>
      <path
        d="M5.5 8C5.22386 8 5 8.22386 5 8.5C5 8.77614 5.22386 9 5.5 9H6.5C6.77614 9 7 8.77614 7 8.5C7 8.22386 6.77614 8 6.5 8H5.5ZM4.5 1C3.67157 1 3 1.67157 3 2.5V9.5C3 10.3284 3.67157 11 4.5 11H7.5C8.32843 11 9 10.3284 9 9.5V2.5C9 1.67157 8.32843 1 7.5 1H4.5ZM4 2.5C4 2.22386 4.22386 2 4.5 2H7.5C7.77614 2 8 2.22386 8 2.5V9.5C8 9.77614 7.77614 10 7.5 10H4.5C4.22386 10 4 9.77614 4 9.5V2.5Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
