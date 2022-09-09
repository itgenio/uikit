import './style.less';

import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { ErrorCircleFilledIcon, DismissIcon } from '../icons';

type Variants = 'success' | 'warning' | 'error' | 'info';

export type InlineNotificationProps = PropsWithChildren<{
  variant?: Variants;
  className?: string;
  idQa?: string;
  title: string;
  onClose?: () => void;
}>;

export function InlineNotification({
  children,
  variant = 'error',
  className,
  idQa,
  title,
  onClose,
}: InlineNotificationProps) {
  return (
    <div id-qa={idQa} className={classNames('gkit-inline-notification', className, variant)}>
      <ErrorCircleFilledIcon className="inline-notification-error-circle-icon" />

      <div className="inline-notification-content-wrapper">
        <div className={classNames('inline-notification-title', className)}>
          {title}
          {onClose && (
            <button onClick={onClose}>
              <DismissIcon className="inline-notification-dismiss-icon" />
            </button>
          )}
        </div>

        {children}
      </div>
    </div>
  );
}
