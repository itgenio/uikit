import classNames from 'classnames';
import React from 'react';
import { SvgIcon, SvgIconProps } from './svgIcon';

export function MoreVertical16Icon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('more-vertical-icon', className)} viewBox="0 0 16 16" {...props}>
      <path
        d="M8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4C9 4.55228 8.55228 5 8 5ZM8 9C7.44771 9 7 8.55229 7 8C7 7.44772 7.44771 7 8 7C8.55228 7 9 7.44772 9 8C9 8.55229 8.55228 9 8 9ZM7 12C7 12.5523 7.44771 13 8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11C7.44771 11 7 11.4477 7 12Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}

export function MoreVertical24Icon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('more-vertical-icon', className)} viewBox="0 0 24 24" {...props}>
      <path
        d="M12 7.75C11.0335 7.75 10.25 6.9665 10.25 6C10.25 5.0335 11.0335 4.25 12 4.25C12.9665 4.25 13.75 5.0335 13.75 6C13.75 6.9665 12.9665 7.75 12 7.75ZM12 13.75C11.0335 13.75 10.25 12.9665 10.25 12C10.25 11.0335 11.0335 10.25 12 10.25C12.9665 10.25 13.75 11.0335 13.75 12C13.75 12.9665 12.9665 13.75 12 13.75ZM10.25 18C10.25 18.9665 11.0335 19.75 12 19.75C12.9665 19.75 13.75 18.9665 13.75 18C13.75 17.0335 12.9665 16.25 12 16.25C11.0335 16.25 10.25 17.0335 10.25 18Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
