import classNames from 'classnames';
import React from 'react';
import { SvgIcon, SvgIconProps } from './svgIcon';

export function MoreHorizontal16Icon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('more-horizontal-icon', className)} viewBox="0 0 16 16" {...props}>
      <path
        d="M5 8C5 8.55229 4.55228 9 4 9C3.44772 9 3 8.55229 3 8C3 7.44772 3.44772 7 4 7C4.55228 7 5 7.44772 5 8ZM9 8C9 8.55229 8.55229 9 8 9C7.44772 9 7 8.55229 7 8C7 7.44772 7.44772 7 8 7C8.55229 7 9 7.44772 9 8ZM12 9C12.5523 9 13 8.55229 13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8C11 8.55229 11.4477 9 12 9Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}

export function MoreHorizontal24Icon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('more-horizontal-icon', className)} viewBox="0 0 24 24" {...props}>
      <path
        d="M7.75 12C7.75 12.9665 6.9665 13.75 6 13.75C5.0335 13.75 4.25 12.9665 4.25 12C4.25 11.0335 5.0335 10.25 6 10.25C6.9665 10.25 7.75 11.0335 7.75 12ZM13.75 12C13.75 12.9665 12.9665 13.75 12 13.75C11.0335 13.75 10.25 12.9665 10.25 12C10.25 11.0335 11.0335 10.25 12 10.25C12.9665 10.25 13.75 11.0335 13.75 12ZM18 13.75C18.9665 13.75 19.75 12.9665 19.75 12C19.75 11.0335 18.9665 10.25 18 10.25C17.0335 10.25 16.25 11.0335 16.25 12C16.25 12.9665 17.0335 13.75 18 13.75Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
