import './style.less';
import React, { Fragment } from 'react';
import { NotificationContainer, NotificationHeader, NotificationContainerProps, Button } from '@itgenio/gkit';

export function Notifications() {
  const types = ['inline', 'toast'] as const;

  const renderState = (state: string, props: NotificationContainerProps, index: number) => {
    return (
      <Fragment key={index}>
        {types.map(type => {
          const p = { ...props, type };
          return (
            <NotificationContainer key={`${state}${type}`} {...p}>
              <NotificationHeader onClose={() => console.log('click')}>
                <h3 className="notification-title-h3">Notification message title</h3>
              </NotificationHeader>
              <div className="notification-content">
                <p className="notification-text">
                  Повторите попытку через 20 минут или обратитесь в банк, выпустивший карту.
                </p>
                <div className="notification-button-container">
                  <Button size="small" type="linkNeutral">
                    Кнопка
                  </Button>
                  <Button size="small" type="linkNeutral">
                    Кнопка
                  </Button>
                  <Button size="small" type="linkNeutral">
                    Кнопка
                  </Button>
                </div>
              </div>
            </NotificationContainer>
          );
        })}
      </Fragment>
    );
  };

  const states: { state: string; props?: NotificationContainerProps }[] = [
    { state: 'Error', props: { status: 'error' } },
    { state: 'Warning', props: { status: 'warning' } },
    { state: 'Success', props: { status: 'success' } },
    { state: 'Info', props: { status: 'info' } },
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
        {states.map(({ state, props = {} }, index) => renderState(state, props, index))}
      </div>
    </div>
  );
}

Notifications.displayName = 'Notifications';
