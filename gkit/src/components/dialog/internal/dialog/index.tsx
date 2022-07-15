import './style.less';

import classNames from 'classnames';
import React from 'react';
import { DialogProps } from '../../';

type Props = Pick<DialogProps, 'className' | 'asBlock' | 'idQa' | 'children'>;

export const DialogInternal = ({ className, asBlock, idQa, children }: Props) => {
  return (
    <div
      className={classNames('gkit-dialog', className, { 'as-block': asBlock })}
      onClick={e => e.stopPropagation()}
      id-qa={idQa}
    >
      {children}
    </div>
  );
};
