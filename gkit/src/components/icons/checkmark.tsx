import classNames from 'classnames';
import React from 'react';
import { SvgIcon, SvgIconProps } from './svgIcon';

export function CheckmarkIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('checkmark-icon', className)} viewBox="0 0 17.5 13" {...props}>
      <path
        d="M5.5 10.5858L1.70711 6.79289C1.31658 6.40237 0.683418 6.40237 0.292893 6.79289C-0.0976311 7.18342 -0.0976311 7.81658 0.292893 8.20711L4.79289 12.7071C5.18342 13.0976 5.81658 13.0976 6.20711 12.7071L17.2071 1.70711C17.5976 1.31658 17.5976 0.683418 17.2071 0.292893C16.8166 -0.0976311 16.1834 -0.0976311 15.7929 0.292893L5.5 10.5858Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
