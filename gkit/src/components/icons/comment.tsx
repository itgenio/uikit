import classNames from 'classnames';
import React from 'react';
import { SvgIcon, SvgIconProps } from './svgIcon';

export function Comment16Icon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('comment-icon', className)} viewBox="0 0 16 16" {...props}>
      <path
        d="M1 4.5C1 3.11929 2.11929 2 3.5 2H12.5C13.8807 2 15 3.11929 15 4.5V9.5C15 10.8807 13.8807 12 12.5 12H8.68787L5.62533 14.6797C4.99168 15.2342 4 14.7842 4 13.9422V12H3.5C2.11929 12 1 10.8807 1 9.5V4.5ZM3.5 3C2.67157 3 2 3.67157 2 4.5V9.5C2 10.3284 2.67157 11 3.5 11H5V13.8981L8.31213 11H12.5C13.3284 11 14 10.3284 14 9.5V4.5C14 3.67157 13.3284 3 12.5 3H3.5Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}

export function Comment24Icon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('comment-icon', className)} viewBox="0 0 24 24" {...props}>
      <path
        d="M5.25 18C3.45507 18 2 16.5449 2 14.75V6.25C2 4.45507 3.45507 3 5.25 3H18.75C20.5449 3 22 4.45507 22 6.25V14.75C22 16.5449 20.5449 18 18.75 18H13.0125L7.99868 21.7507C7.44585 22.1642 6.6625 22.0512 6.24901 21.4984C6.08736 21.2822 6 21.0196 6 20.7499L5.99921 18H5.25ZM12.5135 16.5H18.75C19.7165 16.5 20.5 15.7165 20.5 14.75V6.25C20.5 5.2835 19.7165 4.5 18.75 4.5H5.25C4.2835 4.5 3.5 5.2835 3.5 6.25V14.75C3.5 15.7165 4.2835 16.5 5.25 16.5H7.49879L7.499 17.2498L7.49986 20.2506L12.5135 16.5Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
