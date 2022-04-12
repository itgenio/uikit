import classNames from 'classnames';
import React from 'react';
import { SvgIcon, SvgIconProps } from './svgIcon';

type CircleIcon = SvgIconProps & {
  normal?: boolean;
  hover?: boolean;
};

export function CircleIcon({ className, normal, hover, ...props }: CircleIcon) {
  return (
    <SvgIcon className={classNames('switcher-icon', className, { normal, hover })} viewBox="0 0 16 16" {...props}>
      <path
        d="M8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1ZM0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z"
        fill=""
      />
    </SvgIcon>
  );
}