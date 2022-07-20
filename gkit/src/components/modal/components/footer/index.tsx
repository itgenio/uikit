import './style.less';

import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

export type ModalFooterProps = PropsWithChildren<{ className?: string; idQa?: string }>;

export function ModalFooter({ className, idQa, children }: ModalFooterProps) {
  return (
    <div className={classNames('modal-footer', className)} id-qa={idQa}>
      {children}
    </div>
  );
}
