import classNames from 'classnames';
import React from 'react';
import { SvgIcon, SvgIconProps } from './svgIcon';

export function Circle16Icon({ className, ...props }: SvgIconProps) {
  return (
    <SvgIcon className={classNames('circle-icon', className)} viewBox="0 0 16 16" {...props}>
      <path
        d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3C10.7614 3 13 5.23858 13 8C13 10.7614 10.7614 13 8 13Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}

export function Circle24Icon({ className, ...props }: SvgIconProps) {
  return (
    <SvgIcon className={classNames('circle-icon', className)} viewBox="0 0 24 24" {...props}>
      <path
        d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 16.6944 7.30558 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
