import './style.less';

import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

export type DialogFooterProps = PropsWithChildren<{ className?: string; idQa?: string }>;

export function DialogFooter({ className, idQa, children }: DialogFooterProps) {
  return (
    <div className={classNames('dialog-footer', className)} id-qa={idQa}>
      {children}
    </div>
  );
}
