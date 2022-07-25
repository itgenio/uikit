import React, { useState } from 'react';
import { Button } from '@itgenio/gkit/button';
import { Modal } from '@itgenio/gkit/modal';

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

        <Modal.Footer className="modal-footer-flex" idQa="modal-footer">
          <Button type="secondary">Ok</Button>

          <Button type="danger">Not OK</Button>
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

      <Modal.Footer className="modal-footer-flex" idQa="modal-footer">
        <Button type="secondary">Ok</Button>

        <Button type="danger">Not OK</Button>
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20rem' }}>
            {['Какой-то', 'длинный', 'текст', 'со', 'скролом'].map((text, index) => (
              <Modal.Text key={index}>{text}</Modal.Text>
            ))}
          </div>
        </Modal.Body>

        <Modal.Footer className="modal-footer-flex" idQa="modal-footer">
          <Button type="secondary">Ok</Button>

          <Button type="danger">Not OK</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
