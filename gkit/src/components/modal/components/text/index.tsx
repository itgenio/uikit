import './style.less';

import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

export type ModalTextProps = PropsWithChildren<{ className?: string; idQa?: string }>;

export function ModalText({ className, idQa, children }: ModalTextProps) {
  return (
    <p className={classNames('modal-text', className)} id-qa={idQa}>
      {children}
    </p>
  );
}
