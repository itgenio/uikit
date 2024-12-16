import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { Backdrop } from '../backdrop';
import { ModalHeader, ModalTitle, ModalText, ModalBody, ModalFooter } from './components';
import { ModalInternal, ModalContentInternal } from './internal';

export type { ModalHeaderProps, ModalTitleProps, ModalTextProps, ModalBodyProps, ModalFooterProps } from './components';

export type ModalProps = PropsWithChildren<{
  className?: string;
  onClose?: () => void;
  open?: boolean;
  asBlock?: boolean;
  fullScreen?: boolean;
  wideScreen?: boolean;
  preventBodyScroll?: boolean;
  ignoreOverlayClick?: boolean;
  idQa?: string;
  idQaContent?: string;
}>;

export function Modal({
  className,
  open,
  onClose,
  asBlock,
  fullScreen,
  wideScreen,
  preventBodyScroll = true,
  ignoreOverlayClick,
  idQa,
  idQaContent,
  children,
}: ModalProps) {
  // Для блока необязательно передавать props.open, поэтому явно проверяем на false
  if (open === false) return null;

  if (asBlock) {
    return (
      <ModalInternal className={className} asBlock idQa={idQa}>
        <ModalContentInternal onClose={onClose} fullScreen={fullScreen} wideScreen={wideScreen} idQa={idQaContent}>
          {children}
        </ModalContentInternal>
      </ModalInternal>
    );
  }

  return (
    <Backdrop
      className={classNames('gkit-modal', className, { 'wide-screen': wideScreen })}
      classNameWrapper="modal-wrapper"
      classNameOverlay="modal-overlay"
      onClick={onClose}
      preventBodyScroll={preventBodyScroll}
      ignoreOverlayClick={ignoreOverlayClick}
      idQa={idQa}
    >
      <ModalContentInternal onClose={onClose} fullScreen={fullScreen} wideScreen={wideScreen} idQa={idQaContent}>
        {children}
      </ModalContentInternal>
    </Backdrop>
  );
}

Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.Text = ModalText;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
