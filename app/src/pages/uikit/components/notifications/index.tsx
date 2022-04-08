import './style.less';
import React, { Fragment } from 'react';
import {
  NotificationContainer,
  NotificationHeader,
  NotificationTitle,
  NotificationContent,
  NotificationText,
  NotificationButtonContainer,
  NotificationButton,
  NotificationContainerProps,
} from '@itgenio/gkit';

export function Notifications() {
  const types = ['inline', 'toast'] as const;

  const renderState = (state: string, props: NotificationContainerProps) => {
    return (
      <Fragment key={state}>
        {types.map(type => {
          const p = { ...props, type };
          return (
            <div key={`${state}${type}`} className="row">
              <NotificationContainer key={`${state}${type}`} {...p}>
                <NotificationHeader>
                  <NotificationTitle>Notification message title</NotificationTitle>
                </NotificationHeader>
                <NotificationContent>
                  <NotificationText>
                    Повторите попытку через 20 минут или обратитесь в банк, выпустивший карту.
                  </NotificationText>
                  <NotificationButtonContainer>
                    <NotificationButton onClick={() => console.log('click on button1')}>Кнопка</NotificationButton>
                    <NotificationButton onClick={() => console.log('click on button2')}>Кнопка</NotificationButton>
                    <NotificationButton onClick={() => console.log('click on button3')}>Кнопка</NotificationButton>
                  </NotificationButtonContainer>
                </NotificationContent>
              </NotificationContainer>
            </div>
          );
        })}
      </Fragment>
    );
  };

  const states: [string, NotificationContainerProps][] = [
    ['Error', { status: 'error' }],
    ['Warning', { status: 'warning' }],
    ['Success', { status: 'success' }],
    ['Info', { status: 'info' }],
  ];

  return (
    <div className="notification">
      <div className="grid">
        <div>
          <span className="title">Inline</span>
        </div>
        <div>
          <span className="title">Toast</span>
        </div>
        {states.map(([name, status]) => renderState(name, status))}
      </div>
    </div>
  );
}

Notifications.displayName = 'Notifications';
