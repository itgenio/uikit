import classNames from 'classnames';
import React from 'react';
import { SvgIcon, SvgIconProps } from './svgIcon';

export function Phone16Icon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('phone-icon', className)} viewBox="0 0 16 16" {...props}>
      <path
        d="M7 12C6.72386 12 6.5 12.2239 6.5 12.5C6.5 12.7761 6.72386 13 7 13H9C9.27614 13 9.5 12.7761 9.5 12.5C9.5 12.2239 9.27614 12 9 12H7ZM5.75 1C4.7835 1 4 1.7835 4 2.75V13.25C4 14.2165 4.7835 15 5.75 15H10.25C11.2165 15 12 14.2165 12 13.25V2.75C12 1.7835 11.2165 1 10.25 1H5.75ZM5 2.75C5 2.33579 5.33579 2 5.75 2H10.25C10.6642 2 11 2.33579 11 2.75V13.25C11 13.6642 10.6642 14 10.25 14H5.75C5.33579 14 5 13.6642 5 13.25V2.75Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}

export function Phone24Icon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('phone-icon', className)} viewBox="0 0 24 24" {...props}>
      <path
        d="M15.75 2C16.9926 2 18 3.00736 18 4.25V19.75C18 20.9926 16.9926 22 15.75 22H8.25C7.00736 22 6 20.9926 6 19.75V4.25C6 3.00736 7.00736 2 8.25 2H15.75ZM15.75 3.5H8.25C7.83579 3.5 7.5 3.83579 7.5 4.25V19.75C7.5 20.1642 7.83579 20.5 8.25 20.5H15.75C16.1642 20.5 16.5 20.1642 16.5 19.75V4.25C16.5 3.83579 16.1642 3.5 15.75 3.5ZM13.2489 17.5C13.6631 17.4994 13.9994 17.8347 14 18.2489C14.0006 18.6631 13.6653 18.9994 13.2511 19L10.7511 19.0038C10.3369 19.0044 10.0006 18.6691 10 18.2549C9.99938 17.8407 10.3347 17.5044 10.7489 17.5038L13.2489 17.5Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
