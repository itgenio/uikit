import './style.less';

import React from 'react';
import FocusLock from 'react-focus-lock';
import { ModalProps } from '../..';

const MODAL_WRAPPER_CN = 'modal-wrapper';

type Props = Pick<ModalProps, 'children'>;

export const ModalWrapperInternal = React.memo(({ children }: Props) => {
  return (
    // При динамической загрузке у FocusTrap'a нет tabbable elements, поэтому нужно передать селектор в fallbackFocus
    <FocusLock className={`${MODAL_WRAPPER_CN}-focus-lock`}>
      <div className={MODAL_WRAPPER_CN}>{children}</div>
    </FocusLock>
  );
});

ModalWrapperInternal.displayName = 'ModalWrapperInternal';
