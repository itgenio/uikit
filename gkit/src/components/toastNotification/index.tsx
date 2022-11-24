import './style.less';

import * as ToastPrimitive from '@radix-ui/react-toast';
import classNames from 'classnames';
import React, { ReactNode, useState } from 'react';
import { ErrorCircleFilledIcon, DismissIcon } from '../icons';

type Variants = 'success' | 'warning' | 'error' | 'info';

type ToastPrimitiveProps = Pick<
  ToastPrimitive.ToastProviderProps,
  'duration' | 'label' | 'swipeDirection' | 'swipeThreshold'
>;

type ViewportProps = Pick<ToastPrimitive.ToastViewportProps, 'asChild' | 'hotkey' | 'label'>;

export type NotificationProps = { id: string; title: string; variant: Variants; content: ReactNode } & Pick<
  ToastPrimitive.ToastProps,
  | 'asChild'
  | 'type'
  | 'duration'
  | 'defaultOpen'
  | 'open'
  | 'onOpenChange'
  | 'onEscapeKeyDown'
  | 'onPause'
  | 'onResume'
  | 'onSwipeStart'
  | 'onSwipeMove'
  | 'onSwipeEnd'
  | 'forceMount'
>;

type TitleProps = Pick<ToastPrimitive.ToastTitleProps, 'asChild'>;
type CloseProps = Pick<ToastPrimitive.ToastCloseProps, 'asChild'>;

type ToastNotificationProps = ToastPrimitiveProps &
  NotificationProps &
  TitleProps &
  CloseProps &
  ViewportProps & {
    idQa?: string;
    className?: string;
    durationRoot?: number;
    notifications: NotificationProps[];
    renderLimit?: number;
    onClose: (notification: NotificationProps) => void;
  };

export const ToastNotification = ({
  className,
  idQa,
  notifications,
  renderLimit = 5,
  duration,
  label,
  swipeDirection,
  swipeThreshold,
  hotkey,
  durationRoot,
  onClose,
}: ToastNotificationProps) => {
  const [isShowAll, setShowAll] = useState(false);

  return (
    <ToastPrimitive.Provider {...{ duration, label, swipeDirection, swipeThreshold }}>
      {notifications.reverse().map((notification, index) => {
        const { id, title, content, variant, ...notificationProps } = notification;
        const i = notifications.length - 1 - index;

        return (
          <ToastPrimitive.Root
            key={id}
            style={{ ['--index' as string]: i }}
            id-qa={idQa}
            className={classNames(`gkit-toast-notification gkit-toast-notification-${index}`)}
            hidden={i >= renderLimit && !isShowAll}
            duration={durationRoot}
            onPause={() => setShowAll(true)}
            onResume={() => setShowAll(false)}
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
