import './style.less';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { NotificationClose, NotificationIcon } from '../icons/notificationIcon';

type Statuses = 'success' | 'warning' | 'error' | 'info';
export type NotificationProps = PropsWithChildren<{ status?: Statuses }>;

export type Types = 'toast' | 'inline';
export type NotificationContainerProps = NotificationProps & {
  type?: Types;
  idQa?: string;
};

export function NotificationContainer({ children, type, status, idQa }: NotificationContainerProps) {
  return (
    <div id-qa={idQa} className={classNames('gkit-notification-container', status, type)}>
      {children}
    </div>
  );
}

type NotificationHeaderProps = PropsWithChildren<{ onClose?: () => void }>;

export function NotificationHeader({ children, onClose }: NotificationHeaderProps) {
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

export function NotificationTitle({ children }: PropsWithChildren<{}>) {
  return <h3>{children}</h3>;
}

export function NotificationContent({ children }: PropsWithChildren<{}>) {
  return <div className="notification-content">{children}</div>;
}

export function NotificationText({ children }: PropsWithChildren<{}>) {
  return <p className="notification-text">{children}</p>;
}

export function NotificationButtonContainer({ children }: PropsWithChildren<{}>) {
  return <div className="notification-button-container">{children}</div>;
}

export function NotificationButton({ children }: PropsWithChildren<{}>) {
  return <button>{children}</button>;
}
