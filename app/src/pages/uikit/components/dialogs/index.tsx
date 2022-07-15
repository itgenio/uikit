import './style.less';

import React, { useState } from 'react';
import { Button, Dialog } from '@itgenio/gkit';

const DialogExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(o => !o)}>Open</Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <Dialog.Header>
          <Dialog.Title title="Title" />
        </Dialog.Header>

        <Dialog.Body>
          <Dialog.Text>Привет, это диалог! Какой-то длинный текст не помещается на всю ширину строки!</Dialog.Text>
        </Dialog.Body>

        <Dialog.Footer>
          <DialogExample />
        </Dialog.Footer>
      </Dialog>
    </div>
  );
};

export function Dialogs() {
  return (
    <div className="dialogs bg-neutral-50">
      <div className="grid">
        <Dialog asBlock>
          <Dialog.Header>
            <Dialog.Title title="Dialog with footer" />
          </Dialog.Header>

          <Dialog.Footer>
            <div className="flex gap-4 items-start">
              <Button type="secondary">Ok</Button>

              <Button type="danger">Not OK</Button>
            </div>
          </Dialog.Footer>
        </Dialog>

        <Dialog asBlock>
          <Dialog.Header>
            <Dialog.Title title="Dialog with body and footer" />
          </Dialog.Header>

          <Dialog.Body>
            <Dialog.Text>Привет, это диалог! Какой-то длинный текст не помещается на всю ширину строки!</Dialog.Text>
          </Dialog.Body>
        </Dialog>
      </div>

      <DialogExample />
    </div>
  );
}

Dialogs.displayName = 'Dialogs';
