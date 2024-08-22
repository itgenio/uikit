import React from 'react';
import FocusLock from 'react-focus-lock';
import { ModalProps } from '../..';

type Props = Pick<ModalProps, 'children'>;

export const ModalWrapperInternal = React.memo(({ children }: Props) => {
  return (
    <FocusLock
      className="modal-wrapper-focus-lock"
      whiteList={node => !document.getElementById('dynamic-react')?.contains(node)}
    >
      {children}
    </FocusLock>
  );
});

ModalWrapperInternal.displayName = 'ModalWrapperInternal';
