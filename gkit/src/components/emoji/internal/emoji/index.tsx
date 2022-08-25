import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

export type EmojiProps = PropsWithChildren<{
  className?: string;
  viewBox?: string;
  fill?: string;
}>;

export function Emoji({ children, className, viewBox, fill }: EmojiProps) {
  return (
    <svg className={classNames('gkit-emoji', className)} viewBox={viewBox ?? '0 0 24 24'} fill={fill}>
      {children}
    </svg>
  );
}
