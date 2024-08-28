import './style.less';

import React from 'react';
import FocusLock from 'react-focus-lock';
import { ModalProps } from '../..';

type Props = Pick<ModalProps, 'children'> & { element: HTMLDivElement };

export const ModalFocusLockWrapperInternal = React.memo(({ element, children }: Props) => {
  return (
    <FocusLock
      className="modal-wrapper"
      whiteList={node => !document.getElementById('dynamic-react')?.contains(node)}
      // https://github.com/theKashey/react-focus-lock/issues/94#issuecomment-589330581
      shards={[element]}
      //https://github.com/theKashey/react-focus-lock/issues/318
      focusOptions={{
        preventScroll: true,
      }}
    >
      {children}
    </FocusLock>
  );
});

ModalFocusLockWrapperInternal.displayName = 'ModalFocusLockWrapperInternal';
