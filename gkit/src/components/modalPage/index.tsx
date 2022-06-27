import './style.less';
import classNames from 'classnames';
import FocusTrap from 'focus-trap-react';
import React, { PropsWithChildren } from 'react';
import { DismissIcon } from '../icons/dismiss';

type Props = PropsWithChildren<{
  title?: string;
  className?: string;
  asBlock?: boolean;
  onClose?: () => void;
  open?: boolean;
  idQa?: string;
}>;

export function ModalPage({ className, asBlock, children, onClose, open, idQa }: Props) {
  const render = () => (
    <div
      className="modal-page-content"
      id-qa={idQa || 'modal-page-content'}
      onClick={e => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <button className="close-btn" id-qa="close-icon-btn" onClick={() => onClose?.()}>
        <DismissIcon />
      </button>
      {children}
    </div>
  );

  return open === false ? null : (
    <div
      className={classNames('gkit-modal-page', { 'as-block': asBlock })}
      onClick={e => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      {asBlock ? (
        render()
      ) : (
        <FocusTrap>
          <div
            className={classNames('gkit-modal-page-wrapper', className)}
            onClick={e => {
              e.stopPropagation();
              e.preventDefault();
            }}
          >
            {render()}
          </div>
        </FocusTrap>
      )}
    </div>
  );
}

type ModalPageTitleProps = PropsWithChildren<{ title?: string; className?: string; idQa?: string }>;

export function ModalPageTitle({ title, children, className, idQa }: ModalPageTitleProps) {
  return (
    <h3 id-qa={idQa} className={classNames('modal-page-title', className)}>
      {title ?? children}
    </h3>
  );
}

type ModalPageTextProps = PropsWithChildren<{ className?: string; idQa?: string }>;

export function ModalPageText({ className, idQa, children }: ModalPageTextProps) {
  return (
    <p id-qa={idQa} className={classNames('modal-page-text', className)}>
      {children}
    </p>
  );
}

type ModalPageHeaderProps = PropsWithChildren<{ className?: string; idQa?: string }>;

export function ModalPageHeader({ className, idQa, children }: ModalPageHeaderProps) {
  return (
    <div id-qa={idQa} className={classNames('modal-page-header', className)}>
      {children}
    </div>
  );
}

type ModalPageBodyProps = PropsWithChildren<{ className?: string; idQa?: string }>;

export function ModalPageBody({ className, idQa, children }: ModalPageBodyProps) {
  return (
    <div id-qa={idQa} className={classNames('modal-page-body', className)}>
      {children}
    </div>
  );
}

type ModalPageFooterProps = PropsWithChildren<{ className?: string; idQa?: string }>;

export function ModalPageFooter({ className, idQa, children }: ModalPageFooterProps) {
  return (
    <div id-qa={idQa} className={classNames('modal-page-footer', className)}>
      {children}
    </div>
  );
}
