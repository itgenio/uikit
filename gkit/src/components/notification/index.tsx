import './style.less';
import classNames from 'classnames';
import React from 'react';
import { NotificationClose, NotificationIcon } from '../icons/notificationIcon';

type Props = React.PropsWithChildren<{
  onClose?: () => void;
  type?: string;
  status?: string;
  idQa?: string;
}>;

export function NotificationContainer({ children, type, status, idQa }: Props) {
  return (
    <div id-qa={idQa} className={classNames('notification-container', status, type)}>
      {children}
    </div>
  );
}

export function NotificationHeader({ children, onClose }: Props) {
  return (
    <div className="notification-title">
      <NotificationIcon />
      {children}
      <button className="notification-close-btn" onClick={onClose}>
        <NotificationClose />
      </button>
    </div>
  );
}

export function NotificationTitle({ children }: Props) {
  return <h3>{children}</h3>;
}

export function NotificationContent({ children }: Props) {
  return <div className="notification-content">{children}</div>;
}

export function NotificationText({ children }: Props) {
  return <p className="notification-text">{children}</p>;
}

export function NotificationButtonContainer({ children }: Props) {
  return <div className="notification-button-container">{children}</div>;
}

export function NotificationButton({ children }: Props) {
  return <button>{children}</button>;
}
