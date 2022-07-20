import './style.less';

import classNames from 'classnames';
import React from 'react';
import { ModalProps } from '../..';
import { DismissIcon } from '../../../icons';

type Props = Pick<ModalProps, 'fullScreen' | 'onClose' | 'children'>;

export const ModalContentInternal = ({ fullScreen, onClose, children }: Props) => {
  return (
    <div className={classNames('modal-content', { 'full-screen': fullScreen })} onClick={e => e.stopPropagation()}>
      {onClose && (
        <button className="close-modal-btn" onClick={onClose}>
          <DismissIcon />
        </button>
      )}

      {children}
    </div>
  );
};
