import './icons.less';
import classNames from 'classnames';
import React from 'react';

export type SvgIconProps = React.PropsWithChildren<{
  className?: string;
  viewBox?: string;
  alt?: string;
  fill?: string;
  onClick?: (e: any) => void;
}>;

export function SvgIcon({ children, className, viewBox, alt, fill, onClick }: SvgIconProps) {
  return (
    <svg
      focusable={false}
      color="inherit"
      viewBox={viewBox ?? '0 0 24 24'}
      className={classNames('gkit-svg-icon', className)}
      aria-hidden={alt ? undefined : true}
      role={alt ? 'img' : undefined}
      fill={fill}
      onClick={onClick}
    >
      {alt != null && <title>{alt}</title>}
      {children}
    </svg>
  );
}
