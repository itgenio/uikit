import './style.less';
import React, { useState } from 'react';
import { Button } from '@itgenio/gkit/button';
import { ToastNotification, NotificationProps } from '@itgenio/gkit/toastNotification';

export type Types =
  | 'primary'
  | 'secondary'
  | 'tertiaryPrimary'
  | 'tertiaryNeutral'
  | 'danger'
  | 'blue'
  | 'green'
  | 'purple'
  | 'orange';

export function ToastNotifications() {
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);

  const content = (
    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorem excepturi ipsum magni obcaecati</div>
  );

  const renderState = (type: Types, props: NotificationProps, index: number) => {
    return (
      <Button
        key={index}
        type={type}
        onClick={() => setNotifications(notifications => [...notifications, { ...props }])}
      >
        {props.title}
      </Button>
    );
  };

  const states: { type: Types; props: NotificationProps }[] = [
    { type: 'green', props: { id: Date.now().toString(), variant: 'success', title: 'Success', content } },
    { type: 'danger', props: { id: Date.now().toString(), variant: 'error', title: 'Error', content } },
    { type: 'orange', props: { id: Date.now().toString(), variant: 'warning', title: 'Warning', content } },
    { type: 'blue', props: { id: Date.now().toString(), variant: 'info', title: 'Info', content } },
  ];

  return (
    <div className="toast-notification">
      {states.map(({ type, props }, index) => renderState(type, props, index))}

      <div className="grid">
        <ToastNotification
          notifications={notifications}
          onClose={(notification: NotificationProps) => {
            setNotifications(notifications => notifications.filter(n => n !== notification));
          }}
        />
      </div>
    </div>
  );
}

ToastNotifications.displayName = 'ToastNotifications';
