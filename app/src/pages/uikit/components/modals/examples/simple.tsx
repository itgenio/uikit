import React, { useState } from 'react';
import { Button, Modal } from '@itgenio/gkit';

export const ModalExampleDefault = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(o => !o)}>Open</Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Modal.Header>
          <Modal.Title title="Complex" />
        </Modal.Header>

        <Modal.Body>
          <Modal.Text>Какой-то длинный текст</Modal.Text>
        </Modal.Body>

        <Modal.Footer idQa="modal-footer">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Button type="secondary">Ok</Button>

            <Button type="danger">Not OK</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export const ModalExampleDefaultAsBlock = () => {
  return (
    <Modal asBlock>
      <Modal.Header>
        <Modal.Title title="Complex" />
      </Modal.Header>

      <Modal.Body>
        <Modal.Text>Какой-то длинный текст</Modal.Text>
      </Modal.Body>
    </Modal>
  );
};

export const ModalExampleAsBlockWithFooter = () => {
  return (
    <Modal asBlock idQa="custom-modal-id-qa">
      <Modal.Header idQa="modal-header">
        <Modal.Title title="Modal with footer" idQa="modal-title" />
      </Modal.Header>

      <Modal.Footer idQa="modal-footer">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Button type="secondary">Ok</Button>

          <Button type="danger">Not OK</Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export const ModalExampleDefaultFullScreen = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(o => !o)}>Open</Button>
      <Modal open={open} onClose={() => setOpen(false)} fullScreen>
        <Modal.Header>
          <Modal.Title title="Complex" />
        </Modal.Header>

        <Modal.Body>
          <Modal.Text>Какой-то длинный текст</Modal.Text>
        </Modal.Body>
      </Modal>
    </div>
  );
};
