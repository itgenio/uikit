import React, { PropsWithChildren } from 'react';
import { Portal } from '../portal';
import { ModalHeader, ModalTitle, ModalText, ModalBody, ModalFooter } from './components';
import { ModalInternal, ModalContentInternal, ModalWrapperInternal } from './internal';

export type { ModalHeaderProps, ModalTitleProps, ModalTextProps, ModalBodyProps, ModalFooterProps } from './components';

export type ModalProps = PropsWithChildren<{
  className?: string;
  onClose?: () => void;
  open?: boolean;
  asBlock?: boolean;
  fullScreen?: boolean;
  idQa?: string;
}>;

export function Modal({ className, asBlock, fullScreen, children, onClose, open, idQa }: ModalProps) {
  // Для блока не обязательно передавать props.open, поэтому явно проверяем на false
  if (open === false) return null;

  if (asBlock) {
    return (
      <ModalInternal className={className} asBlock idQa={idQa}>
        <ModalContentInternal onClose={onClose} fullScreen={fullScreen}>
          {children}
        </ModalContentInternal>
      </ModalInternal>
    );
  }

  return (
    <Portal>
      <ModalInternal className={className} asBlock={false} idQa={idQa}>
        <ModalWrapperInternal onClose={onClose}>
          <ModalContentInternal onClose={onClose} fullScreen={fullScreen}>
            {children}
          </ModalContentInternal>
        </ModalWrapperInternal>
      </ModalInternal>
    </Portal>
  );
}

Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.Text = ModalText;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
