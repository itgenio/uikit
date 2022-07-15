import './style.less';

import FocusTrap from 'focus-trap-react';
import React from 'react';
import { ModalProps } from '../..';

const MODAL_WRAPPER_CN = 'modal-wrapper';

type Props = Pick<ModalProps, 'onClose' | 'children'>;

export const ModalWrapperInternal = ({ onClose, children }: Props) => {
  return (
    // При динамической загрузке у FocusTrap'a нет tabbable elements, поэтому нужно передать селектор в fallbackFocus
    <FocusTrap focusTrapOptions={{ allowOutsideClick: true, fallbackFocus: `.${MODAL_WRAPPER_CN}` }}>
      <div
        className={MODAL_WRAPPER_CN}
        onClick={e => {
          e.stopPropagation();

          onClose?.();
        }}
      >
        {children}
      </div>
    </FocusTrap>
  );
};
