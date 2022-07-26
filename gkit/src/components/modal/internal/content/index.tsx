import './style.less';

import classNames from 'classnames';
import React from 'react';
import { ModalProps } from '../..';
import { DismissIcon } from '../../../icons';

type Props = Pick<ModalProps, 'fullScreen' | 'onClose' | 'idQa' | 'children'>;

export const ModalContentInternal = ({ fullScreen, onClose, idQa, children }: Props) => {
  return (
    <div
      className={classNames('modal-content', { 'full-screen': fullScreen })}
      onClick={e => e.stopPropagation()}
      id-qa={idQa}
    >
      {onClose && (
        <button className="close-modal-btn" onClick={onClose}>
          <DismissIcon />
        </button>
      )}

      {children}
    </div>
  );
};
