import './style.less';

import classNames from 'classnames';
import React from 'react';

export type Sizes = 'small' | 'normal' | 'large';
export type Types = 'primary';

export const LOADER_CN = 'gkit-loader';

type Props = {
  className?: string;
  size?: Sizes;
  type?: Types;
  text?: React.ReactNode;
  isLoading?: boolean;
  idQa?: string;
};

export const Loader = React.memo(
  ({ text, className, size = 'normal', type = 'primary', isLoading = true, idQa }: Props) => {
    return isLoading ? (
      <span className={classNames(LOADER_CN, className, type, size)} id-qa={idQa}>
        <span className={`${LOADER_CN}-circle`} />
        {!text ? null : <span className={`${LOADER_CN}-text`}>{text}</span>}
      </span>
    ) : null;
  }
);

Loader.displayName = 'Loader';
