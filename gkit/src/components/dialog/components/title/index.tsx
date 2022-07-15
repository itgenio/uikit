import './style.less';

import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

export type DialogTitleProps = PropsWithChildren<{ className?: string; title?: string; idQa?: string }>;

export function DialogTitle({ className, title, idQa, children }: DialogTitleProps) {
  return (
    <h3 className={classNames('dialog-title', className)} id-qa={idQa}>
      {title ?? children}
    </h3>
  );
}
