import './style.less';

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonGroup } from '@itgenio/gkit/button';
import { ModalPage, ModalPageHeader, ModalPageTitle, ModalPageBody, ModalPageText } from '@itgenio/gkit/modalPage';

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

      <ModalPage open={open} onClose={() => setOpen(false)}>
        <ModalPageHeader>
          <ModalPageTitle title="Counter" />
        </ModalPageHeader>

        <ModalPageBody>
          {ReactDOM.createPortal(
            <div className="modal-example-with-content-in-portal">
              <ModalPageText>Count: {count}</ModalPageText>

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
        </ModalPageBody>
      </ModalPage>
    </div>
  );
};
