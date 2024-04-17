import './style.less';

import * as ToastPrimitive from '@radix-ui/react-toast';
import classNames from 'classnames';
import React, { Fragment, ReactNode, useRef, useState } from 'react';
import { DismissIcon } from '@itgenio/icons/dismissIcon';
import { ErrorCircleFilledIcon } from '@itgenio/icons/errorCircleFilledIcon';
import { Portal } from '../portal';

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
  const viewportRef = useRef<HTMLOListElement>(null);

  return (
    <ToastPrimitive.Provider {...{ duration, label, swipeDirection, swipeThreshold }}>
      {notifications.map((notification, index) => {
        return (
          <Notification
            key={notification.id}
            durationRoot={durationRoot}
            notification={notification}
            index={index}
            sortIndex={notifications.length - 1 - index}
            renderLimit={renderLimit}
            onClose={onClose}
            className={className}
            viewportElement={viewportRef.current}
            idQa={idQa}
          />
        );
      })}

      <ToastPrimitive.Viewport className="toast-viewport" hotkey={hotkey} ref={viewportRef} />
    </ToastPrimitive.Provider>
  );
};

const Notification = ({
  notification,
  index,
  sortIndex,
  renderLimit,
  durationRoot,
  idQa,
  onClose,
  className,
  viewportElement,
}: {
  notification: NotificationProps;
  index: number;
  sortIndex: number;
  viewportElement: HTMLOListElement | null;
} & Pick<ToastNotificationProps, 'durationRoot' | 'renderLimit' | 'onClose' | 'className' | 'idQa'>) => {
  const { id, title, content, variant, ...notificationProps } = notification;

  const [rootRef, setRootRef] = useState<HTMLLIElement>(null);

  const computedStyles = rootRef ? getComputedStyle(rootRef) : undefined;
  const hidden = sortIndex >= renderLimit;

  return (
    <Fragment key={id}>
      <ToastPrimitive.Root
        style={{ ['--index' as string]: sortIndex }}
        id-qa={idQa}
        className={classNames(`gkit-toast-notification gkit-toast-notification-${index}`, { hidden })}
        duration={durationRoot}
        onOpenChange={open => {
          if (!open) {
            onClose(notification);
          }
        }}
        ref={ref => setRootRef(ref)}
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

      {viewportElement && (
        <Portal container={viewportElement}>
          <div
            className={classNames('gkit-toast-notification-background', { hidden })}
            style={{ width: computedStyles?.width, height: computedStyles?.height }}
          />
        </Portal>
      )}
    </Fragment>
  );
};
