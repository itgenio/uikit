import './style.less';

import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

export type DialogBodyProps = PropsWithChildren<{ className?: string; idQa?: string }>;

export function DialogBody({ className, idQa, children }: DialogBodyProps) {
  return (
    <div className={classNames('dialog-body', className)} id-qa={idQa}>
      {children}
    </div>
  );
}
