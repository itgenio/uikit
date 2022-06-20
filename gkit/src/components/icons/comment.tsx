import classNames from 'classnames';
import React from 'react';
import { SvgIcon, SvgIconProps } from './svgIcon';

export function CommentIcon({ className, ...props }: Partial<SvgIconProps> = {}) {
  return (
    <SvgIcon className={classNames('comment-icon', className)} viewBox="0 0 24 24" {...props}>
      <path
        d="M5.25 18C4.38805 18 3.5614 17.6576 2.9519 17.0481C2.34241 16.4386 2 15.612 2 14.75V6.25C2 5.38805 2.34241 4.5614 2.9519 3.9519C3.5614 3.34241 4.38805 3 5.25 3H18.75C19.1768 3 19.5994 3.08406 19.9937 3.24739C20.388 3.41072 20.7463 3.65011 21.0481 3.9519C21.3499 4.25369 21.5893 4.61197 21.7526 5.00628C21.9159 5.40059 22 5.8232 22 6.25V14.75C22 15.1768 21.9159 15.5994 21.7526 15.9937C21.5893 16.388 21.3499 16.7463 21.0481 17.0481C20.7463 17.3499 20.388 17.5893 19.9937 17.7526C19.5994 17.9159 19.1768 18 18.75 18H13.012L8 21.75C7.81428 21.889 7.59356 21.9736 7.36251 21.9943C7.13146 22.015 6.89922 21.971 6.69176 21.8672C6.4843 21.7634 6.30981 21.6039 6.18782 21.4066C6.06582 21.2093 6.00114 20.982 6.001 20.75V18H5.251H5.25ZM12.514 16.5H18.75C19.2141 16.5 19.6592 16.3156 19.9874 15.9874C20.3156 15.6592 20.5 15.2141 20.5 14.75V6.25C20.5 5.78587 20.3156 5.34075 19.9874 5.01256C19.6592 4.68437 19.2141 4.5 18.75 4.5H5.25C4.78587 4.5 4.34075 4.68437 4.01256 5.01256C3.68437 5.34075 3.5 5.78587 3.5 6.25V14.75C3.5 15.716 4.284 16.5 5.25 16.5H7.499V20.25L12.514 16.5Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
}
