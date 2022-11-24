import './style.less';
import React, { useState } from 'react';
import { Button, ButtonProps } from '@itgenio/gkit/button';
import { ToastNotification, NotificationProps } from '@itgenio/gkit/toastNotification';

export function ToastNotifications() {
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);

  const content = (
    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorem excepturi ipsum magni obcaecati</div>
  );

  const renderState = ({ type, variant, title }: { type: string; variant: string; title: string }) => {
    return (
      <Button
        key={type}
        type={type}
        onClick={() =>
          setNotifications(notifications => [...notifications, { id: +new Date(), variant, title, content }])
        }
      >
        {title}
      </Button>
    );
  };

  const states: { props?: ButtonProps }[] = [
    { props: { type: 'green', variant: 'success', title: 'Success' } },
    { props: { type: 'danger', variant: 'error', title: 'Error' } },
    { props: { type: 'orange', variant: 'warning', title: 'Warning' } },
    { props: { type: 'blue', variant: 'info', title: 'Info' } },
  ];

  return (
    <div className="toast-notification">
      {states.map(({ props }) => renderState(props))}

      <div className="grid">
        <ToastNotification
          notifications={notifications}
          onClose={notification => {
            setNotifications(notifications => notifications.filter(n => n !== notification));
          }}
        />
      </div>
    </div>
  );
}

ToastNotifications.displayName = 'ToastNotifications';
