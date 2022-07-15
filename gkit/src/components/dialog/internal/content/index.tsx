import './style.less';

import React from 'react';
import { DialogProps } from '../../';
import { DismissIcon } from '../../../icons';

type Props = Pick<DialogProps, 'onClose' | 'children'>;

export const DialogContentInternal = ({ onClose, children }: Props) => {
  return (
    <div className="dialog-content" onClick={e => e.stopPropagation()}>
      <button className="close-dialog-btn" onClick={onClose}>
        <DismissIcon />
      </button>

      {children}
    </div>
  );
};
