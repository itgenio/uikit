import classNames from 'classnames';
import React from 'react';
import { SvgIcon, SvgIconProps } from './svgIcon';

export function ChevronIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('icon-chevron', className)} viewBox="0 0 16 9" {...props}>
      <path
        d="M0.21967 0.46967C0.512563 0.176777 0.987437 0.176777 1.28033 0.46967L8 7.18934L14.7197 0.46967C15.0126 0.176777 15.4874 0.176777 15.7803 0.46967C16.0732 0.762563 16.0732 1.23744 15.7803 1.53033L8.53033 8.78033C8.23744 9.07322 7.76256 9.07322 7.46967 8.78033L0.21967 1.53033C-0.0732233 1.23744 -0.0732233 0.762563 0.21967 0.46967Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}

export function ChevronUpFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('chevron-up-filled-icon', className)} viewBox="0 0 20 20" {...props}>
      <path
        d="M4.20694 12.2673C3.92125 11.9674 3.93279 11.4926 4.23271 11.2069L9.48318 6.2056C9.77285 5.92968 10.2281 5.92968 10.5178 6.2056L15.7682 11.2069C16.0681 11.4926 16.0797 11.9674 15.794 12.2673C15.5083 12.5672 15.0336 12.5787 14.7336 12.293L10.0005 7.78446L5.26729 12.293C4.96737 12.5787 4.49264 12.5672 4.20694 12.2673Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}

export function ChevronDownFilledIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('chevron-down-filled-icon', className)} viewBox="0 0 20 20" {...props}>
      <path
        d="M15.793 7.73271C16.0787 8.03263 16.0672 8.50737 15.7672 8.79306L10.5168 13.7944C10.2271 14.0703 9.77187 14.0703 9.4822 13.7944L4.23173 8.79306C3.93181 8.50737 3.92028 8.03263 4.20597 7.73271C4.49166 7.43279 4.96639 7.42125 5.26631 7.70694L9.99949 12.2155L14.7327 7.70694C15.0326 7.42125 15.5073 7.43279 15.793 7.73271Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
