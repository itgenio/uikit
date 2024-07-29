import './style.less';

import React from 'react';
import FocusLock from 'react-focus-lock';
import { ModalProps } from '../..';

const MODAL_WRAPPER_CN = 'modal-wrapper';

type Props = Pick<ModalProps, 'children'>;

export const ModalWrapperInternal = React.memo(({ children }: Props) => {
  return (
    <FocusLock
      className={`${MODAL_WRAPPER_CN}-focus-lock`}
      whiteList={node => !document.getElementById('dynamic-react')?.contains(node)}
    >
      <div className={MODAL_WRAPPER_CN}>{children}</div>
    </FocusLock>
  );
});

ModalWrapperInternal.displayName = 'ModalWrapperInternal';
