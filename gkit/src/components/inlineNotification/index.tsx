import './style.less';

import classNames from 'classnames';
import React, { PropsWithChildren } from 'react';
import { DismissIcon } from '@itgenio/icons/dismissIcon';
import { ErrorCircleFilledIcon } from '@itgenio/icons/errorCircleFilledIcon';

type Variants = 'success' | 'warning' | 'error' | 'info';

export type InlineNotificationProps = PropsWithChildren<{
  variant?: Variants;
  className?: string;
  idQa?: string;
  title: React.ReactNode;
  onClose?: () => void;
}>;

export const InlineNotification = React.memo(
  ({ children, variant = 'error', className, idQa, title, onClose }: InlineNotificationProps) => {
    return (
      <div id-qa={idQa} className={classNames('gkit-inline-notification', className, variant)}>
        <ErrorCircleFilledIcon className="inline-notification-error-circle-icon" />

        <div className="inline-notification-content-wrapper">
          <div className="inline-notification-title">
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
);

InlineNotification.displayName = 'InlineNotification';
