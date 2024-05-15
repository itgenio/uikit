import './style.less';

import classNames from 'classnames';
import React from 'react';

type Sizes = 'small' | 'normal' | 'large';

type Props = React.PropsWithChildren<{
  size?: Sizes;
  disabled?: boolean;
  hover?: boolean;
  className?: string;
  href?: string;
  rel?: string;
  idQa?: string;
  withoutHover?: boolean;
}> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function Link({
  children,
  size = 'normal',
  hover,
  disabled,
  className,
  href,
  idQa,
  rel = 'noopener noreferrer',
  withoutHover = false,
  ...props
}: Props) {
  return (
    <a
      className={classNames('gkit-link', className, size, { hover, disabled, 'without-hover': withoutHover })}
      href={href}
      rel={rel}
      id-qa={idQa}
      {...props}
    >
      {children}
    </a>
  );
}
