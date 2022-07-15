import './style.less';

import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

export type DialogHeaderProps = PropsWithChildren<{ className?: string; idQa?: string }>;

export function DialogHeader({ className, idQa, children }: DialogHeaderProps) {
  return (
    <div className={classNames('dialog-header', className)} id-qa={idQa}>
      {children}
    </div>
  );
}
