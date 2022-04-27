import './style.less';
import classNames from 'classnames';
import FocusTrap from 'focus-trap-react';
import React, { PropsWithChildren } from 'react';
import { CloseIcon } from '../icons/close';

type DialogProps = PropsWithChildren<{
  idQa?: string;
  className?: string;
  asBlock?: boolean;
  onClose?: () => void;
  open?: boolean;
}>;

export function Dialog({ idQa, className, asBlock, children, onClose, open }: DialogProps) {
  const render = () => (
    <div className="dialog-content" onClick={e => e.stopPropagation()}>
      <button className="close-dialog-btn" onClick={() => onClose?.()}>
        <CloseIcon />
      </button>

      {children}
    </div>
  );

  return open === false ? null : (
    <div id-qa={idQa} className="gkit-dialog">
      {asBlock ? (
        render()
      ) : (
        <FocusTrap>
          <div
            className={classNames('gkit-dialog-wrapper', className)}
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

type DialogTitleProps = PropsWithChildren<{ title?: string }>;

export function DialogTitle({ title, children }: DialogTitleProps) {
  return <h3 className="dialog-title">{title ?? children}</h3>;
}

export function DialogText(props: PropsWithChildren<{}>) {
  return <p className="dialog-text">{props.children}</p>;
}

export function DialogHeader(props: PropsWithChildren<{}>) {
  return <div className="dialog-header">{props.children}</div>;
}

export function DialogBody(props: PropsWithChildren<{}>) {
  return <div className="dialog-body">{props.children}</div>;
}

export function DialogFooter(props: PropsWithChildren<{}>) {
  return <div className="dialog-footer">{props.children}</div>;
}
