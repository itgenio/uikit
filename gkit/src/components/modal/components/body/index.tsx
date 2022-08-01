import './style.less';

import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

export type ModalBodyProps = PropsWithChildren<{ className?: string; idQa?: string }>;

export function ModalBody({ className, idQa, children }: ModalBodyProps) {
  return (
    <div className={classNames('modal-body', className)} id-qa={idQa}>
      {children}
    </div>
  );
}
