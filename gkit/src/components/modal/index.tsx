import React, { PropsWithChildren, useState } from 'react';
import { Portal } from '../portal';
import { ModalHeader, ModalTitle, ModalText, ModalBody, ModalFooter } from './components';
import { usePreventBodyScroll } from './hooks/useBodyScroll';
import { ModalInternal, ModalContentInternal, ModalFocusLockWrapperInternal, ModalOverlayInternal } from './internal';

export type { ModalHeaderProps, ModalTitleProps, ModalTextProps, ModalBodyProps, ModalFooterProps } from './components';

export type ModalProps = PropsWithChildren<{
  className?: string;
  onClose?: () => void;
  open?: boolean;
  asBlock?: boolean;
  fullScreen?: boolean;
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
  preventBodyScroll = true,
  ignoreOverlayClick,
  idQa,
  idQaContent,
  children,
}: ModalProps) {
  const [element, setElement] = useState<HTMLDivElement>(null);

  usePreventBodyScroll(preventBodyScroll && open);

  // Для блока необязательно передавать props.open, поэтому явно проверяем на false
  if (open === false) return null;

  if (asBlock) {
    return (
      <ModalInternal className={className} asBlock idQa={idQa}>
        <ModalContentInternal onClose={onClose} fullScreen={fullScreen} idQa={idQaContent}>
          {children}
        </ModalContentInternal>
      </ModalInternal>
    );
  }

  return (
    <Portal>
      <ModalInternal className={className} asBlock={false} setElement={setElement} idQa={idQa}>
        <ModalFocusLockWrapperInternal element={element}>
          <ModalOverlayInternal onClose={onClose} ignoreOverlayClick={ignoreOverlayClick} />

          <ModalContentInternal onClose={onClose} fullScreen={fullScreen} idQa={idQaContent}>
            {children}
          </ModalContentInternal>
        </ModalFocusLockWrapperInternal>
      </ModalInternal>
    </Portal>
  );
}

Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.Text = ModalText;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
