import './style.less';
import classNames from 'classnames';
import FocusTrap from 'focus-trap-react';
import React, { CSSProperties, PropsWithChildren } from 'react';
import { DismissIcon } from '../icons/dismiss';

export const DIALOG_Z_INDEX = 2000;
export const DIALOG_WRAPPER_CN = 'gkit-dialog-wrapper';

type DialogProps = PropsWithChildren<{
  className?: string;
  asBlock?: boolean;
  onClose?: () => void;
  open?: boolean;
  idQa?: string;
}>;

export function Dialog({ className, asBlock, children, onClose, open, idQa }: DialogProps) {
  const render = () => (
    <div className="dialog-content" onClick={e => e.stopPropagation()} id-qa={idQa}>
      <button className="close-dialog-btn" onClick={() => onClose?.()}>
        <DismissIcon />
      </button>

      {children}
    </div>
  );

  return open === false ? null : (
    <div
      className="gkit-dialog"
      onClick={e => e.stopPropagation()}
      style={{ '--gkitDialogZIndex': DIALOG_Z_INDEX } as CSSProperties}
    >
      {asBlock ? (
        render()
      ) : (
        // При динамической загрузке у FocusTrap'a нет tabbable elements, поэтому нужно передать селектор в fallbackFocus
        <FocusTrap focusTrapOptions={{ allowOutsideClick: true, fallbackFocus: `.${DIALOG_WRAPPER_CN}` }}>
          <div
            className={classNames(DIALOG_WRAPPER_CN, className)}
            onClick={e => {
              e.stopPropagation();
              onClose?.();
            }}
          >
            {render()}
          </div>
        </FocusTrap>
      )}
    </div>
  );
}

type DialogTitleProps = PropsWithChildren<{ className?: string; title?: string; idQa?: string }>;

export function DialogTitle({ className, title, idQa, children }: DialogTitleProps) {
  return (
    <h3 className={classNames('dialog-title', className)} id-qa={idQa}>
      {title ?? children}
    </h3>
  );
}

type DialogTextProps = PropsWithChildren<{ className?: string; idQa?: string }>;

export function DialogText({ className, idQa, children }: DialogTextProps) {
  return (
    <p className={classNames('dialog-text', className)} id-qa={idQa}>
      {children}
    </p>
  );
}

type DialogHeaderProps = PropsWithChildren<{ className?: string; idQa?: string }>;

export function DialogHeader({ className, idQa, children }: DialogHeaderProps) {
  return (
    <div className={classNames('dialog-header', className)} id-qa={idQa}>
      {children}
    </div>
  );
}

type DialogBodyProps = PropsWithChildren<{ className?: string; idQa?: string }>;

export function DialogBody({ className, idQa, children }: DialogBodyProps) {
  return (
    <div className={classNames('dialog-body', className)} id-qa={idQa}>
      {children}
    </div>
  );
}

type DialogFooterProps = PropsWithChildren<{ className?: string; idQa?: string }>;

export function DialogFooter({ className, idQa, children }: DialogFooterProps) {
  return (
    <div className={classNames('dialog-footer', className)} id-qa={idQa}>
      {children}
    </div>
  );
}
