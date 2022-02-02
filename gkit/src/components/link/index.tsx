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
  idQa?: string;
}>;

export function Link({ children, size = 'normal', hover, disabled, className, href, idQa }: Props) {
  return (
    <a
      href={href}
      rel="noopener"
      id-qa={idQa}
      className={classNames('gkit-link', className, size, { hover, disabled })}
    >
      {children}
    </a>
  );
}
