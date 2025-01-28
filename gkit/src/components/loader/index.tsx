import './style.less';

import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';

export type Sizes = 'small' | 'normal' | 'large' | number;
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
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      const containerElement = ref.current;
      if (!containerElement || typeof size !== 'number') return;

      containerElement.style.setProperty('--gkit-loader-size', `${size}px`);
    }, [size]);

    return isLoading ? (
      <span
        ref={ref}
        className={classNames(LOADER_CN, className, type, { [size]: typeof size !== 'number' })}
        id-qa={idQa}
      >
        <span className={`${LOADER_CN}-circle`} />
        {!text ? null : <span className={`${LOADER_CN}-text`}>{text}</span>}
      </span>
    ) : null;
  }
);

Loader.displayName = 'Loader';
