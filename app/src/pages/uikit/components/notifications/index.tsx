import React from 'react';
import {
  NotificationContainer,
  NotificationHeader,
  NotificationTitle,
  NotificationContent,
  NotificationText,
  NotificationButtonContainer,
  NotificationButton,
} from '@itgenio/gkit';

export function Notifications() {
  const status = ['#EF4444', '#F97316', '#10B981', '#3380FC'];
  return (
    <div className="notification">
      {status.map((color, index) => {
        return (
          <NotificationContainer key={index} fill={color}>
            <NotificationHeader fill={color}>
              <NotificationTitle>Notification message title</NotificationTitle>
            </NotificationHeader>
            <NotificationContent>
              <NotificationText>
                Повторите попытку через 20 минут или обратитесь в банк, выпустивший карту.
              </NotificationText>
              <NotificationButtonContainer>
                <NotificationButton>Кнопка</NotificationButton>
                <NotificationButton>Кнопка</NotificationButton>
                <NotificationButton>Кнопка</NotificationButton>
              </NotificationButtonContainer>
            </NotificationContent>
          </NotificationContainer>
        );
      })}
    </div>
  );
}

Notifications.displayName = 'Notifications';
