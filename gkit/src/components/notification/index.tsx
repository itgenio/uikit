import './style.less';
import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { CircleNotificationIcon } from '../icons/circleNotification';
import { CloseIcon } from '../icons/close';

type Statuses = 'success' | 'warning' | 'error' | 'info';
type Types = 'toast' | 'inline';

export type NotificationContainerProps = PropsWithChildren<{
  status?: Statuses;
  type?: Types;
  className?: string;
  idQa?: string;
}>;

export function NotificationContainer({ children, type, status, className, idQa }: NotificationContainerProps) {
  return (
    <div id-qa={idQa} className={classNames('gkit-notification-container', className, status, type)}>
      {children}
    </div>
  );
}

type NotificationHeaderProps = PropsWithChildren<{ onClose?: () => void; className?: string }>;

export function NotificationHeader({ children, onClose, className }: NotificationHeaderProps) {
  return (
    <div className={classNames('notification-title', className)}>
      <CircleNotificationIcon />
      {children}
      {onClose && (
        <button onClick={onClose}>
          <CloseIcon />
        </button>
      )}
    </div>
  );
}
