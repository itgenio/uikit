import './style.less';

import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { ErrorCircleFilledIcon, DismissIcon } from '../icons';

type Variants = 'success' | 'warning' | 'error' | 'info';

export type NotificationProps = PropsWithChildren<{
  variant?: Variants;
  className?: string;
  idQa?: string;
  title: string;
  onClose?: () => void;
}>;

export function Notification({ children, variant, className, idQa, title, onClose }: NotificationProps) {
  return (
    <div id-qa={idQa} className={classNames('gkit-notification-container', className, variant)}>
      <ErrorCircleFilledIcon className="notification-error-circle-icon" />

      <div className="notification-content-wrapper">
        <div className={classNames('notification-title', className)}>
          {title}
          {onClose && (
            <button onClick={onClose}>
              <DismissIcon className="notification-dismiss-icon" />
            </button>
          )}
        </div>

        {children}
      </div>
    </div>
  );
}
