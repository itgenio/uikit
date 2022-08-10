import './style.less';

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonGroup } from '@itgenio/gkit/button';
import { Modal } from '@itgenio/gkit/modal';

/**
 * Пример показывает, что есть возможность кликнуть на контент, который находится вне дерева модалки
 * Так как в FocusTrap'e указано свойство allowOutsideClick
 */
export const ModalExampleWithContentInPortal = () => {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <div>
      <Button onClick={() => setOpen(o => !o)}>Open</Button>

      <Modal open={open} onClose={() => setOpen(false)} fullScreen>
        <Modal.Header>
          <Modal.Title title="Counter" />
        </Modal.Header>

        <Modal.Body>
          {ReactDOM.createPortal(
            <div className="modal-example-with-content-in-portal">
              <Modal.Text>Count: {count}</Modal.Text>

              <ButtonGroup>
                <Button type="primary" onClick={() => setCount(c => c + 1)}>
                  +
                </Button>

                <Button type="danger" onClick={() => setCount(c => c - 1)}>
                  -
                </Button>
              </ButtonGroup>
            </div>,
            document.body
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};
