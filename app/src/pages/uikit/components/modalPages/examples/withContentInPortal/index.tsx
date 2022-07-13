import './style.less';

import React, { CSSProperties, useState } from 'react';
import ReactDOM from 'react-dom';
import {
  ModalPage,
  ModalPageHeader,
  ModalPageTitle,
  Button,
  ModalPageBody,
  MODAL_PAGE_Z_INDEX,
  ButtonGroup,
  ModalPageText,
} from '@itgenio/gkit';

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
            <div
              className="modal-example-with-content-in-portal"
              style={{ '--modalPageContentZIndex': MODAL_PAGE_Z_INDEX + 1 } as CSSProperties}
            >
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
