import './style.less';
import * as ToastPrimitive from '@radix-ui/react-toast';
import classNames from 'classnames';
import React, { CSSProperties, PropsWithChildren } from 'react';
import { ErrorCircleFilledIcon, DismissIcon } from '../icons';

type ToastPrimitiveProps = Pick<
  ToastPrimitive.ToastProviderProps,
  'duration' | 'label' | 'swipeDirection' | 'swipeThreshold'
>;

type ViewportProps = Pick<ToastPrimitive.ToastViewportProps, 'asChild' | 'hotkey' | 'label'>;

type RootProps = Pick<
  ToastPrimitive.ToastProps,
  | 'asChild'
  | 'type'
  | 'duration'
  | 'defaultOpen'
  | 'open'
  | 'onOpenChange'
  | 'onEscapeKeyDown'
  | 'onSwipeStart'
  | 'onSwipeMove'
  | 'onSwipeEnd'
  | 'forceMount'
>;

type TitleProps = Pick<ToastPrimitive.ToastTitleProps, 'asChild'>;
type CloseProps = Pick<ToastPrimitive.ToastCloseProps, 'asChild'>;

type Variants = 'success' | 'warning' | 'error' | 'info';

type ToastNotificationProps = ToastPrimitiveProps &
  RootProps &
  TitleProps &
  CloseProps &
  ViewportProps &
  PropsWithChildren<{
    idQa?: string;
    title: string;
    variant?: Variants;
    className?: string;
    content: React.ReactNode;
    durationRoot?: number;
  }>;

export const ToastNotification = ({
  children,
  className,
  idQa,
  asChild,
  title,
  variant = 'error',
  duration = 10000000,
  content,
  label,
  swipeDirection,
  swipeThreshold,
  hotkey,
  type,
  durationRoot,
  defaultOpen,
  open,
  onOpenChange,
  onEscapeKeyDown,
  onSwipeStart,
  onSwipeMove,
  onSwipeEnd,
  forceMount,
}: ToastNotificationProps) => {
  const [savedCount, setSavedCount] = React.useState(0);

  return (
    <ToastPrimitive.Provider {...{ duration, label, swipeDirection, swipeThreshold }}>
      <div onClick={() => setSavedCount(count => count + 1)}>{children}</div>

      {Array.from({ length: savedCount }).map((_, index) => {
        const style: CSSProperties = { ['--index' as string]: index };

        return (
          <ToastPrimitive.Root
            key={index}
            style={style}
            id-qa={idQa}
            className={classNames('gkit-toast-notification', className, variant)}
            {...{
              asChild,
              type,
              defaultOpen,
              open,
              onOpenChange,
              onEscapeKeyDown,
              onSwipeStart,
              onSwipeMove,
              onSwipeEnd,
              forceMount,
            }}
            duration={durationRoot}
          >
            <ErrorCircleFilledIcon className="toast-error-circle-icon" />

            <div className="toast-content-wrapper">
              <ToastPrimitive.Title className="toast-title">
                {title}
                <ToastPrimitive.Close onClick={() => setSavedCount(count => count - 1)} className="toast-close">
                  <DismissIcon className="toast-dismiss-icon" />
                </ToastPrimitive.Close>
              </ToastPrimitive.Title>

              {content}
            </div>
          </ToastPrimitive.Root>
        );
      })}
      <ToastPrimitive.Viewport className="toast-viewport" hotkey={hotkey} />
    </ToastPrimitive.Provider>
  );
};
