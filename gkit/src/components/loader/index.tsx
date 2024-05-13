import './style.less';

import classNames from 'classnames';
import React from 'react';

type Sizes = 'small' | 'normal' | 'large';
type Types = 'primary';

export const LOADER_CN = 'gkit-loader';

type Props = {
  className?: string;
  size: Sizes;
  type?: Types;
  text?: React.ReactNode;
  isLoading?: boolean;
};

export const Loader = React.memo(({ text, className, size = 'normal', type = 'primary', isLoading = true }: Props) => {
  return isLoading ? (
    <span className={classNames(LOADER_CN, className, type, size)}>
      <span className="gkit-loader-circle" />
      {!text ? null : <span className="gkit-loader-text">{text}</span>}
    </span>
  ) : null;
});

Loader.displayName = 'Loader';
