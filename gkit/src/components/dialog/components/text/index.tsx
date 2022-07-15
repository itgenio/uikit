import './style.less';

import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

export type DialogTextProps = PropsWithChildren<{ className?: string; idQa?: string }>;

export function DialogText({ className, idQa, children }: DialogTextProps) {
  return (
    <p className={classNames('dialog-text', className)} id-qa={idQa}>
      {children}
    </p>
  );
}
