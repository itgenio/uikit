import './style.less';

import FocusTrap from 'focus-trap-react';
import React from 'react';
import { DialogProps } from '../../';

const DIALOG_WRAPPER_CN = 'dialog-wrapper';

type Props = Pick<DialogProps, 'onClose' | 'children'>;

export const DialogWrapperInternal = ({ onClose, children }: Props) => {
  return (
    // При динамической загрузке у FocusTrap'a нет tabbable elements, поэтому нужно передать селектор в fallbackFocus
    <FocusTrap focusTrapOptions={{ allowOutsideClick: true, fallbackFocus: `.${DIALOG_WRAPPER_CN}` }}>
      <div
        className={DIALOG_WRAPPER_CN}
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
