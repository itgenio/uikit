import './style.less';

import React from 'react';
import FocusLock from 'react-focus-lock';
import { ModalProps } from '../..';

type Props = Pick<ModalProps, 'children'>;

export const ModalFocusLockWrapperInternal = React.memo(({ children }: Props) => {
  return (
    <FocusLock
      className="modal-wrapper"
      whiteList={node => !document.getElementById('dynamic-react')?.contains(node)}
      lockProps={{ tabIndex: -1 }}
    >
      {children}
    </FocusLock>
  );
});

ModalFocusLockWrapperInternal.displayName = 'ModalFocusLockWrapperInternal';
