import './style.less';

import React from 'react';
import { ModalProps } from '../..';

type Props = Pick<ModalProps, 'onClose' | 'ignoreOverlayClick'>;

export const ModalOverlayInternal = ({ onClose, ignoreOverlayClick }: Props) => {
  return (
    <div
      className="modal-overlay"
      onClick={e => {
        e.stopPropagation();

        if (ignoreOverlayClick) return;

        onClose?.();
      }}
    />
  );
};
