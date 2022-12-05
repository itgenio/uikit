import './style.less';

import * as ToastPrimitive from '@radix-ui/react-toast';
import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { ErrorCircleFilledIcon, DismissIcon } from '../icons';

type Variants = 'success' | 'warning' | 'error' | 'info';

export type NotificationProps = {
  id: string;
  title: string;
  variant: Variants;
  content: ReactNode;
};

type ToastNotificationProps = ToastPrimitive.ToastProviderProps &
  ToastPrimitive.ToastProps &
  ToastPrimitive.ToastTitleProps &
  ToastPrimitive.ToastCloseProps &
  ToastPrimitive.ToastViewportProps & {
    idQa?: string;
    className?: string;
    durationRoot?: number;
    notifications: NotificationProps[];
    renderLimit?: number;
    onClose: (notification: NotificationProps) => void;
  };

console.log(123);

export const ToastNotification = ({
  className,
  idQa,
  notifications,
  renderLimit = 3,
  duration,
  label,
  swipeDirection,
  swipeThreshold,
  hotkey,
  durationRoot,
  onClose,
}: ToastNotificationProps) => {
  return (
    <ToastPrimitive.Provider {...{ duration, label, swipeDirection, swipeThreshold }}>
      {/*отображаем в обратном порядке*/}
      {notifications.reverse().map((notification, index) => {
        const { id, title, content, variant, ...notificationProps } = notification;
        const sortIndex = notifications.length - 1 - index;

        return (
          <ToastPrimitive.Root
            key={id}
            style={{ ['--index' as string]: sortIndex }}
            id-qa={idQa}
            className={`gkit-toast-notification gkit-toast-notification-${index}`}
            hidden={sortIndex >= renderLimit}
            duration={durationRoot}
            onOpenChange={open => {
              if (!open) {
                onClose(notification);
              }
            }}
            {...notificationProps}
          >
            <div className={classNames('toast-inner', className, variant)}>
              <ErrorCircleFilledIcon className="toast-error-circle-icon" />

              <div className="toast-content-wrapper">
                <ToastPrimitive.Title className="toast-title">
                  {title}
                  <ToastPrimitive.Close className="toast-close">
                    <DismissIcon className="toast-dismiss-icon" />
                  </ToastPrimitive.Close>
                </ToastPrimitive.Title>

                {content}
              </div>
            </div>
          </ToastPrimitive.Root>
        );
      })}

      <ToastPrimitive.Viewport className="toast-viewport" hotkey={hotkey} />
    </ToastPrimitive.Provider>
  );
};
