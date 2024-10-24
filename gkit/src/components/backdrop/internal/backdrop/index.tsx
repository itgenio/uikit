import './style.less';

import classNames from 'classnames';
import React from 'react';
import { BackdropProps } from '../..';

type Props = Pick<BackdropProps, 'className' | 'idQa' | 'children'> & {
  setElement?: (element: HTMLDivElement) => void;
};

export const BackdropInternal = ({ className, setElement, idQa, children }: Props) => {
  return (
    <div
      ref={ref => setElement?.(ref)}
      className={classNames('gkit-backdrop', className)}
      onClick={e => e.stopPropagation()}
      id-qa={idQa}
    >
      {children}
    </div>
  );
};
