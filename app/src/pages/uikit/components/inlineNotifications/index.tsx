import './style.less';

import React, { Fragment } from 'react';
import { Button } from '@itgenio/gkit/button';
import { InlineNotification, InlineNotificationProps } from '@itgenio/gkit/inlineNotification';

export function InlineNotifications() {
  const renderState = (state: string, props: InlineNotificationProps, index: number) => {
    return (
      <Fragment>
        <div>{state}</div>

        <InlineNotification key={`${state}${index}`} {...props} onClose={() => console.log('close')}>
          <div className="notification-content">
            <p className="notification-text">
              Повторите попытку через 20 минут или обратитесь в банк, выпустивший карту.
            </p>
            <div className="notification-button-container">
              <Button size="small" type="danger">
                Кнопка
              </Button>
              <Button size="small" type="tertiaryNeutral">
                Кнопка
              </Button>
              <Button size="small" type="tertiaryNeutral">
                Кнопка
              </Button>
            </div>
          </div>
        </InlineNotification>
      </Fragment>
    );
  };

  const states: { state: string; props: InlineNotificationProps }[] = [
    { state: 'Error', props: { variant: 'error', title: 'Notification message title' } },
    { state: 'Warning', props: { variant: 'warning', title: 'Notification message title' } },
    { state: 'Success', props: { variant: 'success', title: 'Notification message title' } },
    { state: 'Info', props: { variant: 'info', title: 'Notification message title' } },
  ];

  return (
    <div className="notification">
      <div className="grid">{states.map(({ state, props }, index) => renderState(state, props, index))}</div>
    </div>
  );
}

InlineNotifications.displayName = 'InlineNotifications';
