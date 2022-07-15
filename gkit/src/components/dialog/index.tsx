import React, { PropsWithChildren } from 'react';
import { Portal } from '../portal';
import { DialogHeader, DialogTitle, DialogText, DialogBody, DialogFooter } from './components';
import { DialogInternal, DialogContentInternal, DialogWrapperInternal } from './internal';

export type {
  DialogHeaderProps,
  DialogTitleProps,
  DialogTextProps,
  DialogBodyProps,
  DialogFooterProps,
} from './components';

export type DialogProps = PropsWithChildren<{
  className?: string;
  asBlock?: boolean;
  onClose?: () => void;
  open?: boolean;
  idQa?: string;
}>;

export function Dialog({ className, asBlock, children, onClose, open, idQa }: DialogProps) {
  // Для блока не обязательно передавать props.open, поэтому явно проверяем на false
  if (open === false) return null;

  if (asBlock) {
    return (
      <DialogInternal className={className} asBlock idQa={idQa}>
        <DialogContentInternal onClose={onClose}>{children}</DialogContentInternal>
      </DialogInternal>
    );
  }

  return (
    <Portal>
      <DialogInternal className={className} asBlock={false} idQa={idQa}>
        <DialogWrapperInternal onClose={onClose}>
          <DialogContentInternal onClose={onClose}>{children}</DialogContentInternal>
        </DialogWrapperInternal>
      </DialogInternal>
    </Portal>
  );
}

Dialog.Header = DialogHeader;
Dialog.Title = DialogTitle;
Dialog.Text = DialogText;
Dialog.Body = DialogBody;
Dialog.Footer = DialogFooter;
