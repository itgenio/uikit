import './style.less';

import classNames from 'classnames';
import React from 'react';
import { DismissIcon } from '@itgenio/icons/dismissIcon';
import { ModalProps } from '../..';

type Props = Pick<ModalProps, 'fullScreen' | 'onClose' | 'idQa' | 'children'>;

export const ModalContentInternal = ({ fullScreen, onClose, idQa, children }: Props) => {
  return (
    <div
      className={classNames('modal-content', { 'full-screen': fullScreen })}
      onClick={e => e.stopPropagation()}
      id-qa={idQa}
    >
      {onClose && (
        <button className="close-modal-btn" id-qa="close-icon-btn" onClick={onClose}>
          <DismissIcon />
        </button>
      )}

      {children}
    </div>
  );
};
