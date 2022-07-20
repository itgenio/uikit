import './style.less';

import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';

export type ModalHeaderProps = PropsWithChildren<{ className?: string; idQa?: string }>;

export function ModalHeader({ className, idQa, children }: ModalHeaderProps) {
  return (
    <div className={classNames('modal-header', className)} id-qa={idQa}>
      {children}
    </div>
  );
}
