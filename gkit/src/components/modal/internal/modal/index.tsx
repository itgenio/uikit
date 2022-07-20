import './style.less';

import classNames from 'classnames';
import React from 'react';
import { ModalProps } from '../..';

type Props = Pick<ModalProps, 'className' | 'asBlock' | 'idQa' | 'children'>;

export const ModalInternal = ({ className, asBlock, idQa, children }: Props) => {
  return (
    <div
      className={classNames('gkit-modal', className, { 'as-block': asBlock })}
      onClick={e => e.stopPropagation()}
      id-qa={idQa}
    >
      {children}
    </div>
  );
};
