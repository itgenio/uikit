import classNames from 'classnames';
import React from 'react';
import { SvgIcon, SvgIconProps } from './svgIcon';

export function CheckMark16Icon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('checkmark-icon', className)} viewBox="0 0 16 16" {...props}>
      <path
        d="M13.8639 3.65609C14.0533 3.85704 14.0439 4.17348 13.8429 4.36288L5.91309 11.8368C5.67573 12.0605 5.30311 12.0536 5.07417 11.8213L2.39384 9.10093C2.20003 8.90422 2.20237 8.58765 2.39907 8.39384C2.59578 8.20003 2.91235 8.20237 3.10616 8.39908L5.51192 10.8407L13.1571 3.63517C13.358 3.44577 13.6745 3.45513 13.8639 3.65609Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}

export function CheckMark24Icon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('checkmark-icon', className)} viewBox="0 0 24 24" {...props}>
      <path
        d="M4.53033 12.9697C4.23744 12.6768 3.76256 12.6768 3.46967 12.9697C3.17678 13.2626 3.17678 13.7374 3.46967 14.0303L7.96967 18.5303C8.26256 18.8232 8.73744 18.8232 9.03033 18.5303L20.0303 7.53033C20.3232 7.23744 20.3232 6.76256 20.0303 6.46967C19.7374 6.17678 19.2626 6.17678 18.9697 6.46967L8.5 16.9393L4.53033 12.9697Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}

export function CheckMark16FilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('checkmark-filled-icon', className)} viewBox="0 0 16 16" {...props}>
      <path
        d="M14.0458 3.4856C14.3299 3.78703 14.3158 4.26169 14.0144 4.54579L6.08456 12.0197C5.74829 12.3366 5.22042 12.3269 4.89609 11.9977L2.21576 9.27737C1.92504 8.98231 1.92856 8.50745 2.22361 8.21674C2.51867 7.92602 2.99353 7.92954 3.28424 8.22459L5.51839 10.4921L12.9856 3.45421C13.287 3.17011 13.7617 3.18416 14.0458 3.4856Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}

export function CheckMark24FilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('checkmark-filled-icon', className)} viewBox="0 0 24 24" {...props}>
      <path
        d="M8.5 16.5858L4.70711 12.7929C4.31658 12.4024 3.68342 12.4024 3.29289 12.7929C2.90237 13.1834 2.90237 13.8166 3.29289 14.2071L7.79289 18.7071C8.18342 19.0976 8.81658 19.0976 9.20711 18.7071L20.2071 7.70711C20.5976 7.31658 20.5976 6.68342 20.2071 6.29289C19.8166 5.90237 19.1834 5.90237 18.7929 6.29289L8.5 16.5858Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
