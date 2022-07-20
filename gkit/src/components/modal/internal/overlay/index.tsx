import './style.less';

import React from 'react';
import { ModalProps } from '../..';

type Props = Pick<ModalProps, 'onClose'>;

export const ModalOverlayInternal = ({ onClose }: Props) => {
  return (
    <div
      className="modal-overlay"
      onClick={e => {
        e.stopPropagation();

        onClose?.();
      }}
    />
  );
};
