import './style.less';

import React from 'react';
import FocusLock from 'react-focus-lock';
import { ModalProps } from '../..';

type Props = Pick<ModalProps, 'children'>;

export const ModalWrapperInternal = React.memo(({ children }: Props) => {
  return (
    // При динамической загрузке у FocusTrap'a нет tabbable elements, поэтому нужно передать селектор в fallbackFocus
    <FocusLock className="modal-wrapper-focus-lock">
      <div className="modal-wrapper">{children}</div>
    </FocusLock>
  );
});

ModalWrapperInternal.displayName = 'ModalWrapperInternal';
