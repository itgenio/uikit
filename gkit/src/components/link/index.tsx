import './style.less';

import classNames from 'classnames';
import React from 'react';

type Sizes = 'small' | 'normal' | 'large';

type Props = React.PropsWithChildren<{
  size?: Sizes;
  disabled?: boolean;
  hover?: boolean;
  className?: string;
  href: string;
  rel?: string;
  idQa?: string;
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
  rel = 'noopener',
  ...props
}: Props) {
  return (
    <a
      className={classNames('gkit-link', className, size, { hover, disabled })}
      href={href}
      rel={rel}
      id-qa={idQa}
      {...props}
    >
      {children}
    </a>
  );
}
