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
}: React.PropsWithChildren<{ title?: string; className?: string }>) {
  return (
    <h3 id-qa="modal-page-title" className={classNames('modal-page-title', className)}>
      {title ?? children}
    </h3>
  );
}

export function ModalPageText(props: React.PropsWithChildren<any>) {
  return (
    <p id-qa="modal-page-text" className="modal-page-text">
      {props.children}
    </p>
  );
}

export function ModalPageHeader(props: React.PropsWithChildren<any>) {
  return (
    <div id-qa="modal-page-header" className="modal-page-header">
      {props.children}
    </div>
  );
}

export function ModalPageBody(props: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div id-qa="modal-page-body" className={classNames('modal-page-body', props.className)}>
      {props.children}
    </div>
  );
}

export function ModalPageFooter(props: React.PropsWithChildren<any>) {
  return (
    <div id-qa="modal-page-footer" className="modal-page-footer">
      {props.children}
    </div>
  );
}
