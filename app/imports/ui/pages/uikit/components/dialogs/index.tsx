import './style.less';
import React, { useState } from 'react';
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, DialogText, DialogTitle } from '@itgenio/gkit';

export function Dialogs() {
  const [open, setOpen] = useState(false);

  return (
    <div className="dialogs bg-neutral-50">
      <div className="grid">
        <Dialog asBlock>
          <DialogHeader>
            <DialogTitle title="Dialog with footer" />
          </DialogHeader>

          <DialogFooter>
            <div className="flex gap-4 items-start">
              <Button type="secondary">Ok</Button>

              <Button type="danger">Not OK</Button>
            </div>
          </DialogFooter>
        </Dialog>

        <Dialog asBlock>
          <DialogHeader>
            <DialogTitle title="Dialog with body and footer" />
          </DialogHeader>

          <DialogBody>
            <DialogText>Привет, это диалог! Какой-то длинный текст не помещается на всю ширину строки!</DialogText>
          </DialogBody>
        </Dialog>
      </div>

      <div>
        <Button onClick={() => setOpen(o => !o)}>Open</Button>

        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogHeader>
            <DialogTitle title="Complex" />
          </DialogHeader>

          <DialogBody>
            <DialogText>Привет, это диалог! Какой-то длинный текст не помещается на всю ширину строки!</DialogText>
          </DialogBody>

          <DialogFooter>
            <div className="flex gap-4 items-start">
              <Button type="secondary">Ok</Button>

              <Button type="danger">Not OK</Button>
            </div>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  );
}

Dialogs.displayName = 'Dialogs';
