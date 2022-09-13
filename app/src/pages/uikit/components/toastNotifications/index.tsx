import './style.less';
import React from 'react';
import { Button } from '@itgenio/gkit/button';
import { ToastNotification } from '@itgenio/gkit/toastNotification';

export function ToastNotifications() {
  const [open, setOpen] = React.useState(false);
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const content = (
    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorem excepturi ipsum magni obcaecati</div>
  );

  return (
    <div className="toast-notification">
      <div className="grid">
        <ToastNotification open={open} onOpenChange={setOpen} content={content} title="Lorem ipsum dolor sit amet">
          <Button
            type="danger"
            onClick={() => {
              setOpen(false);
              window.clearTimeout(timerRef.current);
              timerRef.current = window.setTimeout(() => {
                eventDateRef.current = oneWeekAway();
                setOpen(true);
              }, 100);
            }}
          >
            Toast Error
          </Button>
        </ToastNotification>
      </div>
    </div>
  );
}

function oneWeekAway() {
  const now = new Date();
  const inOneWeek = now.setDate(now.getDate() + 7);
  return new Date(inOneWeek);
}

ToastNotifications.displayName = 'ToastNotifications';
