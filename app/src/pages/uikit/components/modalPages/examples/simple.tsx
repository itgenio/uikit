import React, { useState } from 'react';
import { Button } from '@itgenio/gkit/button';
import {
  ModalPage,
  ModalPageHeader,
  ModalPageTitle,
  ModalPageBody,
  ModalPageText,
  ModalPageFooter,
} from '@itgenio/gkit/modalPage';

export const ModalExampleDefault = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(o => !o)}>Open</Button>

      <ModalPage open={open} onClose={() => setOpen(false)}>
        <ModalPageHeader>
          <ModalPageTitle title="Complex" />
        </ModalPageHeader>

        <ModalPageBody>
          <ModalPageText>Какой-то длинный текст</ModalPageText>
        </ModalPageBody>
      </ModalPage>
    </div>
  );
};

export const ModalExampleDefaultAsBlock = () => {
  return (
    <ModalPage asBlock>
      <ModalPageHeader>
        <ModalPageTitle title="Complex" />
      </ModalPageHeader>

      <ModalPageBody>
        <ModalPageText>Какой-то длинный текст</ModalPageText>
      </ModalPageBody>
    </ModalPage>
  );
};

export const ModalExampleAsBlockWithFooter = () => {
  return (
    <ModalPage asBlock idQa="custom-modal-id-qa">
      <ModalPageHeader idQa="modal-header">
        <ModalPageTitle title="ModalPage with footer" idQa="modal-title" />
      </ModalPageHeader>

      <ModalPageFooter idQa="modal-footer">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <Button type="secondary">Ok</Button>

          <Button type="danger">Not OK</Button>
        </div>
      </ModalPageFooter>
    </ModalPage>
  );
};
