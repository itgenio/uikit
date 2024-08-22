import './style.less';

import classNames from 'classnames';
import React from 'react';
import { ModalProps } from '../..';

type Props = Pick<ModalProps, 'className' | 'asBlock' | 'idQa' | 'children'> & {
  setElement?: (element: HTMLDivElement) => void;
};

export const ModalInternal = ({ className, asBlock, setElement, idQa, children }: Props) => {
  return (
    <div
      ref={ref => setElement?.(ref)}
      className={classNames('gkit-modal', className, { 'as-block': asBlock })}
      onClick={e => e.stopPropagation()}
      id-qa={idQa}
    >
      {children}
    </div>
  );
};
