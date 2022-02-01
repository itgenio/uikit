import './style.less';
import classNames from 'classnames';
import React from 'react';
import { CloseIcon } from '../icons/close';

type Props = React.PropsWithChildren<{
  title?: string;
  className?: string;
  asBlock?: boolean;
  onClose?: () => void;
  open?: boolean;
}>;

export function Dialog({ className, asBlock, children, onClose, open }: Props) {
  const render = () => (
    <div className="dialog-content" onClick={e => e.stopPropagation()}>
      <button className="close-dialog-btn" onClick={() => onClose?.()}>
        <CloseIcon />
      </button>
      {children}
    </div>
  );

  return open === false ? null : (
    <div className="gkit-dialog">
      {asBlock ? (
        render()
      ) : (
        <div
          className={classNames('gkit-dialog-wrapper', className)}
          onClick={e => {
            e.stopPropagation();
            onClose?.();
          }}
        >
          {render()}
        </div>
      )}
    </div>
  );
}

export function DialogTitle({ title, children }: React.PropsWithChildren<{ title?: string }>) {
  return <h3 className="dialog-title">{title ?? children}</h3>;
}

export function DialogText(props: React.PropsWithChildren<any>) {
  return <p className="dialog-text">{props.children}</p>;
}

export function DialogHeader(props: React.PropsWithChildren<any>) {
  return <div className="dialog-header">{props.children}</div>;
}

export function DialogBody(props: React.PropsWithChildren<any>) {
  return <div className="dialog-body">{props.children}</div>;
}

export function DialogFooter(props: React.PropsWithChildren<any>) {
  return <div className="dialog-footer">{props.children}</div>;
}
