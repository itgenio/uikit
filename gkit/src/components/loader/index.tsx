import './style.less';

import classNames from 'classnames';
import React from 'react';

type Sizes = 'small' | 'normal' | 'large';

enum ClassByType {
  primary = 'gkit-loader-primary',
}

export const LOADER_CN = 'gkit-loader';

type Props = {
  size: Sizes;
  text?: React.ReactNode;
  className?: string;
  type?: keyof typeof ClassByType;
  isLoading?: boolean;
};

export const Loader = React.memo(({ text, className, size = 'normal', type = 'primary', isLoading = true }: Props) => {
  return isLoading ? (
    <span className={classNames(LOADER_CN, className, ClassByType[type], size)}>
      <span className="gkit-loader-circle"></span>
      {!text ? null : <span className="gkit-loader-text">{text}</span>}
    </span>
  ) : null;
});

Loader.displayName = 'Loader';
