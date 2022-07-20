import './style.less';

import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

export type ModalTitleProps = PropsWithChildren<{ className?: string; title?: string; idQa?: string }>;

export function ModalTitle({ className, title, idQa, children }: ModalTitleProps) {
  return (
    <h3 className={classNames('modal-title', className)} id-qa={idQa}>
      {title ?? children}
    </h3>
  );
}
