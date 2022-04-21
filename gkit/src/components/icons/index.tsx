import classNames from 'classnames';
import React from 'react';
import { SvgIcon, SvgIconProps } from './svgIcon';

export function CheckMarkIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('icon-checkmark', className)} viewBox="0 0 12 12" {...props}>
      <path
        d="M9.85355 3.14645C10.0488 3.34171 10.0488 3.65829 9.85355 3.85355L5.35355 8.35355C5.15829 8.54882 4.84171 8.54882 4.64645 8.35355L2.64645 6.35355C2.45118 6.15829 2.45118 5.84171 2.64645 5.64645C2.84171 5.45118 3.15829 5.45118 3.35355 5.64645L5 7.29289L9.14645 3.14645C9.34171 2.95118 9.65829 2.95118 9.85355 3.14645Z"
        fill="#1D58D8"
    />
    </SvgIcon>
  );
}

export function MobilePhoneIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={className('icon-mobile-phone', className)} viewBox="0 0 12 12" {...props}>
      <path 
        d="M5.5 8C5.22386 8 5 8.22386 5 8.5C5 8.77614 5.22386 9 5.5 9H6.5C6.77614 9 7 8.77614 7 8.5C7 8.22386 6.77614 8 6.5 8H5.5ZM4.5 1C3.67157 1 3 1.67157 3 2.5V9.5C3 10.3284 3.67157 11 4.5 11H7.5C8.32843 11 9 10.3284 9 9.5V2.5C9 1.67157 8.32843 1 7.5 1H4.5ZM4 2.5C4 2.22386 4.22386 2 4.5 2H7.5C7.77614 2 8 2.22386 8 2.5V9.5C8 9.77614 7.77614 10 7.5 10H4.5C4.22386 10 4 9.77614 4 9.5V2.5Z" fill="#1D58D8"
      />
    </SvgIcon>
  )
}
