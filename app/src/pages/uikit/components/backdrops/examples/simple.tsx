import React, { useState } from 'react';
import { Backdrop } from '@itgenio/gkit/backdrop';
import { Button } from '@itgenio/gkit/button';

export const BackdropExampleDefault = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(o => !o)}>Open</Button>

      {open && <Backdrop onClick={() => setOpen(false)} />}
    </div>
  );
};
export const BackdropExampleIgnoreClickOverlay = () => {
  const [open, setOpen] = useState(false);

  const onClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={() => setOpen(o => !o)}>Open</Button>

      {open && (
        <Backdrop onClick={onClose} ignoreOverlayClick>
          <Button onClick={onClose}>Close</Button>
        </Backdrop>
      )}
    </div>
  );
};
