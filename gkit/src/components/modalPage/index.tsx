import './style.less';
import classNames from 'classnames';
import FocusTrap from 'focus-trap-react';
import React from 'react';
import { CloseIcon } from '../icons/close';

type Props = React.PropsWithChildren<{
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
        <CloseIcon />
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

export function ModalPageTitle({
  title,
  children,
  className,
  idQa,
}: React.PropsWithChildren<{ title?: string; className?: string; idQa?: string }>) {
  return (
    <h3 id-qa={idQa} className={classNames('modal-page-title', className)}>
      {title ?? children}
    </h3>
  );
}

export function ModalPageText({
  className,
  idQa,
  children,
}: React.PropsWithChildren<{ className?: string; idQa?: string }>) {
  return (
    <p id-qa={idQa} className={classNames('modal-page-text', className)}>
      {children}
    </p>
  );
}

export function ModalPageHeader({
  className,
  idQa,
  children,
}: React.PropsWithChildren<{ className?: string; idQa?: string }>) {
  return (
    <div id-qa={idQa} className={classNames('modal-page-header', className)}>
      {children}
    </div>
  );
}

export function ModalPageBody({
  className,
  idQa,
  children,
}: React.PropsWithChildren<{ className?: string; idQa?: string }>) {
  return (
    <div id-qa={idQa} className={classNames('modal-page-body', className)}>
      {children}
    </div>
  );
}

export function ModalPageFooter({
  className,
  idQa,
  children,
}: React.PropsWithChildren<{ className?: string; idQa?: string }>) {
  return (
    <div id-qa={idQa} className={classNames('modal-page-footer', className)}>
      {children}
    </div>
  );
}
