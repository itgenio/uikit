import './style.less';
import classNames from 'classnames';
import React from 'react';
import { CloseIcon } from '../../icons/close';

type Props = React.PropsWithChildren<{
  title?: string;
  className?: string;
  asBlock?: boolean;
  onClose?: () => void;
  open?: boolean;
}>;

export function ModalPage({ className, asBlock, children, onClose, open }: Props) {
  const render = () => (
    <div
      className="modal-page-content"
      onClick={e => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <button className="close-btn" onClick={() => onClose?.()}>
        <CloseIcon />
      </button>
      {children}
    </div>
  );

  return open === false ? null : (
    <div
      className="gkit-modal-page"
      onClick={e => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      {asBlock ? (
        render()
      ) : (
        <div
          className={classNames('gkit-modal-page-wrapper', className)}
          onClick={e => {
            e.stopPropagation();
            e.preventDefault();
          }}
        >
          {render()}
        </div>
      )}
    </div>
  );
}

export function ModalPageTitle({
  title,
  children,
  className,
}: React.PropsWithChildren<{ title?: string; className?: string }>) {
  return <h3 className={classNames('modal-page-title', className)}>{title ?? children}</h3>;
}

export function ModalPageText(props: React.PropsWithChildren<any>) {
  return <p className="modal-page-text">{props.children}</p>;
}

export function ModalPageHeader(props: React.PropsWithChildren<any>) {
  return <div className="modal-page-header">{props.children}</div>;
}

export function ModalPageBody(props: React.PropsWithChildren<{ className?: string }>) {
  return <div className={classNames('modal-page-body', props.className)}>{props.children}</div>;
}

export function ModalPageFooter(props: React.PropsWithChildren<any>) {
  return <div className="modal-page-footer">{props.children}</div>;
}
