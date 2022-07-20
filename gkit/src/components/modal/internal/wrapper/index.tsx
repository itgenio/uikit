import './style.less';

import FocusTrap from 'focus-trap-react';
import React from 'react';
import { ModalProps } from '../..';

const MODAL_WRAPPER_CN = 'modal-wrapper';

type Props = Pick<ModalProps, 'children'>;

export const ModalWrapperInternal = ({ children }: Props) => {
  return (
    // При динамической загрузке у FocusTrap'a нет tabbable elements, поэтому нужно передать селектор в fallbackFocus
    <FocusTrap focusTrapOptions={{ allowOutsideClick: true, fallbackFocus: `.${MODAL_WRAPPER_CN}` }}>
      <div className={MODAL_WRAPPER_CN}>{children}</div>
    </FocusTrap>
  );
};
